// Builds the page assets. Run `npm i` once, then `npm run build`.
// The site itself stays plain static HTML; only this feature has a build step.
import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
// Output goes to /viewer/ at the site root: one engine for the studio and every demo page.
const out = resolve(root, '../../viewer');
mkdirSync(`${out}/vendor`, { recursive: true });

await esbuild.build({
  entryPoints: [`${root}/src/main.js`],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: `${out}/viewer.js`,
  legalComments: 'none',
  banner: { js: '/* OK Design 3D viewer. Built from tools/print-lab. Includes three.js (MIT). */' },
  logLevel: 'warning',
});
await esbuild.build({
  entryPoints: [`${root}/src/ui/print-lab.css`],
  minify: false,
  outfile: `${out}/viewer.css`,
  logLevel: 'warning',
});
// Dev bundle for the visual test sheets and the thumbnail renderer.
await esbuild.build({
  entryPoints: [`${root}/src/dev.js`],
  bundle: true,
  format: 'iife',
  outfile: `${root}/.cache/dev.js`,
  logLevel: 'warning',
});

// A proof file carries its own viewer, so the viewer is also stored as a string.
const js = readFileSync(`${out}/viewer.js`, 'utf8');
const css = readFileSync(`${out}/viewer.css`, 'utf8');
writeFileSync(`${out}/viewer.runtime.js`, `window.__OK_RUNTIME=${JSON.stringify(js)};window.__OK_RUNTIME_CSS=${JSON.stringify(css)};`);

copyFileSync(`${root}/node_modules/pdfjs-dist/build/pdf.min.js`, `${out}/vendor/pdf.min.js`);
copyFileSync(`${root}/node_modules/pdfjs-dist/build/pdf.worker.min.js`, `${out}/vendor/pdf.worker.min.js`);
console.log('viewer.js', Math.round(js.length / 1024), 'KB');
