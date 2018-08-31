function slider(){
	
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	//функция показа слайда 

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		//скрываем ненужные слайды

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};



		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	};



	function plusSlides(n) {
		showSlides(slideIndex += n);

	};

	let slideInterval = setInterval(() => {
		plusSlides(1);
	}, 3000);


	function currentSlide(n) {
		showSlides(slideIndex = n);
	};

	//слайд назад

	prev.addEventListener('click', function () {
		plusSlides(-1);
		clearInterval(slideInterval);
	});
	//слайд вперед

	next.addEventListener('click', function () {
		plusSlides(1);
		clearInterval(slideInterval);
	
	});

	//Нахождение точек

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
				clearInterval(slideInterval);
			}
		}
	});

}

module.exports = slider;