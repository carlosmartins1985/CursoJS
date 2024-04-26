const pontuacaoUsuario = 1000;

//                          Condição          valor p verdadeiro  valor falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';


const corUsuario = 'Blue';
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario, corPadrao);

