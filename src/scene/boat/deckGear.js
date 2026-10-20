/* =========================================================
   甲板裝備(舷拖網漁船 side trawler 配置)
   右舷:前後兩座龍門吊架 + 掛在外側的網板 → 鏡頭這側的輪廓最豐富
   ========================================================= */
import * as THREE from 'three';
import { deckAt, halfWidthAt } from './hullProfile.js';
import { mesh, roundedBox, rod, tube, drumZ } from '../parts.js';

const GALLOWS_X = [2.7, -0.75];
const WINCH_X = -0.15;

function seeded(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/* 龍門吊架:倒 U 形彎管,頂端伸出舷外掛滑輪 */
function gallows(mats, x0, side) {
  const g = new THREE.Group();
  const a = deckAt(x0 - 0.42), c = deckAt(x0), b = deckAt(x0 + 0.42);
  const pts = [
    [x0 - 0.42, a.y, side * (a.halfWidth - 0.12)],
    [x0 - 0.4, a.y + 1.0, side * (a.railHalfWidth + 0.04)],
    [x0, c.y + 1.55, side * (c.railHalfWidth + 0.32)],
    [x0 + 0.4, b.y + 1.0, side * (b.railHalfWidth + 0.04)],
    [x0 + 0.42, b.y, side * (b.halfWidth - 0.12)]
  ];
  g.add(tube(pts, 0.065, mats.rust, { segments: 40 }));
  const block = [x0, c.y + 1.33, side * (c.railHalfWidth + 0.3)];
  const sheave = mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.07, 16), mats.steel, ...block);
  sheave.rotation.z = Math.PI / 2;
  g.add(sheave, rod([x0, c.y + 1.5, block[2]], block, 0.025, mats.steel));
  return { group: g, block };
}

/* 網板(otter board):靠在船殼外側,底部有耐磨鋼靴 */
function trawlDoor(mats, x0, block) {
  const g = new THREE.Group();
  const d = deckAt(x0);
  const yc = d.y - 0.1;
  const z = halfWidthAt(d.u, yc) + 0.16;
  const shape = new THREE.Shape();
  const w = 0.62, h = 0.36, r = 0.12;
  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h); shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r); shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h); shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r); shape.quadraticCurveTo(-w, -h, -w + r, -h);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  g.add(mesh(geo, mats.rust, 0, 0, -0.03));
  g.add(mesh(new THREE.BoxGeometry(w * 2.05, 0.07, 0.12), mats.steel, 0, -h - 0.02, 0.02));
  for (const bx of [-0.25, 0.25]) g.add(mesh(new THREE.BoxGeometry(0.06, 0.4, 0.08), mats.steel, bx, 0.05, 0.07));
  g.position.set(x0, yc, z);
  g.rotation.x = 0.12;
  const chains = new THREE.Group();
  for (const cx of [-0.3, 0.3]) chains.add(rod(block, [x0 + cx, yc + h, z + 0.05], 0.014, mats.steel));
  return [g, chains];
}

/* 拖網絞機:雙捲筒 + 兩端繳纜頭,鋼索拉到龍門吊架滑輪 */
function winch(mats, blocks) {
  const g = new THREE.Group();
  const y = deckAt(WINCH_X).y;
  g.add(roundedBox(0.9, 0.22, 1.9, 0.03, mats.machinery, WINCH_X, y + 0.11, 0));
  g.add(roundedBox(0.5, 0.5, 0.32, 0.04, mats.machinery, WINCH_X, y + 0.45, 0));
  for (const s of [1, -1]) {
    const zc = s * 0.45;
    g.add(drumZ(0.24, 0.42, mats.rigging, WINCH_X, y + 0.52, zc));
    g.add(drumZ(0.34, 0.04, mats.machinery, WINCH_X, y + 0.52, zc + 0.23));
    g.add(drumZ(0.34, 0.04, mats.machinery, WINCH_X, y + 0.52, zc - 0.23));
    g.add(roundedBox(0.5, 0.42, 0.06, 0.02, mats.machinery, WINCH_X, y + 0.36, s * 0.75));
    const head = mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.24, 16), mats.steel, WINCH_X, y + 0.52, s * 0.92);
    head.rotation.x = s * Math.PI / 2;
    g.add(head);
  }
  for (const block of blocks) g.add(rod([WINCH_X, y + 0.75, 0.45], block, 0.012, mats.rigging));
  return g;
}

