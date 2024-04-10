// function saudacao(){
//     console.log('Olá, essa é minha função!')
// }

// saudacao();

// Função com parâmetro para exibir o nome do usuário
// function saudacao(nome){ // O nome do usuário será recebido como parâmetro da função
//     console.log(`Olá ${nome}, bom dia, tudo bem!`)
// }

// Enviamos o nome do usuário como argumento da função
// saudacao('Carlos');
// saudacao('Marcos');
// saudacao('Claudio');

// Usando a função em uma variável
// function saudacao(nome){ 
//     console.log(`Olá ${nome}, bom dia, tudo bem!`)
// }

// const variavel = saudacao('Carlos');
// console.log(variavel);

// Função com retorno
// function saudacao(nome){ 
 
//     return `Olá ${nome}, bom dia, tudo bem!`;
// }

// const variavel = saudacao('Carlos');
// console.log(variavel);

// Função com retorno mais útil
// Uma função que faça a soma entres dois valores
// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(5, 10));
// console.log(soma(6, 20));
// console.log(soma(54, 55));
// console.log(soma(100, 50));

// Proteção da função
// function soma(num1, num2) {
//     const resultado = num1 + num2;
//     return num1 + num2;
// }

// Variável com o mesmo nome de outra que está dentro da função
// const resultado = soma(1, 2);

// console.log(soma(1, 2));
// console.log(resultado);

// Return
// function soma(num1, num2) {
//     const resultado = num1 + num2;
//     console.log('Antes do return');
//     return num1 + num2;
//     // console.log('Retorno ficou acima.');
// }

// console.log(soma(1, 2));


//Função sem parâmetros
// function soma(num1, num2) {
//     const resultado = num1 + num2;
//     // console.log('Antes do return');
//     return num1 + num2;
//     // console.log('Retorno ficou acima.');
// }

// // const resultado = soma()
// const resultado = soma(2)
// console.log(resultado);//


// Com strings ele faz a concatenação
// function soma(num1, num2) {
//     const resultado = num1 + num2;
//     // console.log('Antes do return');
//     return num1 + num2;
//     // console.log('Retorno ficou acima.');
// }

// // const resultado = soma()
// const resultado = soma('Carlos', ' Martins')
// console.log(resultado);

// Valores padrão
// function soma(num1 = 1, num2 = 1) {
//     const resultado = num1 + num2;
//     // console.log('Antes do return');
//     return num1 + num2;
//     // console.log('Retorno ficou acima.');
// }

// // const resultado = soma()

// // Passando apenas um argumento
// const resultado = soma(4)
// console.log(resultado);

// Função anônima
// const raiz = function (n) {
//     return n ** 0.5;
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// Arrow function simplificada
// const raiz = n => n ** 0.5;

// Arrow function normal
const raiz = (n) => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));