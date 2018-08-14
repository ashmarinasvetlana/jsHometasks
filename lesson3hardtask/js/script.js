str = "урок-3-был слишком легким";
console.log(str[0].toUpperCase() + str.substring(1));
str = str.replace(/-/g, ' ');
console.log(str);
alert(str.substring(23, -2) + 'о');

arr = [20, 33, 1, 'Человек', 2, 3];


for (var i = 0; i < arr.length; i++)

{
	if ((typeof (arr[i])) === 'number') {
		arr[i] = Math.pow(arr[i], 3);



	}


}

console.log(arr);
var totalSum = 0;
for (var i = 0; i < arr.length; i++) {
	if ((typeof (arr[i])) === 'number')
		totalSum += arr[i];
}
console.log(totalSum);
console.log(Math.sqrt(totalSum));



function dataCheck() {

	for (var i = 0; i < 1; i++) {
		var dataUser = prompt("Введите данные");
		if (typeof (dataUser) === 'string' && typeof(dataUser) != null && dataUser != "" && dataUser.length < 50) {
			console.log(dataUser.trim());
			
		} else if (typeof (dataUser) === 'string' && typeof(dataUser) != null && dataUser != "" && (dataUser.trim()).length > 50) {
			
			dataUser = dataUser.substr(1,50);
			console.log(dataUser.trim() + "...");

		} else {
			alert("Вы неправильно ввели данные, повторите попытку!")
			i--;

		}
	}
}
dataCheck();
