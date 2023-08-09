function convidados(...nomes) {
  console.log("Seja bem vindo todos convidados");
  console.log(nomes);
}

convidados("Matheus", "Maria", "Carlos");

function sorteador(...numeros) {
  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log(numeros[numeroGerado]);
}

sorteador(1, 3, 5, 12, 42, 43, 90, 55, 66, 24);
