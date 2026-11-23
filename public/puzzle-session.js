/* Validate every resumed step against the current board, including wrong-but-legal routes. */
(function(root){
 const MAX_MS=31536000000;
 const plain=value=>value&&typeof value==='object'&&!Array.isArray(value);
 const signature=l=>JSON.stringify([l.n,l.marks,l.holes,l.walls,l.solution.length]);
 function valid(l,s){
  if(!plain(s)||s.id!==l.id||s.board!==signature(l)||!Array.isArray(s.path)||s.path.length>=l.solution.length||!Number.isFinite(s.ms)||s.ms<0||s.ms>MAX_MS||typeof s.hinted!=='boolean')return false;
  const visited=new Set();let goal=0,last;
  for(const cell of s.path){
   if(!Number.isInteger(cell)||cell<0||cell>=l.n*l.n||l.holes.includes(cell)||visited.has(cell))return false;
   if(last===undefined){if(cell!==l.marks[0])return false}
   else if(!(Math.abs(cell-last)===l.n||Math.floor(cell/l.n)===Math.floor(last/l.n)&&Math.abs(cell-last)===1)||l.walls.some(([a,b])=>a===last&&b===cell||b===last&&a===cell))return false;
   const mark=l.marks.indexOf(cell);if(mark>=0){if(mark!==goal||mark===l.marks.length-1)return false;goal++}
   visited.add(cell);last=cell;
  }
  return true;
 }
 function create(storage,key='nurbi-puzzle-sessions-v1'){
  const read=()=>{try{const raw=JSON.parse(storage.getItem(key)||'null');return raw?.version===1&&plain(raw.entries)?raw.entries:{}}catch{return {}}};
  const slot=(l,date)=>date?'daily:'+date+':'+l.id:'catalogue:'+l.id;
  function put(l,date,value){const entries=read(),id=slot(l,date);delete entries[id];if(value)entries[id]=value;const keys=Object.keys(entries);for(const old of keys.slice(0,Math.max(0,keys.length-1500)))delete entries[old];try{storage.setItem(key,JSON.stringify({version:1,entries}))}catch{}}
  return {load(l,date=null){const s=read()[slot(l,date)];return valid(l,s)?{path:[...s.path],ms:s.ms,hinted:s.hinted}:null},clear(l,date=null){put(l,date,null)},save(l,path,ms,hinted,date=null){const s={id:l.id,board:signature(l),path:[...path],ms,hinted:Boolean(hinted)};put(l,date,valid(l,s)&&(path.length||ms>0||s.hinted)?s:null)}};
 }
 const api={valid,signature,create};if(typeof module!=='undefined')module.exports=api;else root.NurbiPuzzleSession=api;
})(typeof window==='undefined'?globalThis:window);
