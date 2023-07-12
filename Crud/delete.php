<?php
require 'conexao.php';

$errorMessage = "";
$successMessage = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if (!isset($_GET["id"])) {
    header("location: ./Estudos-GazinTech/Crud/index.php");
    exit;
  }
  $id = $_GET["id"];

  // Verifica se o formulário de confirmação foi enviado
  if (isset($_GET['confirm']) && $_GET['confirm'] === 'sim') {
    do {
      $sql = "DELETE FROM pessoa WHERE id = $id";
      $resultado = $conexao->query($sql);

      if (!$resultado) {
        $errorMessage = "Query inválida: " . $conexao->error;
        break;
      }

      $successMessage = "Pessoa excluída com sucesso!";

      header("location: /Estudos-GazinTech/Crud/index.php");
      exit;
    } while (false);
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Exclusão de Pessoa</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container my-5">
    <h2>Excluir Pessoa</h2>
    <div class="delete-message">
      <p>Tem certeza que deseja excluir esta pessoa? Após confirmar essa ação, não é possível revertê-la.</p>
      <?php
      if (!empty($errorMessage)) {
        echo "
      <div class='alert alert-warning alert-dismissible fade show' role='alert'>
      <strong>$errorMessage</strong>
      <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Fechar'></button>
      </div>
      ";
      }
      ?>
      <?php
      if (!empty($successMessage)) {
        echo "
      <div class='row mb-3'>
      <div class='offset-sm-3 col-sm-6'>
      <div class='alert alert-success alert-dismissible fade show' role='alert'>
      <strong>$successMessage</strong>
      <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Fechar'></button>
      </div>
      </div>
      </div>
      ";
      }
      ?>
      <div class="row mb-3">
        <div class="offset-sm-3 col-sm-3 d-grid">
          <a href="?id=<?php echo $id; ?>&confirm=sim" class="btn btn-danger">Excluir</a>
        </div>
        <div class="col-sm-3 d-grid">
          <a href="/Estudos-GazinTech/Crud/index.php" class="btn btn-outline-primary" role="button">Cancelar</a>
        </div>
      </div>
    </div>
  </div>
</body>

</html>