// Select envelope icon, homepage contact me button 
const dialog = document.querySelector("#email-dialog");
const envelope = document.querySelector("#envelope");
const closeDialog = dialog.querySelector("#close-email-dialog");
const contactMe = document.querySelector("#contact-me-home");
// If dialog not supported
if (typeof dialog.showModal !== "function") {
  // Load polyfill, warning bloadted +25kB
  const head = document.querySelector("head");
  // Load dialog css
  const polyfillCSS = document.createElement('link');
  polyfillCSS.setAttribute('rel', 'stylesheet');
  polyfillCSS.setAttribute('href', '/css/dialog-polyfill.css');
  head.appendChild(polyfillCSS);
  // Load dialog script 
  const polyfill = document.createElement('script');
  polyfill.setAttribute('src', '/js/dialog-polyfill.js');
  head.appendChild(polyfill);

  polyfill.onload = () => {
    dialogPolyfill.registerDialog(dialog);
  }
}

envelope.addEventListener("click", ()=>{
  dialog.showModal();
});

closeDialog.addEventListener("click", ()=>{
  dialog.close();
})

if(contactMe){
  contactMe.addEventListener("click", ()=>{
    dialog.showModal();
  });
}



