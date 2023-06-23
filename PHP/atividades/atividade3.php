<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php

  $mega = array();

  while (count($mega) < 6) {
    $numero = rand(1, 60);
    if (!in_array($numero, $mega)) {
      $mega[] = $numero;
    }
  }

  sort($mega);
  echo "Números sorteados na Mega Sena: " . implode(" ", $mega);

  ?>
</body>

</html>