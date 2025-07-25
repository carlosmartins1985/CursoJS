const form = document.querySelector('.formulario');

const inputVendedor = form.querySelector('#vendedor');
const inputVendas = form.querySelector('#vendas');

const vendedores = document.querySelector('.listaVendedores');

function eventoForm(e) {
    e.preventDefault();

    const vendas = Number(inputVendas.value);
    const vendedor = inputVendedor.value;

    criaVendedor(vendedor, calculaComissao(vendas));
    salvarResultado();
    limpaInput();

}
form.addEventListener('submit', eventoForm);

function calculaComissao(vendas) {
    return vendas * 10 / 100;
};

function criaVendedor(vendedor, calculaComissao) {
    const li = criaLi();
    li.innerText = `${vendedor} ${calculaComissao}`;
    vendedores.appendChild(li);
};

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function salvarResultado() {
    const liVendedores = vendedores.querySelectorAll('li');    


    

    const listaDeVendedores = [];

    for(let vendedor of liVendedores){
        let vendedorTexto = vendedor.innerText;
        vendedorTexto = vendedorTexto.replace('Apagar', ' ').trim();
        listaDeVendedores.push(vendedorTexto);
        console.log(listaDeVendedores);
        
    }
    const vendedoresJSON = JSON.stringify(listaDeVendedores);
    localStorage.setItem('vendedores', vendedoresJSON);
}

function limpaInput() {
    inputVendedor.value = ' ';
    inputVendas.value = ' ';
    inputVendedor.focus();
}

/*
function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();    
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}
    */