function meuEscopo(){

const form = document.querySelector(".form");

const resultado = document.querySelector(".resultado")

function recebeEventoForm(evento){
    evento.preventDefault();

    const n1 = form.querySelector("#n1");
    const n2 = form.querySelector("#n2");

    let soma = Number(n1.value) + Number(n2.value);

    resultado.innerHTML = `<p>O valor da soma em binário é: ${soma.toString(2)}</p>`


}
form.addEventListener("submit", recebeEventoForm);

}
meuEscopo();