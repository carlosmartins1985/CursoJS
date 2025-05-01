# Solução do exercicio switch e date

Aqui apresentaremos três soluções.



Primeiro selecionamos direto o h1, dentro do container;

```js
const h1 = document.querySelector('.container h1')
```

Assim estaremos introduzindo coisas do DOM.

Testamos colocando um texto qualquer;

```js
h1.innerHTML = `Hello Word!!`;
```

Testamos a saída colocando um Date, para ver como será exibido.

```js
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();// Usamos o toString para exibir a data.
```

Saída;

# Tue Apr 29 2025 20:08:52 GMT-0300 (Horário Padrão de Brasília)



Usamos a mesma função criada na aula sobre Date.

```js
function getWeekDay(diaSemana) {
    let diaSemanaTexto;
  
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
```

Essa para obter o dia da semana, segunda-feira, etc...



Criamos a função para retornar o mes, janeiro, fevereiro, usando a mesma lógica do dia da semana.

```js
function getMonthDay(mes) {
    let mesTexto;
  
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
```

Irá receber o número correspondente ao mes e retorna o nome do mes.



Criamos uma função que irá criar a data completa.



O código completo fica assim;

```js
const h1 = document.querySelector('.container h1');
const data = new Date();
// h1.innerHTML = data.toString();

function getWeekDay(diaSemana) {
  let diaSemanaTexto;

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
  let mesTexto;

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
```

Porém esse não é o melhor método a se fazer, pois fica muito grande, muitas linhas de código.



Podemos criar a data completa com menos linhas de código usando objetos;

```js
const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
```

Porém o professor usou toLocaleDateString, o que deu erro, usando o toLocaleString funcionou.



Podemos ainda excluir a variável opções e por tudo dentro do localeString;

```js
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
```

Assim resolvemos com 3 linhas de código.



Uma terceira forma de solucionar é usando arrays no lugar do switch, o que reduziria mais ainda o código;

```js
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
```

Lembramos que cada índice do array é representado por um número, iniciando do índice zero, em diante.








