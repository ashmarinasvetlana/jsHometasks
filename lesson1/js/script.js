var budget = prompt("Ваш бюджет на месяц?");
var shopName =  prompt("Введите имя для вашего магазина");


var shopGoods = new Array (3);
for (var j = 0, J = shopGoods.length; j < J; j++)
shopGoods [j] = prompt ('Какой тип товара будем продавать', '');

 
console.log (shopGoods);

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
	shopGoods,
	employers,
	isOpen: true
	
};

console.log (mainList);

alert ("Ваш бюджет на день " + budget/30 + " рублей");