  
$(document).ready(function(){
  var menuAlert = $('.burger_alert');
  var modalMenu = $('#menu_mobile');
  var closeMenu = $('#burger_close');

  menuAlert.on('click', function(){
    modalMenu.addClass('menu-mobile_active');
  });
  $('.menu-list__item').on('click', function(){
    modalMenu.removeClass('menu-mobile_active');
  });
  closeMenu.on('click', function(){
    modalMenu.removeClass('menu-mobile_active');
  });
});