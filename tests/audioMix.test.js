import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  thunderProfile, aeolianTone, gustLevel, seaLevel, cabinMix,
  createThresholdTrigger, createTurnTrigger, engineRate, SOUND_SPEED, ACOUSTIC_SCALE
} from '../src/audio/mix.js';
import { fillNoise, fillRain, fillCreak, createEngineSamples } from '../src/audio/buffers.js';

test('雷聲:延遲 = 真實距離 / 音速', () => {
  const p = thunderProfile(80, 1);
  assert.ok(Math.abs(p.delay - (80 * ACOUSTIC_SCALE) / SOUND_SPEED) < 1e-9);
});

test('雷聲:越近越響、越亮、撕裂聲越多;越遠滾得越久', () => {
  const near = thunderProfile(50, 1), far = thunderProfile(110, 1);
  assert.ok(near.delay < far.delay);
  assert.ok(near.gain > far.gain);
  assert.ok(near.cutoff > far.cutoff);
  assert.ok(near.crack > far.crack);
  assert.ok(far.duration > near.duration);
});

test('雷聲:場景裡閃電的距離範圍 → 1.5~4 秒延遲(閃完才聽到雷)', () => {
  for (const d of [55, 80, 110]) {
    const { delay } = thunderProfile(d, 1);
    assert.ok(delay > 1.5 && delay < 4.2, `${d} → ${delay}`);
  }
});

test('雷聲:power 為 0 時沒有聲音', () => {
  const p = thunderProfile(60, 0);
  assert.equal(p.gain, 0);
  assert.equal(p.crack, 0);
});

test('風鳴:f = 0.2·U/d,8mm 鋼索在 22 m/s 約 550 Hz;風越大越高', () => {
  assert.ok(Math.abs(aeolianTone(22, 0.008) - 550) < 1e-9);
  assert.ok(aeolianTone(25, 0.008) > aeolianTone(20, 0.008));
  assert.ok(aeolianTone(22, 0.004) > aeolianTone(22, 0.012));
});

test('陣風:平均 = 0.5,夾在 0~1,σ 異常時回到 0.5', () => {
  assert.equal(gustLevel(20, 20, 1.5), 0.5);
  assert.equal(gustLevel(40, 20, 1.5), 1);
  assert.equal(gustLevel(0, 20, 1.5), 0);
  assert.equal(gustLevel(25, 20, 0), 0.5);
  assert.ok(gustLevel(22, 20, 1.5) > 0.5);
});

test('浪聲:依升沉速度,方向無關,夾在 0~1', () => {
  assert.equal(seaLevel(0), 0);
  assert.equal(seaLevel(-2), seaLevel(2));
  assert.equal(seaLevel(10), 1);
});

test('艙內混音:越進艙外部越悶、越小聲,艙內聲越大', () => {
  const out = cabinMix(0), mid = cabinMix(0.5), inn = cabinMix(1);
  assert.ok(out.muffle > mid.muffle && mid.muffle > inn.muffle);
  assert.ok(inn.muffle < 1000);
  assert.ok(out.outside > inn.outside && inn.outside > 0);
  assert.equal(out.inside, 0);
  assert.equal(inn.inside, 1);
  // 對數插值:一半進艙時截止頻率是兩端的幾何平均
  assert.ok(Math.abs(mid.muffle - Math.sqrt(out.muffle * inn.muffle)) < 1e-6);
  assert.deepEqual(cabinMix(3), inn);
});

test('遲滯觸發:越過 on 只觸發一次,掉回 off 以下才能再觸發', () => {
  const trig = createThresholdTrigger({ on: 1, off: 0.3 });
  const seq = [0, 0.5, 1.2, 1.5, 0.8, 1.3, 0.2, 1.1];
  assert.deepEqual(seq.map(trig), [false, false, true, false, false, false, false, true]);
});

test('擺盪折返:速度換號時回傳該擺的峰值,太小或冷卻中不觸發', () => {
  const turn = createTurnTrigger({ minPeak: 0.1, cooldown: 1 });
  assert.equal(turn(0.05, 0), 0);
  assert.equal(turn(0.15, 0.1), 0);
  assert.equal(turn(-0.02, 0.2), 0.15);     // 折返,峰值 0.15
  assert.equal(turn(-0.2, 0.5), 0);
  assert.equal(turn(0.01, 0.9), 0);         // 峰值夠,但還在冷卻
  assert.equal(turn(-0.05, 2.5), 0);        // 冷卻過了,但這一擺太小
});

const seeded = (seed = 7) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

test('雜訊:三種顏色都是有限值、振幅在 ±1 內、不是全零', () => {
  for (const color of ['white', 'pink', 'brown']) {
    const a = fillNoise(new Float32Array(48000), color, seeded());
    let peak = 0, energy = 0;
    for (const v of a) { assert.ok(Number.isFinite(v)); peak = Math.max(peak, Math.abs(v)); energy += v * v; }
    assert.ok(peak <= 1, `${color} peak ${peak}`);
    assert.ok(energy > 0, color);
  }
});

