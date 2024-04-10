/**
    Tipos de dados primitivos(imutáveis)
    * string;
    * number;
    * null;
    * undefined;
    * bigint;
    * symbol;

 */

// Podemos mudar o valor que está dentro da variável
// let nome = 'Carlos';
// nome[0] = 'M'
// nome = 'Diogo';
// console.log(nome[0]);

// Podemos copiar o valor de uma variável para outra
// let a = 'A'
// let b = a;
// console.log(a, b);

// Mesmo alterando o valor de a, b não será afetado
// a = 'Outro valor';
// console.log(a, b);

/**
    Tipos de dados passados por referência
    * array;
    * object;
    * function
 */

// let a = [1, 2, 3];
// let b = a;
// let c = a;

// a.push(4);

// console.log(a);
// console.log(a, b);

// b.pop();
// console.log(b);
// console.log(a, b);

// console.log(c);

// a.push('Carlos');
// console.log(c);


// Copiar valores referência
// let b = [...a];

// console.log(b);
// console.log(b, c);

// Valores passados para objetos
const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
};

// const b = a;

// Copiando a para b
const b = {...a};

a.nome ='João';
console.log(a, b);