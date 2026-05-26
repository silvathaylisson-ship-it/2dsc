let numero1 = Number(prompt("Informe o primeiro numero"));
let numero2 = Number(prompt("Informe o segundo numero"));

if (numero1 > numero2) {
    alert("O numero 1 é maior");
    document.write(`O numero ${numero1} é maior que o numero ${numero2}`);
} else if (numero2 > numero1) {
    alert("O numero 2 é maior");
    document.write(`O numero ${numero2} é maior que o numero ${numero1}`);
} else {
    alert("Os numeros são iguais");
    document.write(`O numero ${numero2} é igual ao numero ${numero1}`);
}