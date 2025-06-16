# Aula 46 - setInterval e setTimeout



    Tratam-se de duas funções que estam disponíveis tanto no node quanto no vavegador, e que são usadas para controlar timers.

    Usamos a função criada na aula passada como exemplo;

```js
function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(mostrarHora());
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 46 - setInterval e setTimeout/assets/js/tempCodeRunnerFile.js"
19:10:24

[Done] exited with code=0 in 0.261 seconds
```



    Podemos usar a função setInterval, que vai configurar um intervalo de tempo para que alguma função seja executada.

    Precisamos criar uma outra função, que irá receber a função mostraHora;

```js
function funcaoDoInterval() {
    console.log(mostrarHora());
    
}
```

    Ou seja, a função funcaoDoInterval(), chama a função mostraHora.

    Então passamos uma refêrencia no primeiro parâmetro da serInterval para a função que queremos que seja executada de tempos em tempos.

    Queremos que essa função seja executada pelo setInterval.

    Então passamos essa função como referência, sem o uso dos parênteses;

```js
function funcaoDoInterval() {
    console.log(mostrarHora());
}


setInterval(funcaoDoInterval);
```

    No segundo parâmetro passamos de quanto em quanto tempo queremos que isso seja executado, devemos passar o valor em milisegundos para esse caso específico;

```js
function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDoInterval() {
    console.log(mostrarHora());
}


setInterval(funcaoDoInterval, 1000);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 46 - setInterval e setTimeout/assets/js/main.js"
19:20:00
19:20:01
19:20:02
19:20:03
19:20:04
19:20:05
19:20:06
19:20:07
19:20:08
19:20:09
19:20:10
19:20:11
```

    Podemos também usar uma função anônima para resolver este problema;

```js
function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}


setInterval(function () {
    console.log(mostrarHora());
}, 1000);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 46 - setInterval e setTimeout/assets/js/main.js"
19:23:07
19:23:08
19:23:09
19:23:10
19:23:11

[Done] exited with code=null in 5.187 seconds
```

    Podemos também ter essa função dentro de uma variável;

```js
let timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);
```



    Podemos usar uma outra função para parar o timer, intorromper a execução do timer, que é a setTimeOut, que irá dar um stop na função timer de acordo com o parâmetro passado para ela;

```js
function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer)
}, 10000);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 46 - setInterval e setTimeout/assets/js/tempCodeRunnerFile.js"
19:30:45
19:30:46
19:30:47
19:30:48
19:30:49
19:30:50
19:30:51
19:30:52
19:30:53

[Done] exited with code=0 in 10.062 seconds
```

    Essa é a função setTimeOut, que só é executada uma vez, e usamos ela para parar a execução da outra função.



    Podemos usar essa função para outras coisas, como por exemplo, exibir uma mensagem na tela;

    Aqui ela executa por três segundos a mensagem, e cai na outra execução;

```js
function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer)
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000)
```

```bash

```
