/* =========================================================
   燈塔塔身:八角基座 → 下寬上窄的塔身 → 外挑托座 → 環形瞭望台 + 欄杆
   以及守塔人小屋、崖邊護欄
   區域座標:燈塔中心在原點,y 為海拔,+z 朝海
   ========================================================= */
import * as THREE from 'three';
import { CLIFF_TOP } from './headland.js';
import { mesh, roundedBox, rods, ring } from '../parts.js';

const PLINTH_TOP = CLIFF_TOP + 0.9;
const TOWER_H = 12;
const TOWER_TOP = PLINTH_TOP + TOWER_H;
const R_BASE = 2.0, R_TOP = 1.5;
export const GALLERY_Y = TOWER_TOP + 0.5;   // 瞭望台頂面
const GALLERY_R = 2.5;

function lathe(points, mat, segments = 40) {
  return new THREE.Mesh(new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(r, y)), segments), mat);
}

function plinth(mats) {
  const g = new THREE.Group();
  const base = mesh(new THREE.CylinderGeometry(3.0, 3.2, 1.5, 8), mats.concrete, 0, PLINTH_TOP - 0.75, 0);
  base.rotation.y = Math.PI / 8;
  g.add(base);
  // 往海側(+z)的入口台階
  for (let i = 0; i < 4; i++) {
    g.add(mesh(new THREE.BoxGeometry(1.4, 0.22, 0.4), mats.concrete, 0, CLIFF_TOP + 0.11 + i * 0.22, 3.6 - i * 0.35));
  }
  return g;
}

/* 塔身輪廓:基部略外擴的凹曲線(石造燈塔典型的收分) */
function towerBody(mats) {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push([R_TOP + (R_BASE - R_TOP) * (1 - t) ** 1.7, PLINTH_TOP + t * TOWER_H]);
  }
  return lathe([[0, PLINTH_TOP], ...pts, [0, TOWER_TOP]], mats.tower, 48);
}

function entrance(mats) {
  const g = new THREE.Group();
  const z = R_BASE - 0.02;
  g.add(roundedBox(1.1, 2.0, 0.3, 0.05, mats.whitePaint, 0, PLINTH_TOP + 1.0, z));
  g.add(roundedBox(0.8, 1.75, 0.12, 0.02, mats.redPaint, 0, PLINTH_TOP + 0.9, z + 0.12));
  g.add(mesh(new THREE.BoxGeometry(0.9, 0.08, 0.5), mats.whitePaint, 0, PLINTH_TOP + 2.05, z + 0.12));
  g.add(mesh(new THREE.SphereGeometry(0.09, 10, 8), mats.doorLamp, 0, PLINTH_TOP + 2.3, z + 0.25));
  return g;
}

/* 外挑托座 + 瞭望台平台 + 托架 */
function gallery(mats) {
  const g = new THREE.Group();
  g.add(lathe([[R_TOP - 0.05, TOWER_TOP - 0.7], [R_TOP + 0.15, TOWER_TOP - 0.35],
    [R_TOP + 0.55, TOWER_TOP - 0.05], [GALLERY_R - 0.1, TOWER_TOP + 0.25], [0, TOWER_TOP + 0.25]], mats.whitePaint));
  g.add(mesh(new THREE.CylinderGeometry(GALLERY_R, GALLERY_R, 0.25, 48), mats.concrete, 0, GALLERY_Y - 0.125, 0));
  const brackets = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    brackets.push([[c * (R_TOP + 0.05), TOWER_TOP - 0.9, s * (R_TOP + 0.05)], [c * (GALLERY_R - 0.15), GALLERY_Y - 0.25, s * (GALLERY_R - 0.15)]]);
  }
  g.add(rods(brackets, 0.06, mats.iron, 4));
  return g;
}

/* 瞭望台欄杆:32 根立柱 + 上下兩道扶手 */
function galleryRailing(mats) {
  const g = new THREE.Group();
  const r = GALLERY_R - 0.08, h = 1.05;
  const posts = [];
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    posts.push([[Math.cos(a) * r, GALLERY_Y, Math.sin(a) * r], [Math.cos(a) * r, GALLERY_Y + h, Math.sin(a) * r]]);
  }
  g.add(rods(posts, 0.025, mats.iron, 4));
  g.add(ring(r, 0.035, GALLERY_Y + h, mats.iron), ring(r, 0.02, GALLERY_Y + h * 0.5, mats.iron), ring(r, 0.02, GALLERY_Y + 0.12, mats.iron));
  return g;
}

/* 守塔人小屋:白牆、陡斜屋頂、煙囪、亮著的窗 */
function keeperHouse(mats) {
  const g = new THREE.Group();
  g.position.set(-8.5, CLIFF_TOP, -1.5);
  g.rotation.y = 0.12;
  const W = 5.2, D = 3.6, H = 2.6;
  g.add(roundedBox(W, H + 0.6, D, 0.05, mats.whitePaint, 0, (H - 0.6) / 2, 0));
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-D / 2 - 0.3, 0);
  roofShape.lineTo(0, 1.8);
  roofShape.lineTo(D / 2 + 0.3, 0);
  roofShape.closePath();
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: W + 0.4, bevelEnabled: false });
  roofGeo.translate(0, 0, -(W + 0.4) / 2);
  const roof = mesh(roofGeo, mats.roofTile, 0, H, 0);
  roof.rotation.y = Math.PI / 2;
  g.add(roof);
  g.add(roundedBox(0.5, 1.6, 0.5, 0.03, mats.concrete, 1.4, H + 1.2, -0.5));
  for (const x of [-1.5, 0.3]) {
    g.add(mesh(new THREE.PlaneGeometry(0.75, 0.9), mats.windowLit, x, 1.3, D / 2 + 0.01));
    g.add(mesh(new THREE.BoxGeometry(0.85, 0.06, 0.1), mats.whitePaint, x, 0.82, D / 2 + 0.05));
  }
  g.add(mesh(new THREE.PlaneGeometry(0.85, 1.9), mats.redPaint, 1.7, 0.95, D / 2 + 0.01));
  return g;
}

/* 崖邊護欄:沿崖邊線、貼著實際地形高度 */
function cliffFence(mats, terrain) {
  const pairs = [];
  let prev = null;
  for (let x = -16; x <= 7; x += 1.6) {
    const z = terrain.edgeZ(x) - 1.6;
    const y = terrain.heightAt(x, z);
    const top = [x, y + 1.0, z];
    pairs.push([[x, y - 0.3, z], top]);
    if (prev) pairs.push([prev, top], [[prev[0], prev[1] - 0.45, prev[2]], [x, y + 0.55, z]]);
    prev = top;
  }
  return rods(pairs, 0.04, mats.iron, 4);
}

/** @param {{ edgeZ: (x:number)=>number, heightAt: (x:number, z:number)=>number }} terrain */
export function buildTower(mats, terrain) {
  const group = new THREE.Group();
  group.add(plinth(mats), towerBody(mats), entrance(mats), gallery(mats), galleryRailing(mats),
    keeperHouse(mats), cliffFence(mats, terrain));
  return group;
}
