package com.thinkheim.nurbisgarden;

import android.app.Activity;
import android.os.Bundle;
import android.os.Build;
import android.graphics.Color;
import android.net.Uri;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.WebView;
import android.webkit.WebSettings;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.widget.FrameLayout;
import android.webkit.WebViewClient;
import java.io.IOException;

import java.io.ByteArrayInputStream;

public class MainActivity extends Activity {
 private WebView web;
 private NativeAds ads;
 private BackupIO backup;
 private static final String HOST = "appassets.androidplatform.net";
 private static final String START = "https://" + HOST + "/assets/gartenstudio.html";
 @Override public void onCreate(Bundle state) {
  super.onCreate(state);
  if(Build.VERSION.SDK_INT>=30)getWindow().setDecorFitsSystemWindows(false);
  FrameLayout frame = new FrameLayout(this);
  frame.setBackgroundColor(Color.rgb(244,232,208));
  web = new WebView(this);
  web.setBackgroundColor(Color.rgb(244,232,208));
  frame.addView(web,new FrameLayout.LayoutParams(-1,-1));
  setContentView(frame);
  getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
  frame.setOnApplyWindowInsetsListener((v,insets)->{
   v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());
   return insets.consumeSystemWindowInsets();
  });
  frame.requestApplyInsets();
  WebSettings settings=web.getSettings();
  settings.setJavaScriptEnabled(true);
  settings.setDomStorageEnabled(true);
  settings.setAllowFileAccess(false);
  settings.setAllowContentAccess(false);
  settings.setSupportZoom(false);
  settings.setMediaPlaybackRequiresUserGesture(true);
  settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
  backup = new BackupIO(this,web);
  web.addJavascriptInterface(backup,"NurbiBackupIO");
  ads = new NativeAds(this, web);
  web.addJavascriptInterface(ads, "NurbiNativeAds");
  web.setWebViewClient(new WebViewClient(){
   @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request){
    Uri uri=request.getUrl();
    if("https".equals(uri.getScheme())&&HOST.equals(uri.getHost())){
     String path=uri.getPath();
     if(path!=null&&path.startsWith("/assets/")){
      String asset=path.substring(8);
      if(!asset.contains("..")&&!asset.startsWith("/")&&!asset.contains("\\")){
       String mime=asset.endsWith(".html")?"text/html":asset.endsWith(".css")?"text/css":asset.endsWith(".js")?"application/javascript":asset.endsWith(".webp")?"image/webp":asset.endsWith(".png")?"image/png":asset.endsWith(".svg")?"image/svg+xml":"text/plain";
       try{return new WebResourceResponse(mime,mime.startsWith("image/")?null:"UTF-8",getAssets().open(asset));}catch(IOException ignored){}
      }
     }
    }
    return new WebResourceResponse("text/plain","UTF-8",404,"Not found",null,new ByteArrayInputStream(new byte[0]));
   }
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){
    Uri uri=request.getUrl();
    if("https".equals(uri.getScheme())&&HOST.equals(uri.getHost())&&uri.getPath()!=null&&uri.getPath().startsWith("/assets/"))return false;
    // Keep the bridge inside local assets. Open explicit user links in the external browser only.
    if(request.isForMainFrame() && request.hasGesture() && "https".equals(uri.getScheme())){
     try{startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,uri));}catch(android.content.ActivityNotFoundException ignored){}
    }
    return true;
   }
  });
  if(state==null||web.restoreState(state)==null)web.loadUrl(START);
  ads.start();
 }
 @Override protected void onActivityResult(int request,int result,android.content.Intent data){if(backup!=null&&backup.result(request,result,data))return;super.onActivityResult(request,result,data);}
 @Override protected void onSaveInstanceState(Bundle state){web.saveState(state);super.onSaveInstanceState(state);}
 @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
 @Override protected void onPause(){if(ads!=null)ads.setForeground(false);web.onPause();super.onPause();}
 @Override protected void onResume(){super.onResume();if(ads!=null)ads.setForeground(true);if(web!=null)web.onResume();}
 @Override protected void onDestroy(){if(backup!=null)backup.destroy();if(ads!=null)ads.destroy();if(web!=null){web.stopLoading();web.destroy();}super.onDestroy();}
}
