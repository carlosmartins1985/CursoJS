# Exercício resolvido

Poderíamos criar uma função escopo, para não poluir o doc, porém como se trata de um exercício mais básico faremos direto no escopo principal.

Em ordem, primeiro precisamos capiturar o evento de submit do formulário com um funçã especifica;

* Podemos criar um formulário com uma classe form da seguinte maneira;

```js
form.form

<form action="" class="form"></form>
```

* Podemos pôr method e action no form, mas não fará diferênça pois este form não será enviado nenhum lugar;

* Criamos o form com o label correspôndente;

```html
<section class="container">
        <h1>Lorem ipsum dolor sit, amet</h1>

        <form action="" id="formulario">
            <label for="peso" >Peso</label>
            <input type="text" id="peso" name="peso">

            <label for="altura" >Altura</label>
            <input type="text" id="altura" name="altura">
            <button type="submit">Calcular</button>
        </form>
    </section>
```

* Iremos selecionar o form através do id;

```js
const form = document.querySelector('#formulario');

function recebeEventoForm (evento) {
    evento.preventDefault();
}
form.addEventListener('submit', recebeEventoForm);
```

Pode parecer confuso ter o mesmo nome da tag no id de seleção, por isso mudamos o id do form para formulario;

Diferêntemente do código anterior, neste usaremos uma função anônima para implementar o preventDefault, para que o form não seja enviado;

Então criamos a função anônima dentro do parâmetro do addEventListener(Aqui), e como parâmetro desta funçã passamos o evento, no caso nós colocamos apenas o e, que é o mesmo que evento;

```js
const form = document.querySelector('#formulario');

document.addEventListener('submit', function(e) {
    e.preventDefault();
})
```

E usamos o e.preventDefault para impedir que o formulário seja enviado.

Podemos colocar um log com a mensagem 'Evento previnido', para ter certeza de que está funcionando;

```js
const form = document.querySelector('#formulario');

document.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido.');
})
```

Agora iremos fazer várias pequenas funções que resolvem pequenos problemas.

Em um código real, precisaremos fazer uma função para cada coisa feita no código.

* Criamos uma div para conter o resultado;

```html
<div id="resultado"></div>
```

Primeiramente criamos uma função que irá enviar o resultado para a div no html;

```js
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}
```

Essa function tem a const resultado, que receberá o document.queryselector, com o id resultado, e cada vez que for chamada ela irá enviar a mensagem que está como parâmetro para a div no html, ou seja, a especialidade desta funçã é colocar o texto dentro da div html.

<mark>As funções irão dentro da função EventListener.</mark>

Porém mudaremos algumas coisas, por exemplo, ao invés de criar um parágrafo com innerhtml, e colocar dentro da div, como fizemos nas aulas anteriores, iremos aprender como criar um elemento em javascript.

Então criamos uma constante que irá criar esse elemento;

```js
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    // Deixa o html vazio
    resultado.innerHTML = '';
    // Cria um elemento paragrafo
    const p = document.createElement('p');
    p.innerHTML = 'Mensagem';
    resultado.appendChild(p);
}
```

Nesta função;

* Pegamos o elemento do html, a div resultado através de seu id;

* Deixamos essa div vazia;

* Criamos uma const p, que irá criar um elemento paragráfo;

* Com o p.innerHTML, adicionamos uma frase a esse parágrafo recém criado;

* Por fim, adicionamos esse parágrafo ao doc html usando a const resultado, sendo, resultado.appendChild, passando p como parâmetro.

* A mensagem será mostrada dentro da div, no html, pois trata-se de um parágrafo criado com javascript.

* Podemos também criar uma classe para esse parágrafo, usando o atriburo classList.add;

```js
p.classList.add('paragrafo-resultado');
```

E assim conseguimos adicionar uma classe ao elemento através do js.

Podemos estilizar essa classe da maneira que quisermos, por exemplo, criamos uma classe de resultado sucesso, que terá o fundo verde;

```css
.paragrafo-resultado {
    background-color: rgb(109, 255, 182);
    padding: 10px 20px;
}
```

E através do classList conseguimos adicionar essa classe ao elemento.

Podemos posteriormente, criar outra classe de erro, com um fundo vermelho, para adicionar ao elemento quando algo não estiver de acordo.

***<u>Função para criar parágrafos</u>***

```js
function criaP (){
    const p = document.createElement('p');
    return p;
}
```

Esta função é especifica para criar o parágrafo, ou seja, cria o elemento parágrafo.

***<u>Pegando os dados do input</u>***

Agora criamos, dentro do preventDefault, as constantes que irão pegar os valores de peso e altura.

