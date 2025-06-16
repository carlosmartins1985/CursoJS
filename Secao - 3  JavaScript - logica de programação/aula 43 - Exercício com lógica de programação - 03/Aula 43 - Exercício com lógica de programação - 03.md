# Aula 43 - Exercício com lógica de programação - 03

    Escreva uma função que recebe um número e retorne o seguinte;

* Numero é divisivel por 3 = Fizz;

* Numero é divisivel por 5 = Buzz;

* Numero é divisivel por 3 e 5 = FizzBuzz;

* Numero não é divisivel por 3 nem 5 = Retorna o própio número

* Checar se o número é realmente um número = Retorna o própio número

* Use a função com números de 0 a 100 - Usando um loop entre 0 e 100

## Minha solução

    Duas soluções para o exercício, uma usando arrays e outra usando um gerador de números aleatórios com doWhile.

Com arrays;

```js
const valor = ['36', '35', 'José', 3, 5, 18, 45, 15, 100, 62];

function fizzBuzz(valor) {

    for(let i in valor) {
        const numero = valor[i];

        if(isNaN(numero) || typeof numero !== 'number') {
            console.log(`'${numero}' não é um número.`);
        } else if(numero % 3 === 0 && numero % 5 === 0) {
            console.log(`${numero} é divisivel por 3 e por 5.`);
        } else if (numero % 3 === 0) {
            console.log(`${numero} é divisivel por 3`);
        } else if (numero % 5 === 0) {
            console.log(`${numero} é divisivel por 5`);
        } else if(numero % 3 !== 0 && numero % 5 !== 0) {
            console.log(`${numero} não é divisivel nem por 5 e nem por 3`);
        }
    }
}

fizzBuzz(valor);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/Aula 43 - Exercício com lógica de programação - 03/assets/js/main.js"
'36' não é um número.
'35' não é um número.
'José' não é um número.
3 é divisivel por 3
5 é divisivel por 5
18 é divisivel por 3
45 é divisivel por 3 e por 5.
15 é divisivel por 3 e por 5.
100 é divisivel por 5
62 não é divisivel nem por 5 e nem por 3

[Done] exited with code=0 in 0.298 seconds
```

* Usando arrays é possível checar se algum valor de entrada não é um número.

    Retorno correto com Fizz, Buzz e FizzBuzz;

```js
const valor = ['36', '35', 'José', 3, 5, 18, 45, 15, 100, 62];

function fizzBuzz(valor) {

    for(let i in valor) {
        const numero = valor[i];

        if(isNaN(numero) || typeof numero !== 'number') {
            console.log(`'${numero}' não é um número.`);
        } else if(numero % 3 === 0 && numero % 5 === 0) {
            console.log(`FizzBuzz`);
        } else if (numero % 3 === 0) {
            console.log(`Fizz`);
        } else if (numero % 5 === 0) {
            console.log(`Buzz`);
        } else if(numero % 3 !== 0 && numero % 5 !== 0) {
            console.log(`${numero}`);
        }
    }
}

fizzBuzz(valor);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/Aula 43 - Exercício com lógica de programação - 03/assets/js/main.js"
'36' não é um número.
'35' não é um número.
'José' não é um número.
Fizz
Buzz
Fizz
FizzBuzz
FizzBuzz
Buzz
62

[Done] exited with code=0 in 0.163 seconds
```

    Com um gerador de números alestórios, onde checamos números de 0 a 1000.

```js
fizzBuzz(0, 1000);

function fizzBuzz(min, max) {

    let rand = 0;

    const gerarNumero = (min, max) => {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    };

    do {
        rand = gerarNumero(min, max);
        rand++;
        // Este if acaba sendo não usado, pois o sistema apenas irá gerar números.
        if (isNaN(rand) || typeof rand !== "number") {
            console.log(`'${rand}' não é um número.`);
        } else if (rand % 3 === 0 && rand % 5 === 0) {
            console.log(`${rand} é divisivel por 3 e por 5.`);
        } else if (rand % 3 === 0) {
            console.log(`${rand} é divisivel por 3`);
        } else if (rand % 5 === 0) {
            console.log(`${rand} é divisivel por 5`);
        } else if (rand % 3 !== 0 && rand % 5 !== 0) {
            console.log(`${rand} não é divisivel nem por 5 e nem por 3`);
        }
        } while (rand != max);
}
```

* Já com o gerador de números alestórios é redundante checar se o valor é um number, pois teóricamente só será inserido números.





## Solução professor



    Escreva uma função que recebe um número e retorne o seguinte;

* Numero é divisivel por 3 = Fizz;

* Numero é divisivel por 5 = Buzz;

* Numero é divisivel por 3 e 5 = FizzBuzz;

* Numero não é divisivel por 3 nem 5 = Retorna o própio número

* Checar se o número é realmente um número = Retorna o própio número

* Use a função com números de 0 a 100 - Usando um loop entre 0 e 100    



* Uma primeira correção foi de sempre deixar a checagem dupla no inicio do arquivo.



```js
function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
} 

console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
```

    Usando o if com return, porém, com a lógica, ele checa os valores, e se nenhum satisfizer as divisões nos é retornado o número em si.

    Mesmo sendo posto uma string com parâmetro, o sistema continua a execução.






