# Aula 20 - Exercicio funções, arrays e objetos

Objetivo;

Criar um formulário para receber alguns dados do usuário e exibi-los na tela, salvar esse cadastro em um array, mostrando também no console os dados do usuário.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-19%2020-00-51.png)

* Criamos os arquivos necessários, index.html e script.js.

* Linkamos o script.js ao doc html.

Para iniciar criamos um formulário no html, sem nos preocupar com a semântica, apenas para pegar os dados do usuário.

* Podemos usar tanto GET como POST, pois a idéia não é enviar o formulário;

* Então faremos com o método GET mesmo;

```html
    <form action="" method="get">

    </form>
```

* Dentro do form colocamos tags p para adicionar os inputs, ***não precisaremos nem de nome nem de id para esse form***;

* <mark>Porém iremos precisar da class;</mark>

* Adicionamos todos os inputs necessários;

```html
   <form action="" method="get">
        <p>Nome: <input type="text" class="nome"></p>
        <p>Sobrenome: <input type="text" class="sobrenome"></p>
        <p>Peso: <input type="text" class="peso"></p>
        <p>Altura: <input type="text" class="altura"></p>
    </form>
```

* Mudamos também o nome das classes.

<mark>A classe é o item mais importante neste momento, pois é atravéz dela que iremos</mark> <mark>selecionar os input dentro do form.</mark>

* Adicionamos também uma classe ao formulário;

```html
   <form class="form" action="" method="get">
        <p>Nome: <input type="text" class="nome"></p>
        <p>Sobrenome: <input type="text" class="sobrenome"></p>
        <p>Peso: <input type="text" class="peso"></p>
        <p>Altura: <input type="text" class="altura"></p>
    </form>
```

* Por fim adicionamos um button ao form para enviar esse formulário;

```html
   <form action="" method="get">
        <p>Nome: <input type="text" class="nome"></p>
        <p>Sobrenome: <input type="text" class="sobrenome"></p>
        <p>Peso: <input type="text" class="peso"></p>
        <p>Altura: <input type="text" class="altura"></p>
        <button>Enviar</button>
    </form>
```

Sempre que um formulário é enviado, a página recarrega e começa tudo novamente, isso será um problema, pois não queremos enviar o formulário, apenas manipular ele.

Aos poucos estamos aprendendo coisas do front-end, uma coisa importânte de se saber é que tudo que acontece dentro da janela do navegador é considerado um evento.

* Um exemplo de um evento pode ser simplesmente o ato de mover o mouse dentro da janela do navegador;

* Clicar em qualquer lugar no navegador também é considerado um evento;

* Quando digitamos algo no input é um evento;

Existe evento para absolutamente tudo dentro do navegador.

O trabalho como desenvolvedor pode ser de colocar um espião nesse evento, podemos colocar como se fosse uma pessoa espiando algum evento para nós.

Por exemplo, podemos dizer ao javascript, que, quando o mouse se mecher, execute alguma ação.

Quando alguma coisa for digitada, faça outra ação.

Então por fim, quando o formulário for enviado, que é o evento de submit do form, podemos dizer que não queremos o evento de atualizar a página;

<mark>Isso é especifico para concluir-mos o exercício apenas.</mark>

O que precisamos é apenas não atualizar a página.

* Quando criamos uma variável global, ela estará visivel para todo o código;

* Quando criamos uma função, e dentro dessa função teremos variáveis, essas estão visiveis apenas dentro do escopo da função, o que sai dela é apenas o que estaremos retornando com o return.

* Se por acaso uma variável global criada com seu nome de variável, conflitar com outra variável, de uma biblioteca, por exemplo, teremos um conflito de variáveis, e a última carregada será exibida/utilizada.

* Inclusive podemos nos deparar com variáveis conflitantes até mesmo declarando variáveis com mesmo nome, por engano, nome de uma bibliotéca, pois o javascript entendería que a variável estaría sendo redeclarada.

Então podemos fazer com que nossas variáveis não poluan o escopo global e nem sofram com influências externas, para resolver isso, iremos envolver tudo o que precisamos em uma função.

E dentro desta função colocaremos tudo o que for necessário para nosso código funcionar, evitando que esses dados sofrão influência externas no escopo global.

* Nem mesmo o alert() funcionará se estiver dentro de uma função, para executa-lo precisaremos executar a função;

```js
function meuEscopo () {
    alert(1);
}

meuEscopo();
```

Sendo assim, a única coisa que polui o escopo global é a própia função meuEscopo, o que está dentro da função está protegido.

Sendo assim passaremos a trabalhar dentro da função e não no escopo global.

* Primeiramente precisamos evitar que o formulário seja enviado cada vez que clicarmos no botão submit, pois se ele for enviado, a página será recarregada, e perderemos o script;

* Então a primeira coisa a fazer é selecionar o formulário através da classe form;

* Criamos uma variável que irá pegar o form dentro do document;

* Nessa variável usaremos o queryselector para pegar o form através de sua classe;

* Podemos selecionar de várias formas, pela tag;

```js
const form = document.querySelector('form');
```

* Pelo nome da classe, utilizando o ponto (.);

```js
const form = document.querySelector('.form');
```

* Poderíamos também selecionar pelo id, usando a # e o nome do id;

```js
const form = document.querySelector('#form');
```

* Neste caso usaremos a classe form para selecionar o formulário;

```js
const form = document.querySelector('.form');
```

Como vimos podemos colocar espiões na página, isso são os eventos, então adicionamos um evento a variável form;

```js
    form.onsubmit = function (evento) {

    };
```

* Adicionamos uma função anônima a variável form com o evento onsubmit adicionado a ela.

* Colocamos um alert(1) dentro da função para saber se ela está funcionando, o alert() deve aparecer sempre que o formulário for enviado;

