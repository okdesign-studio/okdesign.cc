// Things that curve: labels on containers, cups, cones, the pillow box.

import * as THREE from 'three';
import { Die } from '../core/die.js';
import { rect, fillet, ellipse } from '../core/geom.js';
import { bendY, warpUtil } from '../viewer/warp-model.js';

const { clamp01, smooth } = warpUtil;

// Revolved packaging. Profiles are [radius, height] in mm.
function lathe(profile, material, seg = 72) {
  const pts = profile.map((p) => new THREE.Vector2(p[0], p[1]));
  const m = new THREE.Mesh(new THREE.LatheGeometry(pts, seg), material);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

const smoothProfile = (pts, n = 6) => {
  // Catmull-Rom through the given points so short lists still give a soft silhouette.
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    for (let j = 0; j < n; j++) {
      const t = j / n;
      const f = (a, b, c, d) => 0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t);
      out.push([Math.max(0, f(p0[0], p1[0], p2[0], p3[0])), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
};

const CONTAINERS = {
  wine: {
    r: 37,
    build() {
      const glass = new THREE.MeshPhysicalMaterial({ color: '#10231a', roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.1 });
      const foil = new THREE.MeshStandardMaterial({ color: '#141416', metalness: 0.7, roughness: 0.35 });
      const g = new THREE.Group();
      g.add(lathe(smoothProfile([[0, 0], [35, 0], [37, 3], [37, 60], [37, 190], [35, 210], [24, 236], [15.5, 258], [14, 290], [14, 310], [15, 312], [15, 318], [0, 318]]), glass));
      const cap = lathe([[14.6, 262], [14.6, 300], [15.6, 300], [15.6, 319], [0, 320]], foil);
      g.add(cap);
      return g;
    },
    height: 320,
    labelY: 30,
  },
  beer: {
    r: 30,
    build() {
      const glass = new THREE.MeshPhysicalMaterial({ color: '#3a1c07', roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.1 });
      const steel = new THREE.MeshStandardMaterial({ color: '#b7b8bb', metalness: 1, roughness: 0.3 });
      const g = new THREE.Group();
      g.add(lathe(smoothProfile([[0, 0], [28, 0], [30, 3], [30, 60], [30, 120], [28, 142], [16, 176], [13, 200], [13, 214], [14.5, 216], [14.5, 221], [0, 221]]), glass));
      g.add(lathe([[15, 214], [15.2, 222], [0, 224]], steel));
      return g;
    },
    height: 224,
    labelY: 18,
  },
  jar: {
    r: 37,
    build() {
      const glass = new THREE.MeshPhysicalMaterial({ color: '#d9c7a4', roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
      const lid = new THREE.MeshStandardMaterial({ color: '#17171a', metalness: 0.7, roughness: 0.3 });
      const g = new THREE.Group();
      g.add(lathe(smoothProfile([[0, 0], [33, 0], [37, 5], [37, 60], [37, 100], [33, 110], [31, 116]]), glass));
      g.add(lathe([[35, 114], [35, 128], [34, 130], [0, 130]], lid));
      return g;
    },
    height: 130,
    labelY: 14,
  },
  can: {
    r: 33,
    build() {
      const al = new THREE.MeshStandardMaterial({ color: '#d7d8dc', metalness: 1, roughness: 0.28 });
      const g = new THREE.Group();
      g.add(lathe(smoothProfile([[0, 3], [24, 0], [29, 1], [33, 10], [33, 60], [33, 100], [33, 104], [27, 114], [26.6, 115.4], [24.4, 112], [0, 112]]), al));
      return g;
    },
    height: 115.4,
    labelY: 10,
  },
  mug: {
    r: 41,
    build() {
      const ceramic = new THREE.MeshPhysicalMaterial({ color: '#f4f3ef', roughness: 0.3, clearcoat: 0.6 });
      const g = new THREE.Group();
      g.add(lathe([[0, 0], [37, 0], [41, 3], [41, 95], [40, 96], [37.6, 96], [37.6, 8], [0, 7]], ceramic));
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 76, -41 + 1),
        new THREE.Vector3(0, 82, -60),
        new THREE.Vector3(0, 56, -72),
        new THREE.Vector3(0, 28, -60),
        new THREE.Vector3(0, 22, -41 + 1),
      ]);
      const h = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 5.5, 12), ceramic);
      h.castShadow = true;
      g.add(h);
      return g;
    },
    height: 96,
    labelY: 0,
  },
};

