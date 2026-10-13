import assert from 'node:assert/strict';
import {samplePawGait} from '../src/renderer/paw-gait.js';
let contacts=0;
for(const scale of [.55,.85,1,1.5])for(let i=0;i<4;i++)for(let p=.12;p<.88;p+=.0009){const a=samplePawGait(p,i,{scale}),b=samplePawGait(p+.00001,i,{scale});for(const k of ['y','z','pitch'])assert.ok(Number.isFinite(a[k]));if(a.stance&&b.stance){assert.equal(a.z,0);const before=-80*p+scale*a.y,after=-80*(p+.00001)+scale*b.y;assert.ok(Math.abs(before-after)<1e-8,'planted foot cancels root travel');contacts++}}
for(let p=.1;p<.9;p+=.001){const poses=[0,1,2,3].map(i=>samplePawGait(p,i));assert.ok(poses.filter(p=>p.stance).length>=2);assert.equal(poses[0].z,poses[3].z);assert.equal(poses[1].z,poses[2].z)}
for(const p of [0,1])assert.ok(samplePawGait(p,0).y===0&&samplePawGait(p,0).z===0);console.log('PASS: '+contacts+' planted-foot checks at four scales, diagonal support, finite swing and settled endpoints.');
