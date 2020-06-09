//====================  ImageBg ========================//
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();
//====================  // ImageBg ========================//
//====================  InputFile ========================//
(function () {
  'use strict';
  $('.input-file').each(function () {
    var $input = $(this),
      $label = $input.next('.js-labelFile'),
      labelVal = $label.html();
    $input.on('change', function (element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });
})();
//====================  // InputFile ========================//

//==================== loginIn ========================//
$('.reg').click(function () {
  $('.box-login').hide();
  $('.box-reg').css('display', 'flex');
});

$('.login').click(function () {
  $('.box-login').show();
  $('.box-reg').hide();
});
//==================== loginIn ========================//

//==================== Tabs ========================//
$('body').on('click', '.tab__navitem', function (event) {
  var eq = $(this).index();
  if (!$(this).hasClass('active')) {
    $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
  }
});
//==================== //Tabs ========================//

//==================== MainTitle ========================//
let g = $('.main__navitem.active').text();
$('.main-head__title').text(g);

$('.tab__navitem').click(function () {
  $('.main-head__title').text($(this).text());
});
//==================== //MainTitle ========================//


//====================  Slider ========================//
$('.main__slider').slick({
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  prevArrow: '<button type="button" class="slick-prev slick-btn">1</button>',
  nextArrow: '<button type="button" class="slick-next slick-btn">2</button>',
  arrows: true
});
//====================  //Slider ========================//

//====================  TownTrig ========================//

$('.current-town').click(function () {
  $('.current-town__list').slideToggle();
});
$('.current-town__list li').click(function () {
  $('.current-town').text($(this).text());
  $('.current-town__list').slideToggle();
});
//====================  TownTrig ========================//

//====================  StoreCart ========================//

$('.main-card .card-price__add').click(function () {
  title = $(this).parent().parent().find('.main-card__title').text();
  price = $(this).parent().parent().find('.card-price__price').text();
  $('.order-title').text(title);
  $('.order-price').text(price);

  $('.store-cart__order').css('opacity', '1');
  $('.store-cart__bg, .store-cart__txt').fadeOut();
  $('.store-cart__compl').css('display', 'flex');

  $(this).parent().parent().css('opacity', '0.3');
});

$('.order-btn').click(function () {
  $('.store-cart__order').css('opacity', '0');
  $('.store-cart__bg, .store-cart__txt').fadeIn();
  $('.store-cart__compl').css('display', 'none');
});

$('.order-rem').click(function () {
  inc(this.parentNode, -1);
  orderCount();
});
$('.order-add').click(function () {
  inc(this.parentNode, 1);
  orderCount();
});
function inc(Obj, Val) {
  Obj = $(Obj).closest('.store-cart__order').find('.order-count');
  var val = parseInt(Obj.text());
  if (val == 0 && Val == -1) {
    return;
  };
  Obj.text(val + Val);
};

function orderCount() {
  let orderCount = $('.order-count').text();
  orderPrice = $('.order-price').text();
  orderTotal = parseFloat(orderCount) * parseFloat(orderPrice);
  $('.order-total__count').text(orderTotal);
}
//====================  //StoreCart ========================//


$('[data-fancybox="gallery"]').fancybox({});






