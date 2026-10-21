const fs=require('fs'),vm=require('vm');let nodes={};function node(){return{style:{},checked:true,classList:{add(){},remove(){}},dataset:{},setAttribute(){},append(){},replaceChildren(){},addEventListener(){},getBoundingClientRect(){return{left:0,top:0,width:360,height:360}},close(){},showModal(){}}}let timers=[],rewindTimers=[],c={window:{},document:{getElementById:id=>nodes[id]||=node(),createElementNS:node,createElement:node,querySelectorAll:()=>[]},localStorage:{getItem(){return null},setItem(){}},navigator:{},setTimeout:(fn,delay)=>{if(delay===140){rewindTimers.push(fn);return}if(delay!==4400)throw Error("Win delay must be 4400ms");timers.push(fn)},console,flushNextRewind(){rewindTimers.shift()?.()},flushRewind(){while(rewindTimers.length)rewindTimers.shift()()}};vm.createContext(c);vm.runInContext(fs.readFileSync('public/slink-levels.js','utf8')+fs.readFileSync('public/slink-fence-levels.js','utf8')+fs.readFileSync('public/slink-expansion-levels.js','utf8')+fs.readFileSync('public/slink.js','utf8'),c);vm.runInContext(`for(let k=0;k<LEVELS.length;k++){load(k);for(let i of level().solution)move(i);if(!won||path.length!==level().solution.length)throw Error('Completion '+k);undo();if(won||path.length!==level().solution.length-1)throw Error('Undo '+k);load(k);move(level().marks[1]);if(path.length)throw Error('Invalid start');move(level().marks[0]);move(-1);move(level().n*level().n);if(path.length!==1)throw Error('Bounds');for(let i of level().solution.slice(1,5))move(i);move(level().solution[2]);if(path.length!==5)throw Error('Remote backtrack must be rejected');move(level().solution[3]);if(path.length!==4)throw Error('One-step backtrack');move(level().solution[2]);if(path.length!==3)throw Error('Sequential backtrack');load(k);for(let step=0;step<level().solution.length;step++)document.getElementById('hint').onclick();if(!won)throw Error('Hint '+k);}for(let k=0;k<LEVELS.length;k++){load(k);for(let i of [...(level().water||[]),...(level().lava||[]),...(level().stones||[])]){if(!level().holes.includes(i)||level().solution.includes(i))throw Error('Obstacle data '+k);move(i);if(path.length)throw Error('Walkable obstacle '+k)}}for(let l of LEVELS){let visitors=0;for(let i of l.solution){if(!l.meadowVariants[i])throw Error('Missing meadow');if(l.meadowVariants[i]==='visitors')visitors++;if(l.marks.includes(i)&&['flowers','visitors'].includes(l.meadowVariants[i]))throw Error('Flowers cover number')}if(visitors>1)throw Error('Too many insect tiles')}load(0);console.log('PASS: all catalogue level completions and hint completions, undo, backtracking, invalid starts, bounds, non-walkable water/lava/stone.');`,c);vm.runInContext(`let cases=0;for(let k=0;k<LEVELS.length;k++){let example=LEVELS[k].analysis?.examples?.[0];if(!example)continue;load(k);for(let i of level().solution.slice(0,example.step))move(i);move(example.wrongCell);if(path.at(-1)!==example.wrongCell)throw Error('Wrong choice rejected '+k);let before=path.length;document.getElementById('hint').onclick();if(path.length!==before||!confirmHint)throw Error('Hint must preserve dead-end route first '+k);document.getElementById('hint').onclick();flushRewind();if(path.length!==example.step+1||!path.every((v,i)=>v===level().solution[i]))throw Error('Hint must preserve solvable prefix and add one valid step '+k);cases++}load(0);console.log('PASS: '+cases+' plausible wrong-route hint checks.');`,c);timers.forEach(fn=>fn());if(nodes.win.hidden!==true)throw Error('Stale win timer');console.log('PASS: level reset cancels stale completion overlays.');



