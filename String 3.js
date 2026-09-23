//Exercíci 1
var frase = "Eu gosto de tomar café pela manhã e café à tarde";

var resultado = frase.replace("café", "chá");

console.log(resultado);


//Exercíci 2
var frase = "O rato roeu a roupa do rei, e o rato fugiu";

var resultado = frase.replaceAll("rato", "***");

console.log(resultado);


//Exercíci 3
var frase = "A linguagem JavaScript é incrível. javascript é muito popular";

var resultado = frase.replace(/javascript/i, "JS");

console.log(resultado);


//Exercíci 4
var frase = "O Bug do sistema gerou outro bug e um BUG crítico";

var resultado = frase.replace(/bug/gi, "erro");

console.log(resultado);


//Exercíci 5
var data = "2026-08-04";

var resultado = data.replaceAll("-", "/");

console.log(resultado);


//Exercíci 6
var frase = "Olá..... mundo!!!";

var resultado = frase.replace(/\.{2,}/g, ".");
resultado = resultado.replace(/!{2,}/g, "!");

console.log(resultado);