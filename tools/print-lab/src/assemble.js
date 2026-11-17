// Glue between catalogue, templates and the 3D models.

import * as folded from './templates/folded.js';
import * as flat from './templates/flat.js';
import * as envelopes from './templates/envelopes.js';
import * as folders from './templates/folders.js';
import * as boxes from './templates/boxes.js';
import * as bound from './templates/bound.js';
import * as wraps from './templates/wraps.js';
import * as display from './templates/display.js';
import { formatById } from './catalog.js';
import { STOCKS } from './core/stocks.js';
import { Surface } from './viewer/surface.js';
import { FoldModel } from './viewer/fold-model.js';
import { WarpModel } from './viewer/warp-model.js';
import { attachExtras } from './viewer/extras.js';
import * as THREE from 'three';

export const TEMPLATES = { ...folded, ...flat, ...envelopes, ...folders, ...boxes, ...bound, ...wraps, ...display };

export function sizeOf(format, sizeId) {
  return format.sizes.find((s) => s.id === sizeId) || format.sizes.find((s) => s.id === format.def) || format.sizes[0];
}

export function resolve(id, sizeId, opts = {}) {
  const format = formatById[id];
  if (!format) throw new Error(`Unknown format ${id}`);
  const size = sizeOf(format, sizeId);
  const stockId = opts.stock && format.stocks.includes(opts.stock) ? opts.stock : format.stocks[0];
  const stock = STOCKS[stockId];
  const finishId = opts.finish && format.finishes.includes(opts.finish) ? opts.finish : format.finishes[0];
  const params = { ...size.p };
  if (format.pageOptions) params.pages = opts.pages && format.pageOptions.includes(+opts.pages) ? +opts.pages : format.defPages;
  // Board templates need the real caliper to keep their clearances honest.
  if ('L' in params && params.t === undefined) params.t = stock.mm;
  const tpl = TEMPLATES[format.tpl];
  if (!tpl) throw new Error(`Unknown template ${format.tpl}`);
  const die = tpl(params);
  return { format, size, stockId, finishId, stock, die, params };
}

// Inner pages of bound products are simple white sheets until artwork arrives.
export class PageSet {
  constructor() {
    this.edge = new THREE.MeshStandardMaterial({ color: '#efece4', roughness: 0.9 });
    this.pages = new Map();
    this.textures = new Map();
    this.blank = new THREE.MeshStandardMaterial({ color: '#fbfaf6', roughness: 0.72 });
  }

  material(n) {
    if (!n) return this.blank;
    if (!this.pages.has(n)) this.pages.set(n, new THREE.MeshStandardMaterial({ color: '#fbfaf6', roughness: 0.72 }));
    return this.pages.get(n);
  }

  setPage(n, source) {
    const m = this.material(n);
    const old = this.textures.get(n);
    if (old) old.dispose();
    if (!source) {
      m.map = null;
      m.color.set('#fbfaf6');
    } else {
      const t = new THREE.CanvasTexture(source);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      this.textures.set(n, t);
      m.map = t;
      m.color.set('#ffffff');
    }
    m.needsUpdate = true;
  }

  dispose() {
    for (const t of this.textures.values()) t.dispose();
    for (const m of this.pages.values()) m.dispose();
    this.edge.dispose();
    this.blank.dispose();
  }
}

export function makeModel(job, { surface, pages }) {
  const { die, stock } = job;
  const t = Math.max(die.meta.thick || 0, stock.mm, Math.max(die.w, die.h) * 0.00028);
  if (die.meta.edge) surface.edge.color.set(die.meta.edge);
  if (die.warp) {
    return new WarpModel(die, { thickness: t, materials: surface.materials, uvOf: surface.uvOf, surface });
  }
  const leafT = die.meta.leafT;
  const model = new FoldModel(die, {
    thickness: t,
    materials: surface.materials,
    uvOf: surface.uvOf,
    flute: stock.flute,
    leafT,
    leafMaterials: (p) => [pages.material(p.pageFront), pages.material(p.pageBack), pages.edge],
  });
  attachExtras(model, die, surface);
  model.apply(model.vector('flat'));
  return model;
}

export function makeSurface(job, opts = {}) {
  return new Surface(job.die, { stock: job.stockId, finish: job.finishId, ...opts });
}
