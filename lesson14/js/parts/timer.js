function timer(){

	let deadline = '2019-08-29';

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
}

module.exports = timer;