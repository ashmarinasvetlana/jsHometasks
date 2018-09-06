let targetParent = document.querySelector('body'),
	designModal = document.querySelector('.popup-design'),
	consultationModal = document.querySelector('.popup-consultation'),
	giftModal = document.querySelector('.popup-gift'),
	close = document.querySelector('.popup-close'),
	gift = document.querySelector('.fixed-gift');
	


targetParent.addEventListener('click', () => {
	let target = event.target;

	if (target.classList.contains('button-design')) {
		designModal.style.display = "flex";

		document.body.style.overflow = 'hidden';
	}
	if (target.classList.contains('button-consultation')) {
		consultationModal.style.display = "flex";

		document.body.style.overflow = 'hidden';
	}
	if (target.classList.contains('fixed-gift')) {
		giftModal.style.display = "flex";
		gift.style.display = "none";

		document.body.style.overflow = 'hidden';

	}
	if (target.className == 'popup-close' || target.className == 'popup-content') {
		document.body.style.overflow = '',
		designModal.style.display = "none",
		consultationModal.style.display = "none",
		giftModal.style.display = "none";
	}

});
