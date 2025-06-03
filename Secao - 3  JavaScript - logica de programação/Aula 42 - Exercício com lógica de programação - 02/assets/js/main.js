/*
        Escreva uma função chamada ePaisagem que recebe dois argumentos,
    largura e altura, de uma imagem (number).
        Retorne true se a imagem estiver no modo paisagem.
*/

// Direto com um return, minha solução
// function ePaisagem (largura, altura) {
//     return largura > altura;
// }
// console.log(ePaisagem(1000, 5000));

// Solução professor
// function ePaisagem(largura, altura){
//     return largura > altura ? true : false;
// }
// console.log(ePaisagem(1500, 200));

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1080));