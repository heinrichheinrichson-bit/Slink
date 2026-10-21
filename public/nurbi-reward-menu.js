(()=>{
 const C=window.NurbiRewards,R=window.NurbiRewardStore;
 const dialog=document.createElement('dialog');dialog.id='nurbiLookDialog';dialog.className='nurbi-look-dialog';dialog.innerHTML='<button class="look-close" aria-label="Vorschau schließen">×</button><img width="360" height="240" alt=""><h2></h2><p></p><button class="look-choose"></button><button class="look-cancel">Schließen</button>';
 let modalHistory=false;dialog.addEventListener('close',()=>{if(modalHistory){modalHistory=false;history.back()}});addEventListener('popstate',()=>{if(modalHistory){modalHistory=false;dialog.close()}});
 document.body.append(dialog);dialog.querySelector('.look-close').onclick=dialog.querySelector('.look-cancel').onclick=()=>dialog.close();
 window.NurbiPaintLooks=(root,chosen,select)=>{
  const state=R.read(),progress=R.progress(),test=R.all();root.replaceChildren();root.className='nurbi-look-collection';
  const balance=document.createElement('p');balance.className='look-balance';balance.textContent=test?'Alle Looks verfügbar · Test':state.availableChoices+' Farbauswahl'+(state.availableChoices===1?'':'en')+' verfügbar';root.append(balance);
  const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent='So erhältst du Farbauswahlen';details.append(summary);const intro=document.createElement('p');intro.textContent='Wähle für jede verdiente Farbauswahl einen Look. Du kannst sie auch aufheben.';details.append(intro);const milestones=document.createElement('div');milestones.className='look-milestones';for(const m of C.milestones){const item=document.createElement('span');item.textContent=(state.earned.includes(m.id)?'✓ ':'')+m.label+' · '+Math.min(progress[m.metric]||0,m.target)+' / '+m.target;milestones.append(item)}details.append(milestones);root.append(details);
  for(const [kind,title]of [['start','Startfarben'],['choice','Deine Wahl'],['special','Besondere Errungenschaften']]){
   const heading=document.createElement('h3');heading.textContent=title;root.append(heading);const grid=document.createElement('div');grid.className='nurbi-look-grid';root.append(grid);
   for(const look of C.looks.filter(p=>p.kind===kind)){
    const owned=C.available(look.id,state,test),b=document.createElement('button');b.type='button';b.className='nurbi-look-card';b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-pressed',String(chosen===look.id));b.dataset.look=look.id;
    const img=document.createElement('img');img.src=look.image;img.alt='';img.loading='lazy';img.width=180;img.height=120;const label=document.createElement('strong');label.textContent=look.name;const status=document.createElement('small');status.textContent=chosen===look.id?'✓ Ausgewählt':owned?'Verfügbar':kind==='choice'?'1 Farbauswahl':look.requirement.label+' · '+Math.min(progress[look.requirement.metric]||0,look.requirement.target)+' / '+look.requirement.target;b.append(img,label,status);grid.append(b);
    b.onclick=()=>{
     dialog.querySelector('img').src=look.image;dialog.querySelector('img').alt=look.name;dialog.querySelector('h2').textContent=look.name;
     const current=R.read(),can=C.available(look.id,current,R.all()),primary=dialog.querySelector('.look-choose');
     dialog.querySelector('p').textContent=can?'':kind==='special'?look.requirement.label+' · '+Math.min(progress[look.requirement.metric]||0,look.requirement.target)+' / '+look.requirement.target:current.availableChoices+' Farbauswahlen verfügbar';
     primary.textContent=can?'Auswählen':kind==='choice'?'Freischalten · 1 Farbauswahl':'Noch nicht freigeschaltet';primary.disabled=!can&&(kind!=='choice'||current.availableChoices<1);
     primary.onclick=()=>{if(!R.available(look.id)&&!R.unlock(look.id))return;select(look.id);dialog.close();window.SlinkJourneyMenu?.render()};history.pushState({nurbiLook:true},'',location.href);modalHistory=true;dialog.showModal();
    };
   }
  }
 };
})();
