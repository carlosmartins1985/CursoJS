// Capturar o evento de submit do formulario
const form = document.querySelector('#formulario');

// Função anônima que evita o formulario de ser enviado, adidionamos um escutador que é o evento de submit.
document.addEventListener('submit', function (e) {
    // Prevenimos o default, para que o formulario não seja enviado
    e.preventDefault();

    // Capituramos os dados dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Aqui tentamos converter os input para number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    

    // Se o resultado for um NaN, ele executa esse trecho e adiciona a msg
    if (peso <= 25 || peso >= 600) {
        setResultado('Peso entre 25kg e 600kg', false);
        return;
    }
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (altura <= 0.65 ||altura >= 2.5) {
        setResultado('Altura invalida', false);
        return;
    }   
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }


    // Aqui criamos uma função especifica para calcular o imc
    const imc = getIMC(peso, altura);

    // Aqui pegamos o nível do imc, o texto
    const nivelIMC = getNivelIMC(imc);
    
    // Aqui criamos a mensagem que será exibida para o usuário 
    const msg = `O seu imc é: ${imc} (${nivelIMC}).`

    // Chamamos a funçã de exibir o resultado
    setResultado(msg, true);



})

// Função para retornar o nível do imc
function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal',
        'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
        'Obesidade grau 3'];

    // Aqui invertemos a lógica, e checamos de tras para frente, pois a medida que a função encontrar return, não será mais executada
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Função para calcular o imc
function getIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    // Aqui setamos a div resultado através do id
    const resultado = document.querySelector('#resultado');
    // Deixa o html vazio
    resultado.innerHTML = '';
    // Cria um elemento paragrafo
    const p = criaP();

    // Verifica o isValid
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

