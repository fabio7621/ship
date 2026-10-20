/* =========================================================
   燈室(燈座)細節
   ┌ 避雷針 / 風向標 / 通風球
   ├ 紅色圓頂 + 16 道肋條 + 屋頂扶手環 + 外挑滴水簷
   ├ 玻璃燈罩 + 斜交叉窗格(diagonal astragals,經典燈塔窗格,不擋光束)
   │   └ 內部:蜂巢狀菲涅耳透鏡(稜鏡環)+ 牛眼面板(隨光束旋轉)+ 燈芯
   └ 燈室基座牆:鐵門、銅框通風孔
   ========================================================= */
import * as THREE from 'three';
import { GALLERY_Y } from './tower.js';
import { mesh, rods, ring, roundedBox } from '../parts.js';

const G = GALLERY_Y;
const WALL_R = 1.5, WALL_H = 1.0;
const GLASS_R = 1.38, GLASS_Y0 = G + WALL_H + 0.06, GLASS_Y1 = G + 3.2;
const EAVE_Y = G + 3.4, DOME_TOP = G + 4.55;
export const LENS_Y = G + 2.1;
const TAU = Math.PI * 2;

function lathe(points, mat, segments = 48) {
  return new THREE.Mesh(new THREE.LatheGeometry(points.map(([r, y]) => new THREE.Vector2(r, y)), segments), mat);
}

function pedestalWall(mats) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(WALL_R, WALL_R + 0.05, WALL_H, 48), mats.whitePaint, 0, G + WALL_H / 2, 0));
  g.add(ring(WALL_R + 0.03, 0.05, G + WALL_H, mats.iron), ring(WALL_R + 0.06, 0.04, G + 0.05, mats.iron));
  // 鐵門(朝 +z,面向瞭望台入口)
  g.add(roundedBox(0.6, 0.85, 0.08, 0.02, mats.iron, 0, G + 0.45, WALL_R + 0.02));
  g.add(mesh(new THREE.SphereGeometry(0.035, 8, 6), mats.brass, 0.2, G + 0.45, WALL_R + 0.08));
  // 銅框圓形通風孔
  for (let i = 1; i < 8; i++) {
    const a = (i / 8) * TAU;
    const vent = new THREE.Group();
    vent.position.set(Math.sin(a) * (WALL_R + 0.01), G + 0.6, Math.cos(a) * (WALL_R + 0.01));
    vent.rotation.y = a;
    vent.add(mesh(new THREE.CircleGeometry(0.1, 16), mats.iron));
    vent.add(mesh(new THREE.TorusGeometry(0.11, 0.02, 6, 16), mats.brass));
    g.add(vent);
  }
  return g;
}

/* 玻璃 + 斜交叉窗格:16 根左旋 + 16 根右旋螺旋桿,上下框環 */
function glazing(mats) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(GLASS_R, GLASS_R, GLASS_Y1 - GLASS_Y0, 16, 1, true), mats.glass, 0, (GLASS_Y0 + GLASS_Y1) / 2, 0));
  const N = 16, SEGS = 6, twist = (TAU / N) * 2;
  const r = GLASS_R + 0.015;
  const pairs = [];
  for (const dir of [1, -1]) {
    for (let i = 0; i < N; i++) {
      const a0 = (i / N) * TAU;
      for (let s = 0; s < SEGS; s++) {
        const t0 = s / SEGS, t1 = (s + 1) / SEGS;
        const p = (t) => {
          const a = a0 + dir * twist * t;
          return [Math.sin(a) * r, GLASS_Y0 + (GLASS_Y1 - GLASS_Y0) * t, Math.cos(a) * r];
        };
        pairs.push([p(t0), p(t1)]);
      }
    }
  }
  g.add(rods(pairs, 0.022, mats.iron, 4));
  g.add(ring(r, 0.05, GLASS_Y0, mats.iron), ring(r, 0.05, GLASS_Y1, mats.iron));
  return g;
}

/* 滴水簷 + 紅色圓頂 + 肋條 + 屋頂扶手環 */
function dome(mats) {
  const g = new THREE.Group();
  g.add(lathe([[GLASS_R, GLASS_Y1], [GLASS_R + 0.1, GLASS_Y1 + 0.08], [1.78, EAVE_Y - 0.04], [1.78, EAVE_Y], [0, EAVE_Y]], mats.redPaint));
  const profile = [];
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    // 略帶洋蔥形的弧頂:下段較陡,上段收尖
    const r = 0.22 + (1.72 - 0.22) * Math.cos(t * Math.PI / 2) ** 0.85;
    profile.push([r, EAVE_Y + (DOME_TOP - EAVE_Y) * t ** 0.9]);
  }
  g.add(lathe([...profile, [0, DOME_TOP]], mats.redPaint));
  const ribs = [];
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * TAU, s = Math.sin(a), c = Math.cos(a);
    for (let i = 0; i < profile.length - 1; i++) {
      const [r0, y0] = profile[i], [r1, y1] = profile[i + 1];
      ribs.push([[s * (r0 + 0.025), y0, c * (r0 + 0.025)], [s * (r1 + 0.025), y1, c * (r1 + 0.025)]]);
    }
  }
  g.add(rods(ribs, 0.022, mats.redPaint, 4));
  g.add(ring(1.79, 0.035, EAVE_Y, mats.iron));

  // 屋頂扶手環(維修人員爬圓頂時抓的),8 根短支柱撐在圓頂上
  const railY = EAVE_Y + 0.62, railR = 1.22;
  const posts = [];
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * TAU + 0.2;
    posts.push([[Math.sin(a) * 1.38, EAVE_Y + 0.4, Math.cos(a) * 1.38], [Math.sin(a) * railR, railY, Math.cos(a) * railR]]);
  }
  g.add(rods(posts, 0.018, mats.iron, 4), ring(railR, 0.022, railY, mats.iron));
  return g;
}

