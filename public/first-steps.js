/* One short, skippable introduction. No route changes or automatic hints. */
(()=>{
 if(!window.NurbiPlayerSettings)return;
 const params=new URLSearchParams(location.search),key='nurbi-intro-v1';
 const steps=[
  ['Bei 1 geht’s los','Beginne bei 1 und ziehe über benachbarte Felder.','1 →'],
  ['Der Reihe nach','Besuche die Zahlen in der richtigen Reihenfolge.','1 → 2 → 3'],
  ['Alles wird grün','Begrüne alle Erdfelder, bevor du die letzte Zahl erreichst.','✿']
 ];
 let dialog,title,copy,art,counter,next,step=0,finished=false;
 function seen(){if(finished)return true;try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved?.version===1&&saved.finished===true)return true;const done=JSON.parse(localStorage.getItem('slink-curated-v1-done-ids')||'[]');return Array.isArray(done)&&done.length>0}catch{return false}}
 function finish(){finished=true;try{localStorage.setItem(key,JSON.stringify({version:1,finished:true}))}catch{}dialog.close();window.SlinkEconomy?.pause(Boolean(window.SlinkPrewarmPaused))}
 function paint(){title.textContent=steps[step][0];copy.textContent=steps[step][1];art.textContent=steps[step][2];counter.textContent=(step+1)+' / '+steps.length;next.textContent=step===steps.length-1?'Los geht’s':'Weiter'}
 function open(manual=false){if(!dialog||dialog.open||(!manual&&(params.has('preview')||seen())))return;step=0;paint();window.SlinkEconomy?.pause(true);dialog.showModal()}
 function mount(){
  // This entry runs only on puzzle pages, never the menu or cosmetic previews.
  if(!document.getElementById('board'))return;
  dialog=document.createElement('dialog');dialog.id='firstSteps';dialog.setAttribute('aria-labelledby','firstStepsTitle');dialog.setAttribute('aria-describedby','firstStepsCopy');
  counter=document.createElement('p');counter.className='intro-counter';
  art=document.createElement('div');art.className='intro-art';art.setAttribute('aria-hidden','true');
  title=document.createElement('h2');title.id='firstStepsTitle';copy=document.createElement('p');copy.id='firstStepsCopy';
  const actions=document.createElement('div');actions.className='intro-actions';const skip=document.createElement('button');skip.type='button';skip.textContent='Überspringen';skip.onclick=finish;
  next=document.createElement('button');next.type='button';next.className='intro-next';next.setAttribute('autofocus','');next.onclick=()=>{if(step===steps.length-1){finish();return}step++;paint()};
  actions.append(skip,next);dialog.append(counter,art,title,copy,actions);dialog.addEventListener('cancel',event=>{event.preventDefault();finish()});document.body.append(dialog);
  const help=document.getElementById('helpDialog');if(help){const replay=document.createElement('button');replay.type='button';replay.className='intro-replay';replay.textContent='Einführung ansehen';replay.onclick=()=>open(true);help.append(replay)}
  if(!params.has('prewarm'))open();
 }
 addEventListener('message',event=>{if(event.origin===location.origin&&event.source===parent&&event.data?.type==='slink-wake')open()});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
