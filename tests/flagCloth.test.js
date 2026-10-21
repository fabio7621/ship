import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCloth, stepCloth, structuralStretch } from '../src/physics/flagCloth.js';
import {
  wetArealDensity, rainPressure, skinFriction, waterDetachAccel,
  FABRIC_DRY_DENSITY, FLUTTER
} from '../src/physics/flagAero.js';

const HOIST = 1.7, FLY = 0.765;

test('材料:旗布淋濕後面密度增加,淋雨壓力極小', () => {
  assert.ok(Math.abs(wetArealDensity(FABRIC_DRY_DENSITY, 0.5) - FABRIC_DRY_DENSITY * 1.5) < 1e-12);
  const p = rainPressure(50, 9);
  assert.ok(Math.abs(p - 0.125) < 0.001, `got ${p}`);
});

test('摩擦係數:紊流平板 Re=1e6 時約 0.0047', () => {
  const cf = skinFriction(1e6);
  assert.ok(Math.abs(cf - 0.00467) < 0.0002, `got ${cf}`);
});

test('水滴脫離加速度:2mm 雨滴約 10 g', () => {
  const a = waterDetachAccel(0.002);
  assert.ok(a > 80 && a < 140, `got ${a}`);
});

/* 測試用旗桿:沿 y 軸、頂端 4.6m,風往 -x */
function makeFlag() {
  const rows = 18, cols = 9;
  const pins = new Float64Array(rows * 3);
  for (let r = 0; r < rows; r++) pins.set([0, 4.6 - (HOIST * r) / (rows - 1), 0], r * 3);
  const cloth = createCloth({ hoist: HOIST, fly: FLY, rows, cols, arealDensity: 0.2, pins, flyDir: [-1, 0, 0] });
  return { cloth, pins };
}

function run(cloth, pins, seconds, air, { flutter = true } = {}) {
  const dt = 1 / 60;
  const samples = [];
  for (let i = 0, t = 0; i < seconds * 60; i++, t += dt) {
    stepCloth(cloth, dt, { t, pinFrom: pins, pinTo: pins, air, flutter });
    samples.push(cloth.diag.tipLateral);
  }
  return samples;
}

const steadyWind = (u) => (x, y, z, t, out) => { out[0] = -u; out[1] = 0; out[2] = 0; return out; };

/* 整條旗邊縫在套管上、布幾乎不伸長 → 無風時像門一樣垂著,只有旗尾下角因重力略為下垂 */
test('布料:無風時旗尾下角因重力下垂,布料穩定', () => {
  const { cloth, pins } = makeFlag();
  const corner = (cloth.rows * cloth.cols - 1) * 3 + 1;
  const startY = cloth.pos[corner];
  run(cloth, pins, 3, steadyWind(0), { flutter: false });
  assert.ok(cloth.pos[corner] < startY - 0.005, `corner y ${cloth.pos[corner]} vs ${startY}`);
  assert.ok(cloth.pos.every(Number.isFinite));
  assert.ok(structuralStretch(cloth) < 0.03, `stretch ${structuralStretch(cloth)}`);
});

test('布料:20 m/s 風中旗面順風展開,布幾乎不伸長', () => {
  const { cloth, pins } = makeFlag();
  run(cloth, pins, 4, steadyWind(20));
  const tip = cloth.tipIndex;
  assert.ok(cloth.pos[tip * 3] < -FLY * 0.6, `tip x ${cloth.pos[tip * 3]}`);
  assert.ok(structuralStretch(cloth) < 0.06, `stretch ${structuralStretch(cloth)}`);
  assert.ok(cloth.pos.every(Number.isFinite));
});

test('拍動:尾端振幅接近實驗值 A/L ≈ 0.3,頻率接近 St_L·U/L', () => {
  const { cloth, pins } = makeFlag();
  const U = 20;
  const samples = run(cloth, pins, 10, steadyWind(U)).slice(6 * 60);   // 丟掉前 6 秒暫態
  const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
  const rms = Math.sqrt(samples.reduce((a, b) => a + (b - mean) ** 2, 0) / samples.length);
  const ampRatio = (rms * Math.SQRT2) / FLY;
  assert.ok(ampRatio > 0.18 && ampRatio < 0.42, `A/L ${ampRatio}`);

  let crossings = 0;
  for (let i = 1; i < samples.length; i++) if ((samples[i - 1] - mean) * (samples[i] - mean) < 0) crossings++;
  const freq = crossings / 2 / (samples.length / 60);
  const expected = (FLUTTER.strouhalL * U) / FLY;
  // 60fps 取樣看得到的頻率上限 30Hz;只要求同一個量級
  assert.ok(freq > expected * 0.5 && freq < Math.min(30, expected * 1.5), `f ${freq} vs ${expected}`);
});

test('阻力:平均阻力係數落在實驗範圍 0.05~0.6', () => {
  const { cloth, pins } = makeFlag();
  run(cloth, pins, 8, steadyWind(20));
  const cd = cloth.diag.dragCoeff;
  assert.ok(cd > 0.05 && cd < 0.6, `Cd ${cd}`);
});

test('陣風:1.5 倍陣風(30 m/s)仍穩定', () => {
  const { cloth, pins } = makeFlag();
  run(cloth, pins, 4, steadyWind(30));
  assert.ok(cloth.pos.every(Number.isFinite));
  assert.ok(structuralStretch(cloth) < 0.08, `stretch ${structuralStretch(cloth)}`);
});
