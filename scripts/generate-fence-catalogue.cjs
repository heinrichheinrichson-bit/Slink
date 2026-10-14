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
const original=ctx.levels,usedShapes=new Set(original.map(geometryKey)),seen=new Set(original.map(graphKey)),accepted=[];
fs.mkdirSync('work',{recursive:true});let attempts=0,cutoffs=0,essentialFailures=0;
const want=100,maxAttempts=40000;
for(let k=0;k<maxAttempts&&accepted.length<want;k++){
 attempts++;const seed=2026101400+k,r=rng(seed),pure=k%4===0,n=accepted.length<10?(r()<.7?4:5):accepted.length<40?(r()<.65?5:6):6;
 if(pure&&accepted.filter(l=>l.pureFence).length>=30)continue;if(!pure&&accepted.filter(l=>!l.pureFence).length>=70)continue;
 const l=pure?full(n,r):raw(n,seed);if(!pure&&usedShapes.has(geometryKey(l)))continue;
 const solutionEdges=new Set(l.solution.slice(1).map((b,i)=>key(l.solution[i],b))),cells=new Set(l.solution),available=[];
 for(const a of l.solution)for(const b of adj(a,n))if(a<b&&cells.has(b)&&!solutionEdges.has(key(a,b)))available.push([a,b]);
 if(available.length<3)continue;
 if(r()<.45){l.marks.push(l.solution[Math.floor(l.solution.length*(.25+r()*.45))]);l.marks.sort((a,b)=>l.solution.indexOf(a)-l.solution.indexOf(b))}
 const minWalls=2,maxWalls=n===4?5:n===5?7:9;
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
 if(accepted.length>=10&&audit.delayedWrongChoices<1)continue;
 if(accepted.length>=60&&audit.delayedWrongChoices<3)continue;
 const graph=graphKey(l);if(seen.has(graph))continue;
 l.analysis={unique:true,searchNodes:result.nodes,...topology(l),...choices,...audit,essentialFences:l.walls.length};l.analysis.score=score(l);
 l.pureFence=pure;l.generationSeed=seed;
 if(!pure){for(const i of l.holes){const edge=i%n===0||i%n===n-1||i<n||i>=n*(n-1);if(edge&&r()<.55)continue;const v=r();l[v<.45?'water':v<.8?'lava':'stones'].push(i)}const occupied=new Set([...l.solution,...l.water,...l.lava,...l.stones]),visited=new Set([l.solution[0]]),q=[l.solution[0]];for(let at=0;at<q.length;at++)for(const j of adj(q[at],n))if(occupied.has(j)&&!visited.has(j)){visited.add(j);q.push(j)}for(const type of ['water','lava','stones'])l[type]=l[type].filter(i=>visited.has(i));}
 validate(l);accepted.push(l);seen.add(graph);if(!pure)usedShapes.add(geometryKey(l));
 if(accepted.length%10===0){fs.writeFileSync('work/fence-candidates.json',JSON.stringify(accepted));console.log(JSON.stringify({accepted:accepted.length,attempts,cutoffs,essentialFailures}));}
}
if(accepted.length!==want){fs.writeFileSync('work/fence-candidates.json',JSON.stringify(accepted));throw Error('Only '+accepted.length+' qualified in '+attempts+' attempts')}
accepted.sort((a,b)=>a.analysis.score-b.analysis.score);
const groups=[{count:10,after:30,chapter:'1B',set:'01b · Am Gartenzaun',title:'Am Gartenzaun',difficulty:'Einstieg',description:'Zäune kennenlernen: Beide Felder bleiben frei, nur der Übergang ist gesperrt.'},{count:20,after:80,chapter:'2B',set:'02b · Über kleine Umwege',title:'Über kleine Umwege',difficulty:'Aufbau',description:'Zäune lenken den Weg. Plane, von welcher Seite du die Felder erreichst.'},{count:20,after:130,chapter:'3B',set:'03b · Zwischen Holz und Wasser',title:'Zwischen Holz und Wasser',difficulty:'Anspruchsvoll',description:'Gesperrte Kanten und Gelände gemeinsam lesen.'},{count:25,after:230,chapter:'5B',set:'05b · Verborgene Durchgänge',title:'Verborgene Durchgänge',difficulty:'Anspruchsvoll',description:'Ein kleiner Umweg kann später eine ganze Fläche abschneiden.'},{count:25,after:290,chapter:'6B',set:'06b · Verzäunte Denkpfade',title:'Verzäunte Denkpfade',difficulty:'Anspruchsvoll',description:'Die stärkere Auswahl nach Prüfmetriken. Schwierigkeit noch im Spieltest abzustimmen.'}];
accepted.forEach((l,i)=>l.id='slink-fence-v1-'+String(i+1).padStart(3,'0'));
const remaining=[...accepted],ordered=[];for(let groupIndex=0;groupIndex<groups.length;groupIndex++){const chosen=remaining.filter(l=>groupIndex<2?l.n<=5:true).slice(0,groups[groupIndex].count);if(chosen.length!==groups[groupIndex].count)throw Error('Insufficient compact introduction boards');for(const l of chosen){ordered.push(l);remaining.splice(remaining.indexOf(l),1)}}accepted.splice(0,accepted.length,...ordered);
let at=0;for(const g of groups)for(let k=0;k<g.count;k++){const l=accepted[at],r=rng(400000+at);const themeIndex=Number(l.id.split('-').at(-1))-1;l.name=g.title+' · '+String(k+1).padStart(2,'0');l.set=g.set;l.chapter=g.chapter;l.chapterLevel=k+1;l.chapterCount=g.count;l.chapterDescription=g.description;l.difficulty=g.difficulty;l.insertAfter=g.after;l.fence={design:['rails','picket','cross','logs'][themeIndex%4],style:Math.floor(themeIndex/4)%2?'chestnut':'honey'};l.meadowSeed=400000+at;l.meadowVariants={};for(const cell of l.solution)l.meadowVariants[cell]=['calm','classic','classic','rich','tuft'][Math.floor(r()*5)];const free=l.solution.filter(i=>!l.marks.includes(i));if(free.length){l.meadowVariants[free[Math.floor(free.length*.34)]]='flowers';if(free.length>10)l.meadowVariants[free[Math.floor(free.length*.77)]]='visitors'}at++;}
const header='// Additive fence catalogue. Existing level objects and IDs are not rewritten.\nconst SLINK_LEGACY_IDS=LEVELS.map(l=>l.id);\nconst FENCE_LEVELS='+JSON.stringify(accepted)+';\n';
fs.writeFileSync('public/slink-fence-levels.js',header+'{const base=[...LEVELS],mixed=[];for(let i=0;i<base.length;i++){mixed.push(base[i]);mixed.push(...FENCE_LEVELS.filter(l=>l.insertAfter===i+1));}LEVELS.splice(0,LEVELS.length,...mixed);}\n');
fs.writeFileSync('public/fence-catalogue-report.json',JSON.stringify({total:accepted.length,attempts,cutoffs,humanDifficultyValidated:false,pureFence:accepted.filter(l=>l.pureFence).length,groups,levels:accepted.map(l=>({id:l.id,n:l.n,fields:l.solution.length,walls:l.walls.length,pureFence:l.pureFence,...l.analysis}))},null,2));console.log('Installed '+accepted.length+' additive fence puzzles.');
}
