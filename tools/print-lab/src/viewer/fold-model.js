// Turns a Die into a jointed 3D sheet. Every panel keeps its flat sheet coordinates; folding is a
// chain of rotations around the crease lines, so print artwork never has to be re-projected.
// Where two panels meet, a small curved "bead" follows the fold. It keeps the outer skin of the
// sheet closed and gives the crease its soft highlight, which is what makes a fold read as paper.

import * as THREE from 'three';

const DEG = Math.PI / 180;
const BEAD_SEGS = 7;

const _m = new THREE.Matrix4();
const _t0 = new THREE.Matrix4();
const _t1 = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

function triangulate(contour, holes) {
  const c = contour.map((p) => new THREE.Vector2(p[0], p[1]));
  const hs = (holes || []).map((h) => h.map((p) => new THREE.Vector2(p[0], p[1])));
  // ShapeUtils expects outer CCW and holes CW in a y-up sense; the winding is corrected per triangle.
  if (THREE.ShapeUtils.isClockWise(c)) c.reverse();
  for (const h of hs) if (!THREE.ShapeUtils.isClockWise(h)) h.reverse();
  const tris = THREE.ShapeUtils.triangulateShape(c, hs);
  const all = [...c];
  for (const h of hs) all.push(...h);
  return { pts: all, tris };
}

export function panelGeometry(panel, t, uvOf, edgePeriod = 8) {
  const { pts, tris } = triangulate(panel.poly, panel.holes);
  const z0 = -(panel.zOff || 0);
  const pos = [];
  const nor = [];
  const uv = [];
  const fIdx = [];
  const bIdx = [];
  const eIdx = [];

  const nv = pts.length;
  for (const p of pts) {
    pos.push(p.x, -p.y, z0);
    nor.push(0, 0, 1);
    const [u, v] = uvOf(p.x, p.y);
    uv.push(u, v);
  }
  for (const p of pts) {
    pos.push(p.x, -p.y, z0 - t);
    nor.push(0, 0, -1);
    const [u, v] = uvOf(p.x, p.y);
    uv.push(1 - u, v);
  }
  for (const tri of tris) {
    let [a, b, c] = tri;
    const ax = pts[a].x;
    const ay = -pts[a].y;
    const cr = (pts[b].x - ax) * (-pts[c].y - ay) - (-pts[b].y - ay) * (pts[c].x - ax);
    if (cr < 0) [b, c] = [c, b];
    fIdx.push(a, b, c);
    bIdx.push(c + nv, b + nv, a + nv);
  }

  const wall = (loop) => {
    let run = 0;
    const area = THREE.ShapeUtils.area(loop.map((p) => new THREE.Vector2(p[0], -p[1])));
    const s = area >= 0 ? 1 : -1;
    for (let i = 0; i < loop.length; i++) {
      const a = loop[i];
      const b = loop[(i + 1) % loop.length];
      const dx = b[0] - a[0];
      const dy = -(b[1] - a[1]);
      const L = Math.hypot(dx, dy);
      if (L < 1e-6) continue;
      const nx = (dy / L) * s;
      const ny = (-dx / L) * s;
      const base = pos.length / 3;
      pos.push(a[0], -a[1], z0, b[0], -b[1], z0, b[0], -b[1], z0 - t, a[0], -a[1], z0 - t);
      for (let k = 0; k < 4; k++) nor.push(nx, ny, 0);
      const u0 = run / edgePeriod;
      const u1 = (run + L) / edgePeriod;
      uv.push(u0, 1, u1, 1, u1, 0, u0, 0);
      run += L;
      if (s > 0) eIdx.push(base, base + 3, base + 2, base, base + 2, base + 1);
      else eIdx.push(base, base + 2, base + 3, base, base + 1, base + 2);
    }
  };
  wall(panel.poly);
  for (const h of panel.holes || []) wall(h);

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  const index = [...fIdx, ...bIdx, ...eIdx];
  g.setIndex(index);
  g.addGroup(0, fIdx.length, 0);
  g.addGroup(fIdx.length, bIdx.length, 1);
  g.addGroup(fIdx.length + bIdx.length, eIdx.length, 2);
  g.computeBoundingSphere();
  return g;
}

