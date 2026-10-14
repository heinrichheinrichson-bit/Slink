import assert from 'node:assert/strict';
import fs from 'node:fs';import vm from 'node:vm';
import {GameCreatureMotion} from '../src/renderer/game-creature-motion.js';
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+';this.levels=LEVELS',ctx);
const motion=new GameCreatureMotion();let time=0;
for(const level of ctx.levels){
 motion.sync(level,[],time);let path=[];
 for(const cell of level.solution){path.push(cell);motion.sync(level,path,time);let pose=motion.sample(time+.01);assert.ok(Number.isFinite(pose.x)&&Number.isFinite(pose.y));time+=.3;pose=motion.sample(time);assert.equal(pose.x,cell%level.n*80+60);assert.equal(pose.y,-(Math.floor(cell/level.n)*80+60));assert.equal(pose.moving,false);}
 const joyStart=motion.joyStarted;assert.ok(joyStart>=0);motion.sync(level,path,time+.1);assert.equal(motion.joyStarted,joyStart,'settings redraw must not restart completion');
 time+=4;assert.equal(motion.sample(time).heading,0,'solved figure stays facing player');
 path.pop();motion.sync(level,path,time);assert.equal(motion.joyStarted,-1,'undo cancels joy');time+=.3;let pose=motion.sample(time);assert.equal(pose.cell,path.at(-1));assert.equal(pose.x,path.at(-1)%level.n*80+60);
 motion.sync(level,[],time);assert.equal(motion.sample(time).celebrationAge,-1,'reset clears joy');time+=1;
}
console.log('PASS: creature follows all 500 accepted routes, rests centred, preserves celebration on redraw, faces player and cancels on undo/reset.');
