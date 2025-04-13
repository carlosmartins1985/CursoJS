// Aqui selecionamos o form que vem do html
const form = document.querySelector("#formulario");

// Função que evita que o formulário seja enviado
form.addEventListener("submit", function(e) {
    
  // (e) Vem de event.
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido.", false);
    return;
  }

  if (!altura) {
    setResultado("Altura invalida", false);
    return;
  }

//   Chamada das funções, onde teremos o calculo e exibição do IMC.
  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelIMC(imc);
  const msg = `O seu imc é ${imc} (${nivelIMC}).`;

//   Por último temos a função que irá exibir o resultado.
  setResultado(msg, true);
});

// Funçã para calcular o IMC.
function getIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// Função que recebe o IMC e retorna o nível.
function getNivelIMC(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  // Aqui invertemos a lógica, e checamos de tras para frente, pois a medida que a função encontrar return, não será mais executada
  // Uma tática que não é muito recomendado, podemos por tudo em uma linha só.
  if (imc >= 39.9) return nivel[5]; // Se o valor for maior que 39.9, já retorna o nível.
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Função que cria um parágrafo.
function criaP() {
  const p = document.createElement("p");
  return p;
}

// Função que exibe o resultado do IMC.
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");

  // Zerar o conteúdo, deixando uma div em branco
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

