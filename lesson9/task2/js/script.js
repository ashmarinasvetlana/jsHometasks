	
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