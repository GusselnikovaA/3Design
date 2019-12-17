$(document).ready(function () {
  // СЛАЙДЕР В БЛОКЕ HERO 
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    speed: 2000
  });
});