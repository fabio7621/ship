/* =========================================================
   程序生成的音源(不載入任何音檔)
   - 雜訊:白 / 粉紅(Paul Kellet 濾波)/ 棕(積分白噪)
   - 雨:每滴是一小段低通雜訊(撞擊),隨機左右位置;可選擇再激發玻璃板的共振
   - 引擎:六缸四行程柴油機的點火脈衝 + 敲缸聲 → 機體共振
   - 吱嘎聲:黏滑(stick-slip)脈衝列 → 兩個共振峰(木頭結構的模態)
   需要循環播放的(雨、引擎)都用環繞寫入 + 共振器跑兩圈,接縫沒有斷點
   ========================================================= */

const PEAK = 0.9;
const EDGE_FADE = 0.03;     // 吱嘎聲頭尾淡入淡出的比例
const DROP_ATTACK = 0.0002; // s:雨滴撞擊的上升時間

function normalize(...channels) {
  let peak = 0;
  for (const ch of channels) for (let i = 0; i < ch.length; i++) peak = Math.max(peak, Math.abs(ch[i]));
  if (peak > 0) for (const ch of channels) for (let i = 0; i < ch.length; i++) ch[i] *= PEAK / peak;
  return channels;
}

function peakOf(arr) {
  let p = 0;
  for (let i = 0; i < arr.length; i++) p = Math.max(p, Math.abs(arr[i]));
  return p;
}

const lerp = ([a, b], u) => a + (b - a) * u;

function fillPink(arr, rand) {
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < arr.length; i++) {
    const w = rand() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.969 * b2 + w * 0.153852;    b3 = 0.8665 * b3 + w * 0.3104856;
    b4 = 0.55 * b4 + w * 0.5329522;    b5 = -0.7616 * b5 - w * 0.016898;
    arr[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362;
    b6 = w * 0.115926;
  }
}

function fillBrown(arr, rand) {
  let last = 0;
  for (let i = 0; i < arr.length; i++) {
    last = (last + 0.02 * (rand() * 2 - 1)) / 1.02;
    arr[i] = last;
  }
}

/** @param {Float32Array} arr @param {'white'|'pink'|'brown'} color @param {() => number} rand */
export function fillNoise(arr, color, rand = Math.random) {
  if (color === 'pink') fillPink(arr, rand);
  else if (color === 'brown') fillBrown(arr, rand);
  else for (let i = 0; i < arr.length; i++) arr[i] = rand() * 2 - 1;
  return normalize(arr)[0];
}

/*
 * 兩極點共振器:y[n] = x[n] + 2R·cos(ω)·y[n-1] − R²·y[n-2]
 * loop = true:把輸入當成循環訊號跑兩圈,只留第二圈 → 頭尾的共振尾巴接得起來
 */
export function resonate(input, freq, bandwidth, sampleRate, loop = false) {
  const out = new Float32Array(input.length);
  const r = Math.exp((-Math.PI * bandwidth) / sampleRate);
  const c = 2 * r * Math.cos((2 * Math.PI * freq) / sampleRate);
  let y1 = 0, y2 = 0;
  for (let pass = loop ? 2 : 1; pass > 0; pass--) {
    for (let i = 0; i < input.length; i++) {
      const y = input[i] + c * y1 - r * r * y2;
      out[i] = y; y2 = y1; y1 = y;
    }
  }
  return out;
}

/* 一滴雨:低通雜訊撞擊,環繞寫進左右聲道 */
function addDrop(left, right, sampleRate, spec, rand) {
  const n = left.length;
  const tau = (lerp(spec.decayMs, rand()) / 1000) * sampleRate;
  const attack = Math.max(1, Math.round(DROP_ATTACK * sampleRate));
  const len = attack + Math.ceil(tau * 5);
  const start = Math.floor(rand() * n);
  const amp = 0.08 + 0.92 * rand() ** spec.sizePower;     // 小滴多、大滴少
  const a = Math.exp((-2 * Math.PI * lerp(spec.cutoff, rand())) / sampleRate);
  const theta = Math.PI / 4 + (rand() * 2 - 1) * (Math.PI / 4) * spec.spread;
  const gl = amp * Math.cos(theta), gr = amp * Math.sin(theta);
  let y = 0;
  for (let i = 0; i < len; i++) {
    const env = i < attack ? i / attack : Math.exp(-(i - attack) / tau);
    y += (1 - a) * ((rand() * 2 - 1) * env - y);
    const k = (start + i) % n;
    left[k] += gl * y; right[k] += gr * y;
  }
}

/**
 * 雨打在艙頂 / 玻璃上(立體聲,可無縫循環)
 * @param {Float32Array} left @param {Float32Array} right
 * @param {{ rate: number, decayMs: number[], cutoff: number[], sizePower: number, spread: number,
 *           body?: { modes: number[][], mix: number } }} spec
 *   rate:每秒幾滴;cutoff:撞擊聲的低通範圍 (Hz);body:被雨滴激發的板子共振 [頻率, 頻寬]
 */
