var valores = [1, 2, 3, 4, 5, 6, 7, 8];

var pares = valores.filter(function(valor) {
    return valor % 2 === 0;
});

console.log(pares);