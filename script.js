let onlineid= document.querySelector(".online-id");
let password= document.querySelector(".password");

let login= document.querySelector(".login");

password.addEventListener("input", ()=>{

    if(onlineid.value!="" && password.value!="" && password.value.length>=8 ){
        login.classList.remove("login1");
        login.classList.add("login2");
       
    }

} );

let eye=document.querySelector("#show-password");
eye.addEventListener("click",()=>{
       
if(password.getAttribute("type")==="password") {
    password.setAttribute("type","text");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  
    }
else{
    password.setAttribute("type", "password");
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  
    }
   

});



login.addEventListener("click", ()=> {
   
     if (onlineid.value.trim() !== "" && password.value.trim() !== "" && password.value.length>=8) {
        onlineid.disabled = true;
        password.disabled = true;
        document.querySelector("#login-word").innerText= "Logging In";

        document.querySelector(".fa-spinner").classList.remove("hidden");      

 }
});
   


