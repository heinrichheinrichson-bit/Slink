export const IVORY_BUTTON_VARIANTS={cast:'A · Elfenbeinguss',soft:'B · Weich modelliert',satin:'C · Matter Schliff'};
const gearPoints=[];for(let i=0;i<8;i++)for(const [offset,r]of [[-.32,8],[-.18,10],[.18,10],[.32,8]]){const a=(i+offset)*Math.PI/4;gearPoints.push((12+Math.cos(a)*r).toFixed(3)+','+(12+Math.sin(a)*r).toFixed(3))}
const icons={
 undo:'<path d="M9 4 3 10l6 6M3 10h10a6 6 0 0 1 0 12h-2" transform="translate(1 -1)"/>',
 hint:'<path d="M9 16c0-2-3.5-3.6-3.5-7.5a6.5 6.5 0 0 1 13 0c0 3.9-3.5 5.5-3.5 7.5ZM9 19h6M10 22h4M9.5 9.5 12 12l2.5-2.5M12 12v4"/>',
 reset:'<path d="M20 10a8.5 8.5 0 1 0-.5 7M20 3.5V10h-6.5"/>',
 home:'<path d="m3 10 9-7 9 7M5.5 8v13h5v-7h3v7h5V8"/>',
 settings:'<polygon points="'+gearPoints.join(' ')+'"/><circle cx="12" cy="12" r="3.25"/>'
};
const labels={undo:'Zurück',hint:'Tipp',reset:'Neu',home:'Startseite',settings:'Einstellungen'};
/** Real native button. Add ivory-controls.css; wire onclick to existing game actions. */
export function createIvoryControl({action='undo',variant='cast',compact=false,gold=false,label=labels[action]}={}){
 if(!icons[action]||!IVORY_BUTTON_VARIANTS[variant])throw Error('Unknown ivory control');const button=document.createElement('button');button.type='button';button.className='ivory-control'+(compact?' compact':'');button.dataset.action=action;button.dataset.variant=variant;button.dataset.gold=String(gold);button.setAttribute('aria-label',label);
 const face=document.createElement('span');face.className='ivory-face';face.setAttribute('aria-hidden','true');const content=document.createElement('span');content.className='ivory-content';content.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+icons[action]+'</svg>';if(!compact){const text=document.createElement('span');text.className='ivory-label';text.textContent=label;content.append(text)}button.append(face,content);return button;
}
