# Seção 2 - JavaScript básico para iniciantes

## Console log - A primeira coisa a se aprender em JS

Essa é a função que mais usaremos como desenvolvedores JavaScript, para exibir coisas na tela, debugar o código, etc...

Neste momento iniciamos com a aula 3.

* Criamos a pasta aula3 no vscode, na seção 2 ;

* Dentro desta pasta criamos um arquivo .js, um index.js.

Sempre que quisermos exibir algo na tela iremos utilizar a função console.log();

Que na verdade é um método que se chama log, que está dentro do objeto console.

```
console.log();
```

Dentro da função console.log("Qualquer coisa"); podemos colocar qualquer coisa, uma variável, um objeto, e como não vimos nada disso ainda usaremos valores literais para os exemplos iniciais.

Para escrever um texto qualquer precisamos envolver este texto entre aspas '', ou seja, sempre que formos inserir um valor literal, este precisará estar entre aspas.

Envolvendo o nome com aspas ele será exibido na tela.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-15%2020-32-53.png)

Esta também é uma maneira de descobrir-mos o valor de uma variável, ou de um objeto, de um array ou coisas do tipo.

A funçã console.log exibe o conteúdo e quebra a linha como comportamento padrão.

Outra maneira de exibir textos literais é com o uso das crases.

```
console.log('Carlos Martins da Silva');
console.log("Carlos Martins da Silva");
console.log(`Carlos Martins da Silva`);
```

```
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula3/index.js"
Carlos Martins da Silva
Carlos Martins da Silva
Carlos Martins da Silva

[Done] exited with code=0 in 0.197 seconds
```

 

### Diferenças entre as aspas

Algumas diferençãs com o uso das aspas em JS;

* O uso das aspas simples (''), ou duplas(""), impossibilita o uso de um texto "entre aspas", ou seja, o motor do JS entende que estamos querendo fechar as aspas no lugar errado, causando um comportamento indesejado.

* Uma maneira de resolver é usando as aspas de fora inversas as de dentro, por exemplo, se quisermos que o nome esteja entre aspas simples, usar aspas duplas para envolver o texto, e aspas simples na palavra especifica.

```
console.log('"Carlos" Martins da Silva');
console.log("Carlos 'Martins da Silva'");
console.log(`Carlos Martins da Silva`);



[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula3/index.js"
"Carlos" Martins da Silva
Carlos 'Martins da Silva'
Carlos Martins da Silva

[Done] exited with code=0 in 0.222 seconds
```

* Aspas duplas dentro de aspas simples em um texto funciona;

* Aspas simples dentro de aspas duplas em um texto funciona;

O uso da crase é para algo bem mais avançado que se chama template string, e dentro das crases podemos utilizar tanto aspas simples quanto aspas duplas.

```
console.log('"Carlos" Martins da Silva');
console.log("Carlos 'Martins da Silva'");
console.log(`""Carlos" 'Martins da Silva'`);


[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula3/index.js"
"Carlos" Martins da Silva
Carlos 'Martins da Silva'
"Carlos" 'Martins da Silva'

[Done] exited with code=0 in 0.207 seconds
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-15%2020-49-21.png)

Essas são as três maneiras de exibir textos no console.

*<u>String = Texto</u>*

### Exibir números

Para exibir números em JS, colocamos os números de forma literal dentro do parênteses, sem o uso de aspas ou crases.

Números que estão dentro de aspas são considerados strings, números que estão fora de aspas são considerados numbers, ou seja, números de verdade, que podemos usar em calculos e etc...

```
console.log(123456);
```

* Números reais - Números de ponto flutuante, para exibilos utilizamos o ponto (.) para separar as casas decimais;

```
console.log(123456, 15.85);
```

* Dentro do console.log podemos inserir vários valores separado por virgula, que ele exibirá esses valores sem quebrar linha;

```
// String - Textos
console.log('"Carlos" Martins da Silva');
console.log("Carlos 'Martins da Silva'");
console.log(`"Carlos" 'Martins da Silva'`);

// Números inteiror
console.log(123456, 20.99, "Carlos Martins da Silva");

// Números reai
console.log(15.85);



[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula3/index.js"
"Carlos" Martins da Silva
Carlos 'Martins da Silva'
"Carlos" 'Martins da Silva'
123456 20.99 Carlos Martins da Silva
15.85

[Done] exited with code=0 in 0.206 seconds
```

***Ele mostra o texto como uma string envolvida por aspas, justamente para dizer que se trata de um texto.***

***Em JavaScript os números, tanto de ponto flutuante ou inteiros são do tipo numbers, não tem separação como em outras linguagens de programação, como por exemplo, float no Java.***

Sempre que quisermos debugar o código, usaremos a função console.log

