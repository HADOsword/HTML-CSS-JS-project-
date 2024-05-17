let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let ninput = eve  

// document.addEventListener("DOMContentLoaded", function pour() {
//   const input = document.getElementById("in");
//   const message = document.getElementById('message');
//   const btn = document.getElementById('btn');
  
//   btn.addEventListener('click', function vers(){
//       message.textContent = input.value ? '' : alert("please fill the entire form !");
//       message.style.color = input.value ? '' : 'red';
//   });
// });


// /* script simplifier */

// document.addEventListener("DOMContentLoaded", function() {
//   const input = document.getElementById("in");
//   const message = document.getElementById('message');
//   const btn = document.getElementById('btn');
  
//   btn.addEventListener('click', function(){
//       message.textContent = input.value ? '' : 'Entrez votre nom';
//       message.style.color = input.value ? '' : 'red';
//   });
// });
