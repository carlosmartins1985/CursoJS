# Aula 4 - Comentários em js



Iniciamos criando a pasta aula 4 dentro da seção 2.

Criamos um arquivo chamado comentários.js.

Comentários são trechos de código ignorados pelo motor javascript.

- Comentários em uma linha usamos //, duas barras.

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
```

- Podemos ter várias linhas de código com comentários;

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

- Comentário em bloco

```js
/*
    Comentários em bloco
    para várias
    linhas.
*/

console.log("2");
console.log("3");
console.log("4");
```

Comentários em bloco são muito utilizados em documentações, indicando seus autores, funcionalidades etc...

- Podemos usar o comentário para impedir que um trecho de código seja executado;

```js
```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
// console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

```js
* E podemos usar os comentários de bloco para impedir que trechos inteiros de código não sejam executados;

```js
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
/* console.log("2");
console.log("3");
console.log("4");
*/

console.log("3");

// Comentário ignorado
```