// A printed strip wrapping a container.
export function wrapLabel({ w, h, container = 'wine', r: radius, y, shape, stock }) {
  const C = CONTAINERS[container];
  const r = radius ?? C.r;
  const R = r + 0.5; // the label sits on the surface, not in it
  const d = new Die({
    bleed: 2,
    safe: 3,
    sides: 1,
    pose: { fold: 'stand', open: 'stand' },
    view: { closed: { az: container === 'mug' ? 58 : -22, el: container === 'mug' ? 16 : 8 } },
    meta: { noOpen: true, unitBoost: 0.9, closedLabel: 'Applied' },
  });
  let poly = rect(0, 0, w, h);
  if (shape === 'round') poly = fillet(poly, 6, 6);
  if (shape === 'oval') poly = ellipse(w / 2, h / 2, w / 2, h / 2, 64);
  d.rootPoly('label', poly, { name: 'Label', nameIn: 'Adhesive', cover: true });
  d.finish();
  const y0 = y ?? C.labelY;
  d.warp = {
    nu: 120,
    nv: 8,
    mask: shape === 'oval' || shape === 'round',
    grid: (u, v) => [u * w, v * h],
    // Bends away from the viewer: the printed face stays on the outside.
    deform(x, yy, p) {
      const b = smooth(clamp01(p));
      const [X, Z] = bendY(x, w / 2, R, b);
      return [X, -yy, Z];
    },
    prop() {
      const obj = C.build();
      // In model axes the container stands on y = -(y0 + h), axis behind the label centre.
      const holder = new THREE.Group();
      holder.add(obj);
      holder.position.set(w / 2, -(h + y0), -R);
      return {
        object: holder,
        apply(p) {
          const s = smooth(clamp01((p - 0.15) / 0.55));
          holder.visible = s > 0.01;
          holder.scale.setScalar(Math.max(0.001, s));
        },
        box(p) {
          if (p < 0.5) return null;
          const b = new THREE.Box3();
          b.min.set(w / 2 - R, -(h + y0), -2 * R);
          b.max.set(w / 2 + R, -(h + y0) + C.height, 0);
          return b;
        },
      };
    },
  };
  void stock;
  return d;
}

// Conical things are cut from a ring sector. apex at (cx, cy), radii r0..r1, half angle a.
function conePoints(r0, r1, sweep, cx, cy, n = 56) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = -sweep / 2 + (i / n) * sweep;
    pts.push([cx + Math.sin(t) * r1, cy + Math.cos(t) * r1]);
  }
  if (r0 > 0.5) {
    for (let i = n; i >= 0; i--) {
      const t = -sweep / 2 + (i / n) * sweep;
      pts.push([cx + Math.sin(t) * r0, cy + Math.cos(t) * r0]);
    }
  } else pts.push([cx, cy]);
  return pts;
}

// Pose that stands a cone built by coneDeformer on its axis.
const conePose = (beta) => ({
  up: [0, -Math.cos(beta), -Math.sin(beta)],
  face: [0, -Math.sin(beta), Math.cos(beta)],
});

function coneDeformer({ cx, cy, beta }) {
  // beta: half angle of the finished cone. The centre line of the sheet keeps its direction.
  return (x, y, p) => {
    const dx = x - cx;
    const dy = y - cy;
    const rho = Math.hypot(dx, dy);
    const th = Math.atan2(dx, dy);
    const b = Math.PI / 2 + (beta - Math.PI / 2) * p;
    const sb = Math.sin(b);
    const cb = Math.cos(b);
    const phi = th / sb;
    // e1 and e3 stay in the Y-Z plane; model Y is minus sheet y.
    const X = rho * sb * Math.sin(phi);
    const A = rho * sb * Math.cos(phi);
    const C = rho * cb;
    const Yc = A * sb + C * cb; // along the centre line
    const Zc = A * cb - C * sb;
    return [cx + X, -(cy + Yc), Zc];
  };
}

