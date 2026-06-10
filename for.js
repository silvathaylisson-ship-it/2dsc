let alunos = ["ana","pedro","maria"];
for(let i = 0; i < alunos.length; i ++){
    console.log("presente: ",alunos[i])
}
alunos.forEach(funcion(aluno){
 console.log("presente: ",aluno)
})

let base = [5, 10, 15];
for(let i = 0; i < base.length; i ++ ){
console.log(base[i]* 2)
}


let marcas = ["Fiat", "Ford", "VW"];


console.log("Usando for:");
for (let i = 0; i < marcas.length; i++) {
    console.log(`Índice ${i}: ${marcas[i]}`);
}


console.log("\nUsando forEach:");
marcas.forEach(function(item, indice) {
    console.log(`Índice ${indice}: ${item}`);
});


let estoque = [5, 12, 3, 20, 8];

// Usando for tradicional
console.log("Usando for:");
for (let i = 0; i < estoque.length; i++) {
    if (estoque[i] < 10) {
        console.log(`Produto ${i}: Repor produto! (quantidade: ${estoque[i]})`);
    }
}


console.log("\nUsando forEach:");
estoque.forEach(function(qtd, indice) {
    if (qtd < 10) {
        console.log(`Produto ${indice}: Repor produto! (quantidade: ${qtd})`);
    }
});
