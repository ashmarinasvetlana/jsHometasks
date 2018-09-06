let slideIndex = 1,
    slides = document.getElementsByClassName('main-slider-item');
   
showSlides(slideIndex);

function showSlides(index){
  if (index > slides.length){
    slideIndex = 1;
  };
  if (index < 1){
    slideIndex = slides.length;
  };
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  };
 
  slides[slideIndex - 1].style.display = 'flex';
  
 
};

function plusSlides(index) {
  showSlides(slideIndex += index);
	
};

	let slideInterval = setInterval(() => {
		plusSlides(1);
	}, 5000);

function currentSlide(index){
  showSlides(slideIndex = index);
};
