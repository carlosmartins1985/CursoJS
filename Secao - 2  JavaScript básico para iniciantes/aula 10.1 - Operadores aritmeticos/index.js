/**
    ***** Operadores Aritméticos *****

    + => Adição e concatenação
    - / * => Subtração, Divisão, Multiplicação
    ** => Potenciação
    % => Resto da divisão

    ***** Precedência dos operadores aritméticos *****
    () => Primeiro os parênteses
    ** => Potenciação
    * / % => Multiplicação, Divisão, Resto da divisão
    + - => E por último, Adição e Subtração

    ***** Operador de Incremento *****
    ++ => Usamos quando formos implementar um contador por exemplo, ele adiciona um valor 
    na variável em questão.

    ***** Operador de decremento *****
    -- => Usamos para subtrair valores de um contador por exemplo.
    Vai subtrair um valor a cada vez que for chamado.
    Da mesma forma temos o pré-decremento e o pós-decremento

    ***** Operadores de atribuição *****
    +=, -=, *=, /= => Usamos esses atalhos para incrementar valores.

    ***** NaN not a number *****
    Aparece quando tentamos fazer operações com valores que não são números, são strings.

    ***** Convertendo stings para number *****
    * parseInt => Faz a converção de um valor para um inteiro;
    * 
*/ 

// Desse modo temos a soma das variáveis
// const num1 = 5;
// const num2 = 10;
// console.log(num1 + num2);

// Se alguma variável for do tipo string, o operador de + fará a concatenação
// const num1 = '5';
// const num2 = 10;
// console.log(num1 + num2);

// ** Faz a potenciação dos valores, no exemplo teremos 3 elevado a 3 = 27.
// const num1 = 3;
// const num2 = 3;
// console.log(num1 ** num2);

// % Resto da divisão, retorna o resto da divisão de dois valores
// const num1 = 5;
// const num2 = 3;
// console.log(num1 % num2);

// Podemos fazer contas com vários números
// const num1 = 5;
// const num2 = 3;
// console.log(num1 + num2 +num2 + num1);

// Devemos nos atentar a ordem de precedencia quando fizermos calculos,
// neste caso ele primeiro faz a multiplicação e depois a soma
// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// console.log(num1 + num2 * num3);

// Podemos alterar a precedencia utilizando os parênteses
// Agora primeiro será feita a soma e depois a multiplicação
// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// console.log((num1 + num2) * num3);

// Se as operações tiverem a mesma precedência, os calculos serão feitos
// na ordem, da esquerda para a direita
// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// console.log(num1 * num2 / num3);

// Operador de incremento, podemos ir incrementando quantos forem necessários
// Sempre iremos utilizar let para contadores
// let contador = 1;
// contador++;
// contador++;
// contador++;
// contador++;
// contador++;
// console.log(contador);

// Contador com for
// let contador;
// for (contador = 1; contador <= 10 ; contador++) {
//     console.log(contador);
// }

// Ele também pode ser pré-fixado, aqui ele primeiro faz a conta e depois retorna o valor
// Podemos ver a diferênça executando direto no log
// let contador = 1;
// console.log(contador++); // Aqui ele primeiro mostra o valor depois faz a operação
// console.log(++contador); // Aqui primeiro ele faz a operação de depois mostra o resultado


// Operador de decremento, subtrai um valor a cada vez que for chamado
// let contador = 10;
// console.log(--contador);


// Como boa prática de programação, é recomendável primeiro fazer o incremento/decremento antes de 
// de exibir no console
// let contador = 10;
// contador++; // Sempre fazer o incremento antes de exibir no console.
// console.log(contador++); // Forma errada de se fazer.


// Para incrementar de mais de um valor por vez
// Aqui irá incrementar de 2 em dois
// const passo = 2;
// let contador = 1;
// // contador = contador + passo; 
// contador += passo; // Usando o atalho para operador de icremento, é igual a contador = contador + passo
// console.log(contador);


// Usando o operador de multiplicação
// let contador = 2;
// contador *= 2;
// console.log(contador);


// Teste no operador de potenciação
// let contador = 2;
// contador **= 10;
// console.log(contador);

// NaN - Retorno quando algum dos dados não é um número.
// const num1 = 10;
// const num2 = "Carlos";
// console.log(num1 * num2);

// Devemos tomar cuidado, pois as vezes o js tenta contornar esses erros para nós
// Se por exemplo tivermos uma string com um número dentro, ele fará o calculo
// const num1 = 10;
// const num2 = "5";
// console.log(num1 * num2);

// parseInt => Faz a conversão do valor que está dentro da string para number inteiro
// let num1 = 10;
// let num2 = parseInt('5');
// console.log(num1 + num2);
// console.log(typeof num1, typeof num2);

// parseFloat => Faz a conversão para um número de ponto flutuante
// let num1 = 10;
// let num2 = parseFloat('5.2');
// console.log(num1 + num2);
// console.log(typeof num1, typeof num2);


// Number => Faz a conversão de acordo com o número, pode ser inteiro ou decimal
// Se usarmos string ele não irá conseguir converter, retornará NaN.
let num1 = 10;
let num2 = Number('5.2');
let num3 = Number('12');
console.log(num1 + num2 + num3);
console.log(typeof num1, typeof num2);


