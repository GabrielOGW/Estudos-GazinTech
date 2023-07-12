<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cadastros';

$conexao = new mysqli($servername, $username, $password, $dbname);

if ($conexao->connect_error) {
  die("Falha na conexao: " . $conexao->connect_error);
}
