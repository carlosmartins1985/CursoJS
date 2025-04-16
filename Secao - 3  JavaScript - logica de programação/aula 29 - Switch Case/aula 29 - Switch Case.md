# Aula 29 - Switch/Case

Extrutura condicional Switch.



A principio entendemos quando usamos o Switch/Case, uma vez que é bem pouco usado.

Criamos uma data;

```js
const data = new Date();

const diaSemana = data.getDay();

console.log(diaSemana);
```

E filtramos o dia da semana;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 29 - Switch Case/index.js"
2

[Done] exited with code=0 in 0.145 seconds

```

Se colocarmos uma data manualmente, o valor retornado muda, ou seja, é retornado um valor para cada dia da semana;

```js
const data = new Date('1985-07-01 06:00:00');

const diaSemana = data.getDay();

console.log(diaSemana);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 29 - Switch Case/index.js"
1

[Done] exited with code=0 in 0.078 seconds
```

Aqui é retornado 1, que seria uma segunda-feira.



Mas precisamos retornar não um número para o dia da semana, e sim o dia específico, Domingo, Segunda, etc...



Então poderíamos criar um if, para cada dia da semana;

```js
const data = new Date('1985-07-05 06:00:00');

const diaSemana = data.getDay();

Checagem caso o dia da semana retorne null.
// let diaSemana = data.getDay();
// diaSemana = 7;

let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = "Domingl"
} else if(diaSemana === 1){
    diaSemanaTexto = "Segunda-Feira"
}else if(diaSemana === 2){
    diaSemanaTexto = "Terça-Feira"
}else if(diaSemana === 3){
    diaSemanaTexto = "Quarta-Feira"
}else if(diaSemana === 4){
    diaSemanaTexto = "Quinta-Feira"
}else if(diaSemana === 5){
    diaSemanaTexto = "Sexta-Feira"
}else if(diaSemana === 6){
    diaSemanaTexto = "Sábado"
} else{
    console.log("Dia invalido.");
}

console.log(diaSemana, diaSemanaTexto);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 29 - Switch Case/index.js"
5 Sexta-Feira

[Done] exited with code=0 in 0.093 seconds
```

Então para cada dia teremos o retorno.

Esse sería a situação perfeita para usar o switch case;



Então criamos um case para mostrar o dia da semana de acordo com o retorno da data;

```js
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Data invalida.';
        break;
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 29 - Switch Case/index.js"
4 Quinta-Feira

[Done] exited with code=0 in 0.072 seconds
```

O valor default define um valor padrão, caso não haja retorno.



Se esquecemos a palavra break ele executa mais de uma condição, neste caso, mostra um dia a mais, por exemplo, pula Domingo e mostra Segunda.

```js
const data = new Date('1985-07-07 06:00:00');

const diaSemana = data.getDay();

// let diaSemana = data.getDay();
// diaSemana = 7;

let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        // break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Data invalida.';
        break; // Esse break é opcional.
}

console.log(diaSemana, diaSemanaTexto);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 29 - Switch Case/index.js"
0 Segunda-Feira

[Done] exited with code=0 in 0.087 seconds
```

Por isso não podemos esquecer a palavra break.



Podemos criar uma função para retornar o dia da semana, mesmo usando o switch case, colocando o case dentro da função.

E como a cada vez que a função encontra o return ela para a execução e retorna o valor encontrado, conseguimos eliminar o break do código.

Assim que o case for verdadeiro ele retorna e sai da função.



Também a variável diaSemanaTexto não existe mais fora da função, sendo eliminada do escopo global.



Então:

* Definimos uma constante que irá receber a data;
  
  ```js
  const data = new Date();
  ```

* Definimos uma const que irá retornar o número do dia da semana;
  
  ```js
  const diaSemana = data.getDay();
  ```

* Definimos uma cosnt que irá receber a função getWeekDay();
  
  ```js
  const diaSemanaTexto = getWeekDay(diaSemana);
  ```

* Mostramos a saída com um console.log;
  
  ```js
  console.log(diaSemana, diaSemanaTexto);
  ```

* E temos a criação da função completa;
  
  ```js
  function getWeekDay(diaSemana) {
    let diaSemanaTexto;
  
    switch (diaSemana) {
      case 0:
        diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
      case 1:
        diaSemanaTexto = "Segunda-Feira";
        return diaSemanaTexto;
      case 2:
        diaSemanaTexto = "Terça-Feira";
        return diaSemanaTexto;
      case 3:
        diaSemanaTexto = "Quarta-Feira";
        return diaSemanaTexto;
      case 4:
        diaSemanaTexto = "Quinta-Feira";
        return diaSemanaTexto;
      case 5:
        diaSemanaTexto = "Sexta-Feira";
        return diaSemanaTexto;
      case 6:
        diaSemanaTexto = "Sábado";
        return diaSemanaTexto;
      default:
        diaSemanaTexto = "Data invalida.";
        return diaSemanaTexto;
    }
  }
  ```