Essa funçã só é exibida na saída do terminal, ou no console do navegador, isso sem iterferir no fluxo do site.

___

## <u>Exercicio aula3</u>

<u>Objetivo</u>

Exibir a seguinte frase no console do vscode;

```
Meu nome é "NOME". Estou aprendendo JavaScript às 21 da noite.
```

* O número deve ser do tipo número, fora de aspas;

* A primeira parte da string deverá estar separada do número;

* Que deverá estar separado do restante da string.

### Resultado

*Código:*

```js
console.log('Meu nome é "Carlos". Estou aprendendo JavaScript às', 21, 'da noite.');
```

*Saída terminal:*

```js
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula3/exercicios/index.js"
Meu nome é "Carlos". Estou aprendendo JavaScript às 21 da noite.

[Done] exited with code=0 in 0.162 seconds
```

- ## Aula 4 - Comentários em js

Iniciamos criando a pasta aula 4 dentro da seção.

Criamos um arquivo chamado comentários.js.

Comentários são trechos de código ignorados pelo motor javascript.

* Comentários em uma linha usamos //, duas barras.

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
```

* Podemos ter várias linhas de código com comentários;

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

* Comentário em bloco

```
/*
    Comentários em bloco
    para várias
    linhas.
*/

console.log("2");
console.log("3");
console.log("4");
```

Comentários em bloco são muito utilizados em documentações, indicando seus autores, funcionalidades etc...

* Podemos usar o comentário para impedir que um trecho de código seja executado;

```js
```js
// Comentário
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
// console.log("2");
console.log("3");
console.log("4");
// Comentário ignorado
```

```
* E podemos usar os comentários de bloco para impedir que trechos inteiros de código não sejam executados;

```js
console.log("Olá mundo!!"); // Aqui tem outro comentário
console.log("1");
// Comentário
/* console.log("2");
console.log("3");
console.log("4");
*/

console.log("3");

// Comentário ignorado
```

## Aula 5 -

Vimos que podemos utilizar o coderunner para executar o arquivo js direto na saída do console, apenas clicando no play.

Podemos também usar o comando no terminal para executar o arquivo js.

```js
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula5/index.js"
Olá
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ 
```

Então através do node podemos executar o código js tanto no terminal quanto na saída no vscode.

Podemos usar os comandos de navegação para acessar os arquivos e pastas dentro do bash do linux.

Por exemplo, podemos executar o arquivo direto do ambiente global através do seguinte comando;

```js
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ node aula5/index.js
Olá
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ 
```

Dizendo o nome da pasta e o nome do arquivo.

Desde o inicio do curso estamos utilizando o node.js para executar os arquivos js.

Agora iremos mesclar javascript com html, e veremos como colocar o js dentro do html, e veremos, com boas praticas de programação, como separar o arquivo js do arquivo html.

* Criamos um arquivo html dentro da pasta aula 5;

* Criamos a extrutura do html5, e prosseguimos.

Uma das maneiras de integrar o js na página é através da tag script, podemos inserir a tag script tanto dentro do head quanto dentro do body.

* Javascript dentro do head;

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
    <script>
        // Cometário
        console.log("Olá mundo");
    </script>
</head>
<body>

</body>
</html>
```

* Porém essa maneira não é uma boa prática de programação, colocar o js dentro do head, mesmo que algumas bibliotecas sugiram colocar o js aqui dentro.
  
  Porém neste caso em especifico o js pode retardar o carregamento da página, pois quando o navegador executar a página tentará executar primeiro os scripts dentro da página, isso poderá fazer com que o usuário fique esperando tempo demais com uma página em branco.

* Como uma boa prática de programação, é recomendado utilizar o script no final da tag body;

```js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
</head>
<body>

    <script>
        // Cometário
        console.log("Olá mundo");
    </script>
</body>
</html>
```

* Agora podemos abrir esse arquivo no google chrome, para isso podemos clicar com botão direito na pasta da aula5 e selecionar 

```
Open Containing Folder
```

*Isso para acessar a pasta onde está o arquivo*

* Abrir o index.html no chrome;

* A unica coisa que vemos é o titulo do documento;

* Pressionando ctrl + u podemos ver o código fonte da página;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2009-42-32.png)

* O código js só é exibido no console do navegador, ou no terminal de saída do vscode, não será exibido na página, através do inspecionar e console.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-19-00.png)

* Criamos mais um trecho que será exibido no navegador;

```js
    <script>
        // Cometário
        console.log("Olá mundo");
        console.log("Esse trecho será exibido no console do navegador.");
    </script>
```

<u>*Resultado no console do navegador*</u>

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-22-28.png)

Aqui podemos ver que isso ficará extremamente longo e confuso se deixar-mos o html junto com js, no mesmo arquivo.

É interessante sempre que trablhar-mos com html e js separar os arquivos.

