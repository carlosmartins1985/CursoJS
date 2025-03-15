# Exercício aula 15 - Math/Numbers

Neste exercício iremos apresentar algumas funções que podemos utilizar com numbers.

Faremos alguns exercícios sobre numbers e o objeto math, e esta aula é importante pois começaremos a trabalhar um pouco mais próximo do mundo real, trabalharemos de forma mais similar ao que veríamos no mundo real atualmente.

O exercício consiste em pedir ao usuário que digite um número, e que seja apresentado algumas informações sobre ele.

Tais como: 

* Seu número é: tal número - O titúlo deve estar em um h1;

* Raiz quadrada;

* Se é inteiro;

* É NaN:

* Arredondando para baixo;

* Arredondando para cima;

* Com duas casas decimais;

Algumas coisas iremos mudar, por exemplo, anteriormente estávamos usando o console desta maneira;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2019-49-37.png)

Desta forma mudamos o body inteiro da página, pois adicionamos o elemento em um lugar aleatório na página, o que não é muito comum de se fazer, a partir de agora iremos mudar elementos especificos na página.

*Criamos o html e o js, e a extrutura básica.*

Em um mundo real, numa página real, teríamos algo similar a isso.

Por exemplo;

* Uma section, uma tag envolvendo o elemento;
  
  ```js
      <section>
          //  Aqui temos a frase, então adicionamos o span que irá receber a vari
          <h1>O seu número é</h1>
      </section>
  ```
  
  Teríamos um h1 dentro de uma section, que seria uma extrutura básica.
  
  Dentro do h1 colocaríamos a frase, e então precisamos marcar de algum jeito pra que possamos selecionar essa parte do texto com javascript, e depois alterar este número.
  
  Para fazer isso podemos utilizar qualquer tag html, neste exemplo utilizaremos uma tag spam, então adicionamos o span e damos um id para o span;
  
  ```js
      <section>
          <h1>O seu número é <span id="numero-titulo">0</span></h1>
      </section>
  ```
  
  Então temos o span com o id, podemos deixar um placeholder com o número 0 para ficar melhor.
  
  Aqui marcamos o elemento, onde podemos seleciona-lo facilmente no javascript.

* Criamos uma div para conter o texto, esse texto é o resultado do código js, com um id com esse nome;
  
  ```js
      <section>
          <h1>O seu número é <span id="numero-titulo"></span></h1>
          <div id="texto"></div>
      </section>
  ```

Agora temos dois elementos que podemos selecionar pelo javascript, que é o span e a div.

Podemos então incluir coisas dentro desses elementos.

* Linkamos o javascript, e testamos criando o prompt que pede para o usuário digitar um número;

O próximo passo é selecionar os elementos html, span e div.

Lembramos que no javascript temos o window, e dentro temos o document.

Quando estamos trabalhando no document estamos manipulando o DOM, o <mark>document object model</mark>, para acessa-lo podemos eliminar o window, e utilizar apenas o document;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2020-17-07.png)

E podemos utilizar o document para selecionar os elementos que precisar-mos, por exemplo, podemos selecionar o elemento por id da seguinte forma;

Aqui queremos selecionar um elemento pelo seu id,

* Dentro dos parênteses colocamos uma string, um texto, colocando o id que queremos selecionar, no caso o id será numero-titulo;

* Então entre aspas simples colocamos numero-titulo;

```js
// Isso se trata de um método, por isso precisamos dos parênteses e ;.
document.getElementById('numero-titulo');
```

Então neste momento estamos selecionando este elemento, e podemos fazer qualquer coisa a partir do local onde salvamos esse elemento.

* Para salvar criamos uma variável chamada numeroTitulo, e salvamos esse getId nesta variável;

```js
const numeroTitulo = document.getElementById('numero-titulo');
```

<mark>O que pedimos é que o document selecione o elemento pelo id e o salve na variável;</mark>

E a partir deste momento a variável numeroTitulo significa o elemento span.

Podemos fazer um teste no navegador onde no console, se digitar-mos numeroTitulo, ele seleciona o elemento span na página;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2020-29-23.png)

E se dermos um enter temos exatamente a tag selecionada;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2020-30-58.png)

E agora podemos manipular esse elemento. 

Faremos a mesma coisa com o texto na div, e adicionamos um place-holder que deverá ser eliminado posteriormente.

* Criamos a variável que irá conter o get da div texto, mudando o nome da variável e colocando o id que precisamos selecionar;
  
  ```js
  const texto = document.getElementById('texto');
  ```

Anteriormente utilizamos o innerHTML para alterar o html do body todo, agora iremos utilizar o getId para alterar o html desses elementos especificos;

Então no numeroTitulo iremos colocar o numero digitado pelo usuário, da seguinte forma;

```js
numeroTitulo.innerHTML = numero;
```

E a partir de agora, o número digitado pelo usuário será colocado dentro da tag span, alterando apenas o seu html.

Faremos o mesmo para o texto, porém como precisaremos fazer as contas, inserimos as templates strings para receber os calculos e os textos;

```js
texto.innerHTML = `<p>O seu número - 2 é ${numero - 2}</p>`;
```

E dentro das crases colocamos os parágrafos html para conter os textos.

E digitamos as frases que queremos exibir seguida da interpolação para pegar o numero e fazer as alterações nele;

Nos deparamos com um problema, pois como sabemos o prompt retorna uma string, então para resolver precisamos converter o número digitado em Number da seguinte forma;

```js
const numero = Number(prompt('Digite um número:'));
```

Alteramos a constante para converter direto o numero para Number.

Então, o que está vindo do prompt vai retornar para a função Number, que irá retornar para a constante numero o número já convertido.

Agora podemos concluir o exercício adiconando as seguintes linhas e as respectivas respostas;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2021-08-30.png)

### Solução:

```js
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>` +
                  `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>` +
                  `<p>É NaN: ${Number.isNaN(numero)}</p>` +
                  `<p>Arredondando para baixo: ${Math.floor(numero)}</p>` + 
                  `<p>Arredondando para cima: ${Math.ceil(numero)}</p>` + 
                  `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
```

### Solução professor:

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-03-11%2021-28-32.png)

Podemos limpar o placeholder do html apenas adicionando um innerHTML vazio antes de começar-mos a execução dos códigos;

<mark>Se não digitar-mos nada, na converção ele irá converter este vazio para 0.</mark>

***<u>Sobre as soluções;</u>***

A principal diferença é que na segunda solução, a string HTML é construída adicionando cada nova linha diretamente à propriedade `innerHTML` em passos separados usando o operador `+=`.

Em termos de desempenho, a segunda solução pode ser ligeiramente mais eficiente em alguns casos, pois evita a concatenação de strings em uma única linha. No entanto, a diferença de desempenho pode ser insignificante em muitos casos, e a escolha entre as duas depende frequentemente da preferência pessoal ou do estilo de codificação adotado pela equipe.

Em geral, a segunda solução com o uso do operador `+=` é mais legível e pode ser mais fácil de manter, especialmente se você precisar adicionar ou remover linhas de código. Portanto, ela é frequentemente considerada mais indicada para uso em situações onde a clareza e a manutenção do código são prioridades.
