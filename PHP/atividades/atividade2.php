<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $salario1 = 5400;
  $salario2 = 3890;
  $salario3 = 3510.65;
  $salario4 = 2640;
  $salario5 = 1800;

  function calcAliquota($salario){
    $aliquota = 0;
    switch ($salario) {
      case $salario <= 1903.98:
        return $aliquota = 0;
        break;

      case $salario >= 1903.99 && $salario <= 2826.65:
        return $aliquota = 7.5;
        break;


      case $salario >= 2826.66 && $salario <= 3751.05:
        return $aliquota = 15;
        break;

      case $salario >= 3751.06 && $salario <= 4664.68:
        return $aliquota = 22.5;
        break;

      case $salario >= 4664.69:
        return $aliquota = 27.5;
        break;

      default:
        return 'valor indevido';
        break;
    }

    return $aliquota;
  }


  echo "Com o salário de " . $salario1 . "o valor de aliquota é: " . calcAliquota($salario1) . "%<br/>";
  echo "Com o salário de " . $salario2 . "o valor de aliquota é: " . calcAliquota($salario2) . "%<br/>";
  echo "Com o salário de " . $salario3 . "o valor de aliquota é: " . calcAliquota($salario3) . "%<br/>";
  echo "Com o salário de " . $salario4 . "o valor de aliquota é: " . calcAliquota($salario4) . "%<br/>";
  echo "Com o salário de " . $salario5 . "o valor de aliquota é: " . calcAliquota($salario5) . "%<br/>";
  ?>
</body>

</html>