* Podemos tanto usar o document, quanto o form;

* E sabendo que esse evento está vindo do form, podemos utilizar tanto o form quanto o e.target, ou seja, de quem está vindo este evento.

* Neste caso usaremos o target, que pega exatamente o elemento que está recebendo o evento, se é um clique de mouse, ele diz qual elemento foi clicado na página.

```js
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');
```

Assim pegamos os valores dos elementos de uma forma diferênte.

* O (e) referência o form, target referência de quem estamos selecionando, que será encontrado através do id="altura".

* Posteriormente criamos as constantes que irão pegar os valores digitados dentro dos inputs, pois no passo anterior pegamos pegamos apenas os inputs inteiros, e agora pegaremos o valor digitado.

```js
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
```

Testando a saída teremos, se digitarmos números, um retorno satisfatório, porém se digitarmos letras, teremos como retorno um NaN, not a number, e isso precisamos previnir.

Sabendo que o NaN valida como false value,  podemos criar dentro da função principal  a verificação peso e altura, diretamente, usando;

```js
if(!peso) {
        setResultado('Peso invalido', false);
        return;
    }

if(!altura) {
        setResultado('Altura invalida', false);
        return;
    }
```

* Aqui pegamos o valor de peso e altura, e caso sejam diferêntes de um número, pois o NaN retorna como falso, então se pegarmos o peso e nega-lo, estaremos perguntando se no valor de peso temos uma string ao invés de um número.

* Então setamos dentro de setResultado, com dois parâmetros, a mensagem e o false, pois trata-se de um erro, e assim a classe adicionada será a que terá o fundo vermelho.

* É muito importante usarmos o return, para que a função pare de ser executada quando encontrar um erro.

* Para testar, colocamos um log, com a mensagem cheguei aqui; 

* Adicionamos o parágrafo ao resultado com appendChild;

* Adicionamos a msg ao p criado com a função criaP;

```js
if(!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    console.log('Cheguei aqui.');
```

```js
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    // Deixa o html vazio
    resultado.innerHTML = '';
    // Cria um elemento paragrafo
    const p = criaP();

    resultado.appendChild(p);
}
```

***<u>função getIMC, calcula o IMC</u>***

Criamos uma função simples que calcula o IMC, rebendo como parâmetros o peso e a altura;

```js
function getIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}
```

E retorna o IMC com duas casas decimais.

Após isso chamamos a função logo abaixo das validações de peso e altura;

```js
if(!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    console.log(imc);
```

E assim já temos o nosso IMC calculado.

***<u>função getNivelIMC</u>***

Agora criamos a funçã que irá retornar o nível do IMC recebido.

A tendência seria criar-mos vários ifs, para verificar o imc e retornar o nível, com o resultado.

Porém, iremos fazer diferente.

* Para iniciar criamos um array, que irá conter todos os resultados, as frases que iremos mostrar em cada nível;

```js
const nivel = ['Abaixo do peso', 'Peso normal',
    'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2',
    'Obesidade grau 3'];
```

* Então usamos os ifs para desviar o fluxo, e verificar cada nível, assim que o nível for encontrado, o programa para e retorna o nível correspondente;

```js
if(imc >= 39.9){
        return nivel[5];
    }

    if(imc >= 34.9){
        return nivel[4];
    }

    if(imc >= 29.9){
        return nivel[3];
    }

    if(imc >= 24.9){
        return nivel[2];
    }

    if(imc >= 18.5){
        return nivel[1];
    }

    if(imc < 18.5){
        return nivel[0];
    }
```

* Podemos usar aqui uma espertise do javascript, e como os ifs são muito curtos, podemos coloca-los em uma só linha, sem as chaves, deixando implicito que se trata do resultado da comparação;

```js
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
```

***<u>Exibindo o resultado na tela</u>***

Agora iremos exibir o resultado na tela do usuário, para isso criamos uma variável msg, que irá conter toda a string da mensagem;

```js
const msg = `O seu imc é: ${imc} (${nivelIMC}).`
```

Logo abaixo chamamos o setResultado, passando a mensagem como parâmetro, e também a flag true;

```js
setResultado(msg, true);
```

Agora precisamos alterara o setResultado, para que ele consiga mudar o fundo, o background color do resultado de acordo com o que for retornado.

* Se tudo estiver ok, o fundo será verde, e será mostrado a msg do imc;

* Caso contrário, fundo vermelho, e msg do retorno inválido.

Então logo após o p adicionamos um if que irá verificar se o retorno é true or false, então irá adicionar a classe correspôndente ao código;

```js
if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
```

Adicionará a tag p a classe correspôndente.
