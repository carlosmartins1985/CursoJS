# Aula 31 - Mais diferenças entre var e let/const



    Vimos que não podemos redeclarar variáveis com let;

```js
let nome = 'Carlos';
let nome = 'João';
```

Teríamos um erro de variável já declarada.

Porém podemos redeclarar com var;

```js
var nome = 'Carlos';
var nome = 'João';
```

Aqui não teriamos problema;



Mas outra situação é que o let tem escopo de bloco, o que siginifica, que se tivermos uma variável let dentro de chaves, com mesmo nome de uma variável global, ele fará a redeclaração dessa variável.

```js
const verdadeira = true;

let nome = 'Carlos';
let nome2 = 'Carlos';

{
    let nome = 'Márcio';
    console.log(nome, nome2);
    
}
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 31 - Mais diferenças entre var e let-const/index.js"
Márcio Carlos

[Done] exited with code=0 in 0.246 seconds
```

Notamos que dentro do escopo, dentro das chavez, ele redeclara a variável sem problemas.



* Let tem escopo de bloco;

* Var tem escopo de função;
  
  

O que acontece na verdade é que não estamos redeclarando a variável, estamos em ambas, criando as variáveis, uma em cada contexto de bloco.

Estamos criando duas variáveis com mesmo nome;

```js
const verdadeira = true;

let nome = 'Carlos';
let nome2 = 'Carlos';

if(verdadeira){
    let nome = 'Márcio';
    console.log(nome, nome2);
}
```

Podemos ter vários escopos.

```js
// Escopo global
const verdadeira = true;

let nome = 'Carlos';
let nome2 = 'Carlos';

    // Escopo de bloco
    if(verdadeira){
        let nome = 'Márcio';
        console.log(nome, nome2);

        // Escopo de bloco
        if(verdadeira){
            console.log('Escopo!');
            
        }
    }
```

Aqui temos o escopo global, e dois escopo de bloco aninhados.

```js
const verdadeira = true;

let nome = 'Carlos';
let nome2 = 'Carlos';

    // Escopo de bloco
    if(verdadeira){
        let nome = 'Márcio';
        // console.log(nome, nome2);

        // Escopo de bloco
        if(verdadeira){
            let nome = 'Pedro'
            console.log(nome, nome2);
        }
    }
```

Podemos ter vários blocos aninhados, cada um com suas variáveis independentes.

O let procura dentro do bloco primário a variável, se não encontrar passa para o escopo maior, o escopo ao qual ele está inserido, se não encontrar passa para o escopo global.

```js
const verdadeira = true;

let nome = 'Carlos';
let nome2 = 'Carlos';

    // Escopo de bloco
    if(verdadeira){
        // let nome = 'Márcio';
        // console.log(nome, nome2);

        // Escopo de bloco
        if(verdadeira){
            // let nome = 'Pedro'
            console.log(nome, nome2);
        }
    }
```

Comentando as variáveis que estão dentro dos blocos, ele busca no escopo global;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 31 - Mais diferenças entre var e let-const/index.js"
Carlos Carlos

[Done] exited with code=0 in 0.299 seconds
```

Se tentarmos com var, sempre será redeclarada a variável, não importa em que bloco esteja;

* Uma coisa interessante é que o let, mesmo havendo uma variável com mesmo nome no escopo pai, ele segue a regra de que se tentarmos acessar a variável, antes de declarar-la, temos o erro de inicialização da variável;

```js
if(verdadeira){
            // let nome = 'Pedro'
            var nome2 = 'Tiago'
            console.log(nome, nome2);
            let nome = 'Luiza';
        }
    }
```

```bash
ReferenceError: Cannot access 'nome' before initialization
```

O JS não usa outra variável, ele mostra o erro antes, como a variável está dentro do bloco, existe uma variável nome2 dentro do bloco, ele retorna o erro e não busca uma variável em outro lugar.



Notamos o seguinte código;

```js
const verdadeira = true;

let nome = 'Carlos'; //Criando
var nome2 = 'Pedro'; // Criando

    // Escopo de bloco
    if(verdadeira){
        // let nome = 'Márcio';
        // console.log(nome, nome2);
        let nome = 'Pedro';
        var nome2 = 'Rogério'; // Redeclarando
        // console.log(nome2);
        

        // Escopo de bloco
        if(verdadeira){
            // let nome = 'Pedro'
            var nome2 = 'Tiago'
            let nome = 'Luiza';
            // console.log(nome, nome2);

        }
    }
    console.log(nome, nome2);
