# Aula 47 - Exercício - Criando um timer com setInterval

    Nesta aula criaremos um timer;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-16%2019-43-26.png)

   

* Abrimos o js;

* Abrimos o html;

* Abrimos o css.

* Colocamos o h1, titulo timer;

* Colocamos um parâgrafo para ser o relógio;



    No parágrafo colocamos uma classe, ou id, para seleciona-lo posteriormente.

    E outro parágrafo para os botões;



    Estilizamos os botões com css.

    

    Pegamos os eventos de click dos botões no js;



* Primeiro selecionamos eles no js;

```js
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
```



    Similar ao evento que usamos no formulário, podemos pegar o evento de click no botão;

```js
iniciar.addEventListener('click', function(e) {
    alert('Cliquei em iniciar');
})
```

    Neste exemplo ele apenas mostra uma mensagem quando o botão de iniciar é clicado.

    Podemos fazer para todos os botões;

```js
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e) {
    alert('Cliquei em iniciar');
})

pausar.addEventListener('click', function(e) {
    alert('Cliquei em pausar');
})

zerar.addEventListener('click', function(e) {
    alert('Cliquei em zerar');
})
```

    Agora baseado nos cliques podemos manipular o relógio.



    Podemos no lugar do timer exibir uma mensagem quando o botão iniciar for clicado;

```js
iniciar.addEventListener('click', function(e) {
    relogio.innerHTML = `Cliquei no iniciar`
})
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-16%2020-06-42.png)







## Solução

    Primeira coisa que devemos fazer é ter alguma coisa que irá configurar a hora.

    Para isso nos basearemos na data inicial unix, de 1970.

    Podemos pegar essa data e ir iterando sobre ela.

    Usamos o setInterval para iterar os valores do segundos.



    Então criamos uma função que irá receber um valor para segundos, e irá conveter para uma data, retornando uma data.

    E usamos o LocaleToString para fazer a converção da data.

    Encontramos alguns problemas, como por exemplo, o js quando recebe os segundos, ele recebe em milésimos de segundos, então precisamos fazer a conversão.

```js
function getSecondsHour (second) {
    const data = new Date(second * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(getSecondsHour(10));
```

    Com essa correção temos os segundos.

    Porém ele leva em consideração o timezone, e pega a hora do sistema, não iniciando em 00 horas como precisamos.

```js
function getSecondsHour (second) {
    const tresHoras = 60 * 60 * 3 * 1000;

    const data = new Date((second * 1000) + tresHoras);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(getSecondsHour(10));
```

    Podemos fazer assim, adicionar tres horas ao Date.



    Ou mudar o timeZone para GMT ou o UTC;

```js
function getSecondsHour (second) {
    const tresHoras = 60 * 60 * 3 * 1000;

    const data = new Date(second * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

console.log(getSecondsHour(10));
```

    Agora precisamos iniciar o rélogio, quando clicar no iniciar, mas ainda precisamos de uma variável que ira iterar os segundos, para que o timer funcione;

    Criamos a variável para os segundos e em seguida criamos a função que irá iniciar o relógio.

```js
function iniciarRelogio() {
    const timer = setInterval(function() {
        segundos++
        relogio.innerHTML = getSecondsHour(segundos);
    }, 1000)
}
```

    Função para iniciar o relógio.



    Para parar o relógio criamos uma variável timer, no escopo globar, e usamos ela dentro da função iniciar relógio, assim podemos ter acesso a ela fora da função.

    Então usamos o setTimeOut para parar a execução do relógio;

```js
pausar.addEventListener('click', function(e) {
    clearInterval(timer);
})
```

    A cada vez que pausamos o relógio, o timer se mantém, pois quem está manipulando é a variável segundos, que a cada iteração acrescenta um valor, e se mantém, pois não estamos criando ela novamente e sim auterando o estado atual dela.

    Para zerar usamos o clearInterval, que ira pausar o timer automáticamente;

```js
zerar.addEventListener('click', function(e) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})
```

    E também zeramos a variável de segundos, para que o relógio inicie do zero.

    

    Adicionamos um clearInterval no iniciar relógio, para que sempre que inicie um contador novo ele zere qualquer um que já esteja rodando.



    Após isso adicionamos a classe que irá deixar o relógio vermelho quando clicamos em pausar;

```js
relogio.classList.add('pausado');
```



    Podemos fazer uma alteração para que não precisemos ter vários addEventListener no sistema, o que poderia tornar o programa lento, usando muito recurso do computador.

    Para isso usamos apenas um add no document, usando o target, que irá reconhecer onde estamos clicando;

```js
document.addEventListener('click', function(e) {
    if(e.target === iniciar) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciarRelogio();
    }
    
})
```

    Aqui irá reconhecer que estamos clicando no iniciar, e executará a função.

* Professor preferiu criar uma variável para conter o e.target, e assim usar essa variável, que seria o elemento em si.

* Pegamos pela classe, por exemplo, se o elemento que estamos tem a classe iniciar o código dentro do if será executado.

```js
document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciarRelogio();
    }
})
```



    E podemos fazer isso com todos os botões;

```js
document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciarRelogio();
    }

    if(el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado');
    }

    if(el.classList.contains('zerar')) {
        clearInterval(timer)
        // relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }  
})
```

    E assim com apenas um clique conseguimos capturar todos os elementos.

    Também não precisamos mais selecionar os botões, pois agora estamos pegando direto dentro do document, usando o e.target.

    Podemos também envolver esse relógio em uma função, para que não atrapalhe o escopo global;


