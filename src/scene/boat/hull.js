/* =========================================================
   船體:由斷面放樣(loft)出平滑曲面,取代原本擠出的折角多邊形
   ========================================================= */
import * as THREE from 'three';
import {
  sidePoint, stationX, heightParam, deckY, railY, halfWidthAt, deckAt,
  S_BILGE, V_RANGE
} from './hullProfile.js';
import { mesh, rod, tube } from '../parts.js';

const STATIONS = 80;
const SEG_BOTTOM = 14;
const SEG_TOP = 8;
const RING = SEG_BOTTOM + SEG_TOP + 1;

function sectionParam(j) {
  return j <= SEG_BOTTOM
    ? (j / SEG_BOTTOM) * S_BILGE
    : S_BILGE + ((j - SEG_BOTTOM) / SEG_TOP) * (1 - S_BILGE);
}

const vTex = (y, side) => {
  const vn = (y - V_RANGE.min) / (V_RANGE.max - V_RANGE.min);
  return side > 0 ? 0.5 + 0.5 * vn : 0.5 * vn;
};

function buildShellGeometry() {
  const positions = [], uvs = [], indices = [];
  [1, -1].forEach((side, sideIndex) => {
    const base = sideIndex * (STATIONS + 1) * RING;
    for (let i = 0; i <= STATIONS; i++) {
      const u = i / STATIONS;
      for (let j = 0; j < RING; j++) {
        const p = sidePoint(u, sectionParam(j));
        positions.push(p.x, p.y, p.z * side);
        uvs.push(u, vTex(p.y, side));
      }
    }
    for (let i = 0; i < STATIONS; i++) {
      for (let j = 0; j < RING - 1; j++) {
        const a = base + i * RING + j, b = a + RING, d = a + 1, c = b + 1;
        if (side > 0) indices.push(a, b, d, b, c, d);
        else indices.push(a, d, b, b, d, c);
      }
    }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/* 方艉板:u = 0 的斷面封口 */
function buildTransomGeometry() {
  const ring = [];
  for (let j = RING - 1; j >= 0; j--) ring.push(sidePoint(0, sectionParam(j)));
  const outline = [...ring.map((p) => ({ ...p, z: -p.z })), ...ring.slice().reverse()];
  const cy = outline.reduce((s, p) => s + p.y, 0) / outline.length;
  const cx = stationX(0, heightParam(0, cy));
  const positions = [cx, cy, 0];
  outline.forEach((p) => positions.push(p.x, p.y, p.z));
  const indices = [];
  for (let k = 1; k < outline.length; k++) indices.push(0, k, k + 1);
  indices.push(0, outline.length, 1); // 艉板頂邊(右舷舷牆頂 → 左舷舷牆頂)
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/* 甲板:沿舷弧起伏,中央微拱(排水用) */
function buildDeckGeometry() {
  const ACROSS = 10, ALONG = 60;
  const positions = [], uvs = [], indices = [];
  for (let i = 0; i <= ALONG; i++) {
    const u = (i / ALONG) * 0.985;
    const y0 = deckY(u);
    const w = Math.max(0.02, halfWidthAt(u, y0) - 0.06);
    const x = stationX(u, heightParam(u, y0));
    for (let k = 0; k <= ACROSS; k++) {
      const s = (k / ACROSS) * 2 - 1;
      const z = s * w;
      positions.push(x, y0 + 0.05 * (1 - s * s) * Math.min(1, w), z);
      uvs.push(x / 4, z / 3.36 + 0.5);
    }
  }
  for (let i = 0; i < ALONG; i++) {
    for (let k = 0; k < ACROSS; k++) {
      const a = i * (ACROSS + 1) + k, b = a + ACROSS + 1, d = a + 1, c = b + 1;
      indices.push(a, d, b, b, d, c);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function railPoint(u, side, dy = 0, out = 0) {
  const y = railY(u) + dy;
  return [stationX(u, heightParam(u, y)), y, side * (halfWidthAt(u, y) + out)];
}

/* 舷牆壓條:一條閉合曲線繞過船頭與艉板 */
function buildCapRail(mat) {
  const N = 40;
  const starboard = Array.from({ length: N + 1 }, (_, i) => railPoint(i / N, 1, 0.02, -0.02));
  const port = Array.from({ length: N + 1 }, (_, i) => railPoint(1 - i / N, -1, 0.02, -0.02));
  return tube([...starboard, ...port.slice(1, -1)], 0.055, mat, { closed: true, segments: 260 });
}

/* 防撞護舷條:甲板高度外側的半圓鋼條 */
function buildRubbingStrakes(mat) {
  const N = 30;
  return [1, -1].map((side) => {
    const pts = Array.from({ length: N + 1 }, (_, i) => {
      const u = 0.02 + (i / N) * 0.93;
      const y = deckY(u) - 0.1;
      return [stationX(u, heightParam(u, y)), y, side * (halfWidthAt(u, y) + 0.035)];
    });
    return tube(pts, 0.06, mat, { segments: 120, radial: 6 });
  });
}

/* 舊輪胎當護舷,用繩子吊在舷牆上 */
function buildFenders(group, mats) {
  for (const x of [-2.9, 0.55, 4.0]) {
    const d = deckAt(x);
    const y = d.y - 0.32;
    const z = halfWidthAt(d.u, y) + 0.13;
    const tire = mesh(new THREE.TorusGeometry(0.24, 0.09, 10, 24), mats.rubber, x, y, z);
    tire.rotation.y = 0.05;
    group.add(tire);
    group.add(rod([x, y + 0.3, z], [x, d.rail + 0.04, d.railHalfWidth - 0.02], 0.014, mats.rope));
  }
}

export function buildHull(mats) {
  const group = new THREE.Group();
  group.add(new THREE.Mesh(buildShellGeometry(), mats.hull));
  group.add(new THREE.Mesh(buildTransomGeometry(), mats.hullPlain));
  group.add(new THREE.Mesh(buildDeckGeometry(), mats.deck));
  group.add(buildCapRail(mats.white));
  buildRubbingStrakes(mats.steel).forEach((s) => group.add(s));
  buildFenders(group, mats);
  return group;
}
