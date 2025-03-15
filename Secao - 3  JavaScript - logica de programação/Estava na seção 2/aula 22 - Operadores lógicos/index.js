/**
    Operadores lógicos 
    && - AND - E
    || - OR  - OU
    !  - NOT - NÃO
 */

//      AND &&
// && - AND - E lógico
// console.log(true && true && true && false && true && true);

// && - AND - E lógico retornando false
// console.log(true && true && true && false && true && true);

// Usando uma variável para a verificação
// const expressaoAnd = true && true && true && false && true && true;
// const expressaoAnd = true && true && true && true && true && true;
// console.log(expressaoAnd);

//       || OR
// const expressaoOr = true || false || false || true || false || false || true || false;  
// const expressaoOr = false || false || false || false || false || false || false || false;  
// console.log(expressaoOr);

// Uso prático dos operadores
// const usuario = 'Carlos'; // form que foi digitado pelo usuario
// const senha = '123456';  // form que foi digitado pelo usuario

// const vaiLogar = usuario === 'Carlos' && senha === '123456';
// console.log(vaiLogar);

// ! - NOT - Negação
// console.log('Valor verdadeiro ' + true);
// console.log('Valor false ' + false);

// console.log('Invertendo o true com not ' + !true);
// console.log('Invertendo o false com not ' + !false);

// Negando duas vezes os valores, é como não negar nada
console.log(!!true);