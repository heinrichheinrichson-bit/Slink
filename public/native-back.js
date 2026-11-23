/* Android asks the visible document before navigating its history. */
(()=>{
 window.NurbiHandleBack=()=>{
  const focused=document.activeElement?.closest?.('dialog[open]');
  const dialogs=[...document.querySelectorAll('dialog[open]')];
  const dialog=focused||dialogs.at(-1);
  if(dialog){const cancel=new Event('cancel',{cancelable:true});if(dialog.dispatchEvent(cancel))dialog.close();return true}
  for(const frame of document.querySelectorAll('iframe')){
   const r=frame.getBoundingClientRect();if(frame.hidden||frame.getAttribute('aria-hidden')==='true'||r.width<=0||r.height<=0||r.right<=0||r.bottom<=0||r.left>=innerWidth||r.top>=innerHeight)continue;
   try{if(frame.contentWindow.NurbiHandleBack?.())return true}catch{}
  }
  window.dispatchEvent(new Event('nurbi-backup-flush'));return false;
 };
})();
