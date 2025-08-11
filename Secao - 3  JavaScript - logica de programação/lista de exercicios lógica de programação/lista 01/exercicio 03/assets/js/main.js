const form = document.querySelector(".formulario");
const inputVendedor = document.querySelector("#vendedor");
const inputVendas = document.querySelector("#vendas");

const listarVendedores = document.querySelector(".listar-vendedores");

function eventoForm(e) {
  e.preventDefault();

  const vendedor = inputVendedor.value;
  const vendas = Number(inputVendas.value);

  const pessoa = [
    {
      nome: vendedor,
      vendas: vendas,

      comissao() {
        return (this.vendas * 10) / 100;
      },
    },
  ];

  for(let i in pessoa) {

    const li = document.createElement("li");

    li.innerText = `${pessoa[i].nome} ${pessoa[i].vendas} ${pessoa[i].comissao()}`;

    listarVendedores.appendChild(li);
  }

}
form.addEventListener("submit", eventoForm);
