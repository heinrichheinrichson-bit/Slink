const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),context={module:{exports:{}}};vm.runInNewContext(fs.readFileSync('public/intro-study-core.js','utf8'),context);const {levels,create}=context.module.exports;
for(let stage=0;stage<3;stage++){const game=create(stage),l=levels[stage];assert.equal(game.move(l.solution[1]),'start-first');assert.equal(game.path.length,0);for(const i of l.solution)assert(['start','forward'].includes(game.move(i)));assert(game.complete);assert.equal(game.move(l.solution.at(-2)),'complete');assert.equal(new Set(l.solution).size,l.solution.length);assert.equal(l.holes.length+l.solution.length,l.n*l.n);for(let j=1;j<l.solution.length;j++)assert.equal(Math.abs(l.solution[j]%l.n-l.solution[j-1]%l.n)+Math.abs(Math.floor(l.solution[j]/l.n)-Math.floor(l.solution[j-1]/l.n)),1);}
let g=create(1);g.move(6);g.move(7);assert.equal(g.move(8),'order');assert.equal(g.nextNumber,2);assert.equal(g.move(6),'back');assert(g.rewound);assert.equal(JSON.stringify(g.path),'[6]');
g=create(2);for(const i of [0,1,2,5])g.move(i);assert.equal(g.move(8),'order');g.move(4);g.move(7);g.move(6);assert.equal(g.move(8),'adjacent');
g=create(2);for(const i of [0,3,4,1,2,5])g.move(i);assert(g.stuck);assert.equal(g.move(4),'visited');assert.equal(g.move(2),'back');assert(!g.stuck);assert.equal(g.move(4),'adjacent');
g=create(2);for(const i of [0,3,4,7])g.move(i);assert.equal(g.move(8),'order');
// All marks visited except last, but still-brown fields must block the end.
g=create(2);for(const i of [0,1,2,5,4,3,6,7])g.move(i);assert.equal(g.move(8),'forward');
g=create(1);for(const i of [6,3,0,1,2,5])g.move(i);assert.equal(g.move(8),'unfinished');assert.equal(g.path.length,6);g.move(4);g.move(7);assert.equal(g.move(8),'forward');
assert(!/localStorage|sessionStorage|SlinkEconomy|RewardStore/.test(fs.readFileSync('public/intro-study.js','utf8')));
console.log('PASS teaching gardens: valid paths, ordered goals, adjacency, no revisits, reversible routes, dead-end detection and no player storage.');
