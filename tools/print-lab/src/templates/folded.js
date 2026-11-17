// Folded leaflets. A leaflet is a strip of panels, so each fold style is only a matter of which
// panel stays down, in what order the others come over, and whether a crease is valley or mountain.

import { Die } from '../core/die.js';

// A folded sheet never lies perfectly flat, and neither should the model. Inner layers stay tight
// so they cannot poke through the layer above; the outermost panel relaxes a little.
const RELAX = 179.1;
const TIGHT = 179.92;

const leafletView = {
  closed: { az: -26, el: 36 },
  open: { az: -10, el: 13, pad: 1.22 },
};

const stdOpts = (o = {}) => ({
  bleed: 3,
  safe: 4,
  pose: { fold: 'flip', open: 'stand-inside', ...(o.pose || {}) },
  view: { ...leafletView, ...(o.view || {}) },
  meta: o.meta,
});

function compensate(total, n, shrinkInner = 2) {
  // Evenly divides a sheet into n panels with the tucked-in panel slightly narrower.
  const base = (total + shrinkInner) / n;
  return { base, inner: base - shrinkInner };
}

// Standing pose of a card folded across a horizontal hinge: ridge on top, front panel to the camera.
export function tentPose(a) {
  const r = (a * Math.PI) / 180;
  const child = [0, -Math.cos(r), -Math.sin(r)];
  const down = [0, 1 + child[1], child[2]];
  const L = Math.hypot(down[1], down[2]);
  const up = [0, -down[1] / L, -down[2] / L];
  const n = [0, -Math.sin(r), Math.cos(r)];
  return { up, face: n };
}

export function halfFold({ w, h, axis = 'v' }) {
  const d = new Die(
    stdOpts({
      pose: axis === 'h' ? { closedYaw: 180, open: tentPose(112) } : { open: 'stand-inside', openYaw: -29 },
      view: axis === 'h' ? { open: { az: -26, el: 14 } } : { open: { az: 0, el: 14 } },
    }),
  );
  if (axis === 'v') {
    d.root('back', 0, 0, w / 2, h, { name: 'Back cover', nameIn: 'Inside right' });
    d.add('back', 'right', 'front', {
      d: w / 2,
      angle: RELAX,
      seq: 1,
      open: 58,
      name: 'Front cover',
      nameIn: 'Inside left',
      cover: true,
    });
  } else {
    d.root('back', 0, 0, w, h / 2, { name: 'Back cover', nameIn: 'Inside top' });
    d.add('back', 'bottom', 'front', {
      d: h / 2,
      angle: RELAX,
      seq: 1,
      open: 112,
      name: 'Front cover',
      nameIn: 'Inside bottom',
      cover: true,
    });
  }
  return d.finish();
}

export function rollFold({ w, h, panels }) {
  const c = compensate(w, 3, 3);
  const [fl, bk, fr] = panels || [c.inner, c.base, c.base];
  const d = new Die(stdOpts({ view: { closed: { az: -24, el: 36 } } }));
  d.root('back', fl, 0, bk, h, { name: 'Back cover', nameIn: 'Inside centre' });
  d.add('back', 'left', 'flap', { d: fl, angle: TIGHT, seq: 1, open: 58, name: 'Inner flap', nameIn: 'Inside right' });
  d.add('back', 'right', 'front', {
    d: fr,
    angle: RELAX,
    seq: 2,
    gap: 1,
    open: 62,
    name: 'Front cover',
    nameIn: 'Inside left',
    cover: true,
  });
  return d.finish();
}

export function zFold({ w, h }) {
  const a = w / 3;
  const d = new Die(
    stdOpts({
      pose: { fold: 'keep', open: 'stand-outside', openYaw: -12 },
      view: { closed: { az: -24, el: 36 }, open: { az: -18, el: 14 } },
    }),
  );
  d.root('back', 0, 0, a, h, { name: 'Back', nameIn: 'Inside right' });
  d.add('back', 'right', 'mid', { d: a, angle: -RELAX, seq: 1, open: -66, name: 'Middle', nameIn: 'Inside centre' });
  d.add('mid', 'far', 'front', { d: a, angle: RELAX, seq: 2, open: 66, name: 'Front cover', nameIn: 'Inside left', cover: true });
  return d.finish();
}