Então para ficar mais organizado e fácil de se trabalhar, separamos os arquivos, js e html, como se fosse um arquivo css, linkando esse js no doc html da mesma forma que fazemos com um arquivo css separado.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
</head>
<body>

    <script src="index.js"></script>
</body>
</html>
```

Dessa forma temos o html e javascript separados em dois arquivos, dizendo para o navegador para buscar dentro deste arquivo os scripts necessários para se carregar a página.

Pressionando ctrl + u não teremos mais o scritp dentro do doc html, mas uma tag indicando que existe um arquivo js que está carregando os scripts da página;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-31-05.png)

Quando falamos em front-end estamos falando de uma página que é carregada e renderizada no lado cliente, ou seja, no computador de quem acessou seu site, o que é neste caso, estamos trabalhando na parte frontal do site.

Uma coisa que precisamos entender é que apesar de o google chrome e o node estarem usando o motor do javascript juntos, eles não tem o mesmo comportamento entre si.

Tetamos inserindo um alert(), com o texto olá mundo no console do chrome, e o resultado é uma janela que aparece no navegador quando atualizamos a página;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-37-03.png)

Esse alert() cria uma janela que segura a página até que o usuário clique no "OK". 

Porém esse alert() não existe quando estamos no terminal de saída do vscode, esse elemento não existe.

Mostrando inclusive um erro ao executar o js com alert inserido;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-43-47.png)

Ou seja, ele não sabe exsecutar a função de alera pois ela não está definida.

Porém no navagador o alerta será exibido normalmente, pois trata-se de uma função reconhecida no navegador.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-47-43.png)

Isso nos indica que são dois ambientes, um do node.js e outro do navegador que normalmente não tem as mesmas coisas.

Por isso, geralmente quando iremos trabalhar no navegador iremos manipular o DOM, que é o documento html.

Então, quando iremos manipular tags, como divs, botões clicaveis, formulários, estaremos trabalhando no front-ende, dentro do navegador.

Já quando formos trabalhar com base de dados, com rotas iremos trabalhar no back-end, e assim trabalharemos no node.js.

E essa é a separação entre os dois, front para manipular o DOM e back manipulando com o node.

Podemos fazer a separação dos arquivos js e html de uma maneira ainda mais profissional criando um pasta js que conterá todos os scripts que serão usados na página, deixando uma extrutura ainda mais organizada.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-57-50.png)

Mudamos o caminho de referência do arquivo js também.

```js
<script src="./js/index.js"></script>
```

E dessa forma unimos js com html para escrever-mos os scripts.

## Aula 6 - Variáveis com let

Nesta aula abordamos o conceito de variáveis, que são muito comuns em quase todas as linguagens de programação, para que possamos guardar valores em tempo de execução do código.

* Criação da pasta aula6;

* Criação do arquivo index.js;

Em programação temos o conceito de variáveis para colocar valores na memória do pc.

Executamos o texto disponibilizado com exemplo;

```js
console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve um filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');
```

Neste trecho de código notamos que repetimos varias vezes a palavra João.

Seria interessante abstrair o nome João e coloca-lo em alguma parte da memória, e sempre que precisar-mos desse nome podemos referenciar esse nome na memória.

Então criamos uma variável logo acima de onde iremos precisar utiliza-la.

Em javascript possuímos duas maneiras de criar variáveis, (variáveis são trechos que podem ser modificados ao longo do código).

Podemos criar uma variável com;

* let = Onde podemos dar um rótulo para essa variável, por exemplo nome, e já inicializamos ela com o nome João;

```js
let nome = João;
```

* var = Outra maneira de se criar uma variável am JS, porém como é mais antigo não é muito usado nos dias atuais.

Sempre utilizaremos let para criar variáveis.

Então agora podemos atualizar os códigos, colocando no lugar de João a variável correspondente.

```
let nome = 'João';

console.log(nome, 'João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve um filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');
```

Utilizando a virgula para separar a variável do restante do código.

Se modificar-mos o nome dentro da variável ele irá buscar pelo novo nome adicionado, ou como se trata de uma variável, ele busca pelo que está salvo dentro desta.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-46-47.png)

Substituimos em todos os locais onde haja o nome João.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-49-01.png)

Assim ele irá alterar em todas as situações onde tenha o nome declarado.

Isso facilita muito, pois sempre que precisar-mos alterar o nome alteramos apenas na variável e não em todas as linhas do código.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-52-21.png)

Também podemos criar uma variável e não inicializa-la, apenas reservando o espaço na memória mas sem inicializar.

```js
let variavelSemValor;
```

Se executar-mos essa variável não teremos, pois ela tem um valor que indica para o JS que ela não tem um valor.

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/index.js"
undefined

[Done] exited with code=0 in 0.217 seconds
```

