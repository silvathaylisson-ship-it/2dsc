const frutas = ["maçã", "banana", "uva", "laranja"];

console.log(frutas.includes("uva")); // true


const numeros = [10, 20, 30, 40, 50];

console.log(numeros.includes(25)); // false

Crie um vetor chamado times com os valores:
["Coritiba", "Athletico", "Flamengo", "Palmeiras"]
Insira um nome de time e mostre no console se ele existe no vetor usando includes().


const cores = ["azul", "verde", "amarelo", "vermelho"];

console.log(cores.includes("preto")); // false


const alunos = ["Ana", "Carlos", "Marina", "João"];

if (alunos.includes("Marina")) {
    console.log("Aluno encontrado!");
} else {
    console.log("Aluno não encontrado!");
}
