<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $user = 'Gabriel';

  function boasVindas($nome){
    echo 'Olá ' . $nome . ', seja bem vindo!<br/>';
  }

  boasVindas($user);


  function calcArea($largura, $comprimento){
    $area = $largura * $comprimento;
    return  $area;
  }

  echo 'Area: ' . calcArea(8, 14);
  echo '<br/>Area: ' . calcArea(9, 6);
  echo '<br/>Area: ' . calcArea(12, 10);
  echo '<br/>Area: ' . calcArea(17, 19);

  ?>
</body>

</html>