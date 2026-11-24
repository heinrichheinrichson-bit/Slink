import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
// The shared renderer is compiled separately for this study. Production API and bundle stay untouched.
const marker='return {prepare,diagnostics()';
let source=fs.readFileSync('src/renderer/world-catalogue-entry.js','utf8');
if(source.split(marker).length!==2)throw Error('Study projection insertion point changed');
source=source.replace(marker,`return {studyPoint(i){const t=tiles.find(t=>t.i===i);if(!t||!camera||!canvas)return null;const p=new THREE.Vector3(t.p.x,t.p.y,16).project(camera),r=canvas.getBoundingClientRect();return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2}},prepare,diagnostics()`);
await build({stdin:{contents:source,resolveDir:path.resolve('src/renderer'),sourcefile:'intro-study-world.js'},bundle:true,minify:true,format:'iife',outfile:'public/intro-study-world.js'});
console.log('Built isolated introduction study renderer.');
