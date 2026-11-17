// Entry of the studio (/studio/), of every published demo (/demo/<name>/) and of offline proof files.

import { Studio } from './ui/studio.js';
import { mountCatalog } from './ui/catalog.js';
import { formatById, stats } from './catalog.js';
import { mountHome } from './ui/home.js';
import { scriptBase } from './util/base.js';
import { vault } from './export/vault.js';
import { mountLock } from './ui/lock.js';

function parseHash() {
  const m = /^#\/f\/([^?]+)(?:\?(.*))?$/.exec(location.hash);
  if (!m) return null;
  const q = new URLSearchParams(m[2] || '');
  return {
    id: decodeURIComponent(m[1]),
    size: q.get('size') || undefined,
    stock: q.get('stock') || undefined,
    finish: q.get('finish') || undefined,
    pages: q.get('pages') || undefined,
    view: q.get('view') || undefined,
    demo: q.get('demo') || undefined,
  };
}

// /studio/ opens only after the studio password (see ui/lock.js). The page ships with
// <html class="ds-locked">, which hides everything but the lock screen.
function startLab() {
  const root = document.getElementById('plApp');
  if (!root) return;
  const html = document.documentElement;
  // Blank-model links of the first version pointed into the studio: send them to the public page.
  if (parseHash()?.view === 'client') {
    location.replace(`/model/${location.hash.replace(/([?&])view=client&?/, '$1').replace(/[?&]$/, '')}`);
    return;
  }
  if (html.classList.contains('ds-locked') && !vault.unlocked()) {
    mountLock({
      onUnlock: () => {
        html.classList.remove('ds-locked');
        openLab(root);
      },
    });
    return;
  }
  html.classList.remove('ds-locked');
  openLab(root);
}

function openLab(root) {
  const host = document.getElementById('plStudioHost');
  const base = root.dataset.thumbs || `${scriptBase()}thumbs/`;
  mountCatalog(root, { thumbs: base });
  const st = stats();
  const c = document.getElementById('plTotals');
  if (c) c.textContent = root.dataset.lang === 'ru' ? `${st.formats} форматов · ${st.sizes} размеров` : `${st.formats} formats, ${st.sizes} sizes`;
  const home = mountHome();

  let lab = null;
  let client = null;
  let current = null;
  let openKey = '';

  const close = () => {
    current?.close();
    current = null;
    openKey = '';
    document.documentElement.classList.remove('pl-lock');
  };
  const route = () => {
    const p = parseHash();
    if (!p || !formatById[p.id]) {
      close();
      return;
    }
    const key = `${p.view === 'client' ? 'c' : 'l'}:${p.id}:${p.demo || ''}`;
    if (key === openKey) return;
    openKey = key;
    current?.close();
    if (p.view === 'client') {
      client = client || new Studio(host, { mode: 'client', onClose: back });
      current = client;
    } else {
      lab = lab || new Studio(host, { mode: 'lab', onClose: back, onChange: sync });
      current = lab;
    }
    document.documentElement.classList.add('pl-lock');
    current.open(p);
    if (p.demo && current.loadDemo) {
      current.loadDemo(p.demo).catch((e) => window.alert(e.message));
    }
  };
  function back() {
    const wasDemo = !!current?.demo;
    history.pushState('', '', location.pathname + location.search);
    close();
    if (wasDemo) home?.refresh();
  }
  function sync(par) {
    const q = new URLSearchParams();
    if (par.size) q.set('size', par.size);
    if (par.stock) q.set('stock', par.stock);
    if (par.finish) q.set('finish', par.finish);
    if (par.pages) q.set('pages', par.pages);
    const cur = parseHash();
    if (cur?.demo) q.set('demo', cur.demo);
    history.replaceState(null, '', `#/f/${par.id}?${q}`);
  }
  window.addEventListener('hashchange', route);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && current) back();
  });
  route();
  window.__plStudio = () => current;
}

