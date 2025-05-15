# Aula 34 - For - Clássico - Estrutura de repetição

Extruturas de repetição.



O primeiro que veremos é o for classico, o mais antigo.

Podemos ter o exemplo abaixo;

```js
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5

[Done] exited with code=0 in 0.156 seconds
```

Notamos que existe claramente uma repetição.

Podemos então criar uma extrutura de repetição for, segue o esqueleto da extrutura;

```js
for () {
    
}
```

Dentro do parênteses precisamos criar 3 coisas;

* Uma variável de controle;

* Criar uma condição que  irá parar o laço;

* E precisamos incrementar ou decrementar a variável de controle;



```js
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5

[Done] exited with code=0 in 0.23 seconds
```

Separamos os parâmetros por ; ponto e virgula.

* Na variável de controle, iniciamos com um valor, declarando como let.

* Seguinte precisamos de uma condição, que irá determinar quando o for irá parar, então checamos se a variável é menor ou igual a 5.

* Após isso precisamos incrementar a variável i, até que atinja o valor estipulado na condição.

O js irá executar o laço em loop, até que a condição seja avaliada como falsa, por isso precisamos fazer a variável chegar até o valor 5 no caso.

Então adiconamos i++;

Executando temos o loop incrementando os valores na variável i.

A principio cria a variável como zero, exibe, e já incrementa em 1, para o próximo loop, e assim por diante até que a variável atinja o valor de parada.

Por fim o i será avaliado como 6, indicando que é false a condição, de i ser menor ou igual a 5, sendo assim o loop para e exibe o resultado.



Poderíamos fazer vários logs, para reproduzir o mesmo resultado, mas precisamos estar atentos em não repetir o código.

E além disso, o for, controlamos apenas com a variável de controle, o que facilita muito.

Seja qual o valor que estará na variável de controle, será executado e mostrado o resultado.

```js
for (let i = 0; i <= 15; i++) {
    console.log(`Linha ${i}`);
    
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5
Linha 6
Linha 7
Linha 8
Linha 9
Linha 10
Linha 11
Linha 12
Linha 13
Linha 14
Linha 15

[Done] exited with code=0 in 0.101 seconds
```

Se o valor da variável de controle fosse 15 para parar o loop.



Podemos também decrementar o laço, começando em 10 por exemplo, até o zero, 0;

```js
for (let i = 10; i >= 0 ; i--) {
    console.log(`Linha ${i}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 10
Linha 9
Linha 8
Linha 7
Linha 6
Linha 5
Linha 4
Linha 3
Linha 2
Linha 1
Linha 0

[Done] exited with code=0 in 0.278 seconds
```

Decrementaría até o zero.



Podemos também incrementar com outros valores, por exemplo, incrementar de 10 em 10;

```js
for (let i = 100; i >= 0 ; i -= 10) {
    console.log(`Linha ${i}`);
    
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 100
Linha 90
Linha 80
Linha 70
Linha 60
Linha 50
Linha 40
Linha 30
Linha 20
Linha 10
Linha 0

[Done] exited with code=0 in 0.15 seconds
```

Podemos incrementar e decrementar esses valores



Podemos iniciar o incremento em números negativos;

```js
for (let i = -10; i <= 10; i += 10) {
    console.log(`Linha ${i}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha -10
Linha 0
Linha 10

[Done] exited with code=0 in 0.298 seconds
```

```js
for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Linha 500
Linha 490
Linha 480
Linha 470
Linha 460
Linha 450
Linha 440
Linha 430
Linha 420
Linha 410
Linha 400

[Done] exited with code=0 in 0.302 seconds
```

Podemos fazer uma checagem clássica, mostrando os números pares entre 0 e 10.

```js
for( let i = 0; i <= 10; i++){
    const par = i % 2 === 0;
    console.log(i, par);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
0 true
1 false
2 true
3 false
4 true
5 false
6 true
7 false
8 true
9 false
10 true

[Done] exited with code=0 in 0.261 seconds
```

Para os pares nos é retornado true.

Podemos usar uma operação ternária para que nos seja retornado se o número é par ou ímpar.

```js
for( let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, par);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
0 Par
1 Impar
2 Par
3 Impar
4 Par
5 Impar
6 Par
7 Impar
8 Par
9 Impar
10 Par

[Done] exited with code=0 in 0.286 seconds
```



Podemos percorrer uma array com for.

```js
const frutas = ['Maçâ', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length ; i++){
    console.log(frutas[i]);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Maçâ
Pera
Uva

[Done] exited with code=0 in 0.242 seconds
```

* O length pega o tamanho do array, e é usado como parâmetro na variável de controle.

* O length deve parar no tamanho do array, por isso deve ser <, menor, e não menor/igual ao tamanho do array.

* Se imprimirmos apenas o i, teremos 0, 1, 2 que é o tamanho do array, quantos elementos ele possui.

* Para mostrar quais são esses elementos, ou seja, seus valores, no log, colocamos frutas no índice[i], e sera exibido o valor correspondente após cada interação do loop.

Podemos, para ficar mais claro, exibir cada índice, acompanhado de seu valor;

```js
const frutas = ['Maçâ', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length ; i++){
    console.log(`Índice ${i} = ${frutas[i]}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Índice 0 = Maçâ
Índice 1 = Pera
Índice 2 = Uva

[Done] exited with code=0 in 0.172 seconds
```



E a cada vez que o array aumentar de tamanho, onde novos elementos são adicionados, o for irá percorrer automáticamente o array e exibir o resultado;

```js
const frutas = ['Maçâ', 'Pera', 'Uva', 'Melão', 'Abacate', 'Banana', 'Laranja', 'Morango'];

for (let i = 0; i < frutas.length ; i++){
    console.log(`Índice ${i} = ${frutas[i]}`);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 34 - For - Clássico - Estrutura de repetição/index.js"
Índice 0 = Maçâ
Índice 1 = Pera
Índice 2 = Uva
Índice 3 = Melão
Índice 4 = Abacate
Índice 5 = Banana
Índice 6 = Laranja
Índice 7 = Morango

[Done] exited with code=0 in 0.066 seconds
```

Esse é um for classico, hoje existem várias maneiras de escrever um for, conheceremos outras.




