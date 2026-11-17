// Publishing demos straight from the browser to the site's GitHub repository.
// GitHub Pages serves every file in the repository, so a demo is just a folder: /demo/<name>/.
// The token is a fine-grained GitHub token with "Contents: read and write" on this one
// repository. It is stored only encrypted with the studio password (see vault.js) and is sent
// only to api.github.com.

import { vault } from './vault.js';

export const SITE = {
  repo: 'okdesign-studio/okdesign.cc',
  branch: 'main',
  origin: 'https://okdesign.cc',
  folder: 'demo',
};

const API = 'https://api.github.com';

// The token of this tab after the studio password was entered; '' while the studio is locked.
export const token = {
  get: () => vault.token(),
};

export const demoUrl = (slug) => `${SITE.origin}/${SITE.folder}/${slug}/`;

// Lower-case latin letters, digits and dashes: safe in a URL and in a folder name.
export function toSlug(s) {
  const map = { а: 'a', б: 'b', в: 'v', г: 'g', ґ: 'g', д: 'd', е: 'e', є: 'ie', ё: 'e', ж: 'zh', з: 'z', и: 'i', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'iu', я: 'ia' };
  return String(s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[а-яёєіїґ]/g, (c) => map[c] ?? '')
    .replace(/&/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

class GitHubError extends Error {}

async function gh(path, { method = 'GET', body, raw = false, auth } = {}) {
  const t = auth || token.get();
  if (!t) throw new GitHubError('Студия заблокирована. Обнови страницу и введи пароль.');
  let res;
  try {
    res = await fetch(`${API}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${t}`,
        Accept: raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store',
    });
  } catch {
    throw new GitHubError('Нет связи с GitHub. Проверь интернет и попробуй ещё раз.');
  }
  if (res.status === 404 && method === 'GET') return null;
  if (!res.ok) {
    let msg = '';
    try {
      msg = (await res.json()).message || '';
    } catch {
      /* no body */
    }
    if (res.status === 401) throw new GitHubError('GitHub не принял токен: он неверный или истёк. Создай новый токен и замени его в «Настройках» студии.');
    if (res.status === 403 || res.status === 404) throw new GitHubError(`У токена нет доступа к ${SITE.repo} на запись. ${msg}`.trim());
    if (res.status === 409 || res.status === 422) throw new GitHubError(`GitHub отклонил изменение: ${msg || res.status}. Попробуй ещё раз.`);
    throw new GitHubError(`GitHub ответил ${res.status}${msg ? `: ${msg}` : ''}`);
  }
  if (res.status === 204) return null;
  return raw ? res.text() : res.json();
}

// Whether a token (by default the unlocked one) can write to the site.
export async function checkToken(auth) {
  const repo = await gh(`/repos/${SITE.repo}`, { auth });
  if (!repo) throw new GitHubError(`Токен не видит репозиторий ${SITE.repo}. При создании выбери его в "Repository access".`);
  if (!repo.permissions?.push) throw new GitHubError('Токен видит сайт, но не может в него писать. Дай ему "Contents: Read and write".');
  return { repo: repo.full_name, private: repo.private };
}

// Every demo with its demo.json. Folders without one (or with a broken one) are skipped.
export async function listDemos() {
  const list = await gh(`/repos/${SITE.repo}/contents/${SITE.folder}?ref=${SITE.branch}`);
  if (!list) return [];
  const dirs = list.filter((x) => x.type === 'dir');
  const out = await Promise.all(
    dirs.map(async (d) => {
      try {
        const txt = await gh(`/repos/${SITE.repo}/contents/${SITE.folder}/${d.name}/demo.json?ref=${SITE.branch}`, { raw: true });
        return txt ? { ...JSON.parse(txt), slug: d.name } : null;
      } catch {
        return null;
      }
    }),
  );
  return out.filter(Boolean).sort((a, b) => String(b.updated || '').localeCompare(String(a.updated || '')));
}

export async function readDemo(slug) {
  const txt = await gh(`/repos/${SITE.repo}/contents/${SITE.folder}/${slug}/demo.json?ref=${SITE.branch}`, { raw: true });
  return txt ? JSON.parse(txt) : null;
}

async function head() {
  const ref = await gh(`/repos/${SITE.repo}/git/ref/heads/${SITE.branch}`);
  const commit = await gh(`/repos/${SITE.repo}/git/commits/${ref.object.sha}`);
  return { sha: ref.object.sha, tree: commit.tree.sha };
}

async function filesUnder(treeSha, prefix) {
  const tree = await gh(`/repos/${SITE.repo}/git/trees/${treeSha}?recursive=1`);
  return (tree?.tree || []).filter((e) => e.type === 'blob' && e.path.startsWith(prefix)).map((e) => e.path);
}

const b64 = (bytes) => {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
};

async function toBase64(content) {
  if (typeof content === 'string') return b64(new TextEncoder().encode(content));
  if (content instanceof Blob) return b64(new Uint8Array(await content.arrayBuffer()));
  return b64(content);
}

// One commit that writes `files` ({ path, content }) and removes `remove` (paths), then moves the
// branch to it. If someone else pushed in between, it starts over once from the new head.
export async function commit({ files = [], remove = [], message }, onStep = () => {}) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const base = await head();
    const entries = [];
    let done = 0;
    const queue = [...files];
    const worker = async () => {
      while (queue.length) {
        const f = queue.shift();
        const blob = await gh(`/repos/${SITE.repo}/git/blobs`, { method: 'POST', body: { content: await toBase64(f.content), encoding: 'base64' } });
        entries.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha });
        onStep(`Загружаю файлы: ${++done} из ${files.length}`);
      }
    };
    await Promise.all([worker(), worker(), worker()]);
    for (const path of remove) entries.push({ path, mode: '100644', type: 'blob', sha: null });
    onStep('Сохраняю изменения на GitHub…');
    const tree = await gh(`/repos/${SITE.repo}/git/trees`, { method: 'POST', body: { base_tree: base.tree, tree: entries } });
    const c = await gh(`/repos/${SITE.repo}/git/commits`, { method: 'POST', body: { message, tree: tree.sha, parents: [base.sha] } });
    try {
      await gh(`/repos/${SITE.repo}/git/refs/heads/${SITE.branch}`, { method: 'PATCH', body: { sha: c.sha } });
      return c.sha;
    } catch (e) {
      if (attempt) throw e;
      onStep('На GitHub появились новые изменения, повторяю…');
    }
  }
  return null;
}

