// Cartons and corrugated boxes.
// All measures are INSIDE dimensions, like a packaging spec: L length, W width, H height.

import { Die } from '../core/die.js';

const standPose = { fold: 'stand', open: 'stand' };
const standView = { closed: { az: -34, el: 22 }, open: { az: -30, el: 30 } };
const FLAT = 179.9;

// The four-panel tube used by every side-seam carton.
// Sheet order: glue | side A | front | side B | back. The tube closes behind the front panel.
function tube(d, { L, W, H, t, glue = 14 }) {
  const c = 0.25 + t * 0.6; // clearance so the glue tab sits inside the back panel
  d.root('front', glue + W - c, 0, L, H, { name: 'Front', nameIn: 'Inside front', cover: true });
  d.add('front', 'right', 'side-b', { d: W, angle: 90, seq: 3, name: 'Right side', nameIn: 'Inside' });
  d.add('side-b', 'far', 'back', { d: L, angle: 90, seq: 3, name: 'Back', nameIn: 'Inside back' });
  d.add('front', 'left', 'side-a', { d: W - c, angle: 90, seq: 3, name: 'Left side', nameIn: 'Inside' });
  d.add('side-a', 'far', 'glue', { d: glue, inL: 2, inR: 2, tL: 3, tR: 3, angle: 90, seq: 2, role: 'glue', name: 'Glue', nameIn: 'Glue' });
}

function tuckClosure(d, panelId, edge, id, { L, W, tuck, t, seq, open }) {
  // The lid stops short so the tuck slides inside the opposite wall.
  d.add(panelId, edge, `${id}-lid`, {
    d: W - t * 2.4 - 0.3,
    angle: 90,
    seq,
    gap: 2,
    open,
    name: id === 'top' ? 'Top' : 'Base',
    nameIn: 'Inside',
  });
  d.add(`${id}-lid`, 'far', `${id}-tuck`, { d: tuck, inL: 0.6, inR: 0.6, tL: 2, tR: 2, r: 6, angle: 90.6, seq, open: 40, role: 'flap', name: 'Tuck', nameIn: 'Tuck' });
}

function dust(d, panelId, edge, id, depth, seq) {
  d.add(panelId, edge, id, { d: depth, inL: 0.6, inR: 0.6, tL: 2, tR: 6, r: 2, angle: 90, seq, role: 'flap', name: 'Dust flap', nameIn: 'Dust flap' });
}

// Straight tuck (both tucks on the back panel) and reverse tuck (top on back, bottom on front).
export function tuckBox({ L, W, H, t = 0.45, reverse = false, hang = false }) {
  const d = new Die({ bleed: 3, safe: 3, pose: { ...standPose }, view: standView });
  tube(d, { L, W, H, t });
  const tuck = Math.min(16, W * 0.6);
  const dd = Math.min(W * 0.62, 26);
  dust(d, 'side-a', 'top', 'dust-a-top', dd, 6);
  dust(d, 'side-b', 'top', 'dust-b-top', dd, 6);
  dust(d, 'side-a', 'bottom', 'dust-a-bot', dd, 4);
  dust(d, 'side-b', 'bottom', 'dust-b-bot', dd, 4);
  if (hang) {
    // Top closes from the front; the back panel runs on into a header with a euro slot.
    tuckClosure(d, 'front', 'top', 'top', { L, W, tuck, t, seq: 7, open: 18 });
    const e = d.byId.back.edges.top;
    const cx = (e.a[0] + e.b[0]) / 2;
    const cy = e.a[1] - 21;
    d.add('back', 'top', 'hang', { d: 36, r: 5, angle: 0, seq: 1, name: 'Hang tab', nameIn: 'Hang tab', bead: false, holes: [euroSlot(cx, cy)] });
  } else {
    tuckClosure(d, 'back', 'top', 'top', { L, W, tuck, t, seq: 7, open: 18 });
  }
  tuckClosure(d, reverse ? 'front' : 'back', 'bottom', 'bot', { L, W, tuck, t, seq: 5 });
  return d.finish();
}

