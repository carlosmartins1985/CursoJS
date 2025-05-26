const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    console.log("Pulei o número dois e 5");
    i++;
    continue;
  }

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    i++;
    break;
  }
  console.log(numero);

  i++;
} while (i < numeros.length);

// while (i < numeros.length) {
//     let numero = numeros[i];

//     if(numero === 2 || numero === 5){
//         console.log('Pulei o número dois e 5');
//         i++;
//         continue;
//     }

//     if(numero === 7) {
//         console.log('7 encontrado, saindo...');
//         i++;
//         break;

//     }
//     console.log(numero);

//     i++;
// }

/*
// Usando o forIn
for(let numero in numeros) {
    let n = numeros[numero];

    if(n === 2 || n === 5){
        console.log('Pulei o número dois e 5');
        continue;
    }

    if(n === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }
    
    console.log(numeros[navigator]);
    
}
*/

/*
for (let i = 0; i < numeros.length; i++) {

    if(i === 2 || i === 5){
        console.log('Pulei o número dois e 5');
        continue;
    }

    if(i === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }

    console.log(numeros[i]);
    
*/

/*
for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        
        continue;
    }

    console.log(numero);
 
    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }

    // Podemos ter também outros ifs
    if (numero === 7) {
        continue;
    }
    console.log(numero);
}
*/
