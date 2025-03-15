# Aula 13 - mais sobre strings

Nesta aula iremos abordar um pouco mais sobre strings.

Para iniciar, sabemos que podemos simplesmente declarar um string da seguinte maneira;

```js
let umaString = 'Um texto';

console.log(umaString);
```

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Um texto

[Done] exited with code=0 in 0.228 seconds
```

Porém, assim que criamos uma string o javascript cria algumas ferramentas para que possamos trabalhar com elas.

Por exemplo, se quisermos que alguma parte do código, da string, esteja entre aspas duplas, dentro da string que está em aspas simples, podemos simplesmente colocar essa palavra entre aspas duplas.

Ou seja, se quisermos usar aspas duplas dentro de aspas simples não teremos porblemas;

```js
let umaString = 'Um "texto"';

console.log(umaString);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Um "texto"

[Done] exited with code=0 in 0.21 seconds
```

\* E o inverso também funciona, colocar aspas simples dentro da string com aspas duplas.

Podemos usar também algo que se chama escapar o caractere, usando a contra barra;

Com todas as aspas duplas e o contrabarra;

```js
let umaString = "Um \"texto\"";

console.log(umaString);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Um "texto"

[Done] exited with code=0 in 0.198 seconds
```

Podemos precisar disso quando, em algum momento, teremos que utilizar as aspas duplas para a string, e dentro dessas também colocar algum texto em aspas duplas.

Se precisarmos utilizar a barra invertida dentro do texto, utilizamos duas barras, uma será a barra de escape, e a outra será exibida;

```js
let umaString = "Um \\texto ";

console.log(umaString);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Um \texto 

[Done] exited with code=0 in 0.187 seconds
```

***<u>Índices</u>***

Uma coisa importante de se saber é que strings são indexadas, isso porque a string é um array de caracteres, e podemos iterar sobre ele.

Ou seja, cada caractere tem um índice, começando do ,***<u>0 (zero)</u>***, em diante.

```js
//               01234567
let umaString = "Um texto";
```

Ou seja, o índice 0, zero, representa o primeiro caractere dessa string.

Podemos então, na hora que estamos chamando a string, já no console.log, querer exibir um caractere que está um uma posição especifica do índice.

Por exemplo, se quisermos ver qual caractere está no índice 4, podemos utilizar os colchetes e colocar o elemento do índice 4, ou algum que estamos tentando descobrir.

```js
//               01234567
let umaString = "Um texto";
console.log(umaString[[4]]);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
e

[Done] exited with code=0 in 0.188 seconds
```

Ele nos retorna o caractere, pois nesse momento estamos pegando apenas o elemento do índice 4 da string.

Se utilizarmos um índice que não exista, ele retornará undefined, pois o resultado não aponta para lugar nenhum na memória;

```js
//               01234567
let umaString = "Um texto";

// console.log(umaString[[4]]);

console.log(umaString[[4]]); // Retorna o e
console.log(umaString[[-1]]);// Retorna undefined
console.log(umaString[[8]]); // Retorna undefined

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
undefined

[Done] exited with code=0 in 0.19 seconds
```

Índice 8 não aponta para lugar nenhum, não existe.

Da mesma forma se buscarmos pelo -1, também teremos um retorno undefined, isso para qualquer valor que esteja fora do range da string.

***<u>Função charAt()</u>***

Outra função que podemos utilzar para pegar um elemento dentro da string é a charAt, Aliás o javascript disponibiliza uma grande variedade de funções que podemos utilizar para manipular as strings.

Logo após o nome da variável podemos colocar um . e ver essas funções.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-29%2021-20-39.png)

Então podemos utilizar o .charAt para retornar o elemento do índice que precisamos.

```js
console.log(umaString.charAt(6));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
t

[Done] exited with code=0 in 0.146 seconds
```

E se caso colocarmos um índice que não existe, utilizando o charAt, teremos um retorno vazio, sem nenhum erro;

```js
console.log(umaString.charAt(9));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"

