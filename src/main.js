import * as THREE from 'three';
import { createLights } from './scene/lights.js';
import { createSky } from './scene/sky.js';
import { createOcean } from './scene/ocean/ocean.js';
import { createBoat } from './scene/boat/index.js';
import { createSpray } from './scene/spray.js';
import { createSpindrift } from './scene/spindrift.js';
import { createLighthouse } from './scene/lighthouse/index.js';
import { NO_REFLECTION_LAYER } from './scene/layers.js';
import { createRain } from './scene/rain.js';
import { createLightning, FOG_BASE } from './scene/lightning.js';
import { createPost } from './scene/post.js';
import { createFloater, updateFloater, bowWaveStrength } from './physics/floater.js';
import { createCabin } from './scene/cabin/index.js';
import { createCabinView } from './cabinView.js';

/* =========================================================
   場景基礎
   ========================================================= */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const FOG_DENSITY = 0.011;
scene.fog = new THREE.FogExp2(FOG_BASE.getHex(), FOG_DENSITY);

const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 500);
camera.layers.enable(NO_REFLECTION_LAYER);

const { boltLight, moonDir, moonColor } = createLights(scene);
const sky = createSky(scene, { moonDir });
const { boat, lamps, hullClip, wheelhouse, update: updateBoat } = createBoat(scene);
const lighthouse = createLighthouse(scene);
const ocean = createOcean(scene, renderer, { moonDir, moonColor, hullClip, shore: lighthouse.shore });
const waterLamps = [...lamps, lighthouse.glint];
const spray = createSpray(scene, { fogDensity: FOG_DENSITY });
const spindrift = createSpindrift(scene, {
  fogDensity: FOG_DENSITY, surfaceTextures: ocean.surfaceTextures
});
const rain = createRain(scene);
const lightning = createLightning(scene, boltLight);
const floater = createFloater();
const post = createPost(renderer, scene, camera);

// 用天空產生環境貼圖:濕漆面、玻璃、金屬才有微弱的天光反射
const envScene = new THREE.Scene();
envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(envScene, 0.04, 0.1, 1000).texture;

// 駕駛艙內部:場景其他東西都建好後才建立(它會預先編譯「多一盞艙內燈」版本的 shader)
const cabin = createCabin({ boat, wheelhouse, rainMaterial: rain.material, scene, renderer, camera });
const cabinView = createCabinView({ camera, boat, wheelhouse, cabin, dom: renderer.domElement });

function resize() {
  const dpr = renderer.getPixelRatio();
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  post.setSize(innerWidth, innerHeight);
  ocean.setSize(innerWidth * dpr, innerHeight * dpr);
  spray.setSize(innerHeight * dpr, camera.fov);
  spindrift.setSize(innerHeight * dpr, camera.fov);
}
resize();
window.addEventListener('resize', resize);

/* 主迴圈 */
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  updateFloater(floater, boat, t, dt, ocean.heightAt);
  cabinView.update(t, dt, floater.heave.x);
  updateBoat(t);
  lighthouse.update(t, camera);
  lightning.update(t, dt);
  const { flash, dir: flashDir } = lightning.state;
  cabin.update(t, dt, floater, flash);
  sky.update(t, flash, flashDir);
  ocean.update(t, dt, boat, waterLamps, flash, flashDir, bowWaveStrength(floater));
  spray.update(dt, t, boat, floater, flash);
  spindrift.update(t, camera, boat, flash);
  rain.update(dt);
  post.render();
}
frame();

// 除錯:網址加 ?debug 可在 console 用 __storm.ocean.foamInfo() 看白沫覆蓋率
if (new URLSearchParams(location.search).has('debug')) window.__storm = { ocean, scene, camera, boat, cabin, cabinView, renderer };
