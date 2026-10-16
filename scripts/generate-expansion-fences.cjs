const fs=require('fs'),vm=require('vm');
const {solve,validate}=require('../public/tools/puzzle-tool.cjs');
const {raw,topology,traps}=require('../public/tools/hard-puzzles.cjs');
const {geometryKey,localChoices,score}=require('../public/tools/catalogue-curator.cjs');
const key=(a,b)=>a<b?a+':'+b:b+':'+a;
const adj=(i,n)=>[i-n,i+n,i%n?i-1:-1,i%n<n-1?i+1:-1].filter(j=>j>=0&&j<n*n);
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t^=t+Math.imul(t^t>>>7,61|t);return((t^t>>>14)>>>0)/4294967296}}
function full(n,r){let s=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)s.push(y*n+(y%2?n-1-x:x));for(let k=0;k<n*n*65;k++){if(r()<.5)s.reverse();const opts=adj(s[0],n).filter(i=>i!==s[1]),j=s.indexOf(opts[Math.floor(r()*opts.length)]);if(j>1)s=[...s.slice(0,j).reverse(),...s.slice(j)]}return {n,solution:s,holes:[],marks:[s[0],s.at(-1)],walls:[],water:[],lava:[],stones:[]}}
function graphKey(l){const forms=[];for(let flip=0;flip<2;flip++)for(let turn=0;turn<4;turn++){let points=l.solution.map(i=>[i%l.n,Math.floor(i/l.n)]);const transform=([x,y])=>{if(flip)x=-x;for(let k=0;k<turn;k++)[x,y]=[-y,x];return [x,y]};points=points.map(transform);const mx=Math.min(...points.map(p=>p[0])),my=Math.min(...points.map(p=>p[1]));const t=i=>{let [x,y]=transform([i%l.n,Math.floor(i/l.n)]);return (x-mx)+','+(y-my)};const cells=l.solution.map(t).sort().join(';'),walls=l.walls.map(([a,b])=>[t(a),t(b)].sort().join('/')).sort().join(';');forms.push(cells+'|'+walls)}return forms.sort()[0]}
module.exports={graphKey};
if(require.main===module){
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+';this.levels=LEVELS',ctx);
vm.runInContext(fs.readFileSync('public/slink-fence-levels.js','utf8')+';this.levels=LEVELS',ctx);
const original=ctx.levels,usedShapes=new Set(original.map(geometryKey)),seen=new Set(original.map(graphKey)),accepted=[];
fs.mkdirSync('work',{recursive:true});let attempts=0,cutoffs=0,essentialFailures=0;
const want=400,maxAttempts=100000;
for(let k=0;k<maxAttempts&&accepted.length<want;k++){
 attempts++;const seed=2026101600+k,r=rng(seed),pure=k%4===0,n=r()<.45?6:7;
 const l=pure?full(n,r):raw(n,seed);if(!pure&&usedShapes.has(geometryKey(l)))continue;
 const solutionEdges=new Set(l.solution.slice(1).map((b,i)=>key(l.solution[i],b))),cells=new Set(l.solution),available=[];
 for(const a of l.solution)for(const b of adj(a,n))if(a<b&&cells.has(b)&&!solutionEdges.has(key(a,b)))available.push([a,b]);
 if(available.length<3)continue;
 if(r()<.45){l.marks.push(l.solution[Math.floor(l.solution.length*(.25+r()*.45))]);l.marks.sort((a,b)=>l.solution.indexOf(a)-l.solution.indexOf(b))}
 const minWalls=2,maxWalls=n===7?12:9;
 for(let j=available.length-1;j>0;j--){const i=Math.floor(r()*(j+1));[available[i],available[j]]=[available[j],available[i]];}l.walls.push(...available.slice(0,minWalls));
 let result=solve(l,25000);
 while(result.count===2&&!result.cutoff&&l.walls.length<maxWalls){
  const alternative=[result.first,result.second].find(s=>s.some((cell,i)=>cell!==l.solution[i]));if(!alternative)break;
  const blocked=new Set(l.walls.map(([a,b])=>key(a,b))),options=alternative.slice(1).map((b,i)=>[alternative[i],b]).filter(([a,b])=>!solutionEdges.has(key(a,b))&&!blocked.has(key(a,b)));
  if(!options.length)break;l.walls.push(options[Math.floor(r()*options.length)]);result=solve(l,25000);
 }
 if(result.cutoff){cutoffs++;continue}if(result.count!==1)continue;
 // Remove barriers that add no constraint. Require every retained barrier to allow an alternate solution when removed.
 let failed=false;for(let j=l.walls.length-1;j>=0;j--){const walls=l.walls.filter((_,i)=>i!==j),audit=solve({...l,walls},50000);if(audit.cutoff){failed=true;essentialFailures++;break}if(audit.count===1)l.walls=walls;}
 if(failed||l.walls.length<2||l.walls.length>maxWalls)continue;
 result=solve(l,50000);if(result.cutoff||result.count!==1)continue;
 const choices=localChoices(l),audit=traps(l);if(choices.forcedRatio>.82||choices.longestForcedRun>Math.ceil(l.solution.length*.65))continue;
 if(audit.delayedWrongChoices<4||audit.maxWrongDepth<5)continue;
 if(choices.forcedRatio>.78||choices.longestForcedRun>12)continue;
 const graph=graphKey(l);if(seen.has(graph))continue;
 l.analysis={unique:true,searchNodes:result.nodes,...topology(l),...choices,...audit,essentialFences:l.walls.length};l.analysis.score=score(l);
 l.pureFence=pure;l.generationSeed=seed;
 if(!pure){for(const i of l.holes){const edge=i%n===0||i%n===n-1||i<n||i>=n*(n-1);if(edge&&r()<.55)continue;const v=r();l[v<.45?'water':v<.8?'lava':'stones'].push(i)}const occupied=new Set([...l.solution,...l.water,...l.lava,...l.stones]),visited=new Set([l.solution[0]]),q=[l.solution[0]];for(let at=0;at<q.length;at++)for(const j of adj(q[at],n))if(occupied.has(j)&&!visited.has(j)){visited.add(j);q.push(j)}for(const type of ['water','lava','stones'])l[type]=l[type].filter(i=>visited.has(i));}
 validate(l);accepted.push(l);seen.add(graph);if(!pure)usedShapes.add(geometryKey(l));
 if(accepted.length%10===0){fs.writeFileSync('work/expansion-fences.json',JSON.stringify(accepted));console.log(JSON.stringify({accepted:accepted.length,attempts,cutoffs,essentialFailures}));}
}
if(accepted.length!==want){fs.writeFileSync('work/expansion-fences.json',JSON.stringify(accepted));throw Error('Only '+accepted.length+' qualified in '+attempts+' attempts')}
fs.writeFileSync('work/expansion-fences.json',JSON.stringify(accepted));console.log('Qualified '+accepted.length+' new fence boards');
}
