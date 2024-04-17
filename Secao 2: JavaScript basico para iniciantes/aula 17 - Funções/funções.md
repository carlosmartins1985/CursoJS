## Funções

Na prática, funções executam ações.
São trechos de códigos que executam alguma tarefa.

Geralmente mandamos um valor para uma função e recebemos um valor de retorno.

E também existem funções que não retornam valor.

Criando a função;

* Criamos uma função utilizando a palavra function;

* Seguido do nome da função, que segue as mesmas regras da criação de variáveis;

Para teste criamos uma função simples de saudação;

```js
function saudacao(){
    console.log('Olá, essa é minha função!')
}
```

* Dentro dos parênteses poderiam vir valores, input de dados etc...

* As chavez {corpo da função} delimitam o corpo da função;

* Funções declaradas dessa maneira não necessitam de (;) ; 

* Sempre que chamamos uma função, usamos o nome da função seguido de parênteses e ; para indicar que a função está sendo executada;

* Ela é similar a outras funções, como aler, console,etc, porém essa acabamos de criar;

* Quando executamos uma função, tudo dentro do corpo da função será executado.

* Uma coisa importante é que tudo que está dentro da função está protegido, ou seja, não conseguimos acessar de fora da função esses valores;

Por exemplo, podemos enviar dados para a função;

Digamos que queremos escrever a mesagem seguida do nome do usuário, podemos então enviar esse nome como parâmetro da função;

* Os parâmetros estarão dentro dos parênteses;

* Parâmetros podem ser variáveis, assim podemos criar um parâmetro chamado nome dentro dos parênteses da nossa função;

* Para enviar esse dado para a função, devemos passar ele no momento em que chamamos a função, esse dado chamamos de argumento, e será enviado para a função.

* E podemos utilizar esse argumento/parâmetro dentro do corpo da função.

```js
// Função com parâmetro para exibir o nome do usuário
function saudacao(nome){ // O nome do usuário será recebido como parâmetro da função
    console.log(`Olá ${nome}, bom dia, tudo bem!`)
}

// Enviamos o nome do usuário como argumento da função
saudacao('Carlos');

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!

[Done] exited with code=0 in 0.21 seconds
```

Essa função é reutilizavel, podemos utiliza-la quando quisermos em qualquer lugar do código;

```js
function saudacao(nome){ // O nome do usuário será recebido como parâmetro da função
    console.log(`Olá ${nome}, bom dia, tudo bem!`)
}

// Enviamos o nome do usuário como argumento da função
saudacao('Carlos');
saudacao('Marcos');
saudacao('Claudio');


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!
Olá Marcos, bom dia, tudo bem!
Olá Claudio, bom dia, tudo bem!

[Done] exited with code=0 in 0.234 seconds
```

Sempre que mudamos o argumento ela altera o valor do parâmetro.

***Essa é uma funçã bem simples que apenas mostra uma mensagem na tela.***

Podemos também salvar o que a função retorna em uma variável, porém essa função não retorno algum, apenas exibe uma mensagem na tela.

Então se tentar-mos executar essa função como uma variável, ela irá retornar undefined;

```js
// Usando a função em uma variável
function saudacao(nome){ 
    console.log(`Olá ${nome}, bom dia, tudo bem!`)
}

const variavel = saudacao('Carlos');
console.log(variavel);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!
Olá undefined, bom dia, tudo bem!
undefined

[Done] exited with code=0 in 0.184 seconds
```

Isso ocorre porque não atribuimos um retorno para a função.

Se precisamos que a função execute uma ação e também retorne algum valor, devemos adicionar a palavra return ao final do corpo da função;

Dentro deste return podemos pôr qualquer coisa que precisamos retornar, um exemplo simples, retornar um conjunto de números;

```js
// Função com retorno
function saudacao(nome){ 
    console.log(`Olá ${nome}, bom dia, tudo bem!`)
    return 123456;
}

const variavel = saudacao('Carlos');
console.log(variavel);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!
123456

[Done] exited with code=0 in 0.221 seconds
```

