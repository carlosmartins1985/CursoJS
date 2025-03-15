// Evitar variáveis de mesmo nome, conflito.
function meuEscopo(){
    // Variáveis globais
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    const objUsuario = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();
    
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const idade = form.querySelector('.idade');

        const usuario  = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: Number(peso.value),
            altura: Number(altura.value),
            idade: idade.value
        }

        objUsuario.push(usuario);

        const imc = usuario.peso / (usuario.altura * usuario.altura)

        console.log(usuario.nome, usuario.sobrenome, usuario.peso, usuario.altura, usuario.idade, imc.toFixed(2));
        console.log(objUsuario);

        // resultado.innerHTML += `<p>${usuario.nome} ${usuario.sobrenome} ${usuario.peso} ${usuario.altura} ${usuario.idade} ${imc.toFixed(2)}</p>`;
        resultado.innerHTML += `<td>${usuario.nome}</td>` + `<td>${usuario.sobrenome}</td>` + `<td>${usuario.peso}</td>` + `<td>${usuario.altura}</td>` + `<td>${usuario.idade}</td>` + `<td>${imc.toFixed(2)}</td>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();



