window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a) =>  {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide')
		}
	}

	hideTabContent(1)

	let  showTabContent = (b) => {

		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click',  (event) => {
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
				'minutes':  0,
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
				
				if (t.minutes < 10)  {
					minutes  .innerHTML = `0 ${t.minutes}`;
				}

				if (t.seconds < 10) {
					seconds.innerHTML = `0 ${t.seconds}`;
				}

				if (t.hours < 10)  {
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
	close.addEventListener('click', () => {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	
	let descriptionBtn = document.querySelectorAll('.description-btn');

    for(i=0; i < descriptionBtn.length; i++) {
	
	descriptionBtn[i].addEventListener('click', () =>{
	
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	
	}
	
});
