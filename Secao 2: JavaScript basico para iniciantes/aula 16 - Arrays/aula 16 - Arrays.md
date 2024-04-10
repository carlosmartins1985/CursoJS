# Aula 16 - Arrays

Podemos imaginar um array como sendo uma lista, uma coleção de coisas

Por exemplo, possuímos strings, onde podemos colocar um texto.

Mas imagine que precisamos colocar dentro de uma variável uma lista de nomes de alunos, ficaría estranho se apenas criassemos uma string com vários nomes nela, existiria a lista, porém não teriamos divisão, não podemos por exemplo, acessar o Luis, acessar a Maria, alterar o nome da Maria;

```js
const alunos = 'Maria Luiz Carlos'
```

Até podemos, mas é bem mais complexo.

Para criar um Array no javascript utilizamos os colchetes, e dentro dos colchetes colocamos qualquer coisa que quisermos, separado por virgula.

Então se quisermos criar uma lista com nomes de alunos podemos fazer da seguinte maneira;

```js
const alunos = ['Luiz', 'Maria', 'Eduardo']
```

Então neste momento temos um array, que é uma coleção de coisas.

<u>***Tentaremos fazer os arrays de forma organizada, colocando apenas um tipo de dado em cada array, se são só nomes colocaremos somente nomes.**</u>*

O javascript não nos restringe o tipo de dados que podemos colocar dentro dos arrays, podendo ser strings, numbers, booleans, null,etc..

```js
const alunos = ['Luiz', 'Maria', 'Eduardo', 1, 2, true, null]
console.log(alunos);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 1, 2, true, null ]

[Done] exited with code=0 in 0.154 seconds
```

Podemos colocar funções que irá funcionar do mesmo jeito.Da mesma forma que as strings, os arrays também são indexados, ou seja, tem índices que podemos acessar individualmente, porém são diferentes, pois não são indexados pelo seu valor como as strings, eles são indexados por elemento.

Se quisermos acessar o nome Eduardo, colocamos o nome da variável seguido de colchetes e o índice do nome que queremos pegar.

```js
// Arrays são indexados por elementos
//      índices    0       1          2 
const alunos = ['Luiz', 'Maria', 'Eduardo']
console.log(alunos[2]);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
Eduardo

[Done] exited with code=0 in 0.2 seconds
```

*Assim podemos acessar cada índice separado.*

Podemos exibir cada um deles separado, e também o array completo;

```js
const alunos = ['Luiz', 'Maria', 'Eduardo']
console.log(alunos[2]);
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
Eduardo
[ 'Luiz', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.247 seconds
```



<u>***Editar um array***</u>

Podemos editar um array da seguinte maneira;

```js
const alunos = ['Luiz', 'Maria', 'Eduardo']

// Editar um array
alunos[0] = 'Ricardo';
console.log(alunos[0]);

console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
Ricardo
[ 'Ricardo', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.274 seconds
```

No primeiro array tinhamos Luiz, Maria e Eduardo, já na saída, como alteramos o índice 0 do array, ele retorna com o novo nome, no caso Ricardo.



*<u>**Adicionar elementos ao array**</u>*

Podemos adicionar elemetos ao array da seguinte maneira;

```js
alunos[3] = 'Monica';
console.log(alunos);


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 'Monica' ]

[Done] exited with code=0 in 0.232 seconds
```

Se adiconar-mos em um índice que já existe, ele altera o índice para o valor que adicionarmos.



<u>***Tamanho do array***</u>

Para saber o tamanho do array usamos o seguinte;

```js
// Descobrir o tamanho do array
console.log(alunos.length);


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
4

[Done] exited with code=0 in 0.212 seconds
```

Sabendo como podemos ter o tamanho do array podemos adiconar elementos de uma forma automática e mais confiável;

```js
alunos[alunos.length] = 'Marcos';
alunos[alunos.length] = 'Silmara';
alunos[alunos.length] = 'Matilde';
alunos[alunos.length] = 'Claudio';
console.log(alunos);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[
  'Luiz',    'Maria',
  'Eduardo', 'Marcos',
  'Silmara', 'Matilde',
  'Claudio'
]
```

Em cada linha o array adiciona um elemento e altera o índice, aumentando de forma automática o tamanho do array, e sempre irá adicionando ao final do array.

Porém temos uma função que faz exatamente isso, que adiciona um elemento ao finar do array sem precisarmos saber o tamanho dele nem nada disso, que é a função .push(), passando o elemento como parâmetro da função;

```js
alunos.push('Miranda');
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 'Miranda' ]

[Done] exited with code=0 in 0.143 seconds
```

Podemos adicionar quantos elementos forem necessários;

```js
alunos.push('Miranda');
alunos.push('Carla');
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 'Miranda', 'Carla' ]

[Done] exited with code=0 in 0.22 seconds
```



***<u>Função unshift()</u>***

Podemos porém querer adicionar no inicio do array, o que é mais complicado, pois implica em mover todos os outros elementos para frente, para isso podemos utilizar a função unshift();

```js
alunos.unshift('Lacraio');
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Lacraio', 'Luiz', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.236 seconds
```

Podemos adicionar vários elementos, mas ele sempre colocará no indice 0 o último que foi declarado;

```js
alunos.unshift('Lacraio');
alunos.unshift('Muso');
alunos.unshift('Italiano');
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Italiano', 'Muso', 'Lacraio', 'Luiz', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.239 seconds
```

Ele empurra o elemento e adiciona o novo elemento no índice dele.

