## Aula 8 - Exercicio

Um exercício para praticar os conceitos de variáveis vistos até agora.

Imprimir na tela a seguinte frase;

```js
Carlos Martins da Silva tem 38 anos pesa 84 kg tem 1.8 de altura 
seu IMC é de 25.xxxxx
Carlos Martins da Silva nasceu em xxxx.
```

Para iniciar a criação das variáveis precisamos análisar se elas irão mudar seu valor no decorrer do código, então análisamos uma a uma.

- Nome - Como o nome não irá alterar no decorrer do código, declaramos ele como uma const;

- Sobrenome - Para o sobrenome a mesma coisa, portanto const;

- Idade - Também não irá mudar, const;

- Peso - Também não muda, const;

- Altura - Também como const;

- IMC - Para o imc devemos declarar uma let, pois trata-se de uma variável que altera seu valor de acordo com as outras já inseridas;

- Ano nascimento - Para esse, como será alterado pelo usuário, declaramos como let.

Fórmula do IMC = peso / (altura * altura);

Podemos também usar altura ao quadrado.

- Modificamos a altura para ser altura em metros;

- Para calcular o ano de nascimento apenas fez o ano atual subtraindo a idade;

A principio demonstrou como exibir essas informações com o console.log.

Outra maneira de formar a frase completa é usar o sinal de + para unir os valores, colocando o operador seguido de um espaço em branco, entre aspas.

Quando tivermos variáveis na junção, colocamos um espaço para separar.

Porém podemos também utilizar as templates strings para formar as frases, uma template string é uma string que podemos colocar variáveis dentro dela.

Para isso retiramos todas as aspas e virgulas que foram adicionadas e envolvemos toda a seção entre crases.

Para executar uma expressão JavaScript dentro de uma string que está dentro de crases, usamos o cifrão seguido de chaves, \${desseModo}.

Essa é uma das maneiras mais legiveis de se declarar as expressões, também a mais moderna.

```js
console.log(`${nome} ${sobrenome} ${idade} anos de idade e pesa ${peso} Kg.`);
console.log(`Tem ${alturaEmMetros} m de altura e seu IMC é de ${indiceDeMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
```
