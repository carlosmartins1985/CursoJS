/*
        Escreva uma função que recebe um número e retorne o seguinte;

    - Numero é divisivel por 3 = Fizz;
    
    - Numero é divisivel por 5 = Buzz;
    
    - Numero é divisivel por 3 e 5 = FizzBuzz;
    
    - Numero não é divisivel por 3 nem 5 = Retorna o própio número
    
    - Checar se o número é realmente um número = Retorna o própio número
    
    - Use a função com números de 0 a 100 - Usando um loop entre 0 e 100
*/


// Solução com array
const valor = ['36', '35', 'José', 3, 5, 18, 45, 15, 100, 62];

function fizzBuzz(valor) {

    for(let i in valor) {
        const numero = valor[i];

        if(typeof numero !== 'number') {
            console.log(`'${numero}' não é um número.`);
        } else if(numero % 3 === 0 && numero % 5 === 0) {
            console.log(`FizzBuzz`);
        } else if (numero % 3 === 0) {
            console.log(`Fizz`);
        } else if (numero % 5 === 0) {
            console.log(`Buzz`);
        } else if(numero % 3 !== 0 && numero % 5 !== 0) {
            console.log(`${numero}`);
        }
    }
}
fizzBuzz(valor);


// Usando um gerador de números aleatórios
fizzBuzz(0, 1000);

function fizzBuzz(min, max) {
     
    let rand = 0;

    const gerarNumero = (min, max) => {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    };

    do {
        rand = gerarNumero(min, max);
        rand++;
        // Este if acaba sendo não usado, pois o sistema apenas irá gerar números.
        if (isNaN(rand) || typeof rand !== "number") {
            console.log(`'${rand}' não é um número.`);
        } else if (rand % 3 === 0 && rand % 5 === 0) {
            console.log(`${rand} é divisivel por 3 e por 5.`);
        } else if (rand % 3 === 0) {
            console.log(`${rand} é divisivel por 3`);
        } else if (rand % 5 === 0) {
            console.log(`${rand} é divisivel por 5`);
        } else if (rand % 3 !== 0 && rand % 5 !== 0) {
            console.log(`${rand} não é divisivel nem por 5 e nem por 3`);
        }
        } while (rand != max);
}


// Solução do professor
function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
} 

console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
