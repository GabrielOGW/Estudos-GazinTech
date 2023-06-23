<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $frase = "essa seguinte frase será manipulada atraves das funções nativas do PHP!";

  echo strtolower($frase);
  echo '<br/>';
  echo strtoupper($frase);
  echo '<br/>';
  echo ucfirst($frase);
  echo '<br/>';
  echo strlen($frase);
  echo '<br/>';
  echo str_replace('PHP', 'JS', $frase);
  echo '<br/>';
  echo substr($frase, 23, 45);
  ?>
</body>

</html>