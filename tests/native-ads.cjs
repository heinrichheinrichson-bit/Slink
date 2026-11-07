const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const source=fs.readFileSync('public/native-ads.js','utf8');
function fixture(native=true){const events={},calls=[];const c={Date,Math,Promise,Map,Event:class{constructor(type){this.type=type}},document:{hidden:false,addEventListener:(n,fn)=>events['doc:'+n]=fn},addEventListener:(n,fn)=>(events[n]||=[]).push(fn)};c.window=c;c.dispatchEvent=e=>(events[e.type]||[]).forEach(fn=>fn(e));if(native)c.NurbiNativeAds={status:()=>calls.push(['status']),show:(...a)=>calls.push(a),privacy:()=>calls.push(['privacy'])};vm.createContext(c);vm.runInContext(source,c);return {c,calls,send:data=>c.dispatchEvent({type:'nurbi-native-ad',detail:data})}}
(async()=>{
 assert.equal(fixture(false).c.SlinkAdProvider,undefined);
 const {c,calls,send}=fixture(),p=c.SlinkAdProvider;
 assert.equal(p.available('rewarded'),false);assert.equal(await p.show('rewarded'),null);
 send({state:true,rewarded:true,interstitial:true,privacy:true});assert(p.privacyRequired);assert(p.available('rewarded'));assert.equal(p.available('privacy'),true);
 const a=p.show('rewarded'),id=calls.at(-1)[1];send({id:'other_frame',shown:true,rewarded:true});send({id,shown:true,rewarded:false});assert.deepEqual(JSON.parse(JSON.stringify(await a)),{shown:true,rewarded:false});
 const b=p.show('rewarded'),bid=calls.at(-1)[1];send({id:bid,shown:true,rewarded:true});assert.equal((await b).rewarded,true);
 const d=p.show('rewarded'),did=calls.at(-1)[1];send({id:did,shown:false,rewarded:true});assert.equal((await d).rewarded,false);
 const i=p.show('interstitial'),iid=calls.at(-1)[1];send({id:iid,shown:false,rewarded:false});assert.equal((await i).shown,false);
 send({state:true,rewarded:false,interstitial:false,privacy:false});assert(!p.available('rewarded'));assert(!p.privacyRequired);assert.equal(await p.show('invalid'),null);
 const native=fs.readFileSync('android/app/src/main/java/com/thinkheim/nurbisgarden/NativeAds.java','utf8');assert(native.includes('consent.canRequestAds()'));assert(native.includes('BuildConfig.DEBUG?"ca-app-pub-3940256099942544/5224354917"'));assert(native.includes('earned=true'));assert(native.includes('shown&&earned'));assert(native.includes('MAX_AGE'));assert(native.includes('showPrivacyOptionsForm'));
 const gradle=fs.readFileSync('android/app/build.gradle','utf8');assert(gradle.includes("'com.thinkheim.nurbisgarden'"));assert(gradle.includes("'native-ads.js'"));assert(gradle.includes("'privacy.html'"));
 console.log('PASS native provider: browser absence, availability, requester isolation, cancellation/failure without reward, earned reward only, privacy status, debug test units and packaging.');
})().catch(e=>{console.error(e);process.exitCode=1});
