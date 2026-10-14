const assert=require('node:assert/strict');const {solve,validate}=require('../public/tools/puzzle-tool.cjs');
let seed=71014;const r=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296),adj=i=>[i-3,i+3,i%3?i-1:-1,i%3<2?i+1:-1].filter(j=>j>=0&&j<9);
for(let k=0;k<5000;k++){const cells=Array.from({length:9},(_,i)=>i).filter(()=>r()<.85);if(cells.length<3){k--;continue}const start=cells[Math.floor(r()*cells.length)],ends=cells.filter(i=>i!==start),end=ends[Math.floor(r()*ends.length)],set=new Set(cells),walls=[];for(const a of cells)for(const b of adj(a))if(a<b&&set.has(b)&&r()<.3)walls.push([a,b]);const middle=cells.filter(i=>i!==start&&i!==end),marks=r()<.5?[start,middle[Math.floor(r()*middle.length)],end]:[start,end],used=new Set([start]);let count=0;
 function brute(last,next){if(used.size===cells.length){if(last===end&&next===marks.length)count++;return}for(const b of adj(last)){if(!set.has(b)||used.has(b)||walls.some(([x,y])=>x===last&&y===b||y===last&&x===b))continue;const m=marks.indexOf(b);if(m>=0&&(m!==next||m===marks.length-1&&used.size!==cells.length-1))continue;used.add(b);brute(b,m<0?next:next+1);used.delete(b);if(count>=2)return}}
 brute(start,1);const result=solve({n:3,solution:cells,marks,walls});assert.equal(result.cutoff,false);assert.equal(result.count,Math.min(2,count),'Reference mismatch '+k);
}
assert.throws(()=>validate({n:2,solution:[0,1,3,2],holes:[],marks:[0,2],walls:[[0,1]]}));
console.log('PASS: wall-aware solver matches independent enumeration on 5000 small boards with ordered goals and barriers.');
