let btnOpen = document.getElementById('open-btn');
let name_value = document.getElementsByClassName('name-value')[0];
let budget_value = document.getElementsByClassName('budget-value')[0];
let goods_value = document.getElementsByClassName('goods-value')[0];
let items_value = document.getElementsByClassName('items-value')[0];
let employers_value = document.getElementsByClassName('employers-value')[0];
let discount_value = document.getElementsByClassName('discount-value')[0];
let isopen_value = document.getElementsByClassName('isopen-value')[0];
let goods_item = document.querySelectorAll('.goods-item');


let btnGoodsConfirm = document.getElementsByTagName('button')[1];
let btnBudgetCount = document.getElementsByTagName('button')[2];
let btnEmployersHire = document.getElementsByTagName('button')[3];

btnBudgetCount.disabled = true;

let choose_item = document.querySelector('.choose-item');
let time_value = document.querySelector('.time-value');
let count_budget_value = document.querySelector('.count-budget-value');
let hire_employers_item = document.querySelectorAll('.hire-employers-item');



var budget,
	discount,
	shopName;


var mainList = {
	budget: budget,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
};



btnOpen.addEventListener('click', () => {
	budget = prompt("Ваш бюджет на месяц?", '');
	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет на месяц?", '');
	}

	budget_value.textContent = budget;
	name_value.textContent = prompt("Введите имя для вашего магазина", '').toUpperCase();

	btnBudgetCount.disabled = false;
});

btnGoodsConfirm.addEventListener('click', () => {
	for (var i = 0; i < goods_item.length; i++) {
		var a = goods_item[i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goods_value.textContent = mainList.shopGoods;
		} else {
			i--;

		}
	}

});

for (let i = 0; i < goods_item.length; i++) {

if (goods_item[i].value == '') {
                   btnGoodsConfirm.disabled = true;     
        }


goods_item[i].addEventListener('input', ()=> {
							   btnGoodsConfirm.disabled = false;  				  
											  });
}

choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}


});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log('Такого просто не может быть');
		mainList.open = false;
		
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		isopen_value.style.background = 'url(./img/open.png) no-repeat center';
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		mainList.open = false;
		isopen_value.style.background = 'url(./img/closed.png) no-repeat center';
	} else {
		console.log('В сутках только 24 часа');
		mainList.open = false;
		isopen_value.style.background = 'url(./img/closed.png) no-repeat center';
	}
	
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time > 10 && time < 12) {
		discount = true;
		discount_value.style.background = 'url(./img/discount.png) center no-repeat';
	} else {
		discount = false;
discount_value.style.background = 'none';
	}
});

btnBudgetCount.addEventListener('click', () => {
	count_budget_value.value = budget / 30;
	btnBudgetCount.disabled = true;

});





btnEmployersHire.addEventListener('click', () => {
	employers_value.textContent = '';

	for (let i = 0; i < hire_employers_item.length; i++) {
		var emploeeName = hire_employers_item[i].value;

		if ((typeof (emploeeName)) === 'string' && (typeof (emploeeName)) != null && emploeeName != '' && emploeeName.length < 50) {
			console.log('Все верно!');
			mainList.employers[i] = emploeeName;
			employers_value.textContent += mainList.employers[i] + ', ';

		}
	}

});

for (let i = 0; i < hire_employers_item.length; i++) {

if (hire_employers_item[i].value == '') {
                   btnEmployersHire.disabled = true;     
        }


hire_employers_item[i].addEventListener('input', ()=> {
							   btnEmployersHire.disabled = false;  				  
											  });
}