Ela retorna um valor de undefined.

Podemos inicializar essa variável posteriormente dessa maneira;

```
let variavelSemValor;
variavelSemValor = 'Carlos';

console.log(variavelSemValor);
```

Saída

```
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/index.js"
Carlos

[Done] exited with code=0 in 0.201 seconds
```

Então podemos declarar e inicializar a variável desta maneira;

```js
let nome = 'Nome';
```

Ou inicializa-la posteriormente;

```js
let nome;
nome = 'Nome';
```

Como uma variável pode alterar seu valor ao longo do código, o nome pode alterar, assim alterando o resultado do código.

```
let variavelSemValor;
variavelSemValor = 'Carlos';

console.log(variavelSemValor);

variavelSemValor = 'Maria';

console.log(variavelSemValor);
```

E após alterar-mos o valor da variável ela passa a ter o valor de Maria.

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/index.js"
Carlos
Maria

[Done] exited with code=0 in 0.206 seconds
```

O que não podemos fazer é redeclarar a variável, pois assim teremos um erro no código;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2013-06-00.png)

Isso para a execução do código.

### *Regras para criar variáveis*

* Não podemos criar variáveis com palavras reservadas pela linguagem JS, como por exemplo a palavra let;

```
let let;
let console;
let if;
```

* Variáveis precisam ter nomes significativos, precisamos declarar nossas variáveis com nomes que façam sentido no contexto do código, para facilitar o entendimento do mesmo;

```js
let n = 'João';
console.log(n);
```

Esse código irá funcinar, porém tem uma variável muito mau referenciada.

* Podemos por exemplo, em algum caso onde precisariamos armazenar o nome do cliente, fazer a declaração da variável de maneira clara, especificando que esta variável conterá o nome do cliente;

```js
let nomeCliente = 'Carlos';
console.log(nomeCliente);
```

* NÃO podemos iniciar o nome de uma variável com um número;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2013-19-47.png)

Isso irá gerar um erro na execução.

* Geralmente iniciamos variáveis com letras, e estas minusculas.

* Após a primeira letra podemos colocar números nos nomes;

```js
let maroon5;
```

* Nomes de variáveis NÃO podem conter espaços ou traços;

* Caso precisemos declarar variáveis com nomes compostos, usamos a convenção, que prevê o uso do camelCase na criação de variáveis.

```js
let nomeCompletoDoCliente = 'Carlos';
let nomeCompletoDoDependente = 'Carlos';
```

* Essas variáveis são case-sensitive, isso significa que letras maiusculas e letras minusculas fazem diferença.

```js
let nomeCompleto = 'Nome';
let nomecompleto = 'Nome';
```

Para o motor do JS essas variáveis são diferentes.

* NÃO podemos redeclarar variáveis com let;

```js
let nome = 'Carlos';
nome = 'João';
```

Neste exemplo criamos a variável nome e atribuimos o nome Carlos, em seguida, reatribuimos seu valor para João.

Sempre o último valor será utilizado, então podemos declarar a variável com um valor atribuido e depois modificar esse valor.

* <mark>Por fim NÃO UTILIZE VAR, UTILIZE LET.</mark>

---

## Aula 7 - Variáveis constantes

* Criar pasta da aula 7 e arquivos necessários;

Constantes são variáveis que não mudam sua declaração, ou seja, são declaradas e inicializadas ao mesmo tempo, e não podem ser redeclaradas.

São variáveis que não mudam seu conteúdo ao longo do código.

Seguem as mesmas regras do let;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-25-15.png)

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

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-30-03.png)

<u>*Missing initializer in const declaration*</u>

E se tentar-mos redeclarar uma const  teremos o seguinte erro;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2018-32-51.png)

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

* Então criamos uma variável com let que será alterada;

* Essa variável ira receber o valor da const resultado, que será 50 e irá multiplicar esse valor por 3, somando 150;

* Depois mudamos novamente ser resultado, agora adicionando 5 ao seu valor final que está em 150, somando agora 155.

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

* Então reatribuimos o valor dessa variável, que agora não é mais 150 e sim 155.

* Utilizamos o valor dela mesma e adicionamos 5 a ele.

* Devemos tomar cuidado, pois dessa forma perdemos o valor da resultadoTriplicado original.

* Diferente disso, os valores declarados nas constantes não perdem seu valor original, sendo possível resgata-los a qualquer momento.

Interessante é sempre ir evoluindo o valor da variável, no caso de uma constante do que ir alterando seu valor sempre com let, é claro que teremos situações que exigirão isso, mas sempre que possível é bom ir evoluindo o valor dela.

JavaScript é uma lingagem de tipagem dinâmica, ou seja, quando declaramos uma variável e atribuimos um valor a ela, o motor do JS já salva esse valor com seu tipo atribuido.

Podemos descobrir o tipo de dado de uma variável da seguinte forma;

* Para se ter certeza do tipo de dado contido na variável podemos usar a função typeof, dentro do console.log, passando o nome da variável logo a seguir;

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

---

## Aula 8 - Exercicio

Um exercício para praticar os conceitos de variáveis vistos até agora.

Imprimir na tela a seguinte frase;

```js
Carlos Martins da Silva tem 38 anos pesa 84 kg tem 1.8 de altura 
seu IMC é de 25.xxxxx
Carlos Martins da Silva nasceu em xxxx.
```

Para iniciar a criação das variáveis precisamos análisar se elas irão mudar seu valor no decorrer do código, então análisamos uma a uma.

* Nome - Como o nome não irá alterar no decorrer do código, declaramos ele como uma const;

* Sobrenome - Para o sobrenome a mesma coisa, portanto const;

* Idade - Também não irá mudar, const;

* Peso - Também não muda, const;

* Altura - Também como const;

* IMC - Para o imc devemos declarar uma let, pois trata-se de uma variável que altera seu valor de acordo com as outras já inseridas;

* Ano nascimento - Para esse, como será alterado pelo usuário, declaramos como let.

Fórmula do IMC = peso / (altura * altura);

Podemos também usar altura ao quadrado.

* Modificamos a altura para ser altura em metros;

* Para calcular o ano de nascimento apenas fez o ano atual subtraindo a idade;

A principio demonstrou como exibir essas informações com o console.log.

Outra maneira de formar a frase completa é usar o sinal de + para unir os valores, colocando o operador seguido de um espaço em branco, entre aspas.

Quando tivermos variáveis na junção, colocamos um espaço para separar.

Porém podemos também utilizar as templates strings para formar as frases, uma template string é uma string que podemos colocar variáveis dentro dela.

Para isso retiramos todas as aspas e virgulas que foram adicionadas e envolvemos toda a seção entre crases.

Para executar uma expressão JavaScript dentro de uma string que está dentro de crases, usamos o cifrão seguido de chaves, \${desseModo}.

Essa é uma das maneiras mais legiveis de se declarar as expressões, também a mais moderna.

```js
console.log(`${nome} ${sobrenome} ${idade} anos de idade e pesa ${peso} Kg.`);
console.log(`Tem ${alturaEmMetros} m de altura e seu IMC é de ${indiceDeMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
```

---

## Aula 9 - Let vs Var Primeira diferença

Como as diferenças entre var e let são muitas, ao longo do curso, na medida que iremos usar as variáveis, apresentaremos as diferenças entre elas.

Uma das principais diferenças entre o var e o let é que o var aceita que uma variável seja redeclarada após iniciada, por exemplo;

```js
var nome = 'Carlos';
var nome = 'Claúdio';

console.log(nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula9 - Lets vs Var/index.js"
Claúdio

[Done] exited with code=0 in 0.193 seconds
```

Notamos que mesmo ela sendo declarada e atribuido o valor de Carlos, a variável var nome aceita ser redeclarada.

Isso foi corrigido em 2015 (ES6) com o ECMAScript6, que introduziu a variável let.

***\* ECMAScript é a padronização do JavaScript, quem cuida das versões e adiciona funcionalidades a linguagem.***

Podemos também criar variáveis sem declarar nenhum tipo, por exemplo;

```js
nome = 'Carlos'
```

Aqui criamos uma variável sem colocar nada no seu tipo, apenas o nome dessa variável e seu valor, porém isso é extremamente contra indicado, nunca devemos declarar variáveis assim. Testando esse código retornou vazio, porém vale a regra de nunca criar uma variável assim.

Pois isso cria uma variável global e pode criar vários problemas no sistema.

\* ***<u>Não podemos criar variáveis sem const ou let.</u>***

Quando usamos o let, e inicializamos ela, não podemos redeclarar essa variável;

```js
let nome = 'Carlos';
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula9 - Lets vs Var/index.js"
Carlos

[Done] exited with code=0 in 0.214 seconds
```

Se tentarmos redeclarar uma variável com let teremos esse erro;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-20%2020-21-29.png)

