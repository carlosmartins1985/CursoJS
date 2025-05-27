# Aula 41 - Exercícios com lógica de programação 01



```js
// Escreva uma função que recebe dois números e retorne o maior deles
```

    Para solucionar esse exercício podemos usar;

* If else;

* Operação ternária;

* Operadores de comparação;

* Operação ternária com arrow function.



## Minhas soluções



* Solução usando a operação ternária dentro de uma arrow function;

```js
const num1 = 500;
const num2 = 100;

const validarMaior = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

console.log(validarMaior(num1, num2));
```

* Usando uma arrow function com apenas uma linha, essa foi a solução final;

```js
// Solução com arrow function em uma linha apenas
const validarMaior = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(validarMaior(1000, 100));
```

* Usando uma função com condicionais;

```js
function validarMaior(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else{
        return num2
    }
}
console.log(validarMaior(num1, num2));
```

* Usando o objeto Math;

```js
function validarMaior(num1, num2) {
    return Math.max(num1, num2);
}
console.log(validarMaior(num1, num2));
```

* Não precisamos criar as variáveis, podemos por direto dentro dos parâmetros da função;

```js
// Usando uma função com operação ternária
function validarMaior(x, y) {
    return x > y ? x : y;
}
console.log(validarMaior(100, 1500));
```





## Solução professor

    Irá mostrar algumas melhorias que talvez não tenhamos implementado.

    A principio usou uma função mais tradicional, a com if e else.

```js
function max(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}
```

* Criamos uma variável que irá receber o resultado;

```js
function max(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

const maior = max(100, 1500);

console.log(maior);
```

    Mas como não iremos reutilizar os valores retornados pela função, podemos por direto dentro do log.

```js
function max(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(100, 1500));
```



## Refatoração

    Primeiramente, assim como já havia feito, não precisamos do else, pois assim que o js encontra a palavra return, ele já sai da função;

```js
function max(x, y) {
    if(x > y) {
        return x;
    }
        return y;
}

console.log(max(100, 1500));
```

    Podemos também, como se trata de apenas um if, e o código é bem pequeno, encurtar ainda mais, retirando as chavez;

```js
function max(x, y) {
    if(x > y) return x;
    return y;
}

console.log(max(100, 1500));
```

    Podemos usar a operação ternária para a verificação;

```js
function max(x, y) {
    return x > y ? x : y;
}

console.log(max(100, 1500));
```

    E a minha preferida que foi a arrow function;

```js
const validarMaior = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}
console.log(validarMaior(500, 100));
```

    E na arrow function, como se trata de apenas uma linha, fica implicito o que será retornado, sendo assim não precisamos nem do return e nem das chaves;

```js
const validarMaior = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(validarMaior(1000, 100));
```



    Assim conseguimos resolver o problema usando apenas uma linha de código, juntamente com arrow function.
