let ValorCompra = Number(prompt("Informe o valor da compra: "));
let genero = prompt("Informe seu gênero, digite F para Feminino ou M para Masculino");

let ValorAPagar;

if (genero == "F") {
    ValorAPagar = ValorCompra * 0.91;
} else {
    ValorAPagar = ValorCompra;
}

alert(ValorAPagar);

document.write(`O valor a pagar é de ${ValorAPagar}`);