function meuEscopo () {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
    
    const objPessoa = [];
    // console.log(objPessoa);

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Solução professor, cria o objeto diretamente dentro do push para o array
        objPessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        // Minha solução
        // const pessoas = {
        //     nome: nome.value,
        //     sobrenome: sobrenome.value,
        //     peso: peso.value,
        //     altura: altura.value
        // }

        // objPessoa.push(pessoas);
        console.log(objPessoa);

        // resultado.innerHTML += `<p>${pessoas.nome + ' ' + pessoas.sobrenome + ' ' + pessoas.peso + ' ' + pessoas.altura}</p>`;

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();




    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado!');
    // };
    
    // Criamos a função recebeEventoForm
    // let contador = 1;


    //         Usado para evitar que o form seja enviado
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado. ${contador}`);
    //     contador++;