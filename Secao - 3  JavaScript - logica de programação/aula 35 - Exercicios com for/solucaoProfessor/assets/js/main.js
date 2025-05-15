// Solução Professor
const elementos = [
    {tag: 'p', texto: 'Qualquer texto aqui'},
    {tag: 'div', texto: 'div'},
    {tag: 'section', texto: 'section'},
    {tag: 'footer', texto: 'footer'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);

    // Usando o innerHtml;
    // tagCriada.innerHTML = texto;

    // Usanto o textContent
    // tagCriada.textContent = texto;

    // Usando o innerText
    // tagCriada.innerText = texto;

    // Criando um nó de texto
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
}

container.appendChild(div);