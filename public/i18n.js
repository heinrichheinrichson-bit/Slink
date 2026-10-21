/* Live player UI localization. Only display nodes are translated; application data stays stable. */
(()=>{
 const key='nurbi-language-v1',valid=['system','de','en'],dictionary=window.NurbiEnglish||{};
 let preference='system';try{const saved=localStorage.getItem(key);if(valid.includes(saved))preference=saved}catch{}
 const system=()=>/^de(?:-|$)/i.test(navigator.languages?.[0]||navigator.language||'en')?'de':'en';
 const language=()=>preference==='system'?system():preference;
 const locale=()=>language()==='de'?'de-DE':'en-GB';
 // These phrases also occur inside generated titles, counters and accessible labels.
 const fragments=Object.entries(dictionary).filter(([de])=>de.length>=4).sort((a,b)=>b[0].length-a[0].length);
 function english(source){
  const s=String(source),trim=s.trim();if(Object.hasOwn(dictionary,trim))return s.replace(trim,dictionary[trim]);
  let value=trim;
  value=value.replace(/(\d+) Gärten · (\d+) kleine Herausforderungen\. Alle frei zugänglich\./g,'$1 gardens · $2 little challenges. All available.')
   .replace(/Level (\d+): bei 1 starten, alle (\d+) Felder füllen, Zahlen bis (\d+) der Reihe nach sammeln\./g,'Puzzle $1: start at 1, fill all $2 tiles and visit the numbers up to $3 in order.')
   .replace(/(\d+) (Rätsel|Gärten|Tagesrätsel)( lösen| abschließen)?(?= ·|$)/g,(_,n,type,action)=>action?`${type==='Gärten'?'Complete':'Solve'} ${n} ${type==='Gärten'?'gardens':type==='Tagesrätsel'?'daily puzzles':'puzzles'}`:`${n} ${type==='Gärten'?'gardens':type==='Tagesrätsel'?'daily puzzles':'puzzles'}`);

  const rules=[
   [/^(\d+) von (\d+) erblüht$/,(_,a,b)=>`${a} of ${b} in bloom`],
   [/^(\d+) Farbauswahlen? verfügbar$/,(_,n)=>`${n} colour choice${n==='1'?'':'s'} available`],
   [/^Ab (\d+) Gärten$/,(_,n)=>`From ${n} gardens`],
   [/^(\d+) (Rätsel|Gärten|Tagesrätsel)( lösen| abschließen)?$/,(_,n,type,action)=>action?`${type==='Gärten'?'Complete':'Solve'} ${n} ${type==='Gärten'?'gardens':type==='Tagesrätsel'?'daily puzzles':'puzzles'}`:`${n} ${type==='Gärten'?'gardens':type==='Tagesrätsel'?'daily puzzles':'puzzles'}`],
   [/^(\d+) Tage gespielt$/,(_,n)=>`Played on ${n} days`],
   [/^(\d+) Spieltage? · (.*)$/,(_,n,time)=>`${n} day${n==='1'?'':'s'} played · ${time}`],
   [/^(\d+) kleine Herausforderungen\. Alle frei zugänglich\.$/,(_,n)=>`${n} little challenges. All available.`],
   [/^Tipp · (\d+) verfügbar$/,(_,n)=>`Hint · ${n} available`],
   [/^Noch (\d+) Felder\.$/,(_,n)=>`${n} tiles left.`],
   [/^Weiter zu (\d+)\. Fülle alle Felder\.$/,(_,n)=>`Next: ${n}. Fill every tile.`],
   [/^Zuerst Ziel (\d+) sammeln\.$/,(_,n)=>`Visit goal ${n} first.`],
   [/^Ziel (\d+) gesammelt\. Weiter zu (\d+)\.$/,(_,a,b)=>`Goal ${a} reached. Next: ${b}.`],
   [/^(\d+),(\d+)( s| %)$/,(_,a,b,unit)=>`${a}.${b}${unit}`]
  ];
  for(const [re,replace]of rules)if(re.test(value))return s.replace(trim,value.replace(re,replace));
  // Translate known pieces once, longest first. Never retranslate inserted English words.
  const tokens=[];
  for(const [de,en]of fragments){if(!value.includes(de))continue;value=value.split(de).join(`\u0001${tokens.push(en)-1}\u0002`)}
  value=value.replace(/\u0001(\d+)\u0002/g,(_,i)=>tokens[i]);
  value=value.replace(/\bGARTEN (\d+)/g,'GARDEN $1').replace(/\bGarten (\d+)/g,'Garden $1').replace(/\bRätsel (\d+)/g,'Puzzle $1')
   .replace(/(\d+) von (\d+)/g,'$1 of $2').replace(/ erblüht/g,' in bloom').replace(/ geschafft/g,' complete')
   .replace(/ davon geschafft/g,' complete').replace(/ gesammelt/g,' reached').replace(/Ziel (\d+)/g,'Goal $1').replace(/^Spiel: /,'Game: ').replace(/^Aktuell: /,'Current: ').replace(/ entfernen$/,' remove')
   .replace(/, gespielt$/,', played').replace(/, noch nicht gespielt$/,', not played yet').replace(/, noch offen$/,', not completed')
   .replace(/(\d+) Felder/g,'$1 tiles').replace(/(\d+) Ziele/g,'$1 goals').replace(/(\d+) Gärten/g,'$1 gardens');
  return s.replace(trim,value.replace(/\b1 gardens\b/g,'1 garden').replace(/\b1 puzzles\b/g,'1 puzzle').replace(/\b1 daily puzzles\b/g,'1 daily puzzle').replace(/^(Mo|Di|Mi|Do|Fr|Sa|So)(?=,)/,day=>dictionary[day]));
 }
 const api=window.NurbiI18n={get preference(){return preference},get language(){return language()},get locale(){return locale()},t:s=>language()==='en'?english(s):String(s),english,number:(n,options)=>Number(n).toLocaleString(locale(),options),date:(date,options)=>new Date(date).toLocaleDateString(locale(),options),set};
 if(typeof document==='undefined')return;
 const texts=new WeakMap(),attributes=new WeakMap();let observer;
 function excluded(node){const e=node.nodeType===1?node:node.parentElement;return !e||!!e.closest('script,style,textarea,[contenteditable], [data-i18n-ignore]')}
 function text(node){if(excluded(node)||!node.nodeValue?.trim())return;const current=node.nodeValue,old=texts.get(node),source=old&&current===old.output?old.source:current,output=api.t(source);texts.set(node,{source,output});if(output!==current)node.nodeValue=output}
 function element(el){if(excluded(el))return;let stored=attributes.get(el);if(!stored){stored={};attributes.set(el,stored)}for(const name of ['aria-label','title','alt','placeholder']){if(!el.hasAttribute(name))continue;const current=el.getAttribute(name),old=stored[name],source=old&&old.output===current?old.source:current,output=api.t(source);stored[name]={source,output};if(current!==output)el.setAttribute(name,output)}}
 function walk(root){if(root.nodeType===3){text(root);return}if(root.nodeType!==1&&root.nodeType!==9)return;if(root.nodeType===1){if(excluded(root))return;element(root)}for(const child of root.childNodes)walk(child)}
 function install(){for(const id of ['aboutDialog','rules']){const dialog=document.getElementById(id);if(!dialog||dialog.querySelector('[data-language-settings]'))continue;const section=document.createElement('section');section.className='visitor-settings language-settings';section.dataset.languageSettings='';const label=document.createElement('label');label.htmlFor='nurbiLanguage';label.textContent='Sprache';const select=document.createElement('select');select.id='nurbiLanguage';for(const [value,title]of [['system','Systemsprache'],['de','Deutsch'],['en','English']]){const option=document.createElement('option');option.value=value;option.textContent=title;select.append(option)}select.value=preference;select.onchange=()=>set(select.value);section.append(label,select);const heading=dialog.querySelector('.dialoghead');if(heading)heading.after(section);else if(dialog.querySelector('h2'))dialog.querySelector('h2').after(section);else dialog.prepend(section)}}
 function update(){document.documentElement.lang=language();walk(document.documentElement);document.querySelectorAll('[data-language-settings] select').forEach(s=>s.value=preference)}
 function notify(){window.dispatchEvent(new Event('nurbi-language-change'));update()}
 function set(value){if(!valid.includes(value))return;preference=value;try{localStorage.setItem(key,value)}catch{}if(typeof document==='undefined')return;notify();for(const frame of document.querySelectorAll('iframe'))try{frame.contentWindow.postMessage({type:'nurbi-language',value},location.origin)}catch{}}
 function start(){install();update();observer=new MutationObserver(records=>{const roots=new Set();for(const record of records){if(record.type==='childList')for(const node of record.addedNodes)roots.add(node);else roots.add(record.target)}for(const root of roots)walk(root);install()});observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','title','placeholder']})}
 addEventListener('storage',e=>{if(e.key===key){preference=valid.includes(e.newValue)?e.newValue:'system';notify()}});
 addEventListener('languagechange',()=>{if(preference==='system')notify()});
 addEventListener('message',e=>{if(e.origin===location.origin&&e.source===parent&&e.data?.type==='nurbi-language'&&valid.includes(e.data.value)){preference=e.data.value;notify()}});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
