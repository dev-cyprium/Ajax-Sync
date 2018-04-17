(function($) {
  $.syncAjax = (options) => {
    var userSuccess = options.success;

    var extendedSuccess = (resp) => {
      userSuccess(resp);
      sync($.syncAjax.storage);
    }

    var sync = function() {
      let counter = 0;
      $.syncAjax.storage.forEach((ajax) => {
        if(ajax.readyState == 4) counter++;
      });

      if(counter == $.syncAjax.storage.length) {
        $.syncAjax.callback();
      }
    }

    options.success = extendedSuccess;
    $.syncAjax.storage.push( $.ajax(options) );
  }
  $.syncAjax.storage = [];
  $.syncAjax.callback = () => {};
}(jQuery));
