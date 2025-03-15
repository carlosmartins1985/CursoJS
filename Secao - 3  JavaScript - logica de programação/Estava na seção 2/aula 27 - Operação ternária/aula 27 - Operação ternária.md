# Aula 27 - Operação ternária

O operador ternário em javascript trata-se básicamente em;

* O sinal de ? e os : - Interrogação e dois pontos.

Ele pode substituir partes de código, e encurtar muito o código também, em partes onde precisamos de um if/else apenas.



Imaginemos que temos um site onde temos usuários vip e usuários normais, e dependendo da pontuação do usuário, por exemplo, no caso de um forum, onde o usuário ganhe pontos dependendo das respostas dele.

Ou seja, baseado na pontuação desse usuário daremos uma flag a ele, se ele é vip, ou se é usuário normal.

Isso seria mais ou menos assim;

* Teremos um usuário com sua pontuação;
  
  ```js
  const pontuacaoUsuario = 999;
  
  ```

* Se o usuário tiver menos de 1000 pontos ele será um usuário normal;

* Usando o if/else ficaria da seguinte maneira;
  
  ```js
  const pontuacaoUsuario = 999;
  
  
  if(pontuacaoUsuario >= 100){
      console.log('Usuário vip');
  } else {
      console.log('Usuario normal');
  }
  ```

* E assim ficaria usando o operador ternário, com apenas uma linha de código;
  
  ```js
  const pontuacaoUsuario = 1000;
  
  const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';
  
  console.log(nivelUsuario);
  ```

Na variavel nivelUsuario ele verifica a pontuação e a guarda, então se a pontuação do usuário for maior/igual a 1000, ele executa o primeiro resultado, que seria o retorno true da expressão, caso contrário, ele executa o segundo resultado que seria o retorno false. 

Podemos usar o operador ternário com ou || também.

No exemplo da cor de fundo definida pelo usuário, podemos verificar se o usuário adicionou alguma cor de fundo, e se não aplicamos a cor padrão do site.

```js
const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);
```

Aqui dizemos que estamos setando uma cor padrão para o site, e se caso haja alguma cor indicada pelo usuário, será aplicada.

Ou seja, se a variável cor usuário estiver vazia, será aplicada a cor padrão.

Poderíamos fazer com que o usuário vip pudesse escolher a cor de fundo do site, setando a cor na variável;

```js
const pontuacaoUsuario = 1000;

//                          Condição          valor p verdadeiro  valor falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';


const corUsuario = 'Blue';
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario, corPadrao);

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 27 - Operação ternária/index.js"
Usuario vip Blue

[Done] exited with code=0 in 0.187 seconds
```











 




