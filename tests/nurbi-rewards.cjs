const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={module:{exports:{}}};vm.runInNewContext(fs.readFileSync('public/nurbi-rewards.js','utf8'),ctx);const R=ctx.module.exports;
assert.equal(R.looks.length,36);assert.equal(new Set(R.looks.map(p=>p.id)).size,36);
for(const [kind,count]of [['start',4],['choice',26],['special',6]])assert.equal(R.looks.filter(p=>p.kind===kind).length,count);
const approved=JSON.parse(fs.readFileSync('src/renderer/approved-nurbi-palettes.json','utf8'));for(const look of R.looks){const p=approved.find(v=>v.id===look.id);for(const field of ['coat','root','tip','accent','face','iris','paws','pattern','patternSize','patternStrength','antenna','cheeks'])assert.equal(look[field],p[field],look.name+' '+field);assert(fs.existsSync('public/'+look.image));}
const choice=R.looks.find(p=>p.kind==='choice'),special=R.looks.find(p=>p.kind==='special');
let state=R.evaluate();assert.equal(state.availableChoices,0);assert.equal(R.unlock(choice.id,{},state),null);assert.equal(R.unlock(special.id,{},state),null);
state=R.evaluate({puzzles:10,gardens:1});assert.equal(state.availableChoices,2);const bought=R.unlock(choice.id,{},state);assert.equal(bought.availableChoices,1);assert(R.available(choice.id,bought));assert.equal(R.unlock(choice.id,{},bought).availableChoices,1);
assert.equal(R.unlock(special.id,{},bought),null);const test=R.unlock(special.id,{},state,true);assert.equal(test.choices.length,0);assert.equal(test.specials.length,0);
state=R.evaluate({puzzles:1200,gardens:29,daily:50,finalGarden:1});assert.equal(state.availableChoices,26);assert.equal(state.specials.length,6);for(const look of R.looks.filter(p=>p.kind==='choice'))state=R.unlock(look.id,{},state);assert.equal(state.availableChoices,0);assert.equal(R.evaluate({},state).earned.length,26);assert.equal(R.evaluate({},state).specials.length,6);
for(const p of R.looks)assert(R.available(p.id,state));const twice=R.evaluate({puzzles:1200,gardens:29,daily:50,finalGarden:1},state);assert.equal(twice.choices.length,26);assert.equal(twice.availableChoices,0);
assert.equal(R.clean({earned:['bad'],choices:['bad'],specials:['bad']}).earned.length,0);
console.log('PASS 36 approved looks, 4/26/6 allocation, retroactive unique milestones, choice spending, fixed rewards, test bypass without grants, persisted entitlements and all offline previews.');
