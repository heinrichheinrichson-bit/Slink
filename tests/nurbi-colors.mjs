import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createColorStudyModel,COLOR_SKETCHES,FUR_PATTERNS,furPatternMask} from '../src/renderer/nurbi-color-model.js';
import {CREATURE_PALETTES} from '../src/renderer/fuzzy-creature.js';
const original=JSON.stringify(CREATURE_PALETTES),model=createColorStudyModel(),fur=model.group.getObjectByName('curved-soft-fur'),positions=fur.geometry.attributes.position.array.slice(),normals=fur.geometry.attributes.normal.array.slice();
assert.equal(COLOR_SKETCHES.length,24);assert.equal(new Set(COLOR_SKETCHES.map(p=>p.id)).size,24);
for(const p of COLOR_SKETCHES){model.apply(p);assert.deepEqual(fur.geometry.attributes.position.array,positions);assert.deepEqual(fur.geometry.attributes.normal.array,normals);for(const value of fur.geometry.attributes.color.array)assert.ok(Number.isFinite(value)&&value>=0&&value<=2);}
model.apply(COLOR_SKETCHES[0]);const baseline=fur.geometry.attributes.color.array.slice();model.apply(COLOR_SKETCHES[5]);assert.notDeepEqual(fur.geometry.attributes.color.array,baseline);model.apply(COLOR_SKETCHES[0]);assert.deepEqual(fur.geometry.attributes.color.array,baseline);assert.equal(JSON.stringify(CREATURE_PALETTES),original);for(const pattern of FUR_PATTERNS){const p={...COLOR_SKETCHES[0],pattern,accent:'#554477',paws:'#223344',patternSize:1.4,patternStrength:.7};model.apply(p);assert.deepEqual(fur.geometry.attributes.position.array,positions);let changed=false;for(let i=0;i<fur.geometry.attributes.color.array.length;i++)if(fur.geometry.attributes.color.array[i]!==baseline[i]){changed=true;break}if(pattern!=='solid')assert.ok(changed,pattern+' changes fur');for(const xyz of [[0,0,0],[5,15,20],[-10,-17,25],[0,30,6]]){const value=furPatternMask(p,...xyz);assert.ok(value>=0&&value<=1);assert.equal(furPatternMask({...p,patternStrength:0},...xyz),0)}model.group.traverse(o=>{if(o.isMesh&&o.parent.name==='soft-paw')assert.equal(o.material.color.getHexString(),'223344')});}
model.dispose();console.log('24 color sketches: geometry preserved, finite colors, reset and game palettes intact.');


const source=fs.readFileSync(new URL('../src/renderer/nurbi-color-study.js',import.meta.url),'utf8');
const load=source.slice(source.indexOf('const $='),source.indexOf('const canvas='));
const custom={...COLOR_SKETCHES[0],id:'custom-old-123',name:'My edited Nurbi',pattern:'speckles'};
const state={selected:custom.id,custom:[custom],drafts:{apricot:{...COLOR_SKETCHES[0],coat:'#112233',name:'Edited Apricot'},[custom.id]:{...custom,paws:'#445566',patternSize:1.5,patternStrength:.4}},favorites:[custom.id]};
const context={COLOR_SKETCHES,FUR_PATTERNS,URLSearchParams,location:{search:''},document:{getElementById:()=>null},localStorage:{getItem:()=>JSON.stringify(state)}};
vm.createContext(context);vm.runInContext(load+';globalThis.result={drafts,selected:selected.id,favorites:[...favorites]};',context);
assert.equal(context.result.drafts.apricot.coat,'#112233');assert.equal(context.result.drafts.apricot.paws,'#112233');assert.equal(context.result.drafts.apricot.name,'Edited Apricot');assert.equal(context.result.selected,custom.id);assert.equal(context.result.drafts[custom.id].paws,'#445566');assert.equal(context.result.drafts[custom.id].pattern,'speckles');assert.equal(context.result.drafts[custom.id].patternSize,1.5);assert.equal(context.result.drafts[custom.id].patternStrength,.4);assert.equal(context.result.favorites[0],custom.id);
console.log('PASS old edited coats/custom drafts/favorites preserved; independent paws and pattern settings restored.');
