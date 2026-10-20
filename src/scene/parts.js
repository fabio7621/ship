/* 建模小工具:讓各部件檔案只描述「放什麼、放哪裡」 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const UP = new THREE.Vector3(0, 1, 0);

export function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
}

export function roundedBox(w, h, d, radius, mat, x, y, z) {
  return mesh(new RoundedBoxGeometry(w, h, d, 3, radius), mat, x, y, z);
}

/* 兩點之間的圓桿(纜繩、欄杆、支架都用它) */
export function rod(a, b, radius, mat, segments = 6) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const dir = vb.clone().sub(va);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, dir.length(), segments, 1), mat);
  m.position.copy(va).addScaledVector(dir, 0.5);
  m.quaternion.setFromUnitVectors(UP, dir.normalize());
  return m;
}

/* 大量細桿合併成一個 mesh(欄杆、窗格):一次 draw call */
export function rods(pairs, radius, mat, segments = 5) {
  const geos = pairs.map(([a, b]) => {
    const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
    const dir = vb.clone().sub(va);
    const geo = new THREE.CylinderGeometry(radius, radius, dir.length(), segments, 1);
    const m = new THREE.Matrix4().compose(
      va.clone().addScaledVector(dir, 0.5),
      new THREE.Quaternion().setFromUnitVectors(UP, dir.normalize()),
      new THREE.Vector3(1, 1, 1)
    );
    return geo.applyMatrix4(m);
  });
  return new THREE.Mesh(mergeGeometries(geos), mat);
}

/* 水平圓環(欄杆扶手、窗框環) */
export function ring(radius, tube, y, mat, radial = 6, tubular = 48) {
  const m = mesh(new THREE.TorusGeometry(radius, tube, radial, tubular), mat, 0, y, 0);
  m.rotation.x = Math.PI / 2;
  return m;
}

/* 一串點連成的折線圓桿 */
export function polyRod(points, radius, mat) {
  const g = new THREE.Group();
  for (let i = 0; i < points.length - 1; i++) g.add(rod(points[i], points[i + 1], radius, mat));
  return g;
}

/* 沿曲線的管子(舷牆壓條、龍門架) */
export function tube(points, radius, mat, { closed = false, segments = 120, radial = 8 } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), closed, 'centripetal');
  return new THREE.Mesh(new THREE.TubeGeometry(curve, segments, radius, radial, closed), mat);
}

/* 水平放置的圓柱(軸向沿 z) */
export function drumZ(radius, length, mat, x, y, z, segments = 20) {
  const m = mesh(new THREE.CylinderGeometry(radius, radius, length, segments), mat, x, y, z);
  m.rotation.x = Math.PI / 2;
  return m;
}
