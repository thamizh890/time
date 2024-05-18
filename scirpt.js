 let tostbar =document.getElementById("tostbar");
 let successMsg='<i class="fa-solid fa-circle-check"></i>success'
 let exiteMsg ='<i class="fa-solid fa-circle-xmark"></i> Error';
 let invalidMsg='<i class="fa-sharp fa-solid fa-circle-exclamation"></i>Invalid'


 function show(Msg){
    let toast =document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=Msg;
    tostbar.appendChild(toast);

    if(Msg.includes('Error') ) {
        toast.classList.add('error');
        }
        if(Msg.includes ('Invalid')){
        toast.classList.add('Invalid');
        }
         setTimeout(
            ()=>{
                toast.remove();
            },5000);
            
 }