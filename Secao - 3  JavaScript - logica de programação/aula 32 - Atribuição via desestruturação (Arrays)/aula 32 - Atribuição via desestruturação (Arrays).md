# Aula 32 - Atribuição via desestruturação (Arrays)



Lembrando do exercício de inverter as variáveis, onde;

```js
let a = 'A'; // Recebe B
let b = 'B'; // Recebe C
let c = 'C'; // Recebe A

[a, b, c] = [1, 2, 3]

console.log(a, b, c);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1 2 3

[Done] exited with code=0 in 0.301 seconds
```

Poderíamos resolver criando um array com essas variáveis, e atribuir os valores dessa maneira, onde;

```js
// Desestruturação            O array em si
[a, b, c]           =         [1, 2, 3]
```

E assim temos a atribuição via desestruturação, onde na esquerda temos a criação das variáveis a, b, e c, porém como elas já foram criadas, estamos reatribuindo seus valores.

Podemos inclusive criar uma variável que irá conter o array, a atribuilo as variáveis a esquerda;

```js
let a = 'A'; // Recebe B
let b = 'B'; // Recebe C
let c = 'C'; // Recebe A

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);
```

Teremos o mesmo resultado, onde para cada índice do array estaremos atribuindo o valor de uma variável.



Podemos então reatribuir os valores das variáveis, invertendo seus valores;

```js
let a = 'A'; // Recebe B
let b = 'B'; // Recebe C
let c = 'C'; // Recebe A

const letras = [b, c, a];

// const numeros = [1, 2, 3];
[a, b, c] = letras;

console.log(a, b, c);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
B C A

[Done] exited with code=0 in 0.172 seconds
```

Assim invertemos os valores sem precisar de uma variável temporária.



Podemos então criar um array de números, e atribuir cada índice desse array a uma variável;

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiroNumero = numeros[0];

console.log(primeiroNumero);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1

[Done] exited with code=0 in 0.118 seconds
```

Se quisessemos atribuir cada índice a uma variável, teríamos que criar, neste caso, oito variáveis para conter os índices.

Porém podemos utilizar a atribuição via desestruturação para essa tarefa, podemos arrancar coisas do array e já jogar dentro de uma variável usando essa sintaxe.

* Atribuições feitas com const, serão todas const;

* Atribuições feitas com let, serão todas let;

Podemos criar uma variável de desetruturação que irá conter os valores dos índices do array;

```js
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero] = numeros;
// const primeiroNumero = numeros[0];

console.log(primeiroNumero, segundoNumero);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1000 2000

[Done] exited with code=0 in 0.136 seconds
```

Assim criamos apenas uma variável de desestruturação, que irá conter todos os índices que adicionarmos.

Podemos também pegar esse resto do array usando o operador de ... três pontos, podemos atribui-lo a uma variável e exibi-lo com o log;

```js
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const primeiroNumero = numeros[0];

console.log(primeiroNumero, segundoNumero);
console.log(resto);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1000 2000
[
  3000, 4000,
  5000, 6000,
  7000, 8000,
  9000
]
```

Nos retorna o resto do array, isso é chamado de rest.

Se pegarmo o valor do índice 3000 e atribuir-mos, ele retira do rest, joga para a variável, e o resto inicia em 4000, em diante;

```js
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// const primeiroNumero = numeros[0];

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
```

Saída;    

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1000 2000 3000
[ 4000, 5000, 6000, 7000, 8000, 9000 ]

[Done] exited with code=0 in 0.112 seconds
```

Esse operador (...), quando usado neste sentido, de pegar o resto de alguma coisa, ele chama rest operator, já quando está no sentido de espalhar, distribuir, ele chama spread operator.

È o mesmo operador, só muda o contexto.



Podemos ter espaços vázios para pular valores que não queremos;

```js
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , quatro, , sete] = numeros;
console.log(um, tres, quatro);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
1000 3000 5000

[Done] exited with code=0 in 0.218 seconds
```



Podemos também ter arrays dentro de arrys, por exemplo;

```js
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
```

Onde dentro do array números teremos como se fosse 3 elementos, 3 listas dentro do array números, cada um com seus índices individuais.

Por exemplo se quiser-mos acessar o número 6, que está dentro do elemento array, que está no índice 1, teríamos que acessar o índice [1] do array números, e o índice [2] do array  de índice [1];

```js
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log(numeros[1] [2]);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
6

[Done] exited with code=0 in 0.258 seconds
```

Teremos uma complexidade para acessar esses índices sem a atribuição por desestruturação, onde;

```js
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [, [, , seis]] = numeros
console.log(seis);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
6

[Done] exited with code=0 in 0.232 seconds
```

Assim precisamos criar o array principal, e como o que queremos também está dentro de um array, criamos outros colchetes, e dentro deste, contamos os espaços que precisam ficar vazios para chegar ao número que precisamos.



Porém, usando a atribuição por desestruturação, podemos criar variáveis que irão conter esses arrays, irão representar esses arrays, e acessa-los de uma maneira bem mais fácil.

Aqui ele pega os arrays como sendo elementos;

```js
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const [lista1, lista2, lista3] = numeros

console.log(lista2[2]);
```



Então, tendo os arrays, agora nominados como lista1, lista2 e lista3, podemos pegar os  índices destes arrays de uma maneira mais fácil, apenas colocando os colchetes, e o índice que queremos exibir.

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 32 - Atribuição via desestruturação (Arrays)/index.js"
6

[Done] exited with code=0 in 0.281 seconds
```






