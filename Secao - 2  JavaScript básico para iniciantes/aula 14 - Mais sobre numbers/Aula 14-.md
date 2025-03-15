# Aula 14 - mais sobre numbers

Aqui falaremos mais sobre números, existe uma certa imprecisão com numbers, tanto em javascript quanto em outras linguagens de programação.

Para iniciar-mos a falar sobre números em javascript começaremos abordando repetição, veremos algumas coisas que já vimos no curso mas para fixar o conteúdo usamos esse método da repetição.

Podemos iniciar definindo uma variável e atribuindo um número a ela, qualquer número;

```js
let num1 = 1;
let num2 = 2.5;
```

Definimos dois números, sabemos que podemos fazer contas com esses números.

Suponhamos que precisamos fazer a junção desses números, ou seja num1 junção com num2 (não sería a soma).

```js
let num1 = 1; // Tipo Number
let num2 = 2.5;// Tipo Number


console.log(num1 + num2); 
```

Executando o código teremos a soma entre num1 e num2;

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
3.5

[Done] exited with code=0 in 0.497 seconds
```

Deste modo temos um comportamento indesejado, pois precisamos da concatenação dos números.

Para isso, da mesma forma que com as strings, o javascript nos disponibiliza várias funções e métodos para que possamos manipular os números.

Temos por exemplo o <mark>toString()</mark>, que irá converter o número em string para que possamos trabalhar com ele;

```js
let num1 = 1; // Tipo Number
let num2 = 2.5;// Tipo Number


console.log(num1.toString() + num2); 


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
12.5

[Done] exited with code=0 in 0.238 seconds
```

Quando chamamos essa função estamos convertendo o número para string, não estamos editando a variável número, ou seja, a variável num1 continua sendo um number, neste caso estamos apenas retornando um valor temporariamente, fazendo num1 se parecer como uma string para que possamos fazer a concatenação.

Se conferir-mos com o typeOf, veremos que o tipo de num1 continua sendo number, pois o que estamos fazendo é apenas converter em string temporáriamente.

```js
let num1 = 1; // Tipo Number
let num2 = 2.5;// Tipo Number


console.log(num1.toString() + num2); 
console.log(typeof num1);


// Saída

