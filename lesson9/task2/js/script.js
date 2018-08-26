	/*
function showUser(surname, name) {
    
 	let age = document.getElementById('age').value;
	this.surname = surname;
	this.name = name;
    this.value = age;
         alert("Пользователь " + surname + " " + name + ", его возраст " + age);
}


 

let btn = document.getElementById('showUserInfo');
btn.addEventListener('click', () => {
	let Svetlana = new showUser('Ashmarina', 'Svetlana');
})
*/

	let age = document.getElementById('age');
	function showUser(surname, name) {
    
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}



let btn = document.getElementById('showUserInfo');
btn.addEventListener('click', () => {
showUser.call (age,"Светлана", "Ашмарина");
//showUser.apply (age, [Светлана, Ашмарина]);
})
