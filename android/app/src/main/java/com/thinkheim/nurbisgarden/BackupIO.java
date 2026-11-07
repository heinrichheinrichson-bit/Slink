package com.thinkheim.nurbisgarden;

import android.app.Activity;
import android.content.*;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import java.io.*;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;

/** User-initiated clipboard and Android document picker. Never reads arbitrary file paths. */
public final class BackupIO {
 private static final int SAVE=6201,LOAD=6202,MAX=4*1024*1024;
 private final Activity activity;private final WebView web;
 private String pendingId,pendingText;private boolean destroyed;
 BackupIO(Activity activity,WebView web){this.activity=activity;this.web=web;}
 private boolean valid(String id){return id!=null&&id.matches("[a-zA-Z0-9_-]{1,100}");}
 @JavascriptInterface public void copy(String text,String id){if(!valid(id))return;activity.runOnUiThread(()->{if(destroyed)return;try{if(text==null||text.length()>MAX)throw new IOException();((ClipboardManager)activity.getSystemService(Context.CLIPBOARD_SERVICE)).setPrimaryClip(ClipData.newPlainText("Nurbi’s Garden backup",text));reply(id,null,false,false);}catch(Exception error){reply(id,null,true,false);}});}
 @JavascriptInterface public void paste(String unused,String id){if(!valid(id))return;activity.runOnUiThread(()->{if(destroyed)return;try{ClipboardManager clipboard=(ClipboardManager)activity.getSystemService(Context.CLIPBOARD_SERVICE);ClipData clip=clipboard.getPrimaryClip();CharSequence value=clip!=null&&clip.getItemCount()>0?clip.getItemAt(0).getText():null;if(value==null||value.length()>MAX)throw new IOException();reply(id,value.toString(),false,false);}catch(Exception error){reply(id,null,true,false);}});}
 @JavascriptInterface public void save(String text,String id){pick(true,text,id);}
 @JavascriptInterface public void load(String unused,String id){pick(false,null,id);}
 private void pick(boolean save,String text,String id){if(!valid(id))return;activity.runOnUiThread(()->{
  if(destroyed)return;if(pendingId!=null||save&&(text==null||text.length()>MAX)){reply(id,null,true,false);return;}
  pendingId=id;pendingText=text;
  Intent intent=new Intent(save?Intent.ACTION_CREATE_DOCUMENT:Intent.ACTION_OPEN_DOCUMENT);intent.addCategory(Intent.CATEGORY_OPENABLE);intent.setType(save?"application/json":"*/*");
  if(save)intent.putExtra(Intent.EXTRA_TITLE,"nurbi-garden-backup-"+new java.text.SimpleDateFormat("yyyy-MM-dd",java.util.Locale.ROOT).format(new java.util.Date())+".json");
  try{activity.startActivityForResult(intent,save?SAVE:LOAD);}catch(Exception error){pendingId=null;pendingText=null;reply(id,null,true,false);}
 });}
 boolean result(int request,int code,Intent data){
  if(request!=SAVE&&request!=LOAD)return false;
  String id=pendingId,text=pendingText;pendingId=null;pendingText=null;if(id==null)return true;
  if(code!=Activity.RESULT_OK||data==null||data.getData()==null){reply(id,null,false,true);return true;}
  Uri uri=data.getData();new Thread(()->{
   try{String read=null;if(request==SAVE){try(OutputStream out=activity.getContentResolver().openOutputStream(uri,"wt")){if(out==null)throw new IOException();out.write(text.getBytes(StandardCharsets.UTF_8));}}
   else{try(InputStream in=activity.getContentResolver().openInputStream(uri);ByteArrayOutputStream out=new ByteArrayOutputStream()){if(in==null)throw new IOException();byte[] buffer=new byte[8192];int n;while((n=in.read(buffer))!=-1){if(out.size()+n>MAX)throw new IOException();out.write(buffer,0,n);}read=out.toString(StandardCharsets.UTF_8.name());}}
   String loaded=read;activity.runOnUiThread(()->reply(id,loaded,false,false));
   }catch(Exception error){activity.runOnUiThread(()->reply(id,null,true,false));}
  },"Nurbi-backup-file").start();return true;
 }
 private void reply(String id,String text,boolean error,boolean cancelled){
  if(destroyed)return;
  if(text!=null)for(int at=0;at<text.length();at+=24000)emit("{\"id\":"+JSONObject.quote(id)+",\"chunk\":"+JSONObject.quote(text.substring(at,Math.min(text.length(),at+24000)))+"}");
  emit("{\"id\":"+JSONObject.quote(id)+",\"done\":true,\"error\":"+error+",\"cancelled\":"+cancelled+"}");
 }
 private void emit(String json){if(!destroyed)web.evaluateJavascript("(function send(w){try{w.dispatchEvent(new CustomEvent('nurbi-backup-io',{detail:"+json+"}));for(let i=0;i<w.frames.length;i++)send(w.frames[i]);}catch(e){}})(window)",null);}
 void destroy(){destroyed=true;pendingId=null;pendingText=null;}
}
