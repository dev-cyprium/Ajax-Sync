# SyncAjax jQuery plugin

## About

SyncAjax is an experimental, simple and lightweight library that allows sending several ajax requests
and wait for every one.

## API


## Example usage
### JavaScript
To use the plugin make several ajax request using the ajax implementation of SyncAjax:
```js
$(document).ready(function() {
  $.synxAjax.callback = function() {
    console.log("All ajax requests completed");
  }

  $.syncAjax({
    type: "get",
    url: "/ajax.php",
    success: function(resp) {
      console.log("Ajax 1 completed!");
    }
  });

  $.syncAjax({
    type: "get",
    url: "/ajax.php",
    success: function(resp) {
      console.log("Ajax 2 completed!");
    }
  });

  $.syncAjax({
    type: "get",
    url: "/ajax.php",
    success: function(resp) {
      console.log("Ajax 3 completed!");
    }
  });
});
```
