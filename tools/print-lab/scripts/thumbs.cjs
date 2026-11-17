// Renders the catalogue pictures: one blank per format, folded, same camera as the viewer.
//   npm run build && NODE_PATH=$(npm root -g) node scripts/thumbs.cjs [format-id ...]
// Needs Playwright with Chromium. Without ids it renders every format.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, '../../../viewer/thumbs');
const BUNDLE = path.resolve(__dirname, '../.cache/dev.js');
const only = process.argv.slice(2);

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
  const p = await b.newPage({ viewport: { width: 800, height: 600 } });
  p.on('pageerror', (e) => console.log('page error:', e.message));
  await p.setContent('<!doctype html><body style="margin:0;background:#000"><div id="s" style="width:640px;height:480px"></div></body>');
  await p.addScriptTag({ path: BUNDLE });
  await p.evaluate(() => {
    window.stage = new window.__lab.Stage(document.getElementById('s'), { capture: true, maxDpr: 1, shadowSize: 2048, pad: 1.3 });
  });
  const ids = await p.evaluate(() => window.__lab.FORMATS.map((f) => f.id));
  let total = 0;
  for (const id of ids) {
    if (only.length && !only.includes(id)) continue;
    const data = await p.evaluate(async (fid) => {
      const { resolve, makeModel, makeSurface, PageSet } = window.__lab;
      const job = resolve(fid);
      const surface = makeSurface(job, { maxTex: 2048 });
      const model = makeModel(job, { surface, pages: new PageSet() });
      window.stage.setModel(model, { die: job.die, state: 'closed' });
      await new Promise((r) => setTimeout(r, 60));
      return window.stage.capture().toDataURL('image/webp', 0.82);
    }, id);
    const buf = Buffer.from(data.split(',')[1], 'base64');
    fs.writeFileSync(path.join(OUT, `${id}.webp`), buf);
    total += buf.length;
  }
  console.log(`done, ${Math.round(total / 1024)} KB`);
  await b.close();
})();
