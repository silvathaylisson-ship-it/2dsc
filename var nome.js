var nomes = ['Ana', 'Carlos', 'Beatriz', 'João', 'Fernanda'];

var nomesMaiores = nomes.filter(function(nome) {
    return nome.length > 4;
});

console.log(nomesMaiores);