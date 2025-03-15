/**
                Exercício:
        Receber dois números do usuário e mostrar com o "alert" a soma deles.
 */


// Usamos o let para que possa ser convertido para number.  
let num1 = prompt("Digite um número...");
let num2 = prompt("Digite outro número...");

// Interessante sempre mostrar o log para ver em que pé estamos do sistema.
// console.log(typeof num1, typeof num2);

// Convertemos ambos para number
num1 = Number(num1);
num2 = Number(num2);

// Podemos fazer a expressão dentro das templates strings, não sendo necessário usar esta operação
const resultado = num1 + num2;

// Usei a template string, que é inclusive o modo mais moderno
alert(`A resultado dos números é igual a ${resultado}.`);


// Em alguns códigos podemos usar desta forma.
// alert(`A resultado dos números é igual a ${num1 + num2}.`);
