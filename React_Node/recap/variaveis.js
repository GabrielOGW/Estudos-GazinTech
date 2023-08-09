// diferenças entre var let e const.
var nome1 = "Sujeito";

if (nome1 === "Sujeito") {
  var curso1 = "Programador Frontend";
  console.log(curso1);
}

// é possivel acessar pois 'var' é declarada como escopo global
console.log(curso1);

let nome2 = "Sujeito";

if (nome2 === "Sujeito") {
  let curso2 = "Programador Frontend";
  console.log(curso2);
}

// impossivel de acessar uma variavel let que esteja fora do escopo pai
// console.log(curso2);

const cargo = "Programador Front-End";
console.log(cargo);
// Por se tratar de uma variavel imutavel, eu não posso alterar ela
// cargo = "Programador Mobile";
