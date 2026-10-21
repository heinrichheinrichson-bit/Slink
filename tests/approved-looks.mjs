import assert from 'node:assert/strict';
import looks from '../src/renderer/approved-nurbi-palettes.json' with {type:'json'};
import {createFuzzyCreature} from '../src/renderer/fuzzy-creature.js';
import {createFuzzyCreature as createHeadLiftCreature} from '../src/renderer/head-lift-creature.js';
import {createColorStudyModel} from '../src/renderer/nurbi-color-model.js';
const normal=createFuzzyCreature(),game=createHeadLiftCreature(),study=createColorStudyModel(),fur=model=>model.group.getObjectByName('curved-soft-fur').geometry;
const original=fur(game).attributes.position.array.slice();
for(const p of looks){normal.setPalette(p.id);game.setPalette(p.id);study.apply(p);assert.equal(game.group.userData.palette,p.id);assert.deepEqual(fur(game).attributes.color.array,fur(study).attributes.color.array,p.name+' actual game matches study');assert.deepEqual(fur(normal).attributes.color.array,fur(study).attributes.color.array,p.name+' menu matches study');assert.deepEqual(fur(game).attributes.position.array,original);}
normal.dispose();game.dispose();study.dispose();console.log('PASS all 36 approved looks match study fur colors in actual head-lift gameplay and menu models; original geometry preserved.');
