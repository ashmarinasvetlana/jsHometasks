let menu = document.querySelector('.menu');
let item = document.querySelectorAll('.menu-item');
let li5 = document.createElement('li');
let body = document.querySelector('body');
let title = document.getElementById('title');
let adv = document.querySelector('.adv');
let column = document.querySelectorAll('.column');
let userAnswer = prompt('Ваше отношение к технике apple');
let userAnswerPrompt = document.getElementById('prompt');
let addWord = 'подлинную';

li5.classList.add("menu-item");
li5.textContent = 'Пятый пункт';
menu.appendChild(li5);
menu.insertBefore(item[1], item[3]);

body.style.background = 'url(../img/apple_true.jpg) no-repeat center';

adv.parentNode.removeChild(adv);

userAnswerPrompt.appendChild(document.createTextNode(userAnswer));

title.textContent = 'Мы продаем только подлинную технику apple';



