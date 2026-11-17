// Everything that gets painted on the sheet: stock colour, uploaded artwork, die lines, safe zone,
// labels. One canvas per side, in print-file orientation, so the 3D model is always showing the
// same pixels a printer would receive.

import * as THREE from 'three';
import { STOCKS, FINISHES } from '../core/stocks.js';

export const COLORS = {
  cut: '#ff2d87',
  crease: '#16a7ff',
  mountain: '#ffb020',
  perf: '#16d67b',
  safe: 'rgba(0, 200, 120, 0.9)',
  glue: 'rgba(0, 81, 255, 0.10)',
  label: '#0051FF',
};

// Felt-marked designer board: soft mottling plus short fibres, tileable.
function feltTile(size = 512, seed = 23) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647), (s & 65535) / 65535);
  x.fillStyle = '#808080';
  x.fillRect(0, 0, size, size);
  for (let i = 0; i < 70; i++) {
    const px = rnd() * size, py = rnd() * size, r = 20 + rnd() * 70, light = rnd() > 0.5;
    for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
      const g = x.createRadialGradient(px + ox, py + oy, 0, px + ox, py + oy, r);
      g.addColorStop(0, light ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)');
      g.addColorStop(1, 'rgba(128,128,128,0)');
      x.fillStyle = g;
      x.fillRect(px + ox - r, py + oy - r, r * 2, r * 2);
    }
  }
  x.lineCap = 'round';
  for (let i = 0; i < 2600; i++) {
    const px = rnd() * size, py = rnd() * size, a = rnd() * Math.PI * 2, len = 3 + rnd() * rnd() * 16, bend = (rnd() - 0.5) * 0.9;
    const v = Math.round(70 + rnd() * 120);
    x.strokeStyle = `rgba(${v},${v},${v},${0.18 + rnd() * 0.3})`;
    x.lineWidth = 0.5 + rnd() * 0.9;
    for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
      const sx = px + ox, sy = py + oy;
      if (sx < -20 || sy < -20 || sx > size + 20 || sy > size + 20) continue;
      x.beginPath();
      x.moveTo(sx, sy);
      x.quadraticCurveTo(sx + Math.cos(a + bend) * len * 0.5, sy + Math.sin(a + bend) * len * 0.5, sx + Math.cos(a) * len, sy + Math.sin(a) * len);
      x.stroke();
    }
  }
  return c;
}

