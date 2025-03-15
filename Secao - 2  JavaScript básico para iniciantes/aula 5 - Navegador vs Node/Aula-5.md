# Aula 5 - Navegador vs Node

Vimos que podemos utilizar o coderunner para executar o arquivo js direto no terminal do vs code, apenas clicando no play.

Podemos também usar o comando no terminal para executar o arquivo js.

```js
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula5/index.js"
Olá
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ 
```

Através do node podemos executar o código js tanto no terminal quanto na saída no vscode.

Podemos usar os comandos de navegação para acessar os arquivos e pastas dentro do bash do linux.

Copiamos todo o comando, e  colamos no bash do linux.

Por exemplo, podemos executar o arquivo direto do ambiente global através do seguinte comando;

```js
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ node aula5/index.js
Olá
carlos@carlos:~/CursoJS/Seção 2 - JavaScript básico para iniciantes$ 
```

Dizendo o nome da pasta e o nome do arquivo.

Desde o inicio do curso estamos utilizando o node.js para executar os arquivos js.

Agora iremos mesclar javascript com html, e veremos como colocar o js dentro do html, e veremos, com boas praticas de programação, como separar o arquivo js do arquivo html.

Para isso;

- Criamos um arquivo html dentro da pasta aula 5;

- Criamos a extrutura do html5, e prosseguimos.

Uma das maneiras de integrar o js na página é através da tag script, podemos inserir a tag script tanto dentro do head quanto dentro do body.

- ***<u>Javascript dentro do head;</u>***

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
    <script>
        // Cometário
        console.log("Olá mundo");
    </script>
</head>
<body>

</body>
</html>
```

- Essa maneira no entanto não é uma boa prática de programação, colocar o js dentro do head, mesmo que algumas bibliotecas sugiram colocar o js aqui dentro.
  
  Em vários casos o js pode retardar o carregamento da página, pois quando o navegador executar a página tentará executar primeiro os scripts dentro da página, isso poderá fazer com que o usuário fique esperando tempo demais com uma página em branco.

- Como uma boa prática de programação, é recomendável utilizar o javascript no final da tag body;

```js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
</head>
<body>

    <script>
        // Cometário
        console.log("Olá mundo");
    </script>
</body>
</html>
```

- Agora podemos abrir esse arquivo no google chrome, para isso podemos clicar com botão direito na pasta da aula5 e selecionar

```
Open Containing Folder
```

*Isso para acessar a pasta onde está o arquivo.*

- Abrir o index.html no chrome;

- A unica coisa que vemos é o titulo do documento;

- Pressionando ctrl + u podemos ver o código fonte da página;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2009-42-32.png?msec=1709079785652)

- O código js só é exibido no console do navegador, ou no terminal de saída do vscode, não será exibido na página, através do inspecionar e console.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-19-00.png?msec=1709079785571)

- Criamos mais um trecho que será exibido no console do navegador;

```js
    <script>
        // Cometário
        console.log("Olá mundo");
        console.log("Esse trecho será exibido no console do navegador.");
    </script>
```

***<u>Resultado no console do navegador</u>***

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-22-28.png?msec=1709079785564)

Aqui podemos ver que isso ficará extremamente longo e confuso se deixar-mos o html junto com js, no mesmo arquivo.

É interessante sempre que trablhar-mos com html e js separar os arquivos.

Então para ficar mais organizado e fácil de se trabalhar, separamos os arquivos, js e html, como se fosse um arquivo css, linkando esse js no doc html da mesma forma que fazemos com um arquivo css separado.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha primeira página html</title>
</head>
<body>

    <script src="index.js"></script>
</body>
</html>
```

Dessa forma temos o html e javascript separados em dois arquivos, dizendo para o navegador buscar dentro deste arquivo os scripts necessários para se carregar a página.

Pressionando ctrl + u não teremos mais o scritp dentro do doc html, mas uma tag indicando que existe um arquivo js que está carregando os scripts da página;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-31-05.png?msec=1709079785565)

Quando falamos em front-end estamos falando de uma página que é carregada e renderizada no lado cliente, ou seja, no computador de quem acessou seu site, o que é neste caso, estamos trabalhando na parte frontal do site.

Uma coisa que precisamos entender é que apesar de o google chrome e o node estarem usando o motor do javascript juntos, eles não tem o mesmo comportamento entre si.

Tetamos inserindo um alert(), com o texto olá mundo no console do chrome, e o resultado é uma janela que aparece no navegador quando atualizamos a página;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-37-03.png?msec=1709079785653)

Esse alert() cria uma janela que segura a página até que o usuário clique no "OK".

Porém esse alert() não existe quando estamos no terminal de saída do vscode, esse elemento não existe.

Mostrando inclusive um erro ao executar o js com alert inserido;

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-43-47.png?msec=1709079785739)

Ou seja, ele não sabe exsecutar a função de alerta pois ela não está definida.

Porém no navegador o alerta será exibido normalmente, pois trata-se de uma função reconhecida no navegador.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-47-43.png?msec=1709079785656)

Isso nos indica que são dois ambientes, um do node.js e outro do navegador que normalmente **não tem as mesmas coisas**.

Por isso, geralmente quando iremos trabalhar no navegador iremos manipular o DOM, que é o documento html.

Então, quando iremos manipular tags, como divs, botões clicaveis, formulários, estaremos trabalhando no front-end, dentro do navegador.

Já quando formos trabalhar com base de dados, com rotas iremos trabalhar no back-end, e assim trabalharemos no node.js.

E essa é a separação entre os dois, front para manipular o DOM e back manipulando com o node.

Podemos fazer a separação dos arquivos js e html de uma maneira ainda mais profissional criando um pasta js que conterá todos os scripts que serão usados na página, deixando uma extrutura ainda mais organizada.

![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-18%2011-57-50.png?msec=1709079785566)

Mudamos o caminho de referência do arquivo js também.

```js
<script src="./js/index.js"></script>
```

E dessa forma unimos js com html para escrever-mos os scripts.
