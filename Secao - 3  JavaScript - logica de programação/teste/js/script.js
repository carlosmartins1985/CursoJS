function meuEscopo () {

    const form = document.querySelector('.formulario');

    const nome = form.querySelector('#nome');

    function recebeEventoForm (evento) {
        evento.preventDefault();

        console.log(nome.value);
        
        





    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();