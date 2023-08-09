// // Descontrução de Objeto

// let pessoa = {
//   nome: "Gabriel",
//   sobrenome: "Ogassawara",
//   empresa: "GazinTech",
//   cargo: "Aux. Administrativo",
// };

// // console.log(pessoa.nome);
// // console.log(pessoa.nome);

// let nome = "Já associado";

// const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa;

// console.log(nomePessoa + " " + sobrenome);
// console.log(cargo);
// console.log(empresa);

// Descontrução de Array
let nomes = [
  {
    nome: "Carlos",
    cargo: "FrontEnd",
    idade: 23,
  },
  {
    nome: "Maria",
    cargo: "FrontEnd",
    idade: 34,
  },
  {
    nome: "Jose",
    cargo: "BackEnd",
    idade: 19,
  },
];

// Opção 1:

// let {0:carlos, 1:maria, 2:jose} = nomes;

// console.log(carlos);
// console.log(maria);
// console.log(jose);

// Opção 2:

let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);