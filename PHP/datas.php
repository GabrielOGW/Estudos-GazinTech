<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  echo date('d/m/Y H:i');

  echo '<br/>';
  echo date_default_timezone_get();
  echo '<br/>';
  // date_default_timezone_set('America/Sao_Paulo');
  echo date('d/m/Y H:i');
  echo '<br/>';

  $dataInicial = '2023-05-24';
  $dataFinal = '2023-08-29';

  $time_inicial = strtotime($dataInicial);
  $time_final = strtotime($dataFinal);
  echo $dataInicial . ' - ' . $time_inicial;
  echo '<br/>';
  echo $dataFinal . ' - ' . $time_final;
  echo '<br/> A diferença entre a data inicial e final em segundos é: ';
  echo $diferenca_times = $time_final - $time_inicial;
  ?>
</body>

</html>