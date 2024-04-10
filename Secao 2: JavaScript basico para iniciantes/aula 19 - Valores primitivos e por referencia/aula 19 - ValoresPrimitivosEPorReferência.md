# Aula 19 - Valores primitivos e por referência

Nesta aula iremos entender a diferênça entre valores primitivos e por referência.

Já vimos os tipos de dados primitivos;

**<mark>Quando falamos em tipos de dados estamos falando do valor em si.</mark>**

Nos tipos de dados primitivos(imutáveis) vimos;

* strings;

* number;

* boolean;

* undefined;

* null;

* bigint;

* symbol.

Os tipos de dados primitivos são imutáveis, isso quer dizer que não podemos mudar eles.

Podemos então analisar que estamos mudando o valor dos dados a todo momento, por exemplo;

* Criamos a variável com o dado primitivo Carlos;

* Alteramos esse valor, nome, para outro;

```js
let nome = 'Carlos';
nome = 'Diogo';
console.log(nome);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
Diogo

[Done] exited with code=0 in 0.299 seconds
```

Porém neste caso em especifico não estamos mudando o dado, o valor primitivo, estamos trocando o valor da variável, como se tivessemos uma caixa onde podemos pôr qualquer coisa, a principio colocamos um adesivo com o nome Carlos, posteriormente, retiramos esse adesivo e colocamos outro com o nome Diogo.

Podemos entender de outra maneira como a string é imutável se tentarmos, por exemplo, alterar o índice da string, como um array, ela não aceita a alteração pois trata-se de um dado imutável;

```js
let nome = 'Carlos';
nome[0] = 'M'
// nome = 'Diogo';
console.log(nome[0]);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
C

[Done] exited with code=0 in 0.212 seconds
```

\* <mark>Não podemos alterar os índices de uma string, mesmo ela sendo indexada.</mark>

Ou seja, o dado, o valor da string é imutável, não é a variável, a variável é apenas uma caixa que contém o valor, o dado, é o que está dentro da variável, dentro da caixa.

O valor em si é Carlos, neste caso.



Podemos copiar o valor de uma variável para outra;

```js
let a = 'A'
let b = a;
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
A A

[Done] exited with code=0 in 0.221 seconds
```

Quando usamos um dado primitivo neste contexto, estamos copiando o valor de a para b.

Podemos a qualquer momento alterar o valor de a, após a cópia, que b manterá o valor recebido na primeira chamada;

```js
let a = 'A'
let b = a;
console.log(a, b);

a = 'Outro valor';
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
A A
Outro valor A

[Done] exited with code=0 in 0.197 seconds
```

Então notamos que mesmo alterando o valor de a não alteramos o valor de b em nada. 



<u>***Referência (mutáveis)***</u>

Dados passados por referência geralmente são mutáveis.

São eles;

* array;

* object;

* function.

Podemos atribuir os valores de um array para outra variável, a diferênça é que não se trata-ra de uma cópia, pois os valores são passados por referência;

```js
let a = [1, 2, 3];
let b = a;

console.log(a, b);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
[ 1, 2, 3 ] [ 1, 2, 3 ]

[Done] exited with code=0 in 0.138 seconds
```

O que contece aqui é que (b) passa a apontar para o mesmo local que (a) aponta na memória.

Então (a) e (b) passam a apontar para o mesmo local na memória.

Então se alterar-mos qualquer uma das variáveis estaremos alterando as duas ao mesmo tempo, pois elas apontam para o mesmo local na memória.

Por exemplo, podemos adicionar um valor a (a), e (b) também será afetado;

```js
let a = [1, 2, 3];
let b = a;

a.push(4);

console.log(a);
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

[Done] exited with code=0 in 0.232 seconds
```

Do mesmo modo se removermos o valor a partir do (b), (a) também será afetado;

```js
b.pop();
console.log(b);
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
[ 1, 2, 3 ]
[ 1, 2, 3 ] [ 1, 2, 3 ]

[Done] exited with code=0 in 0.309 seconds
```

Notamos que ambos voltam a ter 3 elementos.



***<u>Então temos que dependendo do tipo de dado, ela poderá ser copiado, no caso de dados primitivos, ou passado por referência em dados que forem passados dessa maneira, como arrays, objetos e funções.</u>***



***<u>Quando usamos o sinal de igual(=) com dados passados por referência, estamos criando uma referência para que (b) aponte para o mesmo local que (a) na memória.</u>***

Eles apontam todos para o mesmo local na memória, podemos ter várias variáveis apontando para o mesmo local na memória;

```js
console.log(c);

a.push('Carlos');
console.log(c);


// Saída
[ 1, 2, 3 ]
[ 1, 2, 3, 'Carlos' ]
```



<u>***Copiar o valor de (a) para (b)***</u>

Podemos copiar o valor de (a) para (b) da seguinte forma;

```js
let b = [...a];

console.log(b);


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
[ 1, 2, 3 ]

[Done] exited with code=0 in 0.243 seconds
```

Desta forma estamos copiando o valor de (a) para (b), e assim (b), fica com seu valor indempendente.

E como (c) aponta para o mesmo lugar que (b) ele continuará seguindo o valor de (b);

```js
let b = [...a];

console.log(b);
console.log(b, c);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
[ 1, 2, 3 ]
[ 1, 2, 3 ] [ 1, 2, 3 ]

[Done] exited with code=0 in 0.237 seconds
```

As alterações seguirão as mesmas lógicas, se alterar-mos o valor passado por referência, irá alterar todos. 



<u>***Objeto***</u>

Podemos passar os valores por referência também com objetos;

```js
const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
};

const b = a;

console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
{ nome: 'Carlos', sobrenome: 'Martins' } { nome: 'Carlos', sobrenome: 'Martins' }

[Done] exited with code=0 in 0.25 seconds
```

Se alterar-mos algum valor em (a) também será alterado em (b);

```js
const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
};

const b = a;

a.nome ='João';
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
{ nome: 'João', sobrenome: 'Martins' } { nome: 'João', sobrenome: 'Martins' }

[Done] exited with code=0 in 0.193 seconds
```

Da mesma forma que anteriormente, (b) passa a apontar para o mesmo local da memória que (a).

Se for necessário podemos também copiar o valor de (a) para (b), tornando assim (b) indempendente de (a);

```js
const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
};

// const b = a;

// Copiando a para b
const b = {...a};

a.nome ='João';
console.log(a, b);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 19 - Valores primitivos e por referencia/index.js"
{ nome: 'João', sobrenome: 'Martins' } { nome: 'Carlos', sobrenome: 'Martins' }

[Done] exited with code=0 in 0.189 seconds
```

Aqui notamos que (a) tem seu valor alterado, mas (b) não.




