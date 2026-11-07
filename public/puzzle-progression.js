/* Stable-ID unlocks. Daily puzzles and archived developer entry points are separate. */
(function(root){
 function create(levels){const byId=new Map(levels.map(l=>[l.id,l])),groups=new Map(),position=new Map();for(const l of levels){if(!groups.has(l.set))groups.set(l.set,[]);const group=groups.get(l.set);position.set(l.id,group.length);group.push(l)}
  const resolved=value=>typeof value==='string'?byId.get(value):value;
  function open(value,done=new Set()){const l=resolved(value);if(!l||!position.has(l.id))return false;const i=position.get(l.id);return i<3||done.has(l.id)||done.has(groups.get(l.set)[i-1].id)}
  function next(set,done=new Set()){return (groups.get(set)||[]).find(l=>!done.has(l.id)&&open(l,done))||null}
  function resume(value,done=new Set()){const l=resolved(value);if(l&&open(l,done))return l;return next(l?.set,done)||levels.find(l=>open(l,done))||null}
  return {open,next,resume};
 }
 if(typeof module!=='undefined')module.exports={create};else if(root.NurbiPlayerSettings)root.NurbiProgression=create(LEVELS);
})(typeof window==='undefined'?globalThis:window);
