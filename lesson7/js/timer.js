let hours = document.getElementById('hours'),
	minutes = document.getElementById('minutes'),
	seconds = document.getElementById('seconds');



function currentTime() {
	let date = new Date(),
	zeroMin = zeroSec = zeroHour = '';
	if (date.getMinutes() < 10) zeroMin = '0';
	if (date.getSeconds() < 10) zeroSec = '0';
	if (date.getHours() < 10) zeroHour = '0';

	hours.textContent = zeroHour + date.getHours() + ':',
		minutes.textContent = zeroMin + date.getMinutes() + ':',
		seconds.textContent = zeroSec + date.getSeconds();


}
setInterval(currentTime, 1000);
