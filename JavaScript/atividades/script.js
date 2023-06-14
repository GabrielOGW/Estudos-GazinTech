var objetos = ["Cadeira", "Impressora", "Garfo"];

function adicionarObjeto() {
  var inputValue = document.getElementById("inputValue").value;

  if (inputValue === "") {
    alert("Informe um valor válido.");
    return;
  }

  if (objetos.includes(inputValue)) {
    alert("Objeto já foi adicionado.");
    return;
  }

  objetos.push(inputValue);
  exibirObjetos();

  document.getElementById("inputValue").value = "";
}

function ordenarObjetos() {
  objetos.sort();
  exibirObjetos();
}

function exibirObjetos() {
  var objectList = document.getElementById("objectList");
  objectList.innerHTML = "";

  objetos.forEach(function (objeto) {
    var li = document.createElement("li");
    li.textContent = objeto;
    objectList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", exibirObjetos);
document.getElementById("btnAdd").addEventListener("click", adicionarObjeto);
document.getElementById("btnSort").addEventListener("click", ordenarObjetos);
