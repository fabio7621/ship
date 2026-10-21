/* =========================================================
   持續的環境聲層:風、索具風鳴、旗子拍打、雨、浪、引擎
   outside 匯流排會在進艙時被低通(隔著玻璃聽),inside 匯流排只在艙內出現
   ========================================================= */
import { aeolianTone, engineRate } from './mix.js';

const SMOOTH = 0.25;                         // 參數追蹤的時間常數 (s)
const RIGGING = [                            // 索具直徑 (m) 與音量:細的聲音高
  { d: 0.006, gain: 0.05, q: 18 },
  { d: 0.011, gain: 0.07, q: 12 }
];
const ENGINE_INERTIA = 0.5;                  // s:飛輪慣性,轉速不會瞬間跳

function loop(ctx, buffer) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  src.start(0, Math.random() * buffer.duration);    // 每層從不同位置開始,避免同步
  return src;
}

function filter(ctx, type, frequency, Q = 0.7) {
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = frequency; f.Q.value = Q;
  return f;
}

function gain(ctx, value) {
  const g = ctx.createGain();
  g.gain.value = value;
  return g;
}

/* 把節點串起來,回傳最後一個 */
function chain(...nodes) {
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]);
  return nodes[nodes.length - 1];
}

function createWind(ctx, buffers, out) {
  const bedGain = gain(ctx, 0);
  chain(loop(ctx, buffers.pink), filter(ctx, 'lowpass', 600), bedGain, out);
  const gustNoise = gain(ctx, 0);   // 陣風時才冒出來的高頻呼嘯
  chain(loop(ctx, buffers.white), filter(ctx, 'bandpass', 1400, 0.5), gustNoise, out);
  const whistles = RIGGING.map((r) => {
    const bp = filter(ctx, 'bandpass', aeolianTone(20, r.d), r.q);
    const g = gain(ctx, 0);
    chain(loop(ctx, buffers.white), bp, g, out);
    return { ...r, bp, g };
  });
  return function update(now, speed, gust) {
    bedGain.gain.setTargetAtTime(0.22 + 0.22 * gust, now, SMOOTH);
    gustNoise.gain.setTargetAtTime(0.06 * gust * gust, now, SMOOTH);
    for (const w of whistles) {
      w.bp.frequency.setTargetAtTime(aeolianTone(speed, w.d), now, SMOOTH);
      w.g.gain.setTargetAtTime(w.gain * gust ** 1.5, now, SMOOTH);
    }
  };
}

/* 旗子在船尾啪啪甩:帶通雜訊,振幅被一個跟風速成正比的低頻振盪調變 */
function createFlagFlap(ctx, buffers, out) {
  const amp = gain(ctx, 0);
  chain(loop(ctx, buffers.white), filter(ctx, 'bandpass', 380, 0.9), amp, out);
  const lfo = ctx.createOscillator();
  lfo.type = 'triangle';
  const depth = gain(ctx, 0);
  chain(lfo, depth, amp.gain);
  lfo.start();
  return function update(now, speed, gust) {
    const level = 0.03 + 0.05 * gust;
    lfo.frequency.setTargetAtTime(speed * 0.38, now, SMOOTH);
    amp.gain.setTargetAtTime(level, now, SMOOTH);
    depth.gain.setTargetAtTime(level * 0.9, now, SMOOTH);
  };
}

/*
 * 雨:外面是一片嘶嘶聲;艙內分三層
 * - 艙頂:密集、悶的雨點(鼓點般連成一片)
 * - 玻璃:稀疏、清脆的「噠」,陣風把雨甩到窗上時變多
 * - 水膜:雨水沿玻璃流下的沙沙聲
 * 艙頂與玻璃是兩個長度不同的循環,疊起來很久才會重複
 */
function createRain(ctx, buffers, out, inside) {
  chain(loop(ctx, buffers.white), filter(ctx, 'highpass', 1100), filter(ctx, 'lowpass', 7000), gain(ctx, 0.11), out);
  const roof = chain(loop(ctx, buffers.roofRain), filter(ctx, 'highpass', 180));
  roof.connect(gain(ctx, 0.05)).connect(out);           // 甲板上的雨點(外面也聽得到一點)
  const roofIn = gain(ctx, 0);
  roof.connect(roofIn).connect(inside);
  const glass = gain(ctx, 0);
  chain(loop(ctx, buffers.glassRain), filter(ctx, 'highpass', 350), glass, inside);
  const sheet = gain(ctx, 0);
  chain(loop(ctx, buffers.pink), filter(ctx, 'highpass', 250), filter(ctx, 'lowpass', 1400), sheet, inside);
  return function update(now, gust) {
    roofIn.gain.setTargetAtTime(0.2 * (0.85 + 0.3 * gust), now, SMOOTH);
    glass.gain.setTargetAtTime(0.13 * (0.6 + 0.8 * gust), now, SMOOTH);
    sheet.gain.setTargetAtTime(0.025 + 0.035 * gust, now, SMOOTH);
  };
}

function createSea(ctx, buffers, out, inside) {
  const wash = gain(ctx, 0);
  chain(loop(ctx, buffers.brown), filter(ctx, 'lowpass', 420), wash, out);
  const foam = gain(ctx, 0);               // 白浪碎掉的嘶嘶聲
  chain(loop(ctx, buffers.pink), filter(ctx, 'bandpass', 900, 0.6), foam, out);
  const hull = gain(ctx, 0);               // 水貼著船殼流過,在艙內是低沉的轟隆
  chain(loop(ctx, buffers.brown), filter(ctx, 'lowpass', 160), hull, inside);
  return function update(now, sea, gust) {
    wash.gain.setTargetAtTime(0.35 + 0.45 * sea, now, SMOOTH);
    foam.gain.setTargetAtTime(0.04 + 0.06 * gust + 0.05 * sea, now, SMOOTH);
    hull.gain.setTargetAtTime(0.18 + 0.4 * sea, now, SMOOTH);
  };
}

/* 引擎:隔著艙板聽到的柴油機(高頻被擋掉);轉速隨船尾出水 / 入水起伏 */
function createEngine(ctx, buffers, out, inside) {
  const src = loop(ctx, buffers.engine);
  const body = chain(src, filter(ctx, 'highpass', 35), filter(ctx, 'lowpass', 1100));
  body.connect(gain(ctx, 0.24)).connect(inside);
  body.connect(gain(ctx, 0.02)).connect(out);
  return function update(now, pitch) {
    src.playbackRate.setTargetAtTime(engineRate(pitch), now, ENGINE_INERTIA);
  };
}

/**
 * @param {AudioContext} ctx
 * @param {{ outside: AudioNode, inside: AudioNode, buffers: Record<string, AudioBuffer> }} opts
 * @returns {{ update: (now: number, p: { speed: number, gust: number, sea: number, pitch: number }) => void }}
 */
export function createAmbience(ctx, { outside, inside, buffers }) {
  const wind = createWind(ctx, buffers, outside);
  const flap = createFlagFlap(ctx, buffers, outside);
  const sea = createSea(ctx, buffers, outside, inside);
  const rain = createRain(ctx, buffers, outside, inside);
  const engine = createEngine(ctx, buffers, outside, inside);
  return {
    update(now, p) {
      wind(now, p.speed, p.gust);
      flap(now, p.speed, p.gust);
      sea(now, p.sea, p.gust);
      rain(now, p.gust);
      engine(now, p.pitch);
    }
  };
}
