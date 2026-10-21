import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exteriorPose } from '../src/camera.js';
import { ZOOM, wheelZoomTarget, wheelDeltaPx, liftAboveSea } from '../src/cameraZoom.js';

test('外部鏡頭:zoom 只改變鏡頭到注視點的距離,注視點不動', () => {
  const far = exteriorPose(3, 0.2, 1);
  const near = exteriorPose(3, 0.2, 0.5);
  assert.deepEqual(near.look.toArray(), far.look.toArray());
  const dFar = far.pos.distanceTo(far.look), dNear = near.pos.distanceTo(near.look);
  assert.ok(Math.abs(dNear - dFar * 0.5) < 1e-9, `${dNear} vs ${dFar}`);
});

test('外部鏡頭:預設 zoom 比原本(1)更靠近船', () => {
  assert.ok(ZOOM.initial < 1);
  const d = exteriorPose(0, 0).pos.distanceTo(exteriorPose(0, 0).look);
  const orig = exteriorPose(0, 0, 1).pos.distanceTo(exteriorPose(0, 0, 1).look);
  assert.ok(d < orig * 0.85, `${d} vs ${orig}`);
});

test('滾輪:往前滾(deltaY < 0)拉近,往後滾拉遠', () => {
  assert.ok(wheelZoomTarget(1, -100) < 1);
  assert.ok(wheelZoomTarget(1, 100) > 1);
});

test('滾輪:縮放有上下限,連續滾不會超出', () => {
  let z = ZOOM.initial;
  for (let i = 0; i < 200; i++) z = wheelZoomTarget(z, -120);
  assert.equal(z, ZOOM.min);
  for (let i = 0; i < 400; i++) z = wheelZoomTarget(z, 120);
  assert.equal(z, ZOOM.max);
});

test('滾輪:同樣滾動量,拉近再拉遠回到原處(指數縮放)', () => {
  const z = wheelZoomTarget(wheelZoomTarget(0.8, -90), 90);
  assert.ok(Math.abs(z - 0.8) < 1e-12);
});

test('滾輪 deltaMode:行 / 頁單位換算成像素', () => {
  assert.equal(wheelDeltaPx({ deltaY: 3, deltaMode: 1 }), 48);
  assert.equal(wheelDeltaPx({ deltaY: 1, deltaMode: 2 }, 800), 800);
  assert.equal(wheelDeltaPx({ deltaY: 50, deltaMode: 0 }), 50);
});

test('鏡頭不鑽進浪裡:低於海面 + 間隙時抬高,夠高時不動', () => {
  assert.equal(liftAboveSea(5, 1), 5);
  assert.equal(liftAboveSea(1.2, 1.5), 1.5 + ZOOM.seaClearance);
});
