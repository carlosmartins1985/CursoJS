// Avaliação de curto circuito
// console.log('Carlos Martins' && 0 && 'Maria');

// Aqui ele checa/  essa        essa     e retorna o valor da última.
// console.log('Carlos Martins' && true && 'Maria');

// Retornando false com NaN
// console.log('Carlos Martins' && true && NaN);

// Avaliação na string como true
// console.log('Carlos Martins' && 'Pedro');

// Avaliação na string como false
// console.log('Carlos Martins' && "" && 'Pedro');

// function falaOi (){
//     return console.log('Oi');
// }


// const vaiExecutar = true;

// if (vaiExecutar) {
//     falaOi();
// }

// Modo mais performático, avaliando em false
// function falaOi (){
//     return console.log('Oi');
// }

// const vaiExecutar = undefined;

// console.log(vaiExecutar && falaOi());

// Modo mais performático, avaliando em true
// function falaOi (){
//     return 'Oi';
// }

// let vaiExecutar = 'Carlos';

// console.log(vaiExecutar && falaOi());


// Circuito de avaliação com or ||
// console.log(true || false);
// console.log(0 || false || null || 'Carlos Martins' || true);

// Or || com exemplo de site com cor null
// const corUsuario = 'rosa';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

// const a = 0;
// const b = null;
// const c = 'false';
// const d = false;
// const e = NaN;

// console.log(a || b || c || d || e);

// const a = 0;
// const b = null;
// const c = false;
// const d = false;
// const e = NaN;

// console.log(a || b || c || d || e);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || 'Carlos Martins' || d || e);