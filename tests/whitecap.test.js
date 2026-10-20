import { test } from 'node:test';
import assert from 'node:assert/strict';
import { whitecapCoverage, createFoamController } from '../src/physics/whitecap.js';

test('Monahan 覆蓋率:無風無白沫,8 級風約 10%', () => {
  assert.equal(whitecapCoverage(0), 0);
  assert.ok(whitecapCoverage(3) < 0.002);
  const gale = whitecapCoverage(20);
  assert.ok(gale > 0.09 && gale < 0.12, `got ${gale}`);
});

test('Monahan 覆蓋率:隨風速單調增加,且不超過 1', () => {
  let prev = 0;
  for (let u = 1; u <= 60; u++) {
    const w = whitecapCoverage(u);
    assert.ok(w >= prev);
    assert.ok(w <= 1);
    prev = w;
  }
});

/* 模擬海面:覆蓋率 = 門檻的線性函數,控制器應收斂到目標 */
function simulate(controller, plant, steps) {
  let state = controller.initial;
  for (let i = 0; i < steps; i++) state = controller.step(state, plant(state.threshold));
  return state;
}

test('控制器:覆蓋率太低時提高門檻並收斂到目標', () => {
  const controller = createFoamController({ target: 0.1, initialThreshold: 0.4 });
  const plant = (thr) => Math.max(0, (thr - 0.3) * 0.5);   // thr=0.5 → 0.1
  const end = simulate(controller, plant, 400);
  assert.ok(Math.abs(plant(end.threshold) - 0.1) < 0.01, `threshold ${end.threshold}`);
});

test('控制器:覆蓋率太高時降低門檻', () => {
  const controller = createFoamController({ target: 0.1, initialThreshold: 0.9 });
  const end = simulate(controller, (thr) => thr * 0.5, 400);
  assert.ok(end.threshold < 0.3, `threshold ${end.threshold}`);
});

test('控制器:門檻夾在安全範圍,且不改動舊狀態', () => {
  const controller = createFoamController({ target: 0.5, initialThreshold: 0.8, min: 0.2, max: 1.0 });
  const before = controller.initial;
  const end = simulate(controller, () => 0, 200);
  assert.equal(end.threshold, 1.0);
  assert.equal(before.threshold, 0.8);
});
