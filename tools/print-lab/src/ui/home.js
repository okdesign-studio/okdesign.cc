// The studio's own sections on /studio/: the list of published demos and the GitHub settings.

import { token, checkToken, listDemos, unpublish, demoUrl, SITE } from '../export/publish.js';
import { vault, MIN_PASSWORD } from '../export/vault.js';
import { TOKEN_HOWTO } from './lock.js';

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
      list.innerHTML = '<div class="ds-empty"><p><b>Студия заблокирована.</b></p><p>Обнови страницу и введи пароль.</p></div>';
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

  settings.innerHTML = `
    <div class="ds-settings">
      <div>
        <p class="ds-h">Доступ к студии</p>
        <p class="ds-p">Студия открывается только по паролю. Публиковать и снимать демо может только токен GitHub, а он хранится в этом браузере зашифрованным твоим паролем. Открытым он живёт в этой вкладке до её закрытия, до кнопки «Выйти» или 12 часов.</p>
        <div class="ds-tokenrow">
          <button type="button" class="pl-btn" id="dsLockNow">Выйти</button>
          <button type="button" class="pl-btn" id="dsCheck">Проверить доступ</button>
        </div>
        <p class="ds-status" id="dsStatus" aria-live="polite"></p>
        <details class="ds-more">
          <summary>Сменить пароль</summary>
          <form class="ds-form" id="dsPassForm">
            <input class="ds-vh" type="text" name="username" value="okdesign-studio" autocomplete="username" tabindex="-1" aria-hidden="true">
            <input type="password" name="old" autocomplete="current-password" placeholder="Текущий пароль" required>
            <input type="password" name="password" autocomplete="new-password" placeholder="Новый пароль, от ${MIN_PASSWORD} символов" required>
            <input type="password" name="password2" autocomplete="new-password" placeholder="Новый пароль ещё раз" required>
            <button type="submit" class="pl-btn">Сменить пароль</button>
          </form>
        </details>
        <details class="ds-more">
          <summary>Заменить токен GitHub</summary>
          <p class="ds-p">Когда срок токена выйдет, GitHub перестанет его принимать. Создай новый (шаги справа) и вставь сюда.</p>
          <form class="ds-form" id="dsTokenForm">
            <input type="password" name="token" autocomplete="off" spellcheck="false" placeholder="github_pat_…" required>
            <input type="password" name="password" autocomplete="current-password" placeholder="Пароль студии" required>
            <button type="submit" class="pl-btn">Заменить токен</button>
          </form>
        </details>
        <details class="ds-more">
          <summary>Забыть это устройство</summary>
          <p class="ds-p">Удаляет зашифрованный токен из этого браузера, например на чужом компьютере. Демо на сайте не пострадают.</p>
          <button type="button" class="pl-chip ds-danger" id="dsForget">Забыть это устройство</button>
        </details>
      </div>
      <div>
        <p class="ds-h">Как сделать токен GitHub</p>
        ${TOKEN_HOWTO}
        <p class="ds-p">Если GitHub попросит одобрение организации, одобри его в настройках okdesign-studio. Старые токены удаляй в <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">списке токенов</a>.</p>
      </div>
    </div>`;
  const status = settings.querySelector('#dsStatus');
  const say = (t, bad = false) => {
    status.textContent = t;
    status.classList.toggle('is-bad', bad);
  };
  const lockNow = () => {
    vault.close();
    location.reload();
  };
  document.getElementById('dsLockTop')?.addEventListener('click', (e) => {
    e.preventDefault();
    lockNow();
  });
  settings.querySelector('#dsLockNow').addEventListener('click', lockNow);
  settings.querySelector('#dsCheck').addEventListener('click', async () => {
    say('Проверяю…');
    try {
      const r = await checkToken();
      say(`Всё работает: можно публиковать в ${r.repo}.`);
    } catch (e) {
      say(e.message, true);
    }
  });
  const passForm = settings.querySelector('#dsPassForm');
  passForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { old, password, password2 } = passForm;
    try {
      if (password.value.length < MIN_PASSWORD) throw new Error(`Новый пароль должен быть не короче ${MIN_PASSWORD} символов.`);
      if (password.value !== password2.value) throw new Error('Новые пароли не совпадают.');
      say('Проверяю…');
      const t = await vault.open(old.value);
      await vault.save(t, password.value);
      passForm.reset();
      say('Пароль сменён. В других браузерах, где ты входил, остаётся старый пароль.');
    } catch (ex) {
      say(ex.message, true);
    }
  });
  const tokenForm = settings.querySelector('#dsTokenForm');
  tokenForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = tokenForm.token.value.trim();
    try {
      say('Проверяю пароль…');
      await vault.open(tokenForm.password.value);
      say('Проверяю новый токен на GitHub…');
      await checkToken(t);
      await vault.save(t, tokenForm.password.value);
      tokenForm.reset();
      say('Токен заменён и зашифрован.');
      renderList();
    } catch (ex) {
      say(ex.message, true);
    }
  });
  settings.querySelector('#dsForget').addEventListener('click', () => {
    const ok = window.confirm('Забыть это устройство?\n\nЗашифрованный токен будет удалён из этого браузера. Чтобы снова войти здесь, понадобится токен GitHub и пароль.');
    if (!ok) return;
    vault.forget();
    location.reload();
  });
  document.getElementById('dsRefresh')?.addEventListener('click', renderList);
  renderList();
  return { refresh: renderList };
}
