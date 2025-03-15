# Aula 25 - if, else if, e else (parte 02)

Continuação da aula sobre if, else if e else.

Estamos utilizando números pela facilidade didática, porém a extrutura funcionará com qualquer tipo de dado.

Para o exemplo criamos uma variável;

```js
const numero = 10;

```

E iremos criar uma lógica para saber se esse número está;

* Entre 0 e 2, ou qualquer outro interválo.

Imprimimos então uma mensagem básica, se o número é maior ou igual a zero;

```js
const numero = 10;

if (numero >= 0) {
    console.log('Sim, o número é maior ou igual a zero.');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Sim, o número é maior ou igual a zero.

[Done] exited with code=0 in 0.209 seconds
```

Se o número fosse -1 por exemplo, o código já não funcionaría;

```js
const numero = -1;

if (numero >= 0) {
    console.log('Sim, o número é maior ou igual a zero.');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"

[Done] exited with code=0 in 0.188 seconds
```

Podemos verificar um range, para saber se o número está em um intervalo de números;

```js
const numero = -1;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
}

//Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"

[Done] exited with code=0 in 0.186 seconds

```

Como o número verificado não está no interválo, nada é retornado.

* Se precisamos verificar algo mais usamos o else if;

* E se queremos apenas mostrar algo caso o retorno não seja suprido de forma correta, podemos apenas utilizar o else.

Neste exemplo podemos criar um else apenas, que diz se o número está ou não está no intervalo verificado;

```js
const numero = -1;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
} else {
    console.log('O número não está no intervalo');
}

//Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
O número não está no intervalo

[Done] exited with code=0 in 0.179 seconds
```

Se alterar-mos o número verificado para 5 por exemplo, o código o if será executado;

```js
const numero = 5;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
} else {
    console.log('O número não está no intervalo');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Sim, o número está no intervalo.

[Done] exited with code=0 in 0.224 seconds
```

Aqui notamos uma dependência, ou seja, o if e o else, um depende do outro.

Vejamos o exemplo a seguir, onde retiramos o else, e deixamos um log que a principio tem o mesmo comportamento se estivesse dentro do if;

```js
const numero = 10;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
}

console.log('O número não está no intervalo');

//Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
O número não está no intervalo

[Done] exited with code=0 in 0.132 seconds
```

Notamos que recebemos o mesmo retorno, mas, se por acaso o número verificaso esteja no intervalo, os dois logs serão exibidos, isso porque o log que está fora do if, não sofre qualquer interferência da extrutura condicional;

```js
const numero = 5;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
}
// } else {
//     console.log('O número não está no intervalo');
// }
console.log('O número não está no intervalo');

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Sim, o número está no intervalo.
O número não está no intervalo

[Done] exited with code=0 in 0.212 seconds
```

Ele imprime as duas linhas, porque o log de fora do if, é apenas uma string a ser exibida.

Por isso devemos ter em mente que o if e o else dependem um do outro.

Com a extrutura criada de forma correta, apenas uma das linhas será retornada;

* Se o número estiver no intervalo, a mesagem 'Sim o número está no intervalo será exibida';

* Se o número não estiver no intervalo, a mensagem 'O número não está no intervalo será exibida'.

```js
const numero = 5;

if (numero >= 0 && numero <= 5) {
    // console.log('Sim, o número é maior ou igual a zero.');
    console.log('Sim, o número está no intervalo.');
} else {
    console.log('O número não está no intervalo');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Sim, o número está no intervalo.

[Done] exited with code=0 in 0.216 seconds
```

* Se a condição for verdadeira o if será executado;

* Se a condição for falsa, o else será executado.

```js
// Se isso ocorrer (numero >= 0 && numero <= 5) faça isso console.log('Sim, o número está no intervalo.');
// Se não faça isso console.log('O número não está no intervalo');
```



***<u>else if</u>***

