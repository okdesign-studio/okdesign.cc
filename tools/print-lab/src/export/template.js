// Downloadable templates, generated from the same die as the 3D model. Sizes are 1:1 in mm.
// Two-sided pieces get two templates: the outside (print side A) and the inside (print side B).
// The inside one is mirrored, exactly as that side of the sheet goes to press, so it is drawn
// the way it looks and becomes page 2 of the print PDF. Each panel carries an arrow that points
// to the top of its artwork once the piece is folded.

import { fmt } from '../core/geom.js';

const MARGIN = 18; // space around the bleed for the legend

const LAYERS = {
  bleed: { label: 'Bleed', stroke: '#16d67b' },
  cut: { label: 'Cut', stroke: '#ff2d87' },
  fold: { label: 'Fold (valley)', stroke: '#16a7ff' },
  mountain: { label: 'Fold (mountain)', stroke: '#ffb020' },
  perf: { label: 'Perforation / kiss cut', stroke: '#8a4dff' },
  safe: { label: 'Safe zone', stroke: '#9aa0a6' },
};

const SIDE_LABEL = {
  front: 'OUTSIDE, print side A (page 1 of the print PDF)',
  back: 'INSIDE, print side B, mirrored as it prints (page 2 of the print PDF)',
};

function title(job) {
  return `${job.format.name} / ${job.size.label}`.replace(/[^\x20-\x7e×→]/g, '');
}

function safeRects(die) {
  const out = [];
  for (const p of die.panels) {
    if (p.role !== 'main' || p.area < 300) continue;
    const b = p.bounds;
    const m = die.safe;
    if (b.w < m * 3 || b.h < m * 3) continue;
    out.push([b.x0 + m, b.y0 + m, b.w - 2 * m, b.h - 2 * m]);
  }
  return out;
}

// Geometry of one side in file space: the inside is the outside flipped left to right.
function sideGeo(die, side) {
  const back = side === 'back';
  const mx = (x) => (back ? die.w - x : x);
  const pt = (q) => [mx(q[0]), q[1]];
  const seg = (a, b) => [pt(a), pt(b)];
  const rect = ([x, y, w, h]) => (back ? [die.w - x - w, y, w, h] : [x, y, w, h]);
  return { back, mx, pt, seg, rect };
}

// Panels that get a name and an arrow, with their reading rotation (degrees clockwise).
function markedPanels(die, side, orient) {
  return die.panels
    .filter((p) => p.role !== 'leaf' && p.role !== 'hidden' && Math.min(p.bounds.w, p.bounds.h) > 8)
    .map((p) => ({
      p,
      name: (side === 'back' ? p.nameIn || p.name : p.name) || p.id,
      rot: orient?.[p.id]?.[side] ?? null,
      arrow: !!orient && p.role === 'main' && Math.min(p.bounds.w, p.bounds.h) > 16,
      // Bigger panels get a bigger mark, so it stays readable on a box lid.
      k: Math.max(1, Math.min(3.2, Math.min(p.bounds.w, p.bounds.h) / 48)),
    }));
}

