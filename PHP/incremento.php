<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $num1 = 5;

  echo 'pre-incremento <br/>';
  echo 'valor $num1: ' . $num1 . '<br/>';
  echo 'valor $num1 após incremento: ' . ++$num1; //  pre incremento

  echo '<hr/>';

  $num1 = 5;

  echo 'pos-incremento <br/>';
  echo 'valor $num1: ' . $num1 . ' <br/>';
  echo 'valor $num1 após incremento: ' . $num1++; //  pos incremento
  echo '<br/>o incremento da variavel $num1 foi feito após a impressão, então, foi incrementado o valor após mostra-lo.';
  echo '<br/>valor $num1 atualizado: ' . $num1;

  echo '<hr/>';

  $num2 = 5;

  echo 'pre-decremento <br/>';
  echo 'valor $num2: ' . $num2 . '<br/>';
  echo 'valor $num2 após decremento: ' . --$num2; //  pre decremento

  echo '<hr/>';

  $num2 = 5;

  echo 'pos-decremento <br/>';
  echo 'valor $num2: ' . $num2 . '<br/>';
  echo 'valor $num2 após decremento: ' . $num2--; //  pos decremento
  echo '<br/>o decremento da variavel $num1 foi feito após a impressão, então, foi incrementado o valor após mostra-lo.';
  echo '<br/>valor $num2 atualizado: ' . $num2;
  ?>
</body>

</html>