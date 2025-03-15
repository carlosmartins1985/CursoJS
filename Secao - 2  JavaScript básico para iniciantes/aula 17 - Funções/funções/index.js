//          FUNÇÕES

/*
        Funções executam ações, são techos de código que podem retornar ou 
    não alguma coisa.
    Declaramos uma função da seguinte maneira:

    Declaração clássica de função
    Decla.   Nome
    function saudacao() {
    corpo da função
    }

        Chamando a função
    saudacao();

        Podemos ter infinitas linhas de código dentro do corpo das funções.
    Todo código dentro da função só é acessível dentro da função.

        Podemos enviar dados para as funções.
    Por exemplo, dizer bom dia e o nome de uma pessoa.
    Para isso precisamos usar parâmetros que são passados para as funções.

    function saudacao(nome) {
        console.log(`Bom dia ${nome}!! `);
    }
    saudacao("Carlos");

        Passamos esses parâmetros dentro da chamada da função, passamos
    um argumento para a função.

        Podemos reutilizar as funções quantas vezes quisermos.

    function saudacao(nome) {
        console.log(`Bom dia ${nome}!! `);
    }

    // Vários chamados
    saudacao("Carlos");
    saudacao("Pedro");
    saudacao("Maria");
    saudacao("Roberto");

        Podemos salvar o retorno de uma função em uma variável.

    function saudacao(nome) {
        console.log(`Bom dia ${nome}!! `);
    }
    const variavel = saudacao("Carlos");

        Como trata-se de uma função sem retorno, temos undefined como saída,
    ela executa a ação para que foi feita, mas não retorna nada para a variavel.

        Se precisamos que a função retorne alguma coisa, usamos a palavra return.

    function saudacao(nome) {
        console.log(`Bom dia ${nome}!! `);
        return 123456;
    }
    const variavel = saudacao("Carlos");
    console.log(variavel);

        Aqui ela será executada, aparecerá a msg de bom dia, e também
    será mostrado o retorno.

    // Retorno da função
    Bom dia Carlos!! 
    123456

        Para especificar um retorno, podemos fazer assim;

    function saudacao(nome) {
        return `Bom dia ${nome}!`;
    }
    const variavel = saudacao("Carlos");
    console.log(variavel);

        Aqui ela receberá o nome como parâmetro, e irá retornar 
    a msg completa, que será salva na variável.

        Função para somar dois valores, ou mais valores;

    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    };
    console.log(soma(5, 10));
    console.log(soma(30, 50));
    console.log(soma(555, 100));

        Aqui salvamos o retorno da função em uma variável, dentro do escopo da função.

        Todo programa em js tem várias funções que conversam entre si e executam ações.

        O corpo da função está protegido dentro do escopo da função, não sendo 
    possível ser acessado fora da função.
        Por exemplo, se tentar-mos acessar a variável resultado, teremos um erro como retorno.
    
    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    };

    console.log(soma(5, 10));
    console.log(resultado); //Erro de não definido

        Podemos criar uma variável de mesmo nome, resultado, fora da função,
    que nada terá a ver com a variável dentro da função, que está protegida 
    pelo escopo da função.


    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    };

    const resultado = soma(5, 15);
    console.log(resultado);

        A função interrompe a execução assim que acha a palavra return.
    
    // Aqui o Ola Mundo não será executado, pois está depois do return.
    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
        console.log("Olá mundo!!");
        
    };
    const resultado = soma(5, 15);
    console.log(resultado);

    // Aqui será exibido normalmente.
    function soma(num1, num2) {
        const resultado = num1 + num2;
        console.log("Olá mundo!!");
        return resultado;        
    };
    const resultado = soma(5, 15);
    console.log(resultado);

        No caso dessa função, se não passar-mos nenhum valor como
    parâmetro, teremos como retorno um NaN, pois a função não está recebendo
    nenhum valor, e estamos tentando fazer uma conta que é undefined.

    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    };
    const resultado = soma();
    console.log(resultado);

        Se passar-mos strings, será feita a concatenação.

    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    };
    const resultado = soma("Carlos", " Martins");
    console.log(resultado);

        Podemos deixar um valor padrão, para caso não seja passado nenhum
    valor como parâmetro, assim a função assume a responsabilidade, e utiliza
    um valor qualquer.

    function soma(num1 = 1, num2 = 3) {
        const resultado = num1 + num2;
        return resultado;
    };
    const resultado = soma();
    console.log(resultado);

        Assim, mesmo que não enviemos nenhum valor, ela assume os valores padrão.

        Se passar-mos um valor apenas, ela joga esse valor no primeiro parâmetro,
    e o outro continua com o valor padrão.

    function soma(num1 = 1, num2 = 3) {
        const resultado = num1 + num2;
        return resultado;
    };
    const resultado = soma(4);
    console.log(resultado);

                Função anônima

        Quando criamos uma função dentro de uma variável chamamos de função anônima.
        Uma função anônima precisa obrigatóriamente usar o (;).
    
    // Função anônima para retornar a raiz de um número.
    const raiz = function (num){
        return num ** 0.5;
    };
    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));

                Arrow function

        Apenas retiramos a palavra function, e adicionamos o sinal de igual
    e a seta para a direita.
    Executa apenas uma tarefa, podendo ser em uma linha de código.

    const raiz = (num) => {
        return num ** 0.5;
    }
    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));

        As arrows functions vieram para simplificar a vida do dev, no caso
    de termos uma função que possui apenas uma linha no corpo, podemos eliminar;
    * o return;
    * as chaves; 
    * e também os parênteses do parâmetro da função
    
    const raiz = num => num ** 0.5;

    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));

        E funcionará da mesma maneira.
    
    // Arrow function completa
    const raiz = (num) => {
        return num ** 0.5;
    } 
    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));

    // Versão simplificada, apenas uma linha de código.
    const raiz =num => num ** 0.5;

    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));

    * Se atentar a sempre criar funções que executem apenas uma tarefa,
    e não várias.

*/

/* 
    Declaração de função

    function soma(num1 = 1, num2 = 3) {
    const resultado = num1 + num2;
    return resultado;
    }
    const resultado = soma(4);
    console.log(resultado);
*/

/*
    Função anônima

    const raiz = function (num){
        return num ** 0.5;
    };
    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));
*/


