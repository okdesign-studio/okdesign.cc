// Placing a page on the sheet, and the print checks around it.
// A placement is expressed in file space: millimetres from the top-left of the bleed box.

import { size2 } from '../core/geom.js';

export function autoPlace(page, ext, die) {
  const trimW = die.w;
  const trimH = die.h;
  const near = (a, b, tol = 1.5) => Math.abs(a - b) <= tol;
  const pl = { page, cx: ext.w / 2, cy: ext.h / 2, rot: 0, fit: 'bleed', mirror: false };
  const set = (mmPerPx) => {
    pl.mmPerPx = mmPerPx;
  };
  if (page.mmW) {
    const pxmm = page.mmW / page.w; // physical scale of the rendered page
    // Rotated by 90 degrees? Compare both ways.
    const swap = !near(page.mmW, ext.w, 8) && near(page.mmH, ext.w, 8) && near(page.mmW, ext.h, 8);
    if (swap) pl.rot = 90;
    const pw = swap ? page.mmH : page.mmW;
    const ph = swap ? page.mmW : page.mmH;
    if (page.trim && near(page.trim.w, trimW, 2) && near(page.trim.h, trimH, 2)) {
      set(pxmm);
      pl.cx -= page.trim.cx;
      pl.cy += page.trim.cy;
      pl.fit = 'trimbox';
      return pl;
    }
    if (near(pw, ext.w) && near(ph, ext.h)) {
      set(pxmm);
      pl.fit = 'bleed';
      return pl;
    }
    if (near(pw, trimW) && near(ph, trimH)) {
      set(pxmm);
      pl.fit = 'trim';
      return pl;
    }
    // Same proportions as the sheet but another scale (a Figma frame drawn at 1 mm = 4 px, say):
    // fit it by shape below, never as a page with crop marks.
    const same = (a, b) => Math.abs(a / b - 1) < 0.006;
    const scaled = same(pw / ph, ext.w / ext.h) || same(pw / ph, trimW / trimH);
    if (scaled) pl.scaled = true;
    if (!scaled && pw >= ext.w && ph >= ext.h) {
      // Larger page with crop marks: keep real size and centre it.
      set(pxmm);
      pl.fit = 'marks';
      return pl;
    }
  }
  const pw = pl.rot ? page.h : page.w;
  const ph = pl.rot ? page.w : page.h;
  const ar = pw / ph;
  const arBleed = ext.w / ext.h;
  const arTrim = trimW / trimH;
  if (Math.abs(ar / arTrim - 1) < Math.abs(ar / arBleed - 1) * 0.8) {
    set(Math.max(trimW / pw, trimH / ph));
    pl.fit = 'trim';
  } else {
    set(Math.max(ext.w / pw, ext.h / ph));
    pl.fit = 'bleed';
  }
  return pl;
}

export function fitTo(pl, mode, ext, die) {
  const swap = pl.rot % 180 !== 0;
  const pw = swap ? pl.page.h : pl.page.w;
  const ph = swap ? pl.page.w : pl.page.h;
  pl.cx = ext.w / 2;
  pl.cy = ext.h / 2;
  if (mode === 'bleed') pl.mmPerPx = Math.max(ext.w / pw, ext.h / ph);
  if (mode === 'trim') pl.mmPerPx = Math.max(die.w / pw, die.h / ph);
  if (mode === 'contain') pl.mmPerPx = Math.min(ext.w / pw, ext.h / ph);
  if (mode === 'actual' && pl.page.mmW) pl.mmPerPx = pl.page.mmW / pl.page.w;
  pl.fit = mode;
}

export function drawPlacement(x, k, pl) {
  const { page } = pl;
  x.setTransform(k, 0, 0, k, 0, 0);
  x.translate(pl.cx, pl.cy);
  x.rotate((pl.rot * Math.PI) / 180);
  x.scale(pl.mmPerPx, pl.mmPerPx);
  x.imageSmoothingQuality = 'high';
  x.drawImage(page.source, -page.w / 2, -page.h / 2, page.w, page.h);
  x.setTransform(1, 0, 0, 1, 0, 0);
}

