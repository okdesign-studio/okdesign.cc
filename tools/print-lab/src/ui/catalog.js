// The catalogue grid: search, category filter, sections.

import { CATEGORIES, FORMATS } from '../catalog.js';
import { resolve } from '../assemble.js';
import { dieThumb } from '../export/template.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function mountCatalog(root, { thumbs }) {
  const state = { cat: '*', q: '' };
  const pills = root.querySelector('#plCats');
  const grid = root.querySelector('#plGrid');
  const count = root.querySelector('#plCount');
  const search = root.querySelector('#plSearch');
  const empty = root.querySelector('#plEmpty');
  const ru = root.dataset.lang === 'ru';
  const plural = (n, one, few, many) => (n % 10 === 1 && n % 100 !== 11 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? few : many);

  pills.innerHTML = [{ id: '*', name: ru ? 'Все' : 'All' }, ...CATEGORIES]
    .map((c) => `<button type="button" class="btn btn-envato-dropdown pl-pill" data-cat="${c.id}">${esc(c.name)}</button>`)
    .join('');

  const hay = new Map(FORMATS.map((f) => [f.id, norm([f.name, f.nl, f.fr, f.use, ...f.sizes.map((s) => s.label)].join(' '))]));

  const card = (f) => {
    const n = f.sizes.length;
    const sizeNote = n > 1 ? (ru ? `${n} ${plural(n, 'размер', 'размера', 'размеров')}` : `${n} sizes`) : f.sizes[0].label;
    return `<a href="#/f/${f.id}" class="article-blog no-div pl-card" data-id="${f.id}">
      <div class="blog-image pl-thumb">
        <img loading="lazy" width="640" height="480" src="${thumbs}${f.id}.webp" alt="${esc(f.name)}, blank 3D model">
        <div class="pl-die" aria-hidden="true"></div>
      </div>
      <div class="blog-content">
        <div class="infor">
          <p class="infor_sub text-white-64">${esc(sizeNote)}</p>
          <h6><span class="link infor_name">${esc(f.name)}</span></h6>
        </div>
        <div class="btn-action"><i class="icon icon-arrow-top-right"></i></div>
      </div>
    </a>`;
  };

  const render = () => {
    const q = norm(state.q.trim());
    const match = (f) => (state.cat === '*' || f.cat === state.cat) && (!q || q.split(/\s+/).every((w) => hay.get(f.id).includes(w)));
    const list = FORMATS.filter(match);
    let html = '';
    for (const c of CATEGORIES) {
      const items = list.filter((f) => f.cat === c.id);
      if (!items.length) continue;
      html += `<section class="pl-section">
        <div class="pl-section-head"><span class="text-uppercase text-primary text-caption fw-medium">${String(CATEGORIES.indexOf(c) + 1).padStart(2, '0')} /</span><h2>${esc(c.name)}</h2><span class="pl-section-count">${items.length}</span></div>
        <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4 pl-grid">${items.map(card).join('')}</div>
      </section>`;
    }
    grid.innerHTML = html;
    count.textContent = ru ? `${list.length} ${plural(list.length, 'формат', 'формата', 'форматов')}` : `${list.length} ${list.length === 1 ? 'format' : 'formats'}`;
    empty.hidden = list.length > 0;
    pills.querySelectorAll('.pl-pill').forEach((b) => b.classList.toggle('is-active', b.dataset.cat === state.cat));
  };

  pills.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    state.cat = b.dataset.cat;
    render();
  });
  search.addEventListener('input', () => {
    state.q = search.value;
    render();
  });
  root.querySelector('#plReset')?.addEventListener('click', () => {
    state.q = '';
    state.cat = '*';
    search.value = '';
    render();
  });
  // The die drawing is built the first time a card is hovered.
  grid.addEventListener('pointerover', (e) => {
    const c = e.target.closest('.pl-card');
    if (!c || c.dataset.die) return;
    c.dataset.die = '1';
    try {
      const job = resolve(c.dataset.id);
      c.querySelector('.pl-die').innerHTML = dieThumb(job.die);
    } catch {
      /* the photo simply stays */
    }
  });
  render();
}
