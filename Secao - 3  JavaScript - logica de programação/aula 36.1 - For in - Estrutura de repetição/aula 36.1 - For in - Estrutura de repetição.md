# Aula 36.1 - For in - Estrutura de repetição

Trata-se de um for bem mais simples.

## Usando com array

Podemos ter um array de frutas;

```js
const frutas = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Abacaxi'];
```

* Um array que tem apenas uma dimenção, ou seja, que não é um array dentro de outro array, também chamamos de vetor.

Tendo o vetor, array, podemos iterar sobre ele usando o for;

```js
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
Banana
Laranja
Maçã
Pera
Abacaxi

[Done] exited with code=0 in 0.157 seconds
```

Essa seria a forma classica de se iterar sobre um array.

Podemos usar o for in para iterar sobre o array, da seguinte maneira;

```js
//                 0          1         2       3        4
const frutas = ['Banana', 'Laranja', 'Maçã', 'Pera', 'Abacaxi'];

for (let i in frutas) {
    console.log(i);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
0
1
2
3
4

[Done] exited with code=0 in 0.071 seconds
```

Neste caso ele lê os índices do array, e quando de se tratar de um objeto, ele lê as chaves.

Ou seja, podemos chamar esse i , de indice, e podemos usa-lo para acessar a variável frutas;

```js
const frutas = ['Banana', 'Laranja', 'Maçã', 'Pera', 'Abacaxi'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
Banana
Laranja
Maçã
Pera
Abacaxi

[Done] exited with code=0 in 0.131 seconds
```

Acessando frutas em indice, frutas[indice].

Para a variável índice, podemos na verdade, nomea-la como quisermos.

<mark>**for in lê os índices ou chaves do objeto**</mark>

## Usando com objeto

Criamos um objeto pessoa;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}

for (let key in pessoa) {
    console.log(key);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
nome
sobrenome
idade

[Done] exited with code=0 in 0.09 seconds
```

Se iterarmos sobre o i, nos retorna as chaves desse objeto.

Então modificamos i para chaves, key.

Podemos acessar o nome da pessoa, dessa maneira;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}
console.log(pessoa.nome);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
Carlos

[Done] exited with code=0 in 0.155 seconds
```

Também podemos acessar usando os colchetes, como em array;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}
console.log(pessoa.nome);
console.log(pessoa['nome']);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
Carlos
Carlos

[Done] exited with code=0 in 0.139 seconds
```

Assim usando o nome da chave, no caso, nome.

Dessa forma se torna muito útil quando não sabemos qual propriedade iremos pegar.

Podemos adicionar uma variável, que terá uma string, com conteúdo nome, e usar essa variável dentro do objeto pessoa para acessar o nome, de uma forma dinâmica;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}
const chave = 'nome';
console.log(pessoa[chave]);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
Carlos

[Done] exited with code=0 in 0.111 seconds
```

Podemos então pegar as chaves do objeto e seu valor;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 36.1 - For in - Estrutura de repetição/assets/js/main.js"
nome Carlos
sobrenome Martins
idade 39

[Done] exited with code=0 in 0.157 seconds
```

* A variável chave, pega a chave em si, nome, sobrenome, etc...;

* Depois usamos o objeto pessoa, seguido da chave, que irá pegar o valor de cada chave, ou seja, o que está dentro de nome, sobrenome, etc...

Assim podemos iterar dentro do objeto usando o for in.
