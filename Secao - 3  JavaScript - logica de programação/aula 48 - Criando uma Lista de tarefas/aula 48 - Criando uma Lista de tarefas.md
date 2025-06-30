# Aula 48 - Criando uma Lista de tarefas

    Seria um exercício, porém como tem muito conteúdo novo, será uma aula normal.

    Nessa aula criaremos uma lista de tarefas, onde será possível;

* Adicionar uma tarefa;

* Excluir uma tarefa;

* Mesmo depois do navegador fechado, ao abrir novamente, as tarefas continuarão lá.

    Alteramos o index.html para conter os elementos necessários;

```html
    <section class="container">
        <h1>Lista de tarefas</h1>
        <p>
            <input type="text" class="input-nova-tarefa">
            <button class="btn-add-tarefa">Adicionar tarefa</button>
        </p>

        <ul class="tarefas"></ul>
    </section>
```

<mark>Deixando sempre o console aberto, para verificar possíveis erros.</mark>

    A principio precisamos selecinar os elementos no js;

* Selecionamos o input;

```js
const inputTarefa = document.querySelector('.input-tarefa');
```

   <mark> Usamos camelCase para a criação das variáveis.</mark>

```js
const inputTarefa = document.querySelector('.input-tarefa');
const btnTtarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.input-tarefa');
```

    Agora precisamos capturar o evento de clique do botão adicionar tarefa.

```js
// Neste momento não precisamos do evento (e).
tarefas.addEventListener('clique', function() {

})
```

    É obrigatório como segundo parâmetro ao pegar evento de clique, ter uma função anônima, que irá executar o comando quando o botão for clicado.

```js
btnTtarefa.addEventListener('click', function() {
    console.log(inputTarefa.value);
})
```

Usamos o console log para testar se está funcinando.

    Adicionamos uma verificação caso nada seja digitado;

```js
btnTtarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return;
    // Chama a funç
    criaTarefa(inputTarefa.value);
    console.log(inputTarefa.value);
})
```

    Assim se nada for digitado, nada acontece, mas se algo for digitado, aparecerá no console.

    Agora criaremos funções, sabendo que sempre devemos ter em mente de não sobrecarregar funções com várias tarefas, sempre ter funções para tarefas especifícas.

    Distribuir os serviços que precisam ser feitos na página para outras funções.

    Iniciamos criando uma função que irá criar a tarefa;

```js
criaTarefa(inputTarefa.value);
```

* A função recebe um texto;

```js
function criaTarefa(textoInput){
    console.log(textoInput);
}
```

    Aqui pegamos o evento de clique do mouse, com a função, ao clicar, ele pega o valor digitado no input, e passa esse texto como parâmetro da função criaTarefa, que por sua vez, irá pegar esse texto e apenas exibi-lo;

    Agora precisamos pegar essa tarefa e adicinar a lista, li;

```js
function criaLi() {
    const li = document.createElement('li');
    return li;
}
```

    E usamos essa função dentro da função cria tarefa;

```js
function criaTarefa(textoInput){
    const li = criaLi();
}
```

    No li, dentro da função criaTarefa, passamos através do innerText, o valor que virá como parâmetro textoInput;

```js
li.innerText = textoInput;
```

    E depois adicinamos esse li com appendChild, a const tarefas, e será exibido no navegador;

```js
tarefas.appendChild(li);
```

    Queremos que quando for pressionado enter, a tarefa seja adicionada, para isso pegamos o evento de pressionar a tecla, que pode ser vários, por exemplo;

* keyup = Que é quando a tecla é pressionada e solta;

* keydown = Quando a tecla e pressionada e segura pressionando;

* keypress = Quando a tecla é apenas pressionada.

    Pegamos esse evento, de quando pressionar alguma tecla;

```js
inputTarefa.addEventListener('keypress', function(e) {
    console.log(e);
})
```

    Assim conseguimos saber qual tecla foi pressionada, e também nos é retornado algumas coisas no navegador.

    Se pressionamos a tecla enter teremos esse retorno;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-23%2020-35-36.png)

    Assim podemos pegar pelo keyCode da tecla para conseguir pegar se a tecla digitada foi enter;

    <mark>Cada tecla terá um keyCode especifico.</mark>

    Testamos passando um alert quando enter for pressionado;

