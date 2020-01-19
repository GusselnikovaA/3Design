$(function () {
  let up = $('#up');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      up.addClass('up_flex');
      up.show('slow');
    } else {
      up.hide('slow');
    }
  });

  $('#up,#logo-up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});
