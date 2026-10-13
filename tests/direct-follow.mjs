import assert from 'node:assert/strict';
import {DirectGridFollower} from '../src/renderer/direct-grid-follow.js';
const f=new DirectGridFollower();
let p=f.move(1.4,1.2);assert.deepEqual([p.cell,p.x,p.y,p.heading,p.travel],[4,1,1,0,0]);
p=f.move(1.51,1);assert.deepEqual([p.cell,p.x,p.y,p.heading],[5,2,1,Math.PI/2]);
p=f.move(1.7,1.3);assert.equal(p.heading,Math.PI/2);assert.deepEqual(p.entered,[]);
p=f.move(2,.2);assert.equal(p.cell,2);assert.equal(p.heading,Math.PI);
p=f.move(0,0);assert.deepEqual(p.entered,[1,0]);assert.equal(p.heading,-Math.PI/2);
p=f.move(.2,2);assert.deepEqual(p.entered,[3,6]);assert.equal(p.heading,0);
p=f.move(.2,1.8);assert.equal(p.heading,0);assert.equal(p.cell,6);
p=f.move(0,1);assert.equal(p.heading,Math.PI); // backtracking faces the actual return step
for(let i=0;i<10000;i++){
 const x=(i%30)/10,y=(Math.floor(i/30)%30)/10,previous=f.cell;
 const p=f.move(x,y);assert.equal(p.x,Math.round(Math.min(2,x)));assert.equal(p.y,Math.round(Math.min(2,y)));
 assert.equal(p.cell,p.y*3+p.x);assert.ok(Number.isInteger(p.x)&&Number.isInteger(p.y));
 let last=previous;for(const next of p.entered){assert.equal(Math.abs(next%3-last%3)+Math.abs(Math.floor(next/3)-Math.floor(last/3)),1);last=next}
}
assert.equal('queue' in f,false);f.reset();assert.equal(f.travel,0);assert.equal(f.cell,4);
console.log('PASS: 10000 immediate centred inputs, cardinal last-step heading, same-cell stability, skipped cells and backtracking.');
