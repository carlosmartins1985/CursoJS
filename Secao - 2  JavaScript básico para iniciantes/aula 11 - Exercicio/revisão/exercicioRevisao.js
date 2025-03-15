/**
    Dadas três variáveis, fazer com que:

    A variável A receba o valor da variável B;
    A variável B receba o valor da variável C;
    A variável C receba o valor da variável A;
 */

let varA = "A";
let varB = "B";
let varC = "C";
// Salvamos o valor de A antes de modifica-lo.
const varTemporaria = varA;

console.log(varA, varB, varC);

// varA = varB;
// varB = varC;
// varC = varTemporaria;

// Uma maneira mais moderna de resolver é usando arrays
// Onde cada índice será redeclarado sem a necessidade de se criar outra variável
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);





