## Aula 10 - Tipos de dados primitivos

Os tipos de dados primitivos em JavaScript;

- Strings - Que armazenam caracteres como letras, podendo ser declaradas com aspas simples ou duplas e também com crases, e com esta última podemos também usar template strings dentro delas;

```js
const nome = 'Carlos'; String
const nome = "Carlos"; String
const nome = `Carlos`; String - Nessa declaração podemos usar template strings.
```

- Number - Usado para armazenar números;

```js
const num1 = 10; Number - Inteiro
const num1 = 10.52; Number - Float, também 
```

- Undefined - Isso ocorre quando declaramos uma variável e não inicializamos ela;

```js
let nomeAluno; Undefined
```

Ou seja, essa variável recebe um valor do JS de indefinido, NÃO APONTA PARA LOCAL NENHUM NA MEMÓRIA.

- Null - Similar ao undefined, também não aponta para lugar nenhum na memória, declaramos fora de aspas e com letras minusculas.

```js
const sobrenomeAluno = null; // Nulo, não aponta para nada.
```

Utilizamos o null quando queremos desconfigurar uma variável, colocar o valor de uma variável como nulo.

\* Um exemplo, imagine que temos um site onde o usuário pode alterar a cor de fundo do perfil dele, caso ele não configure nenhuma cor, podemos inicializar a variável como nulo, explicitando que essa variável não tem nenhum valor, e será alterada caso o usuário configure alguma cor, e caso ele desmarque a cor, retorna explicitamente para nulo.

\* <u>***Diferença undefined e null***</u>

- Quando usamos o nullo explicitamos que não queremos que essa variável aponte para qualquer lugar da memória;

- Undefined - Na verdade nunca iremos setar uma variável como undefined, quem faz isso é o próprio JS,

Ou seja, quando usamos o undefined a linguagem se encarrega de inicializar a variável como indefinida, já quando uso o null, estou dizendo para a linguagem que aquela variável não irá apontar para lugar algum da memória.

- Booleanos - Retornam verdadeiro ou falso;

```js
// Aluno aprovado ou reprovado
const aprovado = true; // Retorna verdadeiro ou falso
```

Basta usarmos true ou false como inicialização da variável parar declara-la como boolean.

Booleanos tratam-se de valores lógicos, são situações onde podemos mudar totalmente o fluxo do programa de acordo com o resultado lógico boolean.

Sempre que usar-mos o boolean estamos precisando fazer um desvio de fluxo do sistema.

- Podemos ver o tipo de dados utilizando o typeof seguido do nome da variável;

```js
console.log(typeog nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
string

[Done] exited with code=0 in 0.221 seconds
```

- Se quisermos ver o tipo e o valor, adicionamos uma virgula seguida do nome da variável;

```js
console.log(typeog nome, nome);
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
string Carlos

[Done] exited with code=0 in 0.229 seconds
```

Isso será o mesmo para números.

- Para o undefined ele retorna o mesmo valor para ambos;

```js
let nomeAluno;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
undefined undefined

[Done] exited with code=0 in 0.143 seconds
```

- No caso do null, ele retorna como um objeto e aponta para null;

```js
const sobrenomeAluno = null;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
object null

[Done] exited with code=0 in 0.206 seconds
```

Porém pode ser considerado um bug esse resultdo, isso porque null não se enquadra como objeto.

- E também teremos o tipo booleano com seu valor;

```js
const aprovado = false;
```

Saída

```bash
[Running] node "/home/carlos/CursoJS/Seção 2 - JavaScript básico para iniciantes/aula10 - Tipos de dados primitivos/index.js"
boolean false

[Done] exited with code=0 in 0.24 seconds
```

- Dados passados por referência, o exemplo a seguir mostra a diferença de um tipo de dado primitivo e um tipo de dado passado por referência.
  
  - Para isso criamos um array, e chamamos de a;
    
    ```js
    const a = [1, 2];
    ```
  
  - E outra constante que irá receber a, chamada b;
    
    ```js
    const b = a;
    ```

  Se dermos um console.log ele irá imprimir ambos os conteúdos, pois são iguais.

  Porém se adiconar-mos outro valor a "b" usando a função .push, e passando como parâmetro 3.

  Teoricamente, deveriámos adicionar o valor somente a b, ficando a=[1, 2] e b ficando b=[1, 2, 3], porém o valor é adicionado tanto em a quanto em b, isso porque quando criamos uma variável por referência, ela faz o valor de b apontar para o mesmo local que o valor de a aponta na memória, ou seja, a e b apontam para o mesmo valor na memória, isso é um tipo de dado passado por referência.

  Quando usamos os dados primitivos, por exemplo, quando criamos duas variáveis, e atribuimos o valor de uma a outra, ele está copiando seu valor para essa variável;

```js
// a está sendo copiado em b
const a = 2;
const b = a;
```

E ambos sustentam seu valor, ou seja, se altero o valor de um não altera o valor do outro.
