let stylesBtn = document.querySelector('.button-styles'),
	stylesBlock = document.querySelectorAll('.styles-2');
stylesBtn.addEventListener('click', () => {
	for (i = 0; i < stylesBlock.length; i++) {
		stylesBlock[i].style.display = 'flex';

	}
	stylesBtn.style.display = 'none';
});
