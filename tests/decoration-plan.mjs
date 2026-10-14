import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createGardenDecorationPlan,stoneComponents} from '../src/renderer/garden-decoration-plan.js';
import {STONE_STYLES} from '../src/renderer/stone-modules.js';
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+fs.readFileSync('public/slink-fence-levels.js','utf8')+';this.levels=LEVELS',context);
const flowers=new Set,stones=new Set;
for(const l of context.levels){
 const before=JSON.stringify(l),p=createGardenDecorationPlan(l);assert.deepEqual(p,createGardenDecorationPlan(l));assert.equal(JSON.stringify(l),before,'Decoration mutates puzzle');assert.equal(p.flowers.length,l.marks.length);
 p.flowers.forEach(f=>flowers.add(f));assert(new Set(p.flowers).size<=2,'Too many flower varieties in one puzzle');assert.deepEqual(Object.keys(p.stones).map(Number).sort((a,b)=>a-b),[...l.stones].sort((a,b)=>a-b));
 for(const s of Object.values(p.stones)){assert(STONE_STYLES[s]);stones.add(s)}
 for(const group of stoneComponents(l.stones,l.n))if(group.length>1){assert(group.every(i=>['plain','pebble','strata','dimples','rosette'].includes(p.stones[i])),'Touching stones mix shape families');assert(group.filter(i=>p.stones[i]!=='plain').length<=1,'Too many adjacent accents')}
}
assert.equal(flowers.size,4);assert.equal(stones.size,8);
console.log('PASS: 600 stable decoration plans, all four flowers/eight stones used, restrained adjoining stones, unchanged puzzles.');
