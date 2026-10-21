import * as THREE from 'three';
import {createFuzzyCreature,BASE_CREATURE_PALETTES as CREATURE_PALETTES} from './fuzzy-creature.js';
export const COLOR_SKETCHES=Object.entries(CREATURE_PALETTES).map(([id,p])=>({id,name:p.name,existing:true,coat:p.coat,root:p.root,tip:p.tip,iris:p.iris,face:'#ffe5bd',cheeks:'#e69b88',antenna:'#ffe5bd',accent:p.coat,pattern:'solid'}));
for(const [id,name,coat,root,tip,iris,face,cheeks,antenna,accent,pattern]of [
 ['pistachio','Pistazie','#a4b875','#81915a','#e8edbd','#82633e','#fff0c9','#d8a28b','#f0d99f','#eee6bd','belly'],
 ['honey','Honig','#dcb16b','#b68b49','#ffe9b5','#598b91','#fff0d5','#e8a18c','#fff1ce','#f4dfb4','belly'],
 ['berry','Waldbeere','#ae809e','#875e7d','#edd0df','#7b9d8b','#f6e4d2','#d5979c','#e5c6d5','#d9aec1','belly'],
 ['moon','Mondblau','#819fb9','#607a97','#d3e6ee','#b88e54','#f1e8d7','#d5a7a1','#e5e6c9','#b8d1db','belly'],
 ['mocha','Mokka','#9b7961','#77543f','#e2c4a1','#729c91','#f5e2bd','#d39780','#e6cd9e','#634b45','saddle'],
 ['peach','Pfirsichblüte','#e4ae9e','#bc8b82','#ffe4cf','#749c9e','#fff1da','#d78989','#f5d898','#f6d6bd','belly'],
 ['polar','Wolkenfell','#c1c9ce','#98a8b4','#f8f1df','#788fbe','#fff4dc','#d9b0a8','#ead8b0','#dce4e1','belly'],
 ['dusk','Abendrot','#a99ab7','#83748e','#e7d9df','#bc985e','#f7e5ca','#d5a0a1','#eac58a','#e1b98c','saddle']
])COLOR_SKETCHES.push({id,name,coat,root,tip,iris,face,cheeks,antenna,accent,pattern});
// Achievement directions remain study proposals, not game unlock requirements.
for(const [id,name,coat,root,tip,iris,face,cheeks,antenna,accent,paws,pattern,patternSize,patternStrength]of [
 ['stardew','Sternentau','#384663','#253149','#7886a5','#cfaa63','#f3dfbe','#c2999c','#d9ba78','#edc66c','#d8c6a6','speckles',.65,.9],
 ['cloverluck','Kleeglück','#829867','#61764e','#c2d2a0','#a1844d','#ede4c4','#cd9f85','#e2d39a','#4d6945','#e5d7b5','spots',.8,.55],
 ['wildberry','Wildbeere','#78516c','#55394f','#b78ba4','#8eae99','#ebd5c6','#ce8f9c','#d9b8c9','#c6a2b3','#493c4e','mask',1,.8],
 ['honeypaw','Honigpfote','#ca9b59','#a5743d','#efd09a','#6f9696','#f3e2bf','#d69b7e','#e7c77d','#775339','#71513e','tail',1,.9],
 ['moonflower','Mondblüte','#d5cddc','#aea4bf','#f6eeda','#83a9bb','#fff0d7','#d6b0b7','#e7d2a7','#ece1ce','#b2a6c2','belly',1,.75],
 ['eveningfox','Abendfuchs','#c37e52','#985634','#edb77d','#759783','#f6dfb7','#d3947d','#e0be86','#f0d6aa','#58463b','mask',1,.9],
 ['fern','Farnschatten','#617c73','#405d58','#a9c2ab','#c29a60','#e9dfbf','#bc9d8b','#dac995','#344f4a','#455a50','stripes',1.2,.65],
 ['rosequartz','Rosenquarz','#cda9b2','#aa8296','#f2d9d1','#819c9e','#fae9d7','#ce959e','#ead3b2','#f1dfc8','#ab879c','tail',1.3,.7],
 ['amber','Bernstein','#b98543','#8c5a2f','#ebc783','#799b8c','#f4e2bb','#d79d7b','#e8c77d','#6b4d38','#694b37','spots',.7,.7],
 ['iceclover','Eisklee','#a5c4c1','#7faaa9','#e0eee0','#8e7aa8','#f7edda','#d5b5af','#e7d4aa','#e9e5c9','#7d9fa1','speckles',.75,.6],
 ['plum','Pflaumenblüte','#796780','#58475f','#b4a2b8','#b7a071','#f0e2d1','#c398a6','#ddc6a4','#cfb4c3','#57455d','saddle',1.15,.65],
 ['dandelion','Löwenzahn','#c6bc79','#99935e','#ede4ac','#7c9d94','#f6e8c4','#d3a48d','#e8ce7d','#f1e8ce','#8a8160','belly',1.1,.8]
])COLOR_SKETCHES.push({id:'reward-'+id,name,coat,root,tip,iris,face,cheeks,antenna,accent,paws,pattern,patternSize,patternStrength,rewardStudy:true});
COLOR_SKETCHES.push({id:'tiger-study',name:'Tigerpfote',coat:'#cd9656',root:'#a5733f',tip:'#ecc38b',iris:'#8b9c71',face:'#f8e6c4',cheeks:'#cc9c89',antenna:'#e3c894',accent:'#49382e',paws:'#edddbf',pattern:'tiger',patternSize:1,patternStrength:.9});
COLOR_SKETCHES.push({id:'leopard-study',name:'Leopardenpfote',coat:'#ccab70',root:'#a88750',tip:'#edd3a0',iris:'#8a9a68',face:'#f4e6cb',cheeks:'#c59c86',antenna:'#d9c18d',accent:'#48372b',paws:'#e6d4ae',pattern:'leopard',patternSize:1,patternStrength:.95});
export {FUR_PATTERNS,furPatternMask} from './creature-coloring.js';
export function createColorStudyModel(){const model=createFuzzyCreature();return {...model,apply:model.applyAppearance}}
