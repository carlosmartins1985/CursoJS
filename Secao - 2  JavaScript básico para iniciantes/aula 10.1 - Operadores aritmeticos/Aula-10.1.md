## <u>Aula 10.1 - Operadores aritméticos de atribuição e incremento</u>

São operadores que utilizamos no dia-dia na área de programação.

São eles;

* Adiçã - (+), é usado para fazer adição de números e também a concatenação.
  
  * Se os dados forem do tipo number, ele irá fazer a adição dos números;
    
    ```js
    const num1 = 5;
    const num2 = 10;
    console.log(num1 + num2);
    ```
    
    Saída
    
    ```bash
    [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
    15
    
    [Done] exited with code=0 in 0.187 seconds
    ```
    
    Porém se existir alguma string, ele irá fazer a concatenação das variáveis;
    
    ```js
    const num1 = '5';
    const num2 = 10;
    console.log(num1 + num2);
    ```
    
    Saída
    
    ```bash
    [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
    510
    
    [Done] exited with code=0 in 0.249 seconds
    ```
    
    Neste caso ele faz a junção da string 5 com o número 10.

* Subtração - (-) faz a subtração dos números;

* Multiplicação - (\*) faz a multiplicação dos números;

* Divisão - (/) faz a divisão dos números;

* Potenciação - (**) - dois asteriscos fazem a potenciação, por exemplo, 3 elevado a 3, ou seja 3 ao cubo;
  
  ```js
  const num1 = 3;
  const num2 = 3;
  
  console.log(num1 ** num2);
  ```
  
  Saída
  
  ```bash
  [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
  27
  
  [Done] exited with code=0 in 0.19 seconds
  ```

* Módulo - (%) retorna o resto da divisão;

Na programação podemos fazer contas com um número apenas, e vários números também,  por exemplo;

```js
const num1 = 10;
const num2 = 5;

console.log(num1 + num2 + num1 + num2);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
30

[Done] exited with code=0 in 0.231 seconds
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-22%2020-44-21.png)

***Ordem de precedência***

Algumas contas são realisadas antes de outras por conta da ordem de precedência.

Para especificar qual operação deverá ser feita primeiro, podemos utilizar os parênteses, e assim alterar a precedência das operações.

A ordem de precedência é a seguinte;

* () => primeiro o que estiver entre parênteses;

* ** => potenciação;

* \* / % => multiplicação, divisão e resto da divisão;

* \+ - => e por último adição e subtração;

<u>***Incremento***</u>

Muitas vezes no código precisaremos incrementar o valor em variáveis, como por exemplo para implementar um contador, podemos fazer isso com o operador de incremento ++, neste caso ele já incrementa a variável e atribui o valor a ela.

```js
let contador = 1;
contador++;
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
2

[Done] exited with code=0 in 0.219 seconds
```

Neste caso ele atribui o valor de contador a ele mesmo e imprime o resultado na tela.

Se colocar-mos vários na sequencia ele irá somando os valores a contador;

```js
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
5

[Done] exited with code=0 in 0.213 seconds
```

Ou seja, cada vez que chamamos o operador de incremento ele já modifica o valor da variável.

\* *Sendo assim não podemos declarar um contador como uma constante, pois ele precisará modificar várias vezes o valor da variável.*

Podemos também fazer a pré atribuição, e neste caso teremos o mesmo valor como resultado.

<u>***Diferença entre o pós e pré atribuição***</u>

No caso do pré ele primeiro faz a conta e depois ele retorna o valor, no caso do pós ele executa primeiramente a ação a ser executada e depois faz o incremento do valor.

Se colocarmos dentro do console.log o pós incremento, ele primeiramente irá exibir o valor e posteriormente irá fazer o incremento, como mostramos apenas 1 console.log, ele apenas exibe o valor inicializado a contador mas não exibe o contador com o incremento;

```
let contador = 1;
console.log(contador++);
```

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
1

[Done] exited with code=0 in 0.211 seconds
```

    Ou seja, ele fez a ação do console.log e depois incrementou o valor.

Para visualizar o valor devemos repetir o console.log do contador sem o incremento.

