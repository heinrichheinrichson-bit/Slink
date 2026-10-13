const fs=require('fs');
let seed=48271;const rand=()=>((seed=seed*16807%2147483647)/2147483647);
const levels=[];
for(let k=0;k<24;k++){
 const n=k<2?4:k<8?5:6; let holes=k<2?[]:k<5?[0]:k<8?[0,n*n-1]:[0,1];
 let cells=Array.from({length:n*n},(_,i)=>i).filter(i=>!holes.includes(i));
 const neighbors=i=>[i-n,i+n,i%n?i-1:-1,i%n<n-1?i+1:-1].filter(j=>cells.includes(j));
 let solution=null,budget=0;
 for(let attempt=0;attempt<80&&!solution;attempt++){
  let path=[cells[Math.floor(rand()*cells.length)]],used=new Set(path);budget=0;
  function dfs(){if(++budget>150000)return false;if(path.length===cells.length){solution=[...path];return true;}let opts=neighbors(path.at(-1)).filter(i=>!used.has(i)).map(i=>({i,score:neighbors(i).filter(j=>!used.has(j)).length+rand()*.8})).sort((a,b)=>a.score-b.score);for(const {i} of opts){used.add(i);path.push(i);if(dfs())return true;path.pop();used.delete(i);}return false;}dfs();
 }
 if(!solution)throw Error('No solution '+k);
 const count=k<2?3:k<6?4:5;const marks=Array.from({length:count},(_,i)=>solution[Math.round(i*(solution.length-1)/(count-1))]);
 const walls=[];if(k>=3){for(const a of cells)for(const b of neighbors(a)){if(a<b&&Math.abs(solution.indexOf(a)-solution.indexOf(b))!==1&&rand()<.13)walls.push([a,b]);}}
 levels.push({n,holes,solution,marks,walls,name:['Erster Funke','Im Fluss','Kleine Umwege','Zwischen den Zeilen','Neue Wege','Die Lichtung','Richtungswechsel','Mit Gefühl','Muschelsuche','Am Ufer','Sandspuren','Korallenpfad','Gezeiten','Wellenreiter','Ein schöner Umweg','Weitblick','Sternenstaub','Mondwanderung','Verwoben','Das große Ganze','Die stille Nacht','Sternenpfad','Lichtfänger','Bis zum Morgen'][k]});
}
fs.writeFileSync(__dirname+'/levels.js','const LEVELS = '+JSON.stringify(levels)+';');
for(const l of levels){if(new Set(l.solution).size!==l.n*l.n-l.holes.length)throw Error('Coverage');for(let i=1;i<l.solution.length;i++){let a=l.solution[i-1],b=l.solution[i];if(!(Math.abs(a-b)===l.n||(Math.floor(a/l.n)===Math.floor(b/l.n)&&Math.abs(a-b)===1)))throw Error('Adjacency');}if(l.walls.some(([a,b])=>Math.abs(l.solution.indexOf(a)-l.solution.indexOf(b))===1))throw Error('Wall');}console.log('24 level solutions verified: coverage, adjacency, walls.');


