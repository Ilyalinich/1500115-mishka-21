/*main-nav.js*/

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/*modal-popup.js*/

var modalLinks_massive = document.querySelectorAll('.modal-link');
var modalPopup = document.querySelector('.modal');
var layout = document.querySelector('.disable-layout');
var modalInput = document.querySelector('.modal__input');

for (var i = 0; i < modalLinks_massive.length; i++) {
  var modalLink = modalLinks_massive[i];
  modalLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    layout.classList.add('disable-layout--active');
    modalPopup.classList.add('modal--opened');
    modalInput.focus();
  });
}

layout.addEventListener('click', function () {
    layout.classList.remove('disable-layout--active');
    modalPopup.classList.remove('modal--opened');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (layout.classList.contains('disable-layout--active') & modalPopup.classList.contains('modal--opened')) {
      evt.preventDefault();
      layout.classList.remove('disable-layout--active');
      modalPopup.classList.remove('modal--opened');
    }
  }
});

/*slider.js*/

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
