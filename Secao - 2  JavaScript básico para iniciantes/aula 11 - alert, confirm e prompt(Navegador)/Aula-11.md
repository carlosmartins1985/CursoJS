## Aula 11 - alert, confirm e prompt(Navegador)

Nesta aula iremos ver três funções que irão nos ajudar a fazer os exercicios e também no dia-dia do desenvolvimento, para deixar as coisas mais dinâmicas e não ficar-mos apenas na tela do node.js.

Precisamos criar o hábito de ir para o navegador.

Para isso poderíamos simplesmente abrir o navegador, inspecionar e console, e começar a digitar o código aí, inclusive faremos isso em alguns momentos, mas para criar o hábito de criar um doc html e já linkar o js a ele iremos desde agora tentar criar esse hábito.

- Então criamos um doc html e js.

- Dica de nunca usar palavras com acentos ou caracteres especiais na criação dos arquivos, para não ter problemas de caminho posteriormente.

- Mais a frente iremos separarar os arquivos por categorias.

- Também criamos uma pasta separada para o JavaScript e dentro desta pasta criamos um arquivo index.js;

- Muitas vezes poderemos ver um arquivo generico chamado script.js, similar ao style.css, assim renomeamos o arquivo anterior para script.js

- No doc html linkamos o script;

- Feito isso podemos começar a digirar alguns scripts no arquivo script.js;

- Começamos com um comando básico que é o alert().

- Abrimos o arquivo html no navegador;

- A caixa de alerta que se abre apesar de não ser uma coisa muito bonita, é uma parte do navegador, pois isso não temos no node.js, por isso precisamos trabalhar no navegador.

- Se executar-mos a função alert() no node, teremos como retorno um erro;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-16-46.png?msec=1709082727525)

Por isso não executamos essa função dentro do node.js

No navegador temos um elemento central, que é um elemento como se fosse o pai de todos os elementos, que é o objeto window, que se refere a janela do navegador propriamente dita.

E dentro desse objeto window possuímos essas funções que só funcionam na janela do navegador, ou seja, nesse objeto window.

Como por exemplo o alert(), que nos exibe a mensagem, trata-se de uma função que está dentro do objeto window;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-23-18.png?msec=1709082727524)

Da mesma forma que podemos utilizar o console.log() para exibir alguma coisa no console, onde estamos chamando essae método que está dentro do objeto console.

Pois quando usamos o alert(), na verdade é um atalho para uma função/método que está dentro do objeto window;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-27-48.png?msec=1709082727526)

Se digitar-mos window no console e pressionar-mos enter teremos o objeto window, e abrindo ele teremos todos seus métodos disponíveis;![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2013-29-47.png?msec=1709082727577)

Tudo que está aqui dentro está relacionado com o objeto window, ou seja, a janela do navegador.

Temos por exemplo, dentro desse objeto o document (que é o documento que está aberto na página) e dentro deste temos o body, que se trata do corpo html desse documento, onde teremos as divs, h1's, tags e etc.

Podemos ter a percepção de que esse obejto é gigantesco e iremos trabalhar muito com ele, quando formos manipular os elementos da página.

Porém neste momento é importante entender que o alert() é um atalho para window.alert(), assim como console.log().

Outras funções similares ao alert() são;

- confirm => Que serve para confirmar coisas com o usuário, por exemplo, o usuário for deletar algo, podemos perguntar ao usuário com essa função se ele realmente deseja apagar tal conteúdo;

- Isso abrirá uma janela com dois botões, um para cancelar a operação e outro para confirmar.

```js
confirm('Deseja apagar a lista?');
```

Essa função irá mostrar uma janela, onde poderemos confirmar a operação, e assim retornará um valor booleano true para a exclusão e para a função, ou cancelar, que irá cancelar a operação e retornará um booleano false para a função.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-01-01.png?msec=1709082727527)

Quando trabalhar-mos com condicionais usaremos muito os booleanos para desviar o fluxo do programa.

- prompt => Outra janela que podemos utilizar, trata-se de uma janela onde pedimos para o usuário digitar algo para nós.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-05-07.png?msec=1709082727527)

Ela abre uma janela com um campo de inserção, para que possamos digitar algo e em seguida recupera essa string, ou seja, essa mensagem é retornada no console.

<u>***\* Quando uma função está dentro do objeto a chamamos de método, e quando está fora do objeto chamamos de função.***</u>

Então sobre essas três funções;

- alert() => faz um alerta, e podemos abreviar, chamando direto alert('Mensagem para o usuário.');
  
  Uma curiosidade é quanto ao retorno dessa função, que retorna undefined, isso quer dizer que o que foi retornado pela função não aponta para local nenhum na memória.

Então temos que sempre que utilizamos funções em javascript ela pode ou não retornar algum valor, ou seja, pode, ou não retonar algum valor.

No caso do alert() não temos nenhum valor de retorno, ou seja, sempre o que retornar de alert() será undefined.

Por outro lado, a confirm já nos retorna alguma coisa, por exemplo, se clicar-mos em cancelar ela retornará false, se clicarmos em ok retornará true.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-25%2017-17-20.png?msec=1709082727528)

Ou seja, a função confirm pode nos retornar dois valores, true ou false.

Nas funções que tem retorno, podemos capturar esse retorno, para isso;

- Podemos criar uma variável que ira pegar esse retorno;
  
  ```js
  const confirma = confirm('Deseja realmente cancelar?');
  ```

Colocamos um texto, que nada tem haver com o que será retornado pela função, o texto é simplismente o que será exibido na caixa de texto.

O que será retornado estará relacionado com o que o usuário clicar nos botões.

E como estamos jogando isso em uma variável, o retorno dessa função estará nesta variável.

Executando o código ele retorna undefined, que não quer dizer que o retorno foi undefined, mas que capturamos o valor para a variável, ou seja , essa variável agora está salva na memória com o valor que o usuário pressionou.

- Se o usuário pressionou ok, a variável retorna true;

- Se o usuário pressionou cancelar, a variável retorna false;

Podemos ver o valor dessa variável apenas digitando o nome dela no console.

No console do navegador não precisamos digitar console.log para exibir o retorno de uma variável, apenas digitamos o nome dela e o navegador faz o resto para nós.

Podemos também utilizar o let para a variável.

Podemos também salvar outras coisas nas variáveis, como por exemplo números.

Podemos pedir para o usuário digitar números, e através das variáveis guarda-los na memória e posteriormente manipula-los como necessário.

```js
const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
```

Poderíamos tentar fazer a soma desses números assim;

```js
num1 + num2;
```

Mas acaba não dando certo pois ele concatena os resultados.

Pois ele está trabalhando os resultados como texto.

Se digitar-mos typeof para os nums, eles retornarão texto.

Isso significa que o js está trabalhando de forma correta, pois o retorno do prompt para o usuário sempre será uma string.

Então podemos converter essas variáveis em type number, com o seguinte código;

```js
num1 = parseInt(num1);
```

Assim convertemos a string em números para poder trabalhar com calculos etc

Digitando typeof em num1 ele deverá retornar number.

Posteriormente realizamos a mesma operação com o num2;

```js
num1 = Number(num1);
```

Aqui podemos usar a função number para a conversão.

E assim conseguimos fazer as operações com essas variáveis.
