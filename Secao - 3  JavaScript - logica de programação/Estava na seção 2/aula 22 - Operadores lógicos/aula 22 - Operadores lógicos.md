# Aula 22 - Operadores lógicos

Os operadores lógicos servem para checar mais de uma comparação.

São eles:

* && - AND - E lógico;

* || - OR     - Ou lógico, dois pipes;

* !    - NOT  - Negação, não lógico

Primeiramente veremos como utiliza-los com valores literais, e posteriormente faremso algo mais elaborado.

Imaginemos que necessitamos fazer duas comparações.

Ipotéticamente, imaginemos que precisamos verificar se temos dinheiro no bolso e também se está fazendo sol, para que eu possa sair de casa, neste caso precisamos utilizar o operador AND, pois as duas situações devem ser verdadeiras para que eu saia de casa, ou seja, eu preciso ter dinheiro e precisa estár fazendo sol;

O código ficaria algo assim;

```js
console.log(true && true);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.205 seconds
```

Ou seja, verdadeiro com verdadeiro retorna verdadeiro, as duas expressões precisam ser verdadeiro para que o todo retorne verdadeiro.

Podemos ter várias comparações, desde que sejam todas verdadeiras, teremos o retorno true.

```js
console.log(true && true && true && true && true && true);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.184 seconds
```

Caso alguma expressão retorne falso, a expressão completa também irá retornar falso.

```js
console.log(true && true && true && false && true && true);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
false

[Done] exited with code=0 in 0.2 seconds
```

Podemos atribuir essa verificação a uma variável, e assim adicionar somente essa variável no log, o JavaScript fará a verificação e irá mostrar o valor da variável de acordo com seu resultado;

```js
const expressao = true && true && true && false && true && true;
console.log(expressao);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
false

[Done] exited with code=0 in 0.152 seconds
```

Retornando true;

```js
const expressao = true && true && true && true && true && true;
console.log(expressao);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.189 seconds
```

***<u>Ou seja, quando usamos o &&, AND, todas as expressões devem ser verdadeiras para que a expressão completa retorne verdadeiro.</u>***



***<u>|| - OR - Ou lógico</u>***

O OR é completamente o inverso do AND.

Usando o mesmo exemplo, digamos que precisamos ter dinheiro no bolso OU estar fazendo sol, porém agora não precisamos que as duas expressões sejam verdadeiras pra sairmos de casa, apenas uma basta.

```js
const expressaoOr = true || false;
console.log(expressaoOr);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.216 seconds
```

Se qualquer uma das expressões retornar verdadeiro, a expressão completa retorna verdadeiro.

Podemos, da mesma forma ter várias comparações, e se qualquer uma delas retornar verdadeiro, toda a expressão retornará verdadeiro.

```js
const expressaoOr = true || false || false || true || false || false || true || false;  
console.log(expressaoOr);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.271 seconds
```

Apenas se todas as expressões retornarem falso, a expressão completa retornará falso;

```js
const expressaoOr = false || false || false || false || false || false || false || false;  
console.log(expressaoOr);

//Saída
Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
false

[Done] exited with code=0 in 0.216 seconds
```



Para enterdermos o uso desses operadores faremos a seguir um exemplo prático de uso;

* Suponhamos que tenhamos uma variável usuario, e esse usuário está vindo de uma base de dados ou de um campo, como um input que o usuario digitou, trazendo seu nome;

* Temos também a senha desse usuário;

* Podemos então ver se o usuário irá logar no sistema, criando um variável que irá receber seu username e irá verificar se está correto;

```js
const usuario = 'Carlos';
const senha = '123456';

const vaiLogar = usuario === 'Carlos';
console.log(vaiLogar);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.182 seconds
```

* Também precisamos verificar a senha do usuário, e se estiver correta irá logar no sistema;

```js
const usuario = 'Carlos';
const senha = '123456';

const vaiLogar = usuario === 'Carlos' && senha === '123456';
console.log(vaiLogar);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.221 seconds
```

Aqui comparamos, como se fosse, um login de usuário, onde comparamos o que foi digitado em um possível form, e o cadastrado do usuário em uma base de dados.

Nese caso, se alguma delas retornar false, toda a expressão irá retornar false.

Se por algum engano usassemos o operador errado, no caso de um || OR, o sistema faria o usuário logar com apenas um dos valores retornando true.



***<u>! - NOT - Negação</u>***

A negação simplesmente inverte uma expressão.

Um exemplo básico é usar-mos uma expressão literal, no log, com um valor true;

```js
console.log(true);
console.log(false);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true
false

[Done] exited with code=0 in 0.22 seconds
```

Mas se usamos o NOT, estamos invertendo o valor da expressão;

```js
console.log('Valor verdadeiro ' + true);
console.log('Valor false ' + false);

console.log('Invertendo o true com not ' + !true);
console.log('Invertendo o false com not ' + !false);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
Valor verdadeiro true
Valor false false

Invertendo o true com not false
Invertendo o false com not true

[Done] exited with code=0 in 0.145 seconds
```

* Se negamos o true queremos o false;

* Se negamos o false queremos o true;

Podemos também, por exemplo, negar uma expressão mais de uma vez, por exemplo;

* Negamos o true com !true;

* Depois usamos o ! novamente para negar o true outra vez,  fazendo com que ele volte a valer true.

```js
console.log(!!true);

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 22 - Operadores lógicos/index.js"
true

[Done] exited with code=0 in 0.185 seconds
```

***<u>Isso não é nada comum de se fazer, na verdade acaba sendo uma total redundância.</u>***