// Paper cup (or the sleeve around one): a ring sector that closes into a truncated cone.
export function coneWrap({ topD, bottomD, height, overlap = 8, kind = 'cup' }) {
  const rT = topD / 2;
  const rB = bottomD / 2;
  const slant = Math.hypot(height, rT - rB);
  const sinB = (rT - rB) / slant;
  const r1 = rT / sinB; // distance from apex to the top edge, on the sheet
  const r0 = rB / sinB;
  const sweep = ((2 * Math.PI * rT + overlap) / r1);
  const d = new Die({
    bleed: 2,
    safe: 3,
    sides: 1,
    pose: { fold: conePose(Math.asin(sinB)) },
    view: { closed: { az: -20, el: 20 } },
    meta: { noOpen: true, closedLabel: 'Rolled' },
  });
  const cx = 0;
  const cy = 0;
  const poly = conePoints(r0, r1, sweep, cx, cy, 80);
  d.rootPoly('wrap', poly, { name: kind === 'cup' ? 'Cup wrap' : 'Sleeve', nameIn: 'Inside', cover: true });
  const minY = Math.min(...poly.map((p) => p[1]));
  const minX = Math.min(...poly.map((p) => p[0]));
  d.finish();
  const ox = -minX;
  const oy = -minY;
  const beta = Math.asin(sinB);
  const def = coneDeformer({ cx: cx + ox, cy: cy + oy, beta });
  d.warp = {
    nu: 96,
    nv: 12,
    grid: (u, v) => {
      const t = -sweep / 2 + u * sweep;
      const r = r0 + (r1 - r0) * v;
      return [cx + ox + Math.sin(t) * r, cy + oy + Math.cos(t) * r];
    },
    deform: (x, y, p) => {
      const q = smooth(clamp01(p));
      return def(x, y, q);
    },
    prop() {
      const holder = new THREE.Group();
      const m = new THREE.MeshStandardMaterial({ color: '#f4f2ea', roughness: 0.7, side: THREE.DoubleSide });
      const axis = new THREE.Vector3(0, -Math.cos(beta), -Math.sin(beta));
      const apex = new THREE.Vector3(ox, -oy, 0);
      const at = (dist) => apex.clone().addScaledVector(axis, dist);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
      const lip = new THREE.Mesh(new THREE.TorusGeometry(rT + 0.3, 1.4, 10, 96), m);
      lip.position.copy(at(r1 * Math.cos(beta)));
      lip.quaternion.copy(q);
      holder.add(lip);
      const base = new THREE.Mesh(new THREE.CircleGeometry(rB, 64), m);
      base.position.copy(at(r0 * Math.cos(beta) + 6));
      base.quaternion.copy(q);
      holder.add(base);
      if (kind === 'sleeve') {
        // Plain cup inside the printed sleeve.
        const extra = height * 0.5;
        const pts = [];
        const rr = (dd) => dd * Math.tan(beta);
        const d0 = r0 * Math.cos(beta) - extra * 0.25;
        const d1 = r1 * Math.cos(beta) + extra * 0.7;
        for (let i = 0; i <= 10; i++) {
          const dd = d0 + ((d1 - d0) * i) / 10;
          pts.push(new THREE.Vector2(rr(dd) - 0.6, dd));
        }
        const cup = new THREE.Mesh(new THREE.LatheGeometry(pts, 64), m);
        cup.castShadow = true;
        cup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis);
        cup.position.copy(apex);
        holder.add(cup);
        lip.position.copy(at(d1));
        lip.geometry.dispose();
        lip.geometry = new THREE.TorusGeometry(rr(d1), 1.4, 10, 96);
        base.position.copy(at(d0));
        base.geometry.dispose();
        base.geometry = new THREE.CircleGeometry(rr(d0) - 0.6, 64);
      }
      return {
        object: holder,
        apply(p) {
          holder.visible = p > 0.97;
        },
      };
    },
  };
  return d;
}

