// A Die is the single source of truth for one printed product: the flat sheet described as
// panels joined by folds. The 3D model, the die lines, the PDF/SVG template and the artwork
// mapping are all generated from it, so a format only has to be described once.
//
// Sign convention: the OUTSIDE of the sheet faces the viewer. A positive fold angle is a valley
// on the inside (the two inside faces come together); a negative one is a mountain.

import { add, sub, mul, unit, dot, polyBounds, polyCentroid, polyArea, cleanPoly, fillet } from './geom.js';

const TOL = 0.02;

function localFrame(a, b) {
  const d = unit(sub(b, a));
  // Clockwise panels in y-down space: the outward side of an edge is on the visual left.
  const n = [d[1], -d[0]];
  return { d, n };
}

const toSheet = (a, f, u, v) => add(add(a, mul(f.d, u)), mul(f.n, v));

export class Die {
  constructor(opts = {}) {
    this.bleed = opts.bleed ?? 3;
    this.safe = opts.safe ?? 3;
    this.panels = [];
    this.byId = {};
    this.lines = []; // extra lines: perforation, kiss cut
    this.seams = []; // creases shared by two branches of the panel tree (cross folds)
    this.holes = [];
    this.extras = []; // hardware drawn by the viewer: staples, ropes, rings
    this.pose = { fold: 'flip', closedYaw: 0, open: 'stand-inside', ...(opts.pose || {}) };
    this.view = { closed: { az: -32, el: 30 }, open: { az: -24, el: 16 }, ...(opts.view || {}) };
    this.relax = opts.relax ?? 0;
    this.sides = opts.sides ?? 2;
    this.meta = opts.meta || {};
  }

  // ---- building ---------------------------------------------------------------------------

  _push(panel) {
    if (this.byId[panel.id]) throw new Error(`Duplicate panel id ${panel.id}`);
    panel.poly = cleanPoly(panel.poly);
    panel.children = [];
    panel.holes = panel.holes || [];
    this.panels.push(panel);
    this.byId[panel.id] = panel;
    if (panel.parent) this.byId[panel.parent].children.push(panel.id);
    return panel;
  }

  rectEdges(x, y, w, h) {
    return {
      top: { a: [x, y], b: [x + w, y] },
      right: { a: [x + w, y], b: [x + w, y + h] },
      bottom: { a: [x + w, y + h], b: [x, y + h] },
      left: { a: [x, y + h], b: [x, y] },
    };
  }

