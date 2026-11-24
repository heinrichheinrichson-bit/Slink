/* Standalone preview only: no storage, ads, rewards or regular game integration. */
(()=>{
 const $=id=>document.getElementById(id),lessons=[
  {title:'Ein Weg über alle Felder',copy:'Halte Nurbi bei 1 gedrückt und ziehe ihn bis zur 2. Dein Weg muss durch alle Erdfelder führen.',success:'Garten abgeschlossen.',next:'Weiter'},
  {title:'Zahlen der Reihe nach',copy:'Verbinde wieder alle Erdfelder. Führe Nurbi dabei zuerst zur 2 und anschließend zur 3.',success:'Garten abgeschlossen.',next:'Weiter'},
  {title:'Den Weg korrigieren',copy:'Besuche jedes Erdfeld genau einmal. Zum Korrigieren ziehst du Nurbi auf seinem bisherigen Weg zurück.',success:'Garten abgeschlossen.',next:'Einführung abschließen'}
 ];
 const embedded=new URLSearchParams(location.search).has('embedded')&&parent!==window;
 let stage=0,game,gestureStarted=0,gestureTouched=false,lastFeedback='',ready=false;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 window.NurbiPlayerSettings={value:{reduce:reduced.matches||(embedded&&parent.NurbiPlayerSettings?.value.reduce===true)}};
 reduced.addEventListener?.('change',e=>{window.NurbiPlayerSettings.value.reduce=e.matches});
 function outline(l){const cells=new Set(l.solution),has=(x,y)=>x>=0&&x<l.n&&y>=0&&y<l.n&&cells.has(y*l.n+x),edges=[];
  for(const i of cells){const x=i%l.n,y=Math.floor(i/l.n),a=20+x*80,b=20+y*80;if(!has(x,y-1))edges.push([[a,b],[a+80,b]]);if(!has(x+1,y))edges.push([[a+80,b],[a+80,b+80]]);if(!has(x,y+1))edges.push([[a+80,b+80],[a,b+80]]);if(!has(x-1,y))edges.push([[a,b+80],[a,b]])}
  let points=[edges[0][0]];const next=new Map(edges.map(e=>[e[0].join(),e[1]]));let p=next.get(points[0].join());while(p&&p.join()!==points[0].join()){points.push(p);p=next.get(p.join());if(points.length>100)break}
  points=points.filter((b,i)=>{const a=points[(i+points.length-1)%points.length],c=points[(i+1)%points.length];return !(a[0]===b[0]&&b[0]===c[0]||a[1]===b[1]&&b[1]===c[1])});let d='';for(let i=0;i<points.length;i++){const a=points[(i+points.length-1)%points.length],b=points[i],c=points[(i+1)%points.length],u=[b[0]-Math.sign(b[0]-a[0])*20,b[1]-Math.sign(b[1]-a[1])*20],v=[b[0]+Math.sign(c[0]-b[0])*20,b[1]+Math.sign(c[1]-b[1])*20];d+=(i?' L':'M')+u.join(',')+' Q'+b.join(',')+' '+v.join(',')}return d+'Z';
 }
 function feedback(text){if(text===lastFeedback)return;lastFeedback=text;$('feedback').textContent=text;$('feedback').hidden=!text}
 function render(){const ok=window.Slink3D.update(game.level,game.path,outline(game.level),move);$('coverage').textContent=game.path.length+' von '+game.level.solution.length+' Feldern grün';$('undo').disabled=game.path.length<2;$('continue').hidden=!game.complete;$('undo').hidden=$('reset').hidden=game.complete;$('continue').textContent=lessons[stage].next;document.querySelector('.feedback').classList.toggle('success',game.complete);$('feedbackIcon').textContent=game.complete?'✓':'';
  if(game.complete)feedback(lessons[stage].success);
  if(!ok){feedback('Die 3D-Ansicht konnte nicht geladen werden. Bitte lade die Vorschau neu.');return}
  ready=true;
 }
 function move(i){if(!game||game.complete)return;const result=game.move(i);
  if(result==='start'||result==='forward'||result==='back'){
   gestureTouched=true;$('gesture').hidden=true;render();if(game.complete)return;
   if(game.stuck)feedback('Sackgasse. Ziehe Nurbi auf seinem Weg zurück und wähle eine andere Richtung.');
   else feedback('');
  }else if(result==='unfinished')feedback('Dein Weg führt noch nicht durch alle Erdfelder. Ergänze die fehlenden Felder vor dem Ziel.');
  else if(result==='order')feedback('Besuche zuerst die '+game.nextNumber+'.');
  else if(result==='visited')feedback('Dieses Feld gehört bereits zu deinem Weg. Rückgängig machst du die Schritte in umgekehrter Reihenfolge.');
  else if(result==='start-first')feedback('Starte auf dem Feld mit der 1.');
 }
 function load(index){stage=index;game=NurbiIntroStudy.create(index);$('finished').hidden=true;for(const child of document.querySelector('.lesson').children)child.inert=false;$('lessonTitle').textContent=lessons[index].title;$('lessonCopy').textContent=lessons[index].copy;document.querySelectorAll('.step').forEach((n,i)=>{n.classList.toggle('active',i===stage);n.classList.toggle('done',i<stage);n.textContent=i<stage?'✓':String(i+1);if(i===stage)n.setAttribute('aria-current','step');else n.removeAttribute('aria-current')});gestureTouched=false;gestureStarted=performance.now();$('gesture').hidden=true;lastFeedback=null;feedback('');render();}
 $('continue').onclick=()=>{if(!game.complete)return;if(stage<2)load(stage+1);else finish()};
 $('reset').onclick=()=>load(stage);$('undo').onclick=()=>{const p=game.path;if(p.length>1)move(p.at(-2))};
 function finish(){if(embedded){parent.postMessage({type:'nurbi-intro-finish'},location.origin);return}$('gesture').hidden=true;$('finished').hidden=false;for(const child of document.querySelector('.lesson').children)if(child!==$('finished'))child.inert=true;$('again').focus({preventScroll:true})}
 $('skip').onclick=finish;$('again').onclick=()=>load(0);
 addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='intro-study-restart')load(0)});
 $('board').addEventListener('keydown',e=>{const offsets={ArrowLeft:-1,ArrowRight:1,ArrowUp:-game.level.n,ArrowDown:game.level.n};if(e.key in offsets){e.preventDefault();if(!game.path.length)move(game.level.marks[0]);else move(game.path.at(-1)+offsets[e.key])}else if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!game.path.length)move(game.level.marks[0])}else if(e.key==='Backspace'){e.preventDefault();$('undo').click()}});
 window.SlinkRenderScene=render;
 function animate(now){requestAnimationFrame(animate);if(!ready||gestureTouched||game.complete||!$('finished').hidden||reduced.matches)return;
  const age=now-gestureStarted;const start=window.Slink3D.studyPoint(game.level.solution[0]),end=window.Slink3D.studyPoint(game.level.solution[1]);if(!start||!end)return;const rect=$('field').getBoundingClientRect(),u=Math.max(0,Math.min(1,((age-450)%1900)/1100)),v=u*u*(3-2*u);$('gesture').hidden=age<450;$('gesture').style.left=(start.x+(end.x-start.x)*v-rect.left)+'px';$('gesture').style.top=(start.y+(end.y-start.y)*v-rect.top)+'px';$('gesture').style.opacity=String(Math.min(1,(1-u)*6));
 }
 load(0);requestAnimationFrame(animate);
})();