Para alterar utilizamos a variável sem a palavra let, pois assim estaríamos redeclarando essa variável;

```js
let nome = 'Carlos';
nome = 'Mario';

console.log(nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula9 - Lets vs Var/index.js"
Carlos

[Done] exited with code=0 in 0.214 seconds

[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula9 - Lets vs Var/index.js"
Mario

[Done] exited with code=0 in 0.205 seconds
```

Aqui nós redeclaramos seu conteúdo, alterando o nome da usuário.

\* ***<u>Outras diferenças verems ao longo do curso.</u>***

---

## Aula 10 - Tipos de dados primitivos

Os tipos de dados primitivos em JavaScript;

* Strings - Que armazenam caracteres como letras, podendo ser declaradas com aspas simples ou duplas e também com crases, e com esta última podemos também usar template strings dentro delas;

```js
const nome = 'Carlos'; String
const nome = "Carlos"; String
const nome = `Carlos`; String - Nessa declaração podemos usar template strings.
```

* Number - Usado para armazenar números;

```js
const num1 = 10; Number - Inteiro
const num1 = 10.52; Number - Float, também 
```

* Undefined - Isso ocorre quando declaramos uma variável e não inicializamos ela;

```js
let nomeAluno; Undefined
```

Ou seja, essa variável recebe um valor do JS de indefinido, NÃO APONTA PARA LOCAL NENHUM NA MEMÓRIA.

