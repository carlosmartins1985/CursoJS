/**
            Objeto Math  - Matemática
 */

// let num1 = 9.49;

// Método Floor - para arredondar o número para baixo.
// let num2 = Math.floor(num1);

// Método Ceil - arredonda para cima
// let num2 = Math.ceil(num1);

// Método Round - arredonda para o valor inteiro mais próximo, acima ou abaixo de meio.
// Abaixo da metade arredonda para baixo, a acima da metade arredonda para cima.
// Exatamente na metade, arredonda para cima
// let num2 = Math.round(num1);
// console.log(num2);

// Método Max - encontra o maior número em uma sequência de números
// console.log(Math.max(1,2,3,4,5, -10,-50,1500));

// Método Min - encontra o menor número de uma sequência.
// console.log(Math.min(1,2,3,4,5, -10,-50,1500));

// Método Randon - Usado para gerar números aleatórios entre 0 e 1, porém o 1 não é incluso.
// console.log(Math.random());

// const aleatorio = Math.random();
// console.log(aleatorio);

// Agora suponhamos que precisamos pegar um número aleatório entre 10 e 5.
// Podemos usar uma função para isso, multiplicamos o Math.randon() por (10 - 5) e o 
//resultado adicionamos 5.
// const aleatorio = Math.random() * (10 - 5) + 5;
// console.log(aleatorio);

// Podemos arredondar o resultado usando o randon;
// console.log(Math.round(Math.random() * (10 - 5) + 5));

// Número aleatório entre 0 e 60
// const sorteio = Math.random() * (60);
// console.log(Math.round(sorteio));

// Método PI - retorna o valor de Pi.
// console.log(Math.PI);

// Método POW - Potênciação, o primeiro parâmetro é o número, e o segundo seria a potência
// let num1 = 5;
// let num2 = 5;
// console.log(Math.pow(num1, 2));
// Podemos usar o operador para fazer o cálculo;
// console.log(num1 ** 2);
// PREFERENCIALMENTE USAR O OPERADOR AO INVÉS DO MÉTODO POW

// Raiz quadrada - Podemos usar um cálculo simples para pegar a raiz quadrada
// let num1 = 11;
// console.log(num1 ** (1/2));
// Seria o número elevado a meio, ou (1/2).

// Uma coisa que pode ser grave, é a questão de se poder dividir um número por zero em JS.
console.log(100 / 0);
// Ao invés de retornar um erro, é retornado Infinity, e também avaliado como verdadeiro
// Quanto mais se aprocima do zero, maior o valor retornado, e quando não há mais casas decimais para serem
// exibidas, é retornado Infinity, ou seja, um número infinito.
// QUANTO MAIS SE APOCIMA DO ZERO ABSOLUTO, MAIS AUMENTA O VALOR DO NÚMERO, AS CASAS DECIMAIS.


/**
    ******CUIDAR POIS A DIVISÃO DE 100 POR ZERO AVALIA COMO VERDADEIRO******
 */