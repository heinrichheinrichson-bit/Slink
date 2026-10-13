const COMBINATIONS=[
 ['Gartenerde','Wiesengras','earth-loam','grass-sprouts'],
 ['Gartenerde','Kleewiese','earth-loam','grass-clover'],
 ['Gartenerde','Samtwiese','earth-loam','grass-velvet'],
 ['Dunkler Humus','Wiesengras','earth-humus','grass-sprouts'],
 ['Dunkler Humus','Kleewiese','earth-humus','grass-clover'],
 ['Dunkler Humus','Samtwiese','earth-humus','grass-velvet']
];
function chooseMaterial(k){let [before,after,b,a]=COMBINATIONS[k];window.SlinkGrowthChoice={before:b,after:a,label:before+" → "+after};render();document.getElementById('levelName').textContent=before+' → '+after;document.querySelectorAll('#combinations button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===k)))}
COMBINATIONS.forEach(([before,after],i)=>{let button=document.createElement('button');button.setAttribute('aria-label','Kombination '+(i+1)+': '+before+' wird zu '+after);button.innerHTML='<b>'+(i+1)+'</b><span>'+before+'<small>wird zu</small>'+after+'</span>';button.onclick=()=>chooseMaterial(i);document.getElementById('combinations').append(button)});chooseMaterial(Math.max(0,COMBINATIONS.findIndex(c=>c[2]===window.SlinkCatalogueDesign.before&&c[3]===window.SlinkCatalogueDesign.after)));
