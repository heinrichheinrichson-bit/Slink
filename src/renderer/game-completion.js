import {createCompletionScene} from './completion-scene.js';
let scene;
window.SlinkShowCompletion=()=>{const card=document.getElementById('win');if(card.hidden)return;if(!scene){scene=createCompletionScene(document.getElementById('winCanvas'),{active:()=>!card.hidden&&!window.SlinkPrewarmPaused});document.getElementById('winJoy').onclick=()=>scene.replay()}scene.configure({friendPalette:'lavender',friendSize:100,friendX:0,friendY:0,heading:0,cameraAngle:-36,cameraHeight:230,zoom:100,motion:'joy'});scene.replay()};
window.SlinkShowCompletion();
