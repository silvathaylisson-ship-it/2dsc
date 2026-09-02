//1.Contador de Comprimento
//Crie uma variável chamada curso com o valor " JavaScript ".
//Imprima no console o tamanho total da string original (com espaços).
//Em seguida, remova os espaços das pontas e imprima o tamanho da string resultante.

let curso = "JavaScript"
console.log(curso.length)
let novoCurso = curso.trim();
console.log(novoCurso.length)


//2. Primeiro e Último Caractere
//Dada a string let palavra = "Desenvolvimento";:
//Use o método  para pegar a primeira letra.
//Use colchetes [] junto com a propriedade .length para pegar a última letra de forma dinâmica.


let palavra = "Desenvolvimento"
let primeiraletra = palavra.charAt(0)
console.log(primeiraletra)
console.log(palavra.charAt(palavra.length-1))

//3. Limpeza de Formulário
//Imagine que um usuário preencheu um campo de texto de login digitando " usuario_admin ".
//Crie uma função ou código que remova apenas os espaços do início e guarde em uma variável.
//Remova apenas os do final e guarde em outra.
//Por fim, aplique a limpeza completa (início e fim) e mostre o resultado limpo.

let login = "usuario_admin"
let inicio = login.trimStart()
console.log(login)
console.log(inicio)
let fim = inicio.trimEnd
console.log(fim)

//4. Caça ao Código UTF-16
//Dada a string let sigla = "JS";:
//Descubra e imprima o código UTF-16 da letra 'J' (índice 0).
//Descubra e imprima o código UTF-16 da letra 'S' (índice 1).

let sigla ="JS";
console.log(sigla.charCodeAt(0))
console.log(sigla.charCodeAt(1))

//5. O Desafio do Emoji
//A string a seguir contém um emoji: let frase = "Javascript é 🚀!";
//Verifique o comprimento (.length) dessa string.
//Descubra o código do emoji '🚀'. (Dica: descubra em qual índice o emoji está localizado!)

let frase = "Javascript é 🚀!";

console.log(frase.codePointAt(13))