export class FoldModel {
  constructor(die, { thickness, materials, uvOf, flute, leafMaterials, leafT }) {
    this.kind = 'fold';
    this.die = die;
    this.t = thickness;
    this.materials = materials;
    this.uvOf = uvOf;
    this.object = new THREE.Group();
    this.object.name = 'fold-model';
    this.nodes = [];
    this.byId = {};
    this.pickables = [];
    this.flute = flute;
    this.channels = []; // non-joint animated things: stacks, ropes, inserts
    this.leafMaterials = leafMaterials;
    this.leafT = leafT;
    this.outlineMat = new THREE.LineBasicMaterial({ color: '#000000', transparent: true, opacity: 0.16, depthWrite: false });
    this._build();
    this.apply(this.vector('flat'));
  }

  _build() {
    const { die, t } = this;
    for (const p of die.panels) {
      const group = new THREE.Group();
      group.matrixAutoUpdate = false;
      const parent = p.parent ? this.byId[p.parent] : null;
      (parent ? parent.group : this.object).add(group);
      const uvOf = p.uvRect ? (x, y) => [(x - p.uvRect.x) / p.uvRect.w, 1 - (y - p.uvRect.y) / p.uvRect.h] : this.uvOf;
      const mats = p.role === 'leaf' && !p.coverLeaf && this.leafMaterials ? this.leafMaterials(p) : this.materials;
      const pt = p.role === 'leaf' && this.leafT ? this.leafT : t;
      const mesh = new THREE.Mesh(panelGeometry(p, pt, uvOf, this.flute ? this.flute : 8), mats);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData.panel = p.id;
      group.add(mesh);
      this.pickables.push(mesh);
      if (p.outline?.length) group.add(this._outline(p));
      const node = { panel: p, group, mesh, parent, angle: 0, world: new THREE.Matrix4() };
      this.nodes.push(node);
      this.byId[p.id] = node;
      if (p.hinge) this._hinge(node);
      if (p.mount) this._mount(node);
      // Outline sample used for fast bounding boxes.
      const step = Math.max(1, Math.floor(p.poly.length / 14));
      node.sample = p.poly.filter((_, i) => i % step === 0).map((q) => new THREE.Vector3(q[0], -q[1], 0));
    }
    this.steps = [...new Set(die.panels.filter((p) => p.seq).map((p) => p.seq))].sort((a, b) => a - b);
  }

  // Hairline along cut edges. On a blank white model this is what separates one flap from the next.
  _outline(p) {
    const e = Math.max(0.04, this.t * 0.2);
    const pos = [];
    for (const [a, b] of p.outline) {
      pos.push(a[0], -a[1], e, b[0], -b[1], e);
      pos.push(a[0], -a[1], -this.t - e, b[0], -b[1], -this.t - e);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    return new THREE.LineSegments(g, this.outlineMat);
  }

  _hinge(node) {
    const { t } = this;
    const p = node.panel;
    const A = new THREE.Vector3(p.hinge.a[0], -p.hinge.a[1], 0);
    const B = new THREE.Vector3(p.hinge.b[0], -p.hinge.b[1], 0);
    const axis = B.clone().sub(A).normalize();
    const r = new THREE.Vector3(p.centroid[0], -p.centroid[1], 0).sub(A);
    if (new THREE.Vector3().crossVectors(axis, r).z > 0) axis.negate();
    const valley = p.valley ?? (p.angle ?? 0) >= 0;
    const gap = (p.gap || 0) * t + (p.lift || 0);
    const zp = p.pivotZ !== undefined ? p.pivotZ : valley ? -t - gap / 2 : gap / 2;
    const pivot = A.clone();
    pivot.z = zp;
    node.axis = axis;
    node.pivot = pivot;
    node.valley = valley;
    node.A = A;
    node.B = B;
    node.pre = new THREE.Matrix4().makeTranslation(pivot.x, pivot.y, pivot.z);
    node.post = new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z);
    if (p.bead === false || p.perfed) return;
    const bead = this._bead(node);
    if (bead) (node.parent ? node.parent.group : this.object).add(bead);
  }