```js
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        alert('Enter');
        //criaTarefa(inputTarefa.value);
    }
})
```

    Agora só precisamos passar a função criaTarefa dentro desse evento, e a tarefa será criada assim que a tecla enter for pressionada.

    Apenas checando se o input não está vazio também.

```js
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        // alert('Enter')
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})
```

    Isso feito, agora iremos limpar o input e colocar o ponteiro no inicio do input sempre que uma tarefa for criada.

    Criamos uma nova função para executar essa tarefa.

```js
function limpaInput () {
    inputTarefa.value = '';
}
```

    E temos o evento de focus, que é quando clicamos no input, e começa a piscar, no inicio no input, porém aqui iremos mandar como se fosse um focus mesmo, como se estivessemos clicando no input;

    Ele repoẽ o cursor no inicio do input.

```js
function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}
```

    E colocamos essa função no final da função criaTarefa;

```js
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}
```

    Assim quando terminanos de criar a tarefa, executamos essa função.

    Não precisamos mais sair do input para criar novas tarefas.

    Agora criaremos os botões que irão apagar as tarefas quando necessário.

    Então criamos esse botão com uma função;

```js
function criaBotaoApagar(li) {
    // Aqui colocamos um espaço entre o botão e o li.
    li.innerText = ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}
```

        Mas se clicamos no botão nada acontece, então precisamos adicionar uma classe a esse botão.

    Poderíamos usar o classList para adiconar;

```js
function criaBotaoApagar(li) {
    // Aqui colocamos um espaço entre o botão e o li.
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('apagar')
    li.appendChild(botaoApagar);
}
```

    Ou podemos também usar o setAtribute, que irá funcionar para qualquer atributo. 

    Adicionamos também um atributo com title;

```js
botaoApagar.setAttribute('title', 'Apagar essa tarefa');
```



    Agora precisamos fazer com que esse botão funcione, e realmente apague a tarefa em questão.

    Para isso precisamo pegar o clique no botão apagar, então criamos um eventListener para essa tarefa;

```js
document.addEventListener('click', function () {
      const el = e.target;
      console.log(el);
})
```

    Usamos a função anônima pois precisamos saber onde estão sendo clicado no documento;

     Criamos uma variável chamada el, que será o e.target, ou seja, o elemento que foi clicado;

    Passando o (e), como argumento.

    Então se clicamos em apagar, mostrará que o botão apagar foi clicado.

    Criamos um if para pegar esse botão, caso seja o botão apagar que foi clicado, teremos um retorno no log;

```js
document.addEventListener('click', function(e) {
  const el = e.target;
    if(el.classList.contains('apagar')) {
        console.log('Botão apagar clicado.'); 
    }
})
```

    E a partir de agora, se clicarmos em qualquer outro lugar na tela nada será exibido.

    Então agora precisamos que quando o apagar for clicado, seja apagado o pai dele, ou seja, o (li), a que esse botão apagar pertence, deve ser apagado.

    Então a partir do botão, precisamos selecionar o pai dele.

    Colocando o comando el.parentElement, dentro do log conseguimos ver quem é o pai desse botão apagar;

```js
document.addEventListener('click', function(e) {
  const el = e.target;
    if(el.classList.contains('apagar')) {
        // Mostra o pai do botão apagar
        console.log(el.parentElement);
        // Comando usado para remover o elemento
        el.parentElement.remove();
    }
})
```

    Após isso usamo o remove() para apagar esse elemento, ou seja, quando clicar-mos em apagar, o pai desse botão será removido, e consequentemente ele também é removido.



    Agora precisamos salvar as tarefas, então criamos a função salvaTarefa.

    Para isso precisamos pegar os (lis), com seus valores, que serão as tarefas.

    Podemos usar as tarefas, a const, para pegar todos os (lis) que estão lá dentro;

