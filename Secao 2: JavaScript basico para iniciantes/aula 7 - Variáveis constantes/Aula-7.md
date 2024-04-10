## Aula 7 - Variáveis constantes

- Criar pasta da aula 7 e arquivos necessários;

Constantes são variáveis que não mudam sua declaração, ou seja, são declaradas e inicializadas ao mesmo tempo, e não podem ser redeclaradas.

São variáveis que não mudam seu conteúdo ao longo do código.

Seguem as mesmas regras do let;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-25-15.png?msec=1709082727612)

Seguindo o exemplo da aula passada, poderíamos declarar uma const da seguinte forma;

```js
const nome = 'João';
```

Podemos exibir o resultado no console da mesma forma;

```js
console.log(nome);
```

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula7/index.js"
João

[Done] exited with code=0 in 0.374 seconds
```

Não podemos declarar uma constante sem inicializa-la, isso porque não podemos alterar seu conteúdo posteriormente, pois trata-se de uma constante.

Se tentar-mos executar uma constante sem inicializa-la, teremos o seguinte erro;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-30-03.png?msec=1709082727523)

<u>*Missing initializer in const declaration*</u>

E se tentar-mos redeclarar uma const teremos o seguinte erro;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-32-51.png?msec=1709082727525)

<u>*Erro de atribuição de constante variável*</u>

Isso é um comportamento desejável e até mesmo indicado, pois em um sistema onde teremos várias linhas de código podemos alterar o valor de uma variável sem querer, o que não acontece se ela for uma const, e se for necessário alterar esse valor, mudamos a declaração da variável para let.

Também podemos pegar o valor de uma variável ou uma constante e atribuila a outra variável ou outra constante.

Por exemplo, podemos pegar duas const e fazer calculos com elas;

```js
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(conta);
```

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula7/tempCodeRunnerFile.js"
50

[Done] exited with code=0 in 0.214 seconds
```

Aqui temos o resultado da multiplicação do primeiroNumero pelo segundoNumero atribuido a const resultado.

Podemos também ir evoluindo o valor, sem alterar propriamente o valor original, por exemplo, podemos pegar a variável e resultado e duplica-la, fazendo receber o valor de 100;

```js
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado, 'resultado duplicado', resultadoDuplicado);
```

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula7/index.js"
João
50 resultado duplicado 100

[Done] exited with code=0 in 0.213 seconds
```

Podemos usar o let, por exemplo, para alterar o valor original da variável, porém não será possível recuperar seu valor original.

- Então criamos uma variável com let que será alterada;

- Essa variável ira receber o valor da const resultado, que será 50 e irá multiplicar esse valor por 3, somando 150;

- Depois mudamos novamente ser resultado, agora adicionando 5 ao seu valor final que está em 150, somando agora 155.

```js
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log('resultado', resultado);
console.log('resultado duplicado', resultadoDuplicado);
console.log('resultado triplicado', resultadoTriplicado);
```

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula7/index.js"
João
resultado 50
resultado duplicado 100
resultado triplicado 155

[Done] exited with code=0 in 0.238 seconds
```

- Então reatribuimos o valor dessa variável, que agora não é mais 150 e sim 155.

- Utilizamos o valor dela mesma e adicionamos 5 a ele.

- Devemos tomar cuidado, pois dessa forma perdemos o valor da resultadoTriplicado original.

- Diferente disso, os valores declarados nas constantes não perdem seu valor original, sendo possível resgata-los a qualquer momento.

Interessante é sempre ir evoluindo o valor da variável, no caso de uma constante do que ir alterando seu valor sempre com let, é claro que teremos situações que exigirão isso, mas sempre que possível é bom ir evoluindo o valor dela.

JavaScript é uma lingagem de tipagem dinâmica, ou seja, quando declaramos uma variável e atribuimos um valor a ela, o motor do JS já salva esse valor com seu tipo atribuido.

Podemos descobrir o tipo de dado de uma variável da seguinte forma;

- Para se ter certeza do tipo de dado contido na variável podemos usar a função typeof, dentro do console.log, passando o nome da variável logo a seguir;

```js
// Se precisar-mos descobrir o tipo de dado da variável
console.log('Tipo de variável =>', typeof primeiroNumero);
```

Saída

```bash
Tipo de variável => number
```

Se mudar-mos, e colocar-mos o número entre aspas ele muda o resultado;

```js
const terceiroNumero = '10';
console.log('Tipo de variável =>', typeof terceiroNumero);
```

Saída

```bash
Tipo de variável => string
```

Isso é extremente importante ter em mente, principalmente quando formos utilizar o sinal de +, que é usado tanto para se fazer somas quanto para concatenar stings.

Por exemplo, se usar-mos o operador de + nas duas priemeiras const, ele irá somar os números, pois trata-se de um tipo number para ambos;

```js
console.log(primeiroNumero + segundoNumero);
```

Saída

```bash
15
```

Porém se o primeiro termo for uma string, por exemplo, ele ira concatenar os valores, tendo como saída o "número" 510.

```js
const primeiroNumero = '5';
const segundoNumero = 10;
```

Saída

```bash
510
```

Que na verdade é a junção de 5 com 10 sem espaços, 510.

Se quiser-mos utilizar o typeof para descobrir o tipo de dado teremos que envolver a expressão entre parênteses, para que ele primeiro faça a operação necessária e depois retorne o tipo de dado;

```js
console.log(typeof primeiroNumero + segundoNumero);
```

Saída

```bash
string10
```

Se não colocarmos os parênteses ele retorna o tipo da primeira expressão, e apenas o valor da segunda.

```js
console.log(typeof (primeiroNumero + segundoNumero));
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula7/index.js"
string
```

Colocando entre parênteses ele faz a concatenação e depois retorna o tipo de dado, e neste caso ele entendo tudo como string.

Se precisar-mos que os dois valores se tornem um número, os dois valores precisam ser numéricos.

```js
const primeiroNumero = 5;
const segundoNumero = 10;
```

Saída

```bash
number
```

Alterando o código e retirando as aspas, ele identifica o tipo de dado como number.

Importante é entender que as constantes não podem ter seu valor alterado, podemos usar seus valores, atribuir com variáveis, mas não podemos alterar seu valor original.
