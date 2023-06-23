<?php

session_start();

$titulo = str_replace('#', '-', $_POST['titulo']);
$categoria = str_replace('#', '-', $_POST['categoria']);
$descricao = str_replace('#', '-', $_POST['descricao']);

$chamado = $_SESSION['id'] . '#' .  $titulo . "#" . $categoria . "#" . $descricao . PHP_EOL;

$arquivo = fopen('chamados.txt', 'a');

fwrite($arquivo, $chamado);

fclose($arquivo);

header('Location: consultar_chamado.php');
