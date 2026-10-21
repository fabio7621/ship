/* =========================================================
   後牆上的漁夫裝備:掛在木釘上的黃色漁夫雨帽(sou'wester)+ 橘白救生圈
   雨帽:旋轉體 → 帽簷前短後長、往下垂(擋雨水流進後頸),表面有車縫線;隨船輕輕晃
   救生圈:反光帶 + 四段垂掛的抓繩 + 船籍號,掛在兩個托架上
   ========================================================= */
import * as THREE from 'three';
import { mesh, rod, tube } from '../parts.js';
import { CABIN } from './layout.js';
import { toTexture } from './textures.js';

const PEG = new THREE.Vector3(CABIN.rear, 2.2, -0.76);       // 帽子木釘(後牆左側,救生圈旁邊)
const PEG_LEN = 0.17;                                        // 夠長,帽簷才不會碰到牆
const HAT_SCALE = 0.8;                                       // 帽簷前後約 35cm
const HAT_TILT = -1.12;                                      // 帽頂朝外、略朝上
const RING = { center: new THREE.Vector3(CABIN.rear + 0.065, 2.02, -0.24), R: 0.21, r: 0.05 };
const TAU = Math.PI * 2;

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

/* 帽子貼圖:u 繞一圈、v 沿剖面(帽頂 → 帽簷);帽頂六片縫線、帽簷一圈圈車縫 */
function makeHatTexture() {
  const [c, g] = canvas(512, 256);
  g.fillStyle = '#e0aa12'; g.fillRect(0, 0, 512, 256);
  const shade = g.createLinearGradient(0, 0, 0, 256);
  shade.addColorStop(0, 'rgba(255,230,140,0.25)'); shade.addColorStop(1, 'rgba(90,60,0,0.25)');
  g.fillStyle = shade; g.fillRect(0, 0, 512, 256);
  g.strokeStyle = 'rgba(110,75,0,0.55)'; g.lineWidth = 1.5;
  g.setLineDash([5, 4]);
  for (let i = 0; i < 6; i++) { const x = (i / 6) * 512; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 150); g.stroke(); }
  for (const y of [158, 182, 206, 230]) { g.beginPath(); g.moveTo(0, y); g.lineTo(512, y); g.stroke(); }
  g.setLineDash([]);
  g.fillStyle = 'rgba(70,50,10,0.18)';                       // 帽簷邊緣的髒污
  g.fillRect(0, 238, 512, 18);
  return toTexture(c);
}

/* 救生圈貼圖:u 繞大圓、v 繞管子;正面(v ≈ 0.25)寫船籍號 */
function makeRingTexture() {
  const [c, g] = canvas(1024, 128);
  g.fillStyle = '#e4511e'; g.fillRect(0, 0, 1024, 128);
  g.fillStyle = '#ece8dc';
  for (let i = 0; i < 4; i++) g.fillRect(i * 256 + 108, 0, 40, 128);   // 四條白色反光帶(抓繩固定處)
  g.fillStyle = 'rgba(25,20,15,0.85)'; g.font = 'bold 30px "Arial Narrow", Arial, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('M-127-HØ', 768, 96);                           // 圈的正下方(v≈0.25 = 朝艙內那面),字才是正的
  g.fillStyle = 'rgba(60,30,10,0.12)';
  for (let i = 0; i < 60; i++) g.fillRect(Math.random() * 1024, Math.random() * 128, 6, 2);
  return toTexture(c);
}

/* 漁夫雨帽:旋轉體剖面,再把帽簷往後拉長、往下垂 */
function hatGeometry() {
  const profile = [
    [0, 0.125], [0.035, 0.123], [0.068, 0.112], [0.09, 0.09], [0.098, 0.06], [0.1, 0.03], [0.104, 0.008],
    [0.12, 0.0], [0.15, -0.008], [0.18, -0.02], [0.2, -0.03]
  ].map(([x, y]) => new THREE.Vector2(x, y)).reverse();     // Lathe 的剖面要由下往上,面才會朝外
  const geo = new THREE.LatheGeometry(profile, 56);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const r = Math.hypot(x, z);
    const extra = Math.max(0, r - 0.104);
    if (extra === 0) continue;
    const back = Math.max(0, x / r);                          // 帽子 +x = 後方(長帽簷)
    const front = Math.max(0, -x / r);
    const scale = 1 + 0.7 * back - 0.35 * front;
    const nr = 0.104 + extra * scale;
    p.setXYZ(i, (x / r) * nr, y - extra * scale * (0.25 + 0.45 * back), (z / r) * nr);
  }
  geo.computeVertexNormals();
  return geo;
}

