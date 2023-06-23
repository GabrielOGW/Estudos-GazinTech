<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curso PHP</title>
</head>

<body>
  <?php
  $usuario_possui_cartao_loja = true;
  $valor_compra = 305;
  $valor_frete = 50;
  $recebeu_desconto_frete = true;

  if ($usuario_possui_cartao_loja && $valor_compra >= 400) {
    $valor_frete = 0;
  } else if ($usuario_possui_cartao_loja && $valor_compra >= 300) {
    $valor_frete = 10;
  } else if ($usuario_possui_cartao_loja && $valor_compra >= 100) {
    $valor_frete = 25;
  } else {
    $recebeu_desconto_frete = false;
  }
  ?>

  <h3>Detalhes do pedido</h3>

  <p>Possui cartão da loja?
    <?=
    $usuario_possui_cartao_loja ? "sim :)" : "não :(";
    ?>
    <br>
    Valor da compra: <?= $valor_compra ?>
    <br>
    Valor do frete: <?= $valor_frete ?>
    <br>
    Rcebeu desconto no frete?
    <?=
    $recebeu_desconto_frete ? "sim ;)" : "não :( <br /> faça o cartão da loja para aplicar o desconto no frete! ;)";
    ?>
  </p>
</body>

</html>