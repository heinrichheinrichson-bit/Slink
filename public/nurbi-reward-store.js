(()=>{
 const C=window.NurbiRewards,preview=new URLSearchParams(location.search).has('preview'),key=preview?'nurbi-rewards-preview-v1':'nurbi-rewards-v1';
 const all=()=>{try{return localStorage.getItem('nurbi-all-rewards-test-v1')==='true'}catch{return false}};
 function progress(){const J=window.SlinkJourney,done=J?.done()||new Set(),daily=Object.keys(J?.read().daily||{}).length,groups=new Map();for(const l of LEVELS){if(!groups.has(l.set))groups.set(l.set,[]);groups.get(l.set).push(l)}const sets=[...groups.values()];return {puzzles:done.size,gardens:sets.filter(levels=>levels.every(l=>done.has(l.id))).length,daily,finalGarden:sets.length&&sets.at(-1).every(l=>done.has(l.id))?1:0}}
 function read(){let raw={};try{raw=JSON.parse(localStorage.getItem(key)||'{}')}catch{}const state=C.evaluate(progress(),raw);try{localStorage.setItem(key,JSON.stringify(C.clean(state)))}catch{}return state}
 function available(id){return C.available(id,read(),all())}
 function unlock(id){const next=C.unlock(id,progress(),read(),all());if(!next)return false;try{localStorage.setItem(key,JSON.stringify(C.clean(next)))}catch{return false}return true}
 function populate(select,chosen){if(!select)return;const state=read(),test=all();select.replaceChildren();for(const look of C.looks)if(C.available(look.id,state,test)){const o=document.createElement('option');o.value=look.id;o.textContent=look.name;select.append(o)}select.value=C.available(chosen,state,test)?chosen:'apricot'}
 window.NurbiRewardStore={read,progress,available,unlock,populate,all};
})();
