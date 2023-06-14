var frutas = ["Banana", "Maça", "Morango", "Uva"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

var i = 1;
var j = 1;
while (i <= 10) {
  console.log("Tabuada do: ", i);
  while (j <= 10) {
    console.log(j, " + ", i, " = ", i * j);
    j++;
  }
  j = 1
  i++; 
}