* Null - Similar ao undefined, também não aponta para lugar nenhum na memória, declaramos fora de aspas e com letras minusculas.

```js
const sobrenomeAluno = null; // Nulo, não aponta para nada.
```

Utilizamos o null quando queremos desconfigurar uma variável, colocar o valor de uma variável como nulo.

\* Um exemplo, imagine que temos um site onde o usuário pode alterar a cor de fundo do perfil dele, caso ele não configure nenhuma cor, podemos inicializar a variável como nulo, explicitando que essa variável não tem nenhum valor, e será alterada caso o usuário configure alguma cor, e caso ele desmarque a cor, retorna explicitamente para nulo.

\* <u>***Diferença undefined e null***</u>

* Quando usamos o nullo explicitamos que não queremos que essa variável aponte para qualquer lugar da memória;

* Undefined - Na verdade nunca iremos setar uma variável como undefined, quem faz isso é o próprio JS, 

Ou seja, quando usamos o undefined a linguagem se encarrega de inicializar a variável como indefinida, já quando uso o null, estou dizendo para a linguagem que aquela variável não irá apontar para lugar algum da memória.

* Booleanos - Retornam verdadeiro ou falso;

```js
// Aluno aprovado ou reprovado
const aprovado = true; // Retorna verdadeiro ou falso
```

Basta usarmos true ou false como inicialização da variável parar declara-la como boolean.

Booleanos tratam-se de valores lógicos, são situações onde podemos mudar totalmente o fluxo do programa de acordo com o resultado lógico boolean.

Sempre que usar-mos o boolean estamos precisando fazer um desvio de fluxo do sistema.

* Podemos ver o tipo de dados utilizando o typeof seguido do nome da variável;

```js
console.log(typeog nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
string

[Done] exited with code=0 in 0.221 seconds
```

* Se quisermos ver o tipo e o valor, adicionamos uma virgula seguida do nome da variável;

```js
console.log(typeog nome, nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
string Carlos

[Done] exited with code=0 in 0.229 seconds
```

Isso será o mesmo para números.

* Para o undefined ele retorna o mesmo valor para ambos;

```js
let nomeAluno;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
undefined undefined

[Done] exited with code=0 in 0.143 seconds
```

* No caso do null, ele retorna como um objeto e aponta para null;

```js
const sobrenomeAluno = null;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
object null

[Done] exited with code=0 in 0.206 seconds
```

Porém pode ser considerado um bug esse resultdo, isso porque null não se enquadra como objeto.

* E também teremos o tipo booleano com seu valor;

```js
const aprovado = false;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
boolean false

[Done] exited with code=0 in 0.24 seconds
```

* Dados passados por referência, o exemplo a seguir mostra a diferença de um tipo de dado primitivo e um tipo de dado passado por referência.
  
  * Para isso criamos um array, e chamamos de a;
    
    ```js
    const a = [1, 2];
    ```
  
  * E outra constante que irá receber a, chamada b;
    
    ```js
    const b = a;
    ```
  
  Se dermos um console.log ele irá imprimir ambos os conteúdos, pois são iguais.
  
  Porém se adiconar-mos outro valor a "b" usando a função .push, e passando como parâmetro 3.
  
  Teoricamente, deveriámos adicionar o valor somente a b, ficando a=[1, 2] e b ficando b=[1, 2, 3], porém o valor é adicionado tanto em a quanto em b, isso porque quando criamos uma variável por referência, ela faz o valor de b apontar para o mesmo local que o valor de a aponta na memória, ou seja, a e b apontam para o mesmo valor na memória, isso é um tipo de dado passado por referência.
  
  Quando usamos os dados primitivos, por exemplo, quando criamos duas variáveis, e atribuimos o valor de uma a outra, ele está copiando seu valor para essa variável;
  
  ```js
  // a está sendo copiado em b
  const a = 2;
  const b = a;
  ```

E ambos sustentam seu valor, ou seja, se altero o valor de um não altera o valor do outro.

---

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

## Aula 11 - alert, confirm e prompt(Navegador)

