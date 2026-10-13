import {build} from 'esbuild';
const entries={
 'ivory-study':'ivory-study',
 'world-catalogue-entry':'slink-world-3d',
 'bud-puzzle-entry':'bud-test-world',
 'marker-layout-study':'marker-layout-study',
 'garden-goals-study':'garden-goals-study',
 'meadow-study-entry':'meadow-study-3d',
 'growth-game-entry':'growth-game-3d',
 'growth-study-entry':'growth-3d',
 'living-liquid-entry':'living-liquid-3d'
};
for(let [entry,name]of Object.entries(entries))await build({entryPoints:['src/renderer/'+entry+'.js'],bundle:true,minify:true,format:'iife',outfile:'public/'+name+'.js'});
console.log('Built '+Object.keys(entries).length+' local renderer/study bundles.');