```

No escopo global temos na variável let = 'Carlos', e na var = 'Pedro', se temos um log fora do bloco if, nos será impresso na variável let o valor global, e na var o valor redeclarado no bloco.

Na variável var foi usado o último valor redeclarado.

Que acaba sendo a maior diferênça entre var e let, tudo que está dentro de chaves é considerado um escopo.



## Escopo de função

Uma função simples que apenas fala oi;

```js
function falaOi(){
    console.log('Oi');
    
}
falaOi();
```

Funções tem um escopo muito especial, que protege as variáveis que estão dentro dela.

Podemos ter essa função retornando um nome;

```js
function falaOi(){
    var nome = 'Carlos';
    console.log(nome);
    
}

falaOi();
```

Declaramos a var nome = 'Carlos';

Essa variável está protegida pelo escopo da função, se colocar-mos o log fora da função, teremos o erro de variável não definida;

```js
function falaOi(){
    var nome = 'Carlos';
    
}
console.log(nome);

falaOi();
```

Saída;

```bash
ReferenceError: nome is not defined
```

Funções podem também acessar variáveis que estão fora de seu escopo;

```js
var sobrenome = 'Martins';

function falaOi(){
    // var nome = 'Carlos';
    console.log(sobrenome);
    
}
// console.log(nome);

falaOi();
```

Aqui a função falaOi() consegue acessar a var sobrenome, mesmo ela estando fora de seu escopo, mas está no seu entorno, sendo assim pode ser acessada.

Porém se a variável estivesse dentro do escopo da função não seria possível ser acessada fora do escopo da função;

```js
function falaOi(){
    // var nome = 'Carlos';
    var sobrenome = 'Martins';

}
console.log(sobrenome);

// console.log(nome);

falaOi();
```

Saída;

```bash
ReferenceError: sobrenome is not defined
```

Podemos ainda ter ifs dentro das funções, sendo assim as funções servirão como escopos globais, e as variáveis criadas dentro do escopo das funções podem ser acessadas nos blocos ifs.

Se tivessemos um let, dentro do bloco if, só seria possível acessa-lo dentro desse bloco.

```js
function falaOi(){
    // var nome = 'Carlos';
    var sobrenome = 'Martins';

    if(verdadeira){
        console.log(sobrenome);
    }

}

falaOi();
```

Porém com um let dentro do if, não sería possível acessa-lo fora do bloco;

```js
function falaOi(){
    // var nome = 'Carlos';
    var sobrenome = 'Martins';

    if(verdadeira){
        let nome = 'Pedro';
    }

}
console.log(nome);

falaOi();
```

Saída;

```bash
ReferenceError: nome is not defined
```

```js
function falaOi(){
    // var nome = 'Carlos';
    var sobrenome = 'Martins';

    if(verdadeira){
        let nome = 'Pedro';
    }
    console.log(nome);
}

falaOi();
```

Nem mesmo dentro do bloco da função é possível acessar a variável criada com let.

Porém com var, conseguiríamos acessar a variável, desde que esteja dentro do escopo da função;

```js
function falaOi(){
    // var nome = 'Carlos';

    if(verdadeira){
        var sobrenome = 'Martins';
        let nome = 'Pedro';
    }
    console.log(sobrenome);
}

falaOi();
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 31 - Mais diferenças entre var e let-const/index.js"
Martins

[Done] exited with code=0 in 0.138 seconds
```



## Hosting, elevar a variável



Um comportamento estranho quando usamos var, é se usarmos, chamarmos a variável antes de cria-la, por exemplo;

```js
console.log(sobrenome);
```

Aqui tentamos imprimir a variá sem cria-la, temos o erro de não defined;

Saída;

```bash
ReferenceError: sobrenome is not defined
```

Porém se criar-mos a variável com var logo após o log, ao ínves de not defined, termos um undefined como retorno;

```js
console.log(sobrenome);

var sobrenome = 'Martins';
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 31 - Mais diferenças entre var e let-const/index.js"
undefined

[Done] exited with code=0 in 0.12 seconds
```

Isso acontece com var e também com funções criadas com a palavra function.

O que o js é elevar essas variáveis para o topo do arquivo, ele busca no código se a variável existe, e eleva para o topo do arquivo, porém sem inicializa-la, ou seja, não carrega seu valor, por isso nos é retornado undefined.

```js
var sobrenome;

sobrenome = 'Martins';
console.log(sobrenome);
```

E como se fosse assim, ele eleva a variável automáticamente.

No caso do let, temos o erro de inicialização de variável, como é esperado;

```js
console.log(sobrenome);

let sobrenome = 'Martins';
```

Saída;

```bash
ReferenceError: Cannot access 'sobrenome' before initialization
```

Esse comportamento do let também ocorre com funções criadas com a palavra function;

```js
console.log(teste());

function teste() {
}
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 31 - Mais diferenças entre var e let-const/index.js"
undefined

[Done] exited with code=0 in 0.104 seconds
```


