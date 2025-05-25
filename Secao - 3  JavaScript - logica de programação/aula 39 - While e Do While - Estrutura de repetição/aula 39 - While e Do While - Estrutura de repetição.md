# Aula 39 - While e Do While - Estrutura de repetição



    Estruturas de repetição While e DoWhile.

Essas estruturas de repetição funcionam similarmente as outras estruturas de repetição, como for.



Pórem tem algumas diferênças, por exemplo, quando usamos um for, sabemos o tamanho do elemento que estamos trabalhando, se tivermos um array, ou nodeList, ele irá executar até o tamanho do elemento, por exemplo um array com 10 itens, ou um nodeList.

Quando usamos o while ou o doWhile, não sabemos quantas vezes a repetição irá ocorrer.



Como exemplo usaremos um laço while, que irá, da mesma forma que o for, ter uma variável de controle, uma condição, irá atualizar essa variável de controle, e será executado enquanto essa condição for verdadeira.



* Ao ínves de const usamos let, pois precisamos atualizar a variável de controle;

* Criamos a variável fora do while;

```js
// Criamos a variável
let i = 0;

// Condição para a variável de controle
while (i <= 10) {
    // Exibe a variável de controle
    console.log(i);
    // Atualiza a variável de controle.
    i++;
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"
0
1
2
3
4
5
6
7
8
9
10

[Done] exited with code=0 in 0.07 seconds
```

* Não podemos esquecer nunca de colocar o incremento/atualizar a variável de controle.

* Ele checa, na verdade até o 11, e quando a condição se torna falsa o loop se encerra.



Podemos também usar em arrays, como fizemos com o for.

```js
const nome = 'Carlos Martins';
let i = 0;

while(i < nome.length) {
    console.log(nome[i]);
    i++
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"
C
a
r
l
o
s
 
M
a
r
t
i
n
s

[Done] exited with code=0 in 0.111 seconds
```

Mas nesse contexto seria melhor mesmo usar o for.

Iremos agora ver uma caso de uso mais da vida real.



Criamos uma função que cria um número aleatório.

```js
function random(min, max) {
    r = Math.random() * (max - min) + min;
    return r;
}
```

* Essa função está disponível também no mdn.

Função conpleta;

```js
function random(min, max) {
    r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const rand = random(1, 50);
console.log(rand);
```

Assim conseguimos ter um número aleatório inteiro entre um e 50.



Podemos então criar um while que irá verificar se o número é igual a 10, e sempre que for, ele saí fora do laço;

```js
function random(min, max) {
    r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 10;
const max = 50;
let rand = random(min, max);
// console.log(rand);

while (rand != 10){
    rand = random(min, max);
    console.log(rand); 
}
```

Com essa função o laço saíra sempre que encontrar o número 10.



O laço while é mais utilizado em situações como essa, quando não sabemos quando a iteração irá terminar.



## Do while

O do while, primeiramente checa a condição, e depois executa o laço.

Poderíamos por exemplo, mudar o rand para 10, e assim o laço não seria executado, pois, quando entrasse no while, a condição seria executada, e como 10 não é diferente de 10, não seria executado o while;

```js
function random(min, max) {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }
    
    const min = 10;
    const max = 50;
    let rand = 10;
    // console.log(rand);
    
    while (rand != 10){
        rand = random(min, max);
        console.log(rand); 
    }
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"

[Done] exited with code=0 in 0.26 seconds
```

Podemos logar a condição, e veremos que enquanto o número for diferente de 10 nos é retornado true, ou seja, número diferente de 10

```js
function random(min, max) {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }
    
    const min = 10;
    const max = 50;
    let rand = random(min, max);
    console.log(rand != 10);
    
    while (rand != 10){
        rand = random(min, max);
        console.log(rand); 
    }
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"
true
10

[Done] exited with code=0 in 0.195 seconds
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"
true
43
28
26
16
10

[Done] exited with code=0 in 0.253 seconds
```

* Pois dentro do laço chamamos a função para atualizar o valor de rand.

Usando o doWhile notamos que o valor é impresso, e posteiormente sai do laço.

```js
function random(min, max) {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }
    
    const min = 10;
    const max = 50;
    let rand = 10;

    while (rand != 10){
    rand = random(min, max);
    console.log(rand);  
    }

    console.log('###############################3');
    
  
    
    do {
        rand = random(min, max);
        console.log(rand); 
    } while (rand != 10);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 39 - While e Do While - Estrutura de repetição/assets/js/main.js"
###############################3
21
17
10

[Done] exited with code=0 in 0.266 seconds
```

Comparando os dois notamos que o while não é executado, enquanto o do while é executado.

Neste caso, o rando começa valendo 10, mas dentro do while esse valor é atualizado, pela função random, então rand deixa de valer 10 e passa a valer um número aleatório.



Se tirarmos os valores randomicos, o valor de 10 será exibido pelo menos uma vez, até que o sistema encontre o rand valendo 10 e saia do laço.
