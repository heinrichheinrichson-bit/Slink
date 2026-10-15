import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
/** Batch static meshes by shared material, preserving every vertex/normal and transform. */
export function batchTerrainTile(group){
 const buckets=new Map(),old=new Set();
 group.updateMatrixWorld(true);
 for(const child of group.children){if(!child.isMesh||Array.isArray(child.material))return group;let bucket=buckets.get(child.material);if(!bucket)buckets.set(child.material,bucket={geometries:[],surface:false});bucket.surface||=Boolean(child.userData.surface);const geometry=child.geometry.index?child.geometry.toNonIndexed():child.geometry.clone();bucket.geometries.push(geometry.applyMatrix4(child.matrix));old.add(child.geometry)}
 group.clear();for(const [material,bucket]of buckets){const geometry=mergeGeometries(bucket.geometries,false);bucket.geometries.forEach(g=>g.dispose());const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=mesh.receiveShadow=true;mesh.userData.surface=bucket.surface;group.add(mesh)}old.forEach(g=>g.dispose());return group;
}
