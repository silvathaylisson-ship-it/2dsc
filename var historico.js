var historico = [
    { imc: 17.5 },
    { imc: 22.3 },
    { imc: 28.7 },
    { imc: 31.2 },
    { imc: 24.0 }
];

var imcMaior25 = historico.filter(function(registro) {
    return registro.imc > 25;
});

console.log(imcMaior25);