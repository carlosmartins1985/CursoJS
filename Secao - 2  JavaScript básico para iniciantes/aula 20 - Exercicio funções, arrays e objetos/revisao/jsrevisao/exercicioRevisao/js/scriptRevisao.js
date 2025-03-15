/**
            Exercício
    
    * Criar um formulário para pedir;
        * Nome do usuário;
        * Sobrenome do usuário;
        * Peso do usuário;
        * Altura do usuário
    
    * Guardar esses dados em um objeto;
    * Criar um array com esses objetos, um array de usuários;
    * Exibir as informações dos usuários em parágrafos, em uma div;
    * Exibir essas informaçẽs no console do navegador.
    
 */

function  meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const usuario = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: Number(peso.value),
            altura: Number(altura.value)
        }
        pessoas.push(usuario);

        console.log(pessoas);        

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

/*
// Possível função para mostrar o resultado 
function mostrarResultado(nome, sobrenome, peso, altura) {
    resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;
    return resultado;
}
mostrarResultado(usuario.nome, usuario.sobrenome, usuario.peso, usuario.altura);
*/


/*
// Solução professor, colocar o objeto direto dentro do array.
pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value,

});
*/