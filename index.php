<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="syncajax.js"></script>
    <script>
      $(document).ready(() => {
        $.syncAjax.callback = () => {
          console.log("All ajax requests completed!");
        }

        $.syncAjax({
          type: "get",
          url: "/ajax.php",
          success: (resp) => {
            console.log("I'm done I");
          }
        });

        $.syncAjax({
          type: "get",
          url: "/ajax.php",
          success: (resp) => {
            console.log("I'm done II");
          }
        });

        $.syncAjax({
          type: "get",
          url: "/ajax.php",
          success: (resp) => {
            console.log("I'm done III");
          }
        });
      });
    </script>
  </body>
</html>