function noiseTile(size, amp, seed = 7) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  const im = x.createImageData(size, size);
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return (s & 0xffff) / 0xffff;
  };
  for (let i = 0; i < im.data.length; i += 4) {
    const v = 128 + (rnd() - 0.5) * amp;
    im.data[i] = im.data[i + 1] = im.data[i + 2] = v;
    im.data[i + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  return c;
}

function fluteTexture(core, liner) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 64;
  const x = c.getContext('2d');
  x.fillStyle = '#3a2c1b';
  x.fillRect(0, 0, 128, 64);
  x.fillStyle = liner;
  x.fillRect(0, 0, 128, 9);
  x.fillRect(0, 55, 128, 9);
  x.strokeStyle = core;
  x.lineWidth = 7;
  x.beginPath();
  for (let i = 0; i <= 128; i += 2) {
    const y = 32 + Math.sin((i / 128) * Math.PI * 2) * 21;
    if (i === 0) x.moveTo(i, y);
    else x.lineTo(i, y);
  }
  x.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export class Surface {
  constructor(die, opts = {}) {
    this.die = die;
    this.stockId = opts.stock;
    this.finishId = opts.finish || 'none';
    this.stock = STOCKS[opts.stock] || STOCKS['silk-170'];
    this.maxTex = opts.maxTex || 4096;
    this.anisotropy = opts.anisotropy || 8;
    this.detail = opts.detail || 'blank';
    const b = die.bleed;
    this.ext = { x0: -b, y0: -b, w: die.w + 2 * b, h: die.h + 2 * b };
    this.opts = { lines: false, safe: false, labels: false, ...opts.overlays };
    this.art = { front: null, back: null };
    this.orient = {};
    this.uvOf = (x, y) => [(x - this.ext.x0) / this.ext.w, 1 - (y - this.ext.y0) / this.ext.h];
    this._materials();
    this._resize(this.detail === 'art' ? this.maxTex : Math.min(this.maxTex, 2048));
    this._bump();
    this.compose();
  }

  _resize(maxDim) {
    const { w, h } = this.ext;
    const k = maxDim / Math.max(w, h);
    this.pxPerMm = Math.min(k, 16);
    const W = Math.max(64, Math.round(w * this.pxPerMm));
    const H = Math.max(64, Math.round(h * this.pxPerMm));
    if (this.canvas && this.canvas.front.width === W && this.canvas.front.height === H) return;
    this.canvas = { front: document.createElement('canvas'), back: document.createElement('canvas') };
    this.layer = { front: document.createElement('canvas'), back: document.createElement('canvas') };
    for (const s of ['front', 'back']) {
      this.canvas[s].width = this.layer[s].width = W;
      this.canvas[s].height = this.layer[s].height = H;
      const old = this.tex?.[s];
      if (old) old.dispose();
    }
    this.tex = {
      front: this._canvasTexture(this.canvas.front),
      back: this._canvasTexture(this.canvas.back),
    };
    this.front.map = this.tex.front;
    this.back.map = this.tex.back;
    this.front.needsUpdate = true;
    this.back.needsUpdate = true;
  }

  _canvasTexture(c) {
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = this.anisotropy;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    return t;
  }

  _materials() {
    const s = this.stock;
    const f = FINISHES[this.finishId] || FINISHES.none;
    const rough = f.rough ?? s.rough;
    this.front = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: rough,
      metalness: 0,
      clearcoat: f.clearcoat,
      clearcoatRoughness: 0.18,
      envMapIntensity: 1,
    });
    this.back = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: Math.max(s.rough, 0.6), metalness: 0 });
    this.edge = new THREE.MeshStandardMaterial({
      color: s.dark ? '#26262a' : s.core || s.color,
      roughness: 0.85,
    });
    if (s.kind === 'corrugated') {
      this.fluteTex = fluteTexture(s.core || '#c9a97c', s.color);
      this.edge.map = this.fluteTex;
      this.edge.color.set('#ffffff');
    }
    this.materials = [this.front, this.back, this.edge];
  }

  _bump() {
    const { w, h } = this.ext;
    const k = Math.min(1536 / Math.max(w, h), 8);
    const c = document.createElement('canvas');
    c.width = Math.max(64, Math.round(w * k));
    c.height = Math.max(64, Math.round(h * k));
    const x = c.getContext('2d');
    x.fillStyle = '#808080';
    x.fillRect(0, 0, c.width, c.height);
    const s = this.stock;
    if (s.felt) {
      const p = x.createPattern(feltTile(512, 31), 'repeat');
      p.setTransform(new DOMMatrix().scale(Math.max(0.6, k / 5.5)));
      x.globalAlpha = 0.85;
      x.fillStyle = p;
      x.fillRect(0, 0, c.width, c.height);
      x.globalAlpha = 1;
    } else if (s.kind !== 'board' || s.rough > 0.7) {
      x.globalAlpha = s.rough > 0.8 ? 0.55 : 0.22;
      x.fillStyle = x.createPattern(noiseTile(256, s.rough > 0.8 ? 90 : 40), 'repeat');
      x.fillRect(0, 0, c.width, c.height);
      x.globalAlpha = 1;
    }
    x.save();
    x.scale(k, k);
    x.translate(-this.ext.x0, -this.ext.y0);
    if (s.kind === 'corrugated') {
      x.strokeStyle = 'rgba(0,0,0,0.05)';
      x.lineWidth = s.flute * 0.42;
      for (let y = 0; y < this.die.h + 10; y += s.flute) {
        x.beginPath();
        x.moveTo(-5, y);
        x.lineTo(this.die.w + 5, y);
        x.stroke();
      }
    }
    // Score lines. They are soft on purpose: a crease reads as a groove, not as a drawn line.
    const lw = Math.max(0.45, 2.2 / k, (s.mm || 0.2) * 0.8);
    x.lineCap = 'butt';
    for (const c2 of this.die.creases) {
      x.strokeStyle = 'rgba(0,0,0,0.33)';
      x.lineWidth = lw * 2.2;
      x.beginPath();
      x.moveTo(c2.a[0], c2.a[1]);
      x.lineTo(c2.b[0], c2.b[1]);
      x.stroke();
      x.strokeStyle = 'rgba(0,0,0,0.6)';
      x.lineWidth = lw;
      x.beginPath();
      x.moveTo(c2.a[0], c2.a[1]);
      x.lineTo(c2.b[0], c2.b[1]);
      x.stroke();
    }
    x.restore();
    if (this.bumpTex) this.bumpTex.dispose();
    const t = new THREE.CanvasTexture(c);
    t.anisotropy = 4;
    this.bumpTex = t;
    this.front.bumpMap = t;
    this.front.bumpScale = s.felt ? 1.6 : 1.1;
    this.back.bumpMap = t;
    this.back.bumpScale = s.felt ? -1.6 : -1.1;
    this.front.needsUpdate = true;
    this.back.needsUpdate = true;
  }

  // Sets or clears the artwork layer of a side: `drawFn(ctx, pxPerMm, ext)` paints in sheet px.
  setArt(side, drawFn) {
    this.art[side] = drawFn;
    if (drawFn && this.detail !== 'art') {
      this.detail = 'art';
      this._resize(this.maxTex);
      this.compose('front');
      this.compose('back');
      return;
    }
    this.compose(side);
  }

  setOverlays(o) {
    Object.assign(this.opts, o);
    this.compose();
  }

  compose(side) {
    if (!side) {
      this.compose('front');
      this.compose('back');
      return;
    }
    const c = this.canvas[side];
    const x = c.getContext('2d');
    const k = this.pxPerMm;
    const s = this.stock;
    x.setTransform(1, 0, 0, 1, 0, 0);
    x.globalCompositeOperation = 'source-over';
    x.globalAlpha = 1;
    x.fillStyle = side === 'back' && s.inside ? s.inside : s.color;
    x.fillRect(0, 0, c.width, c.height);
    if (s.kind === 'kraft' || (s.kind === 'corrugated' && s.multiply)) {
      x.globalAlpha = 0.09;
      x.globalCompositeOperation = 'multiply';
      x.fillStyle = x.createPattern(noiseTile(256, 150, 11), 'repeat');
      x.fillRect(0, 0, c.width, c.height);
      x.globalCompositeOperation = 'source-over';
      x.globalAlpha = 1;
    }
    const art = this.art[side];
    if (art) {
      const l = this.layer[side];
      const lx = l.getContext('2d');
      lx.setTransform(1, 0, 0, 1, 0, 0);
      lx.clearRect(0, 0, l.width, l.height);
      art(lx, k, this.ext, side);
      x.globalCompositeOperation = s.multiply ? 'multiply' : 'source-over';
      x.drawImage(l, 0, 0);
      x.globalCompositeOperation = 'source-over';
    }
    if (s.felt) {
      // The felt marks sit on top of the print, as they do on the real board.
      const p = x.createPattern(feltTile(512, 31), 'repeat');
      p.setTransform(new DOMMatrix().scale(Math.max(0.6, k / 5.5)));
      x.globalCompositeOperation = 'multiply';
      x.globalAlpha = 0.16;
      x.fillStyle = p;
      x.fillRect(0, 0, c.width, c.height);
      x.globalCompositeOperation = 'screen';
      x.globalAlpha = 0.07;
      x.fillRect(0, 0, c.width, c.height);
      x.globalCompositeOperation = 'source-over';
      x.globalAlpha = 1;
    }
    this._overlays(x, side);
    if (this.tex[side]) this.tex[side].needsUpdate = true;
    this.onChange?.();
  }

  _toSheet(x, side) {
    const k = this.pxPerMm;
    if (side === 'back') x.setTransform(-k, 0, 0, k, this.ext.w * k + this.ext.x0 * k, -this.ext.y0 * k);
    else x.setTransform(k, 0, 0, k, -this.ext.x0 * k, -this.ext.y0 * k);
  }

  _overlays(x, side) {
    const { die, opts } = this;
    const k = this.pxPerMm;
    const hair = Math.max(0.2, 1.6 / k);
    const dark = this.stock.dark;
    if (opts.lines) {
      this._toSheet(x, side);
      x.lineCap = 'round';
      // glue areas first so lines stay on top
      x.fillStyle = COLORS.glue;
      for (const p of die.panels) {
        if (p.role !== 'glue') continue;
        x.beginPath();
        p.poly.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1])));
        x.closePath();
        x.fill();
      }
      x.setLineDash([]);
      x.strokeStyle = COLORS.cut;
      x.lineWidth = hair * 1.15;
      x.beginPath();
      for (const seg of die.cuts) {
        x.moveTo(seg[0][0], seg[0][1]);
        x.lineTo(seg[1][0], seg[1][1]);
      }
      x.stroke();
      const dash = Math.max(1.6, 5 / k);
      for (const c of die.creases) {
        x.setLineDash([dash * 1.6, dash]);
        x.strokeStyle = c.mountain ? COLORS.mountain : COLORS.crease;
        x.lineWidth = hair * 1.1;
        x.beginPath();
        x.moveTo(c.a[0], c.a[1]);
        x.lineTo(c.b[0], c.b[1]);
        x.stroke();
      }
      x.strokeStyle = COLORS.perf;
      x.setLineDash([dash * 0.5, dash * 0.7]);
      for (const c of [...die.perfs, ...die.kiss]) {
        x.beginPath();
        x.moveTo(c.a[0], c.a[1]);
        x.lineTo(c.b[0], c.b[1]);
        x.stroke();
      }
      x.setLineDash([]);
    }
    if (opts.safe) {
      this._toSheet(x, side);
      x.strokeStyle = COLORS.safe;
      x.lineWidth = hair;
      x.setLineDash([Math.max(1, 3 / k), Math.max(1, 3 / k)]);
      for (const p of die.panels) {
        if (p.role !== 'main' || p.area < 300) continue;
        const b = p.bounds;
        const m = die.safe;
        if (b.w < m * 3 || b.h < m * 3) continue;
        x.strokeRect(b.x0 + m, b.y0 + m, b.w - 2 * m, b.h - 2 * m);
      }
      x.setLineDash([]);
    }
    if (opts.labels) {
      x.setTransform(1, 0, 0, 1, 0, 0);
      const W = this.ext.w;
      for (const p of die.panels) {
        if (p.role === 'hidden') continue;
        const b = p.bounds;
        if (Math.min(b.w, b.h) < 8) continue;
        const cx = side === 'back' ? W - (p.centroid[0] - this.ext.x0) : p.centroid[0] - this.ext.x0;
        const cy = p.centroid[1] - this.ext.y0;
        const name = (side === 'back' ? p.nameIn || p.name : p.name) || '';
        const rot = this.orient[p.id]?.[side] || 0;
        const horizontal = rot % 180 === 0;
        const span = horizontal ? b.w : b.h;
        const size = Math.min(Math.max(2.4, Math.min(b.w, b.h) * 0.075), span / Math.max(4, name.length * 0.62));
        x.save();
        x.translate(cx * k, cy * k);
        x.rotate((rot * Math.PI) / 180);
        x.font = `500 ${size * k}px Outfit, Figtree, Arial, sans-serif`;
        x.textAlign = 'center';
        x.textBaseline = 'middle';
        x.fillStyle = dark ? '#ffffff' : p.role === 'glue' ? '#7a8aa8' : COLORS.label;
        x.globalAlpha = p.role === 'main' ? 0.9 : 0.6;
        x.fillText(name.toUpperCase(), 0, 0);
        x.restore();
      }
    }
    x.setTransform(1, 0, 0, 1, 0, 0);
  }

  dispose() {
    this.tex?.front.dispose();
    this.tex?.back.dispose();
    this.bumpTex?.dispose();
    this.fluteTex?.dispose();
    this.front.dispose();
    this.back.dispose();
    this.edge.dispose();
  }
}
