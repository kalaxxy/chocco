const arrows = document.querySelector('.slider__arrow');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelector('.slider__list');

const minRight = 0;
const maxRight = 100;
const step = 100;
let currentRight = 0;

slides.style.right = currentRight;

next.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e);
  if (currentRight < maxRight) {
    currentRight += step;
    slides.style.right = currentRight + "%";
    console.log(slides.style.right);
  }
});

prev.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    slides.style.right = currentRight + "%";
  }
});