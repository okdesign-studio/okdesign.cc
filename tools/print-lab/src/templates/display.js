// Large format and point of sale. These stay simple on purpose: the print is a flat graphic,
// the hardware around it is what makes the format recognisable.

import * as THREE from 'three';
import { Die } from '../core/die.js';
import { circle, rect } from '../core/geom.js';
import { warpUtil } from '../viewer/warp-model.js';

const { clamp01, smooth } = warpUtil;

// Poster or rigid sign leaning slightly back.
export function poster({ w, h, eyelets = 0, name = 'Poster', stand = true }) {
  const holes = [];
  if (eyelets) {
    const n = Math.max(2, Math.round(w / eyelets));
    for (let i = 0; i <= n; i++) {
      const x = 20 + ((w - 40) * i) / n;
      holes.push(circle(x, 20, 6, 18), circle(x, h - 20, 6, 18));
    }
  }
  const d = new Die({
    bleed: eyelets ? 0 : 3,
    safe: eyelets ? 30 : 5,
    pose: { fold: 'stand', open: 'stand', tilt: stand ? -5 : 0 },
    view: { closed: { az: -26, el: 8 } },
    meta: { noOpen: true, closedLabel: 'Standing' },
  });
  d.root('sheet', 0, 0, w, h, { name, nameIn: 'Back', cover: true, holes });
  return d.finish();
}

// Roll-up banner: the graphic comes out of the cassette.
export function rollup({ w = 850, h = 2000, tube = 120 }) {
  const d = new Die({
    bleed: 3,
    safe: 25,
    sides: 1,
    pose: { fold: 'stand' },
    view: { closed: { az: -28, el: 6 } },
    meta: { noOpen: true, closedLabel: 'Standing' },
  });
  d.root('banner', 0, 0, w, h, { name: 'Banner', nameIn: 'Back', cover: true });
  d.finish();
  d.warp = {
    nu: 4,
    nv: 96,
    grid: (u, v) => [u * w, v * h],
    deform(x, y, p) {
      // Lying flat at p = 0. On the way up the sheet reels into the cassette and is pulled out again.
      const q = p < 0.5 ? 1 - smooth(p * 2) : smooth((p - 0.5) * 2);
      const yy = h - y - h * (1 - q);
      return [x, Math.max(0, yy) - h, 0];
    },
    prop() {
      const g = new THREE.Group();
      const steel = new THREE.MeshStandardMaterial({ color: '#c3c5c9', metalness: 1, roughness: 0.3 });
      const dark = new THREE.MeshStandardMaterial({ color: '#17181b', metalness: 0.4, roughness: 0.5 });
      const cass = new THREE.Mesh(new THREE.CapsuleGeometry(40, w + 20, 6, 20), steel);
      cass.rotation.z = Math.PI / 2;
      cass.position.set(w / 2, -h + 6, 0);
      cass.castShadow = true;
      g.add(cass);
      for (const s of [-1, 1]) {
        const foot = new THREE.Mesh(new THREE.BoxGeometry(50, 12, 360), dark);
        foot.position.set(w / 2 + s * (w / 2 - 60), -h - 34, 0);
        foot.castShadow = true;
        g.add(foot);
      }
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, h, 12), steel);
      pole.position.set(w / 2, -h / 2, -22);
      pole.castShadow = true;
      g.add(pole);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(w + 6, 22, 14), steel);
      rail.castShadow = true;
      g.add(rail);
      return {
        object: g,
        apply(p) {
          const q = p < 0.5 ? 0 : smooth((p - 0.5) * 2);
          g.visible = p > 0.02;
          pole.scale.y = Math.max(0.01, q);
          pole.position.y = -h + (h * q) / 2;
          rail.position.set(w / 2, -h + h * q, 0);
        },
        box(p) {
          if (p < 0.5) return null;
          const b = new THREE.Box3();
          b.min.set(-20, -h - 42, -190);
          b.max.set(w + 20, 12, 190);
          return b;
        },
      };
    },
  };
  void tube;
  void rect;
  return d;
}

// A-board pavement sign: two boards hinged at the top.
export function aBoard({ w, h, t = 22 }) {
  const a = 148;
  const r = (a * Math.PI) / 180;
  const child = [0, -Math.cos(r), -Math.sin(r)];
  const down = [0, 1 + child[1], child[2]];
  const L = Math.hypot(down[1], down[2]);
  const up = [0, -down[1] / L, -down[2] / L];
  const d = new Die({
    bleed: 3,
    safe: 15,
    pose: { fold: { up, face: [0, -Math.sin(r), Math.cos(r)] } },
    view: { closed: { az: -30, el: 10 } },
    meta: { noOpen: true, thick: t, edge: '#b6b8bd', closedLabel: 'Standing' },
  });
  d.root('rear', 0, 0, w, h, { name: 'Rear poster', nameIn: 'Frame back' });
  d.add('rear', 'bottom', 'front', { d: h, angle: a, seq: 1, name: 'Front poster', nameIn: 'Frame back', cover: true, bead: false });
  return d.finish();
}
