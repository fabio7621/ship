import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  localGravity, createSway, stepSway, createRoller, stepRoller
} from '../src/physics/cabinMotion.js';

const close = (a, b, eps = 1e-9) => Math.abs(a - b) < eps;

test('localGravity:船身水平時重力朝正下方', () => {
  const g = localGravity(0, 0);
  assert.ok(close(g.x, 0) && close(g.y, -1) && close(g.z, 0));
});

test('localGravity:船頭抬起 → 重力偏向船尾(-x);右舷下沉 → 偏向 +z', () => {
  assert.ok(localGravity(0.2, 0).x < 0);
  assert.ok(localGravity(0, 0.2).z > 0);
});

test('localGravity:永遠是單位向量', () => {
  for (const [p, r] of [[0.3, -0.2], [-0.5, 0.4], [1.2, 0.9]]) {
    const g = localGravity(p, r);
    assert.ok(close(Math.hypot(g.x, g.y, g.z), 1));
  }
});

test('stepSway:收斂到目標', () => {
  const s = createSway({ freq: 1.2, damping: 0.8 });
  for (let i = 0; i < 600; i++) stepSway(s, 0.1, -0.05, 1 / 60);
  assert.ok(close(s.x, 0.1, 1e-4) && close(s.z, -0.05, 1e-4), `${s.x}, ${s.z}`);
});

test('stepSway:阻尼小時目標一跳會超過頭(擺盪)', () => {
  const s = createSway({ freq: 1.2, damping: 0.15 });
  let peak = 0;
  for (let i = 0; i < 120; i++) {
    stepSway(s, 0.1, 0, 1 / 60);
    peak = Math.max(peak, s.x);
  }
  assert.ok(peak > 0.12, `peak ${peak}`);
});

test('stepSway:與幀率脫鉤(60Hz 與 144Hz 走 1.5 秒結果相近)', () => {
  const a = createSway({ freq: 1.5, damping: 0.3 });
  const b = createSway({ freq: 1.5, damping: 0.3 });
  for (let i = 0; i < 90; i++) stepSway(a, 0.2, 0.1, 1 / 60);
  for (let i = 0; i < 216; i++) stepSway(b, 0.2, 0.1, 1 / 144);
  assert.ok(close(a.x, b.x, 2e-3) && close(a.z, b.z, 2e-3), `${a.x} vs ${b.x}`);
});

test('stepSway:dt 超大(分頁切回來)也不會爆掉', () => {
  const s = createSway({ freq: 3, damping: 0.1 });
  stepSway(s, 0.1, 0.1, 5);
  assert.ok(Number.isFinite(s.x) && Math.abs(s.x) < 1);
});

test('stepRoller:被擋條限制在範圍內', () => {
  const r = createRoller({ min: -0.3, max: 0.3 });
  for (let i = 0; i < 300; i++) stepRoller(r, 2, 1 / 60);
  assert.ok(r.p <= 0.3 && r.p >= -0.3);
  assert.ok(close(r.p, 0.3, 1e-6));
});

test('stepRoller:撞到擋條會反彈(速度反向且變小)', () => {
  const r = createRoller({ min: -0.3, max: 0.3, restitution: 0.4, friction: 0 });
  r.p = 0.29; r.v = 1;
  stepRoller(r, 0, 1 / 60);
  assert.ok(r.v < 0 && r.v > -1);
});

test('stepRoller:水平桌面上摩擦力讓它停下', () => {
  const r = createRoller({ min: -1, max: 1, friction: 0.6 });
  r.v = 0.3;
  for (let i = 0; i < 600; i++) stepRoller(r, 0, 1 / 60);
  assert.ok(Math.abs(r.v) < 1e-6, `v ${r.v}`);
});
