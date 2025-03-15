/**
            Exercicio
 
    Precisamos imprimir na tela o seguinte:

    Raiz quadrada: 
    Número é inteiro: 
    É NaN: 
    Arredondando para baixo: 
    Arredondando para cima:
    Com duas casas decimais:
*/

//Valor digitado pelo usuário, fazemos a conversão para number, pois o prompt sempre retorna uma string.
const numero = Number(prompt("Digite um número:"));

// Essas duas variáveis selecinam os elementos html, span e div pelo id.
// Para selecinar um elemento pelo ID usamos o método getElement, passando o ID ("numero-titulo")como parâmetro
const numeroTitulo = document.getElementById("numero-titulo");

// Pegamos também o id da div texto que foi criada
const texto = document.getElementById("texto");

//Calculo raiz quadrada
let raiz = numero ** (1/2);

// Agora iremos alterar o html desses elementos
// Começamos inserindo o número digitado no h1.
numeroTitulo.innerHTML = numero;


// Inserimos também o resultado em texto, na div texto
texto.innerHTML = `<p>Raiz quadrada: ${(numero ** (1/2)).toFixed(2)}</p>
                   <p>Raiz quadrada com duas casas decimais: ${raiz.toFixed(2)}</p>
                   <p>O número ${numero.toFixed(2)} é inteiro: ${Number.isInteger(numero)}</p>
                   <p>O número é um NaN: ${Number.isNaN(numero)}</p>
                   <p>Arredondando para baixo: ${Math.floor(numero)}</p>
                   <p>Arredondando para cima: ${Math.ceil(numero)}</p>
                   <p>Arredondado para o mais próximo: ${Math.round(numero)}
                   <p>Número com duas casas decimais: ${numero.toFixed(2)}`;
                   

// Podemos também exibir os resultados usando uma lisa não ordenada.
const subtituloLista = document.getElementById("subtituloLista")
const listaResultado = document.getElementById("listaResultado")

subtituloLista.innerHTML = "<h1>Resultado do exercicio usando lista.</h1>";

listaResultado.innerHTML = `<li>O número digitado foi: ${numero}</li>
                            <li>Raiz quadrada: ${numero ** (1/2)}</li>
                            <li>Raiz quadrada com duas casas decimais: ${raiz.toFixed(2)}</li>
                            <li>O número é inteiro: ${Number.isInteger(numero)}</li>
                            <li>O número é um NaN: ${Number.isNaN(numero)}</li>
                            <li>Arredondando para baixo: ${Math.floor(numero)}</li>
                            <li>Arredondando para cima: ${Math.ceil(numero)}</li>
                            <li>Arredondado para o mais liróximo: ${Math.round(numero)}
                            <li>Número com duas casas decimais: ${numero.toFixed(2)}`;

