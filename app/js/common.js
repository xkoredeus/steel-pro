$('.hot__cnt').owlCarousel({
    nav: true,
    dots: false,
    items: 3,
    margin: 20,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 1
      },
      480 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1040 : {
          items: 3
      }
    }
});
$('.cert__cnt').owlCarousel({
    nav: true,
    dots: false,
    items: 6,
    margin: 20,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 1
      },
      480 : {
          items: 2
      },
      768 : {
          items: 3
      },
      1040 : {
          items: 4
      },
      1200 : {
          items: 6
      }
    }
});
$('.videos__cnt').owlCarousel({
    nav: true,
    dots: false,
    margin: 20,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 1
      },
      480 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1040 : {
          items: 3
      }
    }
});
$('.team__cnt').owlCarousel({
    nav: true,
    dots: false,
    margin: 20,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 1
      },
      480 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1040 : {
          items: 3
      }
    }
});
$('.contacts__way-slider').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    dots: false,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
});
$('.service_sub__slider').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    dots: false,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
});
$('.facility__slider').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    dots: false,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"]
});
$('.success-top').owlCarousel({
    loop: false,
    dots: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    responsive : {
      0   : {
          items: 1
      },
      380 : {
          items: 2
      },
      480 : {
          items:3
      },
      768 : {
          items: 4
      },
      1040 : {
          items: 5
      }
    }
});

$('.success-bot .success-bot__item:nth-child(1)').addClass('active');
$('.success-bot .success-bot__item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
});
// tabs 
$(document).ready(function () {
  $(".tabs__content-item").hide();
  $(".tabs__container div.tabs__content-item.active-tab").show();
  $('ul.tabs__list > li').click(function () {
    if (!($(this).hasClass('active'))) {
      var thisLi = $(this);
      var numLi = thisLi.index();
      thisLi.addClass('active').siblings().removeClass('active');
      thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
    }
  });
});
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

if ( $(window).width() < 768 ) {
  $('.works__cnt').addClass('owl-carousel');
  $('.works__cnt').owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
        responsive : {
          0   : {
              items: 1
          },
          380 : {
              items: 1
          },
          480 : {
              items: 1
          },
          768 : {
              items: 2
          }
        }
    });
  $('.clients__cnt').addClass('owl-carousel');
  $('.clients__cnt').owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
        responsive : {
          0   : {
              items: 1
          },
          380 : {
              items: 1
          },
          480 : {
              items: 2
          },
          768 : {
              items: 3
          }
        }
    });
  $('.gallery__cnt').addClass('owl-carousel');
  $('.gallery__cnt').owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
        responsive : {
          0   : {
              items: 1
          },
          380 : {
              items: 1
          },
          480 : {
              items: 1
          },
          600 : {
              items: 2
          },
          768 : {
              items: 3
          }
        }
    });
};