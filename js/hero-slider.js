$(document).ready(function () {
  // СЛАЙДЕР В БЛОКЕ HERO 
  $('.hero-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    fade: true,
    // speed: 1000, 
  });
});