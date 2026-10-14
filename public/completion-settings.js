(()=>{
 const key='slink-completion-delay-ms',fallback=4400;
 let delay=fallback;try{const raw=localStorage.getItem(key),value=Number(raw);if(raw!==null&&Number.isFinite(value)&&value>=1000&&value<=15000)delay=Math.round(value/200)*200}catch{}
 window.SlinkCompletionDelay=delay;
 const highlightKey='slink-backtrack-highlight-v1';
 window.SlinkBacktrackHighlight={enabled:true,strength:.24};try{const saved=JSON.parse(localStorage.getItem(highlightKey)||'null');if(saved){if(typeof saved.enabled==='boolean')window.SlinkBacktrackHighlight.enabled=saved.enabled;if(Number.isFinite(saved.strength))window.SlinkBacktrackHighlight.strength=Math.min(.5,Math.max(.1,saved.strength))}}catch{}
 const dialog=document.getElementById('rules');if(!dialog)return;
 const section=document.createElement('section');section.className='visitor-settings';section.setAttribute('aria-label','Abschlussmeldung');
 section.innerHTML='<h3>Abschlussmeldung</h3><label class="visitor-slider" for="completionDelay"><span>Wartezeit</span><input id="completionDelay" type="range" min="1000" max="15000" step="200"><output id="completionDelayValue" for="completionDelay"></output></label><p>So lange bleibt dein gelöster Garten sichtbar, bevor die Abschlussmeldung erscheint. Gilt ab dem nächsten Abschluss.</p><button type="button" id="completionDelayReset">Standard · 4,4 Sekunden</button>';
 dialog.querySelector('.dialoghead').after(section);
 const slider=section.querySelector('input'),output=section.querySelector('output');
 function set(value,save=false){window.SlinkCompletionDelay=value;slider.value=String(value);output.textContent=(value/1000).toLocaleString('de-DE',{minimumFractionDigits:1,maximumFractionDigits:1})+' s';if(save)try{localStorage.setItem(key,String(value))}catch{}}
 const cue=document.createElement('section');cue.className='visitor-settings';cue.innerHTML='<h3>Orientierung beim Zurückgehen</h3><label class="visitor-toggle"><input id="backtrackHighlight" type="checkbox"> Vorheriges Feld hervorheben</label><label class="visitor-slider" for="backtrackStrength"><span>Stärke</span><input id="backtrackStrength" type="range" min="10" max="50" step="2"><output id="backtrackStrengthValue"></output></label><p>Berühre die Figur oder das zuletzt betretene Feld. Solange du gedrückt hältst, wird nur der nächste Rückwärtsschritt heller.</p>';
 section.after(cue);const enabled=cue.querySelector('#backtrackHighlight'),strength=cue.querySelector('#backtrackStrength'),strengthOutput=cue.querySelector('output');enabled.checked=window.SlinkBacktrackHighlight.enabled;strength.value=String(Math.round(window.SlinkBacktrackHighlight.strength*100));
 function updateCue(save=false){window.SlinkBacktrackHighlight={enabled:enabled.checked,strength:Number(strength.value)/100};strengthOutput.textContent=strength.value+' %';strength.disabled=!enabled.checked;if(save)try{localStorage.setItem(highlightKey,JSON.stringify(window.SlinkBacktrackHighlight))}catch{}}
 enabled.onchange=()=>updateCue(true);strength.oninput=()=>updateCue(true);updateCue();
 slider.oninput=()=>set(Number(slider.value),true);section.querySelector('button').onclick=()=>set(fallback,true);set(delay);
})();
