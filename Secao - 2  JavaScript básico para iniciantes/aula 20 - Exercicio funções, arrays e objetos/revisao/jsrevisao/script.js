/**
            Exercício com arrays, funções e objetos

    - Criamos o arquivo html e o js.
    - Linkamos o script.js e testamos com o alert.
    - Criamos um formulário básico, sem nos importar com semântica.
    - Formulário sem id, pois para essa aula não se faz necessário.

        <p>Nome: <input type="text" class="nome"></p>
    - Criamos um para cada dado;
        * nome;
        * sobrenome;
        * peso;
        * atura;
        
        <form action="" method="get">
            <p>Nome: <input type="text" class="nome"></p>
            <p>Sobrenome: <input type="text" class="sobrenome"></p>
            <p>Peso: <input type="text" class="peso"></p>
            <p>Altura: <input type="text" class="altura"></p>
        </form>

        Neste exercício iremos selecionar os inputs dentro do formulário a partir das classes.
        Colocamos também uma classe no formulário.

    - Por último adicionamos um botão.

        Aqui teremos um problema, que sempre que clicamos no botão enviar, a página é atualizada
    perdendo os dados digitados, para resolver isso iremos criar uma função que evita que o 
    formulário seja enviado.
        Não podemos perder o formulário, pois precisamos manipular ele.


        Tudo que acontece no navegador é considerado um evento para o js, ato de mexer o mouse,
    clicar em algum lugar, quando digitamos algo no input.
        Sendo assim podemos colocar um espião, que ficará monitorando esses eventos, no caso, podemos
    colocar um espião, e sempre que o botão de enviar for clicado, esse formulário não será enviado, 
    e a página não será atualizada.


                    Criação do código js
        
    * Criamos uma função para não poluir o escopo global, e será onde colocaremos nosso código;

        function meuEscopo() {
            const nome = "Carlos"
        }

        // Precisamos executar a função 
        meuEscopo();

    * A partir daqui passamos a trabalhar dentro dessa função meuEscopo.

    * Iniciamos selecionando o formulário no html, utilizando o querySelector, que seleciona os 
    elementos da mesma forma que o css seleciona.

        // Utilizamos o seletor de classe para selecinar o formulário;
        const form = document.querySelector(".form");

    * Criamos a função que irá inpedir que o form seja enviado, utilizando a variável form
    form.onsubmit, que é o evento que iremos monitorar, e essa variável receberá uma função, que receberá um 
    evento.

    * Testamos adicionando um alert, e sempre que o formulário for enviado, aparecerá o alert.

    * Para ver como perdemos os dados digitados, colocamos um log, e notamos que aparece 
    por alguns segundos e desaparece;

    * O evento de enviar o formulário é um comportamento padrão do navegador.

    * Adicionamos a função evento.preventDefault();
        
        evento.preventDefault();

    * Basicamente pedimos que o navegador previna um comportamento padrão.

    // Porém essa é uma maneira mais antiga, existe uma função melhor.

        // Maneira antiga
        // form.onsubmit = function (evento) {
        //     evento.preventDefault();

        //     console.log("Enviado!");
            
        // };

        // Função para evitar que o form seja enviado


        Outra opção é usar um método para fazer esse trabalho;
    
    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        contador++;
        console.log(`Form não enviado ${contador}`);
        
    }
    form.addEventListener('submit', recebeEventoForm);
        Nesta função;

    * Criamos um contador para enumerar as vezes que o form não foi enviado;

    * Criamos a função, com function, nome recebeEventoForm (evento), recebendo o evento,
    de submit;

    * evento.preventDefault(); - Método para previnir que o form seja enviado;

    * form.addEventListener('submit', recebeEventoForm); - Chamada da função;

                Pegando os dados digitados
    
    * Como já estamos selecinando o form, podemos, ao invés de buscar no html todo pelo 
    input, podemos selecionar direto através da variável form.

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
    
    * Assim selecinamos todos os inputs;

    * Testando com o log, temos os elementos todos selecionados;

        Como precisamos dos valores digitados nesses inputs, utilizamos o .value
    para pegar o valor digitado.

    * Criamos uma div para conter os resultados, os textos de resultado.
    * Já selecinamos ela;
         const resultado = document.querySelector(".resultado");

    * Criamos um array que irá conter todos os dados dos nomes digitados;

        O que precisamos fazer agora é criar um objeto, e colocar esse objeto dentro do array.
    
    * Criar um console.log para exibir os objetos que foram colocados dentro do array;
    * Adicionar o que foi criado a div resultado;
    * A cada vez que for criado, colocar como parágrafo os dados.


 */

function meuEscopo() {

    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

    }
    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo();