const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');
const data = document.querySelector('.dataHoje');



function eventoForm (evento) {
    evento.preventDefault();

    const num1 = Number(form.querySelector('.num1').value);
    const num2 = Number(form.querySelector('.num2').value);

    const dataHoje = new Date();

    // console.log(num1, num2);
    // console.log(dataHoje);

    data.innerHTML = `<p>${dataHoje}</p>`

    resultado.innerHTML += `<td>${num1}</td>` + `<td>${num2}</td>`

}
form.addEventListener('submit', eventoForm);