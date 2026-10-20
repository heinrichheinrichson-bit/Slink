import assert from 'node:assert/strict';
import {createColorStudyModel,COLOR_SKETCHES} from '../src/renderer/nurbi-color-model.js';
import {CREATURE_PALETTES} from '../src/renderer/fuzzy-creature.js';
const original=JSON.stringify(CREATURE_PALETTES),model=createColorStudyModel(),fur=model.group.getObjectByName('curved-soft-fur'),positions=fur.geometry.attributes.position.array.slice(),normals=fur.geometry.attributes.normal.array.slice();
assert.equal(COLOR_SKETCHES.length,12);assert.equal(new Set(COLOR_SKETCHES.map(p=>p.id)).size,12);
for(const p of COLOR_SKETCHES){model.apply(p);assert.deepEqual(fur.geometry.attributes.position.array,positions);assert.deepEqual(fur.geometry.attributes.normal.array,normals);for(const value of fur.geometry.attributes.color.array)assert.ok(Number.isFinite(value)&&value>=0&&value<=2);}
model.apply(COLOR_SKETCHES[0]);const baseline=fur.geometry.attributes.color.array.slice();model.apply(COLOR_SKETCHES[5]);assert.notDeepEqual(fur.geometry.attributes.color.array,baseline);model.apply(COLOR_SKETCHES[0]);assert.deepEqual(fur.geometry.attributes.color.array,baseline);assert.equal(JSON.stringify(CREATURE_PALETTES),original);model.dispose();console.log('12 color sketches: geometry preserved, finite colors, reset and game palettes intact.');

