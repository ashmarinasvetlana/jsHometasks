window.addEventListener('DOMContentLoaded', function(){
	let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info = document.getElementsByClassName('info-header')[0];
	
	function hideTabContent(a){
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide')
		}
	}
	
	hideTabContent(1)
	 
	function showTabContent(b){
		
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	
	info.addEventListener('click', function(event){
		let target = event.target;
		if(target.className == 'info-header-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});
	
//timer
let deadline = '2018-08-25';
function getTimeRemaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date());
		if (t > 0){
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) % 24 );
	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
			
} else {
	return{
		'total': 0,
		'hours': 0,
		'minutes': 0,
		'seconds': 0
};
	
}
}
	function setClock(id, endtime){
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		 
		let timeInterval = setInterval(
		function (){
			let t = getTimeRemaining(endtime);
			
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
			let zeroMin = '',
			zeroSec = '',
			zeroHour = '';
			if (t.minutes < 10) zeroMin = '0';
			{hours.innerHTML = zeroMin + t.minutes;}
			
	        if (t.seconds < 10) zeroSec = '0';
			{seconds.innerHTML = zeroSec + t.seconds;}
			
	        if (t.hours < 10) zeroHour = '0';
			{hours.innerHTML = zeroHour + t.hours;}
			
			
			if (t.total <= 0){
				
				clearInterval(timeInterval); 
			 return true;
			}
		
		
		} ,1000);
		
		
	}
	
	
	setClock('timer', deadline);
});


