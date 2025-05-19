const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// Usando as chaves para acessar o nome
// const chave = 'nome';
// console.log(pessoa[chave]);

// Usando a notação de ponto para acessar o nome no objeto
// console.log(pessoa.nome);
// console.log(pessoa['nome']);


// for in em objeto, retornando as chaves
// for (let key in pessoa) {
//     console.log(key);
// }


// const frutas = ['Banana', 'Laranja', 'Maçã', 'Pera', 'Abacaxi'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }


// Forma classica de usar o for
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }