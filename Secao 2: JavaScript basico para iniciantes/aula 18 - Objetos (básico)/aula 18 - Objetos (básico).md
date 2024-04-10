# Objetos - (básico)

Uma passada básica por objetos em javascript.

 Vimos que podemos criar um array desta maneira;

```js
const array = [1, 2, 3];
```

Onde podemos alterar os valores desse array, mesmo utilizando const, pois os valores dentro das chaves são valores por referência, o que não podemos fazer é reatribuir os valores, ou seja, não podemos utilizar o sinal de igual = no array.

Mas podemos alterar os valores, por exemplo, podemos adicionar um novo elemento com o array.push();

```js
const array = [1, 2, 3];
array.push(4); // Adicionar um valor ao array
array[1] = 'Carlos'; // Alterar um valor do array

console.log(array);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
[ 1, 'Carlos', 3, 4 ]

[Done] exited with code=0 in 0.202 seconds
```

Não encontramos problemas nisso pois estamos alterando os valores dentro do array.

 O que não conseguimos fazer é reatribuir o array, pois trata-se de uma constante;

```js
array = 'alteracao';


// Saída
TypeError: Assignment to constant variable.
```

Se precisar-mos reatribuir o array, precisaremos utilizar let.

Utilizando o let não teríamos problemas;

```js
// Array com const não pode ser reatribuido
const array = [1, 2, 3];

// Array com let, pode ser reatribuido
let arrayLet = ['alteração']

// Adicionar um valor ao array
array.push(4);
// Alterar um valor do array
array[1] = 'Carlos';

arrayLet = 'Novo Array';


console.log(array, arrayLet);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
[ 1, 'Carlos', 3, 4 ] Novo Array

[Done] exited with code=0 in 0.217 seconds
```

Da mesma forma podemos utilizar const para criar um objeto em javascript.

Imaginemos que precisamos criar várias pessoas no sistema, com seus dados pessoais, como;

```js
const nome01 = 'Carlos';
const sobrenome01 = 'Martins';
const idade01 = 30;


const nome02 = 'Beto';
const sobrenome01 = 'Silva';
const idade01 = 35;
```

Imaginemos que para criar 1000 pessoas, seria necessário criar mais de 1000 variáveis para se cadastrar as pessoas.

Notamos que as variáveis são relacionadas, nome01, sobrenome01 e idade01 formam uma espécie de grupo.

Podemos então criar um objeto para armazenar essas informações, e agrupa-las de maneira correta.

Criamos um objeto da seguinte forma;

* Para criar um objeto utilizamos as chaves {};

```js
const pessoa1 = {

}
```

* Dentro do objeto podemos criar vários atributos para pessoa1, que serão como variáveis, porém estarão dentro da pessoa1.

* Neste caso não precisamos utlizar nem const nem let;

* Colocamos apenas o nome da variável e seu valor;

* Para separar as variáveis uma das outras usamos a virgula;

```js
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Martins da Silva',
    idade: 30
}
```

* Para acessar os atributos do objeto utilizamos o ponto;

```js
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 30
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Carlos
Martins
30

[Done] exited with code=0 in 0.228 seconds
```

Assim podemos acessar todos os atributos que estão dentro da pessoa1.

Podemos então criar uma função que cria esse objeto para nós;

```js
                    // Parâmetros que irão receber os argumentos 
function criaPessoa(nome, sobrenome, idade) {
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    }
}

                           // Argumentos que serão passados como parâmetros da função
const pessoa1 = criaPessoa('Carlos', 'Martins', 35);
```

Assim podemos enviar os dados como argumentos para a função criaPessoa, que chegarão até a função como os parâmetros desta função.

\* <mark>Argumento é o valor que é passado para o parâmetro.</mark>

```js
function criaPessoa(nome, sobrenome, idade) {
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    }
}
```

* Chamamos essa função de factory, pois ela cria objetos, ela é uma fabrica de objetos;

* Podemos então acessar os dados criados dentro da função;

```js
                    // Parâmetros que irão receber os argumentos 
function criaPessoa(nome, sobrenome, idade) {
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    }
}

                           // Argumentos que serão passados como parâmetros da função
const pessoa1 = criaPessoa('Carlos', 'Martins', 35);
console.log(pessoa1.nome);

// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Carlos

[Done] exited with code=0 in 0.204 seconds                                       
```

