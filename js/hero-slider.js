$(document).ready(function () {
  // СЛАЙДЕР В БЛОКЕ HERO 
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    arrows: false,
    fade: true,
    speed: 300,
    cssEase: 'easeInOutBack',
    infinite: false,
    edgeFriction: 1
  });

  $('.hero-slider').on('beforeChange', function(e, slick, current, next){
    if (next === slick.slideCount-1){
       slick.autoPlay = false;
    }
 });
});



