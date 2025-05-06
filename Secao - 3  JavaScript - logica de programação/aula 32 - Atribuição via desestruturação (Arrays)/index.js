/*
let a = 'A'; // Recebe B
let b = 'B'; // Recebe C
let c = 'C'; // Recebe A

const letras = [b, c, a];

// const numeros = [1, 2, 3];
[a, b, c] = letras;

console.log(a, b, c);
*/

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , quatro, , sete] = numeros;
// const primeiroNumero = numeros[0];

// console.log(um, tres, quatro);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// const [, [, , seis]] = numeros
const [lista1, lista2, lista3] = numeros
console.log(lista2[2]);

// console.log(numeros[1] [2]);
