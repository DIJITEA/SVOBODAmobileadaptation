document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')){
            preloader.classList.add('done');
            
setTimeout(Hello,1000);
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
        }

    },1000);
}