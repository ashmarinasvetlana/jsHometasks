function calc(){
	

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;
	totalValue.innerHTML = 0;
//Анимация итоговой суммы 
	
function animateTotalValue (sum){
let i = 0;
	
(function(){
if( i <= total){
setTimeout(arguments.callee,5);
totalValue.innerHTML = i;
i = i + 500;
}else{
totalValue.innerHTML = sum;
}
})();
}

	persons.addEventListener('input', function () {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			animateTotalValue(total);
		}
	})

	restDays.addEventListener('input', function () {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0' ) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			animateTotalValue(total);
		}
	});


	
place.addEventListener('change', function(){
	if (restDays.value == '' || persons.value == ''|| restDays.value == '0' || persons.value == '0') {
		totalValue.innerHTML = 0;
		
	} else {
		let a = total,
		b = a * this.options[this.selectedIndex].value;
		totalValue.innerHTML = b;
		animateTotalValue(b);
	
	}
}); 
	

		
//Ограничение на ввод символов
	
document.getElementsByTagName('input')[0].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);

  
      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }
document.getElementsByTagName('input')[1].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);


      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }
    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) 
      }

      return null; 
    }	

}

	
module.exports = calc;