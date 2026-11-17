// Envelopes. Same structure for all of them: a front panel and four flaps. Only proportions and
// the order of the flaps change, which is why one function covers wallet, pocket and pointed.

import { Die } from '../core/die.js';
import { rect } from '../core/geom.js';

const FLAT = 179.95;
const SEAL = 179.3;

export function envelope({ w, h, style = 'wallet', window: win, sealR = 7 }) {
  const d = new Die({
    bleed: 3,
    safe: 4,
    pose: { fold: win ? 'keep' : 'flip', open: 'flip' },
    view: { closed: { az: -24, el: 40 }, open: { az: -18, el: 46 } },
    meta: { seam: true },
  });
  const holes = [];
  if (win) holes.push(rect(win.x, win.y, win.w, win.h));
  d.root('front', 0, 0, w, h, { name: 'Address side', nameIn: 'Inside', holes, cover: true });

  if (style === 'pointed') {
    const side = w * 0.34;
    const tip = (L, D) => ({
      pts: [[0, 0], [L * 0.47, D * 0.97], [L * 0.5, D], [L * 0.53, D * 0.97], [L, 0]],
    });
    d.add('front', 'left', 'side-l', { ...tip(h, side), angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'right', 'side-r', { ...tip(h, side), angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'bottom', 'bottom', { ...tip(w, h * 0.56), angle: FLAT, seq: 2, gap: 1, lift: 0.5, role: 'flap', name: 'Bottom flap', nameIn: 'Inside' });
    d.add('front', 'top', 'seal', { ...tip(w, h * 0.62), angle: SEAL, seq: 3, gap: 2, lift: 1, open: 34, role: 'flap', name: 'Seal flap', nameIn: 'Gum' });
  } else if (style === 'pocket') {
    // Opens on the short side.
    const side = Math.min(w * 0.13, 30);
    d.add('front', 'left', 'side-l', { d: side, tL: 8, tR: 8, r: 3, angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'right', 'side-r', { d: side, tL: 8, tR: 8, r: 3, angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'bottom', 'bottom', { d: h * 0.78, inL: 0, inR: 0, tL: 7, tR: 7, r: 3, angle: FLAT, seq: 2, gap: 1, lift: 0.5, name: 'Back panel', nameIn: 'Inside' });
    d.add('front', 'top', 'seal', { d: Math.min(h * 0.27, 62), tL: 12, tR: 12, r: sealR, angle: SEAL, seq: 3, gap: 2, lift: 1, open: 34, role: 'flap', name: 'Seal flap', nameIn: 'Gum' });
  } else {
    // Wallet: long flap on the long side, the classic DL / C6 / C5 envelope.
    const side = Math.min(h * 0.42, 36);
    d.add('front', 'left', 'side-l', { d: side, tL: 6, tR: 10, r: 3, angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'right', 'side-r', { d: side, tL: 10, tR: 6, r: 3, angle: FLAT, seq: 1, role: 'flap', name: 'Side flap', nameIn: 'Inside' });
    d.add('front', 'bottom', 'bottom', { d: h * 0.66, tL: h * 0.3, tR: h * 0.3, r: 5, angle: FLAT, seq: 2, gap: 1, lift: 0.5, name: 'Back panel', nameIn: 'Inside' });
    d.add('front', 'top', 'seal', { d: h * 0.5, tL: h * 0.2, tR: h * 0.2, r: sealR, angle: SEAL, seq: 3, gap: 2, lift: 1, open: 34, role: 'flap', name: 'Seal flap', nameIn: 'Gum' });
  }
  if (win) d.extra({ type: 'film', panel: 'front', rect: win });
  d.extra({ type: 'insert', panel: 'front', size: [w - 8, h - 8], rise: h * 0.42, z: 1 });
  return d.finish();
}

// Gusset pocket with a flat base, for catalogues and thick documents.
export function gussetEnvelope({ w, h, g = 25 }) {
  const glue = 16;
  const d = new Die({ bleed: 3, safe: 5, pose: { fold: 'stand', open: 'stand' }, view: { closed: { az: -32, el: 18 }, open: { az: -30, el: 26 } } });
  const c = 0.3;
  d.root('front', glue + g - c, 0, w, h, { name: 'Front', nameIn: 'Inside', cover: true });
  d.add('front', 'right', 'gus-b', { d: g, angle: 90, seq: 3, role: 'flap', name: 'Gusset', nameIn: 'Inside' });
  d.add('gus-b', 'far', 'back', { d: w, angle: 90, seq: 3, name: 'Back', nameIn: 'Inside' });
  d.add('front', 'left', 'gus-a', { d: g - c, angle: 90, seq: 3, role: 'flap', name: 'Gusset', nameIn: 'Inside' });
  d.add('gus-a', 'far', 'glue', { d: glue, inL: 2, inR: 2, angle: 90, seq: 2, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  d.add('gus-a', 'bottom', 'b-a', { d: g * 0.7, inL: 0.3, inR: 0.3, tL: 1, tR: 1, angle: 90, seq: 4, role: 'flap', name: 'Base', nameIn: 'Base' });
  d.add('gus-b', 'bottom', 'b-b', { d: g * 0.7, inL: 0.3, inR: 0.3, tL: 1, tR: 1, angle: 90, seq: 4, role: 'flap', name: 'Base', nameIn: 'Base' });
  d.add('front', 'bottom', 'b-f', { d: g * 0.6, inL: 0.3, inR: 0.3, angle: 90, seq: 5, gap: 2, role: 'flap', name: 'Base', nameIn: 'Base' });
  d.add('back', 'bottom', 'b-k', { d: g * 0.6, inL: 0.3, inR: 0.3, angle: 90, seq: 5, gap: 2, role: 'flap', name: 'Base', nameIn: 'Base' });
  d.add('back', 'top', 'seal-top', { d: g, inL: 0.2, inR: 0.2, angle: 90, seq: 6, open: 0, gap: 2, role: 'flap', name: 'Top', nameIn: 'Inside' });
  d.add('seal-top', 'far', 'seal', { d: 42, tL: 6, tR: 6, r: 6, angle: 90, seq: 6, open: 0, role: 'flap', name: 'Seal flap', nameIn: 'Gum' });
  d.add('gus-a', 'top', 't-a', { d: g * 0.5, inL: 0.5, inR: 0.5, tL: 3, tR: 3, angle: 90, seq: 5, open: 20, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  d.add('gus-b', 'top', 't-b', { d: g * 0.5, inL: 0.5, inR: 0.5, tL: 3, tR: 3, angle: 90, seq: 5, open: 20, role: 'flap', name: 'Flap', nameIn: 'Flap' });
  return d.finish();
}