function fishHatch(mats) {
  const g = new THREE.Group();
  const x = 0.75, y = deckAt(x).y;
  g.add(roundedBox(1.1, 0.36, 1.1, 0.04, mats.machinery, x, y + 0.16, 0));
  g.add(roundedBox(1.2, 0.06, 1.2, 0.02, mats.steel, x, y + 0.36, 0));
  for (const [dx, dz] of [[0.6, 0], [-0.6, 0], [0, 0.6], [0, -0.6]]) {
    g.add(mesh(new THREE.BoxGeometry(dz ? 0.16 : 0.05, 0.1, dz ? 0.05 : 0.16), mats.steel, x + dx, y + 0.3, dz));
  }
  return g;
}

/* 堆在甲板上的漁網:隨機起伏的扁球 + 浮球 */
function netPile(mats) {
  const g = new THREE.Group();
  const rand = seeded(42);
  const x = 2.35, z = -0.8, y = deckAt(x).y;
  const geo = new THREE.IcosahedronGeometry(0.6, 3);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const k = 0.82 + rand() * 0.3;
    p.setXYZ(i, p.getX(i) * 1.45 * k, Math.max(p.getY(i), -0.15) * 0.38 * k, p.getZ(i) * 0.8 * k);
  }
  geo.computeVertexNormals();
  g.add(mesh(geo, mats.net, x, y + 0.06, z));
  for (let i = 0; i < 7; i++) {
    const a = rand() * Math.PI * 2, r = 0.2 + rand() * 0.5;
    g.add(mesh(new THREE.SphereGeometry(0.07, 12, 8), mats.float, x + Math.cos(a) * r * 1.3, y + 0.16 + rand() * 0.06, z + Math.sin(a) * r * 0.6));
  }
  return g;
}

function fishCrates(mats) {
  const g = new THREE.Group();
  const rand = seeded(7);
  const x = 2.05, y = deckAt(x).y;
  const stack = [[0, 0, 0.6, mats.crateBlue], [0.05, 1, 0.62, mats.crateBlue], [0.65, 0, 0.55, mats.crateRed]];
  for (const [dx, level, z, mat] of stack) {
    const crate = roundedBox(0.6, 0.24, 0.4, 0.02, mat, x + dx, y + 0.12 + level * 0.25, z);
    crate.rotation.y = (rand() - 0.5) * 0.3;
    g.add(crate);
  }
  return g;
}

function windlass(mats) {
  const g = new THREE.Group();
  const x = 4.35, y = deckAt(x).y;
  g.add(roundedBox(0.5, 0.18, 0.9, 0.03, mats.machinery, x, y + 0.09, 0));
  g.add(drumZ(0.12, 0.7, mats.machinery, x, y + 0.32, 0));
  for (const s of [1, -1]) g.add(drumZ(0.2, 0.08, mats.steel, x, y + 0.32, s * 0.28));
  for (const s of [1, -1]) g.add(rod([x + 0.05, y + 0.22, s * 0.28], [5.0, deckAt(5.0).y + 0.02, s * 0.3], 0.025, mats.steel));
  return g;
}

function bollard(mats, x, z) {
  const g = new THREE.Group();
  const y = deckAt(x).y;
  g.add(roundedBox(0.4, 0.04, 0.18, 0.01, mats.steel, x, y + 0.02, z));
  for (const dx of [-0.11, 0.11]) {
    g.add(mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.26, 14), mats.steel, x + dx, y + 0.15, z));
    g.add(mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.03, 14), mats.steel, x + dx, y + 0.29, z));
  }
  return g;
}

function ropeCoil(mats, x, z) {
  const g = new THREE.Group();
  const y = deckAt(x).y;
  for (let i = 0; i < 3; i++) {
    const coil = mesh(new THREE.TorusGeometry(0.22 - i * 0.02, 0.04, 8, 24), mats.rope, x, y + 0.05 + i * 0.06, z);
    coil.rotation.x = Math.PI / 2;
    g.add(coil);
  }
  return g;
}

export function buildDeckGear(mats) {
  const group = new THREE.Group();
  const blocks = [];
  for (const x0 of GALLOWS_X) {
    for (const side of [1, -1]) {
      const gal = gallows(mats, x0, side);
      group.add(gal.group);
      if (side > 0) {
        blocks.push(gal.block);
        group.add(...trawlDoor(mats, x0, gal.block));
      }
    }
  }
  group.add(winch(mats, blocks), fishHatch(mats), netPile(mats), fishCrates(mats), windlass(mats));
  for (const [x, zs] of [[-4.65, 1.0], [0.3, 1.3], [4.9, 0.32]]) {
    group.add(bollard(mats, x, zs), bollard(mats, x, -zs));
  }
  group.add(ropeCoil(mats, -4.6, 0.0));
  return group;
}
