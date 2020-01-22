$(document).ready(function () {
  // СЛАЙДЕР В БЛОКЕ FOLLOW
  $('.follow-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
    responsive: [{
      breakpoint: 1151,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 951,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 551,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });
});