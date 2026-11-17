// Bound products: everything with pages. Sheets are nested or stacked; each leaf is a joint on the
// spine, which makes page turns the same operation as a fold.

import * as THREE from 'three';
import { Die } from '../core/die.js';
import { circle } from '../core/geom.js';

const MAX_DRAWN = 7;

// Saddle stitched: nested folded sheets and two staples.
export function saddleBook({ w, h, pages = 16, t = 0.12, coverT }) {
  const sheets = Math.max(1, Math.ceil(pages / 4)); // including the cover
  const inner = sheets - 1;
  const drawn = Math.min(inner, MAX_DRAWN);
  const pageT = (inner * t) / Math.max(1, drawn);
  const ct = coverT ?? t;
  const T = drawn * 2 * pageT + 2 * ct;
  const pivotZ = -T / 2;
  const d = new Die({
    bleed: 3,
    safe: 8,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -26, el: 34 }, open: { az: -14, el: 40 } },
    meta: { book: { pages, kind: 'saddle' } },
  });
  d.root('back', 0, 0, w, h, { name: 'Back cover', nameIn: 'Inside back cover' });
  d.add('back', 'right', 'front', {
    d: w,
    angle: 179.6,
    seq: 1,
    open: 5,
    name: 'Front cover',
    nameIn: 'Inside front cover',
    cover: true,
  });
  d.byId.front.pivotZ = pivotZ;
  // Inner sheets sit below the cover in the stack, one layer each.
  const hingeA = [w, 0];
  const hingeB = [w, h];
  for (let i = 0; i < drawn; i++) {
    const z = ct + i * pageT;
    const pR = 2 * (i + 1) + 1;
    d.leaf('back', `l${i}`, w, 0, w, h, {
      hinge: { a: hingeA, b: hingeB },
      zOff: z,
      pivotZ,
      angle: 179.7,
      // Open at the centre spread, with the top page caught mid-turn.
      open: i === drawn - 1 ? 62 : 6 + i * 1.2,
      seq: 1,
      pageFront: pR,
      pageBack: pR + 1,
      valley: true,
      bead: false,
    });
    d.leaf('back', `r${i}`, 0, 0, w, h, {
      hinge: { a: hingeA, b: hingeB },
      zOff: z,
      pivotZ,
      angle: 0,
      open: 0,
      seq: 1,
      pageFront: pages - pR + 1,
      pageBack: pages - pR,
      valley: true,
      bead: false,
    });
  }
  d.meta.pageT = pageT;
  d.meta.leafT = pageT;
  const q = h * 0.26;
  d.extra({ type: 'staples', x: w, ys: [q, h - q], len: 8, panel: 'back' });
  return d.finish();
}

// Perfect bound: square spine, leaves glued into it.
export function perfectBook({ w, h, pages = 64, t = 0.12, coverT = 0.3, hard = false }) {
  const leaves = Math.ceil((pages - 4) / 2);
  const spine = Math.max(2, leaves * t + (hard ? 3 : 0.6));
  const drawn = Math.min(leaves, MAX_DRAWN + 2);
  const pageT = (leaves * t) / drawn;
  const board = hard ? 2.4 : coverT;
  const over = hard ? 3 : 0;
  const d = new Die({
    bleed: 3,
    safe: 8,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -28, el: 32 }, open: { az: -14, el: 40 } },
    meta: { book: { pages, kind: 'perfect' }, thick: board },
  });
  const W = w + over;
  const H = h + over * 2;
  d.root('back', 0, 0, W, H, { name: 'Back cover', nameIn: 'Inside back cover' });
  d.add('back', 'right', 'spine', { d: spine, angle: 90, seq: 1, open: 90, name: 'Spine', nameIn: 'Spine', role: 'flap', lift: 0 });
  d.add('spine', 'far', 'front', { d: W, angle: 90, seq: 2, open: -80, name: 'Front cover', nameIn: 'Inside front cover', cover: true });
  const hingeA = [W, over];
  const hingeB = [W, over + h];
  const stackH = spine;
  for (let i = 0; i < drawn; i++) {
    const z = board + (i + 0.0) * pageT * 0.999;
    const k = drawn - 1 - i; // 0 is the top page
    d.leaf('back', `p${i}`, W - w, over, w, h, {
      hinge: { a: hingeA, b: hingeB },
      zOff: z,
      pivotZ: -(board + stackH / 2),
      angle: 0,
      open: k < 4 ? [172, 169, 166, 118][3 - k] : 0,
      seq: 3,
      pageFront: pages - 2 - 2 * i,
      pageBack: pages - 3 - 2 * i,
      valley: true,
      bead: false,
    });
  }
  d.meta.pageT = pageT;
  d.meta.leafT = pageT;
  return d.finish();
}

