var budget = prompt("Ваш бюджет на месяц?");
var shopName =  prompt("Введите имя для вашего магазина");
var time = 19;

var employers = [
	{
	name: "Svetlana",
	age: 29,
	position: "Director"
},
	{name: "Ivan",
	age: 29,
	position: "DeputyDirector"}
]


var mainList = {
	budget,
	shopName,
	shopGoods: [],
	employers,
	isOpen: true
	
}


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

if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time < 20) {
		   console.log('Время работать!');
		   } else if(time < 24) {
			   console.log('Уже слишком поздно!');
		   } else {
	console.log('В сутках только 24 часа');
};
		   
console.log (mainList);

alert ("Ваш бюджет на день " + budget/30 + " рублей");