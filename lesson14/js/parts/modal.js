"use strict";

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  var moreTab = document.querySelector('.info');
  moreTab.addEventListener('click', function () {
    var target = event.target;

    if (target.className == 'description-btn') {
      overlay.style.display = "block";
      document.body.style.overflow = 'hidden';
    }
  });
}

module.exports = modal;