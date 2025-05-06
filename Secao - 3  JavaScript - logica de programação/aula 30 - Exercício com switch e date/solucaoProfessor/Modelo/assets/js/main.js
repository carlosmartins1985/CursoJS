const h1 = document.querySelector('.container h1');
const data = new Date();

// Solução usando arrays
function getMonthDay(numeroMes) {
  const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
            ,'outubro', 'novembro', 'dezembro'];
  
    return mes[numeroMes];
}

function getWeekDay(diaSemana) {
  const diaSemanaTexto = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira',
                          'sexta-feira', 'sábado'];

  return diaSemanaTexto[diaSemana];
}

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}

function criaData(data){
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getWeekDay(diaSemana);
  const nomeMes = getMonthDay(numeroMes);

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` + `,
  ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`)
}

h1.innerHTML = criaData(data);

// Solução usando o switch case
// function getWeekDay(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda-Feira";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça-Feira";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta-Feira";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta-Feira";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta-Feira";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sábado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = "Data invalida.";
//       return diaSemanaTexto;
//   }
// }

// function getMonthDay(mes) {
//   let mesTexto;

//   switch (mes) {
//     case 0:
//       mesTexto = "Janeiro";
//       return mesTexto;
//     case 1:
//       mesTexto = "Fevereiro";
//       return mesTexto;
//     case 2:
//       mesTexto = "Março";
//       return mesTexto;
//     case 3:
//       mesTexto = "Abril";
//       return mesTexto;
//     case 4:
//       mesTexto = "Maio";
//       return mesTexto;
//     case 5:
//       mesTexto = "Junho";
//       return mesTexto;
//     case 6:
//       mesTexto = "Julho";
//       return mesTexto;
//     case 7:
//       mesTexto = "Agosto";
//       return mesTexto;
//     case 8:
//       mesTexto = "Setembro";
//       return mesTexto;
//     case 9:
//       mesTexto = "Outubro";
//       return mesTexto;
//     case 10:
//       mesTexto = "Novembro";
//       return mesTexto;
//     case 11:
//       mesTexto = "Dezembro";
//       return mesTexto;
//     default:
//       mesTexto = "Mês invalido.";
//       return mesTexto;
//   }
// }

// function zeroAEsquerda(num){
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data){
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getWeekDay(diaSemana);
//   const nomeMes = getMonthDay(numeroMes);

//   return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` + `,
//   ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`)
// }

// h1.innerHTML = criaData(data);

// Usando objetos da linguagem
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// const opcoes = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);


// Solução usando recursos nátivos da linguagem
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});