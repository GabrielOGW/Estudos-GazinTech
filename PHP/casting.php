<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $valor = 10;
  $valor2 = (float) $valor;
  $valor3 = (string) $valor2;
  $valor4 = (bool) $valor3;

  echo $valor . ' ' . gettype($valor);
  echo "<br/>";
  echo $valor2 . ' ' . gettype($valor2);
  echo "<br/>";
  echo $valor3 . ' ' . gettype($valor3);
  echo "<br/>";
  echo $valor4 . ' ' . gettype($valor4);
  ?>
</body>

</html>