/* 通風球、尖頂、避雷針、風向標 */
function finial(mats) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.32, 16), mats.iron, 0, DOME_TOP + 0.12, 0));
  g.add(mesh(new THREE.SphereGeometry(0.33, 24, 16), mats.redPaint, 0, DOME_TOP + 0.55, 0));
  g.add(ring(0.335, 0.02, DOME_TOP + 0.55, mats.iron));
  g.add(mesh(new THREE.ConeGeometry(0.1, 0.35, 12), mats.iron, 0, DOME_TOP + 1.03, 0));
  g.add(rods([[[0, DOME_TOP + 1.1, 0], [0, DOME_TOP + 2.2, 0]]], 0.018, mats.iron, 6));

  const vane = new THREE.Group();
  vane.position.set(0, DOME_TOP + 1.6, 0);
  vane.rotation.y = 0.9;
  vane.add(rods([[[-0.55, 0, 0], [0.55, 0, 0]]], 0.015, mats.iron, 4));
  vane.add(mesh(new THREE.ConeGeometry(0.06, 0.18, 8), mats.iron, 0.6, 0, 0).rotateZ(-Math.PI / 2));
  const tail = new THREE.Shape();
  tail.moveTo(0, -0.12); tail.lineTo(0.3, 0); tail.lineTo(0, 0.12); tail.closePath();
  vane.add(mesh(new THREE.ExtrudeGeometry(tail, { depth: 0.015, bevelEnabled: false }), mats.iron, -0.6, 0, -0.008));
  g.add(vane);
  // 方位字 N/S/E/W 的十字臂
  g.add(rods([[[-0.32, DOME_TOP + 1.35, 0], [0.32, DOME_TOP + 1.35, 0]], [[0, DOME_TOP + 1.35, -0.32], [0, DOME_TOP + 1.35, 0.32]]], 0.012, mats.iron, 4));
  return g;
}

/* 蜂巢狀菲涅耳透鏡:上下反射稜鏡環 + 中央折射帶(鋸齒輪廓 + flat shading 才看得出一圈圈稜鏡) */
function fresnelLens(mats) {
  const pts = [[0.001, -0.82]];
  for (let i = 0; i <= 7; i++) {           // 下段稜鏡環
    const y = -0.8 + i * 0.075, r = 0.38 + (0.68 - 0.38) * (i / 7);
    pts.push([r, y], [r + 0.06, y + 0.035]);
  }
  for (let i = 0; i <= 8; i++) {           // 中央折射帶
    const y = -0.2 + i * 0.05;
    pts.push([0.72, y], [0.75, y + 0.025]);
  }
  for (let i = 7; i >= 0; i--) {           // 上段稜鏡環
    const y = 0.8 - i * 0.075, r = 0.38 + (0.68 - 0.38) * (i / 7);
    pts.push([r + 0.06, y - 0.035], [r, y]);
  }
  pts.push([0.001, 0.82]);
  return lathe(pts, mats.lens, 32);
}

function lensAssembly(mats) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.08, 24), mats.brass, 0, GLASS_Y0 + 0.02, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.2, 0.26, LENS_Y - 0.85 - GLASS_Y0, 16), mats.iron, 0, (GLASS_Y0 + LENS_Y - 0.85) / 2, 0));

  // 旋轉部分:透鏡 + 牛眼面板 + 銅框(光束也掛在這個 rotor 上,方向永遠一致)
  const rotor = new THREE.Group();
  rotor.position.y = LENS_Y;
  rotor.add(fresnelLens(mats));
  for (const side of [1, -1]) {
    const panel = mesh(new THREE.PlaneGeometry(0.5, 0.56), mats.bullseye, side * 0.765, 0, 0);
    panel.rotation.y = side * Math.PI / 2;
    rotor.add(panel);
  }
  const frame = [];
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * TAU + TAU / 16;
    frame.push([[Math.sin(a) * 0.77, -0.85, Math.cos(a) * 0.77], [Math.sin(a) * 0.77, 0.85, Math.cos(a) * 0.77]]);
  }
  rotor.add(rods(frame, 0.018, mats.brass, 4));
  rotor.add(ring(0.77, 0.025, -0.85, mats.brass), ring(0.77, 0.025, 0.85, mats.brass), ring(0.77, 0.015, 0, mats.brass));
  g.add(rotor);

  // 不放 PointLight:每多一盞燈,場景裡所有受光材質的 shader 都要多算一次,
  // 150m 外看不出差別;發光靠透鏡 emissive + 燈芯 HDR + Bloom
  g.add(mesh(new THREE.SphereGeometry(0.1, 16, 12), mats.lampCore, 0, LENS_Y, 0));
  return { group: g, rotor };
}

export function buildLantern(mats) {
  const group = new THREE.Group();
  const lens = lensAssembly(mats);
  group.add(pedestalWall(mats), lens.group, glazing(mats), dome(mats), finial(mats));
  return { group, rotor: lens.rotor };
}
