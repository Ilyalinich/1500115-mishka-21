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