```js
function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    console.log(liTarefas);  
}
```

    Com isso no navegador nos é retornado um array com os (lis).

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-24%2020-40-32.png)

    Mas o que queremos é o valor deles, ou seja, os textos.

    Para obter estes textos criamos uma array vazio, chamado listaDeTarefas, 

    Então iremos iterar sob a node list e pegar todos os textos dela.

    Usamos o for of para isso;

```js
function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas) {
        console.log(tarefa.innerText);
        
    }
}
```

    Aqui até funcionou, porém o botão apagar veio junto.

    Para resolver, criamos uma variável let que irá conter o texto da tarefa, e usando essa variável conseguimos usar o replace para substituir o botão apagar, o texto do botão apagar por nada, ou seja, um vazio ' '.

```js
function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ');    
        console.log(tarefaTexto);    
    }
}
```

    Agora precisamos jogar esses textos dentro do array listaDeTarefas;

```js
listaDeTarefas.push(tarefaTexto);
```

    Neste momento percebemos um espaço sobrando nas pontas da string, para resolver usamos o trim;

```js
function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();    
        listaDeTarefas.push(tarefaTexto);
    }
    console.log(listaDeTarefas);  
}
```



    Agora precisamos salvar tudo em um Json, em uma única string.

    Para isso criamos uma variável, tarefas.JSON, então é criada uma string do array listaDeTarefas[], convertida para JSON.

    Isso sería uma string onde podemos pega-la depois novamente e convertela em um array novamente.

```js
const tarefasJSON = JSON.stringify(listaDeTarefas);
console.log(tarefasJSON);
```

    Nos é retornado uma string que até se parece com uma array.

    E agora podemos salvar essa string, e depois resgatar novamente e manipular como quiser-mos, inclusive converter novamente em um array.

    Então usamos o locaStorage, que é um local no navegador onde podemos salvar coisas, que é como se fosse uma mini base de dados que se encontra no navegador.

    Criamos o comando;

```js
localStorage.setItem('tarefas');
```

    Onde tarefas dentro de parênteses refere-se ao nome que iremos usar para recuperar o conteúdo depois, e o valor seria o tarefasJSON;

```js
localStorage.setItem('tarefas', tarefasJSON);
```

    Aqui só podemos salvar strings, por isso foi necessário converter em um JSON com strings.

    Agora se clicar-mos em Aplicativo, e em localStorage no navegador, conseguimos ver as tarefas salvas;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-24%2021-11-01.png)

    Agora, quando uma tarefa é apagada na aplicação ela não é apagada no localStorage, então precisamos resolver isso;

    Para isso adicionamos o salvarTarefas ao botão de apagar, que irá meio que salvar a lista atualizada das tarefas.

```js
document.addEventListener('click', function(e) {
  const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvaTarefas();
    }
})
```





    Agora precisamos que quando o site for carregado, seja carregada novamente as tarefas.

    Então para isso criamos outra função que irá ler as tarefas e joga-las novamenter na (ul). 

    Então aqui pegamos as tarefas do localStorage, que é global do navegador, então podemos usa-lo em qualquer lugar do sistema.

    Agora usamos o getItem para obter novamente as tarefas, usando o nome que setamos anteriormente, localStorage.setItem('<mark>tarefas</mark>', tarefasJSON), que sería o tarefas mesmo.

```js
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    console.log(tarefas);
    
}
adicionaTarefasSalvas();
```

Testando temos as tarefas que estão salvas;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-24%2021-23-51.png)

    Estão salvas como strings, que agora precisamos converte-las novamente em um array, e carregar na página.

    Criamos outra variável, que irá receber um JSON.parse, passando como parâmetro a lista de tarefas.

```js
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);
}
adicionaTarefasSalvas();
```

    E assim conseguimos fazer as tarefas se tornarem um array novamente.

    Agora criamos um for para iterar sob as tarefas e colocalas novamente na lista;

```js
for(let tarefa of listaDeTarefas) {
   criaTarefa(tarefa)
}
```


