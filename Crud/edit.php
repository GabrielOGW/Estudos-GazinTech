<?php
require 'conexao.php';

$id = "";
$nome = "";
$email = "";
$data_nascimento = "";
$idade = "";
$cargo = "";

$errorMessage = "";
$successMessage = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  if (!isset($_GET["id"])) {
    header("location: ./Estudos-GazinTech/Crud/index.php");
    exit;
  }
  $id = $_GET["id"];

  $sql = "SELECT * FROM pessoa WHERE id=$id";
  $resultado = $conexao->query($sql);
  $row = $resultado->fetch_assoc();

  if (!$row) {
    header("location: ./Estudos-GazinTech/Crud/index.php");
    exit;
  }

  $nome = $row["nome"];
  $email = $row["email"];
  $data_nascimento = $row["data_nascimento"];
  $idade = $row["idade"];
  $cargo = $row["cargo"];
} else {
  $id = $_POST["id"];
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $data_nascimento = $_POST["data_nascimento"];
  $idade = $_POST["idade"];
  $cargo = $_POST["cargo"];

  do {
    if (empty($nome) || empty($email) || empty($data_nascimento) || empty($idade) || empty($cargo)) {
      $errorMessage = "Todos os campos devem estar preenchidos";
      break;
    }

    $sql = "UPDATE pessoa " .
      " SET nome = '$nome', email = '$email', data_nascimento = '$data_nascimento', idade = '$idade', cargo = '$cargo' " .
      "WHERE id = $id";
    $resultado = $conexao->query($sql);

    if (!$resultado) {
      $errorMessage = "Query inválida: " . $conexao->error;
      break;
    }

    $successMessage = "Pessoa editada com sucesso!";

    header("location: /Estudos-GazinTech/Crud/index.php");
    exit;
  } while (false);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Edição de Pessoa</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="style.css">

  <script>
    function calcularIdade() {
      var dataNascimento = document.getElementById("data_nascimento").value;
      var hoje = new Date();
      var nascimento = new Date(dataNascimento);
      var idade = hoje.getFullYear() - nascimento.getFullYear();
      var mes = hoje.getMonth() - nascimento.getMonth();

      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
      }

      document.getElementById("idade").value = idade;
    }
  </script>
</head>

<body>
  <div class="container my-5">
    <h2>Editar Pessoa</h2>
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
    <form method="post">
      <input type="hidden" name="id" value="<?php echo $id ?>">
      <div class="row mb-3">
        <label class="col-sm-3" col-form-label>Nome</label>
        <div class="col-sm-6">
          <input type="text" name="nome" class="form-control" value="<?php echo $nome ?>">
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3" col-form-label>Email</label>
        <div class="col-sm-6">
          <input type="email" name="email" class="form-control" value="<?php echo $email ?>">
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3" col-form-label>Data de Nascimento</label>
        <div class="col-sm-6">
          <input type="date" name="data_nascimento" id="data_nascimento" class="form-control" value="<?php echo $data_nascimento ?>" onchange="calcularIdade()">
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3" col-form-label>Idade</label>
        <div class="col-sm-6">
          <input type="number" name="idade" id="idade" class="form-control" value="<?php echo $idade ?>" readonly>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3" col-form-label>Cargo</label>
        <div class="col-sm-6">
          <input type="text" name="cargo" class="form-control" value="<?php echo $cargo ?>">
        </div>
      </div>

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
          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
        <div class="col-sm-3 d-grid">
          <a href="/Estudos-GazinTech/Crud/index.php" class="btn btn-outline-primary" role="button">Cancelar</a>
        </div>

      </div>
    </form>
  </div>
</body>

</html>