function startProof(data) {
  const root = document.getElementById('plProof');
  const studio = new Studio(root, { mode: 'proof', proof: data });
  studio.open({ id: data.id, size: data.size, stock: data.stock, finish: data.finish, pages: data.pages, noIntro: true });
  const card = document.createElement('div');
  card.className = 'pl-proofcard';
  const subject = encodeURIComponent(`${data.project} ${data.version}`);
  const mail = (word) => `mailto:${data.email}?subject=${encodeURIComponent(word)}%20${subject}`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  // A showcase (portfolio concept) carries its own links instead of the approval buttons.
  const actions = data.links?.length
    ? data.links
        .map((l) => `<a class="pl-btn${l.primary ? ' pl-btn-primary' : ''}" href="${esc(l.href)}"${l.download ? ' download' : ' target="_blank" rel="noopener"'}>${esc(l.label)}</a>`)
        .join('')
    : `<a class="pl-btn pl-btn-primary" href="${mail('Approved:')}">Approve</a>
      <a class="pl-btn" href="${mail('Changes for')}">Request changes</a>`;
  const meta = data.meta || `${data.client ? `${data.client} · ` : ''}${data.version} · ${data.date}`;
  card.innerHTML = `
    <p class="pl-proof-brand">OK DESIGN</p>
    <p class="pl-proof-meta">${esc(meta)}</p>
    ${data.note ? `<p class="pl-proof-note">${esc(data.note)}</p>` : ''}
    <div class="pl-proof-actions">${actions}</div>`;
  if (data.card === 'credit') {
    // Credit only: no card, no buttons, just a small signature in the corner.
    const credit = document.createElement('p');
    credit.className = 'pl-credit';
    credit.innerHTML = 'Designed by<br><a href="https://okdesign.cc/" target="_blank" rel="noopener">OK Design</a>';
    document.body.appendChild(credit);
  } else {
    studio.el.querySelector('.pl-stage').appendChild(card);
  }
  studio
    .loadBaked({ art: data.art, pages: data.bookPages })
    // An optional seal sticker (see Stage.loadSticker); a missing image never blocks the preview.
    .then(() => (data.sticker ? studio.stage.loadSticker(data.sticker).catch(() => {}) : null))
    .then(() => {
      setTimeout(() => studio.stage.go('closed'), 300);
    });
  studio.stage.go('flat', { instant: true });
  studio.el.classList.add('is-open');
  window.__plStudio = () => studio;
}

// /model/#/f/<id>?size=…: the blank model of one format for a client, without the studio around it.
function startModel() {
  const root = document.getElementById('plModel');
  let studio = null;
  let key = '';
  const show = () => {
    const p = parseHash();
    const k = p ? `${p.id}?${p.size}&${p.stock}&${p.finish}&${p.pages}` : '';
    if (k === key) return;
    key = k;
    if (!p || !formatById[p.id]) {
      studio?.close();
      root.querySelector('.pl-model-missing')?.remove();
      root.insertAdjacentHTML('beforeend', '<p class="pl-model-missing">This preview link is incomplete. Please ask OK Design for a new one.</p>');
      return;
    }
    root.querySelector('.pl-model-missing')?.remove();
    studio = studio || new Studio(root, { mode: 'client', back: false });
    studio.open(p);
    document.title = `${formatById[p.id].name}, 3D preview · OK Design`;
    window.__plStudio = () => studio;
  };
  const credit = document.createElement('p');
  credit.className = 'pl-credit';
  credit.innerHTML = 'Designed by<br><a href="https://okdesign.cc/" target="_blank" rel="noopener">OK Design</a>';
  document.body.appendChild(credit);
  window.addEventListener('hashchange', show);
  show();
}

const boot = () => {
  if (window.__OK_PROOF__) startProof(window.__OK_PROOF__);
  else if (document.getElementById('plModel')) startModel();
  else startLab();
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
