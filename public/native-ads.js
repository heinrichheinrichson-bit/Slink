/* Native provider is absent in the ordinary browser; no simulated ads in shipped builds. */
(()=>{
 const native=window.NurbiNativeAds;if(!native)return;
 const state={rewarded:false,interstitial:false,privacy:false},pending=new Map();
 const prefix=Date.now().toString(36)+'_'+Math.random().toString(36).slice(2);let sequence=0;
 window.SlinkAdProvider={
  available:kind=>state[kind]===true,
  show(kind){if(!['rewarded','interstitial'].includes(kind)||!state[kind])return Promise.resolve(null);return new Promise(resolve=>{const id=prefix+'_'+(++sequence);pending.set(id,resolve);native.show(kind,id)})},
  get privacyRequired(){return state.privacy},
  privacy(){native.privacy()}
 };
 addEventListener('nurbi-native-ad',event=>{
  const data=event.detail;if(!data||typeof data!=='object')return;
  if(data.state){for(const k of Object.keys(state))state[k]=data[k]===true;window.dispatchEvent(new Event('nurbi-ad-status'));return}
  const resolve=pending.get(data.id);if(resolve){pending.delete(data.id);resolve({shown:data.shown===true,rewarded:data.shown===true&&data.rewarded===true})}
 });
 native.status();addEventListener('pageshow',()=>native.status());
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)native.status()});
})();