\* As chaves nas extruturas e funções não possuem ponto-e-virgula, apenas os códigos que estarão dentro dessas extruturas.

Modificamos o código para verificar um intervalo entre 0 e 11;

```js
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (numero >= 9 && numero <= 11) {
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
O número está no intervalo de 9 a 11

[Done] exited with code=0 in 0.188 seconds
```

Assim que a engine do javascript encontrar uma condição verdadeira, ela executa toda a extrutura dessa condição e sai fora do bloco.

Mesmo que tenhamos mais opções verdadeiras no código.

Para testar-mos isso colocamos uma verificação literal bem inútil, onde pedimos para verificar se 1 é igual a 1, na linha acima de onde está retornando verdadeiro para nossa extrutura;

```js
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (1 === 1) { // Verdadeira
    console.log('Verificação literal.');
}else if (numero >= 9 && numero <= 11) { // Também é verdadeira
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

//Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Verificação literal.

[Done] exited with code=0 in 0.205 seconds
```

Notamos que assim que ele encontra a opção verdadeira, ele exibe o log e sai do programa.

E assim ele destrói toda a nossa extrutura, pois estamos fazendo uma verificação para saber o intervalo do número, mas a lógica de programação apenas retorna verdadeiro para a verificação literal que está no código.

Poderíamos ter mais varias linhas de código após a bloco do if;

```js
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (1 === 1) { // Verdadeira
    console.log('Verificação literal.');
}else if (numero >= 9 && numero <= 11) { // Também é verdadeira
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

console.log('...Aqui vem o resto do código javascript');

//Sa[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Verificação literal.
...Aqui vem o resto do código javascript

[Done] exited with code=0 in 0.208 seconds
```

Isso serve para enterder-mos que poderemos ter blocos de código if no meio do programa, que serão encarregados de mudar o fluxo do programa.

* Neste caso a 'Verificaçã literal' tomou o lugar da nossa verificação verdadeira no código.

* O javascript checa as condições, de cima para baixo e da esquerda para a direita;

* Podemos concluir que apenas uma condição do bloco if será executada.

* Notamos que todas as condições dependem uma da outra para ser executadas, caso uma seja falsa, ele pula para a próxima, e assim até encontrar uma condição verdadeira, e caso nenhuma retorne verdadeira, o else será executado.

Se precisamos checar outra condição, podemos ter outro if, logo após o if primeiro, podemos ter quantas extruturas if precisar-mos;

Então no exemplo, caso queiramos verificar se 1 é igual a 1, sem alterar o fluxo do nosso sistema, podemos ter um if separado para fazer essa verificação.

```js
const numero = 10;

if (1 === 1) { // Verdadeira
    console.log('Verificação literal.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (numero >= 9 && numero <= 11) { // Também é verdadeira
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

console.log('...Aqui vem o resto do código javascript');

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Verificação literal.
O número está no intervalo de 9 a 11
...Aqui vem o resto do código javascript

[Done] exited with code=0 in 0.235 seconds
```

Então assim ele verifica todas as alternativas de forma separada.

Se quisessemos saber, por exemplo, se o número é menor que 10, poderíamos fazer essa checagem antes do bloco if;

```js
const numero = 10;

if (1 === 1) { // Verdadeira
    console.log('Verificação literal.');
}

if (numero >= 10) {
    console.log('O número é maior ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (numero >= 9 && numero <= 11) { // Também é verdadeira
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

console.log('...Aqui vem o resto do código javascript');

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 25 - if, else if, e else (parte 02)/index.js"
Verificação literal.
O número é maior ou igual a 10.
O número está no intervalo de 9 a 11
...Aqui vem o resto do código javascript

[Done] exited with code=0 in 0.181 seconds
```

Assim temos todas as checagens funcinando de forma indenpendente.

Isso faz parte da lógica de programação, se precisamos checar algo, podemos fazer separadamente com ifs, se precisamos checar mais condições, usamos o else if, e assim por diante.


