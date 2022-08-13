 let slides = document.getElementsByClassName('slides');
 let counter =1;
  let autoSlide = setInterval(increaseCounter,6000);
 autoSlide();
 slideShow();
function plusSlides(n){
    counter+=n;
    slideShow(counter);
    clearInterval(autoSlide);
    autoSlide = setInterval(increaseCounter,1000);
}

function increaseCounter(){
    counter++;
    slideShow(counter);
}

 function slideShow(n){
    let i;
    
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none';
    }
    if(n>=slides.length){
        counter=0;
        n=counter;
    }
    else if(n<0){
        
        counter = slides.length-1;
        n=counter;
    }
     slides[n].style.display='block';
 }