import assert from 'node:assert/strict';
import {resolveTouchCell} from '../src/renderer/touch-grid.js';
import {CentreTransition} from '../src/renderer/centre-transition.js';
assert.equal(resolveTouchCell(4,[0],104,-60),1);assert.equal(resolveTouchCell(4,[0],102,-60),0);
assert.equal(resolveTouchCell(4,[0],104,-60,{threshold:20,tolerance:20}),0);assert.equal(resolveTouchCell(4,[0],119,-60,{threshold:20,tolerance:20}),1);
assert.equal(resolveTouchCell(4,[0],120,-95,{threshold:0,tolerance:0}),0);assert.equal(resolveTouchCell(4,[0],120,-95,{threshold:0,tolerance:25}),1);
assert.equal(resolveTouchCell(4,[0],140,-140),-1,'No diagonal');assert.equal(resolveTouchCell(4,[0],220,-60),-1,'No remote jump');assert.equal(resolveTouchCell(4,[0,1],60,-60),0,'Immediate predecessor allowed');assert.equal(resolveTouchCell(4,[0,1,5],60,-60),-1,'No old suffix erasure');
for(const scale of [70/220,1,350/220]){const t=new CentreTransition(0,0);t.durationScale=scale;t.target(80,0,0);t.target(80,80,.02);for(let time=0;time<.7;time+=.01){const p=t.sample(time);assert(p.y===0||p.x===80,'No cut corner')}const end=t.sample(1);assert.equal(end.moving,false);assert.equal(end.x,80);assert.equal(end.y,80)}console.log('PASS touch threshold/tolerance, no diagonal/remote shortcut, scaled edge-only centred arrival');
