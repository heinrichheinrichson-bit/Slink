import './bake-game-controls.mjs';
import {build} from 'esbuild';
const entries={
 'completion-study':'abschlusswerkstatt',
 'win-portrait':'win-portrait',
 'route-study-entry':'route-study',
 'peek-study':'neugierwerkstatt',
 'garden-card-study':'gartenkarten',
 'garden-menu-study':'gartenstudio',
 'ui-button-study':'ui-button-study',
 'fence-study':'fence-study',
 'fuzzy-study':'fuzzy-study',
 'worm-study':'worm-study',
 'flower-study':'flower-study',
 'rock-group-study':'rock-group-study',
 'stone-study':'stone-study',
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
await build({entryPoints:['src/renderer/flower-goals.js'],bundle:true,format:'esm',external:['three','three/*'],outfile:'public/flower-goals.mjs'});
console.log('Built '+Object.keys(entries).length+' local renderer/study bundles.');
