/*              Operador ternário

        O operador ternário trata-se apenas de uma ? e :, interrogoção e dois pontos.

        Podemos usa-lo em partes onde usaremos apenas um if else, ou seja, duas alternativas.

        Usuário vip ou não, usaríamos um if else, mas podemos usar a operação ternária;


        const pontuacaoUsuario = 1000;

        const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal.";

        console.log(nivelUsuario);

        * Verificamos com a operação ternária se o usuário tem mais de 999 pontos;
        * Se sim, a primeira string será exibida;
        * Se não a segunda string será exibida.

*/

const pontuacaoUsuario = 1000;
//                   Condição                   Valor true       Valor false
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal.";


const corUsuarioVip = null;
const corSite = corUsuarioVip || "Branco"


console.log(nivelUsuario, corSite);