  _bead(node) {
    const n = BEAD_SEGS;
    const rows = n + 1;
    const vCount = rows * 2 * 2 + 4 * 2; // far arc + near arc + caps
    const pos = new Float32Array(vCount * 3);
    const nor = new Float32Array(vCount * 3);
    const uv = new Float32Array(vCount * 2);
    const idxF = [];
    const idxN = [];
    const idxC = [];
    for (let i = 0; i < n; i++) {
      const a = i * 2;
      idxF.push(a, a + 2, a + 3, a, a + 3, a + 1);
      const b = rows * 2 + i * 2;
      idxN.push(b, b + 3, b + 2, b, b + 1, b + 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex([...idxF, ...idxN, ...idxC]);
    const farMat = node.valley ? 0 : 1;
    const nearMat = node.valley ? 1 : 0;
    g.addGroup(0, idxF.length, farMat);
    g.addGroup(idxF.length, idxN.length, nearMat);
    const mesh = new THREE.Mesh(g, this.materials);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    node.bead = mesh;
    // UVs never change: the whole bead samples the artwork along the fold line.
    const p = node.panel;
    const [ua, va] = this.uvOf(p.hinge.a[0], p.hinge.a[1]);
    const [ub, vb] = this.uvOf(p.hinge.b[0], p.hinge.b[1]);
    const setUV = (offset, flipF, flipN) => {
      for (let i = 0; i < rows; i++) {
        const k = offset + i * 2;
        uv[k * 2] = flipF ? 1 - ua : ua;
        uv[k * 2 + 1] = va;
        uv[(k + 1) * 2] = flipF ? 1 - ub : ub;
        uv[(k + 1) * 2 + 1] = vb;
      }
    };
    setUV(0, !node.valley);
    setUV(rows * 2, node.valley);
    return mesh;
  }

  _updateBead(node, deg) {
    const mesh = node.bead;
    if (!mesh) return;
    if (Math.abs(deg) < 0.05 || this.t < 0.02) {
      mesh.visible = false;
      return;
    }
    mesh.visible = true;
    const { t } = this;
    const { A, B, pivot, axis, valley } = node;
    const theta = deg * DEG;
    const g = mesh.geometry;
    const pos = g.attributes.position.array;
    const nor = g.attributes.normal.array;
    const rows = BEAD_SEGS + 1;
    const up = valley ? 1 : -1;
    // Radii measured from the pivot to the two skins of the sheet.
    const zFar = valley ? 0 : -t;
    const zNear = valley ? -t : 0;
    const rFar = zFar - pivot.z;
    const rNear = zNear - pivot.z;
    const write = (base, radial, nSign) => {
      for (let i = 0; i < rows; i++) {
        const phi = (theta * i) / BEAD_SEGS;
        _q.setFromAxisAngle(axis, phi);
        _v.set(0, 0, radial).applyQuaternion(_q);
        _v2.set(0, 0, up * nSign).applyQuaternion(_q);
        const k = base + i * 2;
        pos[k * 3] = A.x + _v.x;
        pos[k * 3 + 1] = A.y + _v.y;
        pos[k * 3 + 2] = pivot.z + _v.z;
        pos[(k + 1) * 3] = B.x + _v.x;
        pos[(k + 1) * 3 + 1] = B.y + _v.y;
        pos[(k + 1) * 3 + 2] = pivot.z + _v.z;
        nor[k * 3] = nor[(k + 1) * 3] = _v2.x;
        nor[k * 3 + 1] = nor[(k + 1) * 3 + 1] = _v2.y;
        nor[k * 3 + 2] = nor[(k + 1) * 3 + 2] = _v2.z;
      }
    };
    write(0, rFar, 1);
    write(rows * 2, rNear, -1);
    g.attributes.position.needsUpdate = true;
    g.attributes.normal.needsUpdate = true;
  }

  _mount(node) {
    const p = node.panel;
    const to = p.mount;
    node.mountTo = {
      pos: new THREE.Vector3(...(to.pos || [0, 0, 0])),
      q: new THREE.Quaternion().setFromEuler(
        new THREE.Euler((to.rot?.[0] || 0) * DEG, (to.rot?.[1] || 0) * DEG, (to.rot?.[2] || 0) * DEG),
      ),
      center: new THREE.Vector3(...(to.center || [p.centroid[0], -p.centroid[1], 0])),
      arc: to.arc || 0,
      slide: to.slide ? new THREE.Vector3(...to.slide) : null,
    };
  }

  // A state is a plain vector so the stage can interpolate any model the same way.
  vector(state) {
    const joints = this.nodes.map((n) => {
      const p = n.panel;
      if (p.mount) {
        if (state === 'flat' || state === 'inside') return 0;
        if (state === 'open' && p.mount.openAt !== undefined) return p.mount.openAt;
        return 1;
      }
      if (!p.hinge) return 0;
      if (state === 'flat' || state === 'inside') return 0;
      if (state === 'open') return p.open ?? p.angle;
      return p.angle;
    });
    return [...joints, ...this.channels.map((c) => c.value(state))];
  }

  // Which part of the transition each joint plays in. dir > 0 folds, dir < 0 unfolds.
  windows(from, to, dir) {
    const active = new Set();
    const items = [...this.nodes.map((n) => n.panel.seq || 1), ...this.channels.map((c) => c.seq || 1)];
    items.forEach((q, i) => {
      if (Math.abs(from[i] - to[i]) > 0.01) active.add(q);
    });
    const seqs = [...active].sort((a, b) => (dir > 0 ? a - b : b - a));
    const S = Math.max(1, seqs.length);
    const w = S === 1 ? 1 : Math.min(1, 1.5 / S);
    const startOf = (i) => (S === 1 ? 0 : (i * (1 - w)) / (S - 1));
    return {
      steps: S,
      list: items.map((q) => {
        const i = seqs.indexOf(q);
        if (i < 0) return [0, 1];
        return [startOf(i), startOf(i) + w];
      }),
    };
  }

  apply(vec) {
    this.vec = vec;
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      const v = vec[i];
      if (n.axis) {
        _q.setFromAxisAngle(n.axis, v * DEG);
        _m.makeRotationFromQuaternion(_q);
        n.group.matrix.copy(n.pre).multiply(_m).multiply(n.post);
        n.group.matrixWorldNeedsUpdate = true;
        this._updateBead(n, v);
      } else if (n.mountTo) {
        const to = n.mountTo;
        const c = to.center;
        // With a slide the part first travels to its starting line, then runs home along it.
        const v1 = to.slide ? Math.min(1, v / 0.55) : v;
        const v2 = to.slide ? Math.max(0, (v - 0.55) / 0.45) : 0;
        _q.identity().slerp(to.q, v1);
        _m.makeRotationFromQuaternion(_q);
        _t0.makeTranslation(-c.x, -c.y, -c.z);
        const lift = Math.sin(Math.PI * v1) * to.arc;
        const sx = to.slide ? to.slide.x * (1 - v2) : 0;
        const sy = to.slide ? to.slide.y * (1 - v2) : 0;
        const sz = to.slide ? to.slide.z * (1 - v2) : 0;
        const px = THREE.MathUtils.lerp(c.x, to.pos.x + sx, v1);
        const py = THREE.MathUtils.lerp(c.y, to.pos.y + sy, v1);
        const pz = THREE.MathUtils.lerp(c.z, to.pos.z + sz, v1) - lift;
        _t1.makeTranslation(px, py, pz);
        n.group.matrix.copy(_t1).multiply(_m).multiply(_t0);
        n.group.matrixWorldNeedsUpdate = true;
      }
    }
    this.channels.forEach((c, i) => c.apply(vec[this.nodes.length + i]));
  }

  // Bounding box of the sheet in model space for an arbitrary state.
  bounds(vec) {
    const keep = this.vec;
    this.apply(vec);
    const box = new THREE.Box3();
    const t = this.t;
    for (const n of this.nodes) {
      n.world.copy(n.group.matrix);
      if (n.parent) n.world.premultiply(n.parent.world);
      const z0 = -(n.panel.zOff || 0);
      for (const s of n.sample) {
        for (const z of [z0, z0 - t]) {
          _v.set(s.x, s.y, z).applyMatrix4(n.world);
          box.expandByPoint(_v);
        }
      }
    }
    for (const b of this.extraBounds || []) box.union(b(vec));
    this.apply(keep);
    return box;
  }

  // World transform of a panel in a given state, relative to the model root.
  panelMatrix(id, vec) {
    const keep = this.vec;
    this.apply(vec);
    const chain = [];
    let n = this.byId[id];
    while (n) {
      chain.unshift(n);
      n = n.parent;
    }
    const m = new THREE.Matrix4();
    for (const c of chain) m.multiply(c.group.matrix);
    this.apply(keep);
    return m;
  }

  dispose() {
    this.object.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
  }
}
