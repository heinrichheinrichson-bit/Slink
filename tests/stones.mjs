import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createStoneTile,STONE_STYLES} from '../src/renderer/stone-modules.js';
for(const style of Object.keys(STONE_STYLES))for(const seed of [73,108]){
 const tile=createStoneTile(style,{seed}),mesh=tile.group.children[0];
 tile.group.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(tile.group);
 assert(Math.abs(box.min.z+6.5)<.001,'Base height changes');
 assert(box.min.x>=-33.001&&box.max.x<=33.001&&box.min.y>=-33.001&&box.max.y<=33.001,'Stone exceeds footprint');
 assert(box.max.z>26&&box.max.z<33,'Stone height outside tile clearance');
 for(const attribute of ['position','normal','uv'])assert([...mesh.geometry.attributes[attribute].array].every(Number.isFinite),'Invalid geometry');
 const ray=new THREE.Raycaster(new THREE.Vector3(0,0,100),new THREE.Vector3(0,0,-1));
 assert(ray.intersectObject(tile.group,true).length,'Stone surface missing');
 assert.equal(tile.group.userData.walkable,false);assert(mesh.castShadow&&mesh.receiveShadow);
 if(style==='fossil'){
  const height=(x,y)=>{ray.set(new THREE.Vector3(x,y,100),new THREE.Vector3(0,0,-1));return ray.intersectObject(tile.group,true)[0].point.z};
  assert(height(10*Math.cos(.25),10*Math.sin(.25))<height(14,-10)-.7,'Leaf relief must be carved geometry');
 }
 let disposed=false;mesh.geometry.addEventListener('dispose',()=>disposed=true);tile.dispose();assert(disposed,'Geometry leak');
}
const rounded=['pebble','plain','strata'].map(style=>createStoneTile(style));
for(const tile of rounded.slice(1))assert.deepEqual(tile.group.children[0].geometry.attributes.position.array,rounded[0].group.children[0].geometry.attributes.position.array,'Surface-only variants must share the Findling geometry');
rounded.forEach(tile=>tile.dispose());
console.log('PASS: '+Object.keys(STONE_STYLES).length+' stone styles, two seeds, shared footprint/base, height clearance, finite normals, solid surface, carved relief and disposal.');