Isso pode tornar o código lento, pois sempre terá que mover vários elementos de lugar.



***<u>Função pop(); remover elementos do final do array</u>***

Para remover o último elemento do array podemos utilizar a função pop();

```js
console.log(alunos);
alunos.pop();
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ]
[ 'Luiz', 'Maria' ]

[Done] exited with code=0 in 0.244 seconds
```

Podemos também salvar o elemento que estamos removendo em uma variável, então podemos ter o array completo, o elemento que foi removido e o array sem o elemento que foi removido;

```js
console.log(alunos);
const removido = alunos.pop();
console.log(removido);
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ] // Array completo
Eduardo // Elemento removido
[ 'Luiz', 'Maria' ] // Array sem o elemento removido

[Done] exited with code=0 in 0.18 seconds
```



***<u>Função shift() remove do começo</u>***

```js
console.log(alunos);
const removido = alunos.shift();
console.log(removido);
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ]
Luiz
[ 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.206 seconds
```

Neste caso ele removeu o Luiz que era o primeiro elemento.

E tudo isso acaba alterando os índices dos elementos.

Por exemplo, quando deletamos o Luiz que estava no índice 0, a Maria passa a ocupar este índice.

<mark>No caso do pop(), ele remove tanto o índice quanto o elemento do final do array.</mark>



<u>***Delete***</u>

Se quisermos remover o conteúdo de um elemento do array (e não queremos que os índices sejão alterados), podemos utilizar o delete, passando o índice que queremos excluir, então apenas o seu conteúdo será excluido, e não o índice todo.

```js
console.log(alunos);
delete alunos[1];
console.log(alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ]
[ 'Luiz', <1 empty item>, 'Eduardo' ]

[Done] exited with code=0 in 0.186 seconds
```

Ele retorna um elemento vazio no lugar onde foi deletado o conteúdo do índice.

Tentando acessar o índice que foi deletado teremos um undefined;

```js
console.log(alunos);
delete alunos[1];
console.log(alunos);
console.log(alunos[1]);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ]
[ 'Luiz', <1 empty item>, 'Eduardo' ]
undefined

[Done] exited with code=0 in 0.21 seconds
```

Podemos acessar um índice que não existe, ele retorna um valor padrão para coisas que não existem que é o undefined;

```js
console.log(alunos[50]);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
undefined

[Done] exited with code=0 in 0.203 seconds
```

Ou seja, ele não retorna um erro, nem nada, apenas retorna undefined.



***<u>slice()</u>***

Suponhamos que precisamos fatiar esse array, podemos utilizar o método slice(), que é o mesmo que usamos nas strings;

```js
alunos.push('Camila');
alunos.push('Renata');
console.log(alunos.slice(0, 3));


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.216 seconds
```

Para incluir o elemento 2 precisamos cortar até o elemento 3, do contrário não será incluído, sempre o último elemento não é incluido.

Podemos também fatiar usando negativos, então ele irá usar o tamanho do array menos o valor negativo;

```js
alunos.push('Camila');
alunos.push('Renata');
console.log(alunos);
console.log(alunos.slice(0, -1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 'Camila', 'Renata' ]
[ 'Luiz', 'Maria', 'Eduardo', 'Camila' ]

[Done] exited with code=0 in 0.291 seconds
```

Aqui ele pega o total do array e fatia do 0 ao  -1, ou seja, elimina o último elemento do array.

Para eliminar os dois últimos elementos podemos utilizar o -2;

```js
alunos.push('Camila');
alunos.push('Renata');
console.log(alunos);
// console.log(alunos.slice(0, -1));
console.log(alunos.slice(0, -2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
[ 'Luiz', 'Maria', 'Eduardo', 'Camila', 'Renata' ]
[ 'Luiz', 'Maria', 'Eduardo' ]

[Done] exited with code=0 in 0.26 seconds
```



<u>***TypeOf***</u>

Se utilizar-mos o typeOf no array ele não irá retornar um array própriamente dito, mas um object, isso porque o array é considerado um objeto;

```js
console.log(typeof alunos);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
object

[Done] exited with code=0 in 0.217 seconds
```

Isso acontece porque realmente o array é um objeto indexado. 

A diferênça é que o array é indexado automáticamente.



***<u>instanceof</u>***

Se quisermos ter certeza de que estamos trabalhando com um array, podemos utilizar o seguinte código para "perguntar" se estamos trabalhando com um array;

```js
console.log(alunos instanceof Array);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
true

[Done] exited with code=0 in 0.2 seconds
```

Se for um array irá retornar true.

Podemos testar esse retorno alterando o tipo para number;

```js
let alunos = ['Luiz', 'Maria', 'Eduardo']
alunos = 123;
console.log(alunos instanceof Array);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 16 - Arrays/index.js"
false

[Done] exited with code=0 in 0.265 seconds
```

<mark>O tipo pode ser mudado em tempo de execução do programa.</mark>



Sobre arrays:

* ***<u>Sempre que tivermos um elemento que foi criado utilizando os colchetes, é um array [array].</u>***

* ***<u>Dentro deles podemos colocar qualquer tipo de dados que precisar-mos, strings, números, funções;</u>***

* ***<u>Os elementos dentro de um array são indexados, começando no 0, zero e posteriormente;</u>***

* ***<u>Podemos criar/alterar um elemento utilizando os colchetes;</u>***

* ***<u>Para adicionar podemos utilizar o push() ou o unshift;</u>***

* ***<u>Na grande maioria dos casos adicionaremos elementos no final do array, para evitar de ficar reorganizando os elementos e perder performace.</u>***
