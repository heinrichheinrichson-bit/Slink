import assert from 'node:assert/strict';
import {sampleCelebration} from '../src/renderer/creature-celebration.js';
import {createFuzzyCreature} from '../src/renderer/fuzzy-creature.js';
assert.equal(sampleCelebration(-1).active,false);assert.equal(sampleCelebration(3.8).active,false);
let peaks=0,previous=0,before=0;for(let t=0;t<3.8;t+=.002){const p=sampleCelebration(t);for(const v of Object.values(p))if(typeof v==='number')assert.ok(Number.isFinite(v));assert.ok(p.lift>=0&&p.lift<=6.21);if(previous>before&&previous>p.lift)peaks++;before=previous;previous=p.lift}assert.equal(peaks,2);assert.ok(sampleCelebration(1.38).lift>sampleCelebration(.6).lift);assert.equal(sampleCelebration(0).lift,0);assert.equal(sampleCelebration(3.4).lift,0);
const c=createFuzzyCreature();c.group.position.set(80,0,18);const root=c.group.position.clone();c.update(1,0,{celebrationAge:.66});assert.deepEqual(c.group.position.toArray(),root.toArray());assert.ok(c.group.children[0].position.z>2);assert.equal(c.group.getObjectByName('happy-crescent-eyes').visible,true);c.update(2,0,{celebrationAge:2.2});assert.equal(c.group.getObjectByName('completion-pollen').visible,true);c.update(3,0,{celebrationAge:-1});assert.equal(c.group.children[0].position.z,0);assert.equal(c.group.getObjectByName('completion-pollen').visible,false);assert.equal(c.group.getObjectByName('happy-crescent-eyes').visible,false);c.dispose();console.log('PASS: two joy hops, centred root, happy eyes, delayed pollen, settled end and clean cancellation.');

assert.equal(sampleCelebration(3.6).look,1);
