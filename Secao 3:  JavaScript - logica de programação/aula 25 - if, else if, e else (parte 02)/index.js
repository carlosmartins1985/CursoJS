// const numero = 5;

// if (numero >= 0 && numero <= 5) {
//     // console.log('Sim, o número é maior ou igual a zero.');
//     console.log('Sim, o número está no intervalo.');
// } else {
//     console.log('O número não está no intervalo');
// }
// console.log('O número não está no intervalo');

// Se isso ocorrer (numero >= 0 && numero <= 5) faça isso console.log('Sim, o número está no intervalo.');
// Se não faça isso console.log('O número não está no intervalo');

// Verificação de intervalo entre 0 e 11
// const numero = 10;

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está no intervalo de 0 a 5');
// } else if (numero >= 6 && numero <= 8) {
//     console.log('O número está no intervalo de 6 a 8');
// }else if (numero >= 9 && numero <= 11) {
//     console.log('O número está no intervalo de 9 a 11');
// } else {
//     console.log('O número não está no intervalo de 0 a 11');
// }

// Verificando a saída do bloco e do código assim que uma opção é verdadeira
const numero = 10;

if (1 === 1) { // Verdadeira
    console.log('Verificação literal.');
}

if (numero >= 10) {
    console.log('O número é maior ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está no intervalo de 0 a 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está no intervalo de 6 a 8');
}else if (numero >= 9 && numero <= 11) { // Também é verdadeira
    console.log('O número está no intervalo de 9 a 11');
} else {
    console.log('O número não está no intervalo de 0 a 11');
}

console.log('...Aqui vem o resto do código javascript');