// Wire-O: loose sheets on a wire along one edge. Works for notebooks and calendars.
export function wireBook({ w, h, pages = 40, t = 0.13, coverT = 0.33, edge = 'left', stand = false, wall = false, r }) {
  const leaves = Math.ceil(pages / 2);
  const drawn = Math.min(leaves, MAX_DRAWN + 1);
  const pageT = (leaves * t) / drawn;
  const T = drawn * pageT + 2 * coverT;
  const left = edge === 'left';
  const hA = left ? [0, 0] : [0, 0];
  const hB = left ? [0, h] : [w, 0];
  const pitch = 8.47; // the common 3:1 pitch
  const holeR = 2;
  const holes = [];
  const count = Math.floor((left ? h : w) / pitch);
  const off = 6;
  for (let i = 0; i < count; i++) {
    const k = ((i + 0.5) / count) * (left ? h : w);
    holes.push(left ? circle(off, k, holeR, 14) : circle(k, off, holeR, 14));
  }
  const ringR = r ?? Math.max(6.5, T / 2 + 3.2);
  const d = new Die({
    bleed: 3,
    safe: 11,
    pose: wall
      ? { fold: 'stand', open: 'stand', closedYaw: 0 }
      : { fold: 'keep', open: 'keep' },
    view: wall
      ? { closed: { az: -20, el: 6 }, open: { az: -20, el: 6 } }
      : { closed: { az: -26, el: 34 }, open: { az: -26, el: 40 } },
    meta: { book: { pages, kind: 'wire' } },
  });
  // Root is the bottom sheet; the cover lies on top and swings up.
  d.root('backleaf', 0, 0, w, h, { name: 'Back', nameIn: 'Inside', holes });
  const pz = -T + off * 0;
  const hinge = { a: hA, b: hB };
  for (let i = 0; i < drawn; i++) {
    const up = (drawn - i) * pageT;
    const isCover = i === 0;
    d.leaf('backleaf', `w${i}`, 0, 0, w, h, {
      hinge,
      zOff: -up - (isCover ? coverT : 0),
      pivotZ: T / 2,
      coverLeaf: isCover,
      holes: isCover ? holes : [],
      angle: 0,
      open: i < 2 ? -176 + i * 7 : 0,
      seq: 2 - Math.min(i, 1),
      pageFront: 2 * i + 1,
      pageBack: 2 * i + 2,
      valley: false,
      bead: false,
    });
  }
  void pz;
  d.meta.leafT = pageT;
  d.meta.pageT = pageT;
  const inset = 6;
  d.extra({
    type: 'wire',
    a: left ? [inset * 0 - 1, 0] : [0, -1],
    b: left ? [-1, h] : [w, -1],
    pitch,
    r: ringR,
    h: 0,
    z: T / 2 - ringR * 0 - 0,
    always: true,
    ox: left ? 1 + off * 0.2 : 0,
    oy: left ? 0 : off * 0.2,
  });
  if (wall) d.extra({ type: 'custom', build: wallHook(w) });
  return d.finish();
}

function wallHook(w) {
  return (model, parent) => {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(8, 0.6, 8, 32, Math.PI),
      new THREE.MeshStandardMaterial({ color: '#16161a', metalness: 0.8, roughness: 0.35 }),
    );
    m.position.set(w / 2, 6, 0);
    parent.group.add(m);
  };
}

// Glued pad: sheets on a chipboard back, torn off at the top edge.
export function notepad({ w, h, sheets = 50, t = 0.1 }) {
  const drawn = 6;
  const pageT = (sheets * t) / drawn;
  const d = new Die({
    bleed: 3,
    safe: 5,
    pose: { fold: 'keep', open: 'keep' },
    view: { closed: { az: -28, el: 32 }, open: { az: -28, el: 38 } },
    meta: { book: { pages: sheets, kind: 'pad' } },
  });
  d.root('back', 0, 0, w, h, { name: 'Chipboard back', nameIn: 'Chipboard', holes: [] });
  const hinge = { a: [0, 0], b: [w, 0] };
  for (let i = 0; i < drawn; i++) {
    const up = (drawn - i) * pageT;
    d.leaf('back', `n${i}`, 0, 0, w, h, {
      hinge,
      zOff: -up,
      pivotZ: 1.5,
      coverLeaf: true,
      angle: 0,
      open: i === 0 ? -58 : 0,
      seq: 1,
      pageFront: 1,
      pageBack: 2,
      valley: false,
      bead: false,
    });
  }
  d.meta.leafT = pageT;
  d.meta.pageT = pageT;
  return d.finish();
}

// Desk calendar: an easel base with wire and sheets on the slope.
export function deskCalendar({ w, h, base }) {
  const b = base ?? h * 0.75;
  const glue = 18;
  const face = h + 6;
  const a = 180 - (Math.acos((b * b + face * face - face * face) / (2 * b * face)) * 180) / Math.PI;
  const d = new Die({
    bleed: 3,
    safe: 5,
    pose: { fold: 'flip', closedYaw: 180 },
    view: { closed: { az: -28, el: 18 } },
    meta: { noOpen: true },
  });
  d.root('base', 0, face, w, b, { name: 'Base', nameIn: 'Base' });
  d.add('base', 'top', 'back', { d: face, angle: a, seq: 1, name: 'Back', nameIn: 'Inside' });
  d.add('base', 'bottom', 'front', { d: face, angle: a, seq: 1, name: 'Month sheet', nameIn: 'Inside', cover: true });
  d.add('front', 'far', 'glue', { d: glue, inL: 1, inR: 1, tL: 2, tR: 2, angle: 2 * (180 - a), seq: 2, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  d.extra({ type: 'wire', panel: 'front', a: [0, 0], b: [w, 0], pitch: 8.47, r: 5.5, h: 0, z: 0, oy: 3 });
  return d.finish();
}
