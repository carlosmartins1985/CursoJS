## Aula 12 - Exercício variáveis

Faremos um exercício para aplicar os conceitos de variáveis.

Dados;

```js
let varA = 'A';
let varB = 'B';
let varC = 'C';
```

E dando um console.log teremos impressos as letras A, B, C;

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula12 - Exercícios variáveis/index.js"
A B C

[Done] exited with code=0 in 0.211 seconds
```

O exercício consiste em inverter os valores das variáveis;

```js
let varA = 'A'; => Receber o valor de B
let varB = 'B'; => Receber o valor de C
let varC = 'C'; => Receber o valor de A
```

Inverter esses valores utilizando as variáveis.

Podemos criar outras variáveis se necessário.

<u>***Solução apresentada pelo professor***</u>

Nós tenderíamos a resolver desta forma;

```js
let varA = 'A'; => Receber o valor de B
let varB = 'B'; => Receber o valor de C
let varC = 'C'; => Receber o valor de A

// Provavelmente tentaríamos resolver dessa forma
let varA = varB; 
let varB = varC; 
let varC = varA; 
```

Porém com essa resolução o resultado seria;

```js
B C B
```

Pois logo na primeira linha perderíamos o valor de A, pois seria atribuido o valor de B a ele;

Do mesmo modo, varB recebe o valor de C, o que até estaría correto, mas na varC teríamos o valor de varA novamente, que neste caso é B.

De todos os modos que fizermos sempre perderemos o valor de alguma variável, a não ser que criemos uma variável temporária para guardar o valor de A.

Então criamos uma variável para guardar o valor de A, e assim podemos inverter os outros valores, sendo;

```js
//
const varATemp = varA;

let varA = varB; // Agora A recebe o valor de B
let varB = varC; // B recebe o valor de C
let varC = varATemp; // E C receberá o valor da variável temporária A
```

Então o que fizemos foi salvar o valor da variável A para que pudessemos usar posteriormente.

<u>***Maneira mais moderna de resolver***</u>

Podemos também resolver esse problema da seguinte forma;

```js
let varA = 'A';
let varB = 'B';
let varC = 'C';


[varA, varB, varC] = [1, 2, 3]
```

Saída;

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula12 - Exercícios variáveis/index.js"
1 2 3

[Done] exited with code=0 in 0.23 seconds
```

O valor que colocar-mos na ordem será atribuído a cada variável em questão.

Sabendo que temos um valor para cada, na ordem, podemos simplesmente adicionar os valores das variáveis como for necessário.

```js
let varA = 'A';
let varB = 'B';
let varC = 'C';


[varA, varB, varC] = [varB, varC, varA]
```

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula12 - Exercícios variáveis/index.js"
B C A

[Done] exited with code=0 in 0.23 seconds
```

Atenção em colocar os valores na ordem correta, o primeiro com o primeiro, o segundo com o segundo e o terceiro com o terceiro.
