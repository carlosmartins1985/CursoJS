// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// Incremento
// for (let i = 0; i <= 15; i++) {
//     console.log(`Linha ${i}`);
    
// }


// Decremento
// for (let i = 10; i >= 0 ; i--) {
//     console.log(`Linha ${i}`);
    
// }

// Decremento de 10 em 10
// for (let i = 100; i >= 0 ; i -= 10) {
//     console.log(`Linha ${i}`);
// }

// for (let i = -10; i <= 10; i += 10) {
//     console.log(`Linha ${i}`);
// }

// for (let i = 500; i >= 400; i -= 10) {
//     console.log(`Linha ${i}`);
// }

// Números pares entre 0 e 10
// for( let i = 0; i <= 10; i++){
//     const par = i % 2 === 0 ? 'Par' : 'Impar';
//     console.log(i, par);
// }

// Percorrer um array
// const frutas = ['Maçâ', 'Pera', 'Uva'];

// for (let i = 0; i < frutas.length ; i++){
//     console.log(frutas[i]);
// }

// Mostrndo os índices e seus valores
// const frutas = ['Maçâ', 'Pera', 'Uva'];

// for (let i = 0; i < frutas.length ; i++){
//     console.log(`Índice ${i} = ${frutas[i]}`);
// }

// Com mais elementos
const itens = ['Frutas'];
const frutas = ['Maçâ', 'Pera', 'Uva', 'Melão', 'Abacate', 'Banana', 'Laranja', 'Morango'];

for (let i = 0; i < itens.length; i++){
    console.log(`Item = ${itens[i]}`);
    for (let j = 0; j < frutas.length; j++) {
        console.log(frutas[j]);
    }   
    // console.log(`${itens[i]} = ${frutas[j]}`);

}


// for (let i = 0; i < frutas.length ; i++){
//     console.log(`Índice ${i} = ${frutas[i]}`);
// }

