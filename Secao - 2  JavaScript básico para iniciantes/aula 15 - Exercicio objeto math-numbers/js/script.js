const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

let raiz = numero ** 0.5;

numeroTitulo.innerHTML = '';
// numeroTitulo.innerHTML = numero;


// Solução eficiente porém exige a concatenaçã de strings o que pode ser dificil na manutenção do código.
// texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>` +
//                   `<p>O numero ${numero} é inteiro: ${Number.isInteger(numero)}</p>` +
//                   `<p>É NaN: ${Number.isNaN(numero)}</p>` +
//                   `<p>Arredondando para baixo: ${Math.floor(numero)}</p>` + 
//                   `<p>Arredondando para cima: ${Math.ceil(numero)}</p>` + 
//                   `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
                  

// Solução apresentada pelo professor

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${(numero ** 0.5).toFixed(2)}</p>`;
texto.innerHTML += `<p>O numero ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;