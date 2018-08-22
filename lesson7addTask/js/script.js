/* 
let btn = document.querySelector('.btn');

function myAnimation() {
	let elem = document.querySelector('.animate_element'),
		pos = 0,
		id = setInterval(frame, 20);
	
	function frame() {
		if(pos == 100) {
			clearInterval(id);
		}else {
			pos++;
			elem.style.left = pos + '%';
		}
	}
}


btn.addEventListener('click', myAnimation);
*/
let btn = document.querySelector('.btn'),
elem = document.querySelector('.animate_element');
 btn.onclick = function() {
      animate(function(timePassed) {
        elem.style.left = timePassed/3 + 'px';
      }, 5000);
    };

    // Рисует функция draw
    // Продолжительность анимации duration
    function animate(draw, duration) {
      var start = performance.now();

      requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        console.log(time, start)
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }

      });
    }