// Fries cone: a triangle-ish sheet rolled to a cone.
export function friesCone({ h = 210, topD = 110 }) {
  const rT = topD / 2;
  const slant = Math.hypot(h, rT);
  const sinB = rT / slant;
  const sweep = (2 * Math.PI * rT + 16) / slant;
  const d = new Die({
    bleed: 3,
    safe: 4,
    sides: 1,
    pose: { fold: conePose(Math.asin(sinB)) },
    view: { closed: { az: -22, el: 16 } },
    meta: { noOpen: true, closedLabel: 'Rolled' },
  });
  const poly = conePoints(0, slant, sweep, 0, 0, 72);
  d.rootPoly('cone', poly, { name: 'Cone', nameIn: 'Inside', cover: true });
  const minY = Math.min(...poly.map((p) => p[1]));
  const minX = Math.min(...poly.map((p) => p[0]));
  d.finish();
  const ox = -minX;
  const oy = -minY;
  const beta = Math.asin(sinB);
  const def = coneDeformer({ cx: ox, cy: oy, beta });
  d.warp = {
    nu: 96,
    nv: 14,
    grid: (u, v) => {
      const t = -sweep / 2 + u * sweep;
      const r = 0.5 + (slant - 0.5) * v;
      return [ox + Math.sin(t) * r, oy + Math.cos(t) * r];
    },
    deform: (x, y, p) => def(x, y, smooth(clamp01(p))),
    prop() {
      // A cone cannot stand by itself, so it gets the wire holder used in every friterie.
      const holder = new THREE.Group();
      const wire = new THREE.MeshStandardMaterial({ color: '#2a2b30', metalness: 0.9, roughness: 0.35 });
      const axis = new THREE.Vector3(0, -Math.cos(beta), -Math.sin(beta));
      const apex = new THREE.Vector3(ox, -oy, 0);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
      const dist = slant * Math.cos(beta) * 0.62;
      const rr = dist * Math.tan(beta) + 1;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(rr, 1.2, 8, 72), wire);
      ring.position.copy(apex).addScaledVector(axis, dist);
      ring.quaternion.copy(q);
      ring.castShadow = true;
      holder.add(ring);
      const foot = new THREE.Mesh(new THREE.TorusGeometry(rr * 1.05, 1.2, 8, 72), wire);
      foot.position.copy(apex).addScaledVector(axis, -8);
      foot.quaternion.copy(q);
      foot.castShadow = true;
      holder.add(foot);
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 + 0.5;
        const local = (r) => new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0).applyQuaternion(q);
        const p0 = ring.position.clone().add(local(rr));
        const p1 = foot.position.clone().add(local(rr * 1.05));
        const len = p0.distanceTo(p1);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, len, 8), wire);
        leg.position.copy(p0).add(p1).multiplyScalar(0.5);
        leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p0.clone().sub(p1).normalize());
        leg.castShadow = true;
        holder.add(leg);
      }
      return {
        object: holder,
        apply(p) {
          holder.visible = p > 0.9;
        },
        box(p) {
          if (p < 0.5) return null;
          const b = new THREE.Box3().setFromObject(foot);
          b.expandByObject(ring);
          return b;
        },
      };
    },
  };
  return d;
}

// Pillow box: a tube whose ends close along curved scores. Seen from the side it is a lens.
export function pillowBox({ L, W, H }) {
  const a = W / 2;
  const b = H / 2;
  const per = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  const glue = 12;
  const end = W * 0.2; // depth of the lobes that fold in at each end
  const sw = per;
  const sh = L + end * 2;
  const d = new Die({
    bleed: 3,
    safe: 4,
    pose: { fold: 'keep' },
    view: { closed: { az: -34, el: 26 } },
    meta: { noOpen: true },
  });
  // Two lobes per end, one per half of the tube. The same curve mirrored is the score line.
  const seg = 48;
  const lobe = (x) => Math.abs(Math.sin((x / sw) * Math.PI * 2));
  const top = [];
  const bottom = [];
  for (let i = 0; i <= seg; i++) {
    const x = (i / seg) * sw;
    top.push([x, end * (1 - lobe(x))]);
    bottom.push([x, sh - end * (1 - lobe(x))]);
  }
  const outline = [...top, [sw + glue, end + 6], [sw + glue, sh - end - 6], ...bottom.reverse()];
  d.rootPoly('body', outline, { name: 'Body', nameIn: 'Inside', cover: true });
  for (let i = 0; i < seg; i++) {
    const x0 = (i / seg) * sw;
    const x1 = ((i + 1) / seg) * sw;
    d.perf([x0, end + end * lobe(x0)], [x1, end + end * lobe(x1)], 'score');
    d.perf([x0, sh - end - end * lobe(x0)], [x1, sh - end - end * lobe(x1)], 'score');
  }
  d.finish();
  d.warp = {
    nu: 120,
    nv: 72,
    mask: true,
    grid: (u, v) => [u * (sw + glue), v * sh],
    deform(x, y, p) {
      const wrap = smooth(clamp01(p / 0.62));
      const pinch = smooth(clamp01((p - 0.5) / 0.5));
      const ang = (Math.min(x, sw) / sw) * Math.PI * 2 - Math.PI / 2;
      const yy = y - sh / 2;
      const fl = [x - sw / 2, -yy, 0];
      const edge = L / 2 + end * 0.5;
      const over = Math.max(0, Math.abs(yy) - edge);
      // Past the score the lobes turn back inside the box.
      const Y = (Math.abs(yy) > edge ? edge - over * 0.9 : Math.abs(yy)) * Math.sign(yy);
      const q = Math.min(1, Math.abs(Y) / edge);
      const g = 1 - pinch * (1 - Math.pow(Math.max(0, 1 - q * q), 0.6));
      const inner = over > 0 ? 1 - Math.min(0.4, over / end) * pinch : 1;
      const tube = [a * Math.cos(ang) * inner, -Y, -b * g * Math.sin(ang) * inner - b];
      return [fl[0] + (tube[0] - fl[0]) * wrap, fl[1] + (tube[1] - fl[1]) * wrap, fl[2] + (tube[2] - fl[2]) * wrap];
    },
  };
  return d;
}
