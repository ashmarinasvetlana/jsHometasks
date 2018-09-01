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