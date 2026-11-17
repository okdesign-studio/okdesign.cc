// Presentation folders: a cover with one or two glued pockets.

import { Die } from '../core/die.js';

export function folder({ w, h, spine = 0, pocket = 100, two = false, slit = true, insert = false }) {
  const d = new Die({
    bleed: 3,
    safe: 5,
    pose: { fold: 'flip', open: 'flip', openYaw: 0 },
    view: { closed: { az: -24, el: 36 }, open: { az: -14, el: 52, pad: 1.14 } },
    meta: { seam: true },
  });
  // Outside view: back cover on the left, front cover on the right.
  d.root('back', 0, 0, w, h, { name: 'Back cover', nameIn: 'Inside right' });
  const leaf = spine > 0 ? 'spine' : 'back';
  if (spine > 0) d.add('back', 'right', 'spine', { d: spine, angle: 90, seq: 3, open: 8, name: 'Spine', nameIn: 'Spine', role: 'flap' });
  d.add(leaf, spine > 0 ? 'far' : 'right', 'front', {
    d: w,
    angle: spine > 0 ? 90 : 179.2,
    seq: 3,
    gap: spine > 0 ? 0 : 2,
    open: spine > 0 ? 8 : 16,
    name: 'Front cover',
    nameIn: 'Inside left',
    cover: true,
  });
  const pocketProfile = (W, D, up) => {
    // Slanted lip, a thumb cut would go here; printers usually keep it this simple.
    const lift = 16;
    return up
      ? { pts: [[0, 0], [0, D - lift], [18, D], [W, D], [W, 0]] }
      : { pts: [[0, 0], [0, D], [W - 18, D], [W, D - lift], [W, 0]] };
  };
  const pkt = d.add('back', 'bottom', 'pocket', {
    ...pocketProfile(w, pocket, true),
    angle: 179.92,
    seq: 1,
    gap: 0,
    name: 'Pocket',
    nameIn: 'Pocket inside',
    hu: [0, w],
  });
  void pkt;
  // Glue tab on the outer edge of the pocket.
  d.add('pocket', { a: [0, h + pocket - 16], b: [0, h] }, 'pocket-tab', {
    d: 12,
    tL: 3,
    tR: 3,
    angle: -179.9,
    seq: 0,
    role: 'glue',
    name: 'Glue',
    nameIn: 'Glue',
  });
  if (two) {
    d.add('front', 'bottom', 'pocket2', {
      ...pocketProfile(w, pocket, false),
      angle: 179.92,
      seq: 1,
      name: 'Pocket',
      nameIn: 'Pocket inside',
      hu: [0, w],
    });
  }
  if (slit) {
    // Business card slits on the pocket.
    d.perf([w - 72, h + pocket * 0.42], [w - 62, h + pocket * 0.3], 'perf');
    d.perf([w - 18, h + pocket * 0.3], [w - 8, h + pocket * 0.42], 'perf');
  }
  if (insert) d.extra({ type: 'insert', panel: 'back', size: [w - 16, h - pocket * 0.5], rise: 0, z: 0.5, at: 'pocket', openOnly: true });
  return d.finish();
}
