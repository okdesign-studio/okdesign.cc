// A generated placeholder design, so any format can be shown with artwork at once. It uses the
// panel map of the die: wordmark on the cover, small type on the other panels.

const INK = '#0b0f1a';
const BLUE = '#0051FF';

function fitText(x, text, weight, maxW, maxH) {
  let size = maxH;
  x.font = `${weight} ${size}px Outfit, Figtree, Arial, sans-serif`;
  const w = x.measureText(text).width;
  if (w > maxW) size *= maxW / w;
  return size;
}

function panelFrame(x, p, ext, k, rot, mirror) {
  const b = p.bounds;
  const cx = (mirror ? ext.w - (b.x0 + b.w / 2 - ext.x0) : b.x0 + b.w / 2 - ext.x0) * k;
  const cy = (b.y0 + b.h / 2 - ext.y0) * k;
  x.setTransform(1, 0, 0, 1, 0, 0);
  x.translate(cx, cy);
  x.rotate((rot * Math.PI) / 180);
  const sideways = rot % 180 !== 0;
  return { W: (sideways ? b.h : b.w) * k, H: (sideways ? b.w : b.h) * k };
}

export function sampleArt(die, orient, title = 'OK DESIGN') {
  const front = (x, k, ext) => {
    const W = ext.w * k;
    const H = ext.h * k;
    x.setTransform(1, 0, 0, 1, 0, 0);
    const g = x.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#02040c');
    g.addColorStop(0.55, '#031235');
    g.addColorStop(1, '#000000');
    x.fillStyle = g;
    x.fillRect(0, 0, W, H);
    const blob = (cx, cy, r, c) => {
      const b = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      b.addColorStop(0, c);
      b.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = b;
      x.fillRect(0, 0, W, H);
    };
    const m = Math.max(W, H);
    blob(W * 0.82, H * 0.22, m * 0.62, 'rgba(0,81,255,0.95)');
    blob(W * 0.12, H * 0.92, m * 0.52, 'rgba(120,140,190,0.55)');
    blob(W * 0.5, H * 0.5, m * 0.3, 'rgba(0,40,160,0.5)');
    const mains = die.panels.filter((p) => p.role === 'main' && p.bounds);
    const covers = mains.filter((p) => p.cover);
    const list = covers.length ? covers : mains.slice().sort((a, b) => b.area - a.area).slice(0, 1);
    for (const p of list) {
      const rot = orient[p.id]?.front || 0;
      const f = panelFrame(x, p, ext, k, rot, false);
      x.fillStyle = '#ffffff';
      x.textAlign = 'center';
      x.textBaseline = 'middle';
      const size = fitText(x, title, 800, f.W * 0.72, f.H * 0.2);
      x.font = `800 ${size}px Outfit, Figtree, Arial, sans-serif`;
      x.fillText(title, 0, -size * 0.1);
      const sub = 'Full-stack design studio';
      const s2 = Math.max(size * 0.17, 2 * k);
      x.font = `500 ${s2}px Outfit, Figtree, Arial, sans-serif`;
      x.globalAlpha = 0.72;
      x.fillText(sub, 0, size * 0.72);
      x.globalAlpha = 1;
    }
    for (const p of mains) {
      if (list.includes(p) || p.area < 900) continue;
      const rot = orient[p.id]?.front || 0;
      const f = panelFrame(x, p, ext, k, rot, false);
      x.fillStyle = 'rgba(255,255,255,0.78)';
      x.textAlign = 'center';
      x.textBaseline = 'middle';
      const s = Math.min(f.W, f.H) * 0.05;
      x.font = `600 ${s}px Outfit, Figtree, Arial, sans-serif`;
      x.fillText('okdesign.cc', 0, 0);
    }
    x.setTransform(1, 0, 0, 1, 0, 0);
  };
  const back = (x, k, ext) => {
    const W = ext.w * k;
    const H = ext.h * k;
    x.setTransform(1, 0, 0, 1, 0, 0);
    x.fillStyle = '#f7f6f2';
    x.fillRect(0, 0, W, H);
    const mains = die.panels.filter((p) => p.role === 'main' && p.area > 1200 && p.bounds);
    for (const p of mains) {
      const rot = orient[p.id]?.back || 0;
      const f = panelFrame(x, p, ext, k, rot, true);
      const m = Math.min(f.W, f.H) * 0.12;
      const left = -f.W / 2 + m;
      const top = -f.H / 2 + m;
      const w = f.W - 2 * m;
      x.fillStyle = BLUE;
      x.textAlign = 'left';
      x.textBaseline = 'top';
      const s = Math.min(f.W, f.H) * 0.085;
      x.font = `700 ${s}px Outfit, Figtree, Arial, sans-serif`;
      x.fillText((p.nameIn || 'Inside').slice(0, 24), left, top);
      x.fillStyle = INK;
      x.globalAlpha = 0.13;
      const lh = s * 0.72;
      let y = top + s * 1.8;
      let i = 0;
      while (y < f.H / 2 - m) {
        const lw = w * (i % 5 === 4 ? 0.55 : i % 3 === 2 ? 0.86 : 0.97);
        x.fillRect(left, y, lw, lh * 0.34);
        y += lh;
        i++;
      }
      x.globalAlpha = 1;
    }
    x.setTransform(1, 0, 0, 1, 0, 0);
  };
  return { front, back };
}
