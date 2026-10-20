import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createColorStudyModel,COLOR_SKETCHES,FUR_PATTERNS,furPatternMask} from '../src/renderer/nurbi-color-model.js';
import {CREATURE_PALETTES} from '../src/renderer/fuzzy-creature.js';
const original=JSON.stringify(CREATURE_PALETTES),model=createColorStudyModel(),fur=model.group.getObjectByName('curved-soft-fur'),positions=fur.geometry.attributes.position.array.slice(),normals=fur.geometry.attributes.normal.array.slice();
assert.equal(COLOR_SKETCHES.length,26);assert.equal(new Set(COLOR_SKETCHES.map(p=>p.id)).size,26);
for(const p of COLOR_SKETCHES){model.apply(p);assert.deepEqual(fur.geometry.attributes.position.array,positions);assert.deepEqual(fur.geometry.attributes.normal.array,normals);for(const value of fur.geometry.attributes.color.array)assert.ok(Number.isFinite(value)&&value>=0&&value<=2);}
model.apply(COLOR_SKETCHES[0]);const baseline=fur.geometry.attributes.color.array.slice();model.apply(COLOR_SKETCHES[5]);assert.notDeepEqual(fur.geometry.attributes.color.array,baseline);model.apply(COLOR_SKETCHES[0]);assert.deepEqual(fur.geometry.attributes.color.array,baseline);assert.equal(JSON.stringify(CREATURE_PALETTES),original);for(const pattern of FUR_PATTERNS){const p={...COLOR_SKETCHES[0],pattern,accent:'#554477',paws:'#223344',patternSize:1.4,patternStrength:.7};model.apply(p);assert.deepEqual(fur.geometry.attributes.position.array,positions);let changed=false;for(let i=0;i<fur.geometry.attributes.color.array.length;i++)if(fur.geometry.attributes.color.array[i]!==baseline[i]){changed=true;break}if(pattern!=='solid')assert.ok(changed,pattern+' changes fur');for(const xyz of [[0,0,0],[5,15,20],[-10,-17,25],[0,30,6]]){const value=furPatternMask(p,...xyz);assert.ok(value>=0&&value<=1);assert.equal(furPatternMask({...p,patternStrength:0},...xyz),0)}model.group.traverse(o=>{if(o.isMesh&&o.parent.name==='soft-paw')assert.equal(o.material.color.getHexString(),'223344')});}
model.dispose();console.log('26 color sketches: geometry preserved, finite colors, reset and game palettes intact.');


const source=fs.readFileSync(new URL('../src/renderer/nurbi-color-study.js',import.meta.url),'utf8');
const load=source.slice(source.indexOf('const $='),source.indexOf('const canvas='));
const custom={...COLOR_SKETCHES[0],id:'custom-old-123',name:'My edited Nurbi',pattern:'speckles'};
const state={selected:custom.id,custom:[custom],drafts:{apricot:{...COLOR_SKETCHES[0],coat:'#112233',name:'Edited Apricot'},[custom.id]:{...custom,paws:'#445566',patternSize:1.5,patternStrength:.4}},favorites:[custom.id]};
const context={COLOR_SKETCHES,FUR_PATTERNS,URLSearchParams,location:{search:''},document:{getElementById:()=>null},localStorage:{getItem:()=>JSON.stringify(state)}};
vm.createContext(context);vm.runInContext(load+';globalThis.result={drafts,selected:selected.id,favorites:[...favorites]};',context);
assert.equal(context.result.drafts.apricot.coat,'#112233');assert.equal(context.result.drafts.apricot.paws,'#112233');assert.equal(context.result.drafts.apricot.name,'Edited Apricot');assert.equal(context.result.selected,custom.id);assert.equal(context.result.drafts[custom.id].paws,'#445566');assert.equal(context.result.drafts[custom.id].pattern,'speckles');assert.equal(context.result.drafts[custom.id].patternSize,1.5);assert.equal(context.result.drafts[custom.id].patternStrength,.4);assert.equal(context.result.favorites[0],custom.id);
console.log('PASS old edited coats/custom drafts/favorites preserved; independent paws and pattern settings restored.');

const tiger={pattern:"tiger",patternSize:1,patternStrength:1};let differences=0;for(let y=-4;y<33;y+=.4)if(Math.abs(furPatternMask(tiger,8,y,17)-furPatternMask(tiger,-8,y,17))>.1)differences++;assert.ok(differences>5,"flanks have asymmetric stripe paths");

for(const x of [-5.6,5.6])assert.equal(furPatternMask(tiger,x,-18,23.4),0,"eyes remain clear");assert.equal(furPatternMask(tiger,0,-19,16.5),0,"muzzle remains clear");assert.ok(furPatternMask(tiger,12,-9,24.6)>0,"cheek drawing visible");assert.ok(furPatternMask(tiger,0,-13,30.2)>0,"forehead drawing visible");for(const y of [5,15,25])assert.equal(furPatternMask(tiger,4,y,3),0,"belly remains clear");

const leopard={pattern:"leopard",patternSize:1,patternStrength:1};for(const x of [-5.6,5.6])assert.equal(furPatternMask(leopard,x,-18,23.4),0);assert.equal(furPatternMask(leopard,0,-19,16.5),0);assert.equal(furPatternMask(leopard,3,12,3),0);let rosettePixels=0;for(let y=3;y<28;y+=.5)for(let x=-9;x<9;x+=.5)if(furPatternMask(leopard,x,y,18)>.5)rosettePixels++;assert.ok(rosettePixels>30,"visible rosette arcs");

let headSpots=0;for(let a=-Math.PI;a<Math.PI;a+=.08)for(let e=.2;e<1.5;e+=.08){const x=13.1*Math.cos(a)*Math.cos(e),y=-8+11.5*Math.sin(a)*Math.cos(e),z=20+12.2*Math.sin(e);if(furPatternMask(leopard,x,y,z)>.5)headSpots++;}assert.ok(headSpots>30,"leopard spots cover actual ellipsoid forehead and sides");

state.removed=[custom.id];vm.runInContext("",context);const deletedContext={...context,localStorage:{getItem:()=>JSON.stringify(state)}};vm.createContext(deletedContext);vm.runInContext(load+";globalThis.result={selected:selected.id,drafts,removed:[...removed]};",deletedContext);assert.notEqual(deletedContext.result.selected,custom.id);assert.equal(deletedContext.result.drafts[custom.id].paws,"#445566");assert.equal(deletedContext.result.removed[0],custom.id);
