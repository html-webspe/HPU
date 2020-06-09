//Adaptive functions
//====================  Mobile Menu ========================//
$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__wrap').toggleClass('active');
});
$('.main-menu__item').click(function(event) {
	$(this).toggleClass('active');
});


$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header-menu');
		var menuBody=$('.menu__body');
		var headerSearch=$('.header__search');

	if(w<515){
		headerSearch.prependTo(menuBody).before($('.mobile__bottom'));
	}else{headerSearch.prependTo($('.header__body'));}
	
	if(w<986){
		if(!headerMenu.hasClass('done')){
			headerMenu.addClass('done');	
			menuBody.prepend('<div class="mobile__bottom" style="text-align: right;"><a href="#callback" class="mobile__btn btn pl">Связаться с нами</a></div>');
			$('.social').clone().appendTo(menuBody);
		}
	}else{
		if(headerMenu.hasClass('done')){
			headerMenu.removeClass('done');	
			$('.menu__body .mobile__btn, .menu__body .social').remove();
		}
	}

	if(w>550 && w<986){
		$('.main__nav').addClass('main__slider');
		$('.main__navitem').css({'margin-right':'15px','margin-left':'15px'});
	}else {
		$('.main__nav').removeClass('main__slider');
		$('.main__navitem').css({'margin-right':'0','margin-left':'0'});
	}


}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();
// получение фона
//var section_bg = $('.delivery-head').css("background-image").replace(/url\((?:\"|\')?(.+)(?:\"|\')?\)/, '$1');


var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
if (mobile) { 
  	let img = 'img/delivery/delivery-image.png';
		$('.delivery__img').prepend('<img src="'+img+'" alt="" />');
}else{$('.about-delivery__img img').remove();}
  
$('.menu__link').click(function(){
	$('.icon-menu, .menu__wrap').removeClass('active');
});
			
  