// An image placed on one panel only, cover-fitted and turned so it reads upright when folded.
export function drawPanelArt(x, k, ext, item, die, orient, side) {
  const p = die.byId[item.panel];
  if (!p) return;
  const mirror = side === 'back';
  const toX = (v) => ((mirror ? ext.w - (v - ext.x0) : v - ext.x0) * k);
  const toY = (v) => (v - ext.y0) * k;
  x.save();
  x.setTransform(1, 0, 0, 1, 0, 0);
  x.beginPath();
  p.poly.forEach((q, i) => (i ? x.lineTo(toX(q[0]), toY(q[1])) : x.moveTo(toX(q[0]), toY(q[1]))));
  x.closePath();
  x.clip();
  const b = p.bounds;
  const rot = orient[p.id]?.[side] || 0;
  x.translate(toX(b.x0 + b.w / 2), toY(b.y0 + b.h / 2));
  x.rotate((rot * Math.PI) / 180);
  const W = (rot % 180 ? b.h : b.w) * k;
  const H = (rot % 180 ? b.w : b.h) * k;
  const s = Math.max(W / item.page.w, H / item.page.h);
  x.imageSmoothingQuality = 'high';
  x.drawImage(item.page.source, (-item.page.w * s) / 2, (-item.page.h * s) / 2, item.page.w * s, item.page.h * s);
  x.restore();
}

// Print checks shown next to the artwork.
export function checks(pl, ext, die) {
  const out = [];
  const { page } = pl;
  const widthMm = page.w * pl.mmPerPx;
  const ppi = Math.round((page.w / widthMm) * 25.4);
  if (ppi >= 280) out.push({ level: 'ok', text: `Разрешение ${ppi} ppi: годится и для печати` });
  else if (ppi >= 90) out.push({ level: 'warn', text: `Разрешение ${ppi} ppi: для 3D-превью хорошо, для печати нужно 300` });
  else out.push({ level: 'bad', text: `Разрешение ${ppi} ppi: мало даже для превью, будет мыльно` });

  const swap = pl.rot % 180 !== 0;
  const pw = (swap ? page.h : page.w) * pl.mmPerPx;
  const ph = (swap ? page.w : page.h) * pl.mmPerPx;
  const left = pl.cx - pw / 2;
  const right = pl.cx + pw / 2;
  const top = pl.cy - ph / 2;
  const bottom = pl.cy + ph / 2;
  const e = 0.3;
  const bleedOk = left <= e && top <= e && right >= ext.w - e && bottom >= ext.h - e;
  const b = die.bleed;
  const trimOk = left <= b + e && top <= b + e && right >= ext.w - b - e && bottom >= ext.h - b - e;
  if (bleedOk) out.push({ level: 'ok', text: `Вылеты ${b} мм на месте` });
  else if (trimOk) out.push({ level: 'warn', text: `Доходит до линии реза, но без вылетов ${b} мм` });
  else out.push({ level: 'bad', text: 'Макет не покрывает весь лист' });

  if (page.mmW) {
    const fits = {
      trimbox: 'Найден TrimBox, метки реза не мешают',
      bleed: 'Размер страницы = лист с вылетами',
      trim: 'Размер страницы = обрезной формат (без вылетов)',
      marks: 'Страница больше листа: стоит по центру в реальном размере',
    };
    out.push(
      pl.scaled
        ? { level: 'ok', text: 'Пропорции листа совпали, масштаб подогнан' }
        : {
            level: fits[pl.fit] ? 'ok' : 'warn',
            text: fits[pl.fit] || `Страница ${size2(page.mmW, page.mmH)} мм, а лист с вылетами ${size2(ext.w, ext.h)} мм`,
          },
    );
  } else {
    const ar = (swap ? page.h / page.w : page.w / page.h) / (ext.w / ext.h);
    if (Math.abs(ar - 1) > 0.03) out.push({ level: 'warn', text: 'Пропорции картинки не совпадают с листом, края обрежутся' });
  }
  return out;
}
