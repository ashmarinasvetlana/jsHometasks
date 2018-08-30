window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide')
		}
	}

	hideTabContent(1)

	let showTabContent = (b) => {

		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	//timer
	let deadline = '2018-08-29';

	let getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date());
		if (t > 0) {
			seconds = Math.floor((t / 1000) % 60),
				minutes = Math.floor((t / 1000 / 60) % 60),
				hours = Math.floor((t / (1000 * 60 * 60)) % 24);
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
	}

	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		let timeInterval = setInterval(
			() => {
				let t = getTimeRemaining(endtime);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.minutes < 10) {
					minutes.innerHTML = `0 ${t.minutes}`;
				}

				if (t.seconds < 10) {
					seconds.innerHTML = `0 ${t.seconds}`;
				}

				if (t.hours < 10) {
					hours.innerHTML = `0 ${t.hours}`;
				}


				if (t.total <= 0) {

					clearInterval(timeInterval);
					return true;
				}


			}, 1000);


	}


	setClock('timer', deadline);

		//modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	moreTab = document.querySelector('.info');
	moreTab.addEventListener('click', () =>  {
							 let target = event.target;
		 if (target.className == 'description-btn') {
overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
                        }
							 });
	//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо!Мы скоро с Вами свяжемся";
	message.failure = "Что-то пошло нетак...";

	let popupForm = document.getElementsByClassName('main-form')[0],
		input = popupForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	popupForm.addEventListener('submit', function (event) {
		event.preventDefault();
		popupForm.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(popupForm);

		request.send(formData);
		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';

			//очищаем поля ввода
		}
	});



	let form = document.getElementById('form');
	console.log(form);


	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);
		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';

			//очищаем поля ввода
		}
	});

	//slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	//функция показа слайда 

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		//скрываем ненужные слайды

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};



		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	};



	function plusSlides(n) {
		showSlides(slideIndex += n);

	};

	let slideInterval = setInterval(() => {
		plusSlides(1);
	}, 3000);


	function currentSlide(n) {
		showSlides(slideIndex = n);
	};

	//слайд назад

	prev.addEventListener('click', function () {
		plusSlides(-1);
		clearInterval(slideInterval);
	});
	//слайд вперед

	next.addEventListener('click', function () {
		plusSlides(1);
		clearInterval(slideInterval);
	
	});

	//Нахождение точек

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
				clearInterval(slideInterval);
			}
		}
	});



	//calculator

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;
	totalValue.innerHTML = 0;
//Анимация итоговой суммы 
	
function animateTotalValue (sum){
let i = 0;
	
(function(){
if( i <= total){
setTimeout(arguments.callee,5);
totalValue.innerHTML = i;
i = i + 500;
}else{
totalValue.innerHTML = sum;
}
})();
}

	persons.addEventListener('input', function () {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			animateTotalValue(total);
		}
	})

	restDays.addEventListener('input', function () {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0' ) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			animateTotalValue(total);
		}
	});


	
place.addEventListener('change', function(){
	if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0') {
		totalValue.innerHTML = 0;
		
	} else {
		let a = total,
		b = a * this.options[this.selectedIndex].value;
		totalValue.innerHTML = b;
		animateTotalValue(b);
	
	}
}); 
	

		
//Ограничение на ввод символов
	
document.getElementsByTagName('input')[0].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);

  
      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }
document.getElementsByTagName('input')[1].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);


      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }
    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) 
      }

      return null; 
    }	
});
