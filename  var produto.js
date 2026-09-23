var produtos = [
    { nome: 'Mouse', preco: 50 },
    { nome: 'Teclado', preco: 120 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Cabo USB', preco: 25 }
];

var produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 100;
});

console.log(produtosBaratos);