const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');
const total = document.querySelector('.total');


function recebeEventoForm(evento) {
    evento.preventDefault();

    const nomeProduto = form.querySelector('.nomeProduto');

    const qtdeProdutoElement = form.querySelector('.qtdeProduto');
    const qtdeProduto = Number(qtdeProdutoElement.value);

    const precoProdutoElement = form.querySelector('.precoProduto');
    const precoProduto = Number(precoProdutoElement.value);

    const categoriaProduto = form.querySelector('.categoriaProduto');

    const totalProdutos = precoProduto * qtdeProduto;


    console.log(`${nomeProduto.value} ${qtdeProduto} ${precoProduto} ${categoriaProduto.value}`);

    resultado.innerHTML += `<td>${nomeProduto.value}</td>` + `<td>${qtdeProduto}</td>` + `<td>${precoProduto}</td>` + `<td>${categoriaProduto.value}</td>`;
    
    total.innerHTML = `Total a pagar = R$${totalProdutos.toFixed(2)}`;

}
form.addEventListener('submit', recebeEventoForm);