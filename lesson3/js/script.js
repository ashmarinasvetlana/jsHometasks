var budget,
	shopName,
	time,
	price = 1000;

function start(){
	budget = prompt("Ваш бюджет на месяц?");
	while (isNaN(budget)|| budget == '' || budget == null){
		budget = prompt("Ваш бюджет на месяц?");
	}
	shopName =  prompt("Введите имя для вашего магазина").toUpperCase();
	time = 21;
	
}

start();
var mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [],
	employers: {},
	isOpen: false,
	discount: false
	
}

function addEmployers(){
	for (var i = 0; i < 4; i++) {
	var emploeeName = prompt("Введите имя сотрудника");

	if ((typeof(emploeeName)) === 'string' && (typeof(emploeeName)) != null && emploeeName != '' && emploeeName.length < 50 ) {
		console.log('Все верно!');
			mainList.employers[i] = i+1 + ':' + emploeeName;
	} else {
		alert('Вы неправильно ввели данные, повторите попытку!')
		i--;
		
	}

}

}

addEmployers();


function chooseGoods(){

for (var i = 0; i < 5; i++) {
	var a = prompt("Какой тип товаров будем продавать?");

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
			mainList.shopGoods[i] = a;
	} else {
		alert('Вы неправильно ввели данные, повторите попытку!')
		i--;
		
	}

}

}
chooseGoods();
/* 2-й способ задания цикла
var i = 0;
while (i < 5) {
	var a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
			mainList.shopGoods[i] = a;
	} else {
		alert('Вы неправильно ввели данные, повторите попытку!');
	}
	i++;
}
*/
/* 3-й способ задания цикла
var i = 0;
do {
	var a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
			mainList.shopGoods[i] = a;
	} else {
		alert('Вы неправильно ввели данные, повторите попытку!');
	}
	i++;
}
while (i < 5) 

*/

function workTime(time) {
if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time < 20) {
		   console.log('Время работать!');
		   } else if(time < 24) {
			   console.log('Уже слишком поздно!');
		   } else {
	console.log('В сутках только 24 часа');
}
	
}

workTime(18);


function showDiscount(discount) {
	if (discount) {
	console.log(price = price*0.8);
} else { console.log(price)};
mainList.discount = discount;	   
}

showDiscount(true); 


console.log (mainList);

function dayBudget(){
	
	alert ("Ваш бюджет на день " + budget/30 + " рублей");
}
dayBudget();