const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const storage=new Map([['slink-flower-study-visitor-sizes',JSON.stringify({bee:180,bumblebee:175})]]);
function boot(preview=false){
 const nodes={},node=()=>({style:{},checked:true,classList:{add(){},remove(){}},dataset:{},setAttribute(){},append(){},replaceChildren(){},addEventListener(){},getBoundingClientRect(){return{left:0,top:0,width:360,height:360}},close(){},showModal(){}});
 const c={window:{},document:{getElementById:id=>nodes[id]||=node(),createElementNS:node,createElement:node,querySelectorAll:()=>[]},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{pathname:'/slink.html',search:preview?'?preview=1':''},URLSearchParams,navigator:{},setTimeout(){},console};vm.createContext(c);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+fs.readFileSync('public/slink.js','utf8'),c);return{c,nodes,run:s=>vm.runInContext(s,c)};
}
const {c,nodes,run}=boot();assert.equal(c.window.SlinkVisitorSettings.bee,180);assert.equal(c.window.SlinkVisitorSettings.bumblebee,175);
run('for(const i of level().solution.slice(0,3))move(i)');const state=run('JSON.stringify({path,done,epoch,index,won})');
nodes.beeVisitorSize.value='225';nodes.beeVisitorSize.oninput();assert.equal(c.window.SlinkVisitorSettings.bee,225);assert.equal(nodes.beeVisitorValue.textContent,'225 %');assert.equal(run('JSON.stringify({path,done,epoch,index,won})'),state);
nodes.visitorEnabled.checked=false;nodes.visitorEnabled.onchange();assert.equal(c.window.SlinkVisitorSettings.enabled,false);
const reloaded=boot();assert.equal(reloaded.c.window.SlinkVisitorSettings.bee,225);assert.equal(reloaded.c.window.SlinkVisitorSettings.enabled,false);
const persisted=storage.get('slink-visitor-settings-v1'),preview=boot(true);preview.nodes.beeVisitorSize.value='300';preview.nodes.beeVisitorSize.oninput();assert.equal(storage.get('slink-visitor-settings-v1'),persisted,'QA overwrites player settings');
nodes.visitorReset.onclick();assert.equal(c.window.SlinkVisitorSettings.bee,100);assert.equal(c.window.SlinkVisitorSettings.bumblebee,100);assert.equal(c.window.SlinkVisitorSettings.enabled,false);assert.equal(run('JSON.stringify({path,done,epoch,index,won})'),state);
console.log('PASS: study-size migration, live settings preserve route, persistence, reset and isolated preview settings.');

assert.equal(c.window.SlinkCreatureSettings.size,90);
nodes.creaturePalette.value='lavender';nodes.creaturePalette.onchange();nodes.creatureSize.value='115';nodes.creatureSize.oninput();
assert.equal(run('JSON.stringify({path,done,epoch,index,won})'),state,'figure settings preserve route');
const figureReload=boot();assert.equal(figureReload.c.window.SlinkCreatureSettings.palette,'lavender');assert.equal(figureReload.c.window.SlinkCreatureSettings.size,115);
const figureSaved=storage.get('slink-creature-settings-v1');preview.nodes.creatureSize.value='150';preview.nodes.creatureSize.oninput();assert.equal(storage.get('slink-creature-settings-v1'),figureSaved,'preview must preserve player figure settings');
console.log('PASS: figure settings defaults, live route preservation, persistence and preview isolation.');

nodes.creatureEnabled.checked=false;nodes.creatureEnabled.onchange();assert.equal(c.window.SlinkCreatureSettings.enabled,false);assert.equal(boot().c.window.SlinkCreatureSettings.enabled,false);assert.equal(run('JSON.stringify({path,done,epoch,index,won})'),state,'hide figure preserves route');nodes.creatureEnabled.checked=true;nodes.creatureEnabled.onchange();assert.equal(c.window.SlinkCreatureSettings.enabled,true);
console.log('PASS: figure toggle is immediate, persisted and preserves puzzle state.');