export function templateSVG(job, { side = 'front', orient = null } = {}) {
  const { die } = job;
  const g = sideGeo(die, side);
  const b = die.bleed;
  const W = die.w + 2 * b + 2 * MARGIN;
  const H = die.h + 2 * b + 2 * MARGIN + 8;
  const o = MARGIN + b;
  const L = LAYERS;
  const line = ([a, c]) => `<line x1="${fmt2(a[0])}" y1="${fmt2(a[1])}" x2="${fmt2(c[0])}" y2="${fmt2(c[1])}"/>`;
  const glue = die.panels
    .filter((p) => p.role === 'glue')
    .map((p) => `<polygon points="${p.poly.map((q) => g.pt(q)).map((q) => `${fmt2(q[0])},${fmt2(q[1])}`).join(' ')}"/>`)
    .join('');
  const labels = markedPanels(die, side, orient)
    .map(({ p, name, rot, arrow, k }) => {
      const [cx, cy] = g.pt(p.centroid);
      const r = rot ?? 0;
      const tri = arrow ? `<path d="M0 -8.2 L2.6 -4.4 L-2.6 -4.4 Z" fill="#0051ff"/><text y="-9.6" font-size="2.4">TOP</text>` : '';
      return `<g transform="translate(${fmt2(cx)} ${fmt2(cy)}) rotate(${r}) scale(${fmt2(k)})">${tri}<text y="1.2">${esc(name)}</text></g>`;
    })
    .join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${fmt2(W)}mm" height="${fmt2(H)}mm" viewBox="0 0 ${fmt2(W)} ${fmt2(H)}">
<title>${esc(title(job))} / ${side === 'back' ? 'inside' : 'outside'}</title>
<desc>OK Design print template, ${esc(SIDE_LABEL[side])}. Sheet ${fmt(die.w)} x ${fmt(die.h)} mm, bleed ${fmt(b)} mm. All units in mm, scale 1:1. Arrows point to the top of each panel once folded. Hide these layers before export.</desc>
<g transform="translate(${o} ${o})" fill="none" stroke-width="0.25">
<g id="BLEED" stroke="${L.bleed.stroke}"><rect x="${-b}" y="${-b}" width="${fmt2(die.w + 2 * b)}" height="${fmt2(die.h + 2 * b)}"/></g>
<g id="GLUE" fill="#0051ff" fill-opacity="0.1" stroke="none">${glue}</g>
<g id="SAFE" stroke="${L.safe.stroke}" stroke-dasharray="1 1">${safeRects(die).map((r) => g.rect(r)).map((r) => `<rect x="${fmt2(r[0])}" y="${fmt2(r[1])}" width="${fmt2(r[2])}" height="${fmt2(r[3])}"/>`).join('')}</g>
<g id="CUT" stroke="${L.cut.stroke}">${die.cuts.map((c) => line(g.seg(c[0], c[1]))).join('')}</g>
<g id="FOLD" stroke="${L.fold.stroke}" stroke-dasharray="3 2">${die.creases.filter((c) => !c.mountain).map((c) => line(g.seg(c.a, c.b))).join('')}</g>
<g id="FOLD-MOUNTAIN" stroke="${L.mountain.stroke}" stroke-dasharray="3 1 1 1">${die.creases.filter((c) => c.mountain).map((c) => line(g.seg(c.a, c.b))).join('')}</g>
<g id="PERFORATION" stroke="${L.perf.stroke}" stroke-dasharray="1 1">${[...die.perfs, ...die.kiss].map((c) => line(g.seg(c.a, c.b))).join('')}</g>
<g id="LABELS" fill="#0051ff" stroke="none" font-family="Helvetica, Arial, sans-serif" font-size="3.2" text-anchor="middle">${labels}</g>
</g>
<g id="LEGEND" font-family="Helvetica, Arial, sans-serif" font-size="2.8" fill="#333">
<text x="${MARGIN}" y="${MARGIN - 7}" font-size="3.4" font-weight="bold">${esc(SIDE_LABEL[side])}</text>
<text x="${MARGIN}" y="${H - 10}">${esc(title(job))}  |  sheet ${fmt(die.w)} x ${fmt(die.h)} mm  |  bleed ${fmt(b)} mm  |  safe ${fmt(die.safe)} mm</text>
<text x="${MARGIN}" y="${H - 6}">pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone, blue arrow = top of the panel</text>
</g>
</svg>`;
}

const fmt2 = (n) => String(Math.round(n * 1000) / 1000);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// A small hand-written PDF: vector lines, standard Helvetica, correct trim and bleed boxes.
export function templatePDF(job, { side = 'front', orient = null } = {}) {
  const { die } = job;
  const g = sideGeo(die, side);
  const b = die.bleed;
  const mm = 72 / 25.4;
  const Wmm = die.w + 2 * b + 2 * MARGIN;
  const Hmm = die.h + 2 * b + 2 * MARGIN + 8;
  const o = MARGIN + b;
  const X = (x) => ((x + o) * mm).toFixed(3);
  const Y = (y) => ((Hmm - (y + o)) * mm).toFixed(3);
  const rgb = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return `${((n >> 16 & 255) / 255).toFixed(3)} ${((n >> 8 & 255) / 255).toFixed(3)} ${((n & 255) / 255).toFixed(3)}`;
  };
  const ascii = (s) => String(s).replace(/×/g, 'x').replace(/→/g, '>').replace(/[^\x20-\x7e]/g, '').replace(/([()\\])/g, '\\$1');
  const c = [];
  const stroke = (color, dash, list) => {
    if (!list.length) return;
    c.push(`q ${rgb(color)} RG 0.6 w [${dash}] 0 d`);
    for (const [p, q] of list) c.push(`${X(p[0])} ${Y(p[1])} m ${X(q[0])} ${Y(q[1])} l S`);
    c.push('Q');
  };
  const L = LAYERS;
  const rectLines = (x, y, w, h) => [
    [[x, y], [x + w, y]],
    [[x + w, y], [x + w, y + h]],
    [[x + w, y + h], [x, y + h]],
    [[x, y + h], [x, y]],
  ];
  stroke(L.bleed.stroke, '', rectLines(-b, -b, die.w + 2 * b, die.h + 2 * b));
  stroke(L.safe.stroke, '2 2', safeRects(die).flatMap((r) => rectLines(...g.rect(r))));
  stroke(L.cut.stroke, '', die.cuts.map((s) => g.seg(s[0], s[1])));
  stroke(L.fold.stroke, '8 5', die.creases.filter((s) => !s.mountain).map((s) => g.seg(s.a, s.b)));
  stroke(L.mountain.stroke, '8 3 2 3', die.creases.filter((s) => s.mountain).map((s) => g.seg(s.a, s.b)));
  stroke(L.perf.stroke, '2 2', [...die.perfs, ...die.kiss].map((s) => g.seg(s.a, s.b)));
  const text = (x, y, size, str, color = '#333333') => {
    c.push(`BT /F1 ${size} Tf ${rgb(color)} rg ${x.toFixed(2)} ${y.toFixed(2)} Td (${ascii(str)}) Tj ET`);
  };
  // Text and arrow turned to the panel's reading direction (r degrees clockwise on the page).
  const turned = (cx, cy, r, u, v) => {
    const a = (r * Math.PI) / 180;
    return [cx + u * Math.cos(a) - v * Math.sin(a), cy + u * Math.sin(a) + v * Math.cos(a)];
  };
  const rotText = (cx, cy, r, v, size, str, color) => {
    // v and size arrive already scaled by the caller.
    const a = (r * Math.PI) / 180;
    const wmm = (ascii(str).length * size * 0.5) / mm;
    const [x, y] = turned(cx, cy, r, -wmm / 2, v);
    const cs = Math.cos(a).toFixed(4);
    const sn = Math.sin(a).toFixed(4);
    c.push(`BT /F1 ${size} Tf ${rgb(color)} rg ${cs} ${(-sn).toString()} ${sn} ${cs} ${X(x)} ${Y(y)} Tm (${ascii(str)}) Tj ET`.replace('--', ''));
  };
  for (const { p, name, rot, arrow, k } of markedPanels(die, side, orient)) {
    const [cx, cy] = g.pt(p.centroid);
    const r = rot ?? 0;
    rotText(cx, cy, r, 1.2 * k, 9 * k, name, '#0051ff');
    if (arrow) {
      const t = [turned(cx, cy, r, 0, -8.2 * k), turned(cx, cy, r, 2.6 * k, -4.4 * k), turned(cx, cy, r, -2.6 * k, -4.4 * k)];
      c.push(`q ${rgb('#0051ff')} rg ${X(t[0][0])} ${Y(t[0][1])} m ${X(t[1][0])} ${Y(t[1][1])} l ${X(t[2][0])} ${Y(t[2][1])} l f Q`);
      rotText(cx, cy, r, -9.6 * k, 7 * k, 'TOP', '#0051ff');
    }
  }
  text(MARGIN * mm, (Hmm - MARGIN + 7) * mm, 9.5, SIDE_LABEL[side], '#111111');
  text(MARGIN * mm, 7.5 * mm, 8, `${title(job)}  |  sheet ${fmt(die.w)} x ${fmt(die.h)} mm  |  bleed ${fmt(b)} mm  |  safe ${fmt(die.safe)} mm`);
  text(MARGIN * mm, 3.6 * mm, 7, 'pink cut, blue fold, amber mountain fold, violet perforation, green bleed, grey safe zone, blue arrow = top of the panel', '#666666');
  const stream = c.join('\n');
  const box = (x0, y0, x1, y1) => `[${[X(x0), Y(y1), X(x1), Y(y0)].join(' ')}]`;
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${(Wmm * mm).toFixed(3)} ${(Hmm * mm).toFixed(3)}] /TrimBox ${box(0, 0, die.w, die.h)} /BleedBox ${box(-b, -b, die.w + b, die.h + b)} /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    `<< /Title (${ascii(title(job))} ${side === 'back' ? 'inside' : 'outside'}) /Producer (OK Design Print Lab) >>`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o2, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o2}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info 6 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return pdf;
}

// Small inline drawing of the die, used on the catalogue cards.
export function dieThumb(die) {
  const pad = Math.max(die.w, die.h) * 0.03;
  const vb = `${-pad} ${-pad} ${die.w + 2 * pad} ${die.h + 2 * pad}`;
  const seg = (a, c) => `M${r1(a[0])} ${r1(a[1])}L${r1(c[0])} ${r1(c[1])}`;
  const cut = die.cuts.map((c) => seg(c[0], c[1])).join('');
  const fold = die.creases.map((c) => seg(c.a, c.b)).join('');
  return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path class="c" d="${cut}"/><path class="f" d="${fold}"/></svg>`;
}
const r1 = (n) => Math.round(n * 10) / 10;

export function download(name, data, type) {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