export function fillRain(left, right, sampleRate, spec, rand = Math.random) {
  left.fill(0); right.fill(0);
  const drops = Math.round((spec.rate * left.length) / sampleRate);
  for (let k = 0; k < drops; k++) addDrop(left, right, sampleRate, spec, rand);
  if (spec.body) {
    for (const ch of [left, right]) {
      const dry = peakOf(ch);
      const body = new Float32Array(ch.length);
      for (const [f, bw] of spec.body.modes) {
        const res = resonate(ch, f, bw, sampleRate, true);
        const k = (spec.body.mix * dry) / (peakOf(res) || 1);
        for (let i = 0; i < ch.length; i++) body[i] += res[i] * k;
      }
      for (let i = 0; i < ch.length; i++) ch[i] += body[i];
    }
  }
  return normalize(left, right);
}

/* 引擎機體的共振 [頻率 Hz, 頻寬 Hz, 權重]:悶的低頻 + 讓小喇叭也聽得到的中頻 */
const ENGINE_BODY = [[110, 40, 1], [260, 70, 0.75], [720, 160, 0.35]];
const FIRE_RISE = 0.0004, FIRE_DECAY = 0.004, KNOCK_DECAY = 0.0012;   // s

/**
 * 柴油引擎的一段可循環聲音
 * 四行程:每缸兩轉點火一次 → 一個循環 = cylinders 次點火;各缸略有不平衡,聽起來才有「突突」的起伏
 * @param {{ firingHz: number, cylinders: number, cycles: number }} spec
 * @returns {Float32Array} 長度剛好是整數個循環
 */
export function createEngineSamples(sampleRate, { firingHz, cylinders, cycles }, rand = Math.random) {
  const period = Math.round(sampleRate / firingHz);
  const n = period * cylinders * cycles;
  const pulses = new Float32Array(n);
  const balance = Array.from({ length: cylinders }, () => 0.88 + rand() * 0.24);
  const rise = FIRE_RISE * sampleRate, decay = FIRE_DECAY * sampleRate, knock = KNOCK_DECAY * sampleRate;
  for (let f = 0; f < cylinders * cycles; f++) {
    const amp = balance[f % cylinders] * (0.94 + rand() * 0.12);
    const start = f * period + Math.round((rand() - 0.5) * period * 0.02);
    for (let i = 0; i < decay * 6; i++) {
      const fire = Math.exp(-i / decay) - Math.exp(-i / rise);
      const clatter = i < knock * 6 ? 0.25 * (rand() * 2 - 1) * Math.exp(-i / knock) : 0;
      pulses[(((start + i) % n) + n) % n] += amp * (fire + clatter);
    }
  }
  let mean = 0;
  for (let i = 0; i < n; i++) mean += pulses[i] / n;
  for (let i = 0; i < n; i++) pulses[i] -= mean;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = 0.4 * pulses[i];
  for (const [f, bw, w] of ENGINE_BODY) {
    const res = resonate(pulses, f, bw, sampleRate, true);
    const k = w / (peakOf(res) || 1);
    for (let i = 0; i < n; i++) out[i] += res[i] * k;
  }
  return normalize(out)[0];
}

/** 船身受力時的木頭 / 繩索吱嘎聲,一次一聲,長度 = arr.length */
export function fillCreak(arr, sampleRate, rand = Math.random) {
  const n = arr.length;
  const pulses = new Float32Array(n);
  const base = 16 + rand() * 14, sweep = 30 + rand() * 50;   // 黏滑頻率:慢 → 快 → 慢
  for (let pos = 0; pos < n;) {
    const u = pos / n;
    const env = Math.sin(Math.PI * u) ** 1.5;
    pulses[pos] = env * (0.6 + 0.4 * rand());
    const rate = base + sweep * Math.sin(Math.PI * u);
    pos += Math.max(1, Math.round((sampleRate / rate) * (0.85 + rand() * 0.3)));
  }
  const low = resonate(pulses, 280 + rand() * 220, 60, sampleRate);
  const high = resonate(pulses, 900 + rand() * 600, 140, sampleRate);
  const fade = Math.max(1, Math.round(n * EDGE_FADE));
  for (let i = 0; i < n; i++) {
    const edge = Math.min(1, i / fade, (n - 1 - i) / fade);
    arr[i] = (low[i] + 0.6 * high[i]) * edge;
  }
  return normalize(arr)[0];
}

/** @param {BaseAudioContext} ctx @param {...Float32Array} channels 一個 = 單聲道,兩個 = 立體聲 */
export function toBuffer(ctx, ...channels) {
  const buf = ctx.createBuffer(channels.length, channels[0].length, ctx.sampleRate);
  channels.forEach((ch, i) => buf.copyToChannel(ch, i));
  return buf;
}