Nesta aula iremos ver três funções que irão nos ajudar a fazer os exercicios e também no dia-dia do desenvolvimento, para deixar as coisas mais dinâmicas e não ficar-mos apenas na tela do node.js.

Precisamos criar o hábito de ir para o navegador.

Para isso poderíamos simplesmente abrir o navegador, inspecionar e console, e começar a digitar o código aí, inclusive faremos isso em alguns momentos, mas para criar o hábito de criar um doc html e já linkar o js a ele iremos desde agora tentar criar esse hábito.

* Então criamos um doc html e js.

* Dica de nunca usar palavras com acentos ou caracteres especiais na criação dos arquivos, para não ter problemas de caminho posteriormente.

* Mais a frente iremos separarar os arquivos por categorias.

* Também criamos uma pasta separada para o JavaScript e dentro desta pasta criamos um arquivo index.js;

* Muitas vezes poderemos ver um arquivo generico chamado script.js, similar ao style.css, assim renomeamos o arquivo anterior para script.js

* No doc html linkamos o script;

* Feito isso podemos começar a digirar alguns scripts no arquivo script.js;

* Começamos com um comando básico que é o alert().

* Abrimos o arquivo html no navegador;

* A caixa de alerta que se abre apesar de não ser uma coisa muito bonita, é uma parte do navegador, pois isso não temos no node.js, por isso precisamos trabalhar no navegador.

* Se executar-mos a função alert() no node, teremos como retorno um erro;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-16-46.png)

Por isso não executamos essa função dentro do node.js

No navegador temos um elemento central, que é um elemento como se fosse o pai de todos os elementos, que é o objeto window, que se refere a janela do navegador propriamente dita.

E dentro desse objeto window possuímos essas funções que só funcionam na janela do navegador, ou seja, nesse objeto window.

Como por exemplo o alert(), que nos exibe a mensagem, trata-se de uma função que está dentro do objeto window;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-23-18.png)

Da mesma forma que podemos utilizar o console.log() para exibir alguma coisa no console, onde estamos chamando essae método que está dentro do objeto console.

Pois quando usamos o alert(), na verdade é um atalho para uma função/método que está dentro do objeto window;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-27-48.png)

Se digitar-mos window no console e pressionar-mos enter teremos o objeto window, e abrindo ele teremos todos seus métodos disponíveis;![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-29-47.png)

Tudo que está aqui dentro está relacionado com o objeto window, ou seja a janela do navegador.

Temos por exemplo, dentro desse objeto o document (que é o documento que está aberto na página) e dentro deste temos o body, que se trata do corpo html desse documento, onde teremos as divs, h1s, tags e etc.

Podemos ter a percepção de que esse obejto é gigantesco e iremos trabalhar muito com ele, quando formos manipular os elementos da página.

Porém neste momento é importante entender que o alert() é um atalho para window.alert(), assim como console.log().

Outras funções similares ao alert() são;

* confirm  => Que serve para confirmar coisas com o usuário, por exemplo, o usuário for deletar algo, podemos perguntar ao usuário com essa função se ele realmente deseja apagar tal conteúdo;

* Isso abrirá uma janela com dois botões, um para cancelar a operação e outro para confirmar. 

```js
confirm('Deseja apagar a lista?');
```

Essa função irá mostrar uma janela, onde poderemos confirmar a operação, e assim retornará um valor booleano true para a exclusão e para a função, ou cancelar que irá cancelar a operação e retornará um booleano false para a função.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-01-01.png)

Quando trabalhar-mos com condicionais usaremos muito os booleanos para desviar o fluxo do programa.

* prompt => Outra janela que podemos utilizar, trata-se de uma janela onde pedimos para o usuário digitar algo para nós.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-05-07.png)

Ela abre uma janela com um campo de inserção, para que possamos digitar algo e em seguida recupera essa string, ou seja, essa mensagem é retornada no console.

<u>***\* Quando uma função está dentro do objeto a chamamos de método, e quando está fora do objeto chamamos de função.***</u>

Então sobre essas três funções;

* alert() => faz um alerta, e podemos abreviar, chamando direto alert('Mensagem para o usuário.');
  
  Uma curiosidade é quanto ao retorno dessa função, que retorna undefined, isso quer dizer que o que foi retornado pela função não aponta para local nenhum na memória.

Então temos que sempre que utilizamos funções em javascript ela pode ou não retornar alguma um valor, ou seja, pode nos dar um valor de volta.

No caso do alert() não temos nenhum valor de retorno, ou seja, sempre o que retornar de alert() será undefined.

Por outro lado a confirm já nos retorna alguma coisa, por exemplo, se clicar-mos em cancelar ela retornará false, se clicarmos em ok retornará true.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-17-20.png)

