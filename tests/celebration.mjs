import assert from 'node:assert/strict';
import * as THREE from 'three';
import {sampleCelebration} from '../src/renderer/creature-celebration.js';
import {createFuzzyCreature} from '../src/renderer/fuzzy-creature.js';
assert.equal(sampleCelebration(-1).active,false);assert.equal(sampleCelebration(3.8).active,false);
let peaks=0,previous=0,before=0;for(let t=0;t<3.8;t+=.002){const p=sampleCelebration(t);for(const v of Object.values(p))if(typeof v==='number')assert.ok(Number.isFinite(v));assert.ok(p.lift>=0&&p.lift<=6.21);if(previous>before&&previous>p.lift)peaks++;before=previous;previous=p.lift}assert.equal(peaks,2);assert.ok(sampleCelebration(1.95).lift>sampleCelebration(1.17).lift);assert.equal(sampleCelebration(0).lift,0);assert.equal(sampleCelebration(3.4).lift,0);
const c=createFuzzyCreature();c.group.position.set(80,0,18);const root=c.group.position.clone();c.update(1,0,{celebrationAge:1.17});assert.deepEqual(c.group.position.toArray(),root.toArray());assert.ok(c.group.children[0].position.z>2);assert.equal(c.group.getObjectByName('happy-crescent-eyes').visible,true);c.update(2,0,{celebrationAge:2.6});assert.equal(c.group.getObjectByName('completion-pollen').visible,true);c.update(3,0,{celebrationAge:-1});assert.equal(c.group.children[0].position.z,0);assert.equal(c.group.getObjectByName('completion-pollen').visible,false);assert.equal(c.group.getObjectByName('happy-crescent-eyes').visible,false);c.dispose();console.log('PASS: two joy hops, centred root, happy eyes, delayed pollen, settled end and clean cancellation.');

assert.equal(sampleCelebration(3.6).look,1);

// One uninterrupted turn finishes before the first hop.
let lastLook=0;for(let t=.14;t<.84;t+=.01){const p=sampleCelebration(t);assert.ok(p.look>lastLook);assert.equal(p.lift,0);lastLook=p.look}assert.equal(sampleCelebration(.85).look,1);

// Upper and lower limbs must share knee positions even during lift/lean/squash.
const jointCreature=createFuzzyCreature();
const upper=[],lower=[],paws=[];
jointCreature.group.traverse(o=>{if(o.name==='rigid-upper-leg')upper.push(o);if(o.name==='rigid-lower-leg')lower.push(o);if(o.name==='soft-paw')paws.push(o)});
for(const style of ['hops','gentle'])for(let age=0;age<=3.7;age+=.025){
 jointCreature.update(age,0,{celebrationAge:age,celebrationTurn:Math.PI,celebrationStyle:style});jointCreature.group.updateMatrixWorld(true);
 upper.forEach((leg,i)=>{assert.equal(leg.parent,lower[i].parent);assert.equal(leg.parent,paws[i].parent);const knee=leg.localToWorld(new THREE.Vector3(0,1,0)),shinKnee=lower[i].localToWorld(new THREE.Vector3(0,-1,0));assert.ok(knee.distanceTo(shinKnee)<1e-5,'knee remains joined during celebration')});
}
jointCreature.dispose();
console.log('PASS: all four knees stay connected throughout completion motion.');

for(let age=0;age<=3.7;age+=.025){const pose=sampleCelebration(age,'gentle');assert.equal(pose.lift,0,'gentle variant never jumps');for(const value of Object.values(pose))if(typeof value==='number')assert.ok(Number.isFinite(value));}
assert.equal(sampleCelebration(3.6,'gentle').look,1);

// Surface-fitted eyes must remain attached to the original skull, even in the former blink window.
const faceCreature=createFuzzyCreature();
const eye=faceCreature.group.getObjectByName('embedded-eye');
for(const style of ['hops','gentle'])for(let age=0;age<=3.7;age+=.025){
 faceCreature.update(5.29,0,{celebrationAge:age,celebrationTurn:Math.PI,celebrationStyle:style});
 assert.deepEqual(eye.parent.rotation.toArray().slice(0,3),[0,0,0],'face cannot swivel inside skull');
 assert.deepEqual(eye.scale.toArray(),[1,1,1],'surface-fitted eyes cannot be squashed');
 assert.deepEqual(eye.position.toArray(),[0,0,0]);
}
faceCreature.dispose();console.log('PASS: fitted face and eyes retain skull alignment during turns and expression.');
