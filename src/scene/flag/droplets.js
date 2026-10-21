/* =========================================================
   旗尾甩出的水滴
   - 水量:暴雨質量通量 × 旗面面積 → 每秒落到旗上的 2mm 雨滴數,一顆點精靈代表 BUNDLE 顆
   - 脫離:旗尾加速度超過表面張力撐得住的值(2mm 水滴約 11g)才甩得掉
   - 飛行:重力 + 往視風鬆弛,時間常數 τ = Vt/g(2mm 雨滴 Vt ≈ 6.5 m/s → τ ≈ 0.66s)
   ========================================================= */
import * as THREE from 'three';
import { createSprayPoints } from '../sprayPoints.js';
import { RAIN_RATE, WATER_DENSITY, waterDetachAccel } from '../../physics/flagAero.js';

const MAX = 500;
const DROP_D = 0.002;
const BUNDLE = 25;
const TAU = 6.5 / 9.81;
const LIFE = 1.3;
const DETACH = waterDetachAccel(DROP_D);

const dropMass = WATER_DENSITY * Math.PI * DROP_D ** 3 / 6;
const rand = (a, b) => a + Math.random() * (b - a);

/** @param {THREE.Scene} scene @param {{ fogDensity: number, area: number }} opts */
export function createFlagDroplets(scene, { fogDensity, area }) {
  const { pos, size, alpha, commit, setSize } = createSprayPoints(scene, MAX, {
    color: new THREE.Color(0xa9bccd).multiplyScalar(0.6), fogDensity
  });
  const vel = new Float32Array(MAX * 3);
  const life = new Float32Array(MAX);
  const spritesPerSecond = (WATER_DENSITY * (RAIN_RATE / 1000 / 3600) * area) / dropMass / BUNDLE;
  let edgeVel = null, accel = null;   // 旗尾那一欄上一幀的速度、這一幀的加速度
  let next = 0, carry = 0;
  const air = [0, 0, 0];

  function emit(cloth, i) {
    const j = next;
    next = (next + 1) % MAX;
    const o = i * 3;
    pos.set([cloth.pos[o], cloth.pos[o + 1], cloth.pos[o + 2]], j * 3);
    vel.set([cloth.vel[o] + rand(-0.6, 0.6), cloth.vel[o + 1] + rand(-0.6, 0.6), cloth.vel[o + 2] + rand(-0.6, 0.6)], j * 3);
    life[j] = LIFE * rand(0.6, 1);
    size[j] = rand(0.025, 0.05);
  }

  /* 旗尾那一欄:加速度夠大的點才把水甩出去 */
  function spawn(dt, cloth) {
    const { rows, cols } = cloth;
    if (!edgeVel) {
      edgeVel = new Float64Array(rows * 3);
      accel = new Float64Array(rows);
    }
    carry += spritesPerSecond * dt;
    for (let r = 0; r < rows; r++) {
      const o = (r * cols + cols - 1) * 3;
      const ax = cloth.vel[o] - edgeVel[r * 3], ay = cloth.vel[o + 1] - edgeVel[r * 3 + 1], az = cloth.vel[o + 2] - edgeVel[r * 3 + 2];
      accel[r] = Math.sqrt(ax * ax + ay * ay + az * az) / dt;
      edgeVel.set([cloth.vel[o], cloth.vel[o + 1], cloth.vel[o + 2]], r * 3);
    }
    for (; carry >= 1; carry--) {
      const r = Math.floor(Math.random() * rows);
      if (accel[r] > DETACH) emit(cloth, r * cols + cols - 1);
    }
  }

  function integrate(dt, field) {
    for (let j = 0; j < MAX; j++) {
      if (life[j] <= 0) { alpha[j] = 0; continue; }
      life[j] -= dt;
      const o = j * 3;
      field.meanAt(pos[o + 1], air);
      vel[o] += ((air[0] - vel[o]) / TAU) * dt;
      vel[o + 1] += (-9.81 + (air[1] - vel[o + 1]) / TAU) * dt;
      vel[o + 2] += ((air[2] - vel[o + 2]) / TAU) * dt;
      pos[o] += vel[o] * dt; pos[o + 1] += vel[o + 1] * dt; pos[o + 2] += vel[o + 2] * dt;
      alpha[j] = life[j] > 0 ? 0.55 * Math.min(1, life[j] / 0.4) : 0;
    }
  }

  /** @param {number} dt @param {object} cloth @param {{ meanAt: Function }} field @param {number} flash */
  function update(dt, cloth, field, flash) {
    if (dt > 0) spawn(dt, cloth);
    integrate(dt, field);
    commit(flash);
  }

  return { update, setSize };
}
