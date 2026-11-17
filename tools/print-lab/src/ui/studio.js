// The format viewer. Same component in three modes:
//   lab     designer view: spec, templates, artwork try-on, proof export
//   client  blank preview for a customer, no tools
//   proof   the exported file a client approves

import * as THREE from 'three';
import { CATEGORIES } from '../catalog.js';
import { STOCKS, FINISHES } from '../core/stocks.js';
import { fmt, size2 } from '../core/geom.js';
import { Stage } from '../viewer/stage.js';
import { resolve, makeModel, makeSurface, PageSet } from '../assemble.js';
import { computeOrient } from '../art/orient.js';
import { sampleArt } from '../art/sample.js';
import { loadArtwork } from '../art/source.js';
import { autoPlace, fitTo, drawPlacement, drawPanelArt, checks } from '../art/place.js';
import { templateSVG, templatePDF, download } from '../export/template.js';
import { buildProof } from '../export/proof.js';
import { buildDemo, fileName } from '../export/demo.js';
import { token, toSlug, demoUrl, publishFolder, demoExists, waitLive } from '../export/publish.js';

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const STATE_LABELS = { flat: 'Outside', inside: 'Inside', closed: 'Folded', open: 'Open' };
// The studio (lab mode) speaks Russian; the pages clients see stay in English.
const LAB_STATE_LABELS = { flat: 'Снаружи', inside: 'Внутри', closed: 'Сложено', open: 'Открыто' };
const LAB_ROWS = { Outside: 'Габарит', Finished: 'Готовый размер', 'Flat sheet': 'Лист в развороте', 'With bleed': 'С вылетами', Stock: 'Материал', Finish: 'Отделка' };

export class Studio {
  constructor(host, { mode = 'lab', onClose, onChange, proof } = {}) {
    this.host = host;
    this.mode = mode;
    this.onClose = onClose;
    this.onChange = onChange;
    this.proof = proof;
    this.s = { overlays: { lines: false, bleed: false, safe: false, labels: false }, tab: 'spec' };
    this.art = this._emptyArt();
    this._dom();
  }

  _emptyArt() {
    return { front: null, back: null, panels: [], sample: false, doc: null, pagesMap: null };
  }