function buildHat() {
  const geo = hatGeometry();
  const outer = new THREE.MeshPhysicalMaterial({
    map: makeHatTexture(), roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.25, envMapIntensity: 0.4
  });
  const lining = new THREE.MeshStandardMaterial({ color: 0x2b2a24, roughness: 0.9, side: THREE.BackSide });
  const hat = new THREE.Group();
  hat.add(new THREE.Mesh(geo, outer), new THREE.Mesh(geo, lining));
  // 兩條下巴繫帶
  const strap = new THREE.MeshStandardMaterial({ color: 0x6b5410, roughness: 0.6 });
  for (const z of [-1, 1]) {
    hat.add(tube([[0, 0.004, z * 0.103], [0.03, -0.06, z * 0.09], [0.05, -0.11, z * 0.05], [0.055, -0.13, 0]], 0.0035, strap,
      { segments: 24, radial: 5 }));
  }
  return hat;
}

/* 救生圈 + 托架 + 四段抓繩 */
function buildRing(mats) {
  const g = new THREE.Group();
  g.position.copy(RING.center);
  g.rotation.y = Math.PI / 2;                                 // 圈面朝向艙內(+x)
  const { R, r } = RING;
  g.add(new THREE.Mesh(new THREE.TorusGeometry(R, r, 20, 72), new THREE.MeshStandardMaterial({ map: makeRingTexture(), roughness: 0.55 })));
  // 抓繩:四個固定點(白帶處)之間往外垂成弧
  const rope = new THREE.MeshStandardMaterial({ color: 0xcfc6a8, roughness: 0.9 });
  for (let i = 0; i < 4; i++) {
    const a0 = (i * 256 + 128) / 1024 * TAU, a1 = a0 + TAU / 4;
    const pts = [];
    for (let k = 0; k <= 12; k++) {
      const t = k / 12, a = a0 + (a1 - a0) * t;
      const out = R + r + 0.004 + Math.sin(Math.PI * t) * 0.03;
      pts.push([Math.cos(a) * out, Math.sin(a) * out - Math.sin(Math.PI * t) * 0.025, 0.01]);
    }
    g.add(tube(pts, 0.005, rope, { segments: 30, radial: 5 }));
    const knot = mesh(new THREE.TorusGeometry(r + 0.003, 0.006, 6, 16), rope, Math.cos(a0) * R, Math.sin(a0) * R, 0);
    knot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(-Math.sin(a0), Math.cos(a0), 0));
    g.add(knot);                                               // 繩子繞過圈身打的結
  }
  // 牆上兩個托架:穿過圈的內緣,圈就掛在上面
  for (const x of [-0.07, 0.07]) {
    const y = Math.sqrt((R - r) ** 2 - x * x) - 0.009;
    g.add(rod([x, y, -0.07], [x, y + 0.012, 0.04], 0.008, mats.steel));
  }
  return g;
}

export function buildWallGear(mats) {
  const group = new THREE.Group();
  group.add(buildRing(mats));

  // 木釘 + 帽子(pivot 在釘尖,帽子內側頂端套在釘上;帽頂朝外上方斜著)
  const pivot = new THREE.Group();
  pivot.position.copy(PEG);
  pivot.add(rod([0, 0, 0], [PEG_LEN, 0.03, 0], 0.009, mats.woodDark, 10));
  pivot.add(mesh(new THREE.SphereGeometry(0.014, 12, 8), mats.woodDark, PEG_LEN, 0.03, 0));
  const swing = new THREE.Group();
  swing.position.set(PEG_LEN, 0.03, 0);
  pivot.add(swing);
  const hat = buildHat();
  hat.rotation.set(0, 0.12, HAT_TILT);                        // 稍微歪一點,像隨手掛上去的
  hat.scale.setScalar(HAT_SCALE);
  hat.position.copy(new THREE.Vector3(0, 0.11 * HAT_SCALE, 0).applyEuler(hat.rotation).negate());   // 帽子內側頂端套在釘頭上
  swing.add(hat);
  group.add(pivot);

  return { group, swing };
}
