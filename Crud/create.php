<?php
require 'conexao.php';

$nome = "";
$email = "";
$data_nascimento = "";
$idade = "";
$cargo = "";

$errorMessage = "";
$successMessage = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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

    $sql = "INSERT INTO pessoa (nome, email, data_nascimento, idade, cargo) VALUES ('$nome', '$email', '$data_nascimento', '$idade', '$cargo')";
    $resultado = $conexao->query($sql);

    if (!$resultado) {
      $errorMessage = "Query inválida: " . $conexao->error;
      break;
    }

    $nome = "";
    $email = "";
    $data_nascimento = "";
    $idade = "";
    $cargo = "";

    $successMessage = "Pessoa cadastrada com sucesso!";

    header("location: /Estudos-GazinTech/Crud/index.php");
    exit;
  } while (false);
}

function calcularIdade($data_nascimento)
{
  $data_atual = new DateTime();
  $data_nascimento = new DateTime($data_nascimento);
  $intervalo = $data_atual->diff($data_nascimento);
  return $intervalo->y;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Cadastro de Pessoa</title>
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
    <h2>Nova Pessoa</h2>
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