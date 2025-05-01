const data = new Date();

const msg = `${getWeekDay(data.getDay())}, ${zeroAEsquerda(data.getDate())}` +
            ` de ${getMonthDay(data.getMonth())} de ${data.getFullYear()}, ` +
            `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`

setDataAtual(msg);

function getWeekDay(diaSemana) {
  
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-Feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Data invalida.";
      return diaSemanaTexto;
  }
}

function getMonthDay(mes) {
  
    switch (mes) {
      case 0:
        mesTexto = "Janeiro";
        return mesTexto;
      case 1:
        mesTexto = "Fevereiro";
        return mesTexto;
      case 2:
        mesTexto = "Março";
        return mesTexto;
      case 3:
        mesTexto = "Abril";
        return mesTexto;
      case 4:
        mesTexto = "Maio";
        return mesTexto;
      case 5:
        mesTexto = "Junho";
        return mesTexto;
      case 6:
        mesTexto = "Julho";
        return mesTexto;
      case 7:
        mesTexto = "Agosto";
        return mesTexto;
      case 8:
        mesTexto = "Setembro";
        return mesTexto;
      case 9:
        mesTexto = "Outubro";
        return mesTexto;
      case 10:
        mesTexto = "Novembro";
        return mesTexto;
      case 11:
        mesTexto = "Dezembro";
        return mesTexto;
      default:
        mesTexto = "Mês invalido.";
        return mesTexto;
    }
}

function criaTitulo(){
  const h = document.createElement('h1');

  return h;
}

function setDataAtual(msg) {
  const resultado = document.querySelector('#dataAtual');

  resultado.innerHTML = '';

  const h = criaTitulo();

  h.innerHTML = msg;

  resultado.appendChild(h);
}

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}


