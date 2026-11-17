// Single sheets: no folds, but shape, corners, holes and thickness still matter.

import { Die } from '../core/die.js';
import { circle, ellipse, fillet, rect } from '../core/geom.js';

const flatPose = { fold: 'keep', open: 'keep' };
const flatView = { closed: { az: -30, el: 34 } };
const noOpen = { noOpen: true };

export function sheet({ w, h, r = 0, holes = [], shape, bleed = 3, safe = 3, stack = 6, name = 'Front', nameIn = 'Back' }) {
  const d = new Die({ bleed, safe, pose: flatPose, view: flatView, meta: noOpen });
  let poly = rect(0, 0, w, h);
  if (shape === 'circle') poly = circle(w / 2, h / 2, w / 2, 96);
  else if (shape === 'ellipse') poly = ellipse(w / 2, h / 2, w / 2, h / 2, 96);
  else if (shape === 'arch') {
    const pts = [];
    for (let i = 0; i <= 28; i++) {
      const a = Math.PI + (i / 28) * Math.PI;
      pts.push([w / 2 + Math.cos(a) * (w / 2), w / 2 + Math.sin(a) * (w / 2)]);
    }
    poly = [...pts, [w, h], [0, h]];
  } else if (r) poly = fillet(poly, r, 8);
  d.rootPoly('sheet', poly, { name, nameIn, holes, cover: true, edges: d.rectEdges(0, 0, w, h) });
  if (stack) d.extra({ type: 'stack', count: stack, spread: Math.min(w, h) * 0.012 });
  return d.finish();
}

export function hangTag({ w, h, chamfer = 9 }) {
  const c = chamfer;
  const poly = [[c, 0], [w - c, 0], [w, c], [w, h], [0, h], [0, c]];
  const d = new Die({ bleed: 3, safe: 3, pose: flatPose, view: flatView, meta: noOpen });
  d.rootPoly('sheet', poly, {
    name: 'Front',
    nameIn: 'Back',
    holes: [circle(w / 2, 9, 2.5, 28)],
    cover: true,
  });
  d.extra({ type: 'string', at: [w / 2, 9], len: h * 0.9 });
  d.extra({ type: 'stack', count: 3, spread: 1.4 });
  return d.finish();
}

export function doorHanger({ w, h }) {
  const R = 19;
  const cx = w / 2;
  const cy = 30;
  // The hole opens to the top edge through a slit, so the hanger slips over a handle.
  const start = -0.25;
  const steps = 42;
  const slitX = cx + R * 1.28;
  const pts = [[0, 0], [slitX - 1, 0], [cx + Math.cos(start) * R, cy + Math.sin(start) * R]];
  for (let i = 1; i <= steps; i++) {
    const t = start - (i / steps) * (Math.PI * 2 - 0.5);
    pts.push([cx + Math.cos(t) * R, cy + Math.sin(t) * R]);
  }
  pts.push([slitX + 3, 0], [w, 0], [w, h], [0, h]);
  const d = new Die({ bleed: 3, safe: 4, pose: flatPose, view: flatView, meta: noOpen });
  d.rootPoly('sheet', pts, { name: 'Front', nameIn: 'Back', cover: true });
  d.extra({ type: 'stack', count: 4, spread: 1.6 });
  return d.finish();
}

export function ticket({ w, h, stub = 40 }) {
  const d = new Die({ bleed: 3, safe: 3, pose: flatPose, view: { ...flatView, open: { az: -30, el: 34 } } });
  d.root('sheet', 0, 0, w - stub, h, { name: 'Ticket', nameIn: 'Back', cover: true });
  d.add('sheet', 'right', 'stub', { d: stub, angle: 0, open: 14, seq: 1, name: 'Stub', nameIn: 'Stub back', bead: false });
  d.perf([w - stub, 0], [w - stub, h]);
  d.byId.stub.perfed = true;
  d.extra({ type: 'stack', count: 4, spread: 1.4 });
  return d.finish();
}

// Stickers on a backing sheet. The kiss cut goes through the sticker only, never through the liner.
export function stickerSheet({ w, h, cols, rows, d: dia }) {
  const d = new Die({ bleed: 2, safe: 2, pose: flatPose, view: flatView, sides: 1, meta: noOpen });
  d.root('sheet', 0, 0, w, h, { name: 'Sticker sheet', nameIn: 'Liner', cover: true });
  const gx = (w - cols * dia) / (cols + 1);
  const gy = (h - rows * dia) / (rows + 1);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const pts = circle(gx + dia / 2 + c * (dia + gx), gy + dia / 2 + r * (dia + gy), dia / 2, 40);
      pts.forEach((p, i) => d.perf(p, pts[(i + 1) % pts.length], 'kiss'));
    }
  }
  d.extra({ type: 'stack', count: 3, spread: 2 });
  return d.finish();
}

// Conference badge with a lanyard slot.
export function badge({ w, h }) {
  const sx = w / 2 - 8;
  const slot = [[sx, 8], [sx + 16, 8], [sx + 16, 12], [sx, 12]];
  const d = new Die({ bleed: 3, safe: 4, pose: flatPose, view: flatView, meta: noOpen });
  d.rootPoly('sheet', fillet(rect(0, 0, w, h), 4, 6), { name: 'Front', nameIn: 'Back', cover: true, holes: [slot] });
  d.extra({ type: 'stack', count: 3, spread: 1.5 });
  return d.finish();
}
