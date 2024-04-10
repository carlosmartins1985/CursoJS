const nome = 'João';
console.log(nome);

// Não podemos redeclarar constantes
const idade = 38;
// idade = 40;

// Podemos pegar o valor de uma variável ou constante e atribuir a outra variável ou constante
const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log('resultado', resultado);
console.log('resultado duplicado', resultadoDuplicado);
console.log('resultado triplicado', resultadoTriplicado);

// Se precisar-mos descobrir o tipo de dado da variável
console.log('Tipo de variável =>', typeof primeiroNumero);
console.log('Tipo de variável =>', typeof terceiroNumero);

console.log(primeiroNumero + segundoNumero);
console.log(typeof (primeiroNumero + segundoNumero));








































// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podemos iniciar o nome de uma constantes com números
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case sensitivi
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST
// Constantes precisam ser declaradas e inicializadas ao mesmo tempo
