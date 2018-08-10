//дополнительное залание 1
var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
var nowDay = 3;

for(var i = 0; i < week.length; i++) { 
if(i == 5 || i == 6) { 
document.write('<strong>' + week[i] + '</strong>' + '<br>'); 
} else if(i == nowDay){
	document.write('<i>' + week[i] + '</i>' + '<br>'); 
}
	
	else { 
document.write(week[i] + '<br>'); 
} }

//дополнительное залание 2
arr = ['1234', '7755', '6688','3344', '8855', '5354', '9900'];

for(var i = 0; i < arr.length; i++) { 
if (arr[i].startsWith('3') || arr[i].startsWith('7') ){console.log( arr[i]); }

}