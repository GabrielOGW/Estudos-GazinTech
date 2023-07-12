<?php
require 'conexao.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Vizualização de Pessoas</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container my-5">
    <h2>Pessoas:</h2>
    <a class="btn btn-primary" href="./create.php" role="button">Cadastrar nova pessoa</a>
    <br>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Data de Nascimento</th>
          <th>Idade</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php

        $sql = "SELECT * FROM pessoa";
        $resultado = $conexao->query($sql);

        if (!$resultado) {
          die("Query invalida: " . $conexao->error);
        }

        while ($row = $resultado->fetch_assoc()) {
          echo "
          <tr>
            <td>$row[nome]</td>
            <td>$row[email]</td>
            <td>$row[data_nascimento]</td>
            <td>$row[idade]</td>
            <td>$row[cargo]</td>
            <td>
              <a class='btn btn-primary btn-sm' href='./edit.php?id=$row[id]'>Editar</a>
              <a class='btn btn-danger btn-sm' href='./delete.php?id=$row[id]'>Excluir</a>
            </td>
        </tr>";
        }
        ?>

      </tbody>
    </table>
  </div>
</body>

</html>