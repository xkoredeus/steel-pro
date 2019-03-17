
// $('.team__cnt').owlCarousel({
 //      nav: false,
 //      dots: true,
 //      items: 5,
 //      loop: true,
 //      margin: 20,
 //      center:true,
 //      autoWidth:true,
 //      mouseDrag: false,
 //      responsive : {
 //        0   : {
 //            items: 1
 //        },
 //        380 : {
 //            items: 1
 //        },
 //        480 : {
 //            items: 1
 //        },
 //        768 : {
 //            items: 3
 //        },
 //        1040 : {
 //            items: 4
 //        }
 //      }
	// });
	// tabs 
	// $(".tabs__container div.tab-content__item:first-child").addClass('active');
	// $(".main-slider .main-slider__bg-item:first-child").addClass('active');
	//     $('ul.tabs__list > li').click(function () {
	//         if (!($(this).hasClass('active'))) {
	//             var thisLi = $(this);
	//             var numLi = thisLi.index(); 
	//             thisLi.addClass('active').siblings().removeClass('active');
	//             thisLi.parent().next().children('div').removeClass('active').eq(numLi).addClass('active','slow');
	//             thisLi.parent().parent().parent().parent().find('.main-slider__bg').children('.main-slider__bg-item').removeClass('active','slow').eq(numLi).addClass('active','slow');
	//             $('.reviews__cnt_text').owlCarousel('refresh');
	//         }
 //    });
 if ( $(window).width() > 1000 ) {
  $('.header__search-submit').click(function() {
      $('.header__search').toggleClass('active');
      $(this).attr('type','submit');
      $(this).siblings('.header__search-query').slideLeft(300);
      $(this).unbind('submit').submit()
    });
} else {
  $('.header__search-submit').attr('type','submit');
};
$(".header__hamburger").on('click',function() {
    $(this).toggleClass("active");
    $('.main-nav').toggleClass("active");
    $('body').toggleClass("fixed");
});