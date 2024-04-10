# Aula 15 - O objeto Math

Em javascript temos um objeto disponiblizado pela própia linguagem, o Math, possui várias funcionalidades relacionadas a matemática.

Chamando o objeto Math. teremos várias opções de funções que podemos utilizar;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-10%2010-53-27.png)

Podemos criar várias coisas, iniciamos criando uma variável;

```js
let num1 = 9.54578;
```



<u>***Método floor(). arredondar para baixo***</u>

Dada a variável, suponha que precisamos arredondar a variável para baixo, podemos então criar outra variável que irá receber o valor de num1 como parâmetro da função Math.floor;

```js
let num1 = 9.54578;

let num2 = Math.floor(num1);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
9

[Done] exited with code=0 in 0.222 seconds
```

Então temos a variável num1 sendo passada para dentro do objeto Math utilizando a função/método floor tendo essa variável como parâmetro.

Então será arredondado para baixo =  9.



<u>***Método ceil(). arredondar para cima***</u>

Podemos também arredondar para cima usando a função ceil dentro do objeto Math.

```js
let num1 = 9.54578;

let num2 = Math.ceil(num1);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
10

[Done] exited with code=0 in 0.209 seconds
```



<u>***Método round().***</u>

<u>***Quando uma função está dentro de um objeto é chamada de método.***</u>

Podemos ver uma pequena documetação do que conseguimos fazer passando o mouse por cima da função explicando o que precisamos passar como parâmetro do método e também seu retorno;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-10%2011-32-08.png)

* method = É como é chamado uma função que está dentro de um objeto;

* round = É o nome do método;

* x: number = É o parâmetro que deve ser passado, neste caso um número;

* : number = É o tipo de retorno que a função fará, neste caso um número.

No caso da função round retorna o número arredondado para o mais próximo a ele.

No caso do exemplo ele arredonda para 10 pois é o mais próximo de 9.54578;

```js
let num1 = 9.54578;

let num2 = Math.round(num1);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
10

[Done] exited with code=0 in 0.208 seconds
```

Isso porque 9.54578 passa da metade, se fosse menos, por exemplo 9.49 ele arredendondaria para baixo;

```js
let num1 = 9.49;

let num2 = Math.round(num1);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
9

[Done] exited with code=0 in 0.249 seconds
```

Ele faz isso de forma automática, se o número for menor que a metade, arredonda para baixo, se for maior arredonda para cima.

<mark>E se for exatamente na metade, ou seja no 9.50 ele também arredonda para cima.</mark>



***<u>Método Math.max(), encontrar o maior número em uma sequência</u>***

Podemos também em uma sequência de números encontrar o maior deles, utilizando o método max().

Podemos então passar como parâmetro uma sequência de números e encontrar o maior deles;

```js
let num1 = 9.49;

let num2 = Math.max(1,2,3,4,5,-10,1500,50,30,69);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
1500

[Done] exited with code=0 in 0.227 seconds
```

Executando ele retornará o maior número da sequência.



***<u>Método Math.mim(), encontrar o menor número em uma sequência</u>***

Para encontrar o menor número da sequência utilizamos o método mim;

```js
let num1 = 9.49;

let num2 = Math.min(1,2,3,4,5,-10,1500,50,30,69);

console.log(num2);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
-10

[Done] exited with code=0 in 0.247 seconds
```



***<u>Método Math.randon(), gerar números aleatórios</u>***

Utilizamos o método randon() para gerar números aleatórios;

Ele gera números aleatórios entre 0 e 1, porém o 1 não é incluido, e gera um número aleatório com várias casas decimais;

```js
console.log(Math.random());


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
0.20504702206585446

[Done] exited with code=0 in 0.243 seconds
```

Podemos então utilizar esses números aleatórios em outros métodos que já vimos nesta aula, por exemplo, podemos guardar essa sequência de números aleatórios em uma variável, e utilizar os métodos nelas.

Para testar criamos uma const que irá receber o número aleatório;

```js
const aleatorio = Math.random();
console.log(aleatorio);


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
0.5303217113593428

[Done] exited with code=0 in 0.238 seconds
```

Suponhamos que queremos um número aleatório entre 10 e 5, podemos fazer o número aleatório \* e entre parênteses o máximo que precisamos, no caso 10, e o minimo que é 5, então (10 - 5), e para finalizar colocamos + 5;

```js
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
5.84680302816203

[Done] exited with code=0 in 0.236 seconds
```

E se precisar-mos arredondar os números podemos utilizar os métodos de arredondamento dentro da mesma expressão;

```js
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
8

[Done] exited with code=0 in 0.191 seconds
```

Utilizamos o round pois arredonda automático, e podemos ir colocando várias funções dentro de outras que elas funcionam perfeitamente.



***<u>Método Math.PI(), traz o valor de PI</u>***

```js
console.log(Math.PI);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
3.141592653589793

[Done] exited with code=0 in 0.197 seconds
```



***<u>Método Math.pow(), potenciação</u>***

Este método precisa de dois números, o x, que é o número normal, e o y que é a potenciação que será aplicada;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-10%2012-17-49.png)

 Por exemplo, se quisermos 2 elevado a 10 podemos;

```js
console.log(Math.pow(2, 10));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
1024

[Done] exited with code=0 in 0.186 seconds
```

Podemos também fazer direto sem precisar utilizar o objeto Math para isso;

```js
console.log(Math.pow(2, 10));

// Sem o objeto Math
console.log(2 ** 10);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
1024
1024

[Done] exited with code=0 in 0.237 seconds
```

Podemos na verdade nem utilizar o objeto, apenas usar o operador da linguagem.



***<u>Raiz quadrada</u>***

Para encontrar-mos a raiz quadrada de um número podemos utilizar contas com os operadores matemáticos, por exemplo, da seguinte forma;

```js
num1 = 9;
console.log(num1 ** (1/2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
3

[Done] exited with code=0 in 0.244 seconds
```

Com esse cálculo temos a raiz de 9 como resultado.

Podemos também fazer direto;

```js
num1 = 9;

console.log(num1 ** 0.5);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
3

[Done] exited with code=0 in 0.221 seconds
```



***<u>Infinity</u>***

Uma coisa que não foi dita anteriormente e que pode gerar uma falta grave, e precisamos ficar atentos, é que em javascript podemos dividir um número por 0, zero.

Ele retorna um tipo de dado númerico que é o infinity, 

```js
console.log(100 / 0);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
Infinity

[Done] exited with code=0 in 0.148 seconds
```

Além de não dar erro ele é avaliado como verdadeiro, isso porque quanto mais nos aproximamos do zero em uma conta maior é o seu resultado;

```js
console.log(100 / 0.0000000000001);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
1000000000000000

[Done] exited with code=0 in 0.171 seconds
```

Então chega em um ponto que ele não tem mais onde adicionar casas decimais, ou como mostrar o número, ou não tem mais memória, então retorna infinito para o número muito grande.

Então ele retorna um número muito imenso, ou seja infinito.

Se colocarmos vários 0's, zeros, em determinado momento ele chegará ao infinito.

<mark>O que devemos ter em mente é que esse comportamento é avaliado como true;</mark>

```js
console.log(!!(100 / 0));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 15 - O objeto Math/index.js"
true

[Done] exited with code=0 in 0.251 seconds
```
