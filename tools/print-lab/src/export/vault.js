// The GitHub token, locked with the studio password.
//
// localStorage keeps only the encrypted token: AES-GCM 256 with a key derived from the password
// (PBKDF2-SHA-256, 600 000 rounds, random salt). The password itself is never stored anywhere.
// Once the password is entered, the plain token lives in sessionStorage of that one tab: it is
// gone when the tab closes, when the studio is locked, or after LIFE without a new unlock.

const VAULT = 'okds.vault';
const SESSION = 'okds.session';
const LEGACY = 'okds.github.token'; // the first version kept the token in plain text
const ITER = 600000;
const LIFE = 12 * 3600 * 1000;
export const MIN_PASSWORD = 10;

const store = (kind) => ({
  get(k) {
    try {
      return window[kind].getItem(k);
    } catch {
      return null;
    }
  },
  set(k, v) {
    try {
      if (v == null) window[kind].removeItem(k);
      else window[kind].setItem(k, v);
    } catch {
      /* storage blocked: the studio simply asks again */
    }
  },
});
const local = store('localStorage');
const tab = store('sessionStorage');

const enc = new TextEncoder();
const dec = new TextDecoder();
const b64 = (u8) => btoa(String.fromCharCode(...u8));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export class WrongPassword extends Error {
  constructor() {
    super('Неверный пароль.');
  }
}

async function keyFrom(password, salt, iterations) {
  const base = await crypto.subtle.importKey('raw', enc.encode(String(password).normalize('NFC')), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

function readVault() {
  try {
    const v = JSON.parse(local.get(VAULT) || 'null');
    return v && v.salt && v.iv && v.data ? v : null;
  } catch {
    return null;
  }
}

function openSession(token) {
  tab.set(SESSION, JSON.stringify({ token, until: Date.now() + LIFE }));
}

export const vault = {
  // An encrypted token is saved in this browser.
  has: () => !!readVault(),
  // A plain token left by the first version of the studio.
  legacy: () => local.get(LEGACY) || '',
  // The unlocked token of this tab, or ''.
  token() {
    try {
      const s = JSON.parse(tab.get(SESSION) || 'null');
      if (s?.token && s.until > Date.now()) return s.token;
    } catch {
      /* broken entry */
    }
    tab.set(SESSION, null);
    return '';
  },
  unlocked() {
    return !!this.token();
  },
  // Encrypts the token with the password, saves it, removes any plain copy and unlocks this tab.
  async save(token, password) {
    if (String(password).length < MIN_PASSWORD) throw new Error(`Пароль должен быть не короче ${MIN_PASSWORD} символов.`);
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await keyFrom(password, salt, ITER);
    const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(token.trim())));
    local.set(VAULT, JSON.stringify({ v: 1, kdf: 'PBKDF2-SHA-256', iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) }));
    local.set(LEGACY, null);
    openSession(token.trim());
  },
  // Decrypts the saved token. Throws WrongPassword when the password does not fit.
  async open(password) {
    const v = readVault();
    if (!v) throw new Error('На этом устройстве студия ещё не настроена.');
    let token;
    try {
      const key = await keyFrom(password, unb64(v.salt), v.iter || ITER);
      token = dec.decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(v.iv) }, key, unb64(v.data)));
    } catch {
      throw new WrongPassword();
    }
    openSession(token);
    return token;
  },
  // Locks this tab: the encrypted token stays, the password is needed again.
  close() {
    tab.set(SESSION, null);
  },
  // Removes everything from this browser.
  forget() {
    local.set(VAULT, null);
    local.set(LEGACY, null);
    tab.set(SESSION, null);
  },
};
