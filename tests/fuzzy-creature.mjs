import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createFuzzyCreature,CREATURE_PALETTES} from '../src/renderer/fuzzy-creature.js';
const c=createFuzzyCreature(),fur=c.group.getObjectByName('curved-soft-fur');
assert.ok(fur.geometry.attributes.position.count>300000);
assert.ok(fur.material.transparent);
assert.equal(fur.material.depthWrite,false);
for(const stride of [0,.25,.5,.75,1]){
 c.update(2,stride);
 c.group.traverse(o=>{if(!o.geometry)return;for(const k of ['position','normal'])for(const v of o.geometry.attributes[k].array)assert.ok(Number.isFinite(v));});
 c.group.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(c.group);
 assert.ok(bounds.min.z>-3);assert.ok(bounds.max.z<42);
}
const eyes=[];c.group.traverse(o=>{if(o.name==='embedded-eye')eyes.push(o)});
assert.equal(eyes.length,2);
for(const eye of eyes){const m=eye.children[0],p=m.geometry.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i)+m.position.x,z=p.getZ(i)+m.position.z,front=-8-11.5*Math.sqrt(Math.max(.025,1-(x/13.1)**2-((z-20)/12.2)**2));assert.ok(Math.abs(p.getY(i)-front)<.5,'white follows curved head within half a unit');}assert.ok(m.geometry.attributes.normal.getY(100)<0,'eye faces outwards')}
assert.ok(c.group.getObjectByName('unified-coat-base'));const baseline=fur.geometry.attributes.position.array.slice(),first=fur.geometry.attributes.color.getX(10);for(const id of Object.keys(CREATURE_PALETTES)){c.setPalette(id);assert.equal(c.group.userData.palette,id);assert.deepEqual(fur.geometry.attributes.position.array,baseline)}assert.notEqual(fur.geometry.attributes.color.getX(10),first);const paws=[];c.group.traverse(o=>{if(o.name==='soft-paw')paws.push(o)});assert.equal(paws.length,4);paws.forEach(p=>{assert.equal(p.children.length,1,'single sculpted paw');assert.ok(p.children[0].geometry)});assert.equal(c.group.getObjectByName('bending-ankle'),undefined);assert.ok(c.group.getObjectByName('rigid-upper-leg'));assert.ok(c.group.getObjectByName('rigid-lower-leg'));for(const size of [55,85,100,150]){c.setSize(size);for(const progress of [.12,.33,.58,.81]){c.update(3,progress,{progress,distance:80});c.group.traverse(o=>{if(o.name==='rigid-upper-leg')assert.ok(Math.abs(o.scale.y*2-3.8)<1e-6);if(o.name==='rigid-lower-leg')assert.ok(Math.abs(o.scale.y*2-3.4)<1e-6)});for(const paw of paws)for(const k of ['position','normal'])for(const value of paw.children[0].geometry.attributes[k].array)assert.ok(Number.isFinite(value),'continuous deformed paw remains finite')}}c.setSize(85);assert.equal(c.group.scale.x,.85);c.dispose();
console.log('PASS: dense soft fur, finite animated world bounds, embedded curved outward eyes, size and disposal.');
