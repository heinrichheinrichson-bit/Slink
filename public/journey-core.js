(function(root){
 const finite=n=>Number.isFinite(n)&&n>=0?n:0;
 function day(date=new Date()){return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0')}
 function parse(key){if(typeof key!=='string'||!/^\d{4}-\d\d-\d\d$/.test(key))return null;const [y,m,d]=key.split('-').map(Number),date=new Date(y,m-1,d,12);return day(date)===key?date:null}
 function ordinal(key){const d=parse(key);return d?Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000):null}
 function dailyId(ids,key){const n=ordinal(key);return n===null||!ids.length?null:ids[((n%ids.length)+ids.length)%ids.length]}
 function clean(raw={}){if(!raw||typeof raw!=='object')raw={};const s={version:1,since:parse(raw.since)?raw.since:day(),activeMs:finite(raw.activeMs),days:{},solved:{},daily:{},bookmarks:[]};for(const [key,n]of Object.entries(raw.days||{}))if(parse(key)&&finite(n)>0)s.days[key]=n;for(const kind of ['solved','daily'])for(const [key,v]of Object.entries(raw[kind]||{})){if(!v||typeof v!=='object'||typeof v.id!=='string'||(kind==='daily'&&!parse(key)))continue;s[kind][key]={id:v.id,ms:finite(v.ms),noHint:v.noHint===true,date:parse(v.date)?v.date:s.since}}
 s.bookmarks=[...new Set((Array.isArray(raw.bookmarks)?raw.bookmarks:[]).filter(x=>typeof x==='string'))];return s}
 // Split real active intervals at local midnight, including DST boundaries.
 function active(s,ms,end=new Date()){ms=Math.min(60000,finite(ms));if(!ms)return;let start=end.getTime()-ms;s.activeMs+=ms;while(start<end.getTime()){const date=new Date(start),key=day(date),midnight=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).getTime(),stop=Math.min(end.getTime(),midnight);s.days[key]=(s.days[key]||0)+stop-start;start=stop}}
 function complete(s,id,ms,hinted,date=day(),daily=null){const map=daily?s.daily:s.solved,key=daily||id,old=map[key];map[key]={id,ms:old?Math.min(old.ms,finite(ms)):finite(ms),noHint:old?.noHint===true||!hinted,date:old?.date||date};if(!daily)s.bookmarks=s.bookmarks.filter(x=>x!==id)}
 function bookmark(s,id){const at=s.bookmarks.indexOf(id);if(at<0)s.bookmarks.push(id);else s.bookmarks.splice(at,1);return at<0}
 const api={day,parse,ordinal,dailyId,clean,active,complete,bookmark};if(typeof module!=='undefined')module.exports=api;else root.NurbiJourneyCore=api;
})(typeof window!=='undefined'?window:globalThis);
