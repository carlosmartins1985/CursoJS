# Aula 23 - Avaliação de Curto-Circuito (Short-Circuit)

Nesta aula iremos abordar a Avaliação de Curto-Circuito, e veremos algumas coisas muito interessantes que podem tornar nosso código mais performático.

Na aula passada vimos os operadores lógicos;

* && - And -> Todas as expressões precisam ser verdadeiras para que retorne verdadeiro.
  
  A partir do momento em que o fluxo do programa encontrar uma expressão false, o javascript já irá retornar falso.
  
  Assim não precisamos checar mais nada após o AND.
  
  Podemos ter 50 expressões, e a partir do momento que uma delas retornar false, automáticamente a expressão completa irá retornar falso.
  
  Ou seja, podemos fazer uma avaliação de curto circuito, o programa para ali nesse ponto.
  
  Isso é muito inteligente, o fato de não precisar-mos checar mais nada a partir do momento que encontramos o false no operador AND, &&.
  
  No momento que encontramos o false, paramos o programa e retornamos o valor falso.
  
  E neste caso é o valor mesmo;
  
  Por exemplo, temos a seguinte expressão;
  
  ```js
  console.log('Carlos Martins' && 0 && 'Maria');
  
  //Saída
  [Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
  0
  
  [Done] exited with code=0 in 0.243 seconds
  ```
  
  Nesta expressão temos como retorno o zero, 0, isso porque ele retorna o "valor mesmo" , pois isso é literalmente o que ocorre.
  
  Isso porque, se estamos utilizando uma expressão AND, &&, a partir do momento que o javascript encontrou uma expressão que avalia em falso, ele irá retornar o valor falso.
  
  Se ele não encontra valor que avalia em falso ele retorna o valor da última expressão;
  
  ```js
  console.log('Carlos Martins' && true && 'Maria');
  
  //Saída
  [Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
  Maria
  
  [Done] exited with code=0 in 0.196 seconds
  ```

Ele análisa uma por uma, e se todas forem verdadeiras irá retornar a última. 

Mas por exemplo, se o valor da última expressão fosse um NaN, por exemplo, ele iría retornar o valor dessa expressão, que foi o false encontrado;

```js
console.log('Carlos Martins' && true && NaN);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
NaN

[Done] exited with code=0 in 0.208 seconds
```

Ele retorna o valor do false encontrado.



***<u>Valores que avaliam em falso</u>***

Em javascript tudo pode ser avaliado, em verdadeiro ou em falso, por exemplo;

São os valores FALSY-VALUE;

* false => Já é o valor literal false, avaliado em falso, os outros avaliam em falso quando necessário;

* 0 => O zero avalia em falso;

* "" '' ``=> Uma string vazia avalia em falso, tanto faz se com aspas duplas, simples ou crase;

* NULL e UNDEFINED => Que não apontam para lugar algum;

* NaN => Not a number também avalia em falso.

Esses são os valores que avaliam em false em javascript, sendo o false o literal e os demais avaliam em false quando necessário.

***<u><mark>Qualquer coisa diferente disso avalia em true em javascript.</mark></u>***



Por exemplo;

```js
console.log('Carlos Martins' && 'Pedro');

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
Pedro

[Done] exited with code=0 in 0.21 seconds
```

Aqui ele análisa as duas expressões, como não temos strings vazias ele avalia como true e retorna o valor da última expressão.

Se tivessemos uma string vazia na expressão, ele iría avaliar toda a expressão em false e retornaría o valor dessa expressão false;

```js
console.log('Carlos Martins' && "" && 'Pedro');

// Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"


[Done] exited with code=0 in 0.192 seconds
```

Retornando um string vazia.

Retornaría o valor de qualquer uma das expressões que avaliam em false, como, null, undefined, NaN, etc...



Podemos utilizar isso para termos um código mais performático e também com menos linhas de código.

Por exemplo, suponhamos que temos uma função que simplesmente fala oi;

```js
function falaOi (){
    return 'Oi';
}
```

Suponhamos que precisamos fazer um desvio de fluxo, para saber se iremos ou não executar essa ação, poderíamos ter uma variável que iría controlar essa função.

Poderíamos ter algo do tipo;

```js
const vaiExecutar = false;
```

Poderiamos então ter um if, que checaría se a variável for verdadeira, executa a função, caso contrário não iría executar;

```js
function falaOi (){
    return 'Oi';
}


const vaiExecutar = false;

if (vaiExecutar) {
    falaOi();
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"

[Done] exited with code=0 in 0.132 seconds
```

Aqui teríamos um código um pouco longo, que faría a validação e executaría ou não a função.

Em caso de true;

```js
function falaOi (){
    return console.log('Oi');
}

const vaiExecutar = true;

if (vaiExecutar) {
    falaOi();
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
Oi

[Done] exited with code=0 in 0.132 seconds
```

