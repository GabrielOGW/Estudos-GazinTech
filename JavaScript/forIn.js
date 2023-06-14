var pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Programador",
};

for (var propriedade in pessoa) {
  console.log(propriedade + ":", pessoa[propriedade]);
}