test('雜訊:棕噪的低頻比白噪多(相鄰樣本高度相關)', () => {
  const corr = (a) => { let s = 0, n = 0; for (let i = 1; i < a.length; i++) { s += a[i] * a[i - 1]; n += a[i] * a[i]; } return s / n; };
  const white = fillNoise(new Float32Array(48000), 'white', seeded());
  const brown = fillNoise(new Float32Array(48000), 'brown', seeded());
  assert.ok(corr(brown) > 0.9, `${corr(brown)}`);
  assert.ok(Math.abs(corr(white)) < 0.05, `${corr(white)}`);
});

const SR = 48000;
const ROOF = { rate: 500, decayMs: [2, 9], cutoff: [500, 2200], sizePower: 2.5, spread: 0.9 };
const GLASS = { rate: 70, decayMs: [0.8, 3], cutoff: [1800, 5000], sizePower: 3, spread: 0.7,
  body: { modes: [[650, 220], [1650, 400]], mix: 0.25 } };

const peakAbs = (a) => a.reduce((p, v) => Math.max(p, Math.abs(v)), 0);
const allFinite = (a) => a.every(Number.isFinite);

/* 接縫(最後一個樣本 → 第一個樣本)的跳動不比緩衝區內部一般的相鄰跳動大 */
function seamIsSmooth(a) {
  const diffs = [];
  for (let i = 1; i < a.length; i++) diffs.push(Math.abs(a[i] - a[i - 1]));
  diffs.sort((x, y) => x - y);
  return Math.abs(a[0] - a[a.length - 1]) <= diffs[Math.floor(diffs.length * 0.99)];
}

test('雨:立體聲,左右聲道不同(雨點有左右位置),有限值、振幅在 ±1 內', () => {
  for (const spec of [ROOF, GLASS]) {
    const [l, r] = fillRain(new Float32Array(SR * 2), new Float32Array(SR * 2), SR, spec, seeded());
    assert.ok(allFinite(l) && allFinite(r));
    assert.ok(Math.max(peakAbs(l), peakAbs(r)) <= 1);
    let diff = 0, sum = 0;
    for (let i = 0; i < l.length; i++) { diff += (l[i] - r[i]) ** 2; sum += l[i] ** 2 + r[i] ** 2; }
    assert.ok(diff / sum > 0.1, `L/R 幾乎一樣:${diff / sum}`);
  }
});

test('雨:艙頂的雨點密到連成一片(不是一顆一顆的滴答),玻璃的比較稀疏', () => {
  const activeRatio = (spec) => {
    const [l] = fillRain(new Float32Array(SR * 2), new Float32Array(SR * 2), SR, spec, seeded());
    const win = SR / 100, rmsAll = Math.sqrt(l.reduce((s, v) => s + v * v, 0) / l.length);
    let active = 0, total = 0;
    for (let i = 0; i + win <= l.length; i += win, total++) {
      let s = 0;
      for (let k = i; k < i + win; k++) s += l[k] * l[k];
      if (Math.sqrt(s / win) > rmsAll * 0.2) active++;
    }
    return active / total;
  };
  const roof = activeRatio(ROOF), glass = activeRatio({ ...GLASS, body: undefined });
  assert.ok(roof > 0.95, `roof ${roof}`);
  assert.ok(glass < roof, `glass ${glass} vs roof ${roof}`);
});

test('雨:循環接縫是連續的(雨點環繞寫入,接縫不會有斷點)', () => {
  const [l, r] = fillRain(new Float32Array(SR), new Float32Array(SR), SR, GLASS, seeded());
  assert.ok(seamIsSmooth(l) && seamIsSmooth(r));
});

test('引擎:長度是整數個點火週期,而且真的以點火頻率重複', () => {
  const spec = { firingHz: 45, cylinders: 6, cycles: 3 };
  const a = createEngineSamples(SR, spec, seeded());
  const period = Math.round(SR / spec.firingHz);
  assert.equal(a.length, period * spec.cylinders * spec.cycles);
  assert.ok(allFinite(a) && peakAbs(a) <= 1 && peakAbs(a) > 0.5);
  const corr = (lag) => {
    let s = 0, n = 0;
    for (let i = 0; i < a.length; i++) { s += a[i] * a[(i + lag) % a.length]; n += a[i] * a[i]; }
    return s / n;
  };
  assert.ok(corr(period) > 0.6, `週期相關 ${corr(period)}`);
  assert.ok(corr(Math.round(period / 2)) < corr(period));
});

test('引擎:循環接縫是連續的', () => {
  assert.ok(seamIsSmooth(createEngineSamples(SR, { firingHz: 45, cylinders: 6, cycles: 3 }, seeded())));
});

test('引擎轉速:船尾翹起(船頭朝下)時轉速往上衝,船頭抬起時稍降,都有上下限', () => {
  assert.equal(engineRate(0), 1);
  assert.ok(engineRate(-0.1) > 1);
  assert.ok(engineRate(0.1) < 1);
  assert.ok(engineRate(-5) <= 1.06 && engineRate(5) >= 0.97);
});

test('吱嘎聲:有限值、振幅在 ±1 內、頭尾安靜', () => {
  const creak = fillCreak(new Float32Array(SR), SR, seeded());
  assert.ok(allFinite(creak));
  assert.ok(peakAbs(creak) > 0.05 && peakAbs(creak) <= 1);
  assert.ok(Math.abs(creak[0]) < 1e-3 && Math.abs(creak[creak.length - 1]) < 1e-3);
});
