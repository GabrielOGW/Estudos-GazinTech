var data = new Date();

console.log(data);
console.log(data.getDate());
console.log(
  data.getMonth() + 1
); /*Por se tratar de um array de 11 meses, a posição vai do 0 ao 11, então o mês correto sempre vai ser +1*/
console.log(data.getFullYear());
console.log(data.toString());
console.log(data.setDate(data.getDate()));

var data1 = new Date(2023, 4, 21)
console.log(data1);
