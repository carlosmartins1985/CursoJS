const nome = prompt('Digite seu nome completo:');
const sobrenome = prompt('Digite seu sobrenome completo:');


const nomeCompleto = document.getElementById('nome');

const resultado = document.getElementById('resultado');

nomeCompleto.innerHTML = `${nome} ${sobrenome}`;

resultado.innerHTML = ``;
resultado.innerHTML += `<p>O seu nome completo tem ${(nome + sobrenome).length} letras.</p>`;
resultado.innerHTML += `<p>As três primeiras letras do seu nome são: ${nome.slice(0, 3)}</p>`;
resultado.innerHTML += `<p>As três últimas letras do seu sobrenome são: ${sobrenome.slice(-3)}</p>`;