  root(id, x, y, w, h, opts = {}) {
    const poly = opts.r
      ? fillet([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], opts.r, opts.segs ?? 8)
      : [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    return this._push({
      id,
      name: opts.name || id,
      nameIn: opts.nameIn,
      role: opts.role || 'main',
      poly,
      edges: this.rectEdges(x, y, w, h),
      holes: opts.holes,
      art: opts.art,
      cover: opts.cover,
    });
  }

  rootPoly(id, poly, opts = {}) {
    return this._push({
      id,
      name: opts.name || id,
      nameIn: opts.nameIn,
      role: opts.role || 'main',
      poly,
      edges: opts.edges || {},
      holes: opts.holes,
      art: opts.art,
      cover: opts.cover,
    });
  }

  // Adds a panel on an edge of `parent`.
  //   d        depth of the panel, away from the hinge
  //   inL/inR  hinge inset along the edge (a hinge shorter than the parent edge)
  //   tL/tR    extra inset of the far corners (a tapered flap)
  //   r        radius of the far corners, one number or [left, right]
  //   w        panel width when it differs from the hinge; centred on the hinge
  //   pts      full custom profile [[u, v], ...], v = 0 on the hinge
  add(parentId, edgeName, id, s = {}) {
    const parent = this.byId[parentId];
    if (!parent) throw new Error(`Unknown parent ${parentId} for ${id}`);
    const e = typeof edgeName === 'string' ? parent.edges[edgeName] : edgeName;
    if (!e) throw new Error(`Unknown edge ${edgeName} on ${parentId}`);
    const f = localFrame(e.a, e.b);
    const L = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
    const u0 = s.inL ?? 0;
    const u1 = L - (s.inR ?? 0);
    let local;
    let hingeU = [u0, u1];
    const edges = {};
    if (s.pts) {
      local = s.pts;
      const onHinge = local.filter((p) => Math.abs(p[1]) < 1e-6).map((p) => p[0]);
      if (s.hu) hingeU = s.hu;
      else if (onHinge.length >= 2) hingeU = [Math.min(...onHinge), Math.max(...onHinge)];
      if (s.edgesLocal) {
        for (const [k, seg] of Object.entries(s.edgesLocal)) {
          edges[k] = { a: toSheet(e.a, f, seg[0][0], seg[0][1]), b: toSheet(e.a, f, seg[1][0], seg[1][1]) };
        }
      }
    } else {
      const d = s.d;
      const tL = s.tL ?? 0;
      const tR = s.tR ?? 0;
      const over = s.w !== undefined ? (s.w - (u1 - u0)) / 2 : 0;
      const pts = [
        [u0, 0],
        [u0 + tL - over, d],
        [u1 - tR + over, d],
        [u1, 0],
      ];
      const r = Array.isArray(s.r) ? s.r : [s.r || 0, s.r || 0];
      local = r[0] || r[1] ? fillet(pts, [0, r[0], r[1], 0], s.segs ?? 8) : pts;
      edges.far = {
        a: toSheet(e.a, f, u0 + tL - over, d),
        b: toSheet(e.a, f, u1 - tR + over, d),
      };
      // Besides `far`, edges are named by where they point on the sheet.
      const sideA = { a: toSheet(e.a, f, u0, 0), b: toSheet(e.a, f, u0 + tL - over, d) };
      const sideB = { a: toSheet(e.a, f, u1 - tR + over, d), b: toSheet(e.a, f, u1, 0) };
      for (const seg of [edges.far, sideA, sideB]) {
        const { n } = localFrame(seg.a, seg.b);
        const name = Math.abs(n[0]) > Math.abs(n[1]) ? (n[0] > 0 ? 'right' : 'left') : n[1] > 0 ? 'bottom' : 'top';
        edges[name] = seg;
      }
    }
    const poly = local.map((p) => toSheet(e.a, f, p[0], p[1]));
    const hinge = { a: toSheet(e.a, f, hingeU[0], 0), b: toSheet(e.a, f, hingeU[1], 0) };
    return this._push({
      id,
      name: s.name || id,
      nameIn: s.nameIn,
      role: s.role || 'main',
      parent: parentId,
      poly,
      hinge,
      angle: s.angle ?? 180,
      open: s.open,
      seq: s.seq ?? 1,
      gap: s.gap ?? 0,
      lift: s.lift ?? 0,
      edges,
      holes: s.holes,
      art: s.art,
      cover: s.cover,
      bead: s.bead,
    });
  }

  // A free part that sits on the same sheet (or next to it) and moves into place as a rigid body:
  // a lid onto its base, a tray into a sleeve, a card into a pocket.
  mount(parentId, id, poly, opts = {}) {
    return this._push({
      id,
      name: opts.name || id,
      role: opts.role || 'main',
      parent: parentId,
      poly,
      edges: opts.edges || {},
      mount: opts.to, // { pos: [x, y, z], rot: [rx, ry, rz], arc, slide, openAt }
      seq: opts.seq ?? 9,
      holes: opts.holes,
      art: opts.art,
      cover: opts.cover,
      standalone: opts.standalone,
      detached: opts.detached ?? true,
    });
  }

  mountRect(parentId, id, x, y, w, h, opts = {}) {
    const p = this.mount(parentId, id, [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], opts);
    p.edges = this.rectEdges(x, y, w, h);
    return p;
  }

  // A page or inner sheet of a bound product. It shares the sheet coordinates of the cover but sits
  // lower in the stack and carries its own artwork, so it stays out of the die lines.
  leaf(parentId, id, x, y, w, h, s = {}) {
    const poly = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    return this._push({
      id,
      name: s.name || id,
      nameIn: s.nameIn,
      role: 'leaf',
      parent: parentId,
      poly,
      hinge: s.hinge,
      angle: s.angle ?? 0,
      open: s.open,
      seq: s.seq ?? 1,
      gap: 0,
      edges: {},
      holes: s.holes,
      zOff: s.zOff || 0,
      pivotZ: s.pivotZ,
      uvRect: s.coverLeaf ? undefined : { x, y, w, h },
      coverLeaf: s.coverLeaf,
      pageFront: s.pageFront,
      pageBack: s.pageBack,
      bead: s.bead,
      valley: s.valley,
    });
  }

  seam(a, b) {
    this.seams.push({ a, b });
    return this;
  }

  perf(a, b, kind = 'perf') {
    this.lines.push({ kind, a, b });
    return this;
  }

  extra(e) {
    this.extras.push(e);
    return this;
  }

  // ---- finishing --------------------------------------------------------------------------

  // Moves the die so the sheet starts at (0,0) and derives everything the viewers need.
  finish() {
    const b = polyBounds(this.panels.map((p) => p.poly));
    const o = [b.x0, b.y0];
    const shift = (p) => [p[0] - o[0], p[1] - o[1]];
    for (const p of this.panels) {
      if (p.mount) {
        // Mount targets use model axes (y up), so y moves the other way.
        if (p.mount.pos) p.mount.pos = [p.mount.pos[0] - o[0], p.mount.pos[1] + o[1], p.mount.pos[2] || 0];
        if (p.mount.center) p.mount.center = [p.mount.center[0] - o[0], p.mount.center[1] + o[1], p.mount.center[2] || 0];
      }
      if (p.uvRect) p.uvRect = { ...p.uvRect, x: p.uvRect.x - o[0], y: p.uvRect.y - o[1] };
      p.poly = p.poly.map(shift);
      p.holes = (p.holes || []).map((h) => h.map(shift));
      if (p.hinge) p.hinge = { a: shift(p.hinge.a), b: shift(p.hinge.b) };
      for (const e of Object.values(p.edges || {})) {
        e.a = shift(e.a);
        e.b = shift(e.b);
      }
      p.centroid = polyCentroid(p.poly);
      p.area = Math.abs(polyArea(p.poly));
      p.bounds = polyBounds([p.poly]);
    }
    this.lines = this.lines.map((l) => ({ ...l, a: shift(l.a), b: shift(l.b) }));
    this.seams = this.seams.map((l) => ({ a: shift(l.a), b: shift(l.b) }));
    this.extras = this.extras.map((e) => {
      const n = { ...e };
      if (e.pts) n.pts = e.pts.map(shift);
      if (e.at) n.at = shift(e.at);
      if (e.a) n.a = shift(e.a);
      if (e.b) n.b = shift(e.b);
      if (e.rect) n.rect = { ...e.rect, x: e.rect.x - o[0], y: e.rect.y - o[1] };
      return n;
    });
    this.w = b.w;
    this.h = b.h;
    this.seqMax = Math.max(0, ...this.panels.map((p) => p.seq || 0));
    this._lines();
    return this;
  }

  _lines() {
    // Every polygon edge is a cut unless it runs along a fold.
    const folds = this.panels
      .filter((p) => p.hinge && p.role !== 'leaf' && !p.perfed)
      .map((p) => ({ id: p.id, a: p.hinge.a, b: p.hinge.b, angle: p.angle }));
    const cuts = [];
    const seen = new Set();
    const key = (a, b) => {
      const k = (p) => `${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;
      const s0 = k(a);
      const s1 = k(b);
      return s0 < s1 ? `${s0}|${s1}` : `${s1}|${s0}`;
    };
    let owner = null;
    const pushCut = (a, b) => {
      if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 0.05) return;
      (owner.outline = owner.outline || []).push([a, b]);
      const k = key(a, b);
      if (seen.has(k)) return;
      seen.add(k);
      cuts.push([a, b]);
    };
    const related = (p) => {
      const out = [...this.seams];
      for (const f of folds) if (f.id === p.id || p.children.includes(f.id)) out.push(f);
      return out;
    };
    for (const p of this.panels) {
      if (p.role === 'leaf') continue;
      owner = p;
      const hs = related(p);
      const loop = p.poly;
      for (let i = 0; i < loop.length; i++) {
        const a = loop[i];
        const b = loop[(i + 1) % loop.length];
        let spans = [[0, 1]];
        const d = sub(b, a);
        const L = Math.hypot(d[0], d[1]);
        if (L < 1e-6) continue;
        const u = [d[0] / L, d[1] / L];
        for (const h of hs) {
          const ha = sub(h.a, a);
          const hb = sub(h.b, a);
          const dist = (v) => Math.abs(v[0] * u[1] - v[1] * u[0]);
          if (dist(ha) > TOL || dist(hb) > TOL) continue;
          let t0 = dot(ha, u) / L;
          let t1 = dot(hb, u) / L;
          if (t0 > t1) [t0, t1] = [t1, t0];
          const next = [];
          for (const [s, e] of spans) {
            if (t1 <= s || t0 >= e) next.push([s, e]);
            else {
              if (t0 > s) next.push([s, t0]);
              if (t1 < e) next.push([t1, e]);
            }
          }
          spans = next;
        }
        for (const [s, e] of spans) {
          pushCut([a[0] + d[0] * s, a[1] + d[1] * s], [a[0] + d[0] * e, a[1] + d[1] * e]);
        }
      }
      for (const hole of p.holes || []) {
        for (let i = 0; i < hole.length; i++) pushCut(hole[i], hole[(i + 1) % hole.length]);
      }
    }
    this.cuts = cuts;
    this.creases = folds.map((f) => ({ a: f.a, b: f.b, mountain: f.angle < 0, id: f.id }));
    for (const f of this.seams) this.creases.push({ a: f.a, b: f.b, mountain: false, id: 'seam' });
    for (const f of this.lines) if (f.kind === 'score') this.creases.push({ a: f.a, b: f.b, mountain: false, id: 'score' });
    this.perfs = this.lines.filter((l) => l.kind === 'perf');
    this.kiss = this.lines.filter((l) => l.kind === 'kiss');
  }

  // The main printable faces, biggest first. Used for the label overlay and the sample design.
  mainPanels() {
    return this.panels.filter((p) => p.role === 'main').sort((a, b) => b.area - a.area);
  }
}
