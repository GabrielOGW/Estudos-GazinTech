<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $nome = "Gabriel Ogassawara de Souza";
  $idade = 22;
  $peso = 79.30;
  $estudante = true;
  ?>

  <h3>Perfil:</h3>
  <br>
  <p>Nome: <?= $nome ?></p>
  <p>Idade: <?= $idade ?></p>
  <p>Peso: <?= $peso ?></p>
  <p>Estudante?: <?= $estudante ?></p>
</body>

</html>