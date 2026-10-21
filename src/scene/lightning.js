/* =========================================================
   閃電:主幹 + 分岔,一次落雷會連閃 2~3 下(真實閃電的回擊現象)
   對外只輸出 flash 強度與方向,天空/海面各自決定怎麼被打亮
   ========================================================= */
import * as THREE from 'three';

const FOG_BASE = new THREE.Color(0x070c16);
const FOG_FLASH = new THREE.Color(0x36436a);

function buildBoltPoints(x, z) {
  const trunk = [];
  const branches = [];
  let y = 46;
  while (y > 0) {
    trunk.push(new THREE.Vector3(x, y, z));
    if (Math.random() < 0.28 && y < 40) branches.push(new THREE.Vector3(x, y, z));
    y -= 2 + Math.random() * 3.5;
    x += (Math.random() - 0.5) * 5;
    z += (Math.random() - 0.5) * 3;
  }
  const branchSegs = [];
  for (const start of branches) {
    let p = start.clone();
    const dir = Math.sign(Math.random() - 0.5);
    for (let i = 0; i < 3 + Math.random() * 3; i++) {
      const next = p.clone().add(new THREE.Vector3(dir * (1 + Math.random() * 3), -(1.5 + Math.random() * 2.5), (Math.random() - 0.5) * 2));
      branchSegs.push(p, next);
      p = next;
    }
  }
  return { trunk, branchSegs };
}

export function createLightning(scene, boltLight) {
  const state = { flash: 0, dir: new THREE.Vector3(0, 0.5, -1).normalize() };
  let nextBolt = 3;
  let pulses = [];
  const listeners = [];

  const mat = new THREE.LineBasicMaterial({
    color: new THREE.Color(0xdfe9ff).multiplyScalar(4), transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, fog: false, depthWrite: false
  });
  const trunkGeo = new THREE.BufferGeometry();
  const branchGeo = new THREE.BufferGeometry();
  scene.add(new THREE.Line(trunkGeo, mat));
  scene.add(new THREE.LineSegments(branchGeo, mat));

  function strike(t) {
    const x = (Math.random() - 0.5) * 120;
    const z = -45 - Math.random() * 40;
    const { trunk, branchSegs } = buildBoltPoints(x, z);
    trunkGeo.setFromPoints(trunk);
    branchGeo.setFromPoints(branchSegs);
    state.dir.set(x, 30, z).normalize();
    boltLight.position.set(x, 50, z);
    pulses = [t, t + 0.07 + Math.random() * 0.06, t + 0.2 + Math.random() * 0.15]
      .slice(0, 2 + Math.round(Math.random()));
    nextBolt = t + 5 + Math.random() * 8;
    const power = 0.7 + 0.15 * (pulses.length - 2) + Math.random() * 0.15;   // 回擊越多次越響
    listeners.forEach((fn) => fn({ x, y: 30, z, power }));
  }

  function update(t, dt) {
    state.flash = Math.max(0, state.flash - dt * 3.2);
    if (t > nextBolt) strike(t);
    if (pulses.length && t >= pulses[0]) {
      pulses = pulses.slice(1);
      state.flash = Math.max(state.flash, 0.65 + Math.random() * 0.35);
    }
    boltLight.intensity = state.flash * 2.6;
    mat.opacity = Math.max(0, state.flash - 0.2) * 1.5;
    scene.fog.color.copy(FOG_BASE).lerp(FOG_FLASH, state.flash * 0.6);
  }

  /** 落雷事件(雷聲用):fn({ x, y, z, power }) */
  const onStrike = (fn) => listeners.push(fn);

  return { update, state, onStrike };
}

export { FOG_BASE };