vm.runInContext(`let blockedEdges=0;for(let k=0;k<LEVELS.length;k++){const l=LEVELS[k];if(!l.fence)continue;for(let [a,b]of l.walls){if(l.solution.indexOf(a)>l.solution.indexOf(b))[a,b]=[b,a];load(k);for(const cell of l.solution.slice(0,l.solution.indexOf(a)+1))move(cell);const before=path.join(',');move(b);if(path.join(',')!==before)throw Error('Fence crossed '+l.id);if(document.getElementById('message').textContent!=='Ein Hindernis sperrt diesen Übergang.')throw Error('Fence rejection missing '+l.id);blockedEdges++;}}console.log('PASS: '+blockedEdges+' new fence edges reject crossing without changing the accepted path.');`,c);

vm.runInContext(`
load(0);let charges=0;window.SlinkEconomy={spendHint(){charges++;return true},undo(){},load(){}};
const saved=LEVELS[0];LEVELS[0]={n:3,marks:[0,8],solution:[0,1,2,5,4,3,6,7,8],holes:[],walls:[],analysis:{unique:false},meadowVariants:{}};
path=[0,3];if(!continuation()||continuation(path,1)!==undefined)throw Error('Alternate solutions or budget exhaustion mishandled');
LEVELS[0]=saved;load(LEVELS.findIndex(l=>l.analysis?.examples?.length));
const example=level().analysis.examples[0];for(const cell of level().solution.slice(0,example.step))move(cell);move(example.wrongCell);
document.getElementById('hint').onclick();if(charges)throw Error('Confirmation costs a hint');document.getElementById('hint').onclick();flushRewind();if(charges!==1)throw Error('Recovery costs exactly one hint');
load(0);console.log('PASS: alternate solutions, search cutoff and recovery hint charging.');
`,c);

vm.runInContext(`
load(LEVELS.findIndex(l=>l.id==='slink-curated-v1-025'));
for(const cell of [12,13,9,5,1,2])move(cell);
if(path.length!==6)throw Error('Long wrong suffix fixture');
charges=0;document.getElementById('hint').onclick();window.SlinkEconomy.spendHint=()=>false;
document.getElementById('hint').onclick();if(path.length!==6||hintRewinding)throw Error('Unpaid recovery changed path');
window.SlinkEconomy.spendHint=()=>{charges++;return true};document.getElementById('hint').onclick();flushRewind();
if(path.join(',')!==level().solution.slice(0,4).join(',')||charges!==1)throw Error('Long recovery lost correct prefix');
load(index);for(const cell of [12,13,9,5,1,2])move(cell);document.getElementById('hint').onclick();document.getElementById('hint').onclick();undo();const afterUndo=path.join(',');flushRewind();if(path.join(',')!==afterUndo)throw Error('Undo did not cancel recovery');
load(index);flushRewind();if(path.length||hintRewinding)throw Error('Reset did not cancel recovery');
console.log('PASS: long suffix recovery, exhausted credits and interruption by undo/reset.');
`,c);

vm.runInContext(`(()=>{
const original=LEVELS[0],economy=window.SlinkEconomy;let spent=0;
LEVELS[0]={n:3,marks:[0,8],solution:[0,1,2,5,4,3,6,7,8],holes:[],walls:[],analysis:{unique:false},meadowVariants:{}};
window.SlinkEconomy={spendHint(){spent++;return true},undo(){},load(){}};
load(0);for(const cell of [0,1,4,3,6,7])move(cell);if(continuation()!==null)throw Error('Nonunique dead-end fixture');
document.getElementById('hint').onclick();if(spent)throw Error('Confirmation charged');document.getElementById('hint').onclick();document.getElementById('hint').onclick();flushRewind();
if(path.join(',')!=='0,1,2'||spent!==1||hintRewinding)throw Error('Recovery must add one safe step and spend once');
load(0);for(const cell of [0,1,4,3,6,7])move(cell);document.getElementById('hint').onclick();document.getElementById('hint').onclick();while(path.length>2)flushNextRewind();if(!hintRewinding)throw Error('Final advance must still be guarded');undo();const stopped=path.join(',');flushRewind();if(path.join(',')!==stopped||path.join(',')!=='0')throw Error('Undo failed to cancel pending forward hint');
LEVELS[0]=original;window.SlinkEconomy=economy;load(0);console.log('PASS: nonunique dead-end recovery, one forward step, repeated-click guard and cancellation during final pause.');
})()`,c);
