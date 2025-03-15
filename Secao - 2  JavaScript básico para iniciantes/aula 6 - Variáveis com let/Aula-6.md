# Aula 6 - Variáveis com let

Nesta aula abordamos o conceito de variáveis, que são muito comuns em quase todas as linguagens de programação, para que possamos guardar valores em tempo de execução do código.

Para isso;

- Criação da pasta aula6;

- Criação do arquivo index.js;

Em programação temos o conceito de variáveis para colocar valores na memória do pc.

Executamos o texto disponibilizado como exemplo;

```js
console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve um filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');
```

Neste trecho de código notamos que repetimos varias vezes a palavra João.

Seria interessante abstrair o nome João e coloca-lo em alguma parte da memória, e sempre que precisar-mos desse nome podemos referencia-lo na memória.

Então criamos uma variável logo acima de onde iremos precisar utiliza-la.

Em javascript possuímos duas maneiras de criar variáveis, (variáveis são trechos que podem ser modificados ao longo do código).

Podemos criar uma variável com;

- let = Onde podemos dar um rótulo para essa variável, por exemplo nome, e já inicializamos ela com o nome João;

```js
let nome = João;
```

- var = Outra maneira de se criar uma variável em JS, porém, como é mais antigo não é muito usado nos dias atuais.

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

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-46-47.png?msec=1709082727520)

Substituimos em todos os locais onde haja o nome João.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-49-01.png?msec=1709082727521)

Assim ele irá alterar em todas as situações onde tenha o nome declarado.

Isso facilita muito, pois sempre que precisar-mos alterar o nome alteramos apenas na variável e não em todas as linhas do código.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2012-52-21.png?msec=1709082727518)

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

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2013-06-00.png?msec=1709082727522)

Isso para a execução do código.

### *Regras para criar variáveis*

- Não podemos criar variáveis com palavras reservadas pela linguagem JS, como por exemplo a palavra let;

```
let let;
let console;
let if;
```

- Variáveis precisam ter nomes significativos, precisamos declarar nossas variáveis com nomes que façam sentido no contexto do código, para facilitar o entendimento do mesmo;

```js
let n = 'João';
console.log(n);
```

Esse código irá funcinar, porém tem uma variável muito mau referenciada.

- Podemos por exemplo, em algum caso onde precisariamos armazenar o nome do cliente, fazer a declaração da variável de maneira clara, especificando que esta variável conterá o nome do cliente;

```js
let nomeCliente = 'Carlos';
console.log(nomeCliente);
```

- NÃO podemos iniciar o nome de uma variável com um número;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2013-19-47.png?msec=1709082727468)

Isso irá gerar um erro na execução.

- Geralmente iniciamos variáveis com letras, e estas minusculas.

- Após a primeira letra podemos colocar números nos nomes;

```js
let maroon5;
```

- Nomes de variáveis NÃO podem conter espaços ou traços;

- Caso precisemos declarar variáveis com nomes compostos, usamos a convenção, que prevê o uso do camelCase na criação de variáveis.

```js
let nomeCompletoDoCliente = 'Carlos';
let nomeCompletoDoDependente = 'Carlos';
```

-  Essas variáveis são case-sensitive, isso significa que letras maiusculas e letras minusculas fazem diferença.

```js
let nomeCompleto = 'Nome';
let nomecompleto = 'Nome';
```

Para o motor do JS essas variáveis são diferentes.

- NÃO podemos redeclarar variáveis com let;

```js
let nome = 'Carlos';
nome = 'João';
```

Neste exemplo criamos a variável nome e atribuimos o nome Carlos, em seguida, reatribuimos seu valor para João.

Sempre o último valor será utilizado, então podemos declarar a variável com um valor atribuido e depois modificar esse valor.

- <mark>Por fim NÃO UTILIZE VAR, UTILIZE LET.</mark>
