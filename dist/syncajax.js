"use strict";

(function ($) {
  $.syncAjax = function (options) {
    var userSuccess = options.success;

    var extendedSuccess = function extendedSuccess(resp) {
      userSuccess(resp);
      sync($.syncAjax.storage);
    };

    var sync = function sync() {
      var counter = 0;
      $.syncAjax.storage.forEach(function (ajax) {
        if (ajax.readyState == 4) counter++;
      });

      if (counter == $.syncAjax.storage.length) {
        $.syncAjax.callback();
      }
    };

    options.success = extendedSuccess;
    $.syncAjax.storage.push($.ajax(options));
  };
  $.syncAjax.storage = [];
  $.syncAjax.callback = function () {};
})(jQuery);
