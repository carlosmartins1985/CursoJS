/**
        Revisão
 */

// let num1 = 0.7;
// let num2 = 0.8;

/**
                Método toString
    Podemos precisar fazer a junção dos números:
    No caso a seguir os números serão somados
    console.log(num1 + num2);

    ** Podemos usar a função toString para converter o número em string
    console.log(num1.toString() + num2);

    ** Percebemos que toString não altera o tipo da variável, apenas converte onde foi chamada.
    console.log(typeof num1);

    ** Para alterar o valor da variável para string definitivamente podemos:
        num1 = num1.toString();
        console.log(typeof num1);
    Dessa maneira a variável será convertida para string definitivamente

    => Se houver qualquer string dentro da operação, não será feita a soma, e sim a concatenação.
 */

/**
        Representação binária
        
            Podemos ter a representação binária de um número usado a função toString, 
        usando um 2, dentro do parênteses, como parâmetro:
        console.log(num1.toString(2));
 */

/**
        Arredondar casas decimais
        Usamos o toFixed para arredondar casas decimais.
        let num1 = 11.589647855;
        console.log(num1.toFixed(2));
        Neste caso ele foi arredondado para cima, passando a valer 11.59.

        Podemos também arredondar com mais casas decimais, por exemplo 4:
        console.log(num1.toFixed(4));

        Aqui não arredonda, apenas corta o número a partir da quarta casa.

        Este modo também não altera o valor da variável, sendo possível fazer as operações necessárias
        e apenas na hora de exibir o valor fazer o arredondamento.
 */

/**
        Validando Inteiro

        Podemos precisar validar se o número que estamos recebendo de uma base de dados, por exemplo, é
    um número inteiro.
    Para isso usamo o método Number, para a verificação;
    Dentro do método Number, usamo o isInteger, passando a variável que precisamos validar como parâmetro.
    console.log(Number.isInteger(num1));
 */

/**
        NaN Not a Number
    
    Quando algum parâmetro da operação não é um number, ou outro motivo, nos é retornado 
    um NaN, Not a Number.
    Por exemplo, se algum dos parâmetros for uma string:
    let temp = num1 * "Olá";
    console.log(temp);
    Aqui será retornado um NaN, pois o segundo parâmetro da soma é uma string.


    Podemos verificar se a operação toda é um NaN, usando o método Number.
    let temp = num1 * "Olá";
    console.log(Number.isNaN(temp));
    Aqui será feita a verificação se o retorno da variável temp é um NaN.
    Se for será retornado true.

    Porém se tivermos um número, seja como string, ela já retornará false;
    let temp = num1 * "5";
    console.log(Number.isNaN(temp));
    Ou seja, ele entende que mesmo sendo como string, o número "5" passa como number.
    Por isso precisamos ter em mente que, como programadores, precisamos sempre fazer a conversão dos valores
    recebidos quando necessário, para evitar bugs no sistema.
    Pois se tal operação fosse de soma, a adição dos valores não seria feita, e sim a concatenação.

    *** NÃO FAÇA CONTAS COM STRING ***


 */

/**
        Imprecisão dos números

        A precisão dos números em JS segue um padrão, o IEEE 754-2008

    Se tentamos fazer uma conta simples;
    
    let num1 = 0.7;
    let num2 = 0.1;

    console.log(num1 + num2);
    Teremos como resultado;
    0.79999999999999
    Trata-se de uma imprecisão bem pequena.

    Mas se quiser-mos chegar a 1.0.
    Para isso podemos somar a variável num2 três vezes a num1;

    let num1 = 0.7;
    let num2 = 0.1;

    num1 += num2; Atribuição 0.8
    num1 += num2; 0.9 
    num1 += num2; 1.0

    console.log(num1);

    Aqui teremos como resultado 0.9999999999999

    Poderíamos tentar contornar isso usando o toFixed;
    O num1 seria exibido como inteiro, 1.00.

    Porém se fizer-mos a verificação usando o isInteger, receberemos como retorno false, 
    pois apesar de estar sendo exibido como um interger, ele continua sendo 0.999999999
    o que foi feito foi o arredondamento, o que não altera seu valor real.


        let num1 = 0.7;
        let num2 = 0.1;

        num1 += num2;
        num1 += num2;
        num1 += num2;

        console.log(num1);

        console.log(num1.toFixed(2));

        console.log(Number.isInteger(num1));

        Saida
        0.9999999999999999
        1.00
        false

        Isso porque o método isInteger checa os binários para dar o retorno.

    
        Função parseFloat

    Podemos usar a função parseFloat ou Number para converter o número para um valor de ponto flutuante.

            let num1 = 0.7;
            let num2 = 0.1;

            num1 += num2; // 0.8
            num1 += num2; // 0.9
            num1 += num2; // 1.0
            num1 += num2; // 1.1
            num1 += num2; // 1.2
            num1 += num2; // 1.3
            num1 += num2; // 1.4
            num1 += num2; // 1.5


            num1 = Number(num1.toFixed(2));
            console.log(num1);

            console.log(Number.isInteger(num1));

            Se o valor for inteiro ou com casa decimal, a converção será feita, tratando o número de forma correta.


            Quado chegamos a um valor inteiro será retornado true para isInteger, o que confirma que está 
            correta a converção dos valores;
                num1 += num2; // 0.8
                num1 += num2; // 0.9
                num1 += num2; // 1.0
                num1 += num2; // 1.1
                num1 += num2; // 1.2
                num1 += num2; // 1.3
                num1 += num2; // 1.4
                num1 += num2; // 1.5
                num1 += num2; // 1.6
                num1 += num2; // 1.7
                num1 += num2; // 1.8
                num1 += num2; // 1.9
                num1 += num2; // 2.0


                CONVERSÃO USANDO FUNÇÓES
                num1 = Number(num1.toFixed(2));
                console.log(num1);

                console.log(Number.isInteger(num1));

 */

/**
            Usando contas para resolver as imprecisões

    Podemos resolver as imprecisões com contas.

    Usamos multiplicar os valores por 100, para não fazer contas com números decimais.

        let num1 = 0.7;
        let num2 = 0.1;

        num1 = (num1 * 100) + (num2 * 100);

        console.log(num1);

    Neste caso teríamos 80 como resultado.

    Podemos então dividir o resultado por 100 para ter o valor correto.

    num1 = ((num1 * 100) + (num2 * 100)) / 100;

    Assim será retornado o valor de 0.8, como float.

    Podemos multiplicar até obtermos um valor inteiro, e verificando notamos que as somas estão sendo 
    feitas corretas

        let num1 = 0.7;
        let num2 = 0.1;
        
        CONVERÇÃO USANDO CONTAS
        num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
        num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
        num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

        console.log(num1);

        console.log(Number.isInteger(num1));

    Para isInteger teremos true como retorno.
 */

let num1 = 0.7;
let num2 = 0.1;

// num1 += num2;
// num1 += num2;
// num1 += num2;

// conversão usando função
// num1 = Number(num1.toFixed(2))

// conversão usando contas
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);

console.log(Number.isInteger(num1));