// Writes /demo/<slug>/ and removes files of an older version that are no longer used.
export async function publishFolder(slug, files, { keep = [], message }, onStep) {
  const base = await head();
  const prefix = `${SITE.folder}/${slug}/`;
  const existing = await filesUnder(base.tree, prefix);
  const next = new Set(files.map((f) => `${prefix}${f.name}`));
  const keepSet = new Set(keep.map((k) => `${prefix}${k}`));
  const remove = existing.filter((p) => !next.has(p) && !keepSet.has(p));
  return commit({ files: files.map((f) => ({ path: `${prefix}${f.name}`, content: f.content })), remove, message }, onStep);
}

export async function unpublish(slug, onStep) {
  const base = await head();
  const paths = await filesUnder(base.tree, `${SITE.folder}/${slug}/`);
  if (!paths.length) return null;
  return commit({ remove: paths, message: `Demo: remove ${slug}` }, onStep);
}

export async function demoExists(slug) {
  return !!(await gh(`/repos/${SITE.repo}/contents/${SITE.folder}/${slug}/demo.json?ref=${SITE.branch}`, { raw: true }));
}

// GitHub Pages needs about a minute after a commit. Resolves when the page answers with the
// expected version, or after `ms` either way.
export async function waitLive(slug, stamp, ms = 180000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    try {
      const r = await fetch(`${demoUrl(slug)}demo.json?t=${Date.now()}`, { cache: 'no-store' });
      if (r.ok) {
        const j = await r.json();
        if (!stamp || j.updated === stamp) return true;
      }
    } catch {
      /* not there yet */
    }
    await new Promise((r) => setTimeout(r, 6000));
  }
  return false;
}
