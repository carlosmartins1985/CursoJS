/**
    Calculadora de IMC

    * Receber o peso e altura do usuário;
    * Validar number;
    * Calcular o IMC do usuário;
    * Exibir o resultado logo abaixo do botão calcular
 */
    function meuEscopo() {
        const form = document.querySelector('form');
    
    
        function recebeEventoForm(e) {
            e.preventDefault();
    
            const inputPeso = e.target.querySelector('#peso');
            const inputAltura = e.target.querySelector('#altura');
    
            const peso = Number(inputPeso.value);
            const altura = Number(inputAltura.value);
    
            if (!peso) {
                setResultado('Peso invalido', false);
                return;
            }
    
            if (!altura) {
                setResultado('Altura invalida', false);
                return;
            }
    
            const imc = getIMC(peso, altura);
            const nivelImc = getNivelImc(imc);
            const msg = `O seu imc é: ${imc} (${nivelImc}).`
    
            setResultado(msg, true);
        }
        form.addEventListener('submit', recebeEventoForm);
    
        function getIMC(peso, altura) {
            const imc = peso / (altura * altura);
            return imc.toFixed(2);
        }
    
        function getNivelImc(imc) {
            const nivel = ['Abaixo do peso', 'Peso normal',
            'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
            'Obesidade grau 3'];
    
            if (imc >= 39.9) return nivel[5];
            if (imc >= 34.9) return nivel[4];
            if (imc >= 29.9) return nivel[3];
            if (imc >= 24.9) return nivel[2];
            if (imc >= 18.5) return nivel[1];
            if (imc < 18.5) return nivel[0];
        }
    
        function criaP() {
            const p = document.createElement('p');
            return p;
        }
    
        function setResultado(msg, isValid) {
            const resultado = document.querySelector('.resultado');
    
            resultado.innerHTML = '';
    
            const p = criaP();
    
            if (isValid) {
                p.classList.add('resultadoOk');
            } else {
                p.classList.add('erro');
            }
    
            p.innerHTML = msg;
            resultado.appendChild(p);
        }
    
    }
    meuEscopo();
    
    