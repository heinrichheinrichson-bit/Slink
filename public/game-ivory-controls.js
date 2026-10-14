import {createIvoryControl} from './ivory-controls.js';
for (const [id,action,compact] of [['home','home',true],['settings','settings',true],['undo','undo',false],['hint','hint',false],['reset','reset',false]]) {
 const target=document.getElementById(id);
 const skin=createIvoryControl({action,compact,variant:'satin',ink:'#704a2c',engraved:true,deep:false});
 // Keep the original element, listeners, accessible action name and disabled state.
 target.className=skin.className;
 for(const [key,value] of Object.entries(skin.dataset))target.dataset[key]=value;
 target.style.setProperty('--ivory-ink','#704a2c');
 target.replaceChildren(...skin.childNodes);
}
