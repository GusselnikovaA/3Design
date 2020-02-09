// Валидация формы
$(document).ready(function () {
  $('#contacts-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      },
      useremail: {
        required: true,
        email: true
      }
    }
    ,
    messages: {
      username: {
        required: "",
        minlength: jQuery.validator.format(""),
        maxlength: jQuery.validator.format("")
      },
      userphone: "Введите корректные данные",
      useremail: {
        required: "Введите корректный email",
        email: "Введите корректный email"
      }
    }
  }),

  // Маска для телфона
  $('.phone').mask('+7 (999) 999-99-99');
});