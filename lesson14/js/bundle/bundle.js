(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', () => {

let tab = require('../parts/tab.js');
let modal = require('../parts/modal.js');
let ajax = require('../parts/ajax.js');
let slider = require('../parts/slider.js');
let calc = require('../parts/calc.js');
let timer = require('../parts/timer.js');
	
	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();
});

},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
"use strict";

function ajax() {
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо!Мы скоро с Вами свяжемся";
  message.failure = "Что-то пошло нетак...";
  var popupForm = document.getElementsByClassName('main-form')[0],
      input = popupForm.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  popupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    popupForm.appendChild(statusMessage); //AJAX

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(popupForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; //Добавляем контент на страницу
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = ''; //очищаем поля ввода
    }
  });
  var form = document.getElementById('form');
  console.log(form);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage); //AJAX

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(form);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; //Добавляем контент на страницу
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = ''; //очищаем поля ввода
    }
  });
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
"use strict";

function calc() {
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0; //Анимация итоговой суммы 
/*
  function animateTotalValue(sum) {
    var i = 0;

    (function () {
      if (i <= total) {
        setTimeout(arguments.callee, 5);
        totalValue.innerHTML = i;
        i = i + 500;
      } else {
        totalValue.innerHTML = sum;
      }
    })();
  }
*/
  persons.addEventListener('input', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
     // animateTotalValue(total);
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
     // animateTotalValue(total);
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
      totalValue.innerHTML = 0;
    } else {
      var a = total,
          b = a * this.options[this.selectedIndex].value;
      totalValue.innerHTML = b;
      //animateTotalValue(b);
    }
  }); //Ограничение на ввод символов

  document.getElementsByTagName('input')[0].onkeypress = function (e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;

    if (chr < '0' || chr > '9') {
      return false;
    }
  };

  document.getElementsByTagName('input')[1].onkeypress = function (e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;

    if (chr < '0' || chr > '9') {
      return false;
    }
  };

  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode); // IE
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    }

    return null;
  }
}

module.exports = calc;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

function slider() {
  var slideIndex = 1,
      slides = document.getElementsByClassName('slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.getElementsByClassName('dot');
  showSlides(slideIndex); //функция показа слайда 

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    ;

    if (n < 1) {
      slideIndex = slides.length;
    }

    ; //скрываем ненужные слайды

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    ;

    for (var _i = 0; _i < dots.length; _i++) {
      dots[_i].classList.remove('dot-active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  ;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  ;
  var slideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  ; //слайд назад

  prev.addEventListener('click', function () {
    plusSlides(-1);
    clearInterval(slideInterval);
  }); //слайд вперед

  next.addEventListener('click', function () {
    plusSlides(1);
    clearInterval(slideInterval);
  }); //Нахождение точек

  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
        clearInterval(slideInterval);
      }
    }
  });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
"use strict";

function tab() {
  //tab
  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0];

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'info-header-tab') {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }

    ;
  });
}

module.exports = tab;
},{}],7:[function(require,module,exports){
"use strict";

function timer() {
  var deadline = '2019-08-29';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    if (t > 0) {
      var seconds = Math.floor(t / 1000 % 60), minutes = Math.floor(t / 1000 / 60 % 60), hours = Math.floor(t / (1000 * 60 * 60) % 24);
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    } else {
      return {
        'total': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
      };
    }
  };

  var setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    var timeInterval = setInterval(function () {
      var t = getTimeRemaining(endtime);
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.minutes < 10) {
        minutes.innerHTML = "0 ".concat(t.minutes);
      }

      if (t.seconds < 10) {
        seconds.innerHTML = "0 ".concat(t.seconds);
      }

      if (t.hours < 10) {
        hours.innerHTML = "0 ".concat(t.hours);
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        return true;
      }
    }, 1000);
  };

  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
