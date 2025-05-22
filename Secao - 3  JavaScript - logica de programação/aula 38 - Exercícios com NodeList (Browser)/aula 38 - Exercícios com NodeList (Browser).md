# Aula 38 - Exercícios com NodeList (Browser)

* Criamos uma div, para entender-mos melhor o conceito;

* Dentro dessa div criamos 4 parágrafos;

```html
<div class="paragrafos">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Velit quidem provident, inventore at magnam fugiat. Atque, ea!</p>
            <p>Quos ipsa modi, odio est, autem, harum itaque aperiam.</p>
            <p>distinctio aspernatur error laudantium?</p>            
</div>
```

* Selecionamos a div paragrafo no js;

```js
const paragrafos = document.querySelector('.paragrafo');
```

Agora precisamos selcionar, de dentro da div, os parágrafos, que estão dentro dela.

Sabemos que o querySelector retorna apenas um elemento, o primeiro que ele encontra.

Neste caso temos apenas uma div com a classe parágrafos, então ela nos é retornada.

Mas teremos alguns casos onde será necessário selecionar uma coleção de elementos.

Testando no browser, notamos que temos os 4 parágrafos, porém, se selecionarmos com o querySelector, estaremos selecionando apenas o primeiro parágrafo.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-20%2021-14-29.png)

Podemos usar o querySelectorAll para selecionar todos os parágrafos de uma vez;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-20%2021-16-40.png)

E nos é retornado uma nodeList.

Isso não é uma array, se comporta como um, mas é um recurso nativo do DOM.

Porém como ele se comporta como se fosse um array, podemos utilizar as funções que utilizamos nos arrays.

Usamos uma variável para selecinar os paragrafos dentro da div;

```js
const paragrafos = document.querySelector('.paragrafo');
const ps = paragrafos.querySelectorAll('p');
```

Podemos agora usar as funções direto nessa variável;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-20%2021-22-18.png)

Por exemplo, colocando ps[0], temos o conteúdo do parágrafo 1, e assim por diante.

Usando o ps.length temos o tamanho do array.

Podemos iterar em todos eles usando o for of;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-20%2021-25-24.png)

E temos os paragrafos retornados no console.



Agora devemos pegar o fundo do background e colocar no fundo do nosso parágrafo.

Então precisamos pegar os estilos computados do body, que o css pegou;

Para isso usamos a função getComputedStyle, que é uma função do navegador, passando como parâmetro de qual elemento queremos pegar o estilo, neste caso, do própio body.

```js
const estilosBody = getComputedStyle(document.body);
```

Então agora nessa variável estilos temos tudo que foi computado no body.

Criamos outra variável que irá receber o estilo do background do body.

```js
const backgroundColorBody = estilosBody.backgroundColor;
```

Fazendo um log nessa variável temos o rgb da cor;

```bash
rgb(17, 86, 102)
```

Então agora precisamos jogar essa cor no fundo do parágrafo.



Então precisamos;

* Colocar a cor de fundo do parágrafo na cor de fundo do background;

* E como bônus, colocar a cor do texto dos parágrafos em branco;



## Minha solução

```js
const paragrafos = document.querySelector('.paragrafo');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

const textColor = '#fff';

console.log(backgroundColorBody);


for (p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = textColor;
}
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-22%2020-32-38.png)



## Solução professor

Para a cor de fundo do parágrafo foi a mesma lógica, usando o `p.style.backgroundColor = backgroundColorBody;`

E para a cor do texto também foi usada a mesma lógica, então a solução do professor foi a mesma.



* <mark>Como não podemos por traços no js, o css foi convertido em camelCase.</mark>



E se olhar-mos no console do navegador, em elementos, iremos notar que foi adicionada a tag style ao parágrafo;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-05-22%2020-38-42.png)

Juntamente com os parâmetros para as cores.

E notamos que todos os parágrafos foram estilizados ao mesmo tempo.
