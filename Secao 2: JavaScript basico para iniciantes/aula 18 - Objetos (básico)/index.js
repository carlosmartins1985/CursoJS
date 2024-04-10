// Objetos


// const pessoa1 = {
//     nome: 'Carlos',
//     sobrenome: 'Martins',
//     idade: 30
// }

// console.log(pessoa1);

// Utilizando funções para criar o objeto
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// Simplificar a função
// function criaPessoa (nome, sobrenome, idade) {
//     return{nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Carlos', 'Martins', 35);
// const pessoa2 = criaPessoa('Pedro', 'Silva', 25);
// const pessoa3 = criaPessoa('Maicon', 'Neto', 10);
// const pessoa4 = criaPessoa('Abreu', 'José', 55);
// const pessoa5 = criaPessoa('Idalino', 'Severino', 44);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

// Métodos
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
    },

    alteraNome(){
        this.nome = 'José';
    }
};

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();

pessoa1.fala();
pessoa1.alteraNome();
pessoa1.fala();






























// // Array com const não pode ser reatribuido
// const array = [1, 2, 3];

// // Array com let, pode ser reatribuido
// let arrayLet = ['alteração']

// // Adicionar um valor ao array
// array.push(4);
// // Alterar um valor do array
// array[1] = 'Carlos';

// arrayLet = 'Novo Array';

// console.log(array, arrayLet);

