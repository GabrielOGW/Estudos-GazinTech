<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  if (2 == 3 && 10 > 3) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if ("2" === 2 ||  3 < 10) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if ('x' != 'y' xor 10 > 3) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };

  echo "<br/>";

  if (!('A' == 'B')) {
    echo "verdadeiro";
  } else {
    echo "falso";
  };
  ?>
</body>

</html>