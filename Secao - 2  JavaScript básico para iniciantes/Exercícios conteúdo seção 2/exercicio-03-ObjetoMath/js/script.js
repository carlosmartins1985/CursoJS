// Pega o valor digitado no prompt do navegador
const numero = Number(prompt('Digite um número:'))
// Seleciona o elemento span que está dentro do h1 através do id
const numeroDigitado = document.getElementById('numero-digitado');
// Seleciona o elemento p, que irá receber o resultado das operções
const resultado = document.getElementById('resultado');

// Adiciona o número digitado ao span que foi selecionado através do id.
numeroDigitado.innerHTML = numero;

console.log(numero);

resultado.innerHTML = `<p>`;
resultado.innerHTML += `<p>O resto da divisão de ${numero} por 2 é igual a ${numero % 2}.</p>`;
resultado.innerHTML += `<p>O número ${numero} elevado ao cubo é igual a ${numero ** 3}.</p>`;

