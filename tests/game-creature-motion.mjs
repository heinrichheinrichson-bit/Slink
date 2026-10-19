import assert from 'node:assert/strict';
import fs from 'node:fs';import vm from 'node:vm';
import {GameCreatureMotion} from '../src/renderer/game-creature-motion.js';
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+fs.readFileSync('public/slink-fence-levels.js','utf8')+fs.readFileSync('public/slink-expansion-levels.js','utf8')+';this.levels=LEVELS',ctx);
const motion=new GameCreatureMotion();let time=0;
for(const level of ctx.levels){
 motion.sync(level,[],time);let path=[];
 for(const cell of level.solution){path.push(cell);motion.sync(level,path,time);let pose=motion.sample(time+.01);assert.ok(Number.isFinite(pose.x)&&Number.isFinite(pose.y));time+=.3;pose=motion.sample(time);assert.equal(pose.x,cell%level.n*80+60);assert.equal(pose.y,-(Math.floor(cell/level.n)*80+60));assert.equal(pose.moving,false);}
 const joyStart=motion.joyStarted;assert.ok(joyStart>=0);motion.sync(level,path,time+.1);assert.equal(motion.joyStarted,joyStart,'settings redraw must not restart completion');
 time+=4;assert.equal(motion.sample(time).heading,0,'solved figure stays facing player');
 path.pop();motion.sync(level,path,time);assert.equal(motion.joyStarted,-1,'undo cancels joy');time+=.3;let pose=motion.sample(time);assert.equal(pose.cell,path.at(-1));assert.equal(pose.x,path.at(-1)%level.n*80+60);
 motion.sync(level,[],time);assert.equal(motion.sample(time).celebrationAge,-1,'reset clears joy');time+=1;
}
console.log('PASS: creature follows all 1200 accepted routes, rests centred, preserves celebration on redraw, faces player and cancels on undo/reset.');

// A bulk hint rollback must follow the old route, even when its endpoints are diagonal.
const l={n:3,marks:[0,8],solution:[0,1,4,5,8]};
const m=new GameCreatureMotion();m.sync(l,[0,1,4,5],0);m.sample(1);
m.sync(l,[0],1);assert.deepEqual(m.transition.points,[[220,-140],[140,-140],[140,-60],[60,-60]]);
let rest=m.sample(2);assert.equal(rest.x,60);assert.equal(rest.y,-60);
m.sync(l,[0,1],2);m.sample(3);m.sync(l,[0],3);rest=m.sample(4);assert.equal(rest.x,60);assert.equal(rest.y,-60);
console.log('PASS: bulk hint rollback follows cardinal old edges and subsequent undo remains synchronized.');
