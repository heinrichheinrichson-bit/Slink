const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync('public/journey-menu.js','utf8'),routing=source.slice(source.indexOf(' const views='),source.indexOf('\n const nav='));
function fixture(hash='#journal'){
 const events={},nodes={},calls=[];let home=0;const location={hash,pathname:'/gartenstudio.html',search:''},stack=[{hash,state:null}];
 const history={state:null,pushState(state,_,url){this.state=state;location.hash=new URL(url,'https://test').hash;stack.push({hash:location.hash,state})},replaceState(state,_,url){this.state=state;location.hash=new URL(url,'https://test').hash;stack[stack.length-1]={hash:location.hash,state}},back(){if(stack.length<2)throw Error('Unexpected history escape');stack.pop();const old=stack.at(-1);location.hash=old.hash;this.state=old.state;events.popstate()}};
 const c={location,history,window:{SlinkOpenJournal:preserve=>calls.push(preserve)},section:{hidden:false},$:id=>nodes[id]||=(id==='navHome'?{click(){home++}}:{}),addEventListener:(name,fn)=>events[name]=fn};vm.createContext(c);vm.runInContext(routing+';this.api={openView,back,routeView,overview,route};',c);return {c,events,nodes,calls,home:()=>home,stack};
}
const f=fixture();f.nodes.journalOpenNurbi.onclick();assert.equal(f.c.location.hash,'#journal/nurbi');assert.equal(f.c.api.routeView(),'nurbi');assert.equal(f.calls.at(-1),true);assert.equal(f.c.api.back(),true);assert.equal(f.c.location.hash,'#journal');assert.equal(f.c.api.back(),false);
f.nodes.journalOpenBackgrounds.onclick();const before=f.calls.length;f.c.history.pushState({preview:true},'',f.c.location.pathname+f.c.location.hash);f.c.history.back();assert.equal(f.calls.length,before,'closing same-hash previews does not reset subpage or scroll');f.c.history.back();assert.equal(f.c.location.hash,'#journal');
f.nodes.journalOpenNurbi.onclick();f.c.api.overview();assert.equal(f.c.location.hash,'#journal');assert.equal(f.stack.length,1,'footer journal button does not leave duplicate overview entries');
const direct=fixture('#journal/stats');assert.equal(direct.c.api.routeView(),'stats');assert.equal(direct.c.api.back(),true);assert.equal(direct.c.location.hash,'#journal','direct child link returns to journal instead of leaving app');
const unknown=fixture('#journal/unknown');assert.equal(unknown.c.api.routeView(),'overview');
assert(source.includes("if(view==='nurbi')window.NurbiPaintLooks"),'large collection renders only on its subpage');
console.log('PASS journal child routes, browser/header back, direct child entry, unknown route fallback and preview history isolation.');
