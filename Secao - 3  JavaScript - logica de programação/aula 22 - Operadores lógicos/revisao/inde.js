/**
            Operadores lógicos

        São usados para checar mais de uma comparação.

    São eles;
    && - And - E
    || - Ou  - Ou
    !  - Not - Não, negação
 */

// Utilizando com valores literais
// && compara valores, precisa que todos sejam verdadeiros para retornar verdadeiro
// console.log(true && true && true && true);
// Se um for falso retorna falso
// console.log(true && false && true );
// Podemos também ter isso em uma variável de expressão
// const expressãoAnd = true && true && true && true;
// console.log(expressãoAnd);


// || ou, precisa que apenas uma retorne verdadeiro para que a expressão toda retorne verdadeiro.
// Apenas se todas as comparações forem falsas será retornado false.
// const expressaoOr = true || true || false || true;
// console.log(expressaoOr);

// Comparação
// Podemos comparar usuario e senha, se forem iguais, loga no sistema.
// Comparamos se o usuario e a senha são iguais ao da base de dados.
// Precisamos comparar os dois, para que o usuario não loge sem senha, ou senha incorreta.
// Se por engano colocar-mos or, ele logaria apenas com um dos parâmetros
// const usuario = 'Carlos';
// const senha = 123456;
// const vaiLogar = usuario === 'Carlos' && senha === 123456;
// console.log(vaiLogar);


// ! Not - Negação, inverte uma expressão.
const num = 2;
console.log(!num);

console.log(!true);
console.log(!false);