Ou seja, a função confirm pode nos retornar dois valores, true ou false.

Nas funções que tem retorno, podemos capturar esse retorno, para isso;

* Podemos criar uma variável que ira pegar esse retorno; 
  
  ```js
  const confirma = confirm('Deseja realmente cancelar?');
  ```

Colocamos um texto, que nada tem haver com o que será retornado pela função, o texto é simplismente o que será exibido na caixa de texto.

O que será retornado estará relacionado com o que o usuário clicar nos botões.

E como estamos jogando isso em uma variável, o retorno dessa função estará nesta variável.

Executando o código ele retorna undefined, que não quer dizer que o retorno foi undefined, mas que capturamos o valor para a variável, ou seja , essa variável agora está salva na memória com o valor que o usuário pressionou.

* Se o usuário pressionou ok, a variável retorna true;

* Se o usuário pressionou cancelar, a variável retorna false;

Podemos ver o valor dessa variável apenas digitando o nome dela no console.

No console do navegador não precisamos digitar console.log para exibir o retorno de uma variável, apenas digitamos o nome dela e o navegador faz o resto para nós.

Podemos também utilizar o let para a variável.

Podemos também salvar outras coisas nas variáveis, como por exemplo números.

Podemos pedir para o usuário digitar números, e através das variáveis guarda-los na memória e posteriormente manipula-los como necessário.

```js
const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
```

Poderíamos tentar fazer a soma desses números assim;

```js
num1 + num2;
```

Mas acaba não dando certo pois ele concatena os resultados.

Pois ele está trabalhando com os resultados como texto.

Se digitar-mos typeof para os nums, eles retornarão texto.

Isso significa que o js está trabalhando de forma correta, pois o retorno do prompt para o usuário sempre será uma string.

Então podemos converter essas variáveis em type number, com o seguinte código;

```js
num1 = parseInt(num1);
```

Assim convertemos a string em números para poder trabalhar com calculos etc

Digitando typeof em num1 ele deverá retornar number.

Posteriormente realizamos a mesma operação com o num2;

```js
num1 = Number(num1);
```

Aqui podemos usar a função number para a conversão.

E assim conseguimos fazer as operações com essas variáveis.

## Exercicio

* Utilizar o prompt para capturar num1 e num2 do usuário, sugerimos utilizar soma, pois é onde teremos mais problemas, pois teremos que converter essas variáveis para números.

* Inserir duas mensagens para o usuário, uma para cada número que será inserido;

* Criar uma const que receberá o resultado dessa operação, após convertidos.

* Exibir o resultado com um alert() para o usuário, com a seguinte mensagem;
  
  ```js
  "O resultado foi" + ${resultado}
  ```

\* <u>***Não pode ser concatenação, deve ser soma.***</u>

*<u>Código da resolução</u>*

```js
/**
 * Exercício
 * 
  - Utilizar o prompt para capturar num1 e num2 do usuário, sugerimos utilizar soma, pois é onde teremos mais problemas, pois teremos que converter essas variáveis para números.

  - Inserir duas mensagens para o usuário, uma para cada número que será inserido;

  - Criar uma const que receberá o resultado dessa operação, após convertidos.

  - Exibir o resultado com um alert() para o usuário, com a seguinte mensagem;
 */


let num1 = prompt('Digite um número.');
let num2 = prompt('Digite outro número.');

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

// Usando a interpolação
// alert(`A soma destes números é igual a ${resultado}.`);

// Usando aspas simples
alert('A soma destes números é igual a ' + resultado + '.'); 
```

* Podemos utilizar o console.log para capturar os números que o usuário digitou;
  
  O resultado será exibido no console do navegador;
  
  ![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2020-58-06.png)

* Podemos verificar o tipo de retorno da variável com typeof;
  
  ![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2021-00-54.png)

Para o alert preferêncialmente usar as templates strings.

* E usando as templates strings podemos fazer a expressão dentro das chaves, não sendo necessário nem mesmo criar outra variável para conter o resultado.
  
  ```js
  alert(`A soma destes números é igual a ${num1 + num2}.`);
  ```
  
  ![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2021-06-53.png)

Porém podemos fazer isso em alguns casos, outros não, por exemplo em códigos mais complexos isso tende a complicar mais, então seria muito mais explicito criarmos uma variável de resultado e usala nas chaves.

Usando uma variável e colocando o resultado dentro das chaves torna o código mais explicito, isso facilita na hora de ler o código e resolver possíveis erros.

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

O exercício consiste em inverter os valores das  variáveis;

```js
let varA = 'A'; => Receber o valor de B
let varB = 'B'; => Receber o valor de C
let varC = 'C'; => Receber o valor de A
```

Inverter esses valores utilizando as variáveis.

Podemos criar outras variáveis se necessário.

<u>***Solução***</u>

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
