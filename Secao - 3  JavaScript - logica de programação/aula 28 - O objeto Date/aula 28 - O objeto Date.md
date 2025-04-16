# Aula 28 - O objeto Date

Aqui iremos trabalhar com datas, e para isso usaremos o objeto Date.



Iniciamos criando uma variável para receber a data;

Função date é uma função construtora, por isso iniciamos com new, e depois a função Date;

```js
const data = new Date;

console.log(data);
```

Sempre que usamos a palavra new estamos lidando com uma função construtora.



Função construtora sempre inicia com a primeira letra maiúscula, e demais em camelCase;

Quando executamos uma função Date construtora sem passar qualquer parâmetro, ela cria um objeto com a data atual, uma data completa, com horas, minutos, segundos, milésimos de segundos.

Ela possui várias funcionalidades como herança, e podemos acessa-las chamando a variável que recebeu a função + o ., ponto, assim podemos acessar as funcionalidades da função Date.

```js
const data = new Date;

console.log(data.toString());
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 19:56:47 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.138 seconds

```

Por exemplo a data no formato gringo usando o toString.

Podemos acessar o MDN, a documentação para conhecer tudo o que o objeto date oferece, segue o link;

[Date - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)



As datas são baseadas no tempo que decorreu desde 1 de janeiro de 1970, que é considerada a época unix.

Por exemplo, se pegamos a data 0, colocando como parâmetro da função, temos como  retorno o marco zero da função date, que deveria ser 01/01/1970, que seria a época Unix, a hora zero.

```js
const data = new Date(0);

console.log(data.toString());   

```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.144 seconds
```

Como nosso time zone tem um fuso de 3 horas, ele retorna 31/12/1969, as 21:00hs.

O que vai dentro do date como parâmetro é milésimos de segundo.



Podemos criar uma variável que conterá 3 horas, em data, em milissegundos;

```js
const tresHoras = 60 * 60 * 3 * 1000;
```

Temos, 60 x 60, que são as horas, x 3 para ser 3 horas, e x 1000, porque os valores são em milissegundos.

Se adicionamos essa variável dentro do parâmetro date, ele irá somar isso ao marco zero, retornando a data sem fuso;

```js
const tresHoras = 60 * 60 * 3 * 1000;
// new date  
const data = new Date(0 + tresHoras);

console.log(data.toString()); 
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.065 seconds
```

Se quisermos por exemplo adicionar 24 horas, ou seja um dia, teríamos que fazer isso em milésimos de segundos;

```js
const dia = 60 * 60 * 24 * 1000;
```

Onde, 60x60, corresponde a uma hora em milésimos de segundo, isso vezes 24, corresponde a um dia, e x1000, pois o calculo é em milésimos de segundo;

```js
const tresHoras = 60 * 60 * 3 * 1000;

const dia = 60 * 60 * 24 * 1000;

// new date  
const data = new Date(0 + tresHoras + dia);

console.log(data.toString());  
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Fri Jan 02 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.14 seconds
```

Somando tudo agora temos um dia a mais, 02/01/1970.

Essa soma parte do marco zero, é somada a partir do marco zero, ou seja 01/01/1970.

Se precisamos de uma data anterior, usamos o negativo, a subtração ao invés da adição;

```js
const tresHoras = 60 * 60 * 3 * 1000;

const dia = 60 * 60 * 24 * 1000;

// new date  
const data = new Date(0 + tresHoras - dia);

console.log(data.toString());  
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Wed Dec 31 1969 00:00:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.128 seconds
```

Usando subtração de um dia temos 31/12/1969.



Podemos enviar uma data específica, colocando como parâmetro dentro do date;

```js
const data = new Date(2025, 3, 14, 22, 5, 5000);

console.log(data.toString());  
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 23:28:20 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.079 seconds
```

Como não existe 1000 milisegundos, se colocar-mos esse valor, ele corrige e altera os minutos para mais, é como se almentasse um minuto;

```js
const data = new Date(2025, 3, 14, 22, 15, 60);

console.log(data.toString()); 
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 22:16:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.14 seconds
```

Mesmo passando 22:15, quando passamos os milissegundos como 60, ele aumenta um minuto, exibindo 22:16, pois mandamos um minuto a mais do permitido.

Se omitirmos o valor dos segundos, ele zera o valor, exibe zero nos segundos;

```js
const data = new Date(2025, 3, 14, 22, 15);

console.log(data.toString()); 
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 22:15:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.124 seconds
```

Podemos ir omitindo até  o dia, não podemos omitir o mês, o limite é o dia.

```js
const data = new Date(2025, 3);

console.log(data.toString());   
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Tue Apr 01 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.123 seconds
```

Omitindo até o dia, ele pega o primeiro dia do mês em questão.

Se omitirmos o mês, ele considera o ano como milésimos de segundo e não funciona, precisamos ter pelo menos dois parâmetros.



O mês em javaScript segue a lógica dos índices, começa do 0, ou seja, Janeiro é o mês 0, zero, e assim por diante.

O padrão é o seguinte;



ano      mês     dia       hora    min.      seg.     milésimos segundos

a,         m,         d,         h,         M,         s,         ms

Isso tudo com number.



Podemos também passar como uma string.

Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método [`Date.parse()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) ([IETF-compliant RFC 2822 timestamps](https://tools.ietf.org/html/rfc2822#page-14) e também uma [versão da ISO8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)).

```js
const dataString = new Date('2025-04-14 20:44:59')

console.log(dataString.toString());   
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 20:44:59 GMT-0300 (Horário Padrão de Brasília)

[Done] exited with code=0 in 0.333 seconds
```

Datas passadas como string não seguem o padrão de index, começando do zero, é o mês em questão mesmo, podemos usar um T, para separar a data do horário, ou apenas um espaço.

Nos é retornado até mesmo o dia da semana.



Da data em questão podemos pegar tudo separadamente;

```js
const dataString = new Date('2025-04-14 20:44:59:999')

console.log(dataString.toString());   

console.log('Dia', dataString.getDate());
console.log('Mês', dataString.getMonth() + 1);
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Minuto', dataString.getMinutes());
console.log('Segundos', dataString.getSeconds());
console.log('Milésimos de segundo', dataString.getMilliseconds());
console.log('Numero do Dia da semana', dataString.getDay());
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 28 - O objeto Date/index.js"
Mon Apr 14 2025 20:44:59 GMT-0300 (Horário Padrão de Brasília)
Dia 14
Mês 4
Ano 2025
Hora 20
Minuto 44
Segundos 59
Milésimos de segundo 999
Numero do Dia da semana 1
```

* Como os mêses são indexados, nessa função ele segue o padrão de contagem a partir do zero, e se precisamos do dia do mês atual, adicionamos 1 ao mês, ficando dataString.getMonth() + 1. 

* Dia da semana começa do zero, ou seja, zero é domingo, e sábado é seis.



Podemos pegar os milésimos de segundo do marco zero até agora, usando o Date.now().

```js
console.log(Date.now());
```

```bash
1744675364168
```

Que seria a data atual em milésimos de segundo.

Se colocarmos esse número no parâmetro do date, teremos a data atual correspôndente;



Podemos criar uma função que retorna uma data formatada, por exemplo no padrão Brasil;
