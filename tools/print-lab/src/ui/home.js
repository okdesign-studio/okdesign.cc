// The studio's own sections on /studio/: the list of published demos and the GitHub settings.

import { token, checkToken, listDemos, unpublish, demoUrl, SITE } from '../export/publish.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const day = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return Number.isNaN(+d) ? '' : d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
};

export function editHash(d) {
  const q = new URLSearchParams();
  for (const k of ['size', 'stock', 'finish', 'pages']) if (d[k]) q.set(k, d[k]);
  q.set('demo', d.slug);
  return `#/f/${d.id}?${q}`;
}

export function mountHome() {
  const list = document.getElementById('dsDemos');
  const settings = document.getElementById('dsSettings');
  if (!list || !settings) return;

  const renderList = async () => {
    if (!token.get()) {
      list.innerHTML = `<div class="ds-empty"><p><b>Список демо появится после настройки.</b></p><p>Добавь токен GitHub в разделе «Настройки» ниже: студия будет читать и публиковать папки <code>/${SITE.folder}/</code> на сайте.</p></div>`;
      return;
    }
    list.innerHTML = '<div class="ds-empty"><p><span class="pl-spin"></span>Загружаю демо с GitHub…</p></div>';
    try {
      const demos = await listDemos();
      if (!demos.length) {
        list.innerHTML = '<div class="ds-empty"><p><b>Пока ни одного демо.</b></p><p>Открой формат в каталоге ниже, добавь макет и нажми «Опубликовать демо» на вкладке «Демо».</p></div>';
        return;
      }
      list.innerHTML = `<div class="ds-grid">${demos
        .map((d) => {
          const url = demoUrl(d.slug);
          return `<article class="ds-card">
            <a class="ds-thumb" href="${esc(url)}" target="_blank" rel="noopener"><img loading="lazy" src="${esc(url)}og.jpg?v=${encodeURIComponent(d.updated || '')}" alt=""></a>
            <div class="ds-body">
              <p class="ds-title">${esc(d.project || d.slug)}</p>
              <p class="ds-meta">${esc([d.client, d.format?.name, d.format?.size].filter(Boolean).join(' · '))}</p>
              <p class="ds-meta">/${SITE.folder}/${esc(d.slug)}/ · ${esc(day(d.updated))}</p>
              <div class="ds-actions">
                <a class="pl-chip" href="${esc(url)}" target="_blank" rel="noopener">Открыть</a>
                <button type="button" class="pl-chip" data-copy="${esc(url)}">Копировать</button>
                ${d.id ? `<a class="pl-chip" href="${esc(editHash(d))}">Редактировать</a>` : ''}
                <button type="button" class="pl-chip ds-danger" data-del="${esc(d.slug)}">Снять</button>
              </div>
            </div>
          </article>`;
        })
        .join('')}</div>`;
      list.querySelectorAll('[data-copy]').forEach((b) =>
        b.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(b.dataset.copy);
            b.textContent = 'Скопировано';
          } catch {
            window.prompt('Скопируй ссылку', b.dataset.copy);
          }
          setTimeout(() => (b.textContent = 'Копировать'), 1500);
        }),
      );
      list.querySelectorAll('[data-del]').forEach((b) =>
        b.addEventListener('click', async () => {
          const slug = b.dataset.del;
          const ok = window.confirm(`Снять демо okdesign.cc/${SITE.folder}/${slug}/ с публикации?\n\nСсылка перестанет открываться. В истории GitHub файлы останутся, так что его можно будет вернуть.`);
          if (!ok) return;
          b.disabled = true;
          b.textContent = 'Снимаю…';
          try {
            await unpublish(slug, () => {});
            await renderList();
          } catch (e) {
            b.disabled = false;
            b.textContent = 'Снять';
            window.alert(e.message);
          }
        }),
      );
    } catch (e) {
      list.innerHTML = `<div class="ds-empty"><p><b>Не получилось загрузить список.</b></p><p>${esc(e.message)}</p></div>`;
    }
  };

  const has = !!token.get();
  settings.innerHTML = `
    <div class="ds-settings">
      <div>
        <p class="ds-h">Токен GitHub для публикации</p>
        <p class="ds-p">Студия публикует демо прямо в репозиторий сайта <b>${SITE.repo}</b>. Для этого нужен твой токен с правом записи только в этот репозиторий. Он хранится в этом браузере и уходит только на api.github.com. На другом компьютере вставь его ещё раз.</p>
        <div class="ds-tokenrow">
          <input type="password" id="dsToken" autocomplete="off" spellcheck="false" placeholder="${has ? 'Токен сохранён' : 'github_pat_…'}">
          <button type="button" class="pl-btn pl-btn-primary" id="dsSave">Сохранить</button>
          <button type="button" class="pl-btn" id="dsCheck"${has ? '' : ' disabled'}>Проверить</button>
          <button type="button" class="pl-btn" id="dsForget"${has ? '' : ' disabled'}>Удалить</button>
        </div>
        <p class="ds-status" id="dsStatus">${has ? 'Токен сохранён в этом браузере.' : 'Токена пока нет.'}</p>
      </div>
      <ol class="ds-howto">
        <li>Открой <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">GitHub → Fine-grained token → Generate new token</a> (войди в свой аккаунт).</li>
        <li><b>Token name:</b> OK Design studio. <b>Expiration:</b> на год или дольше, если разрешено.</li>
        <li><b>Resource owner:</b> okdesign-studio.</li>
        <li><b>Repository access:</b> Only select repositories → okdesign.cc.</li>
        <li><b>Permissions → Repository permissions → Contents:</b> Read and write. Остальное не трогай.</li>
        <li>Нажми <b>Generate token</b>, скопируй его и вставь сюда. Если GitHub попросит одобрение организации, одобри его в настройках okdesign-studio.</li>
      </ol>
    </div>`;
  const input = settings.querySelector('#dsToken');
  const status = settings.querySelector('#dsStatus');
  const say = (t, bad = false) => {
    status.textContent = t;
    status.classList.toggle('is-bad', bad);
  };
  const refreshButtons = () => {
    const ok = !!token.get();
    settings.querySelector('#dsCheck').disabled = !ok;
    settings.querySelector('#dsForget').disabled = !ok;
    input.placeholder = ok ? 'Токен сохранён' : 'github_pat_…';
  };
  const check = async () => {
    say('Проверяю…');
    try {
      const r = await checkToken();
      say(`Всё работает: можно публиковать в ${r.repo}.`);
      return true;
    } catch (e) {
      say(e.message, true);
      return false;
    }
  };
  settings.querySelector('#dsSave').addEventListener('click', async () => {
    const v = input.value.trim();
    if (!v) {
      say('Вставь токен в поле.', true);
      return;
    }
    token.set(v);
    input.value = '';
    refreshButtons();
    if (await check()) renderList();
  });
  settings.querySelector('#dsCheck').addEventListener('click', check);
  settings.querySelector('#dsForget').addEventListener('click', () => {
    token.set('');
    refreshButtons();
    say('Токен удалён из этого браузера.');
    renderList();
  });
  document.getElementById('dsRefresh')?.addEventListener('click', renderList);
  renderList();
  return { refresh: renderList };
}
