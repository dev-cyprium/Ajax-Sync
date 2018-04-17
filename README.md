# SyncAjax jQuery plugin

## About

SyncAjax is an experimental, simple and lightweight library that allows sending several ajax requests
and wait for every one.

## API

`$.syncAjax` is an alias method to `$.ajax`, so it takes the same arguments as the ajax method.

It works by injecting it's own context into the success callback and that way it's able to track down how many ajax requests has been completed.

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