[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
12.5
number

[Done] exited with code=0 in 0.198 seconds
```

O num2 continua sendo um number, porém quando temos uma string com um sinal de + não é realizada a conta, e sim a concatenação.

Se qualquer valor for uma string será realizada a concatenação.

Podemos alterar o valor da variável number do forma defitiva atribuindo na variável o toString;

```js
let num1 = 1; // Tipo Number
let num2 = 2.5;// Tipo Number
num1 = num1.toString();

console.log(typeof num1);


// Saída

[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
string

[Done] exited with code=0 in 0.157 seconds
```



***<u>Representar números binários</u>***

Podemos representar números binários adicionando 2 como parâmetro na método toString;

```js
let num1 = 1500; // Tipo Number
console.log(num1.toString(2));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
10111011100

[Done] exited with code=0 in 0.237 seconds
```



***<u>Método toFixed</u>***

Usado para arredondar números decimais muito grandes, colocando dentro do parâmetro quantas casas decimais queremos que esse número tenha;

```js
num1 = 10.1579586985488
console.log(num1.toFixed(2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
10.16

[Done] exited with code=0 in 0.231 seconds
```

Percebemos que o número foi arredondado para cima.

Podemos por quantas casas decimais forem necessárias.

E tenhamos em mente que, quando estamos utilizando os métodos dessa maneira não estamos alterando o valor real, então podemos utilizar a variável para calculos e etc e só no final usamos o toFixed para exibir para o usuário o valor final arredondado, tendo assim uma precisão maior no resultado.



***<u>Método Number.isInteger()</u>***

Temos também algumas coisas que podemos utilizar para chacagem em nossos sistemas.

Por exemplo, se precisar-mos checar se o valor que está dentro de uma variável é um número inteiro, podemos utilizar o método Number.isInteger, passando o num1, ou o número desejado como parâmetro.

Então o método irá retornar verdadeiro ou falso;

```js
num1 = 10;
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
true

[Done] exited with code=0 in 0.231 seconds
```

Aqui ele retorna true pois num1 é um número inteiro.

Porém, se tivermos um número de ponto flutuante ele retornará false;

```js
num1 = 10.25;
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
false

[Done] exited with code=0 in 0.276 seconds
```



***<u>NaN</u>***

Podemos ter a seguinte situação;

```js
let temp = num1 * 'Ola';
console.log(temp);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
NaN

[Done] exited with code=0 in 0.229 seconds
```

Ele nos retornará NaN, not a number, o que significa que algo deu errado na nossa conta.

Poderiamos contornar isso com um alerta de erro, um desvio no fluxo do código.

Assim podemos utilizar o método Number.isNaN(), que irá perguntar para o javascript se essa conta resultará em algum erro, ou seja, pergunta se essa conta é uma conta inválida, e se for ele retornará true.

Ele retorna verdadeiro sempre que a conta for invalida, pois algum dos valores não é um number.

```js
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
true

[Done] exited with code=0 in 0.148 seconds
```

Ele pergunta se algum valor é um NaN, ou seja um not a Number.

Porém se os valores forem todos numbers, ele retorna false, pois nenhum valor é um NaN.

```js
let temp = num1 * '5';
console.log(Number.isNaN(temp));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
false

[Done] exited with code=0 in 0.255 seconds
```

Reiteramos que não é uma boa prática de programação tentar usar strings para fazer contas, fizemos dessa maneira para vermos que é possível ser feito.

Se sabemos que iremos receber uma string como variável e precisamos fazer contas, nossa função é converter essa string explicitamente para number, e posteriormente fazer a conta.

Nunca devemos confiar que o javascript irá resolver isso para nós, pois se tentassemos fazer a conta com strings teríamos na verdade a concatenação dos valores.

<mark>Não faça contas com strings.</mark>



<u>***Imprecisão***</u>

Iremos falar sobre imprecisão em javacritpt, as contas em javascript seguem um padrão chamado IEEE 754-2008, esse é o padrão que o javascript segue para a precisão dos números com casas decimais.

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
console.log(num1 += num2);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
0.7999999999999999

[Done] exited with code=0 in 0.215 seconds
```

Notemos que a saída devería ser 7.8, porém temos um número bem maior e impreciso.

É uma diferênça muito pequena, na casa dos milésimos, que não irá fazer tanta diferênça.

Da mesma forma se tentar-mos usar os sinais de atribuição teremos o mesmo resultado;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;

console.log(num1);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
0.7999999999999999

[Done] exited with code=0 in 0.213 seconds
```

Suponhamos que desejamos chegar a 1.0, na teoria iríamos fazendo os calculos até chegar a esse valor, repetindo as contas;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;
// console.log(num1 + num2);
console.log(num1);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
0.9999999999999999

[Done] exited with code=0 in 0.206 seconds
```

O resultado é novamente um número que contém uma certa imprecisão, e isso pode nos causar algum problema.

Poderíamos tentar resolver usando o toFixed, ele aparentemente resolve o problema, pelo menos aos nossos olhos;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;

num1 = num1.toFixed(2);
// console.log(num1 + num2);
console.log(num1);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.00

[Done] exited with code=0 in 0.246 seconds
```

Ele aparentemente resolve a imprecisão para nós.

Mas na verdade não, se checar-mos se o num1 é um inteiro;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;

num1 = num1.toFixed(2);
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.00
false 

[Done] exited with code=0 in 0.236 seconds
```

Sabendo que se o número tem ponto flutuante, para o js já não é considerado um número inteiro, pórem se fizermos o teste com um número literal, ou seja, digitando o número e não a variável ele retorna true, pois ele considera como um número redondo, que sería apenas um, 1;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;

num1 = num1.toFixed(2);
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(1.00));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.00
true

[Done] exited with code=0 in 0.208 seconds
```

Isso colocando o valor literal que deveria ser o resultado da soma.

Mas na verdade a variável num1 não tem o valor de 1.00  apesar de estar sendo mostrado assim, então se fizermos o teste com a variável ao invés do número literal, teremos como retorno false;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;

num1 = num1.toFixed(2);
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.00
false 

[Done] exited with code=0 in 0.236 seconds
```

Ele por baixo dos panos estaría checando os binários e não o número em si.

Então vemos que só usando o toFixed(2), não resolve o problema.

Podemos usar então uma conversão, o parseFloat em conjunto com o toFixed();

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = num1.toFixed(2);
num1 = parseFloat(num1.toFixed(2));
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1
true

[Done] exited with code=0 in 0.21 seconds
```

E agora sim temos 1 para o valor e true para integer para o tipo.

Podemos inclusive continuar fazendo o calculo, onde o número irá passar para um número com ponto flutuante, então percebemos que muda os resultados, pois o número não é mais um integer.

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = num1.toFixed(2);
num1 = parseFloat(num1.toFixed(2));
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.5
false

[Done] exited with code=0 in 0.254 seconds
```

Assim vemos que o número está funcionando de maneira adequada.

Podemos também utilizar o <mark>Number</mark> no lugar de parseFloat que irá solucionar da mesma forma.

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));
// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1.5
false

[Done] exited with code=0 in 0.199 seconds
```

Essa é uma maneira fácil de resolver utilizando as próprias funções do javascript.

Podemos também resolver esse problemas utilizando contas, 

Se tirarmos a converção passamos a ter o mesmo erro de precisão novamente;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
2.0000000000000004
false

[Done] exited with code=0 in 0.135 seconds
```

Voltando a menos números veremos como resolver o problema utilizando contas e não funções;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 += num2;
num1 += num2;
num1 += num2;


// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
0.9999999999999999
false

[Done] exited with code=0 in 0.205 seconds
```

Uma maneira fácil de resolver esse problema é não realizar contas com números com ponto flutuante.

Podemos resolver multiplicando ambos os valores por 100, e depois fazer a soma, que teremos como resultado 80, então dividimos o resultado por 100 para teremos o resultado esperado.

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 = ((num1 * 100) + (num2 * 100)) / 100;



// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
0.8
false

[Done] exited with code=0 in 0.224 seconds
```

Multiplicando os valores percebemos que não temos mais as imprecisões;

```js
let num1 = 0.7; // Tipo Number
let num2 = 0.1;// Tipo Number
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;



// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1 + num2);
console.log(num1);
console.log(Number.isInteger(num1));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula14 - mais sobre numbers/index.js"
1
true

[Done] exited with code=0 in 0.212 seconds
```

Porém essa solução deixa o código muito complexo, sendo com o uso das funções a melhor maneira de se resolver esse problema.

Dessa aula levamos que existe uma complexidade em valores muito baixos, ou abaixo de zero, 0, o que pode nos trazer problemas quando precisar-mos fazer contas com esses números.

A melhor maneira de se contornar este problema é com o uso das funções, aplicando  já no final do processo, já na hora de mostrar o resultado para o usuário, mostrando o valor final já convertido;

```js
let num1 = Number(num1.toFixed(2));
```

Isso irá converter o resultado para um número com 2 casas decimais.
