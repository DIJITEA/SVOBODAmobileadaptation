
setTimeout(Hellofix,300);
function Hellofix(){
    document.getElementById('fix').parentNode.removeChild(document.getElementById('fix'));
}
setTimeout(Hello,300);
function Hello(){
    document.getElementById('Hello1').style.opacity = 1;
    document.getElementById('Hello1').style.top = 0 + '%';
    setTimeout(Hello2,900);
    
}

function Hello2(){
    document.getElementById('Hello1').style.opacity = 0;
    document.getElementById('Hello1').style.top = -100 + '%';
    setTimeout(Hello3,300);
}

function Hello3(){
    document.getElementById('Hello2').style.opacity = 1;
    document.getElementById('Hello2').style.top = 0 + '%';
    setTimeout(Hello4,900);
}
function Hello4(){
    document.getElementById('Hellomain').style.opacity = 0;
    setTimeout(Hello5,300);
}
function Hello5(){
    document.getElementById('Hellomain').parentNode.removeChild(document.getElementById('Hellomain'));
    setTimeout(Homepagespawn1,300);
}
function Homepagespawn1(){
    document.getElementById('Centerspawn').style.opacity = 1;
    document.getElementById('Wline1spawn').style.width = 100 + '%';
    document.getElementById('Wline1spawn').style.left = 0 + '%';
    document.getElementById('Wline2spawn').style.width = 100 + '%';
    document.getElementById('Wline2spawn').style.left = 0 + '%';
}

let magnet = window.innerHeight;


window.addEventListener('scroll', function() {
    let cenwidth = window.innerHeight / window.innerHeight;
    let cent = window.innerHeight;
    let peny = pageYOffset;
    if(peny <= cent ){
        scrollfix();
    }
    else{
        scrollfix();
        peny = window.innerHeight; 
    }
    function scrollfix(){
      
        document.getElementById('Centerspawn').style.opacity = (cenwidth - (peny / window.innerHeight) * 8);
        document.getElementById('Wline1spawn').style.opacity = (cenwidth - (peny / window.innerHeight) * 8);
        document.getElementById('Wline2spawn').style.opacity = (cenwidth - (peny / window.innerHeight) * 8);
        document.getElementById('BG1').style.opacity = (cenwidth - (peny / window.innerHeight) * 2);
        document.getElementById('BG2').style.opacity = (cenwidth - (peny / window.innerHeight) * 2);
        
        document.getElementById('About').style.right = ((cenwidth - (peny / window.innerHeight)) * 100) * 16 - 5 + '%';
        document.getElementById('Art').style.right = ((cenwidth - (peny / window.innerHeight)) * 100) * 8 - 5  + '%';
        document.getElementById('Piercing').style.right = ((cenwidth - (peny / window.innerHeight)) * 100) * 4 - 5 + '%';
        document.getElementById('Contacts').style.right = ((cenwidth - (peny / window.innerHeight)) * 100) * 2 - 5 + '%';
    
        document.getElementById('Gifmove').style.right = ((cenwidth - (peny / window.innerHeight)) * 100) * 16 +  40 +'%';
        document.getElementById('Gifmove2').style.top = ((cenwidth - (peny / window.innerHeight)) * 100) * 16 +  50 +'%';
        document.getElementById('Gifmove3').style.top = ((cenwidth - (peny / window.innerHeight)) * 100) * (-8) +  60 +'%';
    
      }
  });

  setInterval(freedom,400);
  let Gifopt = 1;
  function freedom(){
    if (Gifopt < 9) {
      document.getElementById('Gifop' + Gifopt).style.opacity = 1;
      Gifopt = Gifopt + 1;
    }
    else{
        while (Gifopt > 1) { 
            document.getElementById('Gifop' + Gifopt).style.opacity = 0;
            Gifopt = Gifopt - 1;
          }
    }
  }
 
  /*alert( window.innerHeight ); */