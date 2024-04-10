let num1 = prompt('Digite um número.');
let num2 = prompt('Digite outro número.');

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

// Usando a interpolação
// alert(`A soma destes números é igual a ${resultado}.`);

// Usando aspas simples
alert('A soma destes números é igual a ' + resultado + '.');