```js
let contador = 1;
console.log(contador++);
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
1
2

[Done] exited with code=0 in 0.203 seconds
```

Se fizermos o pré incremento, ele primeiro faz o incremento e depois mostra o valor;

```js
let contador = 1;
console.log(++contador);
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
2
2

[Done] exited with code=0 in 0.206 seconds
```

Assim ele não irá reter o valor antigo.

<u>***Operador de decremento***</u>

O operador de decremento trata-se do --

Que subtrai o valor a cada chamada do contador;

```js
let contador = 10;
console.log(--contador);
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
9
9

[Done] exited with code=0 in 0.29 seconds
```

E assim sucessivamente irá fazer o decremento de contador.

Da mesma forma temos o pré decremento e pós decremento.

Se nós inicializar-mos qualquer um dos operadores antes do console.log não irá fazer diferença, pois ele já ira ter feito a operação antes de mostrar-mos o resultado.

```js
let contador = 10;
contador++; 
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
11

[Done] exited with code=0 in 0.206 seconds
```

Não é recomendado fazer tudo junto, na mesma chamada do console.log fazer o incremento e pedir para exibir o resultado;

```js
let contador = 1;
console.log(conatador++);
```

Isso não é uma boa prática de programação, o correto e fazer antes o incremento e depois mostrar seu valor.

Isso pode gerar bugs e comportamentos indesejados.

Podemos fazer os incrementos e decrementos com valores maiores, ou indicados préviamente;

```js
let contador = 2;
contador = contador + contador;
```

Podemos declarar uma constante que armazene o número que queremos que o contador seja incrementado.

Podemos repetir quantas vezes forem necessárias;

```js
const passo = 2;
let contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula11 - Operadores aritméticos de atribuição e incremento/index.js"
2
4
6

[Done] exited with code=0 in 0.173 seconds
```

E se for necessário podemos mudar a constante para que salte de acordo com o valor que precisar-mos, por exemplo de 5 em 5, etc...

Podemos utilizar um atalho para fazer a declaração;

```js
contador += passo;
```

É a mesma coisa, contador = contador + passo;

```js
contador += 2;
```

Irá saltar de 2 em 2;

Podemos utilizar com outros operadores aritméticos também, como com multiplicação;

```js
contador *= 2;
```

Contador vai ser igual a contador recebe contador \* 2;

Esses são operadores de atribuição.

Podemos inclusive usar o operador de potenciação;

```js
let contador = 2;
contador **= 10;
console.log(contador);
// Resultado = 1024
```

Uma coisa que devemos prestar muita atenção quando usamos operadores é com os tipos de dados.

Por exemplo, se tentar-mos efetuar operações com dados que não são números, teremos um resultado não muito esperado;

```js
const num1 = 10;
const num2 = 'Carlos';
// Resultado NaN, not a number
```

Esse erro significa que a conta encontrou algum problema e houve algum erro. algum tipo de dado não bateu.

Tem casos em que o JavaScript tenta resolver esses casos, por exemplo, se ao invés de letras tivessemos números entre aspas, o js resolveria e faria o calculo mesmo assim;

```js
const num1 = 10;
const num2 = '5';
// Resultado = 50
```

Isso torna o js uma linguagem estranha, pois ele tenta solucionar muita coisa para o dev.

No caso acima ele faz a conversão para number e entrega o valor.

Podemos porém, caso necessário, converter uma string para um número.

* Maneiras mais antigas;
  
  * parseInt(), parseFloat()
    
    ```js
    const num1 = 10;
    const num2 = parseInt('5');
    const num3 = parseFloat('6');
    // Aqui fará a conversão
    ```
    
    Podemos inclusive conferir o resultado com typeof.

* Para valores com ponto flutuante, usamos o parseFloat()

* E a mais recente que o Number, podemos chamar Number que ele não fará a distinção entre int e float, funcionará com ambos.
  
  ```js
  const num1 = 10;
  const num2 = Number('5');
  ```
  
  Aqui ele se encarrega de analisar o número e aplicar a converção correta.
  
  Porém se colocar-mos strings, mesmo com o Number, ele não conserguirá fazer a converção e irá retornar NaN.
