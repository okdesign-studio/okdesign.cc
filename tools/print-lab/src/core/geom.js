// Small 2D helpers. All coordinates are millimetres on the flat sheet, y grows downwards,
// exactly like a print file, so numbers here can be checked against a ruler.

export const EPS = 1e-6;

export const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
export const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
export const mul = (a, s) => [a[0] * s, a[1] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
export const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
export const len = (a) => Math.hypot(a[0], a[1]);
export const unit = (a) => {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l];
};
export const lerp2 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

export function polyArea(p) {
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i];
    const b = p[(i + 1) % p.length];
    s += a[0] * b[1] - b[0] * a[1];
  }
  return s / 2;
}

export function polyCentroid(p) {
  let cx = 0;
  let cy = 0;
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[i];
    const b = p[(i + 1) % p.length];
    const c = a[0] * b[1] - b[0] * a[1];
    s += c;
    cx += (a[0] + b[0]) * c;
    cy += (a[1] + b[1]) * c;
  }
  if (Math.abs(s) < EPS) return [p[0][0], p[0][1]];
  return [cx / (3 * s), cy / (3 * s)];
}

export function polyBounds(polys) {
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const p of polys) {
    for (const v of p) {
      if (v[0] < x0) x0 = v[0];
      if (v[1] < y0) y0 = v[1];
      if (v[0] > x1) x1 = v[0];
      if (v[1] > y1) y1 = v[1];
    }
  }
  return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
}

export const rect = (x, y, w, h) => [
  [x, y],
  [x + w, y],
  [x + w, y + h],
  [x, y + h],
];

export function arc(cx, cy, r, a0, a1, n = 12) {
  const out = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return out;
}

export function circle(cx, cy, r, n = 64) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return out;
}

export function ellipse(cx, cy, rx, ry, n = 72) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
  }
  return out;
}

// Rounds polygon corners. `r` is one radius or a per-vertex list; 0 keeps the corner sharp.
export function fillet(pts, r, segs = 7) {
  const n = pts.length;
  const out = [];
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const rad = Array.isArray(r) ? r[i] || 0 : r;
    if (!rad) {
      out.push(p);
      continue;
    }
    const a = pts[(i - 1 + n) % n];
    const b = pts[(i + 1) % n];
    const u = unit(sub(a, p));
    const v = unit(sub(b, p));
    const cosT = Math.max(-1, Math.min(1, dot(u, v)));
    const theta = Math.acos(cosT);
    if (theta < 0.02 || theta > Math.PI - 0.02) {
      out.push(p);
      continue;
    }
    const maxD = Math.min(len(sub(a, p)), len(sub(b, p))) * 0.499;
    let d = rad / Math.tan(theta / 2);
    let rr = rad;
    if (d > maxD) {
      d = maxD;
      rr = d * Math.tan(theta / 2);
    }
    const p0 = add(p, mul(u, d));
    const p1 = add(p, mul(v, d));
    const bis = unit(add(u, v));
    const c = add(p, mul(bis, rr / Math.sin(theta / 2)));
    const a0 = Math.atan2(p0[1] - c[1], p0[0] - c[0]);
    let a1 = Math.atan2(p1[1] - c[1], p1[0] - c[0]);
    let da = a1 - a0;
    while (da > Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    a1 = a0 + da;
    for (let k = 0; k <= segs; k++) {
      const t = k / segs;
      const ang = a0 + (a1 - a0) * t;
      out.push([c[0] + Math.cos(ang) * rr, c[1] + Math.sin(ang) * rr]);
    }
  }
  return out;
}

// Removes consecutive duplicates so triangulation and outlines stay clean.
export function cleanPoly(pts, tol = 1e-4) {
  const out = [];
  for (const p of pts) {
    const q = out[out.length - 1];
    if (!q || Math.hypot(p[0] - q[0], p[1] - q[1]) > tol) out.push(p);
  }
  while (out.length > 2 && Math.hypot(out[0][0] - out[out.length - 1][0], out[0][1] - out[out.length - 1][1]) <= tol) {
    out.pop();
  }
  return out;
}

export function pointInPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i];
    const b = poly[j];
    if (a[1] > pt[1] !== b[1] > pt[1] && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) {
      inside = !inside;
    }
  }
  return inside;
}

// Grows a polygon outwards by `d`. Good enough for bleed and safe-zone outlines
// on the mostly convex shapes used by print templates.
export function offsetPoly(poly, d) {
  const sign = polyArea(poly) >= 0 ? 1 : -1;
  const n = poly.length;
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = poly[(i - 1 + n) % n];
    const p = poly[i];
    const b = poly[(i + 1) % n];
    const e0 = unit(sub(p, a));
    const e1 = unit(sub(b, p));
    const n0 = [e0[1] * sign, -e0[0] * sign];
    const n1 = [e1[1] * sign, -e1[0] * sign];
    const m = unit(add(n0, n1));
    const cosH = dot(m, n1);
    const scale = cosH > 0.25 ? d / cosH : d;
    out.push(add(p, mul(m, scale)));
  }
  return out;
}

export const fmt = (n) => {
  const r = Math.round(n * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
};

export const size2 = (w, h) => `${fmt(w)} × ${fmt(h)}`;
export const size3 = (l, w, h) => `${fmt(l)} × ${fmt(w)} × ${fmt(h)}`;
