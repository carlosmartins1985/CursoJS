/**
            Avaliação de curto circuito

        Podemos utilizar a avaliação de curto ciurcuito para termos um código 
    mais performático.

        Sabemos que;
    && - Para que AND retorne verdadeiro, todas as expressões precisam ser verdadeiras, ou seja,
        assim que a expressão encontrar um valor falso já irá retornar false, não sendo necessário checar mais nada.
         Sempre que o valor falso é encontrado, o programa para e esse valor é retornado.
    || - Para que OR retorne falso, todas as expressões precisam ser falsas.  

        Valores que avaliam em false, os falsy values

    FALSY - Valores que avaliam em falso
    false - Valor literal falso;
    0     
    '', "", ``
    null / undefined
    NaN
    
        Podemos por exemplo ter uma função qualquer, e atribuir a uma variável, se essa função será ou
    não executada.

    function falaOi() {
    return "Olá";
    }

    const vaiExecutar = true;

    console.log( vaiExecutar && falaOi());

        Aqui será checado se a variável vaiExecutar é verdadeira ou falsa, se for falsa, 
    o programa para, e retorna o valor dessa variável, mas se for true, ela irá executar a função 
    fala Oi.

        Se tiver qualquer valor false, esse será retornado.


            Exemplo usando o OR
        Exemplo onde temos uma cor padrão e uma cor que pode ser atribuida pelo usuário.
        Ele verifica primeiramente a corUsuario, se não tiver nenhuma cor definida, ele aplica a cor padrão

    const corUsuario = null;
    const corPadrao = corUsuario ||'red';

    console.log(corPadrao);

    Notamos que podemos criar extruturas de comparação usando o OR.

    Exemplo com variáveis;

    const a = 0;
    const b = null;
    const c = 'false';
    const d = false;
    const e = NaN;

    console.log(a || b || c || d || e);

        Aqui nos é retornado false, mas se trata da string false, não do valor false literal,
    pois é o valor verdadeiro encontrado



 */

// Sempre que o and encontra um valor false, ele para a execução e retorna o valor false encontrado.
// console.log('Carlos' && 0 && 'Jõao');

// Se não houver valor falso ele retorna a última expressão
// console.log('Carlos' && 'Pedro' && 'Jõao');

// Sempre retorna o primeiro valor verdadeiro encontrado
//console.log(0 || false || null || 'Carlos Martins'); // Basta uma expressão ser verdadeira para retornar verdadeiro.


const a = 0;
const b = null;
const c = 'false'; // Isso é uma string, avaliada em verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
