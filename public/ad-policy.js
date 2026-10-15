(function(root){
 const GAP=360000,ROUNDS=4,GRACE=5;
 function create(raw={},ids=[]){if(!raw||typeof raw!=='object')raw={};const known=new Set(ids),hints={};for(const [id,h]of Object.entries(raw.hints&&typeof raw.hints==='object'?raw.hints:{})){if(!known.has(id)||!h||typeof h!=='object')continue;hints[id]={used:Math.max(0,Math.min(3,Math.floor(Number(h.used)||0))),credit:Math.max(0,Math.min(999,Math.floor(Number(h.credit)||0)))}}const bounded=n=>Number.isFinite(n)?Math.max(0,Math.min(31536000000,n)):0;return {completed:[...new Set((Array.isArray(raw.completed)?raw.completed:[]).filter(id=>known.has(id)))],rounds:Math.min(ids.length,Math.floor(bounded(raw.rounds))),activeMs:bounded(raw.activeMs),seen:(Array.isArray(raw.seen)?raw.seen:[]).filter(x=>typeof x==='string'),protected:typeof raw.protected==='string'?raw.protected:null,hints}}

 function opened(s,set){if(!s.seen.includes(set)){s.seen.push(set);s.protected=set}}
 function complete(s,id,set){if(s.completed.includes(id))return false;s.completed.push(id);s.rounds++;if(s.protected===set)s.protected=null;return true}
 function eligible(s,boundary=false,set=null){return s.protected!==set&&!boundary&&s.completed.length>GRACE&&s.rounds>=ROUNDS&&s.activeMs>=GAP}
 function shown(s){s.rounds=0;s.activeMs=0}
 function remaining(s,id){return Math.max(0,3-(Number(s.hints[id]?.used)||0))+(Number(s.hints[id]?.credit)||0)}
 function spend(s,id){if(!remaining(s,id))return false;const h=s.hints[id]||={used:0,credit:0};if(h.used<3)h.used++;else h.credit--;return true}
 function reward(s,id){const h=s.hints[id]||={used:0,credit:0};h.credit++}
 const api={GAP,ROUNDS,GRACE,create,opened,complete,eligible,shown,remaining,spend,reward};if(typeof module!=='undefined')module.exports=api;else root.SlinkAdPolicy=api;
})(typeof window!=='undefined'?window:globalThis);
