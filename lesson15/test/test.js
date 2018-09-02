/*function sayName(name) {
	let message = "My name is" + name
	return message
}
let arr = [5, -3, 6, -5, 0, -7, 8,9];
let result = arr.reduce(function(sum,elem){
	return sum + elem;
})
let assert = require('chai').assert;

describe("sayName", function(){
	it("Получаем фразу с новым именем", function(){
		assert.typeOf(sayName("Svetlana"), 'string')
	});
});

describe("arr", function(){
	it("Получаем сумму чисел массива", function(){
		assert.equal(result, 13);
	});
});
*/
// Функция sum должна возвращать тип данных true. Проверить её на это.
let assert = require('chai').assert;

function sum(a, b) {
	return a + b > 10;
};

describe("sum", function(){
	it("Проверяем результат на тип данных", function(){
		assert.isFalse(sum(2,2), 'Верно или нет?');

	});
});


// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe("arr", function(){
	it("Получаем результат переменной", function(){
		assert.equal(num, 5);
	});
});
// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arrAnother = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

describe("each", function(){
	it("Проверить на тип данных", function(){
		assert.typeOf((each(arrAnother, myFunc)), 'array');
	});
	it("Проверяем на соответствие ожидаемому результату", function(){
		assert.deepEqual((each(arrAnother, myFunc)), [8, 7, 6, 5, 4]);
	});
	it("Проверяем свойство length", function(){
		assert.lengthOf((each(arrAnother, myFunc)), 5);
	});
});

console.log(each(arrAnother, myFunc));