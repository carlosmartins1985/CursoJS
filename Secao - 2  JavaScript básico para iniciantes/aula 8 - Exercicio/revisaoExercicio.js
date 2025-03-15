/*
Carlos Martins da Silva tem 39 anos, pesa x quilos, tem 1.8 de altura e seu IMC é de xxx. 

    * Avaliar qual dado irá mudar durante o código, para escolher entre const e let;

*/

const nome = "Carlos";
const sobrenome = "Martins da Silva";
const idade = 39;
const peso = 82;
const alturaEmMetros = 1.70;
let indiceMassaCorporal;
let anoNascimento; //Usar fórmula para calcular o ano de nascimento.

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2024 - idade;

// Usamos o operador de + para unir as variáveis.
// console.log(nome + " " + sobrenome + " tem " + idade + " anos," + 
//             " pesa " + peso + " quilos, tem " +  alturaEmMetros + " de altura e seu IMC é de " + indiceMassaCorporal);
// console.log(nome + " " + sobrenome, "nasceu em " + anoNascimento);


// Podemos também utilizar as templates strings para montar a saída.
// FORMA MAIS LEGÍVE DE SE IMPRIMIR AS STRINGS COM EXPRESSÕES JS
console.log(`${nome} ${sobrenome} tem 39 anos, pesa ${peso} quilos, tem ${alturaEmMetros} altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
