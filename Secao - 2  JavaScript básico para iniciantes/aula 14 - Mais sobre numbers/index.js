//let num1 = 1500;  Tipo Number
//let num2 = 2.5; Tipo Number


// *** Método toString() ***
// console.log(num1.toString() + num2); 
// console.log(typeof num1);

// *** Definir definitivamente num1 como string ***
// num1 = num1.toString();
// console.log(typeof num1);

// *** Representar números binários ***
// console.log(num1.toString(2));

// *** Método toFixed ***
// num1 = 10.1579586985488
// console.log(num1.toFixed(2));

// *** Método isInteger ***
// num1 = 10;
// num1 = 10.25;
// console.log(Number.isInteger(num1));

// *** Método isNaN ***
// let temp = num1 * 'Ola';
// let temp = num1 * '5';
// console.log(temp);
// console.log(Number.isNaN(temp));

// *** Imprecisão ***
//let num1 = 0.7; // Tipo Number
//let num2 = 0.1;// Tipo Number
// num1 += num2;
// num1 += num2;
// num1 += num2;


// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
// console.log(num1);
// console.log(Number.isInteger(num1));


// *** Resolvendo a imprecisão com contas ***
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;



// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));



