// Select envelope icon, homepage contact me button 
const dialog = document.querySelector("#email-dialog");
const envelope = document.querySelector("#envelope");
const closeDialog = dialog.querySelector("#close-email-dialog");
const contactMe = document.querySelector("#contact-me-home");

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