// `gap` is the space left between the closed doors: 4 mm by default, under 2 mm when they meet.
export function gateFold({ w, h, gap = 4 }) {
  const fl = (w - gap) / 4;
  const cn = (w + gap) / 2;
  const d = new Die(stdOpts({ view: { closed: { az: -22, el: 38 } } }));
  d.root('back', fl, 0, cn, h, { name: 'Back cover', nameIn: 'Inside centre' });
  const angle = gap < 2 ? TIGHT : RELAX + 0.8;
  d.add('back', 'left', 'door-l', { d: fl, angle, seq: 1, open: 48, name: 'Door right', nameIn: 'Inside right', cover: true });
  d.add('back', 'right', 'door-r', { d: fl, angle, seq: 2, open: 48, name: 'Door left', nameIn: 'Inside left', cover: true });
  return d.finish();
}

export function doubleGate({ w, h }) {
  const a = w / 4 - 1;
  const b = w / 4 + 1;
  const d = new Die(stdOpts({ view: { closed: { az: -24, el: 36 } } }));
  d.root('cr', a + b, 0, b, h, { name: 'Back cover', nameIn: 'Inside left-centre' });
  d.add('cr', 'right', 'r', { d: a, angle: TIGHT, seq: 1, open: 60, name: 'Inner flap', nameIn: 'Inside left' });
  d.add('cr', 'left', 'cl', { d: b, angle: RELAX, seq: 2, gap: 2, open: 22, name: 'Front cover', nameIn: 'Inside right-centre', cover: true });
  d.add('cl', 'far', 'l', { d: a, angle: TIGHT, seq: 1, open: 60, name: 'Inner flap', nameIn: 'Inside right' });
  return d.finish();
}

export function doubleParallel({ w, h }) {
  const a = w / 4 - 1;
  const b = w / 4 + 1;
  const d = new Die(stdOpts({ view: { closed: { az: -24, el: 36 } } }));
  d.root('c', a + b, 0, b, h, { name: 'Panel 3', nameIn: 'Inside 2' });
  d.add('c', 'left', 'b', { d: b, angle: TIGHT, seq: 1, open: 74, name: 'Panel 2', nameIn: 'Inside 3' });
  d.add('b', 'far', 'a', { d: a, angle: -TIGHT, seq: 2, open: -70, name: 'Panel 1', nameIn: 'Inside 4' });
  d.add('c', 'right', 'd', { d: a, angle: RELAX, seq: 2, gap: 2, open: 70, name: 'Front cover', nameIn: 'Inside 1', cover: true });
  return d.finish();
}

export function roll4({ w, h }) {
  const a = (w - 4 - 3) / 4 + 0; // panels step down towards the tucked-in end
  const widths = [a, a + 1.5, a + 2.75, a + 2.75];
  const d = new Die(stdOpts({ view: { closed: { az: -24, el: 36 } } }));
  d.root('c', widths[0] + widths[1], 0, widths[2], h, { name: 'Back cover', nameIn: 'Inside 2' });
  d.add('c', 'left', 'b', { d: widths[1], angle: TIGHT, seq: 2, gap: 1, open: 60, name: 'Panel 2', nameIn: 'Inside 3' });
  d.add('b', 'far', 'a', { d: widths[0], angle: TIGHT, seq: 1, open: 62, name: 'Panel 1', nameIn: 'Inside 4' });
  d.add('c', 'right', 'd', { d: widths[3], angle: RELAX, seq: 3, gap: 2, open: 58, name: 'Front cover', nameIn: 'Inside 1', cover: true });
  return d.finish();
}

export function accordion({ w, h, n }) {
  const a = w / n;
  const even = n % 2 === 0;
  const d = new Die(
    stdOpts({
      pose: { fold: even ? 'flip' : 'keep', open: 'stand-outside', openYaw: -10 },
      view: { closed: { az: -24, el: 36 }, open: { az: -20, el: 14 } },
    }),
  );
  d.root('p0', 0, 0, a, h, { name: 'Back', nameIn: `Inside ${n}` });
  let sign = even ? 1 : -1;
  for (let i = 1; i < n; i++) {
    d.add(i === 1 ? 'p0' : `p${i - 1}`, i === 1 ? 'right' : 'far', `p${i}`, {
      d: a,
      angle: sign * (i === n - 1 ? RELAX : TIGHT),
      seq: n - i,
      open: sign * 64,
      name: i === n - 1 ? 'Front cover' : `Panel ${i + 1}`,
      nameIn: `Inside ${n - i}`,
      cover: i === n - 1,
    });
    sign = -sign;
  }
  return d.finish();
}

