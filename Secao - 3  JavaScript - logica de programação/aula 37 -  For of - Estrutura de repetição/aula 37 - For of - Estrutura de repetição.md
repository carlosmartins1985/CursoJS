# Aula 37 - For of - Estrutura de repetição

    Nesta aula veremos o for of, que é especifico para objetos iteráveis.

Por exemplo uma string, um array.

Criamos uma  string qualquer;

```js
//            123456789...
const nome = 'Carlos Martins'
```

* Sabemos que ela tem índices, 123456789..., e que ela iterável.

Podemos usar então o for clássico para iterar sobre essa string;

```js
const nome = 'Carlos Martins';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
C
a
r
l
o
s

M
a
r
t
i
n
s

[Done] exited with code=0 in 0.144 seconds
```

Assim conseguimos acessar cada letra da string.

Podemos também usar o for in;

```js
const nome = 'Carlos Martins';

for (let i in nome){
    console.log(nome[i]); 
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
C
a
r
l
o
s

M
a
r
t
i
n
s

[Done] exited with code=0 in 0.111 seconds
```

Também temos os índices do nome.

Notamos que em ambos os fors, precisamos utilizar o índice, [i], para acessar o valor do índice.

E seria interressante conseguir pegar exatamente o valor, direto, sem usar o [ i ].

Podemos então usar o for of, que irá pegar o valor do índex, diretamente.

Apenas mudamos de in para of;

```js
const nome = 'Carlos Martins';

for ( let valor of nome){
    console.log(valor);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
C
a
r
l
o
s

M
a
r
t
i
n
s

[Done] exited with code=0 in 0.138 seconds
```

Assim conseguimos trazer todos os valores do índice do nome, ao ínves de retornar o índice, retorna o valor.

Isso porque a string é iterável, ou seja, tem índices.

Podemos testar com arrays;

```js
const nome = ['Carlos', 'Pedro', 'João']

for ( let valor of nome){
    console.log(valor);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
Carlos
Pedro
João

[Done] exited with code=0 in 0.14 seconds
```

Temos como retorno os elementos do array.

Seria o mesmo resultado que usar o nome da variável e o indice, no caso nome[ i ].

### Todas as variácões;

```js
const nome = ['Carlos', 'Pedro', 'João']

console.log('####Usando o for of');
for ( let valor of nome){
    console.log(valor);
}

console.log('####Usando o for in');
for (let i in nome){
    console.log(nome[i]); 
}

console.log('####Usando o for classico');
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/tempCodeRunnerFile.js"
####Usando o for of
Carlos
Pedro
João
####Usando o for in
Carlos
Pedro
João
####Usando o for classico
Carlos
Pedro
João

[Done] exited with code=0 in 0.104 seconds
```

Nos casos em que precisamos do índice podemos usar o for in, que também retorna o índice, nos casos onde só é necessário o valor, e não o índice, podemos usar o for of.

## forEach

Podemos também usar o for each para iterar sobre o array;

```js
const nome = ['Carlos', 'Pedro', 'João']

// Usando o for each
nome.forEach(function (valor) {
    console.log(valor);
})
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
Carlos
Pedro
João

[Done] exited with code=0 in 0.136 seconds
```

Neste caso usamos o forEach como sendo um método do array, usando o nome do array, seguido de . ponto.

O forEach recebe uma função, que recebe como parâmetro os elementos, (el), e os retorna direto dentro do log.

O elemento no caso é o valor do índex.

Podemos exibir o valor e o indice;

```js
const nome = ['Carlos', 'Pedro', 'João']

// Usando o for each
nome.forEach(function (valor, indice) {
    console.log(valor, indice);
})
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
Carlos 0
Pedro 1
João 2

[Done] exited with code=0 in 0.08 seconds
```

Assim temos o valor e o índice do array.

E podemos retornar também o array completo;

```js
const nome = ['Carlos', 'Pedro', 'João']

// Usando o for each
nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
Carlos 0 [ 'Carlos', 'Pedro', 'João' ]
Pedro 1 [ 'Carlos', 'Pedro', 'João' ]
João 2 [ 'Carlos', 'Pedro', 'João' ]

[Done] exited with code=0 in 0.08 seconds
```

Podemos utilizar qualquer um deles, dependendo da necessidade.

Para arrays, qualquer um deles irá funcionar, claro que com suas particularidades, ou seja, depende do que precisamos retornar, se somente o índice, só o valor, ou o índice e o valor.

Já para objeto, não conseguimos utilizar o for of, pois o objeto não é iterável.

Poderíamos usar o for in;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins'
}
for (let key in pessoa) {
    console.log(key); 
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
nome
sobrenome

[Done] exited with code=0 in 0.162 seconds
```

Poderíamos aqui pegar as chaves, keys;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins'
}
for (let key in pessoa) {
    console.log(key, pessoa[key]); 
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 37 -  For of - Estrutura de repetição/assets/js/main.js"
nome Carlos
sobrenome Martins

[Done] exited with code=0 in 0.125 seconds
```

E também pegar o valor, pegando o objeto pessoa, seguido da chave entre chaves,

pessoa[key].

<mark>Se tentamos usar o for of, não conseguimos, pois o objeto não é iterável.</mark>

## Resumindo;

* for classico - Geralmente com iteráveis (arrays, strings );

* for in - Retorna o índice ou chaves (string, arrays ou objetos);

* for of - Retorna o valor em si (iteráveis, arrays ou strings).
