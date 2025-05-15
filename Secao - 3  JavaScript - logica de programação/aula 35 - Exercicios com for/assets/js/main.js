// Minha solução
const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'footer', texto: 'Frase 03'},
    {tag: 'section', texto: 'Frase 04'},
    {tag: 'h1', texto: 'Frase 05'}
]

const container = document.querySelector('.container');
const div = document.createElement('div'); //Ajuste professor

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];

    const tagCriada = document.createElement(tag);

    tagCriada.textContent = texto;
    
    div.appendChild(tagCriada);
}
container.appendChild(div);