[Done] exited with code=0 in 0.218 seconds
```

<u>***Função concat()***</u>

Faz a mesma coisa que a concatenação.

Pouco usada.

A dificuldade está em ter que adicionar cada trecho do texto, inclusive os espaços;

```js
// VÁRIAS FORMAS DE FAZER A CONCATENAÇ

console.log(umaString.concat(' ', em, ' ', 'um'));
console.log(umaString.concat(' em', ' um', ' lindo dia.'));

// Podemos concatenar de várias maneiras
console.log(umaString.concat(' em um lindo dia.'));

// Usando as templates strings
console.log(`${umaString} em um lindo dia.`)


// Saída é a mesma 
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Um texto em um
Um texto em um lindo dia.
Um texto em um lindo dia.
Um texto em um lindo dia.

[Done] exited with code=0 in 0.22 seconds
```

É bom ter o conhecimento das três formas, mas a que mais iremos utilizar é a templateStrings.

<u>***Pesquisar por um índice***</u>

Podemos pesquisar por indices dentro das strings.

Suponhamos que precisamos saber qual o índice da palavra "texto", ou seja, em qual índice começa a palavra texto dentro da string.

Podemos descobrir usando a função indexOf(), passando a palavra como parâmetro;

```js
console.log(umaString.indexOf('Um texto'));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
3

[Done] exited with code=0 in 0.239 seconds
```

Então ele mostra exatamente onde se inicia a palavra texto dentro da string.

Caso ele não encontre, será retornado um -1;

```js
console.log(umaString.indexOf('Um Texto'));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
-1

[Done] exited with code=0 in 0.231 seconds
```

Ele diferência letras maiúsculas e minúsculas, por isso não encontrou a palavra pesquisada.

Ele retorna -1 porque muitas vezes poderemos ter alguma palavra no índice 0, zero;

```js
console.log(umaString.indexOf('Um'));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
0

