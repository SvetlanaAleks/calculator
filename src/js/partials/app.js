//Some JS
const App = (function () {
   "use strict";
   return {
      validationForm: function () {
         $(".js_input-num").keydown(function (event) {
            // Разрешаем: backspace, delete, tab и escape
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
               // Разрешаем: Ctrl+A
               (event.keyCode == 65 && event.ctrlKey === true) ||
               // Разрешаем: home, end, влево, вправо
               (event.keyCode >= 35 && event.keyCode <= 39)) {
               // Ничего не делаем
               return;
            } else {
               // Убеждаемся, что это цифра, и останавливаем событие keypress
               if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                  event.preventDefault();
               }
            }
         });
      },
      getDataForm: function () {
         $('#js_indicators-form').submit(function (e) {
            const _this = $(this);
            e.preventDefault();
            const valuesArray = _this.serializeArray();
            console.log(valuesArray);

         });
      },
      init: function () {
         App.validationForm();
         App.getDataForm();
      },
   };
})();