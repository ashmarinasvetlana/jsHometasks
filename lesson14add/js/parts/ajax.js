"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = ajax;
exports.default = _default;