// Loading a designer's file. Everything happens in the browser: nothing is uploaded anywhere.
// PDF pages keep their physical size, which is what makes automatic placement reliable.

const PT = 25.4 / 72;
export const PDF_LIMIT = 40;

import { scriptBase } from '../util/base.js';

function loadScript(src) {
  return new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = ok;
    s.onerror = () => fail(new Error(`Could not load ${src}`));
    document.head.appendChild(s);
  });
}

let pdfReady = null;
function pdfjs() {
  if (pdfReady) return pdfReady;
  const base = scriptBase();
  pdfReady = (async () => {
    await loadScript(`${base}vendor/pdf.min.js`);
    const lib = window.pdfjsLib;
    if (location.protocol === 'file:') {
      // Browsers refuse workers from file://, so pdf.js runs on the main thread there.
      await loadScript(`${base}vendor/pdf.worker.min.js`);
    } else {
      lib.GlobalWorkerOptions.workerSrc = `${base}vendor/pdf.worker.min.js`;
    }
    return lib;
  })();
  return pdfReady;
}

// TrimBox is not exposed by pdf.js. Print exports usually keep it in plain text.
function findTrimBox(bytes) {
  const head = bytes.length > 4e6 ? bytes.subarray(0, 4e6) : bytes;
  const text = new TextDecoder('latin1').decode(head);
  const m = /\/TrimBox\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*\]/.exec(text);
  if (!m) return null;
  const [x0, y0, x1, y1] = m.slice(1).map(Number);
  return { x0, y0, x1, y1 };
}

function imagePage(bitmap, name) {
  return { source: bitmap, w: bitmap.width, h: bitmap.height, mmW: null, mmH: null, name };
}

async function fromImage(file) {
  const isSvg = /svg/.test(file.type) || /\.svg$/i.test(file.name);
  if (isSvg) {
    const text = await file.text();
    const url = URL.createObjectURL(new Blob([text], { type: 'image/svg+xml' }));
    const img = new Image();
    await new Promise((ok, fail) => {
      img.onload = ok;
      img.onerror = () => fail(new Error('This SVG could not be read.'));
      img.src = url;
    });
    const k = 3000 / Math.max(img.naturalWidth || 1000, img.naturalHeight || 1000);
    const c = document.createElement('canvas');
    c.width = Math.round((img.naturalWidth || 1000) * k);
    c.height = Math.round((img.naturalHeight || 1000) * k);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url);
    const m = /<svg[^>]*\swidth="([\d.]+)mm"[^>]*\sheight="([\d.]+)mm"/.exec(text);
    const page = imagePage(c, file.name);
    if (m) {
      page.mmW = +m[1];
      page.mmH = +m[2];
    }
    return { kind: 'svg', name: file.name, pages: [page] };
  }
  const bmp = await createImageBitmap(file);
  return { kind: 'image', name: file.name, pages: [imagePage(bmp, file.name)] };
}

async function fromPdf(file, { maxSide = 4096, onProgress } = {}) {
  const lib = await pdfjs();
  const bytes = new Uint8Array(await file.arrayBuffer());
  const trim = findTrimBox(bytes);
  const doc = await lib.getDocument({ data: bytes.slice() }).promise;
  const pages = [];
  const count = Math.min(doc.numPages, PDF_LIMIT);
  for (let i = 1; i <= count; i++) {
    const page = await doc.getPage(i);
    const vp1 = page.getViewport({ scale: 1 });
    const limit = i <= 2 || i === count ? maxSide : Math.min(maxSide, 1800);
    const scale = Math.min(limit / Math.max(vp1.width, vp1.height), 300 / 72);
    const vp = page.getViewport({ scale });
    const c = document.createElement('canvas');
    c.width = Math.ceil(vp.width);
    c.height = Math.ceil(vp.height);
    await page.render({ canvasContext: c.getContext('2d'), viewport: vp, background: 'rgb(255,255,255)' }).promise;
    const info = { source: c, w: c.width, h: c.height, mmW: vp1.width * PT, mmH: vp1.height * PT, name: `${file.name} p.${i}` };
    if (trim) {
      // Offset of the trim box from the page centre, in mm, so crop marks stay out of the way.
      const [mx0, my0, mx1, my1] = page.view;
      info.trim = {
        w: (trim.x1 - trim.x0) * PT,
        h: (trim.y1 - trim.y0) * PT,
        cx: (((trim.x0 + trim.x1) / 2 - (mx0 + mx1) / 2) * PT),
        cy: (((trim.y0 + trim.y1) / 2 - (my0 + my1) / 2) * PT),
      };
    }
    pages.push(info);
    onProgress?.(i, count);
  }
  return { kind: 'pdf', name: file.name, pages, total: doc.numPages };
}

export async function loadArtwork(file, opts) {
  if (/pdf/.test(file.type) || /\.pdf$/i.test(file.name)) return fromPdf(file, opts);
  if (/^image\//.test(file.type) || /\.(png|jpe?g|webp|svg|gif|avif)$/i.test(file.name)) return fromImage(file);
  throw new Error(`${file.name} is not a PDF or image.`);
}
