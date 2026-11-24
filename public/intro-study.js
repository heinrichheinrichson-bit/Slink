/* Standalone preview only: no storage, ads, rewards or regular game integration. */
(()=>{
 const $=id=>document.getElementById(id),lessons=[
  {title:'Mach den Garten grün.',copy:'Starte bei 1. Ziehe Nurbi über jedes braune Feld bis zur 2.',hint:'Am Ende bleibt kein braunes Feld übrig.',success:'Genau! Dein Weg hat den ganzen Garten begrünt.',next:'Weiter zu den Zahlen'},
  {title:'Eine Blüte nach der anderen.',copy:'Begrüne wieder alle Felder. Besuche dabei 1, 2 und 3 in dieser Reihenfolge.',hint:'Die letzte Zahl erreichst du ganz zum Schluss.',success:'Alle Felder grün. Alle Zahlen der Reihe nach.',next:'Noch ein kleiner Garten'},
  {title:'Dein Weg lässt sich ändern.',copy:'Jedes Feld gehört nur einmal zum Weg. Ziehe auf deinem Weg zurück, um ihn zu korrigieren.',hint:'Du kannst jederzeit einen Schritt zurückziehen.',success:'Geschafft! Jetzt kennst du die Regeln.',next:'Los geht’s'}
 ];
 let stage=0,game,gestureStarted=0,gestureTouched=false,lastFeedback='',ready=false;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 window.NurbiPlayerSettings={value:{reduce:reduced.matches}};
 reduced.addEventListener?.('change',e=>{window.NurbiPlayerSettings.value.reduce=e.matches});
 function outline(l){const cells=new Set(l.solution),has=(x,y)=>x>=0&&x<l.n&&y>=0&&y<l.n&&cells.has(y*l.n+x),edges=[];
  for(const i of cells){const x=i%l.n,y=Math.floor(i/l.n),a=20+x*80,b=20+y*80;if(!has(x,y-1))edges.push([[a,b],[a+80,b]]);if(!has(x+1,y))edges.push([[a+80,b],[a+80,b+80]]);if(!has(x,y+1))edges.push([[a+80,b+80],[a,b+80]]);if(!has(x-1,y))edges.push([[a,b+80],[a,b]])}
  let points=[edges[0][0]];const next=new Map(edges.map(e=>[e[0].join(),e[1]]));let p=next.get(points[0].join());while(p&&p.join()!==points[0].join()){points.push(p);p=next.get(p.join());if(points.length>100)break}
  points=points.filter((b,i)=>{const a=points[(i+points.length-1)%points.length],c=points[(i+1)%points.length];return !(a[0]===b[0]&&b[0]===c[0]||a[1]===b[1]&&b[1]===c[1])});let d='';for(let i=0;i<points.length;i++){const a=points[(i+points.length-1)%points.length],b=points[i],c=points[(i+1)%points.length],u=[b[0]-Math.sign(b[0]-a[0])*20,b[1]-Math.sign(b[1]-a[1])*20],v=[b[0]+Math.sign(c[0]-b[0])*20,b[1]+Math.sign(c[1]-b[1])*20];d+=(i?' L':'M')+u.join(',')+' Q'+b.join(',')+' '+v.join(',')}return d+'Z';
 }
 function feedback(text){if(text===lastFeedback)return;lastFeedback=text;$('feedback').textContent=text}
 function render(){const ok=window.Slink3D.update(game.level,game.path,outline(game.level),move);$('coverage').textContent=game.path.length+' von '+game.level.solution.length+' Feldern grün';$('undo').disabled=game.path.length<2;$('continue').hidden=!game.complete;$('undo').hidden=$('reset').hidden=game.complete;$('continue').textContent=lessons[stage].next;document.querySelector('.feedback').classList.toggle('success',game.complete);$('feedbackIcon').textContent=game.complete?'✓':'';
  if(game.complete)feedback(lessons[stage].success);
  if(!ok){feedback('Die 3D-Ansicht konnte nicht geladen werden. Bitte lade die Vorschau neu.');return}
  ready=true;
 }
 function move(i){if(!game||game.complete)return;const result=game.move(i);
  if(result==='start'||result==='forward'||result==='back'){
   gestureTouched=true;$('gesture').hidden=true;render();if(game.complete)return;
   if(result==='back')feedback('So kannst du deinen Weg ändern. Suche jetzt einen anderen Weg.');
   else if(game.stuck)feedback('Hier geht es nicht weiter. Ziehe auf deinem Weg zurück.');
   else if(stage===0)feedback(game.path.length===1?'Ziehe weiter. Auch die Felder ohne Zahl müssen grün werden.':'Begrüne die übrigen braunen Felder, bevor du die 2 erreichst.');
   else feedback(lessons[stage].hint);
  }else if(result==='unfinished')feedback('Noch nicht: Es sind braune Felder übrig. Nimm auch sie in deinen Weg auf.');
  else if(result==='order')feedback('Zuerst die '+game.nextNumber+'. Die Zahlen geben die Reihenfolge vor.');
  else if(result==='visited')feedback('Hier warst du schon. Zum Ändern ziehst du auf deinem Weg zurück.');
  else if(result==='start-first')feedback('Beginne bei Nurbi auf dem Feld mit der 1.');
 }
 function load(index){stage=index;game=NurbiIntroStudy.create(index);$('finished').hidden=true;for(const child of document.querySelector('.lesson').children)child.inert=false;$('lessonTitle').textContent=lessons[index].title;$('lessonCopy').textContent=lessons[index].copy;document.querySelectorAll('.step').forEach((n,i)=>{n.classList.toggle('active',i===stage);n.classList.toggle('done',i<stage);n.textContent=i<stage?'✓':String(i+1);if(i===stage)n.setAttribute('aria-current','step');else n.removeAttribute('aria-current')});gestureTouched=false;gestureStarted=performance.now();$('gesture').hidden=true;lastFeedback='';feedback(lessons[stage].hint);render();}
 $('continue').onclick=()=>{if(!game.complete)return;if(stage<2)load(stage+1);else finish()};
 $('reset').onclick=()=>load(stage);$('undo').onclick=()=>{const p=game.path;if(p.length>1)move(p.at(-2))};
 function finish(){$('gesture').hidden=true;$('finished').hidden=false;for(const child of document.querySelector('.lesson').children)if(child!==$('finished'))child.inert=true;$('again').focus({preventScroll:true})}
 $('skip').onclick=finish;$('again').onclick=()=>load(0);
 addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='intro-study-restart')load(0)});
 $('board').addEventListener('keydown',e=>{const offsets={ArrowLeft:-1,ArrowRight:1,ArrowUp:-game.level.n,ArrowDown:game.level.n};if(e.key in offsets){e.preventDefault();if(!game.path.length)move(game.level.marks[0]);else move(game.path.at(-1)+offsets[e.key])}else if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!game.path.length)move(game.level.marks[0])}else if(e.key==='Backspace'){e.preventDefault();$('undo').click()}});
 window.SlinkRenderScene=render;
 function animate(now){requestAnimationFrame(animate);if(!ready||gestureTouched||game.complete||!$('finished').hidden||reduced.matches)return;
  const age=now-gestureStarted;if(age>4100){$('gesture').hidden=true;return}const start=window.Slink3D.studyPoint(game.level.solution[0]),end=window.Slink3D.studyPoint(game.level.solution[1]);if(!start||!end)return;const rect=$('field').getBoundingClientRect(),u=Math.max(0,Math.min(1,((age-450)%1900)/1100)),v=u*u*(3-2*u);$('gesture').hidden=age<450;$('gesture').style.left=(start.x+(end.x-start.x)*v-rect.left)+'px';$('gesture').style.top=(start.y+(end.y-start.y)*v-rect.top)+'px';$('gesture').style.opacity=String(Math.min(1,(1-u)*6));
 }
 load(0);requestAnimationFrame(animate);
})();
