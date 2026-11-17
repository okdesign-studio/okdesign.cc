// The studio's front door. /studio/ shows nothing but this screen until the password is entered.
//
// What actually protects the site is the GitHub token: it is the only key that can publish or
// remove demos, and it is stored only encrypted with this password. A token is accepted only if
// GitHub confirms it can write to the site, so a stranger cannot set the studio up with their own.

import { vault, WrongPassword, MIN_PASSWORD } from '../export/vault.js';
import { checkToken, SITE } from '../export/publish.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export const TOKEN_HOWTO = `
  <ol class="ds-howto">
    <li>Открой <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">GitHub → Fine-grained token → Generate new token</a> (войди в свой аккаунт).</li>
    <li><b>Token name:</b> OK Design studio. <b>Expiration:</b> на год.</li>
    <li><b>Resource owner:</b> okdesign-studio.</li>
    <li><b>Repository access:</b> Only select repositories → okdesign.cc.</li>
    <li><b>Permissions → Repository permissions → Contents:</b> Read and write. Остальное не трогай.</li>
    <li>Нажми <b>Generate token</b> и скопируй его сюда.</li>
  </ol>`;

// A hidden user name helps password managers (iCloud Keychain, 1Password…) save the studio password.
const USER = `<input class="ds-vh" type="text" name="username" value="okdesign-studio" autocomplete="username" tabindex="-1" aria-hidden="true">`;

const FAIL_KEY = 'okds.fails';
const fails = {
  get() {
    try {
      return JSON.parse(sessionStorage.getItem(FAIL_KEY) || '{"n":0,"t":0}');
    } catch {
      return { n: 0, t: 0 };
    }
  },
  set(v) {
    try {
      sessionStorage.setItem(FAIL_KEY, JSON.stringify(v));
    } catch {
      /* ignore */
    }
  },
};

export function mountLock({ onUnlock }) {
  const root = document.createElement('div');
  root.className = 'ds-lock';
  root.id = 'dsLock';
  document.body.appendChild(root);

  const done = () => {
    root.remove();
    onUnlock();
  };

  const frame = (title, lead, body) => {
    root.innerHTML = `
      <div class="ds-lockbox" role="dialog" aria-modal="true" aria-labelledby="dsLockTitle">
        <h1 id="dsLockTitle">${title}</h1>
        <p class="ds-locklead">${lead}</p>
        ${body}
      </div>`;
    root.querySelector('input:not(.ds-vh)')?.focus();
  };
  const say = (t, bad = true) => {
    const s = root.querySelector('.ds-lockmsg');
    if (!s) return;
    s.innerHTML = t ? `${bad ? '' : '<span class="pl-spin"></span>'}${esc(t)}` : '';
    s.classList.toggle('is-bad', bad);
  };
  const busy = (on) => root.querySelectorAll('button, input').forEach((x) => (x.disabled = on));

  // A new password, typed twice.
  const newPassFields = `
    <label class="ds-lockfield"><span>Пароль студии</span><input type="password" name="password" autocomplete="new-password" minlength="${MIN_PASSWORD}" required></label>
    <label class="ds-lockfield"><span>Пароль ещё раз</span><input type="password" name="password2" autocomplete="new-password" required></label>
    <p class="ds-lockhint">Не короче ${MIN_PASSWORD} символов. Проще всего 3–4 слова через пробел. Сохрани его в менеджере паролей: восстановить пароль нельзя.</p>`;
  const readNewPass = (form) => {
    const a = form.password.value;
    const b = form.password2.value;
    if (a.length < MIN_PASSWORD) throw new Error(`Пароль должен быть не короче ${MIN_PASSWORD} символов.`);
    if (a !== b) throw new Error('Пароли не совпадают.');
    return a;
  };

  // 1. Usual case: the encrypted token is here, only the password is needed.
  const askPassword = () => {
    frame(
      'Студия OK Design',
      'Введи пароль студии.',
      `<form class="ds-lockform" autocomplete="on">
        ${USER}
        <label class="ds-lockfield"><span>Пароль</span><input type="password" name="password" autocomplete="current-password" required></label>
        <button type="submit" class="pl-btn pl-btn-primary">Войти</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>
      <details class="ds-lockmore">
        <summary>Забыл пароль?</summary>
        <p>Пароль нигде не хранится, поэтому восстановить его нельзя. Сбрось вход на этом устройстве, потом создай новый токен GitHub и задай новый пароль. Старый токен удали на GitHub в <a href="https://github.com/settings/personal-access-tokens" target="_blank" rel="noopener">списке токенов</a>.</p>
        <button type="button" class="pl-chip ds-danger" data-reset>Сбросить вход на этом устройстве</button>
      </details>`,
    );
    const form = root.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = fails.get();
      const wait = f.n >= 5 ? Math.ceil((f.t + 30000 - Date.now()) / 1000) : 0;
      if (wait > 0) {
        say(`Слишком много попыток. Подожди ${wait} с.`);
        return;
      }
      busy(true);
      say('Проверяю…', false);
      try {
        await vault.open(form.password.value);
        fails.set({ n: 0, t: 0 });
        done();
      } catch (ex) {
        busy(false);
        if (ex instanceof WrongPassword) fails.set({ n: f.n + 1, t: Date.now() });
        say(ex.message);
        form.password.select();
      }
    });
    root.querySelector('[data-reset]').addEventListener('click', () => {
      const ok = window.confirm('Сбросить вход на этом устройстве?\n\nЗашифрованный токен будет удалён из этого браузера. Чтобы снова войти, понадобится токен GitHub и новый пароль. Опубликованные демо не пострадают.');
      if (!ok) return;
      vault.forget();
      firstTime();
    });
  };

  // 2. The first version kept a plain token in this browser: lock it with a new password.
  const upgrade = () => {
    frame(
      'Задай пароль студии',
      'Токен GitHub уже сохранён в этом браузере, но открытым текстом. Придумай пароль: токен зашифруется, а студия будет открываться только по паролю.',
      `<form class="ds-lockform">
        ${USER}
        ${newPassFields}
        <button type="submit" class="pl-btn pl-btn-primary">Зашифровать и войти</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>`,
    );
    const form = root.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      busy(true);
      try {
        const pass = readNewPass(form);
        say('Проверяю токен на GitHub…', false);
        const t = vault.legacy();
        try {
          await checkToken(t);
        } catch (ex) {
          vault.forget();
          firstTime(`Сохранённый токен не подошёл: ${ex.message} Вставь новый.`);
          return;
        }
        say('Шифрую…', false);
        await vault.save(t, pass);
        done();
      } catch (ex) {
        busy(false);
        say(ex.message);
      }
    });
  };

  // 3. A browser that has never opened the studio: token + new password.
  const firstTime = (note = '') => {
    frame(
      'Первый вход на этом устройстве',
      `Вставь свой токен GitHub и придумай пароль. Студия откроется, только если GitHub подтвердит, что токен может писать в <b>${esc(SITE.repo)}</b>. Токен сохранится в этом браузере зашифрованным.`,
      `<form class="ds-lockform">
        ${USER}
        <label class="ds-lockfield"><span>Токен GitHub</span><input type="password" name="token" autocomplete="off" spellcheck="false" placeholder="github_pat_…" required></label>
        ${newPassFields}
        <button type="submit" class="pl-btn pl-btn-primary">Войти</button>
        <p class="ds-lockmsg" aria-live="polite"></p>
      </form>
      <details class="ds-lockmore">
        <summary>Где взять токен</summary>
        ${TOKEN_HOWTO}
      </details>`,
    );
    const form = root.querySelector('form');
    if (note) say(note);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      busy(true);
      try {
        const t = form.token.value.trim();
        if (!t) throw new Error('Вставь токен.');
        const pass = readNewPass(form);
        say('Проверяю токен на GitHub…', false);
        await checkToken(t);
        say('Шифрую…', false);
        await vault.save(t, pass);
        form.token.value = '';
        done();
      } catch (ex) {
        busy(false);
        say(ex.message);
      }
    });
  };

  if (vault.has()) askPassword();
  else if (vault.legacy()) upgrade();
  else firstTime();
}
