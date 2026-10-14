const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const {solve,validate}=require('../public/tools/puzzle-tool.cjs'),{graphKey}=require('../scripts/generate-fence-catalogue.cjs'),{geometryKey}=require('../public/tools/catalogue-curator.cjs');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+';this.original=JSON.parse(JSON.stringify(LEVELS));'+fs.readFileSync('public/slink-fence-levels.js','utf8')+';this.levels=LEVELS;this.fences=FENCE_LEVELS',ctx);
assert.equal(ctx.original.length,500);assert.equal(ctx.levels.length,600);assert.equal(ctx.fences.length,100);
const keys=new Set(),ids=new Set(),shapes=new Set(ctx.original.map(geometryKey));
for(const l of ctx.levels){assert.ok(!ids.has(l.id));ids.add(l.id);const graph=graphKey(l);assert.ok(!keys.has(graph),'Equivalent board including blocked edges');keys.add(graph);}
assert.equal(JSON.stringify(ctx.levels.filter(l=>!l.fence)),JSON.stringify(ctx.original),'Existing puzzles or their order changed');
const themes=new Set();let essential=0,pure=0;
for(const l of ctx.fences){validate(l);const result=solve(l);assert.equal(result.count,1,l.id);assert.equal(result.cutoff,false);assert.equal(JSON.stringify(result.first),JSON.stringify(l.solution));
 assert.ok(l.walls.length>=2&&l.walls.length<=9);for(let i=0;i<l.walls.length;i++){const without=solve({...l,walls:l.walls.filter((_,j)=>i!==j)});assert.equal(without.cutoff,false);assert.equal(without.count,2,'Redundant fence '+l.id);essential++;}
 assert.ok(['rails','picket','cross','logs'].includes(l.fence.design));assert.ok(['honey','chestnut'].includes(l.fence.style));themes.add(l.fence.design+':'+l.fence.style);
 if(l.pureFence){pure++;assert.equal(l.holes.length,0);assert.equal(l.water.length+l.lava.length+l.stones.length,0);}else{assert.ok(!shapes.has(geometryKey(l)),'Repeated old/mixed outline');shapes.add(geometryKey(l));}
 assert.ok(l.analysis.forcedRatio<=.82);assert.ok(l.n>=4&&l.n<=6);assert.ok(l.marks.every(i=>!['flowers','visitors'].includes(l.meadowVariants[i])));
}
assert.equal(themes.size,8);assert.equal(pure,30);assert.equal(ctx.levels[30].id,ctx.fences[0].id);
console.log('PASS: 100 unique fence puzzles, '+essential+' individually essential barriers, 30 fence-only/70 new mixed outlines, eight uniform themes and 500 original puzzles preserved.');