Então o que será salvo dentro da variável será 123456

```js
console.log(`O retorno da função é ${variavel}`);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!
O retorno da função é 123456

[Done] exited with code=0 in 0.196 seconds
```

Porém isso não é o ideal, uma função retornando algo bem diferente do que imaginaríamos que iria retornar.

Então podemos alterar essa função para que ela retorne a mensagem e o nome do usuário;

```js
function saudacao(nome){ 
    return `Olá ${nome}, bom dia, tudo bem!`;
}

const variavel = saudacao('Carlos');
console.log(variavel);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Olá Carlos, bom dia, tudo bem!

[Done] exited with code=0 in 0.224 seconds
```

Então ela exibe a mensagem e o nome do usuário que está na variável.

Se retirar-mos o console.log da tela não iremos ver nada, porém a variável recebeu o valor de retorno da função.

<u>***Função com retorno útil***</u>

Criaremos uma função que faça a soma entre dois valores;

* Como parâmetro passaremos dois valores, num1 e num2;

* Podemos então no corpo da função criar uma variável que irá conter o resultado da soma;

* E então retornar esse resultado;

* Fora da função podemos chama-la com o console.log passando como parâmetro o nome da função, seguido dos argumêntos dentro dos parênteses da função.
  
  ```js
  function soma(num1, num2) {
      return num1 + num2;
  }
  
  console.log(soma(5, 10));
  ```
  
  // Saída
  [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
  15
  
  [Done] exited with code=0 in 0.281 seconds

```
Assim já enviamos os valores dos argumentos direto no console.log

Podemos adicionar mais valores como teste;

```js
function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(5, 10));
console.log(soma(6, 20));
console.log(soma(54, 55));
console.log(soma(100, 50));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
15
26
109
150

[Done] exited with code=0 in 0.238 seconds
```

Isso é muito importante e poderoso, pois quando criamos um programa em javascript teremos várias funções conversando entre si e executando tarefas.

E isso básicamente é um programa, são várias funções pequenas que executam tarefas distintas.

<u>***Proteção do corpo da função***</u>

Não é possível acessar uma variável de uma função fora dela, pois o que está dentro da função está protegido, e chamamos de escopo da função;

```js
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3
/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js:52
console.log(resultado);
            ^

ReferenceError: resultado is not defined
    at Object.<anonymous> (/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js:52:13)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47

[Done] exited with code=1 in 0.232 seconds
```

Se tentar-mos apenas mostrar a variável resultado, que está dentro do escopo da função, teremos o erro de que a variável não está definida.

Podemos como teste criar uma variável com o mesmo nome de uma variável que esteja dentro da função;

```js
// Proteção da função
function soma(num1, num2) {
    const resultado = num1 + num2;
    return num1 + num2;
}

// Variável com o mesmo nome de outra que está dentro da função
const resultado = soma(1, 2);

// console.log(soma(1, 2));
console.log(resultado);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3

[Done] exited with code=0 in 0.227 seconds
```

Podemos criar uma constante que irá conter função soma, guardando o valor de retorno desta função.

Sempre que a função encontra o return, ela para de executar imediatamente.

Se houver qualquer trecho de código abaixo do return não será executado;

```js
function soma(num1, num2) {
    const resultado = num1 + num2;
    return num1 + num2;
    console.log('Retorno ficou acima.');
}

