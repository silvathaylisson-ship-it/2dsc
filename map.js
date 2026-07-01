//Dado um vetor de preços [10, 20, 30, 40, 50], use map() para criar um novo vetor com todos os preços aumentados em 5 reais.
let precos  = [10, 20, 30, 40, 50];
let novopreco = precos.map(function(p){
    return p + 5
});
console.log(novopreco)

//Dado um vetor de idades [15, 18, 22, 30, 45], use map() para criar um novo vetor informando se cada pessoa é "Maior de idade" (≥ 18) ou "Menor de idade".
let idades = [15, 18, 22, 30, 45];
let classificacao = idades.map(idade =>
  idade >= 18 ? "Maior de idade" : "Menor de idade"
);
console.log(classificacao);

//Dado um vetor de nomes ["ana", "joao", "maria", "pedro"], use map() para criar um novo vetor com todos os nomes em letras maiúsculas.
let nomes = ["ana", "joao", "maria", "pedro"];
let nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

//Dado um vetor de números [2, 4, 6, 8, 10], use map() para criar um novo vetor com o dobro de cada número.
let numeros = [2, 4, 6, 8, 10];
let dobro = numeros.map(numero => numero * 2);
console.log(dobro);

//Dado um vetor de produtos ["celular", "notebook", "tablet", "fone"], use map() para criar um novo vetor adicionando a palavra "Produto: " antes de cada nome. Exemplo: "Produto: celular"
let produtos = ["celular", "notebook", "tablet", "fone"];
let produtosFormatados = produtos.map(produto => `Produto: ${produto}`);
console.log(produtosFormatados);



