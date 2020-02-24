var Buttoncheck = 1;
function playbutton(){
  if (Buttoncheck == 1){
  document.getElementById("hatbutton").classList.toggle("buttonposition");
  document.getElementById("hatbutton").classList.toggle("revbuttonhide");
  }
}
function ryukswipe(){
document.getElementById("playbutton1").classList.toggle("active");
document.getElementById("playbutton1").classList.toggle("nonactive");
document.getElementById("playbutton2").classList.toggle("active2");
document.getElementById("playbutton2").classList.toggle("nonactive2");
setTimeout(playbutton, 100);

}



sessionStorage.clear('test');
let realtimeval;
function openmenu(){
  Buttoncheck = 2;
   realtimeval = val;

  document.getElementById("sidebar" + realtimeval).classList.toggle("activesidebar");
  document.getElementById("sidebar" + realtimeval).classList.toggle("nonactive");

  let prevslideval = sessionStorage.getItem('test');
  function second_phase(){
if(prevslideval > 0 && prevslideval != realtimeval){

  document.getElementById("sidebar" + prevslideval).classList.remove("activesidebar")
  document.getElementById("sidebar" + prevslideval).classList.add("nonactive")
}
ryukswipe();
  }
setTimeout(second_phase, 300)

sessionStorage.setItem('test', val); 

}
function ryukswipebacktime(){
  document.getElementById("sidebar" + realtimeval).classList.toggle("activesidebar");
  document.getElementById("sidebar" + realtimeval).classList.toggle("nonactive");
}
function ryukswipeback(){
  if (Buttoncheck == 2){
    ryukswipe();
    setTimeout(ryukswipebacktime, 300)
    
    Buttoncheck = 3;
  }
  else if (Buttoncheck == 3){
    Buttoncheck = 1;
    ryukswipe();
  }
  else{
    ryukswipe();
  }
}