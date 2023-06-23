<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $peso = 75;
  $idade = 22;
  $isAllowed = false;

  if ($peso >= 50 && $idade >= 16 && $idade <= 69) {
    $isAllowed = true;
  }
  ?>

  <h3>Solicitação de Doação de sangue</h3>

  <p>Situação:
    <?=
    $isAllowed ? "Atende aos requisitos" : "Não atende aos requisitos";
    ?>
  </p>
</body>

</html>