function euroSlot(cx, cy) {
  // The standard retail hang hole: a pill with a raised centre.
  const r = 3;
  const hw = 14;
  const o = [];
  for (let i = 0; i <= 10; i++) {
    const a = Math.PI / 2 + (i / 10) * Math.PI;
    o.push([cx - hw + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  o.push([cx - 5, cy - r], [cx - 3.5, cy - 6.5], [cx + 3.5, cy - 6.5], [cx + 5, cy - r]);
  for (let i = 0; i <= 10; i++) {
    const a = -Math.PI / 2 + (i / 10) * Math.PI;
    o.push([cx + hw + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return o;
}

// Crash-lock / auto-bottom: top is a tuck, bottom is four interlocking flaps.
export function autoLockBox({ L, W, H, t = 0.45 }) {
  const d = new Die({ bleed: 3, safe: 3, pose: { ...standPose }, view: standView });
  tube(d, { L, W, H, t });
  const tuck = Math.min(16, W * 0.6);
  const dd = Math.min(W * 0.62, 26);
  dust(d, 'side-a', 'top', 'dust-a-top', dd, 6);
  dust(d, 'side-b', 'top', 'dust-b-top', dd, 6);
  tuckClosure(d, 'back', 'top', 'top', { L, W, tuck, t, seq: 7, open: 18 });
  // Bottom panels: long flaps with the diagonal lock, short flaps with a tab.
  const a = W * 0.58;
  const hook = (Len, D, flip) => ({
    pts: flip
      ? [[0, 0], [0, D * 0.5], [Len * 0.28, D], [Len * 0.72, D], [Len, D * 0.42], [Len, 0]]
      : [[0, 0], [0, D * 0.42], [Len * 0.28, D], [Len * 0.72, D], [Len, D * 0.5], [Len, 0]],
  });
  d.add('front', 'bottom', 'lock-f', { ...hook(L, a, false), angle: 90, seq: 4, gap: 2, role: 'flap', name: 'Lock', nameIn: 'Lock' });
  d.add('back', 'bottom', 'lock-b', { ...hook(L, a, true), angle: 90, seq: 4, gap: 2, role: 'flap', name: 'Lock', nameIn: 'Lock' });
  d.add('side-a', 'bottom', 'lock-a', { d: W * 0.5, inL: 0.5, inR: 0.5, tL: 2, tR: 8, angle: 90, seq: 4, role: 'flap', name: 'Lock', nameIn: 'Lock' });
  d.add('side-b', 'bottom', 'lock-c', { d: W * 0.5, inL: 0.5, inR: 0.5, tL: 8, tR: 2, angle: 90, seq: 4, role: 'flap', name: 'Lock', nameIn: 'Lock' });
  return d.finish();
}

// 1-2-3 snap bottom.
export function snapBox({ L, W, H, t = 0.45 }) {
  const d = new Die({ bleed: 3, safe: 3, pose: { ...standPose }, view: standView });
  tube(d, { L, W, H, t });
  const tuck = Math.min(16, W * 0.6);
  const dd = Math.min(W * 0.62, 26);
  dust(d, 'side-a', 'top', 'dust-a-top', dd, 6);
  dust(d, 'side-b', 'top', 'dust-b-top', dd, 6);
  tuckClosure(d, 'back', 'top', 'top', { L, W, tuck, t, seq: 7, open: 18 });
  d.add('side-a', 'bottom', 'snap-1', { d: W * 0.5, inL: 0.5, inR: 0.5, tL: 3, tR: 3, angle: 90, seq: 3, role: 'flap', name: '1', nameIn: '1' });
  d.add('side-b', 'bottom', 'snap-2', { d: W * 0.5, inL: 0.5, inR: 0.5, tL: 3, tR: 3, angle: 90, seq: 3, role: 'flap', name: '2', nameIn: '2' });
  d.add('front', 'bottom', 'snap-3', { d: W * 0.7, inL: 0.5, inR: 0.5, tL: L * 0.1, tR: L * 0.1, r: 4, angle: 90, seq: 4, gap: 2, role: 'flap', name: '3', nameIn: '3' });
  d.add('back', 'bottom', 'snap-4', { d: W * 0.7, inL: 0.5, inR: 0.5, tL: L * 0.1, tR: L * 0.1, r: 4, angle: 90, seq: 4, gap: 2, role: 'flap', name: '4', nameIn: '4' });
  return d.finish();
}

// Regular slotted carton, FEFCO 0201.
export function shippingBox({ L, W, H, t = 3 }) {
  const d = new Die({ bleed: 0, safe: 10, pose: { ...standPose }, view: standView });
  tube(d, { L, W, H, t, glue: 30 });
  const f = W / 2;
  d.add('side-a', 'bottom', 'min-a-b', { d: f, inL: 2, inR: 2, angle: 90, seq: 4, name: 'Minor flap', nameIn: 'Minor flap', role: 'flap' });
  d.add('side-b', 'bottom', 'min-b-b', { d: f, inL: 2, inR: 2, angle: 90, seq: 4, name: 'Minor flap', nameIn: 'Minor flap', role: 'flap' });
  d.add('front', 'bottom', 'maj-f-b', { d: f - 1, inL: 1, inR: 1, angle: 90, seq: 5, gap: 2, name: 'Major flap', nameIn: 'Major flap', role: 'flap' });
  d.add('back', 'bottom', 'maj-k-b', { d: f - 1, inL: 1, inR: 1, angle: 90, seq: 5, gap: 2, name: 'Major flap', nameIn: 'Major flap', role: 'flap' });
  d.add('side-a', 'top', 'min-a-t', { d: f, inL: 2, inR: 2, angle: 90, seq: 6, open: 62, name: 'Minor flap', nameIn: 'Minor flap', role: 'flap' });
  d.add('side-b', 'top', 'min-b-t', { d: f, inL: 2, inR: 2, angle: 90, seq: 6, open: 62, name: 'Minor flap', nameIn: 'Minor flap', role: 'flap' });
  d.add('front', 'top', 'maj-f-t', { d: f - 1, inL: 1, inR: 1, angle: 90, seq: 7, gap: 2, open: -30, name: 'Top flap', nameIn: 'Top flap' });
  d.add('back', 'top', 'maj-k-t', { d: f - 1, inL: 1, inR: 1, angle: 90, seq: 7, gap: 2, open: -30, name: 'Top flap', nameIn: 'Top flap' });
  return d.finish();
}

// Self-locking mailer with double side walls, FEFCO 0427 family.
export function mailerBox({ L, W, H, t = 1.5 }) {
  const roll = Math.max(5, t * 3.5); // space taken by the rolled side wall
  const ins = t + 0.3;
  const BL = L + 2 * roll;
  const d = new Die({
    bleed: 3,
    safe: 4,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -30, el: 30 }, open: { az: -26, el: 40 } },
  });
  d.root('base', 0, 0, BL, W, { name: 'Base', nameIn: 'Inside base' });
  // Back wall, lid and tuck run up the sheet.
  d.add('base', 'top', 'back', { d: H, inL: ins, inR: ins, angle: 90, seq: 2, name: 'Back', nameIn: 'Inside back' });
  d.add('back', 'far', 'lid', { d: W - t * 2.1 - 0.4, inL: roll - ins + 0.4, inR: roll - ins + 0.4, angle: 90, seq: 6, gap: 1, open: 8, name: 'Lid', nameIn: 'Inside lid', cover: true });
  d.add('lid', 'far', 'tuck', { d: H * 0.86, inL: 1, inR: 1, tL: 2, tR: 2, r: 8, angle: 90.6, seq: 6, open: 26, role: 'flap', name: 'Tuck', nameIn: 'Tuck' });
  d.add('lid', 'left', 'ear-l', { d: H * 0.8, inL: 6, inR: 6, tL: 8, tR: 8, r: 8, angle: 90.6, seq: 5, open: 20, role: 'flap', name: 'Ear', nameIn: 'Ear' });
  d.add('lid', 'right', 'ear-r', { d: H * 0.8, inL: 6, inR: 6, tL: 8, tR: 8, r: 8, angle: 90.6, seq: 5, open: 20, role: 'flap', name: 'Ear', nameIn: 'Ear' });
  // Front wall down the sheet.
  d.add('base', 'bottom', 'front', { d: H, inL: ins, inR: ins, angle: 90, seq: 2, name: 'Front', nameIn: 'Inside front' });
  // Corner flaps that get trapped inside the double side walls.
  const corner = Math.min(W * 0.34, 46);
  d.add('back', 'left', 'back-l', { d: corner, inL: 2, inR: 2, tL: 0, tR: 6, angle: 90, seq: 1, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  d.add('back', 'right', 'back-r', { d: corner, inL: 2, inR: 2, tL: 6, tR: 0, angle: 90, seq: 1, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  d.add('front', 'left', 'front-l', { d: corner, inL: 2, inR: 2, tL: 6, tR: 0, angle: 90, seq: 1, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  d.add('front', 'right', 'front-r', { d: corner, inL: 2, inR: 2, tL: 0, tR: 6, angle: 90, seq: 1, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  // Double side walls: wall, rolled top, inner wall locking into the base.
  for (const [s, e] of [['l', 'left'], ['r', 'right']]) {
    d.add('base', e, `wall-${s}`, { d: H, angle: 90, seq: 3, name: s === 'l' ? 'Left side' : 'Right side', nameIn: 'Inside' });
    d.add(`wall-${s}`, 'far', `roll-${s}`, { d: roll - t, inL: 1, inR: 1, angle: 90, seq: 4, role: 'flap', name: 'Roll', nameIn: 'Roll' });
    d.add(`roll-${s}`, 'far', `in-${s}`, { d: H - t - 1, inL: 1, inR: 1, tL: 2, tR: 2, angle: 90, seq: 4, role: 'flap', name: 'Inner wall', nameIn: 'Inner wall' });
  }
  return d.finish();
}

// Open tray with four walls and corner glue tabs. Used on its own and as part of two-piece boxes.
function tray(d, id, x, y, L, W, H, opts = {}) {
  const pre = id ? `${id}-` : '';
  const base = `${pre}base`;
  const seq = opts.seq ?? 2;
  const tab = Math.min(H * 0.9, 18);
  if (opts.mount) {
    d.mountRect(opts.parent, base, x, y, L, W, { to: opts.mount, seq: opts.mountSeq, name: opts.name || 'Top', nameIn: 'Inside', cover: true });
  } else {
    d.root(base, x, y, L, W, { name: opts.name || 'Base', nameIn: 'Inside base' });
  }
  const c = opts.t * 1.4;
  for (const [s, e, label] of [['t', 'top', 'Back'], ['b', 'bottom', 'Front']]) {
    d.add(base, e, `${pre}wall-${s}`, { d: H, inL: 0, inR: 0, angle: 90, seq: seq + 1, name: label, nameIn: 'Inside', gap: 1 });
    d.add(`${pre}wall-${s}`, 'left', `${pre}tab-${s}l`, { d: tab, inL: 1, inR: 1, tL: 0, tR: 3, angle: 90, seq, role: 'glue', name: 'Glue', nameIn: 'Glue' });
    d.add(`${pre}wall-${s}`, 'right', `${pre}tab-${s}r`, { d: tab, inL: 1, inR: 1, tL: 3, tR: 0, angle: 90, seq, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  }
  for (const [s, e, label] of [['l', 'left', 'Left'], ['r', 'right', 'Right']]) {
    d.add(base, e, `${pre}wall-${s}`, { d: H, inL: 0.3, inR: 0.3, angle: 90, seq: seq + 2, gap: 3, name: label, nameIn: 'Inside' });
  }
  void c;
}

// Two-piece telescope box, FEFCO 03xx family.
export function lidBox({ L, W, H, lid, t = 0.5 }) {
  const lidH = lid ?? Math.max(H * 0.5, 20);
  const m = t * 3 + 0.6;
  const gapBetween = H + lidH + 22;
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -30, el: 28 }, open: { az: -28, el: 32 } },
  });
  tray(d, '', 0, 0, L, W, H, { t, name: 'Base' });
  const LL = L + 2 * m;
  const LW = W + 2 * m;
  const lx = L + H * 2 + 40;
  const ly = (W - LW) / 2;
  tray(d, 'lid', lx, ly, LL, LW, lidH, {
    t,
    parent: 'base',
    name: 'Lid top',
    seq: 2,
    mountSeq: 6,
    mount: {
      pos: [L / 2, -W / 2, -H - t - 0.2],
      rot: [0, 180, 0],
      center: [lx + LL / 2, -(ly + LW / 2), 0],
      arc: Math.max(L, W) * 0.55,
      openAt: 0.42,
    },
  });
  void gapBetween;
  return d.finish();
}

// Tray that slides into a sleeve, the matchbox.
export function drawerBox({ L, W, H, t = 0.5 }) {
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -30, el: 26 }, open: { az: -34, el: 32 } },
  });
  tray(d, '', 0, 0, L, W, H, { t, name: 'Tray' });
  const c = t * 2 + 0.6;
  const SW = W + c; // sleeve width, across the box
  const SH = H + c;
  const x0 = L + H * 2 + 40;
  const y0 = -H - 10;
  d.mountRect('base', 'sleeve', x0, y0, L, SW, {
    name: 'Sleeve top',
    nameIn: 'Inside',
    seq: 7,
    cover: true,
    to: {
      pos: [L / 2, -W / 2, -H - t * 2.2],
      rot: [0, 180, 0],
      center: [x0 + L / 2, -(y0 + SW / 2), 0],
      arc: L * 0.5,
      slide: [L * 0.95, 0, 0],
      openAt: 0.76,
    },
  });
  d.add('sleeve', 'bottom', 'sleeve-f', { d: SH, angle: 90, seq: 6, name: 'Sleeve side', nameIn: 'Inside' });
  d.add('sleeve-f', 'far', 'sleeve-u', { d: SW, angle: 90, seq: 6, name: 'Sleeve base', nameIn: 'Inside' });
  d.add('sleeve-u', 'far', 'sleeve-b', { d: SH, angle: 90, seq: 6, name: 'Sleeve side', nameIn: 'Inside' });
  d.add('sleeve-b', 'far', 'sleeve-g', { d: 12, inL: 2, inR: 2, tL: 2, tR: 2, angle: 90, seq: 5, role: 'glue', gap: 0, name: 'Glue', nameIn: 'Glue' });
  return d.finish();
}

// Open tray, sold as lid-less packaging and display inserts.
export function trayBox({ L, W, H, t = 0.5 }) {
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'flip' },
    view: { closed: { az: -30, el: 34 } },
    meta: { noOpen: true },
  });
  tray(d, '', 0, 0, L, W, H, { t, name: 'Base' });
  return d.finish();
}

// Printed sleeve around a plain carton, or a belly band around a card.
export function sleeve({ L, W, H, t = 0.45, inner, innerColor }) {
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'keep' },
    view: { closed: { az: -28, el: 28 } },
    meta: { noOpen: true },
  });
  d.root('top', 12 + H, 0, L, W, { name: 'Top', nameIn: 'Inside', cover: true });
  if (inner) {
    d.extra({
      type: 'block',
      panel: 'top',
      size: [L - t * 2 - 0.4, inner, H - t * 1.5],
      pos: [12 + H + L / 2, -W / 2, -t - (H - t * 1.5) / 2 - 0.1],
      color: innerColor,
      seq: 2,
    });
  }
  d.add('top', 'right', 'side-b', { d: H, angle: 90, seq: 1, name: 'Side', nameIn: 'Inside' });
  d.add('side-b', 'far', 'under', { d: L, angle: 90, seq: 1, name: 'Under', nameIn: 'Inside' });
  d.add('top', 'left', 'side-a', { d: H, angle: 90, seq: 1, name: 'Side', nameIn: 'Inside' });
  d.add('side-a', 'far', 'glue', { d: 12, inL: 1, inR: 1, tL: 2, tR: 2, angle: 90, seq: 1, gap: 1, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  void t;
  return d.finish();
}

// Gable box with carry handle.
export function gableBox({ L, W, H, t = 0.45 }) {
  const d = new Die({ bleed: 3, safe: 3, pose: { ...standPose }, view: { closed: { az: -34, el: 18 }, open: { az: -30, el: 28 } } });
  tube(d, { L, W, H, t });
  const roof = W * 0.62; // slope of the gable measured along the sheet
  const a = Math.asin(Math.min(0.98, (W / 2 + 0.2) / roof)) * (180 / Math.PI);
  const handle = 34;
  const slotW = Math.min(L * 0.55, 80);
  const hole = (x0, y0) => {
    const o = [];
    const r = 7;
    const n = 12;
    for (let i = 0; i <= n; i++) {
      const b = Math.PI / 2 + (i / n) * Math.PI;
      o.push([x0 + Math.cos(b) * r, y0 + Math.sin(b) * r]);
    }
    for (let i = 0; i <= n; i++) {
      const b = -Math.PI / 2 + (i / n) * Math.PI;
      o.push([x0 + slotW + Math.cos(b) * r, y0 + Math.sin(b) * r]);
    }
    return o;
  };
  const addRoof = (parent, id, sign) => {
    d.add(parent, 'top', `${id}-roof`, { d: roof, angle: 90 - a, seq: 6, open: 0, name: 'Roof', nameIn: 'Inside', cover: false });
    const e = d.byId[`${id}-roof`].edges.far;
    const cx = (e.a[0] + e.b[0]) / 2;
    const cy = e.a[1] - handle * 0.46;
    d.add(`${id}-roof`, 'far', `${id}-handle`, {
      d: handle,
      r: 8,
      tL: 4,
      tR: 4,
      angle: -(90 - a) * 0 + 90 - (90 - a),
      seq: 7,
      open: 0,
      role: 'flap',
      name: 'Handle',
      nameIn: 'Handle',
      holes: [hole(cx - slotW / 2, cy)],
    });
    void sign;
  };
  addRoof('back', 'k', 1);
  addRoof('front', 'f', -1);
  for (const s of ['a', 'b']) {
    const pts = [[0, 0], [W / 2, W * 0.5], [W, 0]];
    d.add(`side-${s}`, 'top', `gus-${s}`, { pts, angle: 52, seq: 5, open: 0, role: 'flap', name: 'Gusset', nameIn: 'Gusset' });
  }
  // Base as a tuck.
  const dd = Math.min(W * 0.62, 26);
  dust(d, 'side-a', 'bottom', 'dust-a-bot', dd, 4);
  dust(d, 'side-b', 'bottom', 'dust-b-bot', dd, 4);
  tuckClosure(d, 'back', 'bottom', 'bot', { L, W, tuck: 14, t, seq: 5 });
  return d.finish();
}

// One-piece bakery box with hinged lid and corner gussets, the cake box.
export function cakeBox({ L, W, H, t = 0.5 }) {
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -30, el: 30 }, open: { az: -24, el: 38 } },
  });
  d.root('base', 0, 0, L, W, { name: 'Base', nameIn: 'Inside base' });
  d.add('base', 'top', 'back', { d: H, angle: 90, seq: 2, name: 'Back', nameIn: 'Inside' });
  d.add('back', 'far', 'lid', { d: W - t * 2.4 - 0.3, inL: t * 1.6 + 0.4, inR: t * 1.6 + 0.4, angle: 90, seq: 5, gap: 2, open: 2, name: 'Lid', nameIn: 'Inside lid', cover: true });
  d.add('lid', 'far', 'tuck', { d: H * 0.55, inL: 3, inR: 3, tL: 6, tR: 6, r: 5, angle: 90.6, seq: 5, open: 18, role: 'flap', name: 'Tuck', nameIn: 'Tuck' });
  d.add('lid', 'left', 'lip-l', { d: H * 0.42, inL: 4, inR: 4, tL: 5, tR: 5, angle: 90.6, seq: 4, open: 10, role: 'flap', name: 'Lip', nameIn: 'Lip' });
  d.add('lid', 'right', 'lip-r', { d: H * 0.42, inL: 4, inR: 4, tL: 5, tR: 5, angle: 90.6, seq: 4, open: 10, role: 'flap', name: 'Lip', nameIn: 'Lip' });
  d.add('base', 'bottom', 'front', { d: H, angle: 90, seq: 2, name: 'Front', nameIn: 'Inside' });
  d.add('base', 'left', 'left', { d: H, inL: t, inR: t, angle: 90, seq: 3, gap: 2, name: 'Left', nameIn: 'Inside' });
  d.add('base', 'right', 'right', { d: H, inL: t, inR: t, angle: 90, seq: 3, gap: 2, name: 'Right', nameIn: 'Inside' });
  for (const w of ['back', 'front']) {
    d.add(w, 'left', `${w}-gl`, { d: W * 0.22, inL: 1, inR: 1, tL: 0, tR: 4, angle: 90, seq: 1, role: 'glue', name: 'Glue', nameIn: 'Glue' });
    d.add(w, 'right', `${w}-gr`, { d: W * 0.22, inL: 1, inR: 1, tL: 4, tR: 0, angle: 90, seq: 1, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  }
  return d.finish();
}

// Counter display: tray with a raised header card.
export function counterDisplay({ L, W, H, header, t = 1.5 }) {
  const d = new Die({
    bleed: 3,
    safe: 4,
    pose: { fold: 'flip', open: 'flip' },
    view: { closed: { az: -30, el: 22 }, open: { az: -30, el: 22 } },
  });
  d.root('base', 0, 0, L, W, { name: 'Base', nameIn: 'Inside base' });
  d.add('base', 'top', 'back', { d: H + header, angle: 90, seq: 2, name: 'Header', nameIn: 'Header inside', cover: true });
  d.add('base', 'bottom', 'front', { d: H * 0.8, angle: 90, seq: 2, name: 'Front lip', nameIn: 'Inside' });
  d.add('base', 'left', 'left', { pts: [[0, 0], [0, H + header * 0.7], [W * 0.45, H], [W, H * 0.8], [W, 0]], hu: [0, W], angle: 90, seq: 3, gap: 2, name: 'Left wing', nameIn: 'Inside' });
  d.add('base', 'right', 'right', { pts: [[0, 0], [0, H * 0.8], [W * 0.55, H], [W, H + header * 0.7], [W, 0]], hu: [0, W], angle: 90, seq: 3, gap: 2, name: 'Right wing', nameIn: 'Inside' });
  for (const w of ['front']) {
    d.add(w, 'left', `${w}-gl`, { d: 14, inL: 1, inR: 1, tL: 0, tR: 3, angle: 90, seq: 1, role: 'glue', name: 'Glue', nameIn: 'Glue' });
    d.add(w, 'right', `${w}-gr`, { d: 14, inL: 1, inR: 1, tL: 3, tR: 0, angle: 90, seq: 1, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  }
  void t;
  return d.finish();
}

// Paper carrier bag with rope handles, or a bakery bag without them.
export function paperBag({ w, h, g, hem = 40, base, handles = true, t = 0.2 }) {
  const bottom = base ?? g * 0.72;
  const glue = 18;
  const c = t * 1.6 + 0.2;
  const d = new Die({ bleed: 3, safe: 5, pose: { ...standPose }, view: { closed: { az: -30, el: 12 }, open: { az: -30, el: 22 } } });
  d.root('front', glue + g - c, 0, w, h, { name: 'Front', nameIn: 'Inside', cover: true });
  d.add('front', 'right', 'gus-b', { d: g, angle: 90, seq: 3, name: 'Side', nameIn: 'Inside' });
  d.add('gus-b', 'far', 'back', { d: w, angle: 90, seq: 3, name: 'Back', nameIn: 'Inside' });
  d.add('front', 'left', 'gus-a', { d: g - c, angle: 90, seq: 3, name: 'Side', nameIn: 'Inside' });
  d.add('gus-a', 'far', 'glue', { d: glue, inL: 2, inR: 2, angle: 90, seq: 2, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  if (hem) {
    for (const id of ['front', 'gus-a', 'gus-b', 'back']) {
      d.add(id, 'top', `hem-${id}`, { d: hem, inL: 0.1, inR: 0.1, angle: 179.9, seq: 1, role: 'flap', name: 'Hem', nameIn: 'Hem' });
    }
  }
  d.add('gus-a', 'bottom', 'b-a', { d: bottom, inL: 0.3, inR: 0.3, tL: 2, tR: 2, angle: 90, seq: 4, role: 'flap', name: 'Base flap', nameIn: 'Base flap' });
  d.add('gus-b', 'bottom', 'b-b', { d: bottom, inL: 0.3, inR: 0.3, tL: 2, tR: 2, angle: 90, seq: 4, role: 'flap', name: 'Base flap', nameIn: 'Base flap' });
  d.add('front', 'bottom', 'b-f', { d: g * 0.56, inL: 0.3, inR: 0.3, angle: 90, seq: 5, gap: 2, role: 'flap', name: 'Base flap', nameIn: 'Base flap' });
  d.add('back', 'bottom', 'b-k', { d: g * 0.56, inL: 0.3, inR: 0.3, angle: 90, seq: 5, gap: 2, role: 'flap', name: 'Base flap', nameIn: 'Base flap' });
  if (handles) {
    d.extra({ type: 'rope', panel: 'front', span: w * 0.4, drop: Math.min(w * 0.42, 150), top: 0, width: w });
    d.extra({ type: 'rope', panel: 'back', span: w * 0.4, drop: Math.min(w * 0.42, 150), top: 0, width: w });
  }
  return d.finish();
}
