/*
                        Exercício

    Dadas as variáveis, inverter os valores, desta forma;

        let varA = 'A'; => Receber o valor de B
        let varB = 'B'; => Receber o valor de C
        let varC = 'C'; => Receber o valor de A
*/

let varA = 'A'; // 'B'
let varB = 'B'; // 'C'
let varC = 'C'; // 'A'

[varA, varB, varC] = [varB, varC, varA]

// [varA, varB, varC] = [1, 2, 3]


// Maneira mais aniga
// const varATemp = varA;

// varA = varB;
// varB = varC;
// varC = varATemp;

console.log(varA, varB, varC);