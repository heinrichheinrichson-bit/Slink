(()=>{
 const P=window.SlinkAdPolicy,$=id=>document.getElementById(id),preview=new URLSearchParams(location.search).has('preview'),key=preview?'slink-economy-preview-v1':'slink-economy-v1';let raw={};try{raw=JSON.parse(localStorage.getItem(key)||'{}')}catch{}
 const unlimitedKey=preview?'slink-unlimited-hints-preview-v1':'slink-unlimited-hints-v1';let unlimited=false;try{unlimited=localStorage.getItem(unlimitedKey)==='true'}catch{}
 const state=P.create(raw,LEVELS.map(l=>l.id));let current,finished=false,ready=false,paused=new URLSearchParams(location.search).has('prewarm'),elapsed=0,last=null,busy=false,test=false,visible=true;
 try{visible=localStorage.getItem('slink-stopwatch-visible')!=='false'}catch{}
 function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{}}
 function active(){return ready&&!paused&&!document.hidden&&!finished&&!busy&&!document.querySelector('dialog[open]')}
 function sync(){const now=performance.now();if(last!==null){const delta=Math.max(0,now-last);elapsed+=delta;state.activeMs+=delta}last=active()?now:null;paint()}
 function format(ms){const s=Math.floor(ms/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
 function paint(){if($('puzzleTime')){$('puzzleTime').textContent=format(elapsed);$('puzzleClock').hidden=!visible}if(current&&$('hintBalance')){const n=unlimited?'∞':P.remaining(state,current.id);$('hintBalance').textContent=n;$('hint')?.setAttribute('aria-label',unlimited?'Tipp · unbegrenzt':'Tipp · '+n+' verfügbar')}}
 function unavailable(){ $('adHintStatus').textContent='Gerade ist kein Werbevideo verfügbar. Du kannst jederzeit selbst weiterpuzzeln.' }
 let settle;
 function simulated(kind){return new Promise(resolve=>{settle=resolve;$('adSimulationTitle').textContent=kind==='rewarded'?'Testvideo · +1 Tipp':'Testanzeige';$('adSimulation').showModal()})}
 async function show(kind){const provider=window.SlinkAdProvider;if(!test&&!provider?.available?.(kind))return null;sync();busy=true;sync();try{return test?await simulated(kind):await provider.show(kind)}catch{return null}finally{busy=false;sync()}}
 $('finishAdSimulation').onclick=()=>{const resolve=settle;settle=null;$('adSimulation').close();resolve?.({shown:true,rewarded:true})};
 function cancelSimulation(){const resolve=settle;settle=null;$('adSimulation').close();resolve?.({shown:true,rewarded:false})}
 $('cancelAdSimulation').onclick=cancelSimulation;$('adSimulation').addEventListener('cancel',e=>{e.preventDefault();cancelSimulation()});
 $('unlimitedHints').checked=unlimited;$('unlimitedHints').onchange=e=>{unlimited=e.target.checked;try{localStorage.setItem(unlimitedKey,String(unlimited))}catch{}if(unlimited)$('adHintDialog').close();paint();sync()};
 $('adTestEnabled').onchange=e=>{test=e.target.checked};
 $('watchHintAd').onclick=async()=>{if(busy||!current)return;const id=current.id;$('watchHintAd').disabled=true;const result=await show('rewarded');if(result?.shown)P.shown(state);if(result?.shown&&result?.rewarded){P.reward(state,id);$('adHintStatus').textContent='Ein zusätzlicher Tipp ist verfügbar.';$('adHintDialog').close()}else if(result?.shown)$('adHintStatus').textContent='Video abgebrochen – kein Tipp verbraucht oder gutgeschrieben.';else unavailable();save();paint();$('watchHintAd').disabled=false};
 $('closeAdHint').onclick=()=>$('adHintDialog').close();
 $('stopwatchVisible').checked=visible;$('stopwatchVisible').onchange=e=>{visible=e.target.checked;try{localStorage.setItem('slink-stopwatch-visible',String(visible))}catch{}paint()};
 document.addEventListener('visibilitychange',()=>{sync();save()});document.addEventListener('slink-game-ready',()=>{ready=true;sync()});
 new MutationObserver(sync).observe(document.querySelector('main'),{subtree:true,attributes:true,attributeFilter:['open']});
 let ticks=0;setInterval(()=>{sync();if(++ticks%15===0)save()},1000);
 window.SlinkEconomy={showWinTime(){if($('winTime')){$('winTime').textContent=format(elapsed);$('winTime').hidden=!visible;if($('winTime').parentElement)$('winTime').parentElement.hidden=!visible}},load(level,done){sync();current=level;finished=false;elapsed=0;for(const i of done)if(!state.completed.includes(LEVELS[i].id))state.completed.push(LEVELS[i].id);P.opened(state,level.set);save();sync()},complete(){sync();finished=true;P.complete(state,current.id,current.set);save();sync()},undo(){finished=false;sync()},pause(value){sync();paused=value;sync();save()},spendHint(){if(unlimited){paint();return true}if(!P.spend(state,current.id)){ $('adHintStatus').textContent='Die drei kostenlosen Tipps für dieses Rätsel sind aufgebraucht. Ein Werbevideo gibt dir einen weiteren Tipp.';$('adHintDialog').showModal();sync();return false}save();paint();return true},async next(boundary,callback){if(busy)return;sync();if(!unlimited&&window.SlinkAdProvider?.adFree!==true&&P.eligible(state,boundary,current.set)){const result=await show('interstitial');if(result?.shown){P.shown(state);save()}}callback()}};
})();
