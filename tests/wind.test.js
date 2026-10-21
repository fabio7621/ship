import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  windAtHeight, turbulenceIntensity, createWindField,
  GUST_FACTOR_AT_SEA, PEAK_FACTOR
} from '../src/physics/wind.js';

test('風速剖面:10m 高等於 U10,越低越慢,單調遞增', () => {
  assert.equal(windAtHeight(20, 10), 20);
  const atFlag = windAtHeight(20, 3.8);
  assert.ok(atFlag > 17.5 && atFlag < 18.5, `got ${atFlag}`);
  let prev = 0;
  for (let z = 1; z <= 30; z++) {
    const u = windAtHeight(20, z);
    assert.ok(u > prev);
    prev = u;
  }
});

test('風速剖面:貼近水面不會變成 0 或 NaN', () => {
  for (const z of [0, -1, 0.01]) {
    const u = windAtHeight(20, z);
    assert.ok(Number.isFinite(u) && u > 10, `z=${z} got ${u}`);
  }
});

test('紊流強度:由海上陣風係數 1.23 與峰值因子 3 推得約 7.7%', () => {
  const i = turbulenceIntensity(GUST_FACTOR_AT_SEA, PEAK_FACTOR);
  assert.ok(Math.abs(i - 0.0767) < 0.001, `got ${i}`);
});

/* 在一條線上大量取樣,統計順風分量的平均與標準差 */
function sampleAlongWind(field, n) {
  const out = [0, 0, 0];
  const mean = field.meanAt(4, [0, 0, 0]);
  const speed = Math.hypot(mean[0], mean[2]);
  const ux = mean[0] / speed, uz = mean[2] / speed;
  let sum = 0, sum2 = 0;
  for (let i = 0; i < n; i++) {
    field.sample((i % 37) * 3.1, 4, (i % 11) * 2.3, i * 0.137, out);
    const along = out[0] * ux + out[2] * uz;
    sum += along;
    sum2 += along * along;
  }
  const m = sum / n;
  return { mean: m, std: Math.sqrt(sum2 / n - m * m), speed };
}

test('紊流風場:平均等於剖面風速,順風標準差 ≈ I·U', () => {
  const field = createWindField({ u10: 20, dir: [-1, 0], drift: [0, 0], seed: 7 });
  const { mean, std, speed } = sampleAlongWind(field, 20000);
  assert.ok(Math.abs(mean - speed) < 0.05 * speed, `mean ${mean} vs ${speed}`);
  const target = turbulenceIntensity() * speed;
  assert.ok(Math.abs(std - target) < 0.25 * target, `std ${std} vs ${target}`);
});

test('紊流風場:船速(水往後流)加進視風', () => {
  const still = createWindField({ u10: 20, dir: [-1, 0], drift: [0, 0], seed: 1 });
  const moving = createWindField({ u10: 20, dir: [-1, 0], drift: [-3.2, 0], seed: 1 });
  const a = still.meanAt(4, [0, 0, 0]), b = moving.meanAt(4, [0, 0, 0]);
  assert.ok(Math.abs(b[0] - a[0] + 3.2) < 1e-9);
});

test('紊流風場:同一個 seed 結果可重現', () => {
  const a = createWindField({ u10: 20, dir: [-1, 0.12], drift: [-3.2, 0], seed: 3 });
  const b = createWindField({ u10: 20, dir: [-1, 0.12], drift: [-3.2, 0], seed: 3 });
  const oa = a.sample(1, 4, 2, 5, [0, 0, 0]);
  const ob = b.sample(1, 4, 2, 5, [0, 0, 0]);
  assert.deepEqual(oa, ob);
});
