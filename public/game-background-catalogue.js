(()=>{
 const designs=window.SlinkBackgroundDesigns,presets={apricot:['Aprikose','#f4bd83','#e6a16c',.12,.85],ivory:['Warmes Leinen','#f4e9d2','#e4cfaa',.1,.75],sage:['Salbeigarten','#d7ddbd','#b6c39b',.12,.8]};
 const list=[{id:'original',name:'Sonnenorange',need:0,color:'#f18b24',css:''}];
 for(const [id,[name,top,bottom,texture,decor]]of Object.entries(presets))list.push({id,name,need:list.length,color:top,css:`.app{background-color:${top};background-image:linear-gradient(160deg,${top},${bottom});background-size:100% 100%;background-position:center}.app:before{content:'';position:absolute;inset:0;pointer-events:none;background-image:url('slink-materials.png');background-size:200% 200%;filter:grayscale(1);mix-blend-mode:multiply;opacity:${texture}}.app .decoration{opacity:${decor}}`});
 for(const [id,name,color]of [['quietApricot','Matte Aprikose','#edc7a1'],['quietIvory','Leises Kleerelief','#eee1c9'],['quietGarden','Sanfter Garten','#dce0c9'],['wood','Gartentisch','#dec6a2']])list.push({id,name,need:list.length,color,css:designs[id].css});
 for(const [id,name,color]of [['nativeClover','Kleesaum','#e9d6b4'],['nativePetals','Kleine Blüten','#ebc49f'],['nativePebbles','Kiesel & Klee','#dbe0c9']])list.push({id,name,need:list.length,color,css:`.app{background-color:${color};background-image:url('background-${id}.webp');background-size:100% 100%;background-position:center;box-shadow:none}.app:before,.app:after,.app .decoration{display:none}`});
 window.NurbiGameBackgrounds=list;
})();
