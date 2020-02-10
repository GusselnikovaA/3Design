$(document).ready(function () {
  // Валидация формы
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
    },
    // Отправка формы
    submitHandler: function (e) {
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $('#contacts-form').serialize(),
        success: function (data) {
          $("input").val("");
        }
      });
    }
  }),

  // Маска для телфона
  $('.phone').mask('+7 (999) 999-99-99');
});