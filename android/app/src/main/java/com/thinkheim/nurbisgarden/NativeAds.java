package com.thinkheim.nurbisgarden;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import com.google.android.gms.ads.*;
import com.google.android.gms.ads.interstitial.*;
import com.google.android.gms.ads.rewarded.*;
import com.google.android.ump.*;
import org.json.JSONObject;

/** Only attached to the local-only asset WebView. All SDK calls run on the UI thread. */
public final class NativeAds {
 private final Activity activity;
 private final WebView web;
 private final Handler handler = new Handler(Looper.getMainLooper());
 private final ConsentInformation consent;
 private RewardedAd rewarded;
 private InterstitialAd interstitial;
 private long rewardAt, interstitialAt;
 private boolean foreground;
 private boolean initialized, ready, loadingReward, loadingInterstitial, busy, destroyed;
 private int rewardFailures, interstitialFailures, generation;
 private String pendingId;
 private boolean shown, earned;
 private static final long MAX_AGE = 55 * 60 * 1000L;
 NativeAds(Activity activity, WebView web) {
  this.activity=activity; this.web=web;
  consent=UserMessagingPlatform.getConsentInformation(activity);
 }
 void start() {
  consent.requestConsentInfoUpdate(activity, new ConsentRequestParameters.Builder().build(),
   () -> {if(!destroyed)UserMessagingPlatform.loadAndShowConsentFormIfRequired(activity, error -> initialize());},
   error -> initialize());
 }
 private void initialize() {
  if(destroyed)return;
  publish();
  if(!consent.canRequestAds() || initialized)return;
  initialized=true;
  MobileAds.setRequestConfiguration(new RequestConfiguration.Builder().setMaxAdContentRating(RequestConfiguration.MAX_AD_CONTENT_RATING_G).build());
  new Thread(() -> MobileAds.initialize(activity, status -> handler.post(() -> {
   if(destroyed)return; ready=true; loadReward(); loadInterstitial(); publish();
  })), "Nurbi-ads-init").start();
 }
 private boolean allowed(){return !destroyed && ready && consent.canRequestAds();}
 private boolean rewardReady(){return allowed() && !busy && rewarded!=null && SystemClock.elapsedRealtime()-rewardAt<MAX_AGE;}
 private boolean interstitialReady(){return allowed() && !busy && interstitial!=null && SystemClock.elapsedRealtime()-interstitialAt<MAX_AGE;}
 private String rewardUnit(){return BuildConfig.DEBUG?"ca-app-pub-3940256099942544/5224354917":"ca-app-pub-2541162065593575/5451923520";}
 private String interstitialUnit(){return BuildConfig.DEBUG?"ca-app-pub-3940256099942544/1033173712":"ca-app-pub-2541162065593575/9535684947";}
 private AdRequest request(){android.os.Bundle extras=new android.os.Bundle();extras.putString("npa","1");return new AdRequest.Builder().addNetworkExtrasBundle(com.google.ads.mediation.admob.AdMobAdapter.class,extras).build();}
 private void loadReward(){
  if(!allowed() || loadingReward || rewarded!=null)return;
  loadingReward=true;final int token=generation;
  RewardedAd.load(activity,rewardUnit(),request(),new RewardedAdLoadCallback(){
   @Override public void onAdLoaded(RewardedAd ad){if(destroyed || token!=generation)return;loadingReward=false;rewarded=ad;rewardAt=SystemClock.elapsedRealtime();rewardFailures=0;publish();}
   @Override public void onAdFailedToLoad(LoadAdError error){if(destroyed || token!=generation)return;loadingReward=false;publish();handler.postDelayed(()->loadReward(),retry(++rewardFailures));}
  });
 }
 private void loadInterstitial(){
  if(!allowed() || loadingInterstitial || interstitial!=null)return;
  loadingInterstitial=true;final int token=generation;
  InterstitialAd.load(activity,interstitialUnit(),request(),new InterstitialAdLoadCallback(){
   @Override public void onAdLoaded(InterstitialAd ad){if(destroyed || token!=generation)return;loadingInterstitial=false;interstitial=ad;interstitialAt=SystemClock.elapsedRealtime();interstitialFailures=0;publish();}
   @Override public void onAdFailedToLoad(LoadAdError error){if(destroyed || token!=generation)return;loadingInterstitial=false;publish();handler.postDelayed(()->loadInterstitial(),retry(++interstitialFailures));}
  });
 }
 private long retry(int failures){return Math.min(300000L,15000L*(1L<<Math.min(failures-1,4)));}
 @JavascriptInterface public void status(){handler.post(()->{
  if(destroyed)return;
  if(rewarded!=null && SystemClock.elapsedRealtime()-rewardAt>=MAX_AGE)rewarded=null;
  if(interstitial!=null && SystemClock.elapsedRealtime()-interstitialAt>=MAX_AGE)interstitial=null;
  loadReward();loadInterstitial();publish();
 });}
 @JavascriptInterface public void show(String kind,String id){
  if(id==null || !id.matches("[a-zA-Z0-9_-]{1,100}"))return;
  handler.post(()->{
   if(destroyed)return;
   boolean isReward="rewarded".equals(kind);
   if((!isReward && !"interstitial".equals(kind)) || busy || !foreground || activity.isFinishing() || !(isReward?rewardReady():interstitialReady())){
    result(id,false,false);status();return;
   }
   busy=true;pendingId=id;shown=false;earned=false;publish();
   FullScreenContentCallback callback=new FullScreenContentCallback(){
    @Override public void onAdShowedFullScreenContent(){shown=true;}
    @Override public void onAdDismissedFullScreenContent(){finish();}
    @Override public void onAdFailedToShowFullScreenContent(AdError error){finish();}
   };
   try{if(isReward){RewardedAd ad=rewarded;rewarded=null;ad.setFullScreenContentCallback(callback);ad.show(activity,reward->{earned=true;});}
   else{InterstitialAd ad=interstitial;interstitial=null;ad.setFullScreenContentCallback(callback);ad.show(activity);}}catch(RuntimeException error){finish();}
  });
 }
 private void finish(){
  if(pendingId==null)return;
  String id=pendingId;pendingId=null;busy=false;
  result(id,shown,shown&&earned);loadReward();loadInterstitial();publish();
 }
 @JavascriptInterface public void privacy(){handler.post(()->{
  if(destroyed || busy || consent.getPrivacyOptionsRequirementStatus()!=ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED)return;
  busy=true;generation++;loadingReward=false;loadingInterstitial=false;rewarded=null;interstitial=null;publish();
  UserMessagingPlatform.showPrivacyOptionsForm(activity,error->{busy=false;initialize();loadReward();loadInterstitial();publish();});
 });}
 private void result(String id,boolean wasShown,boolean wasEarned){
  emit("{\"id\":"+JSONObject.quote(id)+",\"shown\":"+wasShown+",\"rewarded\":"+wasEarned+"}");
 }
 private void publish(){emit("{\"state\":true,\"rewarded\":"+rewardReady()+",\"interstitial\":"+interstitialReady()+",\"privacy\":"+(consent.getPrivacyOptionsRequirementStatus()==ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED)+"}");}
 private void emit(String json){
  if(destroyed)return;
  // Static receiver, JSON-only payload. Asset frames share this origin; external documents cannot load.
  web.evaluateJavascript("(function send(w){try{w.dispatchEvent(new CustomEvent('nurbi-native-ad',{detail:"+json+"}));for(let i=0;i<w.frames.length;i++)send(w.frames[i]);}catch(e){}})(window)",null);
 }
 void setForeground(boolean value){foreground=value;}
 void destroy(){destroyed=true;handler.removeCallbacksAndMessages(null);rewarded=null;interstitial=null;}
}
