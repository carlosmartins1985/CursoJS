# Modelo HTML e CSS para exercicios posteriores

Nesta aula criaremos um modelo em html e css para utilizar nos exercicíos posteriores.

Então nas próximas aulas não precisamos criar modelos novos, apenas copiamos esse modelo e o utilizamos.

Para isso;

* Criamos um arquivo html dentro da pasta modelo;

* Criamos uma pasta chamada assets, e dentro desta pasta teremos os assets, javascript, css, imagens, caso tenhamos.
  
  Qualquer arquivo mais estático ficará dentro desta pasta.

* Dentro da pasta assets criamos uma pasta chamada js, onde colocaremos todos os nossos scripts.js;

* Criamos uma pasta de css;

* E também uma pasta de imagem;

Apesar de não usarmos a pasta img, seguimos esta organização.

Antes das tecnologias que possuímos hoje, como react, angular, era assim que era feito a codificação.

* Criamos um script principal chamado main.js, como boa prática de programação criamos um script principal, e caso precisamos, podemos posteriormente criar vários scripts individuais para cada componente/página do nosso site;

* Dentro da pasta css criamos um arquivo css chamado style.css;

* Criamos a extrutura básica do html. 

* Linkamos o css;

* Linkamos o script;

\* ***<u>Para linkar os arquivos usamos o caminho relativo, pressionando ./</u>***

Testamos se os arquivos foram linkados;

* No css definimos a cor de fundo para red;

* E um alert(1) no script;

Agora no html criamos uma section, com uma class container;

Na verdade criamos uma extrutura básica;

```html
<body>
    <section class="container">
        <h1>Lorem ipsum dolor sit, amet</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae a suscipit facere, odio asperiores et
            fugiat sapiente vero velit voluptate animi? Omnis velit accusantium hic quos quam ipsa dolorum atque!</p>

        <form action="">
            <label for="input-teste-1">Label teste #1</label>
            <input type="text" id="input-teste-1">

            <label for="input-teste-2">Label teste #2</label>
            <input type="text" id="input-teste-2">

            <label for="input-teste-3">Label teste #3</label>
            <input type="text" id="input-teste-3">

            <label for="input-teste-4">Label teste #4</label>
            <input type="text" id="input-teste-4">
            <button>Enviar</button>
        </form>
    </section>
```

\* ***<u>Podemos criar o nosso própio layout css.</u>***

***<u>Estilizando o documento</u>***

Começamos colocando para todos os elementos;

* box-sizing: border-box;

* outline: 0;

Poderíamos aqui fazer também o reset css para todos os elementos.

```css
* {
    box-sizing: border-box;
    outline: none;
}
```

Mas optamos por utilizar o reset apenas no body;

```css
body {
    margin: 0;
    padding: 0;
}
```

Ainda dentro do body definimos uma cor de fundo e salvamos essa cor em uma variável para uso posterior;

* Então criamos uma variável global para conter a cor de fundo;

* Criamos a extrutura :root, e dentro das chaves o nome da variável e a cor correspondente;

* E nomeamos essa variável de primary-color;

* E por último adicionamos essa cor ao background-color, utilizando a função var();
- Pegamos uma fonte open-sans no google fonts, a regular 400 e a bold-700;

- Adicionamos essa fonte com um call back, caso ela não carregue, sans serif;

- Mudamos o tamanho da fonte para 1.3em;

- E a altura da linha para 1.5em;

```css
:root {
    --primary-color: rgb(17, 86, 102); 
    --primary-color-darker: rgb(9, 48, 56); 
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--primary-color);
    font-family: 'Open sans', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
}
```

***<u>container</u>***

A seguir as propriedades do container;

```css
.container {
    max-width: 640px; /* Tamanho máximo */
    margin: 50px auto; /* Alinha o container no meio da tela, e adiciona uma margem de 50px top e botton.*/
    background-color: #fff; /* Cor de fundo do container*/
    padding: 20px; /* Espaçamento interno*/
    border-radius: 10px;
}
```

***<u>form</u>***

* Estilizamos todos os elementos em uma única linha, a propriedade de alinhamento dos elementos;

```css
form input, form label, form button {
    display: block;
    width: 100%;
    margin-botton: 10px;
}
```

***<u>inputs</u>***

```css
form input {
    font-size: 24px;
    height: 50px;
    padding: 0 20px;
}

/*Efeito na borda do input, deixando a borda com a cor de fundo ao clicar no input.*/
form input:focus{
    outline: 1px solid var(--primary-color);
}
```

***<u>button</u>***

```css
form button {
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
}

form button:hover {
    background-color: var(--primary-color-darker);
}
```
