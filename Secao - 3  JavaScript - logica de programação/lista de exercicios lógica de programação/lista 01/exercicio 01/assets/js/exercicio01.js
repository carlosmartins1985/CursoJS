const inputNumero = document.querySelector('.numero');
const resultado = document.querySelector('.resultado');
const botaoSomar = document.querySelector('.btn-somar');
const botaoApagar = document.querySelector('.apagar');

function somarDois(numero) {
    const soma = Number(numero) + 2;
    const li = criaLi();
    li.innerText = `${numero} + 2 = ${soma}`;
    resultado.appendChild(li);
    limpaInput();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput () {
    inputNumero.value = '';
    inputNumero.focus();
}

botaoSomar.addEventListener('click', function(e) {
    if(!inputNumero.value) return;
    somarDois(inputNumero.value);
})

inputNumero.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputNumero.value) return;
        somarDois(inputNumero.value);
    }
})

botaoApagar.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')) {
        resultado.replaceChildren();
    }
})







