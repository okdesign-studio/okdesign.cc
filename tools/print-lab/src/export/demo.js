// A published demo: one folder per client link, /demo/<name>/.
//   index.html   the page the client opens (tiny: meta tags + data + the shared /viewer/ engine)
//   demo.json    the same data, read back by the studio for its list and for editing
//   outside.jpg / inside.jpg / page-N.jpg   the artwork baked onto the sheet
//   og.jpg       the link preview in messengers and mail
//   anything attached for download (a PDF proof, say)
// Templates in the catalogue are never touched: a demo only refers to a format by its id.

import { bakeCanvas } from './proof.js';
import { SITE, demoUrl } from './publish.js';

const ART_SIDE = 3600; // px on the long side of the sheet, plenty for a screen
const PAGE_SIDE = 1400;
const MAX_PAGES = 24;

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const safeJSON = (o) => JSON.stringify(o, null, 2).replace(/</g, '\\u003c');

const toBlob = (canvas, q = 0.88) => new Promise((ok) => canvas.toBlob((b) => ok(b), 'image/jpeg', q));

// Attachment names stay readable but safe in a URL.
export function fileName(name) {
  const m = /^(.*?)(\.[a-z0-9]{1,5})?$/i.exec(String(name || 'file'));
  const base = (m[1] || 'file').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'file';
  return `${base}${(m[2] || '').toLowerCase()}`;
}

// The link preview: the model as it is on screen, closed, without guides.
export async function captureOg(studio) {
  const { stage, s } = studio;
  const prevState = stage.state === 'custom' ? 'closed' : stage.state;
  const overlays = { ...s.overlays };
  Object.assign(s.overlays, { lines: false, bleed: false, safe: false, labels: false });
  studio._syncOverlays();
  stage.go('closed', { instant: true });
  const src = stage.capture();
  const W = 1200;
  const H = 630;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#1b1c20');
  g.addColorStop(1, '#0d0d0f');
  x.fillStyle = g;
  x.fillRect(0, 0, W, H);
  const k = Math.max(W / src.width, H / src.height);
  const w = src.width * k;
  const h = src.height * k;
  x.drawImage(src, (W - w) / 2, (H - h) / 2, w, h);
  Object.assign(s.overlays, overlays);
  studio._syncOverlays();
  stage.go(prevState, { instant: true });
  return toBlob(c, 0.86);
}

export function demoHTML(data) {
  const url = demoUrl(data.slug);
  const sh = data.share || {};
  const title = data.project || 'Design preview';
  const desc = sh.description || data.note || `${title}, a 3D preview by OK Design.`;
  const pageTitle = sh.title || `${title} · OK Design`;
  const ogTitle = sh.ogTitle || title;
  const ogDesc = sh.ogDescription || desc;
  const page = { ...data };
  delete page.files;
  delete page.client; // the client's name is for the studio list, the page does not need it
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(ogDesc)}">
<meta property="og:image" content="${esc(url)}og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="/assets/images/logo/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..800&family=Outfit:wght@300..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/viewer/viewer.css">
</head>
<body class="pl-proof-page">
<div id="plProof"></div>
<!-- Published from the OK Design studio (okdesign.cc/studio/). Edit it there, not by hand. -->
<script>window.__OK_PROOF__ = ${safeJSON(page)};</script>
<script src="/viewer/viewer.js"></script>
</body>
</html>
`;
}

// Everything that goes into the folder. `form`: slug, project, client, meta, note, links
// ([{ label, href } | { label, file }]). `prev`: the demo.json being updated, if any.
export async function buildDemo(studio, form, prev = null) {
  const { surface, art, job, s } = studio;
  const files = [];
  const keep = [];
  const now = new Date().toISOString();

  const sides = {};
  for (const [side, name] of [['front', 'outside.jpg'], ['back', 'inside.jpg']]) {
    const c = bakeCanvas(surface, side, ART_SIDE);
    if (!c) continue;
    files.push({ name, content: await toBlob(c) });
    sides[side] = name;
  }
  if (!sides.front && !sides.back) throw new Error('Сначала добавь макет на вкладке «Макет».');

  const pages = {};
  if (art.pagesMap) {
    let i = 0;
    for (const [n, src] of art.pagesMap) {
      if (i++ >= MAX_PAGES) break;
      const k = Math.min(1, PAGE_SIDE / Math.max(src.width, src.height));
      const c = document.createElement('canvas');
      c.width = Math.round(src.width * k);
      c.height = Math.round(src.height * k);
      c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
      const name = `page-${n}.jpg`;
      files.push({ name, content: await toBlob(c, 0.85) });
      pages[n] = name;
    }
  }

  files.push({ name: 'og.jpg', content: await captureOg(studio) });

  const links = [];
  for (const l of form.links || []) {
    if (!l.label) continue;
    if (l.file) {
      const name = fileName(l.file.name);
      files.push({ name, content: l.file });
      links.push({ label: l.label, href: name, download: true });
    } else if (l.href) {
      const local = !/^[a-z]+:|^\//i.test(l.href);
      if (local) keep.push(l.href);
      links.push({ label: l.label, href: l.href, ...(local || l.download ? { download: true } : {}) });
    }
  }
  if (prev?.sticker?.src) keep.push(prev.sticker.src);

  const data = {
    v: 1,
    slug: form.slug,
    id: s.id,
    size: s.size,
    stock: s.stock,
    finish: s.finish,
    ...(s.pages ? { pages: s.pages } : {}),
    project: form.project || job.format.name,
    client: form.client || '',
    meta: form.meta || '',
    note: form.note || '',
    version: form.version || prev?.version || 'v1',
    date: now.slice(0, 10),
    email: 'hello@okdesign.cc',
    art: { front: sides.front || null, back: sides.back || null },
    bookPages: pages,
    links,
    ...(prev?.sticker ? { sticker: prev.sticker } : {}),
    ...(form.card === 'credit' ? { card: 'credit' } : {}),
    ...(() => {
      const share = { ...(prev?.share || {}) };
      if (form.share !== undefined) {
        if (form.share) Object.assign(share, { description: form.share, ogDescription: form.share });
        else {
          delete share.description;
          delete share.ogDescription;
        }
      }
      return Object.keys(share).length ? { share } : {};
    })(),
    format: { name: job.format.name, size: job.size.label },
    created: prev?.created || now,
    updated: now,
  };
  files.push({ name: 'demo.json', content: `${JSON.stringify(data, null, 2)}\n` });
  files.push({ name: 'index.html', content: demoHTML(data) });
  return { files, data, keep, url: demoUrl(form.slug), folder: `${SITE.folder}/${form.slug}/` };
}
