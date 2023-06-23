<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  if (2 == 2) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if ("2" === 2) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if ('x' != 'y') {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if (2 > 16) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if (12 < 6) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if (5 >= 5) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };
  ?>
</body>

</html>