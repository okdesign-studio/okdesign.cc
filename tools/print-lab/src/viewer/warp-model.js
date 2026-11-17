// Sheets that do not fold along straight lines: labels wrapping a bottle, a paper cone, a pillow box,
// a banner rolling out of its cassette. A fine grid of the sheet is pushed through a deformation.

import * as THREE from 'three';

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);

export class WarpModel {
  constructor(die, { thickness, materials, uvOf, surface }) {
    this.kind = 'warp';
    this.die = die;
    this.t = thickness;
    this.object = new THREE.Group();
    this.pickables = [];
    this.channels = [];
    const w = die.warp;
    this.warp = w;
    const nu = w.nu || 96;
    const nv = w.nv || 32;
    this.nu = nu;
    this.nv = nv;
    const count = (nu + 1) * (nv + 1);
    this.flat = new Float32Array(count * 2);
    const pos = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    const uvB = new Float32Array(count * 2);
    const idx = [];
    let k = 0;
    for (let j = 0; j <= nv; j++) {
      for (let i = 0; i <= nu; i++) {
        const [x, y] = w.grid(i / nu, j / nv);
        this.flat[k * 2] = x;
        this.flat[k * 2 + 1] = y;
        const [u, v] = uvOf(x, y);
        uv[k * 2] = u;
        uv[k * 2 + 1] = v;
        uvB[k * 2] = 1 - u;
        uvB[k * 2 + 1] = v;
        k++;
      }
    }
    for (let j = 0; j < nv; j++) {
      for (let i = 0; i < nu; i++) {
        const a = j * (nu + 1) + i;
        const b = a + 1;
        const c = a + nu + 1;
        const d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    this.geo = g;
    const g2 = new THREE.BufferGeometry();
    g2.setAttribute('position', g.attributes.position);
    g2.setAttribute('normal', g.attributes.normal);
    g2.setAttribute('uv', new THREE.BufferAttribute(uvB, 2));
    g2.setIndex(idx);
    surface.back.side = THREE.BackSide;
    if (w.mask) this._mask(surface);
    const front = new THREE.Mesh(g, materials[0]);
    const back = new THREE.Mesh(g2, materials[1]);
    back.userData.side = 'back';
    for (const m of [front, back]) {
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      m.userData.panel = die.panels[0].id;
      this.object.add(m);
      this.pickables.push(m);
    }
    front.customDepthMaterial = undefined;
    if (w.prop) {
      this.prop = w.prop();
      if (this.prop) this.object.add(this.prop.object);
    }
    this.apply([0]);
  }

  // Cut-out shapes on a grid: the outline becomes an alpha mask.
  _mask(surface) {
    const c = document.createElement('canvas');
    c.width = surface.canvas.front.width;
    c.height = surface.canvas.front.height;
    const x = c.getContext('2d');
    const k = c.width / surface.ext.w;
    x.fillStyle = '#000';
    x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = '#fff';
    x.beginPath();
    this.die.panels[0].poly.forEach((q, i) => {
      const px = (q[0] - surface.ext.x0) * k;
      const py = (q[1] - surface.ext.y0) * k;
      if (i) x.lineTo(px, py);
      else x.moveTo(px, py);
    });
    x.closePath();
    x.fill();
    const t = new THREE.CanvasTexture(c);
    this.maskTex = t;
    for (const m of [surface.front, surface.back]) {
      m.alphaMap = t;
      m.alphaTest = 0.5;
      m.needsUpdate = true;
    }
  }

  vector(state) {
    if (state === 'flat' || state === 'inside') return [0];
    if (state === 'open') return [this.warp.openAt ?? 1];
    return [1];
  }

  windows() {
    return { steps: 3, list: [[0, 1]] };
  }

  _deform(p, out) {
    const { flat, warp } = this;
    const n = flat.length / 2;
    for (let i = 0; i < n; i++) {
      const r = warp.deform(flat[i * 2], flat[i * 2 + 1], p);
      out[i * 3] = r[0];
      out[i * 3 + 1] = r[1];
      out[i * 3 + 2] = r[2];
    }
  }

  apply(vec) {
    this.vec = vec;
    const p = vec[0];
    this._deform(p, this.geo.attributes.position.array);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.computeVertexNormals();
    this.geo.attributes.normal.needsUpdate = true;
    if (this.prop) this.prop.apply(p);
  }

  bounds(vec) {
    const n = this.flat.length / 2;
    const tmp = new Float32Array(n * 3);
    this._deform(vec[0], tmp);
    const box = new THREE.Box3();
    const v = new THREE.Vector3();
    const step = Math.max(1, Math.floor(n / 600));
    for (let i = 0; i < n; i += step) {
      v.set(tmp[i * 3], tmp[i * 3 + 1], tmp[i * 3 + 2]);
      box.expandByPoint(v);
    }
    if (this.prop?.box) {
      const b = this.prop.box(vec[0]);
      if (b) box.union(b);
    }
    return box;
  }

  dispose() {
    this.geo.dispose();
    this.maskTex?.dispose();
    this.prop?.dispose?.();
  }
}

export const warpUtil = { clamp01, smooth };

// Bending a sheet around a vertical axis at x0. p = 0 is flat, p = 1 is the full radius.
export function bendY(x, x0, r, p) {
  const k = p / r;
  const s = x - x0;
  if (k < 1e-5) return [x, 0];
  return [x0 + Math.sin(k * s) / k, -(1 - Math.cos(k * s)) / k];
}
