(()=>{
 const $=id=>document.getElementById(id);
 window.SlinkShellRefresh=()=>{let id,ids=[];try{const legacy=typeof SLINK_LEGACY_IDS!=='undefined'?SLINK_LEGACY_IDS:LEVELS.map(l=>l.id);id=localStorage.getItem('slink-curated-v1-level-id')||legacy[Number(localStorage.getItem('slink-curated-v1-level'))||0];const raw=localStorage.getItem('slink-curated-v1-done-ids');ids=raw?JSON.parse(raw):JSON.parse(localStorage.getItem('slink-curated-v1-done')||'[]').map(i=>legacy[i])}catch{}const level=LEVELS.find(l=>l.id===id)||LEVELS[0],group=LEVELS.filter(l=>l.set===level.set),known=new Set(LEVELS.map(l=>l.id)),count=new Set((Array.isArray(ids)?ids:[]).filter(id=>known.has(id))).size;$('continueText').textContent=level.set.replace(/^\S+\s*·\s*/,'')+' · Rätsel '+(group.indexOf(level)+1);$('totalDone').textContent=count+' / '+LEVELS.length;$('totalBar').style.width=count/LEVELS.length*100+'%'};
 window.SlinkShellRefresh();
 $('settingsSlot').querySelector('button').onclick=()=>$('aboutDialog').showModal();
 for(const b of document.querySelectorAll('[data-close]'))b.onclick=()=>$(b.dataset.close).close();
 let queued;
 for(const id of ['discover','navGardens','backSlot','navFriend'])$(id).onclick=()=>{if(!window.SlinkMenuReady)queued=id};
 document.addEventListener('slink-menu-ready',()=>{if(queued){const id=queued;queued=null;($(id).querySelector('button')||$(id)).click()}});
 // Paint the complete lightweight shell before constructing the living 3D scene.
 requestAnimationFrame(()=>setTimeout(()=>{const script=document.createElement('script');script.src='gartenstudio.js';document.body.append(script)},0));
})();
