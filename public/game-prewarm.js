(()=>{
 const prewarm=new URLSearchParams(location.search).has('prewarm');
 if(prewarm){window.SlinkPrewarmPaused=true;const home=document.getElementById('home');if(home)home.target='_top';addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;if(e.data?.type==='slink-wake'){window.SlinkPrewarmPaused=false;document.getElementById('board')?.focus({preventScroll:true})}});const notify=()=>parent.postMessage({type:'slink-ready',levelId:window.SlinkWarmLevelId},location.origin);if(document.readyState==='complete')notify();else addEventListener('load',notify);return}
 const link=document.getElementById('continue');if(!link)return;let frame,ready=false,levelId,pending=false,requestedAt=0;
 function prepare(){if(frame)return;const start=performance.now();frame=document.createElement('iframe');frame.title='Vorbereitetes Rätsel';frame.setAttribute('aria-hidden','true');frame.tabIndex=-1;frame.style.cssText='position:fixed;top:0;left:-200vw;width:100vw;height:100dvh;border:0;z-index:1000;background:#f18b24';frame.src='slink.html?prewarm=1';document.body.append(frame);link.dataset.prepareStarted=String(start)}
 function show(){let current;try{current=localStorage.getItem('slink-curated-v1-level-id')}catch{}if(current&&current!==levelId)return false;pending=false;frame.style.left='0';frame.removeAttribute('aria-hidden');frame.tabIndex=0;document.querySelector('.shell').hidden=true;document.querySelector('.study-note').hidden=true;document.querySelectorAll?.('dialog[open]').forEach(dialog=>dialog.close());window.SlinkPlayingPrepared=true;link.removeAttribute('aria-busy');link.dataset.waitMs=String(Math.round(requestedAt?performance.now()-requestedAt:0));frame.contentWindow.postMessage({type:'slink-wake'},location.origin);history.pushState({slinkPlaying:true},'',location.pathname+'#playing');return true}
 addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==frame?.contentWindow||e.data?.type!=='slink-ready')return;ready=true;levelId=e.data.levelId;link.dataset.prepared='true';if(pending&&!show())requestPlay()});
 function requestPlay(){pending=true;requestedAt=performance.now();if(ready&&show())return;let current;try{current=localStorage.getItem('slink-curated-v1-level-id')}catch{}if(ready&&current&&current!==levelId){frame.remove();frame=null;ready=false;}link.setAttribute('aria-busy','true');const text=link.querySelector('small');if(text)text.textContent='Dein Garten wird vorbereitet …';prepare()}
 window.SlinkOpenPrepared=requestPlay;
 link.addEventListener('click',e=>{e.preventDefault();requestPlay()});
 addEventListener('popstate',()=>{if(window.SlinkPlayingPrepared)location.reload()});
 // Start promptly; neither load events nor idle/animation frames should gate preparation.
 setTimeout(prepare,0);
})();
