let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Jose"));
console.log(nomes.includes("Maria"));

if(nomes.includes("Matheus")) {
  console.log('Está na lista');
} else {
  console.log('Não está na lista');
}

let nome = "Matheus"

console.log(nome.startsWith("M"));
console.log(nome.startsWith("E"));

console.log(nome.endsWith("S"));
console.log(nome.endsWith("s"));