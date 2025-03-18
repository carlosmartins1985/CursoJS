/**
                Lógica de programação
    
                Operadores de comparação

        Sempre retornam true ou false, trata-se de uma pergunta, que os operadores fazem.

    
    >   maior que;
    >=  maior ou iguau;
    <   menor que;
    <=  menor ou igual;
    ==  igualdade, checa apenas valor => Não iremos utilizar
    === igualdade estrito, checa valor e tipo.
    !=  diferente; Nunca usar
    !== diferente estrito, checa valor e tipo
 */

// Aqui estamos fazendo uma pergunta, true ou false
// console.log(10 > 5);

// Podemos ter uma variável que receberá o resultado da comparação;
// const comp = 10 > 5;
// console.log(comp);

// Maior ou igual, retorna se o valor é maior ou igual ao outro.
// Irá retornar verdadeiro até que o valor da direita seja maior que o valor da esquerda.
// const comp = 10 >= 5;
// console.log(comp);

// Menor que ou menor igual compara se o valor é menor ou igual ao outro
// const comp = 12 <= 15;
// console.log(comp);

// Podemos ter variáveis que precisaremos comparar
// const num1 = 10;
// const num2 = 15;
// const comp = num1 <= num2;
// console.log(comp);

// Igualdade estrita, compara tipo e valor
// const num1 = 10;
// const num2 = 10;
// const comp = num1 == num2;
// console.log(comp);

// Precisamos usar a igualdade estrita sempre, pois o js retorna como true
// comparação entre number e strings, mesmo não sendo iguais
const num1 = 10; // Number
const num2 = '10'; // String
const comp = num1 === num2;
console.log(comp);

// Da mesma forma o diferente estrito checa valor e tipo
const num3 = 10;
const num4 = '10';
const compa = num3 !== num4;
console.log(compa);

// SEMPRE USAR OS OPERADORES DE COMPARAÇÃO ESTRITO.

