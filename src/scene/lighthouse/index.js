/* =========================================================
   海岬燈塔:擺在月亮左側約 150m 外的山崖尖端
   構圖:月亮在畫面左 1/3、燈塔再往左,山崖從畫面左緣伸進來
   ========================================================= */
import * as THREE from 'three';
import { createLighthouseMaterials } from './materials.js';
import { buildHeadland, edgeZ, terrainHeight } from './headland.js';
import { buildTower } from './tower.js';
import { buildLantern, LENS_Y } from './lantern.js';
import { buildBeams } from './beams.js';

const POSITION = new THREE.Vector3(-99, 0, -89.6);
const FACING = 0.775;            // 區域 +z 轉向鏡頭(陸地往畫面左側延伸)
const ROTATION_PERIOD = 12;      // 秒/圈;兩道光束 → 每 6 秒閃一次
const GLINT_BASE = 1500;         // 給海面 shader 的反光強度(燈光倒影碎點)
const GLINT_FLASH = 9000;

export function createLighthouse(scene) {
  const mats = createLighthouseMaterials();
  const group = new THREE.Group();
  group.position.copy(POSITION);
  group.rotation.y = FACING;

  const headland = buildHeadland(mats);
  const lantern = buildLantern(mats);
  const beams = buildBeams();
  lantern.rotor.add(beams.group);       // rotor 原點 = 透鏡中心,光束與牛眼面板同步旋轉
  group.add(headland.group, buildTower(mats, { edgeZ, heightAt: terrainHeight }), lantern.group);
  scene.add(group, beams.glare);
  group.updateMatrixWorld(true);

  // 海面 shader 用的「燈」:介面跟 THREE 光源一樣(位置 / color / intensity)
  const glint = new THREE.Object3D();
  glint.position.set(0, LENS_Y, 0);
  group.add(glint);
  glint.color = new THREE.Color(0xffe6b8);
  glint.intensity = GLINT_BASE;

  // 世界 → 海岬區域座標(海面 shader 查離岸距離貼圖畫拍岸白沫)
  const shore = {
    texture: headland.shore.texture,
    range: headland.shore.range,
    worldToLocal: group.matrixWorld.clone().invert()
  };

  function update(t, camera) {
    lantern.rotor.rotation.y = (t / ROTATION_PERIOD) * Math.PI * 2;
    lantern.rotor.updateMatrixWorld(true);
    const flash = beams.update(camera);
    glint.intensity = GLINT_BASE + GLINT_FLASH * flash;
  }

  return { glint, shore, update };
}