export function crossFold({ w, h }) {
  const a = w / 2;
  const b = h / 2;
  const d = new Die(stdOpts({ pose: { open: 'flip' }, view: { closed: { az: -24, el: 38 }, open: { az: -22, el: 34 } } }));
  d.root('bl', 0, b, a, b, { name: 'Back cover', nameIn: 'Inside 2' });
  d.add('bl', 'top', 'tl', { d: b, angle: TIGHT, seq: 1, name: 'Inside top', nameIn: 'Inside 3' });
  d.add('bl', 'right', 'br', { d: a, angle: RELAX, seq: 2, gap: 2, open: 118, name: 'Front cover', nameIn: 'Inside 1', cover: true });
  d.add('tl', 'right', 'tr', { d: a, angle: -TIGHT, seq: 2, open: -118, name: 'Inside top right', nameIn: 'Inside 4' });
  d.seam([a, b], [w, b]);
  return d.finish();
}

export function mapFold({ w, h, cols = 4 }) {
  const a = w / cols;
  const b = h / 2;
  const even = cols % 2 === 0;
  const d = new Die(stdOpts({ pose: { fold: even ? 'flip' : 'keep', open: 'stand-outside', openYaw: -10 }, view: { closed: { az: -24, el: 38 }, open: { az: -20, el: 14 } } }));
  d.root('r1c0', 0, b, a, b, { name: 'Back cover', nameIn: 'Panel' });
  d.add('r1c0', 'top', 'r0c0', { d: b, angle: RELAX, seq: 2, gap: cols - 1, name: 'Panel', nameIn: 'Panel' });
  for (const row of [1, 0]) {
    let sign = even ? 1 : -1;
    for (let i = 1; i < cols; i++) {
      const edge = i === 1 ? 'right' : 'far';
      const s = row === 1 ? sign : -sign;
      d.add(`r${row}c${i - 1}`, edge, `r${row}c${i}`, {
        d: a,
        angle: s * TIGHT,
        seq: 1,
        open: s * 62,
        name: row === 1 && i === cols - 1 ? 'Front cover' : 'Panel',
        nameIn: 'Panel',
        cover: row === 1 && i === cols - 1,
      });
      sign = -sign;
    }
  }
  d.seam([a, b], [w, b]);
  return d.finish();
}

export function tentCard({ w, h }) {
  // A folded card that stands by itself, hinge on top. Folded is the finished state here.
  const a = 128;
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: tentPose(a) },
    view: { closed: { az: -30, el: 16 } },
    meta: { noOpen: true, closedLabel: 'Standing' },
  });
  d.root('back', 0, 0, w, h / 2, { name: 'Back (reads upside down)', nameIn: 'Inside top' });
  d.add('back', 'bottom', 'front', { d: h / 2, angle: a, seq: 1, name: 'Front', nameIn: 'Inside bottom', cover: true });
  return d.finish();
}

// Three-sided table talker with a glue strip, stands on its base.
export function tableTalker({ w, h, side }) {
  const s = side ?? h * 0.45;
  const base = s * 0.72;
  const glue = 14;
  const a = 180 - (Math.acos(base / 2 / s) * 180) / Math.PI;
  const apex = 180 - 2 * (180 - a);
  const d = new Die({
    bleed: 3,
    safe: 3,
    pose: { fold: 'flip', closedYaw: 180 },
    view: { closed: { az: -30, el: 16 } },
    meta: { noOpen: true, closedLabel: 'Standing' },
  });
  d.root('base', 0, s, w, base, { name: 'Base', nameIn: 'Base' });
  d.add('base', 'top', 'back', { d: s, angle: a, seq: 1, name: 'Back', nameIn: 'Inside' });
  d.add('base', 'bottom', 'front', { d: s, angle: a, seq: 1, name: 'Front', nameIn: 'Inside', cover: true });
  d.add('front', 'far', 'glue', { d: glue, inL: 1, inR: 1, tL: 2, tR: 2, angle: 180 - apex, seq: 2, role: 'glue', name: 'Glue', nameIn: 'Glue' });
  return d.finish();
}
