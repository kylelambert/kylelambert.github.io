var slideIndex = 1;
var myTimer;
var slideshowContainer;
var timeToChange = 3000;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, timeToChange);
  
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1); 
    }
  
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, timeToChange);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, timeToChange);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, timeToChange);
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () =>{
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, timeToChange);
}