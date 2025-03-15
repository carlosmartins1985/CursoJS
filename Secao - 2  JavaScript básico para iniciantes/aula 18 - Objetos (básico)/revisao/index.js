/**
            Objetos

        Criamos um array para servir de exemplo.

        Notamos que podemos alterar os valores do array mesmo usando const,
    pois trata-se de um valor por referência.
        O que não podemos é reatribuir o array, a variável array.
        Ou seja, podemos alterar os elementos dentro do array;

    const array = [1,2,3]; // Criamos o array
    array.push(4); // Adicionamos o elemento 4 ao array
    array[0] = "Vanildo"; // Reatribuímos o valor do índice 0 do array
    console.log(array);

    array = "Outra coisa"; // Isso não podemos fazer, se precisarmos precisamos utilizar let


    // Mudando para let, ele redeclara toda a variável array.
    // Passa a ser apenas uma string
    let array = [1,2,3];
    array.push(4);
    array[0] = "Vanildo";
    console.log(array);

    array = "Outra coisa";
    console.log(array);


        Agora imaginemos que precisamos criar várias pessoas, algo como:

    const nome01 = "Carlos";
    const sobrenome01 = "Martins";
    const idade01 = 39;

    const nome02 = "Pedro";
    const sobrenome02 = "Silva";
    const idade02 = 55;

        Notamos que precisaríamos criar muitas variáveis para adicionar as pessoas.

        Notamos também que todas as variáveis, nome, sobrenome e idade estão relacionadas, ou seja,
    fazem parte de um grupo.

        Seria interessante que pudessemos agrupar essas informações em uma variável só.

        Poderíamos então criar um objeto;

    // Isso seria um objeto literal.
    const pessoa1 = {
    nome: "Pedro",
    sobrenome: "Miranda",
    idade: 39
    }

        Para criar um objeto usamos as chaves, {}.

        Dentro do objeto podemos criar atributos, que são variáveis, mas que estão dentro do objeto.

        E sendo assim, não precisamos usar nem const nem let.
    
    const pessoa1 = {
    nome: "Pedro", // Atributo nome
    sobrenome: "Miranda", // Atributo sobrenome
    idade: 39 // Atributo idade
    }

    console.log(pessoa1.nome);

        Então temos uma pessao com atributos, e para acessar esses atributos
    usamos a notação de . ponto

        Para acessar o nome da pessoa usamos pesssoa1.nome;

    const pessoa1 = {
    nome: "Pedro",
    sobrenome: "Miranda",
    idade: 39
    }

    console.log(pessoa1.nome);
    console.log(pessoa1.sobrenome);
    console.log(pessoa1.idade);

        Porém, assim mesmo ainda teríamos que criar vários objetos para várias pessoas.

        Para melhorar podemos criar uma função que irá criar esses objetos.

        Para isso criamos a function criaPessoa, que irá receber os parâmetros, nome, 
    sobrenome e idade.
        E então retornamos um objeto, que será criado com essas informações.

    // Criação da função com os parâmetros
    function criaPessoa(nome, sobrenome, idade) {
        // Retornamos um obj. 
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        }
    }

        Então criamos outra variável que irá usar essa função para criar a pessoa:

    function criaPessoa(nome, sobrenome, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        }
    }

    const pessoa1 = criaPessoa("Carlos", "Martins", 39);

        Chamamos essa função de factory, pois ela cria objetos.

    function criaPessoa(nome, sobrenome, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        }
    }

    const pessoa1 = criaPessoa("Carlos", "Martins", 39);
    const pessoa2 = criaPessoa("José", "Oliveira", 25);
    const pessoa3 = criaPessoa("Maria", "Silva", 45);
    const pessoa4 = criaPessoa("Pedro", "Cardoso", 77);
    const pessoa5 = criaPessoa("Beatriz", "Costa", 35);


    console.log(pessoa1.nome, pessoa2.nome);

        E assim podemos criar várias pessoas e usar a notação de ponto . para acessa-las.

        Aqui nos atributos percebemos que possuimos valores iguais;
        nome: nome,
        sobrenome: sobrenome
        etc...

    function criaPessoa(nome, sobrenome, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        }
    }

        Então podemos simplificar, pois o js entende que nome irá receber o valor de nome,
    e assim por diante

    function criaPessoa(nome, sobrenome, idade) {
        return { nome, sobrenome, idade }
    }

        Sempre que uma funçã está dentro de um objeto chamamos de método.
        Então podemos ter funções dentro dos objetos;

        Para isso criamos, dentro do objeto, um método, que é uma função dentro do obj.
        Sem usar a palavra function, apenas o nome da função, método.

    const pessoa = {
        nome: "Carlos",
        sobrenome: "Martins",
        idade: 29,

        // Método, função dentro do obj, aqui não precisamos da palavra function.
        msg () {
            console.log("Ola Mundo");
        }
    }

    pessoa.msg();

        Para executar a funçã dentro do objeto, chamamos direto, pessoa.msg(), e será executado 
    o que estiver dentro da função.
        Também podemos usar o this, para referênciar os atributos do objeto dentro dos métodos, 
    como nome, idade e etc...

        Podemos usar o nome dentro do método msg() para imprimir o nome da pessoa e a mensagem;

    const pessoa = {
        nome: "Carlos",
        sobrenome: "Martins",
        idade: 29,

        // Método, função dentro do obj, aqui não precisamos da palavra function.
        msg () {
            // Neste contesto, this representa este objeto
            console.log(`${this.nome} diz olá mundo!!`);
        }
    }
    pessoa.msg();

        Aqui estamos pegando o valor de nome, e o valor de sobrenome e adicionando a frase diz olá mundo.

        Podemos criar outro método para incrementar a idade a cada execução

    const pessoa = {
        nome: "Carlos",
        sobrenome: "Martins",
        idade: 29,

        // Método, função dentro do obj, aqui não precisamos da palavra function.
        msg () {
            // Mudamos a msg para dizer a idade;
            console.log(`Minha idade é `);
        },
    
        // Método para incrementar a idade
        incrementaIdade() {
            ++this.idade // Usamos o operador de pré incremento
        }
    }
    pessoa.msg();

        A cada execução do código ele irá incrementar a idade e alterar a idade.
*/

const pessoa = {
    nome: "Carlos",
    sobrenome: "Martins",
    idade: 29,

    // Método, função dentro do obj, aqui não precisamos da palavra function.
    msg () {
        console.log(`Minha idade é ${this.idade}.`);
    },
 
    // Método para incrementar a idade
    incrementaIdade() {
        ++this.idade // Usamos o operador de pré incremento
    }
}
pessoa.msg();
pessoa.incrementaIdade();
pessoa.msg();
pessoa.incrementaIdade();
pessoa.msg();
pessoa.incrementaIdade();
pessoa.msg();
pessoa.incrementaIdade();