console.log(soma(1, 2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3

[Done] exited with code=0 in 0.216 seconds
```

\* Se invertemos e colocarmos o console.log antes do return ele passa a ser executado;

```js
function soma(num1, num2) {
    const resultado = num1 + num2;
    console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

console.log(soma(1, 2));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Antes do return
3

[Done] exited with code=0 in 0.213 seconds
```

\* ***<u>É importante saber-mos que sempre que a engine do javascript encontrar o return, nada mais será executado.</u>***

Se executar-mos a função sem passar os argumentos, teremos como retorno um NaN, isso porque estamos tentando fazer uma soma com valores que são undefined, pois são valores que não apontam para lugar nenhum na memória.

Mesmo se tentar-mos enviar apenas um valor, continuaremos tendo o mesmo erro, pois será como se estivessemos tentando concatenar valores unefined.

```js
function soma(num1, num2) {
    const resultado = num1 + num2;
    // console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

// const resultado = soma()
const resultado = soma(2)
console.log(resultado);//


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
NaN

[Done] exited with code=0 in 0.238 seconds
```

```js
function soma(num1, num2) {
    const resultado = num1 + num2;
    // console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

const resultado = soma()
console.log(resultado);//


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
NaN

[Done] exited with code=0 in 0.238 seconds
```

Se colocar-mos duas strings ele faz a concatenação.

```js
function soma(num1, num2) {
    const resultado = num1 + num2;
    // console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

// const resultado = soma()
const resultado = soma('Carlos', ' Martins')
console.log(resultado);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
Carlos Martins

[Done] exited with code=0 in 0.21 seconds
```

<u>***Valores padrão***</u>

Podemos atribuir um valor padrão para os argumentos, pois caso não seja enviado nenhum valor como parâmetro a própia função assume a responsabilidade de inserir algum valor padrão;

Podemos então atribuir a num1 e num2 valores padrão;

```js
function soma(num1 = 1, num2 = 1) {
    const resultado = num1 + num2;
    // console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

// const resultado = soma()
const resultado = soma()
console.log(resultado);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
2

[Done] exited with code=0 in 0.212 seconds
```

Assim iniciamos a função com valores pré-definidos.

Se enviar-mos apenas um valor com argumento, ele recebe esse valor, mas o outro continua o que foi deixado como padrão;

```js
function soma(num1 = 1, num2 = 1) {
    const resultado = num1 + num2;
    // console.log('Antes do return');
    return num1 + num2;
    // console.log('Retorno ficou acima.');
}

// const resultado = soma()

// Passando apenas um argumento
const resultado = soma(4)
console.log(resultado);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
5

[Done] exited with code=0 in 0.225 seconds
```

<u>***\*Se mandar-mos os dois valores ele não irá mais assumir os valores padrão, passando a assumir os valores que foram passados como argumentos.***</u>

<u>***Função anônima***</u>

Podemos colocar uma função dentro de uma variável, que chamamos de função anônima;

Podemos criar uma função que calcula a raiz quadrada;

* Criamos na verdade uma variáve chamada raiz que irá receber a função anônima;

* Essa função receberá um valor (n), e será retornado a raiz quadrada deste numero.

* Na chamada da funçã passamos a variável como se fosse uma função, com argumento;

```js
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));


// Saída
```

\* Sempre que usamos o sinal de atribuição = , precisamos usar o ;

O uso da funçã é o mesmo, a diferênça está em como criamos a função.

```js
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3
4
5

[Done] exited with code=0 in 0.248 seconds
```

***<u>Arrow function</u>***

É práticamente a mesma coisa, a diferênça é que eliminamos a palavra function, e adicionamos o sinal de flexa, apontando para o corpo da função.

Essas funções surgiram para facilitar o dia-dia do programador, por exemplo;

* Se a função tem apenas uma linha podemos eliminar as chaves e o ponto-virgula;

* Podemos eliminar a palavra return;

* E quando tivermos apenas um parâmetro na função, podemos eliminar os (parênteses).

```js
// Versão simplificada
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3
4
5

[Done] exited with code=0 in 0.175 seconds
```

```js
// Versão normal
const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 17 - Funções/index.js"
3
4
5

[Done] exited with code=0 in 0.175 seconds
```

<u>***É interessante criarmos funções que executem apenas uma tarefa, e não funções que façam várias tarefas. É melhor criar-mos várias funções menores que façam apenas uma tarefa especifica.***</u>
