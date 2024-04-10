# Aula 21 - Operadores de comparação

Nesta aula iremos ver alguns operadores de comparação.

Em JavaScript temos os seguintes operadores de comparação, que comparam dois valores;

```js
/**
    Operadores de comparação

    >   Menor que;
    >=  Menor que ou igual a;
    <   Maior que;
    <=  Maior que ou igual a;
    ==  Igualdade - checa a iguadade entre dois operandos, checa valor; (NÃO IREMOS UTILIZAR ESSE)
    === Igualdade estrita - checa valor e tipo na comparação;
    !=  Diferente - checa valor, (TAMBÉM NÃO SERÁ USADO);
    !== Diferente estrito - Checa valor e tipo.

 */
```

Para exemplo usaremos expressões literais.

***<u>\> Maior que</u>***

Iniciamos com uma comparação simples;

Nesta expressão estamos perguntando para a linguagem de programação se o valor da direita é maior que o valor da esquerda.

```js
console.log(10 > 5);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.179 seconds
```

Como ela só tem duas respostas possíveis, true or false, teremos o retorno como true, pois 10 é maior que 5.

***<u>Essas expressões sempre retornarão um valor booleano, true or false.</u>***

Podemos utilizar qualquer tipo de dados na comparação, porém comumente utilizaremos com números.

Podemos inclusive colocar essa comparação dentro de uma variável, e utiliza-la de acordo com a necessidade;

```js
const comp = 10 > 5;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.153 seconds
```

Da mesma forma teremos true como retorno.

***<u>\>= Maior que ou igual</u>***

Essa comparação utliza o ou |, então, no caso de qualquer uma ser verdadeira irá retornar true, ou seja, a expressão completa é verdadeira.

Usando o mesmo exemplo, agora perguntamos se 10 é maior ou igual a 5;

```js
const comp = 10 >= 5;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.131 seconds
```

Neste caso até chegar-mos no 10 a expressão será verdadeira, pois o 10 será igual a 10, mesmo não sendo maior.

Só irá retornar false quando 10 for menor que o outro número da comparação;

```js
const comp = 10 >= 11;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
false

[Done] exited with code=0 in 0.083 seconds
```

Sempre que utilizar-mos o ou | irá retornar verdadeiro se pelo menos uma das alternativas forem verdadeiras.

***<u>\< Menor que</u>***

Compara se um valor é menor que o outro;

```js
const comp = 10 < 11;
console.log(comp);


// Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.132 seconds

```



***<u>\<= Maior que ou igual</u>***

Compara se um valor é menor ou igual a outro valor;

```js
const comp = 10 <= 11;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.14 seconds
```

Comparação retornando false;

```js
const comp = 12 <= 11;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
false

[Done] exited with code=0 in 0.144 seconds
```

Podemos utilizar variáveis para colocar os valores dentro e depois compara-los;

```js
const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.125 seconds
```



***<u>== Igualdade</u>***

Podemos comparar se os dois valores são iguais;

```js
const num1 = 10;
const num2 = 10;
const comp = num1 == num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.109 seconds
```

Executando teremos, claro, um retorno true, pois 10 é igual a 10;

Se os números fossem diferentes teríamos um retorno false.

Porém não podemos utilizar esse operador, pois ele não compara o tipo de dado, poderíamos, por exemplo, ter a seguinte situação;

```js
const num1 = 10;
// const num2 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.061 seconds
```

Aqui teríamos uma comparação entre um número e uma string, ainda assim nos é retornado true.

Ou seja a linguagem comparou um number com uma string, e ainda assim retornou true.

O que ela faz é uma converção de tipo automáticamente, ele faz essa dedução.



***<u>=== Igualdade estrita</u>***

Aqui irá comparar se os valores e o tipo do dado são iguais.

Usando o exemplo anterior teremos false como retorno, pois number é diferente de string.

```js
const num1 = 10;
// const num2 = 10;
const num2 = '10';
const comp = num1 === num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
false

[Done] exited with code=0 in 0.144 seconds
```

Retorna false, pois apesar de terem o mesmo valor são de tipos diferentes.



***<u>\!= Diferente</u>***

Podemos checar se os valores são diferentes;

```js
const num1 = 10;
// const num2 = 10;
const num2 = 10;
const comp = num1 != num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
false

[Done] exited with code=0 in 0.112 seconds
```

Da mesma forma que o igual == , ele não checa o tipo, apenas o valor.



***<u>!=== Diferente estrito</u>***

Essa é a forma correta de utilizar o operador, que irá checar o valor e o tipo da expressão, e assim retornar true or false;

```js
const num1 = 10;
// const num2 = 10;
const num2 = 10;
const comp = num1 !== num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
false

[Done] exited with code=0 in 0.086 seconds
```

Executando teremos false, pois 10 não é diferente de 10;



Exemplo usando uma string e um number;

```js
const num1 = 10;
// const num2 = 10;
const num2 = '10';
const comp = num1 !== num2;
console.log(comp);


// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 21 - Operadores de comparação/index.js"
true

[Done] exited with code=0 in 0.163 seconds
```

Se os valores forem diferentes, estritamente, ele irá retornar true, pois 10 é diferente de '10';



<mark>Não usar os operadores de igualdade ==, sempre usar o de iguadade estrita ===.</mark>

<mark>Não usar os operadores de diferente !=, sempre usar o de diferente estrito !==.</mark>


