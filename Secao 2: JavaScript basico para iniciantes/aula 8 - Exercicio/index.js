/*
    Exercicio

    Imprimir na tela as seguintes informações.
    Carlos Martins da Silva tem 38 anos pesa 84 kg tem 1.8 de altura 
    seu IMC é de 25.xxxxx
    Carlos Martins da Silva nasceu em xxxx.
*/

const nome = 'Carlos';
const sobrenome = 'Martins da Silva';
let idade = 38;
const peso = 79;
const alturaEmMetros = 1.70;
const mesAtual = 2;
const mesNascimento = 7;
let indiceDeMassaCorporal;

indiceDeMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2024 - idade;

// Função para calcular a data correta e ano de nascimento
if (mesNascimento >= mesAtual) {
    anoNascimento -= 1;
} else if (mesAtual >= mesNascimento) {
    idade += 1;
    anoNascimento -= 1;
}

// console.log(nome, sobrenome, 'tem', idade, 'anos pesa', peso, 'Kg.');
// console.log('Tem', alturaEmMetros, 'm de altura', 'seu IMC é de', indiceDeMassaCorporal, '.');
// console.log(nome, 'nasceu em', anoNascimento, '.');

// Maneira de formar a frase usando o operador de adição +
console.log(`${nome} ${sobrenome} ${idade} anos de idade e pesa ${peso} Kg.`);
console.log(`Tem ${alturaEmMetros} m de altura e seu IMC é de ${indiceDeMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

