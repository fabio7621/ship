/* =========================================================
   程序化貼圖(Canvas):不依賴外部圖檔
   「假」的感覺多半來自表面太乾淨,這裡集中處理鏽痕、髒污、接縫
   ========================================================= */
import * as THREE from 'three';
import { V_RANGE, WATERLINE_Y, deckY, railY } from './hullProfile.js';

const HULL_TOPSIDE = '#7a231c';
const HULL_BOTTOM = '#2b120e';
const HULL_BOOT = '#d9d6cc';

// 固定種子的亂數:每次重整外觀一致
function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(canvas, { srgb = true, repeat = false } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function splotches(g, rand, w, h, count, colors, maxR) {
  for (let i = 0; i < count; i++) {
    g.fillStyle = colors[Math.floor(rand() * colors.length)];
    g.beginPath();
    g.ellipse(rand() * w, rand() * h, rand() * maxR + 1, rand() * maxR * 0.6 + 1, rand() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
}

function rustStreak(g, x, y, width, length, alpha) {
  const grad = g.createLinearGradient(0, y, 0, y + length);
  grad.addColorStop(0, `rgba(122,58,26,${alpha})`);
  grad.addColorStop(0.4, `rgba(96,44,20,${alpha * 0.6})`);
  grad.addColorStop(1, 'rgba(80,36,18,0)');
  g.fillStyle = grad;
  g.beginPath();
  g.moveTo(x - width / 2, y);
  g.lineTo(x + width / 2, y);
  g.lineTo(x + width * 0.15, y + length);
  g.lineTo(x - width * 0.15, y + length);
  g.closePath();
  g.fill();
}

/* 船殼:上半張 = 右舷、下半張 = 左舷(右舷才畫船籍號,避免左舷文字鏡像) */
export function makeHullTexture() {
  const W = 2048, H = 1024, half = H / 2;
  const [c, g] = makeCanvas(W, H);
  const rand = seeded(11);
  const pxPerM = W / 11.6;

  for (const side of [0, 1]) {
    const oy = side * half;
    const yPx = (y) => oy + (1 - (y - V_RANGE.min) / (V_RANGE.max - V_RANGE.min)) * half;
    g.save();
    g.beginPath(); g.rect(0, oy, W, half); g.clip();

    g.fillStyle = HULL_TOPSIDE; g.fillRect(0, oy, W, half);
    g.fillStyle = HULL_BOTTOM; g.fillRect(0, yPx(WATERLINE_Y - 0.08), W, half);
    g.fillStyle = HULL_BOOT; g.fillRect(0, yPx(WATERLINE_Y + 0.1), W, yPx(WATERLINE_Y - 0.08) - yPx(WATERLINE_Y + 0.1));

    // 水線上方的綠褐色水垢帶
    const scum = g.createLinearGradient(0, yPx(WATERLINE_Y + 0.45), 0, yPx(WATERLINE_Y + 0.1));
    scum.addColorStop(0, 'rgba(40,46,28,0)');
    scum.addColorStop(1, 'rgba(40,46,28,0.45)');
    g.fillStyle = scum;
    g.fillRect(0, yPx(WATERLINE_Y + 0.45), W, yPx(WATERLINE_Y + 0.1) - yPx(WATERLINE_Y + 0.45));

    // 鋼板焊縫(肋骨間距)
    g.strokeStyle = 'rgba(0,0,0,0.22)'; g.lineWidth = 2;
    for (let x = 0; x < W; x += pxPerM * 0.9) { g.beginPath(); g.moveTo(x, oy); g.lineTo(x, oy + half); g.stroke(); }
    for (const y of [0.42, -0.55]) { g.beginPath(); g.moveTo(0, yPx(y)); g.lineTo(W, yPx(y)); g.stroke(); }

    splotches(g, rand, W, half * 2, 900, ['rgba(0,0,0,0.06)', 'rgba(255,240,220,0.035)', 'rgba(70,30,20,0.08)'], 14);

    // 排水孔 + 底下流出來的鏽痕
    for (let u = 0.08; u < 0.78; u += 0.055 + rand() * 0.02) {
      const x = u * W, top = yPx(deckY(u) + 0.14), bottom = yPx(deckY(u) + 0.03);
      g.fillStyle = '#0a0605'; g.fillRect(x - 12, top, 24, bottom - top);
      rustStreak(g, x, bottom, 22, 60 + rand() * 90, 0.55);
    }
    for (let i = 0; i < 70; i++) {
      const u = rand();
      rustStreak(g, u * W, yPx(railY(u) - rand() * 0.3), 4 + rand() * 10, 20 + rand() * 110, 0.15 + rand() * 0.3);
    }

    if (side === 0) {
      g.save();
      g.translate(0.8 * W, yPx(1.32));
      g.scale(1.28, 1);
      g.font = 'bold 44px "Arial Narrow", Arial, sans-serif';
      g.fillStyle = 'rgba(232,228,216,0.92)';
      g.textBaseline = 'middle';
      g.fillText('M-127-HØ', -100, 0);
      g.restore();
    }
    g.restore();
  }
  return toTexture(c);
}

/* 甲板:沿船長方向的木板,接縫填縫、木紋、潮濕深色斑 */
export function makeDeckTexture() {
  const W = 1024, H = 1024, rows = 24;
  const [c, g] = makeCanvas(W, H);
  const rand = seeded(5);
  const rowH = H / rows;
  for (let r = 0; r < rows; r++) {
    let x = -rand() * 300;
    while (x < W) {
      const len = 260 + rand() * 360;
      const l = 30 + rand() * 12;
      g.fillStyle = `hsl(28, ${22 + rand() * 10}%, ${l * 0.55}%)`;
      g.fillRect(x, r * rowH, len, rowH);
      g.strokeStyle = 'rgba(20,12,6,0.25)'; g.lineWidth = 1;
      for (let k = 0; k < 4; k++) {
        const y = r * rowH + rand() * rowH;
        g.beginPath(); g.moveTo(x, y); g.bezierCurveTo(x + len * 0.3, y + 3, x + len * 0.6, y - 3, x + len, y); g.stroke();
      }
      g.fillStyle = '#120c08'; g.fillRect(x, r * rowH, 3, rowH);
      x += len;
    }
    g.fillStyle = '#100a06'; g.fillRect(0, r * rowH, W, 3);
  }
  splotches(g, rand, W, H, 260, ['rgba(0,0,0,0.12)', 'rgba(10,20,25,0.1)'], 40);
  return toTexture(c, { repeat: true });
}

/* 白色上層建築的髒污:由上往下的雨漬、鏽水 */
export function makeGrimeTexture() {
  const S = 512;
  const [c, g] = makeCanvas(S, S);
  const rand = seeded(3);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 120; i++) {
    const x = rand() * S, len = 40 + rand() * 260;
    const grad = g.createLinearGradient(0, 0, 0, len);
    grad.addColorStop(0, `rgba(90,80,60,${0.08 + rand() * 0.12})`);
    grad.addColorStop(1, 'rgba(90,80,60,0)');
    g.fillStyle = grad; g.fillRect(x, 0, 2 + rand() * 6, len);
  }
  for (let i = 0; i < 25; i++) rustStreak(g, rand() * S, rand() * S * 0.6, 3 + rand() * 6, 30 + rand() * 120, 0.25);
  splotches(g, rand, S, S, 300, ['rgba(0,0,0,0.04)', 'rgba(60,50,30,0.06)'], 10);
  const edge = g.createLinearGradient(0, S * 0.75, 0, S);
  edge.addColorStop(0, 'rgba(40,35,25,0)'); edge.addColorStop(1, 'rgba(40,35,25,0.35)');
  g.fillStyle = edge; g.fillRect(0, S * 0.75, S, S * 0.25);
  return toTexture(c);
}

/* 亮燈的窗:室內暖光漸層 + 儀表板剪影 + 玻璃上的雨滴 */
export function makeWindowTexture() {
  const S = 256;
  const [c, g] = makeCanvas(S, S);
  const rand = seeded(9);
  const glow = g.createRadialGradient(S * 0.5, S * 0.75, 10, S * 0.5, S * 0.6, S * 0.85);
  glow.addColorStop(0, '#ffe2a8'); glow.addColorStop(0.45, '#f0a24e'); glow.addColorStop(1, '#7a3814');
  g.fillStyle = glow; g.fillRect(0, 0, S, S);
  g.fillStyle = 'rgba(25,12,4,0.75)'; g.fillRect(0, S * 0.78, S, S * 0.22);
  g.fillStyle = 'rgba(25,12,4,0.55)'; g.fillRect(S * 0.62, S * 0.42, S * 0.12, S * 0.4);
  for (let i = 0; i < 70; i++) {
    const r = 1 + rand() * 4;
    g.fillStyle = rand() > 0.5 ? 'rgba(255,240,210,0.35)' : 'rgba(40,20,8,0.3)';
    g.beginPath(); g.arc(rand() * S, rand() * S, r, 0, Math.PI * 2); g.fill();
  }
  g.strokeStyle = 'rgba(255,230,190,0.18)'; g.lineWidth = 2;
  for (let i = 0; i < 12; i++) {
    const x = rand() * S;
    g.beginPath(); g.moveTo(x, rand() * S * 0.4); g.lineTo(x + (rand() - 0.5) * 8, S); g.stroke();
  }
  g.strokeStyle = '#111'; g.lineWidth = 14; g.strokeRect(0, 0, S, S);
  return toTexture(c);
}

/* 救生圈:橘白相間反光帶 */
export function makeRingTexture() {
  const [c, g] = makeCanvas(256, 32);
  g.fillStyle = '#e8501c'; g.fillRect(0, 0, 256, 32);
  g.fillStyle = '#e9e6dc';
  for (let i = 0; i < 4; i++) g.fillRect(i * 64 + 26, 0, 12, 32);
  return toTexture(c);
}

/* 漁網:深綠網目 */
export function makeNetTexture() {
  const S = 256;
  const [c, g] = makeCanvas(S, S);
  const rand = seeded(21);
  g.fillStyle = '#0e1d17'; g.fillRect(0, 0, S, S);
  g.strokeStyle = '#2e5544'; g.lineWidth = 2;
  for (let i = 0; i <= S; i += 10) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 30, S); g.stroke();
    g.beginPath(); g.moveTo(0, i); g.lineTo(S, i + 30); g.stroke();
  }
  splotches(g, rand, S, S, 80, ['rgba(0,0,0,0.3)'], 18);
  return toTexture(c, { repeat: true });
}

/* 粗糙度變化(灰階,非 sRGB):讓濕亮面不會整片均勻反光 */
export function makeRoughnessTexture() {
  const S = 256;
  const [c, g] = makeCanvas(S, S);
  const rand = seeded(17);
  g.fillStyle = '#b4b4b4'; g.fillRect(0, 0, S, S);
  splotches(g, rand, S, S, 500, ['rgba(255,255,255,0.12)', 'rgba(0,0,0,0.14)'], 16);
  return toTexture(c, { srgb: false, repeat: true });
}
