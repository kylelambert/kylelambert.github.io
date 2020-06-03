var slideIndex;
var myTimer;
var timeToChange = 3000;
var slideshows, numSlideshows;

window.addEventListener("load",function() {

    slideshows = document.getElementsByClassName("slideshow-inner");
    numSlideshows = slideshows.length;
    slideIndex = [];
    myTimer = [];
    console.log(slideshows.length);
  
    for (var i = 0; i < numSlideshows; i++)
    {
        slideIndex[i] = 1;
        showSlides(slideIndex[i], i);
        //myTimer[i] = setInterval(function(){plusSlides(1, i)}, timeToChange);

        // slideshows[i].addEventListener('mouseenter', pause(i))
        // slideshows[i].addEventListener('mouseleave', resume(i))
    }
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n, i){
    //clearInterval(myTimer[i]);
    if (n < 0) {
        showSlides(slideIndex[i] -= 1, i);
    } else {
        showSlides(slideIndex[i] += 1, i); 
    }
  
    // if (n === -1) {
    //     myTimer[i] = setInterval(function(){plusSlides(n + 2, i)}, timeToChange);
    // } else {
    //     myTimer[i] = setInterval(function(){plusSlides(n + 1, i)}, timeToChange);
    // }
}

//Controls the current slide and resets interval if needed
// function currentSlide(n) {
//     clearInterval(myTimer);
//     myTimer = setInterval(function(){plusSlides(n + 1)}, timeToChange);
//     showSlides(slideIndex = n);
// }

function showSlides(n, i) {
    var slides = slideshows[i].getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex[i] = 1}
    if (n < 1) {slideIndex[i] = slides.length}
    for (var j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[slideIndex[i]-1].style.display = "grid";
}

// pause = (i) => {
//     clearInterval(myTimer[i]);
// }

// resume = (i) =>{
//     clearInterval(myTimer[i]);
//     myTimer[i] = setInterval(function(){plusSlides(slideIndex, i)}, timeToChange);
// }
