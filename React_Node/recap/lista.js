// let lista = ["MATHEUS", "JOSE", "MARIA", "LUCAS"];

// lista.map((item, index) => {
//   console.log(`passando: ${item}, index: ${index}`);
// });

// let numeros = [5, 3, 2, 6];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//   console.log(`Total até o momento: ${acumulador}`);
//   console.log(`Valor atual: ${numero}`);
//   console.log(`indice: ${indice}`);
//   console.log(`array original: ${original}`);
//   console.log(`###########################################`);

//   return (acumulador += numero);
// });
// console.log("Total reduce: " + total);

// let listagem = [4, 2, "Jose", 6, "Matheus"];

// let busca = listagem.find((item, indice, objeto) => {
//   if(item === 'Jose') {
//     return console.log('item encontrado');
//   }
// });

// console.log(busca);

let nomes = ["Matheus", "Gabriel", "Laura", "João", "Murilo", "Nogueira"];

let busca = nomes.filter((item) => {
  return item.length <= 6;
});

console.log(busca);
