//$(function(){});
$(document).ready(function () {

	$('a[href = "#sheldure"], .main_btna, .main_btn').on('click', function(){
		console.log('клик')
		$('.overlay').show();
		$('.modal').show();
		$('.overlay').animate({opacity:'1.5'}, 2000);
		$('.modal').animate({'margin-top': '10rem'}, 2000);
		
	});
	
	
	$('.close').on('click', function(){
		
		$('.overlay').animate({'opacity':'0', 'z-index': '0'}, 2000);
		$('.modal').animate({'margin-top': '-50rem'}, 2000);
	});
});