Assim podemos criar várias pessoas;

```js
const pessoa1 = criaPessoa('Carlos', 'Martins', 35);
const pessoa2 = criaPessoa('Pedro', 'Silva', 25);
const pessoa3 = criaPessoa('Maicon', 'Neto', 10);
const pessoa4 = criaPessoa('Abreu', 'José', 55);
const pessoa5 = criaPessoa('Idalino', 'Severino', 44);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);


// Sa[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Carlos Pedro Maicon Abreu Idalino

[Done] exited with code=0 in 0.235 seconds
```

Então temos 5 pessoas diferêntes com seus atributos.

Quando temos os atributos da função repetidos, por exemplo;

```js
nome: nome,
sobrenome: sobrenome,
```

Podemos simplificar e colocar apenas uma vez o nome do atributo;

E assim o javascript entende que é para criar;

* nome - com valor de nome;

* sobrenome -  com o valor de sobrenome;

* etc...

Então podemos diminuir a função desta maneira;

```js
function criaPessoa (nome, sobrenome, idade) {
    return{nome, sobrenome, idade}
}


const pessoa1 = criaPessoa('Carlos', 'Martins', 35);
const pessoa2 = criaPessoa('Pedro', 'Silva', 25);
const pessoa3 = criaPessoa('Maicon', 'Neto', 10);
const pessoa4 = criaPessoa('Abreu', 'José', 55);
const pessoa5 = criaPessoa('Idalino', 'Severino', 44);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Carlos Pedro Maicon Abreu Idalino

[Done] exited with code=0 in 0.234 seconds
```



<u>***Métodos***</u>

Métodos são funções que estão dentro dos objetos.

Podemos por exemplo criar uma função que faz a pessoa1 falar o seu nome e sua idade;

```js
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 30,

    // Método dentro do objeto
    fala () {
        console.log(`Olá, eu sou ${pessoa1.nome} e minha idade é ${pessoa1.idade} anos.`);
    }
};

pessoa1.fala();


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Olá, eu sou Carlos e minha idade é 30 anos.

[Done] exited with code=0 in 0.222 seconds
```

Poderíamos criar a função fora do objeto, e chama-la sem precisar chamar o objeto antes.



<u>***This.***</u>

Podemos referênciar o objeto e qualquer atributo dentro do objeto com a palavra this.

Então podemos referênciar os atributos dentro do objeto da seguinte forma;

```js
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 30,

    fala () {
        console.log(`Olá, eu sou ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa1.fala();


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Olá, eu sou Carlos e minha idade é 30 anos.

[Done] exited with code=0 in 0.204 seconds
```

Desta forma o this está referênciando os atributos deste objeto, mas apenas neste contexto, apenas neste objeto especifico.

Podemos criar um método para incrementar a idade;

```js
    incrementaIdade() {
        // this.idade += 10;
        // Operador de pré-incremento
        this.idade++;

    }

    pessoa1.fala();
    pessoa1.incrementaIdade();
    pessoa1.fala();

    // Saída
    [Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Olá, eu sou Carlos e minha idade é 30 anos.
Olá, eu sou Carlos e minha idade é 31 anos.

[Done] exited with code=0 in 0.171 seconds
```

Podemos incrementar várias vezes;

```js
const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 30,

    fala () {
        console.log(`Olá, eu sou ${this.nome} e minha idade é ${this.idade} anos.`);
    },

    incrementaIdade() {
        // this.idade += 10;
        // Operador de pré-incremento
        this.idade++;
        // Operador de pós-incremento
        // ++this.idade;

    }
};


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


// Saída
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula 18 - Objetos (básico)/index.js"
Olá, eu sou Carlos e minha idade é 30 anos.
Olá, eu sou Carlos e minha idade é 31 anos.
Olá, eu sou Carlos e minha idade é 32 anos.
Olá, eu sou Carlos e minha idade é 33 anos.
Olá, eu sou Carlos e minha idade é 34 anos.

[Done] exited with code=0 in 0.171 seconds
```

**<mark>As partes principais do javascript são exatamente os objetos e as funções.</mark>**