  _dom() {
    const proof = this.mode === 'proof';
    const lab = this.mode === 'lab';
    const client = this.mode === 'client';
    this.el = h(`
      <div class="pl-studio pl-mode-${this.mode}" role="dialog" aria-modal="true" aria-label="Format preview">
        <div class="pl-stage">
          <div class="pl-canvas"></div>
          <div class="pl-head">
            ${proof ? '' : `<a class="pl-back" href="#/"><span aria-hidden="true">←</span> ${lab ? 'Все форматы' : 'All formats'}</a>`}
            <div class="pl-title">
              <p class="pl-eyebrow"></p>
              <h2></h2>
              <p class="pl-sub"></p>
            </div>
          </div>
          <div class="pl-measure" hidden></div>
          <div class="pl-dock">
            <div class="pl-seg" role="group" aria-label="View"></div>
            <label class="pl-fold"><span>${lab ? 'Сгиб' : 'Fold'}</span><input type="range" min="0" max="100" value="100" aria-label="Fold amount"></label>
            <div class="pl-tools">
              <button type="button" class="pl-tog" data-o="lines">${lab ? 'Линии' : 'Die lines'}</button>
              <button type="button" class="pl-tog" data-o="bleed">${lab ? 'Вылеты' : 'Bleed'}</button>
              ${proof || client ? '' : '<button type="button" class="pl-tog" data-o="safe">Безоп. зона</button><button type="button" class="pl-tog" data-o="labels">Названия</button>'}
              <span class="pl-sep"></span>
              <button type="button" class="pl-ico" data-z="out" aria-label="Zoom out">−</button>
              <button type="button" class="pl-ico" data-z="in" aria-label="Zoom in">+</button>
              <button type="button" class="pl-ico" data-z="spin" aria-label="Turn the model" title="Turn the model">⟳</button>
              <button type="button" class="pl-ico" data-z="reset" aria-label="Reset view" title="Reset view">⌖</button>
            </div>
          </div>
          <div class="pl-veil" hidden><p></p></div>
          <div class="pl-tip" hidden></div>
          <div class="pl-note" hidden></div>
        </div>
        ${proof || client ? '' : `
        <aside class="pl-side" aria-label="Format details">
          <div class="pl-tabs" role="tablist">
            <button type="button" role="tab" data-tab="spec">Формат</button>
            <button type="button" role="tab" data-tab="art">Макет</button>
            <button type="button" role="tab" data-tab="share">Демо</button>
          </div>
          <div class="pl-tabpane" data-pane="spec"></div>
          <div class="pl-tabpane" data-pane="art"></div>
          <div class="pl-tabpane" data-pane="share"></div>
        </aside>`}
      </div>`);
    this.host.appendChild(this.el);
    this.$ = (q) => this.el.querySelector(q);
    this.canvasHost = this.$('.pl-canvas');
    this.$('.pl-back')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.onClose?.();
    });
    this.el.querySelectorAll('.pl-tog').forEach((b) =>
      b.addEventListener('click', () => {
        const k = b.dataset.o;
        this.s.overlays[k] = !this.s.overlays[k];
        this._syncOverlays();
      }),
    );
    this.el.querySelectorAll('[data-z]').forEach((b) =>
      b.addEventListener('click', () => {
        const z = b.dataset.z;
        if (z === 'in') this.stage.zoom(0.84);
        if (z === 'out') this.stage.zoom(1.19);
        if (z === 'reset') this.stage.resetView();
        if (z === 'spin') {
          this.spin = !this.spin;
          this.stage.spin(this.spin);
          b.classList.toggle('is-on', this.spin);
        }
      }),
    );
    const range = this.$('.pl-fold input');
    range.addEventListener('input', () => {
      this.stage.scrub(range.value / 100);
      this._markState('custom');
    });
    this.el.querySelectorAll('[data-tab]').forEach((b) => b.addEventListener('click', () => this.tab(b.dataset.tab)));
    if (this.mode === 'lab') this._wireDrop();
    this._wireHover();
  }

  _ensureStage() {
    if (this.stage) return;
    try {
      this.stage = new Stage(this.canvasHost, { pad: 1.14 });
    } catch {
      const note = this.$('.pl-note');
      note.textContent = 'This browser cannot show the 3D model: WebGL is turned off or not available.';
      note.hidden = false;
      throw new Error('WebGL unavailable');
    }
    this.stage.onState = (s) => this._markState(s);
    this.stage.onSpinStop = () => {
      this.spin = false;
      this.$('[data-z="spin"]')?.classList.remove('is-on');
    };
    this.maxTex = Math.min(this.stage.renderer.capabilities.maxTextureSize, window.innerWidth < 800 ? 2048 : 4096);
    const narrow = window.innerWidth < 900;
    this.stage.setSafe(narrow ? 62 : 84, narrow ? 50 : 74);
  }

  // ---- open / rebuild -----------------------------------------------------------------------

  open(params) {
    this.el.classList.add('is-open');
    this._ensureStage();
    Object.assign(this.s, { id: params.id, size: params.size, stock: params.stock, finish: params.finish, pages: params.pages });
    this.art = this._emptyArt();
    this.demo = null;
    this.form = null;
    this.stage.clearSticker();
    this._rebuild({ intro: !params.noIntro });
    this.stage.resize();
    this.$('.pl-back')?.focus({ preventScroll: true });
  }

  close() {
    this.el.classList.remove('is-open');
    this.spin = false;
    this.stage?.spin(false);
  }

  _rebuild({ intro = false, keepState = false } = {}) {
    const { s } = this;
    const prev = this.surface;
    const prevPages = this.pages;
    const job = resolve(s.id, s.size, { stock: s.stock, finish: s.finish, pages: s.pages });
    this.job = job;
    s.size = job.size.id;
    s.stock = job.stockId;
    s.finish = job.finishId;
    s.pages = job.params.pages;
    const { die } = job;
    const surface = makeSurface(job, { maxTex: this.maxTex, anisotropy: this.stage.renderer.capabilities.getMaxAnisotropy() });
    const pages = new PageSet();
    const model = makeModel(job, { surface, pages });
    this.surface = surface;
    this.pages = pages;
    this.model = model;
    const state = keepState && this.stage.state !== 'custom' ? this.stage.state : 'closed';
    this.stage.setModel(model, { die, state: 'closed' });
    prev?.dispose();
    prevPages?.dispose();
    this.orient = computeOrient(this.stage, model, die);
    this.orientTpl = computeOrient(this.stage, model, die, { front: 'closed', back: die.meta.noOpen ? 'closed' : 'open' });
    surface.orient = this.orient;
    surface.onChange = () => this.stage.invalidate();
    this._bleedPlanes();
    this._syncOverlays();
    this._seg();
    this._titles();
    this._reapplyArt();
    this._renderPanes();
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (intro && !reduce) {
      this.stage.go('flat', { instant: true });
      this._markState('flat');
      clearTimeout(this._introT);
      this._introT = setTimeout(() => {
        this.stage.go('closed');
        this._markState('closed');
      }, 420);
    } else {
      this.stage.go(state === 'open' && die.meta.noOpen ? 'closed' : state, { instant: true });
      this._markState(this.stage.state);
    }
    this.onChange?.(this.params());
  }

  params() {
    const { id, size, stock, finish, pages } = this.s;
    return { id, size, stock, finish, pages };
  }

  _bleedPlanes() {
    // A faint print sheet under the die, only in the flat views.
    const { surface, model } = this;
    const e = surface.ext;
    const g = new THREE.PlaneGeometry(e.w, e.h);
    const t = model.t;
    const mk = (side) => {
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: surface.tex[side], color: '#7d7d7d', toneMapped: false }));
      m.position.set(e.x0 + e.w / 2, -(e.y0 + e.h / 2), side === 'front' ? -t * 0.5 : -t * 0.5);
      if (side === 'back') m.rotation.y = Math.PI;
      m.visible = false;
      model.object.add(m);
      return m;
    };
    this.bleedPlanes = { front: mk('front'), back: mk('back') };
    this.stage.onStart = () => this._syncBleed();
  }

  _syncBleed() {
    const on = this.s.overlays.bleed;
    const st = this.stage.tween ? this.stage.tween.state : this.stage.state;
    const flat = st === 'flat' || st === 'inside';
    if (!this.bleedPlanes) return;
    const { surface } = this;
    this.bleedPlanes.front.material.map = surface.tex.front;
    this.bleedPlanes.back.material.map = surface.tex.back;
    this.bleedPlanes.front.visible = on && flat;
    this.bleedPlanes.back.visible = on && flat;
    this.stage.invalidate();
  }

  _syncOverlays() {
    const o = this.s.overlays;
    this.el.querySelectorAll('.pl-tog').forEach((b) => b.classList.toggle('is-on', !!o[b.dataset.o]));
    this.surface?.setOverlays({ lines: o.lines, safe: o.safe, labels: o.labels });
    this._syncBleed();
  }

  _titles() {
    const { format, size } = this.job;
    const cat = CATEGORIES.find((c) => c.id === format.cat);
    this.$('.pl-eyebrow').textContent = cat?.name || '';
    this.$('.pl-title h2').textContent = this.proof?.project || format.name;
    const names = [format.nl, format.fr].filter((n, i, a) => n && n !== format.name && a.indexOf(n) === i);
    this.$('.pl-sub').textContent = this.proof ? `${format.name} · ${size.label}` : names.join(' · ');
    if (this.mode !== 'lab') {
      const m = this.$('.pl-measure');
      m.hidden = false;
      m.innerHTML = this._measureRows().map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
    }
  }

  // Finished size is measured on the folded model, so it can never disagree with the template.
  _finished() {
    const { model } = this;
    if (!model) return null;
    const b = model.bounds(model.vector('closed'));
    const v = b.getSize(new THREE.Vector3());
    return [v.x, v.y, v.z].sort((a, c) => c - a);
  }

  _measureRows() {
    const { die, stock, finishId } = this.job;
    const rows = [];
    const d = this._finished();
    const isBox = d && d[2] > 6 && !die.extras.some((e) => e.type === 'stack');
    if (d) rows.push([isBox ? 'Outside' : 'Finished', isBox ? `${fmt(d[0])} × ${fmt(d[1])} × ${fmt(d[2])} mm` : `${fmt(d[1])} × ${fmt(d[0])} mm`]);
    rows.push(['Flat sheet', `${size2(die.w, die.h)} mm`]);
    rows.push(['With bleed', `${size2(die.w + 2 * die.bleed, die.h + 2 * die.bleed)} mm`]);
    rows.push(['Stock', stock.name]);
    if (finishId !== 'none') rows.push(['Finish', FINISHES[finishId].name]);
    return rows;
  }

  _seg() {
    const { die } = this.job;
    const list = ['flat'];
    if ((die.sides ?? 2) > 1) list.push('inside');
    list.push('closed');
    if (!die.meta.noOpen) list.push('open');
    // A sheet without folds has a front and a back, not an inside.
    const plain = !die.creases.length && !die.warp;
    const label = {
      ...(this.mode === 'lab' ? LAB_STATE_LABELS : STATE_LABELS),
      ...(plain ? (this.mode === 'lab' ? { flat: 'Лицо', inside: 'Оборот', closed: '3D' } : { flat: 'Front', inside: 'Back', closed: '3D' }) : {}),
      ...(die.meta.closedLabel ? { closed: die.meta.closedLabel } : {}),
    };
    const seg = this.$('.pl-seg');
    seg.innerHTML = list.map((k) => `<button type="button" data-state="${k}">${label[k]}</button>`).join('');
    seg.querySelectorAll('button').forEach((b) =>
      b.addEventListener('click', () => {
        clearTimeout(this._introT);
        this.stage.go(b.dataset.state);
        this._markState(b.dataset.state);
      }),
    );
  }

  _markState(st) {
    this.el.querySelectorAll('[data-state]').forEach((b) => b.classList.toggle('is-on', b.dataset.state === st));
    const r = this.$('.pl-fold input');
    if (st === 'flat' || st === 'inside') r.value = 0;
    if (st === 'closed' || st === 'open') r.value = 100;
    this._syncBleed();
  }

  // ---- side panel ---------------------------------------------------------------------------

  tab(name) {
    this.s.tab = name;
    this.el.querySelectorAll('[data-tab]').forEach((b) => {
      const on = b.dataset.tab === name;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on);
    });
    this.el.querySelectorAll('[data-pane]').forEach((p) => (p.hidden = p.dataset.pane !== name));
  }

  _renderPanes() {
    if (this.mode !== 'lab') return;
    this._paneSpec();
    this._paneArt();
    this._paneShare();
    this.tab(this.s.tab);
  }

  _select(label, key, options, value) {
    if (options.length < 2) {
      const only = options[0];
      return `<div class="pl-field"><span>${label}</span><p class="pl-static">${esc(only?.[1] ?? '')}</p></div>`;
    }
    return `<label class="pl-field"><span>${label}</span><select data-k="${key}">${options
      .map(([v, l]) => `<option value="${esc(v)}"${String(v) === String(value) ? ' selected' : ''}>${esc(l)}</option>`)
      .join('')}</select></label>`;
  }

  _paneSpec() {
    const pane = this.$('[data-pane="spec"]');
    const { format, die } = this.job;
    const { s } = this;
    const rows = this._measureRows().map(([k, v]) => [LAB_ROWS[k] || k, v]);
    rows.push(['Безопасная зона', `${fmt(die.safe)} мм от реза`]);
    const mains = die.panels.filter((p) => p.role === 'main').length;
    if (mains > 1) rows.push(['Панелей с печатью', String(mains)]);
    if (die.creases.length) rows.push(['Сгибов', String(die.creases.length)]);
    const two = (die.sides ?? 2) > 1;
    pane.innerHTML = `
      <p class="pl-use">${esc(format.use)}</p>
      <div class="pl-fields">
        ${this._select('Размер', 'size', format.sizes.map((z) => [z.id, z.label]), s.size)}
        ${format.pageOptions ? this._select('Страниц', 'pages', format.pageOptions.map((p) => [p, `${p} стр.`]), s.pages) : ''}
        ${this._select('Материал', 'stock', format.stocks.map((k) => [k, STOCKS[k].name]), s.stock)}
        ${this._select('Отделка', 'finish', format.finishes.map((k) => [k, FINISHES[k].name]), s.finish)}
      </div>
      <dl class="pl-spec">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      ${this._uploadGuide()}
      <p class="pl-label">Шаблон 1:1, в миллиметрах</p>
      <div class="pl-tplgrid">
        <span>${two ? 'Снаружи · стр. 1' : 'Шаблон'}</span>
        <button type="button" class="pl-btn" data-dl="pdf" data-side="front">PDF</button>
        <button type="button" class="pl-btn" data-dl="svg" data-side="front">SVG</button>
        ${two ? `<span>Внутри · стр. 2</span>
        <button type="button" class="pl-btn" data-dl="pdf" data-side="back">PDF</button>
        <button type="button" class="pl-btn" data-dl="svg" data-side="back">SVG</button>` : ''}
      </div>
      <p class="pl-hint">На шаблоне: розовое — рез, синий пунктир — сгиб, зелёное — вылеты, серое — безопасная зона, синие стрелки TOP — верх панели после сборки. Перед печатью сверь ширины панелей с шаблоном типографии.</p>`;
    pane.querySelectorAll('select').forEach((sel) =>
      sel.addEventListener('change', () => {
        s[sel.dataset.k] = sel.value;
        this._rebuild({ keepState: true });
      }),
    );
    pane.querySelectorAll('[data-dl]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const side = btn.dataset.side;
        const opts = { side, orient: this.orientTpl };
        const name = `${format.id}-${s.size}-${side === 'back' ? 'inside' : 'outside'}-template`;
        if (btn.dataset.dl === 'pdf') download(`${name}.pdf`, new Blob([latin1(templatePDF(this.job, opts))], { type: 'application/pdf' }));
        else download(`${name}.svg`, templateSVG(this.job, opts), 'image/svg+xml');
      }),
    );
  }

  // What to upload for this exact format and size, worked out from the die.
  _uploadGuide() {
    const { die } = this.job;
    const b = die.bleed;
    const W = die.w + 2 * b;
    const H = die.h + 2 * b;
    const px = (mm, ppi) => Math.round((mm / 25.4) * ppi);
    const two = (die.sides ?? 2) > 1;
    const plain = !die.creases.length && !die.warp;
    const book = die.meta.book;
    const turned = die.panels.some((p) => p.role === 'main' && ((this.orientTpl?.[p.id]?.front || 0) !== 0 || (two && (this.orientTpl?.[p.id]?.back || 0) !== 0)));
    let pages;
    if (book) pages = `один многостраничный PDF в порядке чтения: 1 — обложка, 2 — её оборот, дальше страницы блока, предпоследняя — оборот задней обложки, последняя — задняя обложка. Сейчас выбрано ${this.s.pages || '…'} стр.`;
    else if (!two) pages = 'одна страница.';
    else if (plain) pages = 'стр. 1 — лицо, стр. 2 — оборот. Оборот рисуй так, как его видно, если перевернуть лист.';
    else pages = 'стр. 1 — внешняя сторона, стр. 2 — внутренняя. Шаблон «Внутри» уже показывает лист с обратной стороны, поэтому рисуй на нём как есть, ничего не зеркаля.';
    return `<div class="pl-guide">
      <p class="pl-label">Что загружать</p>
      <ol>
        <li><b>Файл:</b> PDF (лучше всего) или PNG/JPG. ${two && !book ? 'Две стороны можно отдать одним PDF на 2 страницы или двумя файлами.' : ''}</li>
        <li><b>Размер страницы:</b> ${fmt(W)} × ${fmt(H)} мм, это лист вместе с вылетами ${fmt(b)} мм. Для PNG/JPG: ${px(W, 300)} × ${px(H, 300)} px при 300 ppi, для превью хватит ${px(W, 150)} × ${px(H, 150)} px.</li>
        <li><b>Страницы:</b> ${pages}</li>
        <li><b>Верх панелей:</b> синие стрелки TOP на шаблоне.${turned ? ' У этого формата часть панелей повёрнута или стоит вверх ногами, проверь стрелки.' : ''}</li>
        <li><b>Текст и важное:</b> не ближе ${fmt(die.safe)} мм к линии реза.</li>
        <li><b>Figma:</b> фрейм ${fmt(W * 4)} × ${fmt(H * 4)} px (1 мм = 4 px). Экспорт PDF или PNG: ×1,5 для превью, ×3 для печати.</li>
      </ol>
    </div>`;
  }

  _sideBlock(side, label) {
    const pl = this.art[side];
    if (!pl) {
      return `<div class="pl-slot"><div class="pl-slot-head"><b>${label}</b><span>Пусто</span></div>
        <button type="button" class="pl-link" data-pick="${side}">Выбрать файл для этой стороны</button></div>`;
    }
    const list = checks(pl, this.surface.ext, this.job.die);
    const scale = Math.round((pl.mmPerPx / (pl.base || pl.mmPerPx)) * 100);
    return `<div class="pl-slot" data-side="${side}">
      <div class="pl-slot-head"><b>${label}</b><span title="${esc(pl.page.name)}">${esc(pl.page.name)}</span></div>
      <ul class="pl-checks">${list.map((c) => `<li class="is-${c.level}">${esc(c.text)}</li>`).join('')}</ul>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-fit="bleed">По вылетам</button>
        <button type="button" class="pl-chip" data-fit="trim">По обрезу</button>
        ${pl.page.mmW ? '<button type="button" class="pl-chip" data-fit="actual">100%</button>' : ''}
        <button type="button" class="pl-chip" data-act="rot">Повернуть</button>
        <button type="button" class="pl-chip" data-act="del">Убрать</button>
      </div>
      <label class="pl-slider"><span>Масштаб <i>${scale}%</i></span><input type="range" min="50" max="200" value="${scale}" data-v="scale"></label>
      <div class="pl-xy">
        <label><span>Сдвиг X, мм</span><input type="number" step="0.5" value="${fmt(pl.cx - this.surface.ext.w / 2)}" data-v="x"></label>
        <label><span>Сдвиг Y, мм</span><input type="number" step="0.5" value="${fmt(pl.cy - this.surface.ext.h / 2)}" data-v="y"></label>
      </div>
    </div>`;
  }

  _paneArt() {
    const pane = this.$('[data-pane="art"]');
    const { die } = this.job;
    const two = (die.sides ?? 2) > 1;
    const book = die.meta.book;
    const items = this.art.panels;
    pane.innerHTML = `
      <div class="pl-dropzone" tabindex="0" role="button" aria-label="Выбрать файл макета">
        <p><b>Перетащи сюда PDF или картинку</b></p>
        <p>PDF, PNG, JPG, SVG. Файл не уходит с компьютера, пока не опубликуешь демо.</p>
        <input type="file" accept=".pdf,image/*" hidden multiple>
      </div>
      <div class="pl-progress" hidden></div>
      <p class="pl-error" hidden></p>
      ${book ? `<p class="pl-hint">Многостраничный PDF ложится в книгу по порядку: стр. 1 — обложка, последняя — задняя обложка.</p>` : ''}
      ${this._sideBlock('front', two ? 'Снаружи · стр. 1' : 'Сторона печати')}
      ${two ? this._sideBlock('back', 'Внутри · стр. 2') : ''}
      ${items.length ? `<div class="pl-slot"><div class="pl-slot-head"><b>Картинки на панелях</b><span>${items.length}</span></div>
        <ul class="pl-items">${items.map((it, i) => `<li><span>${esc(die.byId[it.panel]?.[it.side === 'back' ? 'nameIn' : 'name'] || it.panel)}</span><button type="button" class="pl-link" data-rm="${i}">Убрать</button></li>`).join('')}</ul></div>` : ''}
      <p class="pl-hint">Картинку можно бросить прямо на панель 3D-модели или вставить из буфера (Ctrl+V).</p>
      <div class="pl-row">
        <button type="button" class="pl-btn" data-sample>${this.art.sample ? 'Убрать пример' : 'Показать пример макета'}</button>
      </div>`;
    const input = pane.querySelector('input[type=file]');
    const zone = pane.querySelector('.pl-dropzone');
    zone.addEventListener('click', () => input.click());
    zone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.click();
      }
    });
    input.addEventListener('change', () => {
      if (input.files.length) this._files([...input.files], { side: this._pickSide });
      this._pickSide = null;
      input.value = '';
    });
    pane.querySelectorAll('[data-pick]').forEach((b) =>
      b.addEventListener('click', () => {
        this._pickSide = b.dataset.pick;
        input.click();
      }),
    );
    pane.querySelector('[data-sample]').addEventListener('click', () => this.useSample(!this.art.sample));
    pane.querySelectorAll('[data-rm]').forEach((b) =>
      b.addEventListener('click', () => {
        this.art.panels.splice(+b.dataset.rm, 1);
        this._reapplyArt();
        this._paneArt();
      }),
    );
    pane.querySelectorAll('.pl-slot[data-side]').forEach((slot) => {
      const side = slot.dataset.side;
      const pl = this.art[side];
      const { ext } = this.surface;
      const redo = (panel = false) => {
        this._applySide(side);
        if (panel) this._paneArt();
      };
      slot.querySelectorAll('[data-fit]').forEach((b) =>
        b.addEventListener('click', () => {
          fitTo(pl, b.dataset.fit, ext, die);
          pl.base = pl.mmPerPx;
          redo(true);
        }),
      );
      slot.querySelector('[data-act="rot"]').addEventListener('click', () => {
        pl.rot = (pl.rot + 90) % 360;
        fitTo(pl, 'bleed', ext, die);
        pl.base = pl.mmPerPx;
        redo(true);
      });
      slot.querySelector('[data-act="del"]').addEventListener('click', () => {
        this.art[side] = null;
        redo(true);
      });
      const sc = slot.querySelector('[data-v="scale"]');
      sc.addEventListener('input', () => {
        pl.mmPerPx = pl.base * (sc.value / 100);
        slot.querySelector('.pl-slider i').textContent = `${sc.value}%`;
        redo();
      });
      sc.addEventListener('change', () => redo(true));
      slot.querySelector('[data-v="x"]').addEventListener('change', (e) => {
        pl.cx = ext.w / 2 + (+e.target.value || 0);
        redo(true);
      });
      slot.querySelector('[data-v="y"]').addEventListener('change', (e) => {
        pl.cy = ext.h / 2 + (+e.target.value || 0);
        redo(true);
      });
    });
  }

  // ---- demo: publish a client link -----------------------------------------------------------

  _demoForm() {
    if (!this.form) {
      const d = this.demo?.data;
      this.form = {
        slug: this.demo?.slug || '',
        project: d?.project || '',
        client: d?.client || '',
        meta: d?.meta || '',
        note: d?.note || '',
        links: (d?.links || []).map((l) => ({ label: l.label, href: l.href })),
        card: d?.card || 'card',
        share: d?.share?.ogDescription || d?.share?.description || '',
        slugTouched: !!this.demo,
      };
    }
    return this.form;
  }

  _paneShare() {
    const pane = this.$('[data-pane="share"]');
    const f = this._demoForm();
    const hasArt = !!(this.art.front || this.art.back || this.art.panels.length);
    const hasToken = !!token.get();
    const editing = !!this.demo;
    const metaPh = `${this.job.format.name} by OK Design`;
    pane.innerHTML = `
      ${editing ? `<p class="pl-editing">Редактируешь демо <a href="${esc(demoUrl(this.demo.slug))}" target="_blank" rel="noopener">/demo/${esc(this.demo.slug)}/</a>. Публикация заменит его по той же ссылке.</p>` : ''}
      <p class="pl-label">Ссылка для клиента</p>
      <label class="pl-slugrow"><span>okdesign.cc/demo/</span><input type="text" data-f="slug" value="${esc(f.slug)}" placeholder="imya-proekta" spellcheck="false" autocomplete="off"${editing ? ' readonly' : ''}></label>
      <p class="pl-hint" data-slughint>${editing ? 'Адрес уже отправлен клиенту, поэтому он не меняется.' : 'Латиница, цифры и дефис. Получится читаемая ссылка, её не нужно прятать за кодом.'}</p>
      <div class="pl-fields">
        <label class="pl-field"><span>Название (крупно над моделью)</span><input type="text" data-f="project" value="${esc(f.project)}" placeholder="${esc(this.job.format.name)}"></label>
        <label class="pl-field"><span>Клиент (видишь только ты)</span><input type="text" data-f="client" value="${esc(f.client)}" placeholder="Имя клиента"></label>
        <label class="pl-field"><span>Подпись под OK DESIGN</span><input type="text" data-f="meta" value="${esc(f.meta)}" placeholder="${esc(metaPh)}"></label>
        <label class="pl-field"><span>Текст для клиента</span><textarea rows="3" data-f="note" placeholder="Например: A5, 210 × 148 мм в развороте. Покрути модель или нажми Open.">${esc(f.note)}</textarea></label>
        <label class="pl-field"><span>Что видно на странице</span><select data-f="card">
          <option value="card"${f.card !== 'credit' ? ' selected' : ''}>Карточка: подпись, текст и кнопки</option>
          <option value="credit"${f.card === 'credit' ? ' selected' : ''}>Только «Designed by OK Design» в углу</option>
        </select></label>
        <label class="pl-field"><span>Текст превью ссылки в мессенджерах (необязательно)</span><textarea rows="2" data-f="share" placeholder="По умолчанию берётся текст для клиента">${esc(f.share)}</textarea></label>
      </div>
      <p class="pl-label">Кнопки на странице</p>
      <div class="pl-linklist">${f.links
        .map(
          (l, i) => `<div class="pl-linkrow">
            <input type="text" data-l="label" data-i="${i}" value="${esc(l.label)}" placeholder="Текст кнопки">
            ${l.file ? `<span class="pl-linkfile" title="${esc(l.file.name)}">${esc(l.file.name)}</span>` : `<input type="text" data-l="href" data-i="${i}" value="${esc(l.href)}" placeholder="https://… или имя файла">`}
            <button type="button" class="pl-ico" data-ldel="${i}" aria-label="Убрать кнопку">×</button>
          </div>`,
        )
        .join('')}</div>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-ladd="link">+ Ссылка</button>
        <button type="button" class="pl-chip" data-ladd="file">+ Файл для скачивания</button>
        <input type="file" data-lfile hidden>
      </div>
      <div class="pl-row">
        <button type="button" class="pl-btn pl-btn-primary" data-publish ${hasArt && hasToken ? '' : 'disabled'}>${editing ? 'Обновить демо' : 'Опубликовать демо'}</button>
      </div>
      ${hasArt ? '' : '<p class="pl-hint">Сначала добавь макет на вкладке «Макет».</p>'}
      ${hasToken ? '' : '<p class="pl-hint">Чтобы публиковать, один раз добавь токен GitHub: <a href="#settings" data-gosettings>Настройки студии</a>.</p>'}
      <div class="pl-status" hidden></div>
      <p class="pl-error" hidden></p>
      <p class="pl-label pl-gap">Другие способы</p>
      <div class="pl-row pl-row-tight">
        <button type="button" class="pl-chip" data-copy>Ссылка на пустую модель</button>
        <button type="button" class="pl-chip" data-proof ${hasArt ? '' : 'disabled'}>Скачать офлайн-файл</button>
      </div>
      <p class="pl-hint">Пустая модель: клиент видит выбранный формат без дизайна. Офлайн-файл: одно HTML с моделью и макетом внутри, открывается без интернета.</p>`;

    const set = (k, v) => {
      f[k] = v;
    };
    const slugInput = pane.querySelector('[data-f="slug"]');
    pane.querySelectorAll('[data-f]').forEach((i) =>
      i.addEventListener(i.tagName === 'SELECT' ? 'change' : 'input', () => {
        if (i.dataset.f === 'slug') {
          f.slugTouched = true;
          const clean = toSlug(i.value);
          if (clean !== i.value && !/-$/.test(i.value)) i.value = clean;
          set('slug', toSlug(i.value));
          return;
        }
        set(i.dataset.f, i.value);
        if (i.dataset.f === 'project' && !f.slugTouched && !editing) {
          f.slug = toSlug(i.value);
          slugInput.value = f.slug;
        }
      }),
    );
    pane.querySelectorAll('[data-l]').forEach((i) => i.addEventListener('input', () => (f.links[+i.dataset.i][i.dataset.l] = i.value)));
    pane.querySelectorAll('[data-ldel]').forEach((btn) =>
      btn.addEventListener('click', () => {
        f.links.splice(+btn.dataset.ldel, 1);
        this._paneShare();
      }),
    );
    const fileIn = pane.querySelector('[data-lfile]');
    pane.querySelector('[data-ladd="link"]').addEventListener('click', () => {
      f.links.push({ label: '', href: '' });
      this._paneShare();
    });
    pane.querySelector('[data-ladd="file"]').addEventListener('click', () => fileIn.click());
    fileIn.addEventListener('change', () => {
      const file = fileIn.files[0];
      if (!file) return;
      const pdf = /\.pdf$/i.test(file.name);
      f.links.push({ label: pdf ? 'Download PDF' : `Download ${fileName(file.name)}`, file });
      this._paneShare();
    });
    pane.querySelector('[data-gosettings]')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.onClose?.();
      setTimeout(() => document.getElementById('settings')?.scrollIntoView({ behavior: 'smooth' }), 60);
    });
    pane.querySelector('[data-publish]')?.addEventListener('click', () => this._publish(pane));
    pane.querySelector('[data-copy]').addEventListener('click', async (e) => {
      const url = this.clientLink();
      const b = e.currentTarget;
      try {
        await navigator.clipboard.writeText(url);
        b.textContent = 'Скопировано';
      } catch {
        window.prompt('Скопируй ссылку', url);
      }
      setTimeout(() => (b.textContent = 'Ссылка на пустую модель'), 1600);
    });
    pane.querySelector('[data-proof]').addEventListener('click', async (e) => {
      const b = e.currentTarget;
      const err = pane.querySelector('.pl-error');
      err.hidden = true;
      b.disabled = true;
      b.textContent = 'Собираю…';
      try {
        const meta = { project: f.project, client: f.client, note: f.note, version: 'v1' };
        const html = await buildProof(this, meta);
        download(`proof-${slug(f.project || this.job.format.name)}.html`, html, 'text/html');
      } catch (ex) {
        err.textContent = ex.message;
        err.hidden = false;
      }
      b.disabled = false;
      b.textContent = 'Скачать офлайн-файл';
    });
  }

  async _publish(pane) {
    const f = this._demoForm();
    const btn = pane.querySelector('[data-publish]');
    const status = pane.querySelector('.pl-status');
    const err = pane.querySelector('.pl-error');
    err.hidden = true;
    const slugOk = /^[a-z0-9][a-z0-9-]{1,59}$/.test(f.slug || '');
    if (!slugOk) {
      err.textContent = 'Задай адрес ссылки: минимум 2 символа, латиница, цифры и дефис.';
      err.hidden = false;
      return;
    }
    if (f.links.some((l) => l.label && !l.file && !l.href)) {
      err.textContent = 'У одной из кнопок нет ссылки. Заполни её или убери кнопку.';
      err.hidden = false;
      return;
    }
    btn.disabled = true;
    status.hidden = false;
    const step = (t) => (status.innerHTML = `<span class="pl-spin"></span>${esc(t)}`);
    try {
      step('Проверяю адрес…');
      if (!this.demo && (await demoExists(f.slug))) {
        const ok = window.confirm(`Демо okdesign.cc/demo/${f.slug}/ уже есть. Заменить его этим?`);
        if (!ok) throw new Error('Отменено. Поменяй адрес ссылки и опубликуй ещё раз.');
      }
      step('Готовлю картинки…');
      const pack = await buildDemo(this, { ...f, meta: f.meta || `${this.job.format.name} by OK Design` }, this.demo?.data);
      await publishFolder(f.slug, pack.files, { keep: pack.keep, message: `Demo: ${this.demo ? 'update' : 'publish'} ${f.slug}` }, step);
      this.demo = { slug: f.slug, data: pack.data };
      this.form = null;
      this._paneShare();
      const st = this.$('[data-pane="share"] .pl-status');
      st.hidden = false;
      st.innerHTML = `<p><b>Опубликовано.</b> Ссылка начнёт открываться примерно через минуту.</p>
        <div class="pl-row pl-row-tight"><a class="pl-chip" href="${esc(pack.url)}" target="_blank" rel="noopener">${esc(pack.url.replace(/^https:\/\//, ''))}</a><button type="button" class="pl-chip" data-copylink>Копировать</button></div>
        <p class="pl-hint" data-live><span class="pl-spin"></span>Жду, пока GitHub выложит страницу…</p>`;
      st.querySelector('[data-copylink]').addEventListener('click', async (e) => {
        try {
          await navigator.clipboard.writeText(pack.url);
          e.currentTarget.textContent = 'Скопировано';
        } catch {
          window.prompt('Скопируй ссылку', pack.url);
        }
      });
      const live = await waitLive(f.slug, pack.data.updated);
      const l = st.querySelector('[data-live]');
      if (l) l.textContent = live ? 'Страница уже открывается. Можно отправлять клиенту.' : 'GitHub ещё выкладывает страницу. Проверь ссылку через пару минут.';
    } catch (ex) {
      status.hidden = true;
      err.textContent = ex.message || String(ex);
      err.hidden = false;
      btn.disabled = false;
    }
  }

  // Opens a published demo for editing: same format, its artwork back on the model, the form filled.
  async loadDemo(slugName) {
    const url = demoUrl(slugName);
    const res = await fetch(`${url}demo.json?t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Не нашёл демо /demo/${slugName}/`);
    const data = await res.json();
    this.demo = { slug: slugName, data };
    this.form = null;
    const files = [];
    for (const side of ['front', 'back']) {
      const name = data.art?.[side];
      if (!name) continue;
      const r = await fetch(`${url}${name}?t=${Date.now()}`, { cache: 'no-store' });
      if (r.ok) files.push([side, new File([await r.blob()], name, { type: 'image/jpeg' })]);
    }
    for (const [side, file] of files) await this._files([file], { side });
    if (data.sticker?.src) {
      try {
        await this.stage.loadSticker({ ...data.sticker, src: `${url}${data.sticker.src}` });
      } catch {
        /* the sticker is optional */
      }
    }
    this._paneShare();
    this.tab('share');
    this.stage.go('closed');
    this._markState('closed');
  }

  clientLink() {
    const { id, size, stock, finish, pages } = this.s;
    const q = new URLSearchParams({ size, stock, finish, view: 'client' });
    if (pages) q.set('pages', pages);
    return `${location.href.split('#')[0]}#/f/${id}?${q}`;
  }

  // ---- artwork ------------------------------------------------------------------------------

  async useSample(on) {
    if (on) {
      try {
        await Promise.all([document.fonts.load('800 40px Outfit'), document.fonts.load('600 40px Outfit')]);
      } catch {
        /* fallback font is fine for a placeholder */
      }
    }
    this.art.sample = on;
    if (on) {
      this.art.front = null;
      this.art.back = null;
      this.art.panels = [];
    }
    this._reapplyArt();
    if (this.mode === 'lab') {
      this._paneArt();
      this._paneShare();
    }
  }

  _applySide(side) {
    const { surface, job, orient, art } = this;
    if (art.sample) {
      const sa = sampleArt(job.die, orient);
      surface.setArt(side, side === 'front' ? sa.front : sa.back);
      this._syncBleed();
      return;
    }
    const pl = art[side];
    const items = art.panels.filter((it) => it.side === side);
    if (!pl && !items.length) {
      surface.setArt(side, null);
    } else {
      surface.setArt(side, (x, k, ext) => {
        if (pl) drawPlacement(x, k, pl);
        for (const it of items) drawPanelArt(x, k, ext, it, job.die, orient, side);
      });
    }
    this._syncBleed();
  }

  _reapplyArt() {
    const { art, surface, job } = this;
    for (const side of ['front', 'back']) {
      const pl = art[side];
      if (pl) {
        const fresh = autoPlace(pl.page, surface.ext, job.die);
        fresh.base = fresh.mmPerPx;
        art[side] = fresh;
      }
      this._applySide(side);
    }
    if (art.pagesMap) for (const [n, src] of art.pagesMap) this.pages.setPage(n, src);
  }

  async _files(files, { side, panel } = {}) {
    const pane = this.$('[data-pane="art"]');
    const prog = pane?.querySelector('.pl-progress');
    const err = pane?.querySelector('.pl-error');
    if (err) err.hidden = true;
    this.tab('art');
    try {
      let n = 0;
      for (const file of files) {
        if (prog) {
          prog.hidden = false;
          prog.textContent = `Читаю ${file.name}…`;
        }
        const doc = await loadArtwork(file, {
          maxSide: this.maxTex,
          onProgress: (i, c) => {
            if (prog) prog.textContent = `Страница ${i} из ${c}…`;
          },
        });
        this._placeDoc(doc, { side: n === 1 && !side ? 'back' : side, panel });
        n++;
      }
    } catch (ex) {
      if (err) {
        err.textContent = ex.message || 'Не получилось прочитать файл.';
        err.hidden = false;
      }
    }
    if (prog) prog.hidden = true;
    this._paneArt();
    this._paneShare();
  }

  _placeDoc(doc, { side, panel }) {
    const { die } = this.job;
    const { art, surface } = this;
    art.sample = false;
    if (panel) {
      art.panels = art.panels.filter((it) => !(it.panel === panel.panel && it.side === panel.side));
      art.panels.push({ panel: panel.panel, side: panel.side, page: doc.pages[0] });
      this._applySide(panel.side);
      return;
    }
    const book = die.meta.book;
    if (book && doc.pages.length > 2 && die.byId.front && die.byId.back) {
      // Match the page count of the file when the format offers it.
      const opt = this.job.format.pageOptions;
      if (opt?.includes(doc.pages.length) && doc.pages.length !== this.s.pages) {
        this.s.pages = doc.pages.length;
        this._rebuild({ keepState: true });
        this._placeBook(doc);
        this._paneSpec();
        return;
      }
      this._placeBook(doc);
      return;
    }
    const target = side || (this.stage.state === 'inside' ? 'back' : 'front');
    const put = (s, page) => {
      const pl = autoPlace(page, surface.ext, die);
      pl.base = pl.mmPerPx;
      art[s] = pl;
      this._applySide(s);
    };
    put(target, doc.pages[0]);
    if (doc.pages[1] && !side && (die.sides ?? 2) > 1) put(target === 'front' ? 'back' : 'front', doc.pages[1]);
    if (this.stage.state !== 'flat' && this.stage.state !== 'inside') this.stage.go(target === 'back' ? 'inside' : 'flat');
    this.s.overlays.lines = true;
    this._syncOverlays();
  }

  _placeBook(doc) {
    const { art } = this;
    const list = doc.pages;
    const n = list.length;
    art.panels = [
      { panel: 'front', side: 'front', page: list[0] },
      { panel: 'back', side: 'front', page: list[n - 1] },
    ];
    if (n > 3) {
      art.panels.push({ panel: 'front', side: 'back', page: list[1] }, { panel: 'back', side: 'back', page: list[n - 2] });
    }
    art.pagesMap = new Map();
    // Inner pages keep their page number; each leaf of the model asks for its own.
    for (let i = 2; i < n - 2; i++) art.pagesMap.set(i + 1, list[i].source);
    for (const [k, src] of art.pagesMap) this.pages.setPage(k, src);
    this._applySide('front');
    this._applySide('back');
    this.stage.go('closed');
  }

  // ---- drop, paste, hover -------------------------------------------------------------------

  _wireDrop() {
    const stageEl = this.$('.pl-stage');
    const veil = this.$('.pl-veil');
    let depth = 0;
    const onSheet = () => this.stage.state === 'flat' || this.stage.state === 'inside';
    const hint = () => {
      veil.querySelector('p').textContent = onSheet()
        ? `Отпусти, чтобы залить ${this.stage.state === 'inside' ? 'внутреннюю' : 'внешнюю'} сторону листа`
        : 'Отпусти на панели, чтобы поставить картинку на неё';
    };
    this.el.addEventListener('dragenter', (e) => {
      if (!e.dataTransfer?.types?.includes('Files')) return;
      e.preventDefault();
      depth++;
      hint();
      veil.hidden = false;
    });
    this.el.addEventListener('dragleave', () => {
      depth = Math.max(0, depth - 1);
      if (!depth) veil.hidden = true;
    });
    this.el.addEventListener('dragover', (e) => {
      if (!e.dataTransfer?.types?.includes('Files')) return;
      e.preventDefault();
      if (!onSheet() && stageEl.contains(e.target)) {
        const hit = this.stage.pick(e.clientX, e.clientY);
        const name = hit && this._panelName(hit);
        veil.querySelector('p').textContent = name ? `На панель: ${name}` : 'Отпусти на панели, чтобы поставить картинку на неё';
      }
    });
    this.el.addEventListener('drop', (e) => {
      e.preventDefault();
      depth = 0;
      veil.hidden = true;
      const files = [...(e.dataTransfer?.files || [])];
      if (!files.length) return;
      const onStage = stageEl.contains(e.target);
      if (onStage && !onSheet()) {
        const hit = this.stage.pick(e.clientX, e.clientY);
        if (hit && hit.panel) {
          this._files([files[0]], { panel: hit });
          return;
        }
      }
      this._files(files);
    });
    this._onPaste = (e) => {
      if (!this.el.classList.contains('is-open')) return;
      if (/INPUT|TEXTAREA/.test(document.activeElement?.tagName || '')) return;
      const f = [...(e.clipboardData?.files || [])].filter((x) => /^image\//.test(x.type));
      if (f.length) this._files([f[0]]);
    };
    window.addEventListener('paste', this._onPaste);
  }

  _panelName(hit) {
    const p = this.job.die.byId[hit.panel];
    if (!p || p.role === 'leaf') return null;
    return hit.side === 'back' ? p.nameIn || 'Inside' : p.name;
  }

  _wireHover() {
    const tip = this.$('.pl-tip');
    const stageEl = this.$('.pl-stage');
    if (this.mode !== 'lab') return;
    let last = 0;
    stageEl.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch' || e.buttons) {
        tip.hidden = true;
        return;
      }
      const now = performance.now();
      if (now - last < 60) return;
      last = now;
      if (e.target.tagName !== 'CANVAS' || !this.stage) {
        tip.hidden = true;
        return;
      }
      const hit = this.stage.pick(e.clientX, e.clientY);
      const name = hit && this._panelName(hit);
      if (!name) {
        tip.hidden = true;
        return;
      }
      const r = stageEl.getBoundingClientRect();
      tip.textContent = name;
      tip.style.transform = `translate(${e.clientX - r.left + 14}px, ${e.clientY - r.top + 14}px)`;
      tip.hidden = false;
    });
    stageEl.addEventListener('pointerleave', () => (tip.hidden = true));
  }

  // Used by the proof runtime: pre-baked images instead of placements.
  async loadBaked(proof) {
    const img = (src) =>
      new Promise((ok, fail) => {
        const i = new Image();
        i.onload = () => ok(i);
        i.onerror = fail;
        i.src = src;
      });
    const front = proof.art.front ? await img(proof.art.front) : null;
    const back = proof.art.back ? await img(proof.art.back) : null;
    const full = (image) => (x, k, ext) => {
      x.setTransform(1, 0, 0, 1, 0, 0);
      x.drawImage(image, 0, 0, ext.w * k, ext.h * k);
    };
    if (front) this.surface.setArt('front', full(front));
    if (back) this.surface.setArt('back', full(back));
    for (const [n, src] of Object.entries(proof.pages || {})) {
      const i = await img(src);
      const c = document.createElement('canvas');
      c.width = i.naturalWidth;
      c.height = i.naturalHeight;
      c.getContext('2d').drawImage(i, 0, 0);
      this.pages.setPage(+n, c);
    }
    this.stage.invalidate();
  }
}

function latin1(str) {
  const out = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) out[i] = str.charCodeAt(i) & 255;
  return out;
}
