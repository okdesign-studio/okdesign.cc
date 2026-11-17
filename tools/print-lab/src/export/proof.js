// A proof is one self-contained HTML file: the viewer, the format and the baked artwork.
// No server, no account. It can be mailed as an attachment or dropped into a folder on the site.

const MAX_SIDE = 3000;
const MAX_PAGES = 16;

import { scriptBase } from '../util/base.js';

function loadRuntime() {
  if (window.__OK_RUNTIME) return Promise.resolve();
  return new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = `${scriptBase()}viewer.runtime.js`;
    s.onload = ok;
    s.onerror = () => fail(new Error('The proof runtime could not be loaded.'));
    document.head.appendChild(s);
  });
}

export function bakeCanvas(surface, side, maxSide = MAX_SIDE) {
  const fn = surface.art[side];
  if (!fn) return null;
  const { ext } = surface;
  const k = Math.min(maxSide / Math.max(ext.w, ext.h), surface.pxPerMm);
  const c = document.createElement('canvas');
  c.width = Math.round(ext.w * k);
  c.height = Math.round(ext.h * k);
  const x = c.getContext('2d');
  x.fillStyle = side === 'back' && surface.stock.inside ? surface.stock.inside : surface.stock.color;
  x.fillRect(0, 0, c.width, c.height);
  fn(x, k, ext, side);
  return c;
}

function bake(surface, side) {
  return bakeCanvas(surface, side)?.toDataURL('image/jpeg', 0.88) ?? null;
}

const safeJSON = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

export async function buildProof(studio, meta = {}) {
  await loadRuntime();
  const { surface, s, art, job } = studio;
  const pages = {};
  if (art.pagesMap) {
    let i = 0;
    for (const [n, src] of art.pagesMap) {
      if (i++ >= MAX_PAGES) break;
      const c = document.createElement('canvas');
      const k = Math.min(1, 1100 / Math.max(src.width, src.height));
      c.width = Math.round(src.width * k);
      c.height = Math.round(src.height * k);
      c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
      pages[n] = c.toDataURL('image/jpeg', 0.84);
    }
  }
  const data = {
    v: 1,
    id: s.id,
    size: s.size,
    stock: s.stock,
    finish: s.finish,
    pages: s.pages,
    client: meta.client || '',
    project: meta.project || job.format.name,
    version: meta.version || 'v1',
    note: meta.note || '',
    date: new Date().toISOString().slice(0, 10),
    email: 'hello@okdesign.cc',
    art: { front: bake(surface, 'front'), back: bake(surface, 'back') },
    bookPages: pages,
  };
  const title = `${data.project} ${data.version} — Proof by OK Design`.replace(/</g, '');
  const runtime = window.__OK_RUNTIME.replace(/<\/script/gi, '<\\/script');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..800&family=Outfit:wght@300..800&display=swap" rel="stylesheet">
<style>${window.__OK_RUNTIME_CSS}</style>
</head>
<body class="pl-proof-page">
<div id="plProof"></div>
<script>window.__OK_PROOF__=${safeJSON(data)};</script>
<script>${runtime}</script>
</body>
</html>`;
}