[Done] exited with code=0 in 0.174 seconds
```

Podemos também definir onde queremos que se inicie  a procura, por exemplo, iniciando no índice 3;

```js
console.log(umaString.indexOf('Um', 3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
-1

[Done] exited with code=0 in 0.191 seconds
```

Como não existe a palavra Um após o índice 3, ele retorna -1.

Se tentar-mos com a letra o, ele encontra e retorna o índice correto;

```js
console.log(umaString.indexOf('o', 3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
7
[Done] exited with code=0 in 0.213 seconds
```

***<u>lastIndexOf()</u>***

Podemos utilizar o lastIndexOf para fazer a pesquisa do final para traz, ou seja, da direita para a esquerda.

Executando o código, apenas retirando o parâmetro do número do indice que queremos que a pesquisa se inicie, neste caso teremos o mesmo resultado,

Isso porque ele inicia de traz para frente.

Porém se colocarmos um índice que não existe, ele retornará -1.

```js
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('o', 3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
7

[Done] exited with code=0 in 0.227 seconds



// Saída com 3 como parâmetro
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
-1

[Done] exited with code=0 in 0.2 seconds
```

Testando com o m ele retorna de maneira correta;

```js
console.log(umaString.lastIndexOf('m', 3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
1

[Done] exited with code=0 in 0.156 seconds
```

<u>***Expressões regulares***</u>

Temos também algumas coisas referentes a expressões regulares, entre elas;

* match() => Com essa função conseguimos retornar os caracteres contidos em uma determinada cadeia de cara cteres;
  
  ```js
  console.log(umaString.match(/[a-z]/g));
  ```
  
  // Saída
  [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
  [ 'm', 't', 'e', 'x', 't', 'o' ]
  
  [Done] exited with code=0 in 0.129 seconds

```

```

Com o uso da expressão regular ele retorna todos as letras minusculas do texto.

<mark>/[a-z]/g</mark> => Este trecho de expressão regular requeriria um curso especifico para isso.

O que precisamos saber é que ele encontra esse array por conta da flag "g" que foi posto no final.

Se tirarmos o g ele muda o retorno;

```js
console.log(umaString.match(/[a-z]/));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
[ 'm', index: 1, input: 'Um texto', groups: undefined ]

[Done] exited with code=0 in 0.181 seconds
```

Ou seja, isso <mark>(/[a-z]/)</mark> faz parte das expressões regulares, o que diferência é se usamos a flag g ou não.

* search() => Ele encontra o índice onde o parâmetro foi encontrado;
  
  ```js
  console.log(umaString.search(/[a-z]/));
  ```
  
  // Saída
  [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
  1
  
  [Done] exited with code=0 in 0.202 seconds

```
Ele retorna o índice daquilo que pedimos para buscar foi encontrado.

Podemos buscar por letra especifica;

```js
console.log(umaString.search(/x/));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
5

[Done] exited with code=0 in 0.175 seconds
```

  Ele retorna o índice onde o caractere foi encontrado.

  Muito similar ao indexOf, com a diferença de aceitar expressões regulares.

* replace() => No caso do replace podemos ou não utilizar expressões regulares.
  
  Por exemplo, se quisermos substituir a palavra "Um", por outra palavra, por exemplo "Outra coisa";
  
  ```js
  console.log(umaString.replace('Um', 'Outra coisa'));
  ```
  
  // Saída
  [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
  Outra coisa texto
  
  [Done] exited with code=0 in 0.206 seconds

```
Ele irá substituir o texto.

Podemos utilizar as expressões regulares também;

```js
console.log(umaString.replace(/Um/, 'Outra coisa'));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
Outra coisa texto

[Done] exited with code=0 in 0.217 seconds
```

  Podemos utilizar em strings maiores, substituindo varias letras de uma vez;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma';
console.log(umaStringMaior.replace(/r/, '@'));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
O @ato roeu a roupa do rei de roma

[Done] exited with code=0 in 0.201 seconds
```

  Deste modo porém, apenas a primeira letra foi substituida, ou seja, apenas o primeiro "r" foi substituido.

  Se precisamos que isso seja repetido varias vezes, precisamos adicionar a flag g;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma';
console.log(umaStringMaior.replace(/r/g, '@'));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
O @ato @oeu a @oupa do @ei de @oma

[Done] exited with code=0 in 0.211 seconds
```

<u>***Atributo .length()***</u>

Retorna o tamanho da string;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.length);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
35

[Done] exited with code=0 in 0.203 seconds
```

Uma curiosidade é a diferença da contagem em relação ao total de strings e ao índice, isso porque o índice inicia a contagem no 0, zero, e o .length conta o total de carcteres, incluindo o zero.

```js
                      0123456789
let umaStringMaior = 'O rato roe';
console.log(umaStringMaior.length);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
10

[Done] exited with code=0 in 0.179 seconds              
```

Ou seja, ele conta todos os caracteres da string.

Por isso o zero conta como um, 1.

<u>***Função slice()***</u>

Podemos pegar um trecho da string, ou seja, fatiar a string.

Para isso podemos utilizar a função slice, que irá cortar o trecho da string para nós.

Então usamos a função passando como parâmetro onde iniciar e onde terminar o corte;

```js
// Função slice()     0123456789
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.slice(2, 5));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
rat

[Done] exited with code=0 in 0.215 seconds
```

Se colocarmos até o índice 5 ele retorna a palavra incompleta.

```js
// Função slice()     0123456789
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.slice(2, 6));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
rato

[Done] exited with code=0 in 0.215 seconds
```

Colocando até um índice após ele retorna a palavra completa.

Precisamos pegar um caractere a mais após o fim para ter a palavra completa.

Nesta função podemos também utilizar negativos para iniciar o slice(), a busca, e assim ele irá começar do final para traz, ou seja, irá retornar os últimos caracteres correspondentes ao número indicado na função;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.slice(-3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
ma.

[Done] exited with code=0 in 0.285 seconds
```

Aqui ele retorna ma. pois são os primeiros caracteres de traz para frente.

Pois ele adiciona a length, que é o tamanho total da string, inicia o corte no índice que é o length total menos o valor que está no parâmetro;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.length - 3);
console.log(umaStringMaior.slice(-3));
console.log(umaStringMaior.slice(32));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
32 // Tamanho da string menos 3
ma.// Tamanho total -3  
ma.// Iniciando a partir do tamanho total -3

[Done] exited with code=0 in 0.214 seconds
```

Então quando usamos valores negativos ele inicia a partir do resultado do length total menos o valor que passou como parâmentro.

Podemos pegar  a palavra roma inteira, colocando a quantidade de caracteres da palavra como um número negativo;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.slice(-6)

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
roma.

[Done] exited with code=0 in 0.21 seconds
```

Podemos definir um limite de até onde ela vai ser cortada, por exemplo até a string -1;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.slice(-5, umaStringMaior.length -1));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
roma

[Done] exited with code=0 in 0.221 seconds
```

Ele retorna a palavra roma sem o ponto final.

Podemos também abreviar e colocar apenas o -1 para definir até onde irá cortar a string.

```js
console.log(umaStringMaior.slice(-5, -1));
```

<u>***Função substring()***</u>

Outra função que tem o mesmo resultado de fatiar a string é a substring(), e podemos declara-la assim;

```js
console.log(umaStringMaior.substring(umaStringMaior.length -5));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
roma
roma. // Usando a substring

[Done] exited with code=0 in 0.24 seconds
```

Para ignorar-mos o final podemos declarar assim;

```js
console.log(umaStringMaior.substring(umaStringMaior.length -5, umaStringMaior.length -1));
```

Com a substring precisamos de muito mais código para se obter o mesmo resultado da função slice().

<u>***Função split()***</u>

Podemos dividir a string baseada em algum caracter, por exemplo, podemos dividir a string em todos os espaços, neste caso pegamos todas essas palavras separadas em um array. 

Então para dividir as palavras pelos espaços contidos na string declaramos da seguinte forma;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.split(" "));

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
[
  'O',     'rato',
  'roeu',  'a',
  'roupa', 'do',
  'rei',   'de',
  'roma.'
]

[Done] exited with code=0 in 0.227 seconds
```

Nos é retornado um array de caracteres, ou seja, cada palavra em um índice de um array.

Podemos dividir pelos "r's", e note que os valores passados como parâmetro são ignorados no resultado;

```js
console.log(umaStringMaior.split("r"));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
[ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de ', 'oma.' ]

[Done] exited with code=0 in 0.144 seconds
```

Podemos também definir em quantas vezes queremos que esse processo se repita;

```js
console.log(umaStringMaior.split(" ", 3));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
[ 'O', 'rato', 'roeu' ]

[Done] exited with code=0 in 0.225 seconds
```

***<u>Função toUpperCase()</u>***

Deixa todas as strings maiusculas;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.toUpperCase());


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
O RATO ROEU A ROUPA DO REI DE ROMA.

[Done] exited with code=0 in 0.199 seconds
```

***<u>Função toLowerCase()</u>***

Deixa todos os caracteres minusculos;

```js
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.toLocaleLowerCase());


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula13- mais sobre strings/index.js"
o rato roeu a roupa do rei de roma.

[Done] exited with code=0 in 0.211 seconds
```

\* Ver a documentação em; 

* [JavaScript Tutorial](https://www.w3schools.com/js/)[JavaScript Tutorial](https://www.w3schools.com/js/)

* [JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## <mark><u>***Exercicio***</u></mark>

Criamos uma pasta para o exercicio dentro da pasta da aula 13. 

Então dentro da pasta "exercicio" criamos um arquivo html;

* index.html, extrutura do doc html;

É uma boa prática de programação separar o javascript do html, porém neste caso faremos tudo dentro do body mesmo.

Então adicionamos a tag script dentro do body;

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicios aula 13</title>
</head>
<body>

    <script>


    </script>
</body>
</html>
```

Criamos um comando para o usuário digitar o nome no prompt;

```javascript
    <script>
        const nome = prompt('Digite seu nome');
    </script>
```

E testamos se está carregando o prompt para o usuário.

Deixamos o console aberto, pois caso aconteça algum erro será mostrado no console.

Poderíamos digitar dentro do própio alert(), porém como são muitas coisas, é melhor digitar na própia página html.

Possuimos uma função chamada <mark>document.write('Texto');</mark> que digita o texto direto no doc html;

```js
// Forma completa de chamar a função
window.document.write('Texto');
```

Notemos que o <mark>document.write('Texto');</mark> é um elemento do window javascript e portanto não funciona no node.js.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-05%2020-25-51.png)

* Sempre que trabalhamos com o browser temos o objeto window, que é o objeto inteiro da janela.

* E dentro de window temos o document, que podemos abreviar a chamada apenas para document.algumaCoisa, não precisando digitar window antes, ou seja, podemos chamar direto document sem chamar window.

* E o document se refere ao documento html aberto, que é a parte em branco todo aberto no navegador.

* E dentro do document temos o body, que podemos pedir para o javascript escrever alguma coisa dentro do documento html no body.
  
  ```html
  <body>
  
      <script>
          const nome = prompt('Digite seu nome');
      </script>
  </body>
  ```

Para utilizar-mos o javascript para escrever algo no html podemos utilizar a seguinte função;

```js
window.document.body.innerHTML = 'Qualquer texto.'
```

A função innerHTML se refere as tags e textos que estão dentro do body.

Com ele podemos inserir textos ao documento html.

Um problema é que sobescreve o texto, ou seja a cada vez que digitar-mos um texto novo ele apaga o anterior e adiciona o texto novo.

Para resolver isso, e para que ele incremente sempre o que foi digitado, podemos usar o sinal de atribuição = mas com o sinal de +, que faz a concatenação dos textos digitados;

```js
window.document.body.innerHTML += 'Qualquer texto.'
```

E assim tudo que formos digitando será incrementado ao final;![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-05%2020-47-15.png)

Acabamos tendo também o problema de não haver quebra de linha dessa maneira, para resolver isso podemos usar o \<br> ao final da frase digitada;

<mark>NÃO TENTAR ENTENDER TUDO 100%, IR POR OBJETIVOS, AGORA O OBJETIVO É</mark> <mark>COLOCAR TEXTO DENTRO DO DOC HTML.</mark>

Porém o que estamos digitando não está sendo salvo, então voltamos ao doc html e adiconamos a seguinte linha de código ao javascript;

```js
document.body.innerHTML = `Seu nome completo é ${nome} </ br>`;
```

Para inserir mais frases precisamos colocar o sinal de + antes do sinal de atribuição, para concatenar as frases;

```js
document.body.innerHTML += `Seu nome completo é ${nome} </ br>`;
```

Podemos começar com +=, se o documento estiver vazio.

<u>***Exercicio***</u>

Para o exercicio própriamente dito iremos utilizar algumas funções para manipular strings.

Seguem as perguntas que teremos que implementar as funções de retorno das respostas.

```js
const nome = prompt('Digite seu nome completo:');
  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ______ letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ______<br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ______<br />`;
  document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ______<br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`;
```

Essa sería a possível solução para o exercicio;

```js
    <script>
        const nome = prompt('Digite seu nome completo:');
        document.body.innerHTML += `Seu nome é: ${nome}<br />`;
        document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
        document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br />`;
        document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? Índice ${nome.indexOf('a')} <br />`;
        document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? Índice ${nome.lastIndexOf('a')} <br />`;
        document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
        // As palavras são o array de palavras
        document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
        document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br />`;
        document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br />`;
    </script>
```

Correções;

* Adicionamos o strong para deixar as palavras em negrito.

* Tanto faz o charAt ou os colchetes, o professor preferiu os colchetes;

* Na função slice como não passamos o end ele vai até o final, podemos especificar colocando nome.length, mas não é obrigatório;

* No índice por letra ele difere letras com acentos e sem acentos;

* Nas palavras separadas ele exibe essas separadas por vírgula.

<u>***Código corrigido;***</u>

```js
const nome = prompt('Digite seu nome completo:');
        document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
        document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
        document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong><br />`;
        document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? Índice <strong>${nome.indexOf('a')}</strong> <br />`;
        document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? Índice <strong>${nome.lastIndexOf('a')}</strong> <br />`;
        document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`;
        // As palavras são o array de palavras
        document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
        document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong><br />`;
        document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br />`;
```
