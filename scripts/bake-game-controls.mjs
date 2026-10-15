import {readFile,writeFile} from 'node:fs/promises';
import {createIvoryControl} from '../public/ivory-controls.js';
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function element(tag){return {tag,attributes:{},dataset:{},children:[],style:{setProperty(){}},setAttribute(k,v){this.attributes[k]=v},append(...children){this.children.push(...children)},set className(v){this.attributes.class=v},set textContent(v){this.text=escape(v)},set innerHTML(v){this.raw=v}}}
globalThis.document={createElement:element};
function html(e){const attrs={...e.attributes};for(const [k,v]of Object.entries(e.dataset))attrs['data-'+k.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())]=v;return '<'+e.tag+Object.entries(attrs).map(([k,v])=>' '+k+'="'+escape(v)+'"').join('')+'>'+((e.raw||'')+(e.text||'')+e.children.map(html).join(''))+'</'+e.tag+'>'}
const path=new URL('../public/slink.html',import.meta.url);let page=await readFile(path,'utf8');
for(const [id,action,compact] of [['home','home',true],['settings','settings',true],['undo','undo',false],['hint','hint',false],['reset','reset',false]]){
 const skin=html(createIvoryControl({action,compact,variant:'satin',ink:'#704a2c',engraved:true,deep:false}));
 const regex=new RegExp('<(button|a)([^>]*\\bid="'+id+'"[^>]*)>[\\s\\S]*?</\\1>');
 page=page.replace(regex,(_,tag,attrs)=>{attrs=attrs.replace(/\stype="[^"]*"/g,'').replace(/\sclass="[^"]*"/g,'').replace(/\sdata-(?:action|variant|gold|engraved|deep)="[^"]*"/g,'');const opening=skin.slice(0,skin.indexOf('>')).replace('<button','<'+tag).replace(/ aria-label="[^"]*"/,'');return opening+attrs+'>'+skin.slice(skin.indexOf('>')+1,-9)+'</'+tag+'>'});
}
page=page.replace('<script type="module" src="game-ivory-controls.js"></script>','');
await writeFile(path,page);delete globalThis.document;
console.log('Baked approved controls into main HTML.');
