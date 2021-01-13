var btnPrev = document.querySelector('.slider__prev');
var btnNext = document.querySelector('.slider__next');

var slides = document.querySelectorAll('.slider__item');
var i = 0;

btnPrev.addEventListener('click', function() {
  slides[i].classList.remove('slider__item--shown');
  i--;
  if( i < 0) {
    i = slides.length - 1;
  }
  slides[i].classList.add('slider__item--shown');
});

btnNext.addEventListener('click', function() {
  slides[i].classList.remove('slider__item--shown');
  i++;
  if( i >= slides.length) {
    i = 0;
  }
  slides[i].classList.add('slider__item--shown');
});
