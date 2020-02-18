function ryukswipe(){
document.getElementById("playbutton1").classList.toggle("active");
document.getElementById("playbutton1").classList.toggle("nonactive");
document.getElementById("playbutton2").classList.toggle("active2");
document.getElementById("playbutton2").classList.toggle("nonactive2");
setTimeout(ryukswipe2, 200);
function ryukswipe2(){
document.getElementById("playbutton3").classList.toggle("active2");
document.getElementById("playbutton3").classList.toggle("nonactive2");
}
document.getElementById("playbutton4").classList.toggle("active3");
document.getElementById("playbutton4").classList.toggle("nonactive3");
}

function test(){
    alert("test");
}
