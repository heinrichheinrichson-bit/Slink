import assert from 'node:assert/strict';import {CentreTransition} from '../src/renderer/centre-transition.js';
const c=new CentreTransition();assert.equal(c.target(80,80,0),false,'diagonal target rejected');c.target(80,0,0);let p=c.sample(.04);assert.ok(p.moving&&p.x>0&&p.x<80);c.target(80,80,.04);
for(let t=.041;t<.14;t+=.001){p=c.sample(t);assert.ok(Math.abs(p.y)<1e-9||Math.abs(p.x-80)<1e-9,'L route retains corner even when retargeted mid-edge')}
assert.deepEqual(c.sample(.14),{x:80,y:80,moving:false});c.target(0,80,.2);c.target(0,0,.21);c.target(-80,0,.22);assert.deepEqual(c.sample(.32),{x:-80,y:0,moving:false});
c.reset(0,0);c.target(80,0,1);c.sample(1.06);c.target(0,0,1.06);for(let t=1.06;t<1.2;t+=.001){p=c.sample(t);assert.equal(p.y,0);assert.ok(p.x>=0&&p.x<=80)}assert.deepEqual(c.sample(1.3),{x:0,y:0,moving:false});
console.log('PASS: visible travel, edge-only corners under retargeting, reversal and exact centred rest.');
