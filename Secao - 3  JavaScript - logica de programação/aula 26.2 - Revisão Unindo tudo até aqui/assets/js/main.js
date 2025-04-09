// Apesar de ser uma boa prática de programação, não usaremos uma função escopo
/**
        Passos a serem seguidos para criação do programa
    
    * Capturar evento de submit do formulário;
    // Criamos o formulário no html, bem básico para esse exercício.

    <body>
    <section class="container">
        <h1>Calcule seu IMC</h1>

        <form action="" id="form" method="post">
            <label for="peso">Peso</label>
            <!--Podemos usar ou não o name-->
            <input type="text" id="peso" name="peso">

            <label for="altura">Altura</label>
            <input type="text" id="altura" name="altura">

            <button type="submit">Calcular</button>
        </form>
    </section>

    <script src="./assets/js/main.js"></script>
    </body>

    * Usamos id para selecionar o formulário;
    * Para parar o envio do formulário, usamos a função addEventListener(), passando como parâmetros, primeiro 
    qual evento devemos assistir, escutar, que no caso é o submit.
    * Após isso podemos criar uma função separada, ou adiconar uma função anônima para executar a tarefa.
    * Como parâmetro dessa função podemos ter, evento, event ou simplesmente e, pois trata-se de e de event.
     
    form.addEventListener('submit', function(e) {

    })

    * Adicionamos um log para saber se foi realemente enviado.

    * Agora iremos ao longo do código adicionando funçóes que executam pequenas tarefas, o ideal é termos 
    uma função para cada tarefa.

    * Adicionamos a div resultado no html.

    * Criamos a função que irá receber o resultado, com o parâmetro msg;

    * Como teste podemos enviar a msg através do parâmetro da função.

    * Chamamos a função setResultado, dentro da função do form, passando um 'Olá mundo' como parâmetro

    const form = document.querySelector("#formulario");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        setResultado('Olá mundo!!');
        
    })

    function setResultado(msg) {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = msg;
    }

    A única coisa que essa função faz é adicionar o html.

    * Faremos diferente, a cada vez que chamarmos o html, iremos zerar o conteúdo

    function setResultado(msg) {
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = ''; // Zerando o conteúdo
    }

    * Usamos uma função para criar um parágrafo;

    function setResultado(msg) {
        const resultado = document.querySelector('#resultado');

        // Zerar o conteúdo, deixando uma div em branco
        resultado.innerHTML = '';

        // Aqui criamos uma variável que irá criar um parágrafo
        const p = document.createElement('p');

        // Aqui conseguimos adicionar uma classe ao parágrafo através do javaScript
        // Podemos fazer isso em qualquer elemento.
        p.classList.add('paragrafo-resultado'); 

        p.innerHTML = "Qualquer coisa!!"

        // Aqui adicionamos a variável que contém o parágrafo a div resultado, usando o appendChild().
        resultado.appendChild(p);
    }

    * Assim podemos através do javaScript modificar o css do parágrafo.

    * Criamos essa classe no css;

    * Criamos a função criaP();

        // Aqui criamos uma variável que irá criar um parágrafo
        const p = document.createElement('p');
        // Aqui conseguimos adicionar uma classe ao parágrafo através do javaScript
        // Podemos fazer isso em qualquer elemento.
        p.classList.add('paragrafo-resultado');
        p.innerHTML = "Qualquer coisa!!"
        // Aqui adicionamos a variável que contém o parágrafo a div resultado, usando o appendChild().
        resultado.appendChild(p);

    * Como não queremos que uma função dependa da outra, no caso setResultado e criaP, não colocaremos
    o innetHTML dentro da função criaP.

    * Retiramos todas as tarefas da função criaP, deixando apenas para restornar o parágrafo.

    function criaP() {
    const p = document.createElement('p'); // Cria o elemento p
    return p; // Retorna o elemento p.
    }
    
    * Dentro da função setResultado criamos uma variável que irá receber a função criaP.

    * Capturamos o conteúdo dos inputs.
    * Como sabemos que o evento está vindo do form, podemos tanto utilizar form quanto e.target, ou seja,
    de quem está vindo esse evento.
    * O target pega o elemento que está fazendo o evento, exatamente o elemento, ou seja, de onde estamos 
    selecionando o elemento que precisamos, no caso de dentro do form, pois os inputs estão dentro do form.

 */

const form = document.querySelector("#formulario");

form.addEventListener('submit', function(e) {
    // (e) Vem de event.
    e.preventDefault();
    
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);
    
    
    
})


function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');

    // Zerar o conteúdo, deixando uma div em branco
    resultado.innerHTML = '';

    const p = criaP();
}

