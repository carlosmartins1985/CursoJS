const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const {nome: nome, sobrenome: sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);


// const {endereco: {rua: r = '', numero: n} } = pessoa;
// console.log(r, n);

// console.log(rua, numero, endereco);
// const { endereco: { rua, numero}, endereco} = pessoa // Com valores normais






// const { nome: teste, sobrenome } = pessoa;

// const { nome, sobrenome} = pessoa;

// const nome = pessoa.nome; Atribuição normal
// console.log(teste, sobrenome);
