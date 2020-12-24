
let modalLinks_massive = document.querySelectorAll('.modal-link');
let modalPopup = document.querySelector('.modal');
let layout = document.querySelector('.disable-layout');
let modalInput = document.querySelector('.modal__input');

for (var i = 0; i < modalLinks_massive.length; i++) {
  let modalLink = modalLinks_massive[i];
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (layout.classList.contains("disable-layout--active") & modalPopup.classList.contains("modal--opened")) {
      evt.preventDefault();
      layout.classList.remove("disable-layout--active");
      modalPopup.classList.remove("modal--opened");
    }
  }
});
