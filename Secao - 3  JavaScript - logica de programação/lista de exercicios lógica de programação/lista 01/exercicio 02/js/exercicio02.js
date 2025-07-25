const form = document.querySelector(".formulario");

function preventDefault(e) {
    e.preventDefault();

    const inputN1 = e.target.querySelector("#primeiroNumero");
    const inputN2 = e.target.querySelector("#segundoNumero");

    if(inputN1.value.trim() === '' || inputN2.value.trim() === ''){
        mostrarResultado('Por favor insira dois números válidos.')
        limpaInput(inputN1, inputN2);
        return;
    };

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    if(isNaN(n1) || isNaN(n2)) {
        mostrarResultado('Digite apenas números válidos.');
        limpaInput(inputN1, inputN2);
        return;
    }

    const somar = (n1, n2) => n1 + n2;
    const subtrair = (n1, n2) => n1 - n2;
    const multiplicar = (n1, n2) => n1 * n2;

    const msg = `Soma: ${somar(n1, n2)}
                 Subtração: ${subtrair(n1, n2)}
                 Multiplicação: ${multiplicar(n1, n2)} 
                 Divisão: ${divisao(n1, n2)}`;

    mostrarResultado(msg);

    limpaInput(inputN1, inputN2);

}
form.addEventListener("submit", preventDefault);

function divisao(numero1, numero2) {
  if (numero2 != 0) return (numero1 / numero2).toFixed(2);
  return "Erro. Divisão por zero.";
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function mostrarResultado(msg) {
    const mostrarResultado = document.querySelector(".mostrarResultado");

    const p = criaP();

    p.innerText = msg;

    mostrarResultado.innerHTML = '';

    mostrarResultado.appendChild(p);
}

function limpaInput(input1, input2) {
    input1.value = '';
    input2.value = '';
    input1.focus();
}