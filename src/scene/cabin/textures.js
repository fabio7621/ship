/* =========================================================
   艙內程序化貼圖(Canvas):木牆、地板、海圖、日誌、照片、窗上雨滴
   「有人住過」的感覺來自污漬、摺痕、手寫字,這裡集中處理
   ========================================================= */
import * as THREE from 'three';

const HAND = '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive';
const PRINT = '"Helvetica Neue", Arial, sans-serif';

export function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

export function toTexture(c, { srgb = true, repeat = false } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function stain(g, x, y, r, alpha) {
  g.strokeStyle = `rgba(92,52,20,${alpha})`;
  g.lineWidth = r * 0.08;
  g.beginPath(); g.arc(x, y, r, 0.3, Math.PI * 1.85); g.stroke();
  g.fillStyle = `rgba(110,70,30,${alpha * 0.25})`;
  g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
}

/* 清漆木板牆:直向窄板、木紋、接縫、靠近地板的磨損 */
export function makeWoodTexture() {
  const W = 512, H = 512, planks = 6;
  const [c, g] = canvas(W, H);
  const rand = seeded(31);
  const pw = W / planks;
  for (let i = 0; i < planks; i++) {
    const hue = 24 + rand() * 6, light = 22 + rand() * 7;
    g.fillStyle = `hsl(${hue}, 48%, ${light}%)`;
    g.fillRect(i * pw, 0, pw, H);
    for (let k = 0; k < 26; k++) {
      const x = i * pw + rand() * pw;
      g.strokeStyle = `rgba(${rand() > 0.5 ? '40,18,6' : '150,90,45'},${0.12 + rand() * 0.15})`;
      g.lineWidth = 0.6 + rand() * 1.6;
      g.beginPath(); g.moveTo(x, 0);
      g.bezierCurveTo(x + (rand() - 0.5) * 14, H * 0.33, x + (rand() - 0.5) * 14, H * 0.66, x + (rand() - 0.5) * 6, H);
      g.stroke();
    }
    if (rand() > 0.5) {                                   // 木節
      const ky = rand() * H, kx = i * pw + pw * (0.3 + rand() * 0.4);
      g.fillStyle = 'rgba(40,16,4,0.5)';
      g.beginPath(); g.ellipse(kx, ky, 4, 9, 0, 0, Math.PI * 2); g.fill();
    }
    g.fillStyle = 'rgba(12,5,2,0.85)'; g.fillRect(i * pw, 0, 2, H);
  }
  return toTexture(c, { repeat: true });
}

/* 地板:黑色菱紋防滑橡膠墊 + 鞋底帶進來的鹽漬 */
export function makeFloorTexture() {
  const S = 256;
  const [c, g] = canvas(S, S);
  const rand = seeded(47);
  g.fillStyle = '#16171a'; g.fillRect(0, 0, S, S);
  for (let y = 0; y < S; y += 16) {
    for (let x = (y / 16) % 2 ? 8 : 0; x < S; x += 16) {
      g.fillStyle = '#25272b';
      g.beginPath(); g.ellipse(x + 4, y + 4, 5, 2, Math.PI / 4, 0, Math.PI * 2); g.fill();
    }
  }
  for (let i = 0; i < 90; i++) {
    g.fillStyle = `rgba(200,200,190,${rand() * 0.06})`;
    g.beginPath(); g.arc(rand() * S, rand() * S, 2 + rand() * 14, 0, Math.PI * 2); g.fill();
  }
  return toTexture(c, { repeat: true });
}

function compassRose(g, x, y, r) {
  g.strokeStyle = 'rgba(150,40,60,0.8)'; g.lineWidth = 1.5;
  g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.arc(x, y, r * 0.78, 0, Math.PI * 2); g.stroke();
  for (let d = 0; d < 360; d += 5) {
    const a = d * Math.PI / 180, l = d % 30 === 0 ? 0.14 : 0.06;
    g.beginPath();
    g.moveTo(x + Math.sin(a) * r, y - Math.cos(a) * r);
    g.lineTo(x + Math.sin(a) * r * (1 - l), y - Math.cos(a) * r * (1 - l));
    g.stroke();
  }
  g.fillStyle = 'rgba(150,40,60,0.85)';
  g.beginPath(); g.moveTo(x, y - r * 0.75); g.lineTo(x + 6, y); g.lineTo(x, y + r * 0.75); g.lineTo(x - 6, y); g.closePath(); g.fill();
  g.font = `bold 14px ${PRINT}`; g.textAlign = 'center';
  g.fillText('N', x, y - r - 6);
}

/* 海圖:挪威西岸一小段,手畫航線、船位時間、咖啡漬、摺痕 */
export function makeChartTexture() {
  const W = 1024, H = 768;
  const [c, g] = canvas(W, H);
  const rand = seeded(53);
  g.fillStyle = '#e9e4d2'; g.fillRect(0, 0, W, H);

  // 等深帶:淺水較藍
  const shore = (y) => 120 + Math.sin(y * 0.012) * 60 + Math.sin(y * 0.041) * 25;
  for (const [off, col] of [[150, '#cfe0e6'], [70, '#bcd5df'], [25, '#a9c9d6']]) {
    g.fillStyle = col;
    g.beginPath(); g.moveTo(0, 0);
    for (let y = 0; y <= H; y += 8) g.lineTo(shore(y) + off, y);
    g.lineTo(0, H); g.closePath(); g.fill();
  }
  // 陸地 + 島嶼
  g.fillStyle = '#e3c98f'; g.strokeStyle = '#6b5a35'; g.lineWidth = 2;
  g.beginPath(); g.moveTo(0, 0);
  for (let y = 0; y <= H; y += 6) g.lineTo(shore(y) + (rand() - 0.5) * 6, y);
  g.lineTo(0, H); g.closePath(); g.fill(); g.stroke();
  for (let i = 0; i < 9; i++) {
    const ix = 230 + rand() * 260, iy = 60 + rand() * 640, ir = 6 + rand() * 18;
    g.beginPath(); g.ellipse(ix, iy, ir, ir * (0.5 + rand() * 0.5), rand() * 3, 0, Math.PI * 2); g.fill(); g.stroke();
  }
  // 經緯網格 + 外框刻度
  g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 1;
  for (let x = 0; x < W; x += 128) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  for (let y = 0; y < H; y += 128) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  // 水深數字
  g.fillStyle = 'rgba(40,50,60,0.75)'; g.font = `italic 13px ${PRINT}`;
  for (let i = 0; i < 140; i++) {
    const y = rand() * H, x = shore(y) + 30 + rand() * (W - shore(y) - 60);
    g.fillText(String(Math.round(8 + (x - shore(y)) * 0.35 + rand() * 20)), x, y);
  }
  // 燈塔符號(紅色淚滴)+ 燈質
  g.fillStyle = '#b02a2a';
  g.beginPath(); g.arc(205, 300, 7, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#222'; g.font = `12px ${PRINT}`;
  g.fillText('Fl(2) W 12s 38m 17M', 222, 296);
  g.font = `bold 15px ${PRINT}`; g.fillText('SKARVØY', 120, 330);
  compassRose(g, 820, 590, 95);

  // 鉛筆航線 + 船位(⊙ + 時間)
  g.strokeStyle = 'rgba(30,30,30,0.85)'; g.lineWidth = 2;
  const route = [[960, 120], [760, 230], [560, 360], [420, 470]];
  g.beginPath(); route.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
  g.font = `20px ${HAND}`; g.fillStyle = 'rgba(25,25,25,0.9)';
  [['0215', 960, 120], ['0340', 760, 230], ['0455', 560, 360]].forEach(([t, x, y]) => {
    g.beginPath(); g.arc(x, y, 7, 0, Math.PI * 2); g.stroke();
    g.fillText(t, x + 12, y - 8);
  });
  g.setLineDash([8, 6]);
  g.beginPath(); g.moveTo(420, 470); g.lineTo(300, 560); g.stroke();
  g.setLineDash([]);
  g.fillStyle = 'rgba(160,30,30,0.9)'; g.font = `22px ${HAND}`;
  g.fillText('Vind NV 9 → snu ved fyret!', 470, 640);
  g.fillText('Garn: 62°31\'N', 640, 90);
  g.strokeStyle = 'rgba(160,30,30,0.9)';
  g.beginPath(); g.ellipse(560, 600, 120, 26, -0.1, 0, Math.PI * 2); g.stroke();

  stain(g, 870, 360, 46, 0.45);
  stain(g, 905, 395, 44, 0.25);
  // 摺痕 + 邊緣泛黃
  g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(W / 2, 0); g.lineTo(W / 2, H); g.moveTo(0, H / 2); g.lineTo(W, H / 2); g.stroke();
  const edge = g.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, W * 0.7);
  edge.addColorStop(0, 'rgba(120,90,40,0)'); edge.addColorStop(1, 'rgba(120,90,40,0.35)');
  g.fillStyle = edge; g.fillRect(0, 0, W, H);
  return toTexture(c);
}

/* 航海日誌:橫線頁 + 手寫紀錄 */
export function makeLogbookTexture() {
  const W = 1024, H = 640;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#efe9d6'; g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(W / 2 - 3, 0, 6, H);
  g.strokeStyle = 'rgba(70,110,160,0.35)'; g.lineWidth = 1;
  for (let y = 70; y < H; y += 34) { g.beginPath(); g.moveTo(20, y); g.lineTo(W - 20, y); g.stroke(); }
  g.strokeStyle = 'rgba(190,60,60,0.4)';
  for (const x of [110, W / 2 + 90]) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  const lines = [
    ['0200', 'Kurs 284°, 6 kn. Bar 978 ↓'], ['0230', 'Vind NV 8, økende'],
    ['0300', 'Hiv inn garn, 2 kasser torsk'], ['0340', 'Pos 62°29\'N 006°02\'Ø'],
    ['0410', 'Sjø over babord, alt ok'], ['0455', 'Bar 974 ↓↓  Storm!'],
    ['0520', 'Ser fyret, Skarvøy']
  ];
  g.fillStyle = 'rgba(20,25,60,0.88)'; g.font = `24px ${HAND}`;
  lines.forEach(([t, txt], i) => {
    const left = i < 4, y = 64 + (left ? i : i - 4) * 68;
    const x0 = left ? 30 : W / 2 + 10;
    g.fillText(t, x0, y); g.fillText(txt, x0 + 90, y);
  });
  stain(g, 820, 520, 60, 0.3);
  return toTexture(c);
}

/* 塞在窗框的家人照片(舊照片的褪色暖調) */
export function makePhotoTexture() {
  const W = 256, H = 192;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#f2ede0'; g.fillRect(0, 0, W, H);
  const sky = g.createLinearGradient(0, 10, 0, H - 10);
  sky.addColorStop(0, '#9fb3b8'); sky.addColorStop(0.6, '#c9b991'); sky.addColorStop(1, '#6f6248');
  g.fillStyle = sky; g.fillRect(10, 10, W - 20, H - 34);
  g.fillStyle = '#4b5a5c'; g.fillRect(10, 100, W - 20, 20);      // 海
  const person = (x, h, col) => {
    g.fillStyle = col;
    g.beginPath(); g.arc(x, 150 - h, h * 0.16, 0, Math.PI * 2); g.fill();
    g.fillRect(x - h * 0.15, 150 - h * 0.84, h * 0.3, h * 0.84);
  };
  person(80, 80, '#3a3128'); person(120, 72, '#7a3b30'); person(150, 40, '#33405a'); person(172, 34, '#6a5a2a');
  g.fillStyle = 'rgba(255,230,180,0.18)'; g.fillRect(10, 10, W - 20, H - 34);
  g.fillStyle = '#555'; g.font = `14px ${HAND}`; g.fillText('Ålesund, sommer -19', 18, H - 8);
  return toTexture(c);
}

/* 圓形錶面:刻度 + 數字 + 標籤 */
export function makeDialTexture({ label, max, step, red = null, unit = '' }) {
  const S = 256, r = 110;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#ebe6d8'; g.beginPath(); g.arc(S / 2, S / 2, r + 14, 0, Math.PI * 2); g.fill();
  g.translate(S / 2, S / 2);
  const ang = (v) => -Math.PI * 0.75 + (v / max) * Math.PI * 1.5;
  if (red !== null) {
    g.strokeStyle = '#b52a1e'; g.lineWidth = 10;
    g.beginPath(); g.arc(0, 0, r - 8, ang(red) - Math.PI / 2, ang(max) - Math.PI / 2); g.stroke();
  }
  g.strokeStyle = '#1b1b1b'; g.fillStyle = '#1b1b1b'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `bold 22px ${PRINT}`;
  for (let v = 0; v <= max + 1e-6; v += step / 2) {
    const a = ang(v) - Math.PI / 2, major = Math.abs(v / step - Math.round(v / step)) < 1e-6;
    g.lineWidth = major ? 4 : 2;
    g.beginPath();
    g.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    g.lineTo(Math.cos(a) * (r - (major ? 18 : 10)), Math.sin(a) * (r - (major ? 18 : 10)));
    g.stroke();
    if (major) g.fillText(String(v), Math.cos(a) * (r - 38), Math.sin(a) * (r - 38));
  }
  g.font = `bold 20px ${PRINT}`; g.fillText(label, 0, 46);
  g.font = `16px ${PRINT}`; g.fillText(unit, 0, 70);
  return toTexture(c);
}

/* 黃銅時鐘錶面 */
export function makeClockTexture() {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#f0ead8'; g.beginPath(); g.arc(128, 128, 124, 0, Math.PI * 2); g.fill();
  g.translate(128, 128);
  g.fillStyle = '#1a1a1a'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `bold 26px Georgia, serif`;
  const roman = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  roman.forEach((n, i) => {
    const a = i / 12 * Math.PI * 2;
    g.fillText(n, Math.sin(a) * 92, -Math.cos(a) * 92);
  });
  for (let i = 0; i < 60; i++) {
    const a = i / 60 * Math.PI * 2, l = i % 5 ? 6 : 12;
    g.fillRect(Math.sin(a) * 116 - 1, -Math.cos(a) * 116 - 1, 2, 2);
    if (!(i % 5)) { g.save(); g.rotate(a); g.fillRect(-1.5, -118, 3, l); g.restore(); }
  }
  return toTexture(c);
}

/* 氣壓計:挪威文天氣字樣,指針會停在「STORM」 */
export function makeBarometerTexture() {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#efe7d2'; g.beginPath(); g.arc(128, 128, 124, 0, Math.PI * 2); g.fill();
  g.translate(128, 128);
  g.strokeStyle = '#1a1a1a'; g.fillStyle = '#1a1a1a'; g.textAlign = 'center'; g.textBaseline = 'middle';
  const ang = (hpa) => -Math.PI * 0.75 + ((hpa - 950) / 100) * Math.PI * 1.5;
  for (let p = 950; p <= 1050; p += 2) {
    const a = ang(p) - Math.PI / 2, major = p % 10 === 0;
    g.lineWidth = major ? 2.5 : 1;
    g.beginPath(); g.moveTo(Math.cos(a) * 112, Math.sin(a) * 112);
    g.lineTo(Math.cos(a) * (major ? 98 : 104), Math.sin(a) * (major ? 98 : 104)); g.stroke();
    if (major && p % 20 === 0) { g.font = `12px ${PRINT}`; g.fillText(String(p), Math.cos(a) * 86, Math.sin(a) * 86); }
  }
  g.font = `bold 15px Georgia, serif`;
  [['STORM', 960], ['REGN', 985], ['SKIFTENDE', 1000], ['GODT', 1020], ['TØRT', 1040]].forEach(([w, p]) => {
    const a = ang(p) - Math.PI / 2;
    g.save(); g.translate(Math.cos(a) * 62, Math.sin(a) * 62); g.rotate(a + Math.PI / 2); g.fillText(w, 0, 0); g.restore();
  });
  g.font = `italic 12px Georgia, serif`; g.fillText('hPa', 0, 40);
  return toTexture(c);
}

/* 窗玻璃內側的雨滴(alpha):亮點 + 暗邊,模擬折射 */
export function makeDropletTexture(seed, { clearCircle = false } = {}) {
  const S = 256;
  const [c, g] = canvas(S, S);
  const rand = seeded(seed);
  for (let i = 0; i < 260; i++) {
    const x = rand() * S, y = rand() * S;
    if (clearCircle && Math.hypot(x - S / 2, y - S / 2) < S * 0.36) continue;
    const r = 0.8 + Math.pow(rand(), 3) * 5;
    const grd = g.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.9)'); grd.addColorStop(0.6, 'rgba(160,180,200,0.35)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  return toTexture(c);
}

/* 往下流的水痕(垂直重複捲動) */
export function makeStreakTexture() {
  const W = 128, H = 512;
  const [c, g] = canvas(W, H);
  const rand = seeded(61);
  for (let i = 0; i < 14; i++) {
    let x = rand() * W;
    const y0 = rand() * H, len = 80 + rand() * 260;
    g.strokeStyle = `rgba(220,230,240,${0.25 + rand() * 0.35})`;
    g.lineWidth = 1 + rand() * 1.5;
    g.beginPath(); g.moveTo(x, y0);
    for (let y = y0; y < y0 + len; y += 12) { x += (rand() - 0.5) * 3; g.lineTo(x, y % H); if (y % H < 12) g.moveTo(x, 0); }
    g.stroke();
    g.fillStyle = 'rgba(255,255,255,0.8)';
    g.beginPath(); g.arc(x, (y0 + len) % H, 2.4, 0, Math.PI * 2); g.fill();
  }
  return toTexture(c, { repeat: true });
}

/* 小標籤條(開關面板、按鍵) */
export function makeLabelTexture(labels, { w = 512, h = 64, bg = '#1c1d1f', fg = '#d9d4c4' } = {}) {
  const [c, g] = canvas(w, h);
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.fillStyle = fg; g.font = `bold ${Math.round(h * 0.34)}px ${PRINT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  labels.forEach((l, i) => g.fillText(l, (i + 0.5) * w / labels.length, h / 2));
  return toTexture(c);
}

/* GPS 定位儀:綠字黑底 */
export function makeGpsTexture() {
  const W = 256, H = 160;
  const [c, g] = canvas(W, H);
  g.fillStyle = '#020a04'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#6dff8a'; g.font = `bold 20px "Courier New", monospace`;
  ['N 62°29.41\'', 'E 006°01.87\'', 'SOG  5.8 kn', 'COG  284°', 'WPT  SKARVØY 2.1nm'].forEach((l, i) => g.fillText(l, 12, 28 + i * 28));
  return toTexture(c);
}

/* 琺瑯杯身:白底、深藍杯緣、掉漆黑點 */
export function makeEnamelTexture() {
  const W = 256, H = 128;
  const [c, g] = canvas(W, H);
  const rand = seeded(73);
  g.fillStyle = '#e8e4da'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#1d2f5c'; g.fillRect(0, 0, W, 10);
  for (let i = 0; i < 9; i++) {
    g.fillStyle = '#141414';
    g.beginPath(); g.ellipse(rand() * W, rand() * H, 2 + rand() * 4, 1.5 + rand() * 3, rand() * 3, 0, Math.PI * 2); g.fill();
  }
  g.fillStyle = 'rgba(120,80,40,0.25)'; g.fillRect(0, 10, W, 6);       // 杯緣內側的咖啡漬
  return toTexture(c);
}

/* 羅經卡:黑底白刻度(透過玻璃罩看) */
export function makeCompassCardTexture() {
  const S = 256;
  const [c, g] = canvas(S, S);
  g.fillStyle = '#0d0d0d'; g.beginPath(); g.arc(128, 128, 126, 0, Math.PI * 2); g.fill();
  g.translate(128, 128);
  g.strokeStyle = '#e8e2d0'; g.fillStyle = '#e8e2d0'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let d = 0; d < 360; d += 5) {
    const a = d * Math.PI / 180, l = d % 10 ? 8 : 16;
    g.lineWidth = d % 10 ? 1 : 2;
    g.beginPath(); g.moveTo(Math.sin(a) * 120, -Math.cos(a) * 120); g.lineTo(Math.sin(a) * (120 - l), -Math.cos(a) * (120 - l)); g.stroke();
    if (d % 30 === 0) {
      g.save(); g.rotate(a); g.font = `bold 16px ${PRINT}`;
      g.fillText({ 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[d] ?? String(d / 10), 0, -86); g.restore();
    }
  }
  g.fillStyle = '#c7372a';
  g.beginPath(); g.moveTo(0, -70); g.lineTo(9, 0); g.lineTo(-9, 0); g.closePath(); g.fill();
  return toTexture(c);
}

/* 杯底咖啡漬(alpha 圓環) */
export function makeRingStainTexture() {
  const S = 128;
  const [c, g] = canvas(S, S);
  stain(g, 64, 64, 44, 0.7);
  stain(g, 76, 58, 42, 0.35);
  return toTexture(c);
}

/* 熱氣粒子:柔邊圓點 */
export function makeSoftDotTexture() {
  const S = 64;
  const [c, g] = canvas(S, S);
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.4, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  return toTexture(c);
}

/* 牆上月曆:今天以前的日子打叉 */
export function makeCalendarTexture(date = new Date()) {
  const W = 256, H = 352;
  const [c, g] = canvas(W, H);
  const months = ['JANUAR', 'FEBRUAR', 'MARS', 'APRIL', 'MAI', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'];
  g.fillStyle = '#f1ece0'; g.fillRect(0, 0, W, H);
  const pic = g.createLinearGradient(0, 0, 0, 150);
  pic.addColorStop(0, '#5f7f99'); pic.addColorStop(1, '#23384a');
  g.fillStyle = pic; g.fillRect(10, 10, W - 20, 140);
  g.fillStyle = '#c8392b';                                          // 照片裡的紅色漁船
  g.beginPath(); g.moveTo(70, 118); g.lineTo(190, 118); g.lineTo(175, 135); g.lineTo(82, 135); g.closePath(); g.fill();
  g.fillStyle = '#eee'; g.fillRect(110, 98, 30, 20);
  g.fillStyle = '#1a1a1a'; g.font = `bold 20px ${PRINT}`; g.textAlign = 'center';
  g.fillText(`${months[date.getMonth()]} ${date.getFullYear()}`, W / 2, 176);
  const first = (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  g.font = `14px ${PRINT}`;
  for (let d = 1; d <= days; d++) {
    const i = first + d - 1, x = 26 + (i % 7) * 34, y = 202 + Math.floor(i / 7) * 28;
    g.fillStyle = i % 7 === 6 ? '#b0281e' : '#222';
    g.fillText(String(d), x, y);
    if (d < date.getDate()) {
      g.strokeStyle = 'rgba(30,30,90,0.7)'; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(x - 9, y - 13); g.lineTo(x + 9, y + 3); g.moveTo(x + 9, y - 13); g.lineTo(x - 9, y + 3); g.stroke();
    }
  }
  return toTexture(c);
}
