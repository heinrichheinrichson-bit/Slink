package app.slink.garden;

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
    Uri uri=request.getUrl();return !("https".equals(uri.getScheme())&&HOST.equals(uri.getHost())&&uri.getPath().startsWith("/assets/"));
   }
  });
  if(state==null||web.restoreState(state)==null)web.loadUrl(START);
 }
 @Override protected void onSaveInstanceState(Bundle state){web.saveState(state);super.onSaveInstanceState(state);}
 @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
 @Override protected void onPause(){web.onPause();super.onPause();}
 @Override protected void onResume(){super.onResume();if(web!=null)web.onResume();}
 @Override protected void onDestroy(){if(web!=null){web.stopLoading();web.destroy();}super.onDestroy();}
}
