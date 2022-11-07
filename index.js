let formlog = document.querySelector(".loginform");
let login = document.querySelector(".log");
let closelog = document.querySelector("#close-loginform");
let body = document.querySelector("body");




 login.addEventListener("click",open_log)
 function open_log() {
formlog.style.display="block";
body.style.overflowY="hidden";
 }

 closelog.addEventListener("click",close_log);

 function close_log() {
    formlog.style.display="none";
    body.style.overflowY="scroll"
 }

 let signup_btn= document.querySelector("#sign-up");
 let closesign_btn= document.querySelector("#close-signupform");
 let formsign= document.querySelector(".signupform");


 signup_btn.addEventListener("click",open_sign);

 function open_sign() {
    formsign.style.display="block";
    body.style.overflowY="hidden";
 }

 closesign_btn.addEventListener("click",close_sign);

 function close_sign() {
    formsign.style.display="none";
    body.style.overflowY="scroll"

 }

 let login2= document.querySelector("#log");
login2.addEventListener("click",loginon)

function loginon() {
    open_log();
    close_sign();
    body.style.overflowY="hidden";

}

let signup2= document.querySelector("#create-account");

signup2.addEventListener("click",signupon);

function signupon() {
    open_sign();
    close_log();
    body.style.overflowY="hidden";
}

let toglebtn=document.querySelector("#togle-bar-logo-btn");
let togleclose = document.querySelector("#toggle-close");
let toglepage = document.querySelector(".toggle-bar")


toglebtn.addEventListener("click",togle_open);

function togle_open() {
   toglepage.style.display="block";
   body.style.overflowY="hidden";

}

togleclose.addEventListener("click",togle_close);

function togle_close() {
   toglepage.style.display="none";
   body.style.overflowY="scroll"

}

let togglelogIN=document.querySelector("#toggle-signin")
let togglesignUP=document.querySelector("#toggle-singup");

console.log(togglelogIN);

togglelogIN.addEventListener("click",toggle_login);

function toggle_login () {
   togle_close();
   open_log();
}

togglesignUP.addEventListener("click",toggle_signup);

function toggle_signup() {
   open_sign();
   togle_close();
}

let triangle=document.querySelector("#tri");
let location_drowpdown=document.querySelector(".location-box");

triangle.addEventListener("click",loctionpage);

function loctionpage() {
   
if (triangle.style.transform==="rotate(0deg)" && location_drowpdown.style.display==="none") {
   triangle.style.transform="rotate(180deg)";
   location_drowpdown.style.display="block";
} else {
   triangle.style.transform="rotate(0deg)";
   location_drowpdown.style.display="none";
}

}


///select country


let country_tri=document.querySelector("#tri-2");
let country_btn=document.querySelector(".footer-country");
let country_box=document.querySelector(".popup-country-flag-box");

country_btn.addEventListener("click",show_country);

function show_country() {
   if (country_tri.style.transform==="rotate(0deg)" && country_box.style.display==="none") {

      country_tri.style.transform="rotate(180deg)"
      country_box.style.display ="block"
      
   } else {
      country_tri.style.transform="rotate(0deg)"
      country_box.style.display ="none"
   }
   
}


