# Aula 47 - Exercício - Criando um timer com setInterval

    Nesta aula criaremos um timer;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-16%2019-43-26.png)

   

* Abrimos o js;

* Abrimos o html;

* Abrimos o css.

* Colocamos o h1, titulo timer;

* Colocamos um parâgrafo para ser o relógio;



    No parágrafo colocamos uma classe, ou id, para seleciona-lo posteriormente.

    E outro parágrafo para os botões;



    Estilizamos os botões com css.

    

    Pegamos os eventos de click dos botões no js;



* Primeiro selecionamos eles no js;

```js
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
```



    Similar ao evento que usamos no formulário, podemos pegar o evento de click no botão;

```js
iniciar.addEventListener('click', function(e) {
    alert('Cliquei em iniciar');
})
```

    Neste exemplo ele apenas mostra uma mensagem quando o botão de iniciar é clicado.

    Podemos fazer para todos os botões;

```js
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e) {
    alert('Cliquei em iniciar');
})

pausar.addEventListener('click', function(e) {
    alert('Cliquei em pausar');
})

zerar.addEventListener('click', function(e) {
    alert('Cliquei em zerar');
})
```

    Agora baseado nos cliques podemos manipular o relógio.



    Podemos no lugar do timer exibir uma mensagem quando o botão iniciar for clicado;

```js
iniciar.addEventListener('click', function(e) {
    relogio.innerHTML = `Cliquei no iniciar`
})
```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202025-06-16%2020-06-42.png)


