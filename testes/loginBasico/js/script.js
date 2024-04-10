function meuEscopo(){
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const senha = form.querySelector('.senha');

        if(nome.value === 'Carlos' && senha.value === 'stenzel1985'){
            resultado.innerHTML +=`<h1>Você está logado!!</h1>`,
            resultado.innerHTML +=`<h2>username = ${nome.value}</h2>`,
            resultado.innerHTML +=`<h2>senha = ${senha.value}</h2>`
        } else {
            resultado.innerHTML = `<h1>Usuario ou senha incorretos.`
        }
        

    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();