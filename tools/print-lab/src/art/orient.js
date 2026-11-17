// Which way is "up" for artwork on each panel. A box lid and its side wall can sit at 90 or 180
// degrees to each other on the flat sheet, so this is worked out from the folded model itself.

import * as THREE from 'three';

// `states` picks the pose each side is judged in. The default reads both sides on the closed
// piece. Templates read the inside on the open piece instead: that is where the inside is seen
// (the inside of a box lid stands up behind the box, hinge at the bottom).
export function computeOrient(stage, model, die, states = { front: 'closed', back: 'closed' }) {
  const out = {};
  if (!model.panelMatrix) {
    for (const p of die.panels) out[p.id] = { front: 0, back: 0 };
    return out;
  }
  const poses = {};
  for (const side of ['front', 'back']) {
    const info = stage._info(states[side] || 'closed');
    poses[side] = { info, R: new THREE.Matrix4().makeRotationFromQuaternion(info.q) };
  }
  const n = new THREE.Vector3();
  const v = new THREE.Vector3();
  for (const p of die.panels) {
    const entry = {};
    for (const side of ['front', 'back']) {
      const { info, R } = poses[side];
      const M = model.panelMatrix(p.id, info.vec);
      const W = new THREE.Matrix4().multiplyMatrices(R, M);
      n.set(0, 0, side === 'front' ? 1 : -1).transformDirection(W);
      const up = Math.abs(n.y) > 0.72 ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(0, 1, 0);
      let best = 0;
      let score = -Infinity;
      for (const rot of [0, 90, 180, 270]) {
        const a = (rot * Math.PI) / 180;
        // Up of rotated artwork in model axes. The back canvas is mirrored in x.
        const ux = side === 'front' ? Math.sin(a) : -Math.sin(a);
        v.set(ux, Math.cos(a), 0).transformDirection(W);
        const d = v.dot(up);
        if (d > score + 1e-6) {
          score = d;
          best = rot;
        }
      }
      entry[side] = best;
    }
    out[p.id] = entry;
  }
  return out;
}
