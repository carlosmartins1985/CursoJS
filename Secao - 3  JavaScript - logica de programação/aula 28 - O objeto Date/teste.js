const data = new Date();

// console.log(data);

function formatarData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    return `${dia}  ${mes} ${ano}`;
    
}

const dataFormatada = formatarData(data);

console.log(dataFormatada);

