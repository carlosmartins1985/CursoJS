# Aula 40 - Break e Continue

Nesta aula iremos abordar o break e continue dentro dos laços.

Isso nos permite ter um controle de quando pular um elemento, e elas funcionam em qualquer laço, seja for, for in, for of, while...



    Criamos um arrays com números como exemplo;

```js
const numeros = [1,2,3,4,5,6,7,8,9];
```

Podemos usar o forOf para iterar sobre o array;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
2
3
4
5
6
7
8
9

[Done] exited with code=0 in 0.148 seconds
```

    Podemos ter algum caso onde seja necessário pular alguma dessas iterações, ou seja, pular o código que executa a ação dentro da iteração.

    Neste caso estamos apenas exibindo a iteração.

    Suponhamos que não queremos que o número 2 seja exibido na tela, que a iteração pule esse número, podemos usar o continue, dentro de um if, para que ele pule esse número, e depois continue a executar o código;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2){
        continue;
    }
    console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
3
4
5
6
7
8
9

[Done] exited with code=0 in 0.149 seconds
```

    Ou seja, continue para a próxima iteração do laço, quando encontra continue, o js volta para o inicio do laço mas já na próxima iteração.

    Quando encontra o número 2, ele pula para a próxima iteração do laço sem executar o log, indo direto para o 3.

    Então sempre usaremos a palavra continue antes da ação que estamos executando, que neste cado é apenas o log.

    Podemos por mais números, para que não sejam exibidos, utlizando o operador ||, ou, e também criar outro if;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        continue;
    }
    console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
3
4
6
7
8
9

[Done] exited with code=0 in 0.215 seconds
```

    Aqui pularemos os números 2 e 5.    

    Podemos também ter outros ifs;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        continue;
    }

    // Podemos ter também outros ifs
    if (numero === 7) {
        continue;
    }
    console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
3
4
6
8
9

[Done] exited with code=0 in 0.238 seconds
```

    Aqui também irá pular o 7.

    Quando ele encontra a condição, ele pula, e na próxima iteração passa direto.

    Podemos ver quando ele pula o número dois por exemplo;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        
        continue;
    }

    // Podemos ter também outros ifs
    if (numero === 7) {
        continue;
    }
    console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6
8
9

[Done] exited with code=0 in 0.342 seconds
```



## Break

    O break é muito interessante pois pode até poupar recursos do servidor, pode melhorar a velocidade do código.

    Podemos ter uma situação em que precisamos encontrar um número específico, dentro de uma lista de números, podemos então usar o break, e assim que o número em questão for encontrado, ele sai do laço, e não procura, não itera sobre o restante do código.

    Neste caso ele nem chega  a executar o 7, chegando no 6 já sai do laço;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        
        continue;
    }

    if(numero === 7) {
        break;
    }

    // Podemos ter também outros ifs
    // if (numero === 7) {
    //     continue;
    // }
    console.log(numero);
}
```

```bash
Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6

[Done] exited with code=0 in 0.257 seconds
```

    Se precisamos executar a ação antes de sair do laço, podemos por o log acima do break;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        
        continue;
    }

    console.log(numero);
 
    if(numero === 7) {
        break;

    }

    // Podemos ter também outros ifs
    // if (numero === 7) {
    //     continue;
    // }
    // console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6
7

[Done] exited with code=0 in 0.127 seconds
```

    Então o 7 é executado antes de sair do laço.

    Podemos ter uma mensagem, dizendo que o valor foi encontrado, saindo...

```js
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        
        continue;
    }

    console.log(numero);
 
    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }

    // Podemos ter também outros ifs
    // if (numero === 7) {
    //     continue;
    // }
    // console.log(numero);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6
7
7 encontrado, saindo...

[Done] exited with code=0 in 0.164 seconds
```



    A diferênça entre continue e break, é que quando, no continue, por exemplo, o valor é encontrado, ele pula o valor e volta para o inicio do laço, já com o break, assim que a palavra break é encontrada, ele sai do laço, e nada mais é executado.



    Isso irá funcionar com qualquer for;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

// Usando o for classico
for (let i = 0; i < numeros.length; i++) {

    if(i === 2 || i === 5){
        console.log('Pulei o número dois e 5');
        continue;
    }

    if(i === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }

    console.log(numeros[i]);
    
}
```



    Usando o while, a principio caimos em um laço infinito;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        continue;
    }

    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        break;

    }
    console.log(numero);
    
    i++;
}
```

    Isso porque, quando ele for atualizar a variável de controle, por conta do continue, o laço reinicia, e a variável de controle nunca será atulizada.

    Para resolver isso precisamos atualizar a variável de controle antes do continue, então copiamos a variável de controle para dentro do continue, para que ela seja atualizada;

```js
const numeros = [1,2,3,4,5,6,7,8,9];

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if(numero === 2 || numero === 5){
        console.log('Pulei o número dois e 5');
        i++;
        continue;
    }


    if(numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;

    }
    console.log(numero);
    
    i++;
} 
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6
7 encontrado, saindo...

[Done] exited with code=0 in 0.327 seconds
```

    Usando o do while funciona da mesma maneira;

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    console.log("Pulei o número dois e 5");
    i++;
    continue;
  }

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    i++;
    break;
  }
  console.log(numero);

  i++;
} while (i < numeros.length);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 40 - Break e Continue/assets/js/main.js"
1
Pulei o número dois e 5
3
4
Pulei o número dois e 5
6
7 encontrado, saindo...

[Done] exited with code=0 in 0.327 seconds
```