* Então ao clicar em Enviar aparece o alert().

* Para testar, adicionamos um log logo depois do alert(), para ver que a página ao ser recarregada após enviar o form realmente nos faz perder o script adicionado.

```js
    form.onsubmit = function (evento) {
        alert(1);
        console.log('Foi enviado!');
    };
```

Esse evento de atualizar a página, ou enviar o formulário, quando no caso clicamos no ok do alert() trata-se de um comportamento padrão do navegador, e o que queremos é previnir esse comportamento padrão.

* Para isso adicionamos o seguinte comando, para previnir esse evento padrão;

```js
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado!');
    };
```

Agora não perdemos o console que foi adicionado;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-19%2021-11-30.png)

Essa é uma maneira de evitar que o formulário seja enviado pelo comportamento padrão.

Outra maneira de resolver o problema é utilizar o eventListener, que básicamente adiciona um escutador de eventos ao meu formulário.

```js
// Trata-se de um método e colocamos qual evento queremos escutar
form.addEventListener('submit');
```

E adicionamos o evento que queremos escutar, no caso o evento de submit.

<u>***Quando utilizamos as funções para escutar um evento, precisamos adicionar o on para o evento que queremos escutar, por exemplo, onsubmit, onclick, etc... quando usamos o método como no exemplo acima, colocamos apenas o nome do escutador entre aspas simples.***</u>

E esse submit deve receber uma função.

Para isso criamos uma função "recebeEventoForm" que irá receber esta função e irá executar o que estiver dentro dela;

```js
    // Conta quantas vezes o evento foi ativado
    let contador = 1;
    // função que recebe o evento de clicle no enviar
    function recebeEventoForm (evento) {
        // Evita que o formulário seja enviado como comportamento padrão
        evento.preventDefault();
        console.log(`Form não foi enviado. ${contador}`);
        // Conta as vezes que o form teria sido enviado
        contador++;
    }
```

Assim garântimos que o formulário não seja enviado.

Após isso, conseguimos adicionar outra funcionalidade, e ao invés de apenas não enviar o formulário, devemos também capturar os dados que foram preenchidos nos inputs.

Precisamos capturar o valor de;

* nome;

* sobrenome;

* peso;

* altura.

Então agora precisamos pegar cada campo do formulário que será preenchido através dos input, utilizando as classes para pegar cada um deles;

Sabemos que estamos selecionando o formulário através de document;

```js
const form = document.querySelector('form');
```

Pois sabemos que o formulário está dentro do documento, na verdade está dentro do body do documento, mas nesse caso precisamos selecionar um input que está dentro do formulário, poderiámos utilizar o document para selecionar, mas se queremos diminuir o local onde queremos fazer a pesquisa, pesquisar em local menor, pois sabemos que ele está ali, então ao invés de document utilizaremos o form.

Ou seja, estamos buscando o que está dentro do form especifico, e não o que está dentro do corpo do html.

Então pegamos através do querySelector passando o nome da classe correspondente;

```js
const nome = form.querySelector('.nome');
```

Então fazemos isso para todos os elementos input;

```js
const nome = form.querySelector('.nome');
const sobrenome = form.querySelector('.sobrenome');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');


console.log(nome, sobrenome, peso, altura);
```

Damos um console.log para ver o que estamos selecionando;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-19%2022-53-23.png)

Aqui conseguimos ver o que foi selecionado, todos os campos do input.

Mas o que estamos querendo é trazer o valor dos input, e para isso podemos apenas adicionar .value na frente do nome da variável que está no console;

```js
console.log(nome.value, sobrenome, peso, altura);
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-19%2022-57-13.png)

Podemos agora criar uma div no html para conter o resultado disso tudo, que é onde colocaremos os textos de resultado;

```html
    <div class="resultado">

    </div>
```

Selecionamos ela no javascript;

```js
const resultado = document.querySelector('.resultado');
```

Também precisamos salvar esse resultado dentro de array, para que cada vez que enviar-mos o form, um novo elemento será adicionado.

Então logo abaixo de resultado, criamos o array vazio, pois quem irá preencher esse array será o envio do form da aplicação;

```js
const pessoas = [];
```

Sabendo que para pegar o valor que a pessoa digitou no input usamos o .value, o que precisamos fazer é criar um objeto, e colocar dentro do array.

## 

## Resultado

Primeiramente o resultado que foi feito para o exercício proposto, segue o código e o resultado no html;

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio funções, arrays e objetos</title>
</head>
<body>
    <form class="form" action="" method="get">
        <p>Nome: <input type="text" class="nome"></p>
        <p>Sobrenome: <input type="text" class="sobrenome"></p>
        <p>Peso: <input type="text" class="peso"></p>
        <p>Altura: <input type="text" class="altura"></p>
        <button>Enviar</button>
    </form>

    <div class="resultado">

    </div>

    <script src="js/script.js"></script>
</body>
</html>
```

```js
function meuEscopo () {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    const objPessoa = [];
    // console.log(objPessoa);

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        objPessoa.push(pessoas);
        console.log(objPessoa);

        resultado.innerHTML += `<p>${pessoas.nome + ' ' + pessoas.sobrenome + ' ' + pessoas.peso + ' ' + pessoas.altura}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-24%2013-29-13.png)

## Solução professor

```js
// Solução professor
        objPessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
```

Criamos o array objPessoa diretamente durante a criação do objeto, jogando diretamente os dados dentro do array através do push().

E assim temos um item por índice do array.

Outra coisa diferente foi na interpolação, que o professor colocou várias interpolações separadas individuais ao invés de uma só com o uso do + como foi feito.

```js
resultado.innerHTML += `<p>
    ${nome.value}
    ${sobrenome.value} 
    ${peso.value}
    ${altura.value}
</p>`
```
