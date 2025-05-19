# Exercícios com for

Faremos um exercicio com for.

Temos um array de objetos;

```js
const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'footer', texto: 'Frase 03'},
    {tag: 'section', texto: 'Frase 04'},
]
```

Precisamos criar um elemento container que irá receber todos esses elementos.

Precisamos imbutir todos esses elementos dentro desse container maior.

Devemos criar uma div que irá conter esses elementos, e fazer com que o js crie todos eles dentro dessa div.

E essa foi uma solução;

```js
const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'footer', texto: 'Frase 03'},
    {tag: 'section', texto: 'Frase 04'},
    {tag: 'h1', texto: 'Frase 05'}
]

const resultado = document.querySelector('.resultado');

for (let i = 0; i < elementos.length; i++) {
    const elemento = document.createElement(`${elementos[i].tag}`);;
    elemento.textContent = `${elementos[i].texto}`;
    resultado.appendChild(elemento);
}
```

## <u>Solução professor</u>

* Uma dica, sempre testar com um alert se o js está funcionando.

* Sempre deixar o console aberto no navegador para ver se aparece algum erro no JS.

Criamos o array de elementos;

```js
const elementos = [
    {tag: 'p', texto: 'Qualquer texto aqui'},
    {tag: 'div', texto: 'div'},
    {tag: 'section', texto: 'section'},
    {tag: 'footer', texto: 'footer'},
]
```

Testando no node, temos o array com vários elementos;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 35 - Exercicios com for/solucaoProfessor/assets/js/main.js"
[
  { tag: 'p', texto: 'Qualquer texto aqui' },
  { tag: 'div', texto: 'div' },
  { tag: 'section', texto: 'section' },
  { tag: 'footer', texto: 'footer' }
]

[Done] exited with code=0 in 2.629 seconds
```

Para adicionar os elementos usaremos o appendChild.

Para isso precisamos selecionar o elemento container, do doc html.

Precisamos adicionar o container, pois o appendChild sempre adiciona o elemento no final do container. 

Então usamos o querySelector para selecionar o container do html;

```js
const container = document.querySelector('.container');
```

Quando selecionamos a partir de classes com o querySelector, ele pegará a primeira classe encontrada no objeto.

Então criamos uma div, que irá receber os elementos, e essa div será adicionada ao container.

Iteramos com o laço for sobre os elementos do array;

```js
for(let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}
```

Assim conseguimos pegar o que está dentro do array elementos.

Poderíamos fazer usando a notação de ponto, por exemplo;

```js
console.log(elementos[i].tag);
```

O que nos retornaria os elementos html, p, div, section, footer, porém assim fica muito verboso.

Podemos então usar a atribuição por desestruturação.

```js
for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
}
```

Assim temos o mesmo resultado.

Fizemos a associação via desestruturação.

Então criamos em variável que irá criar esses elementos;

```js
for(let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
}
```

Agora precisamos colocar o texto dentro dos elementos que foram criados;

Para isso temos algumas formas de se fazer isso.

* Podemos usar o innerHTML;

```js
tagCriada.innerHTML = texto;
```

Essa tag adicionamos a div que foi criada no escopo global;

```js
div.appendChild(tagCriada);
```

E essa div adicionamos ao container;

```js
container.appendChild(div);
```

Código completo;

```js
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
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
```

Também podemos criar um nó de textos;

```js
let textoCriado = document.createTextNode(texto);
```

Assim criamos um nó de texto.

Então devemos adicionar isso a tagCriada, usando o appendChild;

```js
tagCriada.appendChild(textoCriado);
```

Código final

```js
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
```

## Minha solução

```js
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
```

Na minha solução usei o textContent direto na tagCriada para inserir o texto.
