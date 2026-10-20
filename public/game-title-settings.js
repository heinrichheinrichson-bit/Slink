(()=>{

 const preview=new URLSearchParams(location.search).has('preview'),key=preview?'slink-game-title-preview-v1':'slink-game-title-v1',heading=document.querySelector('.app>header h1'),dialog=document.getElementById('rules');if(!heading||!dialog)return;

 const normal=value=>String(value||'').replace(/\s+/g,' ').trim().slice(0,32)||"NURBI’S GARDEN";let value='NURBI’S GARDEN';try{value=normal(localStorage.getItem(key));if(value==='SLINK')value='NURBI’S GARDEN'}catch{}

 const text=document.createElement('b');text.style.cssText='display:block;font:inherit;letter-spacing:inherit;white-space:nowrap';const logo=heading.querySelector('.nurbi-logo');text.hidden=true;if(!logo&&heading.firstChild?.nodeType===3)heading.firstChild.remove();heading.append(text);const base=parseFloat(getComputedStyle(heading).fontSize)||32,spacing=parseFloat(getComputedStyle(heading).letterSpacing)||0;heading.style.minWidth='0';heading.style.flex='1 1 0px';

 function fit(){heading.style.fontSize=base+'px';text.style.letterSpacing=spacing+'px';const width=heading.clientWidth;if(width>0){const scale=Math.min(1,width/Math.max(1,text.scrollWidth));heading.style.fontSize=base*scale+'px';text.style.letterSpacing=spacing*scale+'px'}}

 function apply(raw,save=true){value=normal(raw);text.textContent=value;const branded=/^nurbi[’']s garden$/i.test(value);if(logo)logo.hidden=!branded;text.hidden=branded&&!!logo;heading.setAttribute('aria-label',value);fit();if(save)try{localStorage.setItem(key,value)}catch{}}

 const section=document.createElement('section');section.className='visitor-settings';section.innerHTML='<h3>Schriftzug · Test</h3><label for="gameTitleText">Name im Spielbildschirm</label><input id="gameTitleText" type="text" maxlength="32" placeholder="NURBI’S GARDEN" autocomplete="off" spellcheck="false" style="display:block;width:100%;margin:10px 0;padding:12px;border:1px solid #ceb58b;border-radius:12px;background:#fff7e5;color:#704a2c;font:inherit"><button type="button" id="gameTitleReset">Zurück zu Nurbi’s Garden</button>';

 dialog.querySelector('.dialoghead').after(section);const input=section.querySelector('input');input.value=value;input.oninput=()=>apply(input.value);section.querySelector('button').onclick=()=>{input.value='NURBI’S GARDEN';apply('NURBI’S GARDEN')};new ResizeObserver(fit).observe(heading.parentElement);apply(value,false);

})();
