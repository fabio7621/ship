/* =========================================================
   船頭破浪水花
   - 持續水花:船頭插進浪裡越深、越快,往兩側甩出的水越多
   - 拍擊爆發:船頭砸進浪頭時一次大量水片 + 水霧
   - 視風:頂風 + 船速讓水滴被往船尾吹,越細的水霧被吹得越快
   ========================================================= */
import * as THREE from 'three';
import { halfBeam, uAtX, WATERLINE_Y } from './boat/hullProfile.js';
import { createSprayPoints } from './sprayPoints.js';

const MAX = 4000;
const GRAVITY = 9.8;
const APPARENT_WIND = -12;       // m/s,沿 -x
const SLAM_RATE = 1.6;           // 船頭入水速度超過此值 → 拍擊爆發
const SLAM_COOLDOWN = 0.45;

const rand = (a, b) => a + Math.random() * (b - a);

/** @param {THREE.Scene} scene @param {{ fogDensity: number }} opts */
export function createSpray(scene, { fogDensity }) {
  const { pos, size, alpha, commit, setSize } = createSprayPoints(scene, MAX, {
    color: new THREE.Color(0x9fb0c0).multiplyScalar(0.55), fogDensity
  });
  const vel = new Float32Array(MAX * 3);
  const life = new Float32Array(MAX);
  const maxLife = new Float32Array(MAX).fill(1);
  const baseAlpha = new Float32Array(MAX);
  const mist = new Uint8Array(MAX);

  let next = 0;
  let carry = 0;
  let lastSlam = -10;
  const _p = new THREE.Vector3();
  const _v = new THREE.Vector3();
  const _local = new THREE.Vector3();
  const _localVel = new THREE.Vector3();

  function emit(boat, local, localVel, opts) {
    const j = next;
    next = (next + 1) % MAX;
    boat.localToWorld(_p.copy(local));
    _v.copy(localVel).applyQuaternion(boat.quaternion);
    pos.set([_p.x, _p.y, _p.z], j * 3);
    vel.set([_v.x, _v.y, _v.z], j * 3);
    maxLife[j] = life[j] = opts.life;
    baseAlpha[j] = opts.alpha;
    size[j] = opts.size;
    mist[j] = opts.mist ? 1 : 0;
  }

  /* 從船頭兩側水線附近甩出;energy 0~1+ 決定速度與高度 */
  function emitBowDroplet(boat, side, energy, waterY, isMist) {
    const x = rand(3.9, 5.5);
    const hw = halfBeam(Math.min(1, Math.max(0, uAtX(x, () => WATERLINE_Y))));
    const local = _local.set(x, waterY + rand(-0.05, 0.25), side * (hw + 0.08));
    const up = rand(1.2, 3.0) + energy * rand(1.5, 5.0);
    const out = rand(1.2, 2.8) + energy * rand(0.8, 3.5);
    _localVel.set(rand(-0.5, 1.5), isMist ? up * 0.5 : up, side * (isMist ? out * 0.6 : out));
    emit(boat, local, _localVel, isMist
      ? { life: rand(1.2, 2.2), alpha: rand(0.03, 0.07), size: rand(1.0, 2.4), mist: true }
      : { life: rand(0.6, 1.3), alpha: rand(0.5, 0.95), size: rand(0.03, 0.1), mist: false });
  }

  function spawn(dt, t, boat, floater) {
    const push = Math.min(1.6, Math.max(0, floater.bowImmersion + 0.35));
    const plunge = Math.min(4, Math.max(0, floater.bowRate));
    const waterY = WATERLINE_Y + Math.min(1.2, Math.max(-0.3, floater.bowImmersion)) * 0.8;

    carry += (30 + 230 * push + 340 * plunge) * dt;
    for (; carry >= 1; carry--) {
      for (const side of [1, -1]) emitBowDroplet(boat, side, push * 0.4 + plunge * 0.3, waterY, Math.random() < 0.1);
    }

    if (plunge > SLAM_RATE && t - lastSlam > SLAM_COOLDOWN) {
      lastSlam = t;
      const energy = 0.8 + plunge * 0.45;
      for (let i = 0; i < 340 * energy; i++) emitBowDroplet(boat, i % 2 ? 1 : -1, energy, waterY, i % 5 === 0);
    }
  }

  function integrate(dt) {
    for (let j = 0; j < MAX; j++) {
      if (life[j] <= 0) { alpha[j] = 0; continue; }
      life[j] -= dt;
      const o = j * 3;
      const isMist = mist[j] === 1;
      const drag = Math.exp(-dt * (isMist ? 1.6 : 0.35));
      vel[o] += (APPARENT_WIND - vel[o]) * dt * (isMist ? 1.2 : 0.22);
      vel[o + 1] = vel[o + 1] * drag - GRAVITY * (isMist ? 0.12 : 1) * dt;
      vel[o + 2] *= drag;
      pos[o] += vel[o] * dt;
      pos[o + 1] += vel[o + 1] * dt;
      pos[o + 2] += vel[o + 2] * dt;
      const k = Math.max(0, life[j] / maxLife[j]);
      const fadeIn = Math.min(1, (maxLife[j] - life[j]) * 10);
      alpha[j] = life[j] > 0 && pos[o + 1] > -3 ? baseAlpha[j] * fadeIn * Math.pow(k, 0.7) : 0;
    }
  }

  function update(dt, t, boat, floater, flash) {
    spawn(dt, t, boat, floater);
    integrate(dt);
    commit(flash);
  }

  return { update, setSize };
}
