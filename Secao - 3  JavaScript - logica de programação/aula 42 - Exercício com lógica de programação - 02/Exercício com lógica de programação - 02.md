# Exercício com lógica de programação - 02



    Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura, de uma imagem (number).

    Retorne true se a imagem estiver no modo paisagem.



## Minha solução

```js
function ePaisagem (largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1000, 5000));
```

    Usei um return direto, dentro da função.



## Solução professor

    A principio usou a operaçã ternária;

```js
function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem(1500, 200));
```

    Porém desta forma estamos checando uma coisa que já vai retornar true ou false, então em teoria não precisaríamos colocar nem true e nem false, só precisamos retornar a nossa condição;

```js
function ePaisagem (largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1000, 5000));
```

    Assim já retorna ou true ou false.

    Essa solução não avalia se uma imagem é quadrada, se for necessário, devemos adicionar um =, igual a checagem, assim sendo de mesmo tamanho, tanto largura quanto altura;

```js
function ePaisagem (largura, altura) {
    return largura >= altura;
}
console.log(ePaisagem(1920, 1920));
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/Aula 41 - Exercício com lógica de programação - 01/Exercicio 02/assets/js/main.js"
true

[Done] exited with code=0 in 0.139 seconds
```

    Isso resolvido iremos refatorar para arrow function;

```js
const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1080));
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/Aula 41 - Exercício com lógica de programação - 01/Exercicio 02/assets/js/main.js"
true

[Done] exited with code=0 in 0.156 seconds
```

E assim está resolvido o problema.