Porém poderíamos fazer a validação de outra maneira, com menos código e mais performático;

```js
function falaOi (){
    return console.log('Oi');
}

const vaiExecutar = false;

vaiExecutar && falaOi();

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"

[Done] exited with code=0 in 0.207 seconds
```

Assim podemos fazer a avaliação de curto circuito, onde o javascript irá avaliar as expressões, e irá retornar o valor de acordo com false ou true.

Alteramos e inserimos um console.log para que possamos ver algo na tela;

```js
function falaOi (){
    return console.log('Oi');
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
false

[Done] exited with code=0 in 0.152 seconds
```

Se a variável de checagem for falsa, irá retornar um valor falso, e caso nessa variável ouvesse qualquer valor FALSY, null, undefined, 0, ele iría retornar o valor literal false;

* Retornando null;

```js
function falaOi (){
    return console.log('Oi');
}

const vaiExecutar = null;

console.log(vaiExecutar && falaOi());

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
null

[Done] exited with code=0 in 0.2 seconds
```

* Retornando undefined;

```js
function falaOi (){
    return console.log('Oi');
}

const vaiExecutar = undefined;

console.log(vaiExecutar && falaOi());

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
undefined

[Done] exited with code=0 in 0.209 seconds
```

Isso porque o AND precisa que todas as expressões sejam verdadeiras, e esses valores podem avaliados em falso.

Se por acaso a variável fosse verdadeira, iría retornar como true e executaria a função, podendo não ser especificamente true a atribuição da variável, mas qualquer valor que não seja false, ou que avalie como false;

Avaliando em true.

```js
function falaOi (){
    return 'Oi';
}

let vaiExecutar = 'Carlos';

console.log(vaiExecutar && falaOi());

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
Oi

[Done] exited with code=0 in 0.232 seconds
```

Notamos que sem fazer nenhuma extrutura condicional, conseguimos fazer uma condição para executar ou não a função.



***<u>Circuito de avaliação com || = OR</u>***

O or, ||, acaba sendo muito mais interessante.

Para o ||, or, precisa apenas que qualquer uma das expressões retorne verdadeira para que a expressão completa retorne verdadeira.

```js
console.log(true || false);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
true

[Done] exited with code=0 in 0.225 seconds
```

Ele retorna o valor literal "valor verdadeiro", o valor mesmo, o valor real verdadeiro.

Por exemplo, na seguinte expressão;

```js
console.log(0 || false || null || 'Carlos Martins' || true);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
Carlos Martins

[Done] exited with code=0 in 0.176 seconds
```

Ele retorna o primeiro valor true encontrado.

Isso porque o or ||, precisa apenas de uma expressão verdadeira para que ele retorne "o valor verdadeiro", o valor mesmo, por isso retornou o nome dentro da string, que por não estár vazia retorna como true, e exibe o valor dessa expressão.



Agora suponhamos que temos um site, onde;

* A cor está definida como null, para que o usuário defina sua própia cor;

* E temos uma cor padrão, por exemplo vermelho;

```js
const corUsuario = null;
const corPadrao = 'red';
```

Então teríamos algo como;

* Se o usuário selecionar alguma cor, setamos essa cor na variável corUsuario.

* Se o usuário não setar nenhuma cor, usamos nossa cor padrão.

Assim precisaríamos fazer uma condicional, para saber se o usuário selecionou alguma  cor.

Mas com a avaliação de curto circuito podemos fazer essa condicional da seguinte maneira;

```js
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
preto

[Done] exited with code=0 in 0.201 seconds
```

Ele nos retorna preto, pois o usuário não selecionou nenhuma cor, ficando a expressão como false.

```js
const corUsuario = 'rosa';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
rosa

[Done] exited with code=0 in 0.177 seconds
```

Porém se o usuário setar uma cor, essa será retornada.

Pois a partir dali o javascript retorna o primeiro valor verdadeiro encontrado, e como a string é avaliada como verdadeira, ele a retorna.

E assim podemos fazer extruturas condicionais com os operadores lógicos, em especial o or ||.



Neste exemplo, qual valor será exibido na tela;

```js
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
false

[Done] exited with code=0 in 0.183 seconds
```

Aqui ele retorna false, mas trata-se da string 'false', e não do operador false, a string não vazia é avaliada como verdadeiro.



Se todas as opções fossem false, ele retornaría o último valor avaliado;

```js
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
NaN

[Done] exited with code=0 in 0.195 seconds
```

Porém se tivessemos qualquer valor verdadeiro na expressão, mesmo que não sendo de nenhuma const, nem nada, esse seria retornado;

```js
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || 'Carlos Martins' || d || e);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 23 - Avaliação de Curto-Circuito (Short-Circuit)/index.js"
Carlos Martins

[Done] exited with code=0 in 0.194 seconds
```


