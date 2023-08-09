let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

console.log(numeros);

let pessoa = {
  nome: "Matheus",
  idade: 32,
  cargo: "RH",
};

let novaPessoa = {
  ...pessoa,
  status: true,
  cidade: "maringá",
};

console.log(novaPessoa);

function novoUsuario(info) {
  let dados = {
    ...info,
    status: true,
    inicio: "10/10/2023",
    codigo: 213,
  };

  console.log(dados);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "Dev" });
