

setTimeout(Hellofix,300);
function Hellofix(){
    document.getElementById('fix').parentNode.removeChild(document.getElementById('fix'));
}

function Homepagespawn1(){
    document.getElementById('Centerspawn').style.opacity = 1;
    document.getElementById('Wline1spawn').style.width = 100 + '%';
    document.getElementById('Wline1spawn').style.left = 0 + '%';
    document.getElementById('Wline2spawn').style.width = 100 + '%';
    document.getElementById('Wline2spawn').style.left = 0 + '%';
    document.body.classList.toggle('stopscroll');
}

let magnet = window.innerHeight;


window.addEventListener('scroll', function() {
    let cenwidth = window.innerHeight / window.innerHeight;
    let cent = window.innerHeight;
    let penny = pageYOffset;
    if(penny < (cent * 0.95)){
        scrollfix();
    }
    else{
        penny = window.innerHeight; 
        scrollfix(); 
    }
    function scrollfix(){
      
        document.getElementById('Centerspawn').style.opacity = (cenwidth - (penny / window.innerHeight) * 8);
        document.getElementById('Wline1spawn').style.opacity = (cenwidth - (penny / window.innerHeight) * 8);
        document.getElementById('Wline2spawn').style.opacity = (cenwidth - (penny / window.innerHeight) * 8);
        document.getElementById('BG1').style.opacity = (cenwidth - (penny / window.innerHeight) * 4);
        document.getElementById('BG2').style.opacity = (cenwidth - (penny / window.innerHeight) * 4);
        
        document.getElementById('About').style.right = ((cenwidth - (penny / window.innerHeight)) * 100) * 16 - 5 + '%';
        document.getElementById('Art').style.right = ((cenwidth - (penny / window.innerHeight)) * 100) * 8 - 5  + '%';
        document.getElementById('Piercing').style.right = ((cenwidth - (penny / window.innerHeight)) * 100) * 4 - 5 + '%';
        document.getElementById('Contacts').style.right = ((cenwidth - (penny / window.innerHeight)) * 100) * 2 - 5 + '%';
    
        document.getElementById('Gifmove').style.right = ((cenwidth - (penny / window.innerHeight)) * 100) + 40 +'%';
        document.getElementById('Gifmove2').style.top = ((cenwidth - (penny / window.innerHeight)) * 100) + 50 +'%';
        document.getElementById('Gifmove3').style.top = (-(cenwidth - (penny / window.innerHeight)) * 100) + 60 +'%';
    
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

  function opensidebar(){
      sessionStorage.val = val;
      document.getElementById('Side' + sessionStorage.val).classList.toggle('done');
      document.body.classList.toggle('stopscroll');
  }

  window.onload = function(){
  var hiddenElement = document.getElementById("About");
  var btn = document.querySelector('.downa');
  function Godown() {
    hiddenElement.scrollIntoView({behavior: "smooth"});
  }
  btn.addEventListener('click', Godown);
 }
  /*alert( window.innerHeight ); */