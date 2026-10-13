import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createFlowerGoal,FLOWER_SPECIES,sampleVisitorFlight} from '../src/renderer/flower-goals.js';
globalThis.document={createElement(){return{width:0,height:0,getContext(){return{fillText(){}}}}}};
let budReference;
for(const species of Object.keys(FLOWER_SPECIES)){
 const g=createFlowerGoal({species,number:3,state:'closed'});assert.equal(g.group.userData.goalNumber,3);
 const bud=g.group.children[0],signature=bud.children.map(o=>({position:o.position.toArray(),scale:o.scale.toArray(),color:o.material?.color.getHex()}));
 if(budReference)assert.deepEqual(signature,budReference,'Closed bud differs between species');else budReference=signature;
 const blossom=g.group.children.at(-1),visitors=blossom.getObjectByName('flower-visitors');assert.equal(blossom.visible,false);assert(!visitors.visible);g.setState('next');for(let k=0;k<30;k++)g.update(k/60,1/60);assert(bud.visible&&!blossom.visible,'Next state opens flower early');assert(!visitors.visible,'Visitors appear before bloom');
 g.setState('bloom');let prior=0;for(let k=0;k<100;k++){g.update(k/60,1/60);assert(blossom.scale.x>=prior,'Opening must progress smoothly');prior=blossom.scale.x}assert(blossom.visible&&blossom.scale.x>.999);assert.equal(g.state,'bloom');
 for(const size of [27,33,40]){g.setSize(size);g.group.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(g.group);assert(box.min.x>=-37&&box.max.x<=37&&box.min.z>=-37&&box.max.z<=37,'Flower or tag enters neighbouring cell');assert.equal(g.group.userData.markerSize,size)}
 assert(visitors.visible&&visitors.children.length===2);g.setInsects(false);g.update(2,.016);assert(!visitors.visible);g.setInsects(true);
 const bee=visitors.getObjectByName('bee'),bumblebee=visitors.getObjectByName('bumblebee');g.setVisitorSize('bee',150);assert.equal(bee.scale.x,2.7);assert.equal(bumblebee.scale.x,1.8);g.setVisitorSize('bumblebee',200);assert.equal(bumblebee.scale.x,3.6);assert.equal(g.state,'bloom','Size control resets flower');g.setVisitorSize('bee',100);g.setVisitorSize('bumblebee',100);assert.throws(()=>g.setVisitorSize('bee',NaN),RangeError);assert.throws(()=>g.setVisitorSize('bee',301),RangeError);
 for(let k=0;k<120;k++){g.update(k*.5,.016);g.group.updateMatrixWorld(true);for(const visitor of visitors.children){const p=visitor.getWorldPosition(new THREE.Vector3());assert(Math.abs(p.x)<34&&Math.abs(p.z)<34,'Visitor leaves cell');assert(Math.hypot(p.x-19,p.z-19)>21,'Visitor crosses number marker')}}
 g.setState('closed');g.update(0,.016);assert(!visitors.visible,'Visitors persist on undo');for(let k=0;k<100;k++)g.update(k/60,1/60);assert(bud.visible&&!blossom.visible,'Undo must restore bud');assert.throws(()=>g.setState('invalid'),/Unknown/);
 const geometries=new Set,materials=new Set;g.group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material)});let geometryCount=0,materialCount=0;for(const geo of geometries)geo.addEventListener('dispose',()=>geometryCount++);for(const mat of materials)mat.addEventListener('dispose',()=>materialCount++);g.dispose();assert.equal(geometryCount,geometries.size);assert.equal(materialCount,materials.size);
}
for(let seed=0;seed<20;seed++)for(let k=0;k<800;k++){
 const t=k*.127,p=sampleVisitorFlight(t,seed),q=sampleVisitorFlight(t+.001,seed);
 assert(Math.abs(p.x)<=14.31&&Math.abs(p.z)<=9.26&&p.y>21&&p.y<25.4,'Unbounded flight');
 assert(p.distanceTo(q)<.05,'Jump in wandering flight');
 assert.deepEqual(p.toArray(),sampleVisitorFlight(t,seed).toArray(),'Unstable flight seed');
}
console.log('PASS: four flower species, identical buds, reversible opening, marker clearance, bee/humblebee visibility and bounded continuous wandering, disposal.');
