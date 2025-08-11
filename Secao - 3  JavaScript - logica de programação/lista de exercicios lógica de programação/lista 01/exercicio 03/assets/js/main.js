const form = document.querySelector(".formulario");
const inputVendedor = document.querySelector("#vendedor");
const inputVendas = document.querySelector("#vendas");

const listarVendedores = document.querySelector(".listar-vendedores");

function eventoForm(e) {
  e.preventDefault();

  const vendedor = inputVendedor.value.trim();
  const vendas = Number(inputVendas.value);

  const pessoa = {
    nome: vendedor,
    vendas: vendas,
    comissao() {
      return (this.vendas * 10) / 100;
    },
  };

  const tr = document.createElement("tr");

  const tdNome = document.createElement("td");
  tdNome.textContent = pessoa.nome;

  const tdVendas = document.createElement("td");
  tdVendas.textContent = pessoa.vendas;

  const tdComissao = document.createElement("td");
  tdComissao.textContent = pessoa.comissao().toFixed(2);

  tr.appendChild(tdNome);
  tr.appendChild(tdVendas);
  tr.appendChild(tdComissao);

  listarVendedores.appendChild(tr);

  inputVendedor.value = "";
  inputVendas.value = "";
  inputVendedor.focus();
}

form.addEventListener("submit", eventoForm);
