/* Isolated teaching gardens. No catalogue, rewards, hints or storage writes. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.NurbiIntroStudy=factory()})(typeof window==='undefined'?globalThis:window,()=>{
 const specs=[
  {id:'intro-study-green',n:3,solution:[0,1,2,5,8],marks:[0,8]},
  {id:'intro-study-numbers',n:3,solution:[6,3,0,1,2,5,4,7,8],marks:[6,2,8]},
  {id:'intro-study-return',n:3,solution:[0,1,2,5,4,3,6,7,8],marks:[0,2,6,8]}
 ];
 const levels=specs.map(l=>({...l,holes:Array.from({length:l.n*l.n},(_,i)=>i).filter(i=>!l.solution.includes(i)),walls:[],water:[],lava:[],stones:[],meadowSeed:843}));
 const adjacent=(a,b,n)=>Math.abs(a%n-b%n)+Math.abs(Math.floor(a/n)-Math.floor(b/n))===1;
 function create(stage=0){const level=levels[stage];if(!level)throw Error('Unknown teaching garden');let path=[],rewound=false;
  function allowed(i){if(!level.solution.includes(i))return 'outside';if(!path.length)return i===level.marks[0]?'start':'start-first';const last=path.at(-1);if(i===last)return 'same';if(!adjacent(last,i,level.n))return 'adjacent';if(i===path.at(-2))return 'back';if(path.includes(i))return 'visited';const mark=level.marks.indexOf(i),next=level.marks.filter(i=>path.includes(i)).length;if(mark>=0&&mark!==next)return 'order';if(mark===level.marks.length-1&&path.length!==level.solution.length-1)return 'unfinished';return 'forward'}
  return {level,get path(){return [...path]},get rewound(){return rewound},get complete(){return path.length===level.solution.length},move(i){if(path.length===level.solution.length)return 'complete';const result=allowed(i);if(result==='start'||result==='forward')path.push(i);if(result==='back'){path.pop();rewound=true}return result},get stuck(){return path.length>0&&path.length<level.solution.length&&!level.solution.some(i=>allowed(i)==='forward')},get nextNumber(){return level.marks.filter(i=>path.includes(i)).length+1}};
 }
 return {levels,create,adjacent};
});
