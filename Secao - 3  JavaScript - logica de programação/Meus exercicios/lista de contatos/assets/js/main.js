const inputNome = document.querySelector("#nome");
const btnSalvar = document.querySelector("#btn-salvar");
const contatos = document.querySelector("#contatos");

function salvarContatos() {
  const liContatos = contatos.querySelectorAll("li");
  const listaDeContatos = [];

  for (let contatos of liContatos) {
    let contatoTexto = contatos.innerText;
    contatoTexto = contatoTexto.replace("Apagar", " ").trim();
    listaDeContatos.push(contatoTexto);
  }

  const contatosJSON = JSON.stringify(listaDeContatos);
  localStorage.setItem('contatos', contatosJSON);
}

function criaNome(nomeInput) {
  const li = criaLi();
  li.innerText = nomeInput;
  contatos.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarContatos();
}

btnSalvar.addEventListener("click", function () {
  if (!inputNome.value) return;
  criaNome(inputNome.value);
});

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputNome.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputNome.value) return;
    criaNome(inputNome.value);
  }
});

function limpaInput() {
  inputNome.value = "";
  inputNome.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar essa tarefa");
  li.appendChild(botaoApagar);
}

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    //   console.log("Botão apargar clicado.");
    el.parentElement.remove();
    salvarContatos();
  }
});

function adicionarContatosSalvos() {
    const contatos = localStorage.getItem('contatos');
    const listaDeContatos = JSON.parse(contatos);

    for(let contatos of listaDeContatos){
        criaNome(contatos);
    }
}
adicionarContatosSalvos();
