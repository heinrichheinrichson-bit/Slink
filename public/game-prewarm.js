(()=>{
 const prewarm=new URLSearchParams(location.search).has('prewarm');
 if(prewarm){window.SlinkPrewarmPaused=true;const home=document.getElementById('home');if(home)home.target='_top';addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;if(e.data?.type==='slink-wake'){window.SlinkPrewarmPaused=false;document.getElementById('board')?.focus({preventScroll:true})}});addEventListener('load',()=>requestAnimationFrame(()=>parent.postMessage({type:'slink-ready',levelId:window.SlinkWarmLevelId},location.origin)));return}
 const link=document.getElementById('continue');if(!link)return;let frame,ready=false,levelId;
 function prepare(){if(frame)return;frame=document.createElement('iframe');frame.title='Vorbereitetes Rätsel';frame.setAttribute('aria-hidden','true');frame.tabIndex=-1;frame.style.cssText='position:fixed;top:0;left:-200vw;width:100vw;height:100dvh;border:0;z-index:1000;background:#f18b24';frame.src='slink.html?prewarm=1';document.body.append(frame)}
 addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==frame?.contentWindow||e.data?.type!=='slink-ready')return;ready=true;levelId=e.data.levelId;link.dataset.prepared='true'});
 link.addEventListener('click',e=>{let current;try{current=localStorage.getItem('slink-curated-v1-level-id')}catch{}if(!ready||current&&current!==levelId)return;e.preventDefault();frame.style.left='0';frame.removeAttribute('aria-hidden');frame.tabIndex=0;document.querySelector('.shell').hidden=true;document.querySelector('.study-note').hidden=true;window.SlinkPlayingPrepared=true;frame.contentWindow.postMessage({type:'slink-wake'},location.origin);history.pushState({slinkPlaying:true},'',location.pathname+'#playing');});
 addEventListener('popstate',()=>{if(window.SlinkPlayingPrepared)location.reload()});
 addEventListener('load',()=>{if('requestIdleCallback'in window)requestIdleCallback(()=>setTimeout(prepare,350),{timeout:1500});else setTimeout(prepare,800)});
})();
