/*
// O objeto date é uma função construtora

const tresHoras = 60 * 60 * 3 * 1000;
// const dia = 60 * 60 * 24 * 1000;
// new date  
// const data = new Date(0 + tresHoras - dia);

// const data = new Date(2025, 3);

// Data tipo string
const dataString = new Date(1744675638590)

console.log(dataString.toString());   

console.log('Dia', dataString.getDate());
console.log('Mês', dataString.getMonth() + 1); // Mẽs começa do zero
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Minuto', dataString.getMinutes());
console.log('Segundos', dataString.getSeconds());
console.log('Milésimos de segundo', dataString.getMilliseconds());
console.log('Numero do Dia da semana', dataString.getDay()); // 0 é domingo e 6 é sábado.

console.log(Date.now());

const dataMili = new Date(1744675638590);

console.log(dataMili);
*/

// Função para formatar a data para o Brasil

function formatarData(data) {
    const dia = data.getDate();

    return dia;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);







