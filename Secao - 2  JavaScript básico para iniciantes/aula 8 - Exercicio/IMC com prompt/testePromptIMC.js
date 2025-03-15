const nome = prompt("Digite o nome...");
const sobrenome = prompt("Digite o sobrenome...");
const idade = prompt("Digite sua idade...");
const peso = prompt("Digite seu peso...");
const alturaEmMetros = prompt("Digite sua altura em metros...");

let anoAtual = prompt("Digite em que ano estamos...")
let indiceMassaCorporal;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);

anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, mede ${alturaEmMetros}, pesa ${peso} quilos, seu IMC é de ${indiceMassaCorporal} e nasceu em ${anoNascimento}.`);
