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

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-20%2020-21-29.png?msec=1709082727524)

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
