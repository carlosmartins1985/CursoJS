// Variáveis

// Usamos variáveis para guardar dados na memória do pc.
// Quando temos dados que se repetem através do código, abstraímos esse dado em uma variável.

// Forma mais antiga de se declarar uma variável.
// var nome2 = 'Maria';

// Declaramos e inicializamos a variável
// let nome = "Carlos";
// let nomeMae = "Neide";

// console.log(nome, 'nasceu em 1984.');
// console.log('Em 2000', nome, 'conheceu Maria.');
// console.log(nome, 'casou-se com Maria em 2012.');
// console.log('Maria teve um filho com', nome , 'em 2015.');
// console.log('O filho de' , nomeMae , 'se chama Eduardo.');


// Podemos declarar uma variável e não inicializa-la, deixando como undefined
// let variavenUndefined;
// console.log('Esta variável é', variavenUndefined);

// variavenUndefined = "'Declarada.'"
// console.log('Agora inicializamos a variável', variavenUndefined);

// Podemos atribuir vários valores as variáveis, por exemplo;
let fruta;

fruta = 'Maça';
console.log(fruta);

fruta = 'Banana';
console.log(fruta);

// Mas não podemos redeclarar a variável;
// let fruta


/*   Regras para criação de variáveis

    * Não podemos criar variáveis com palavras reservadas
    * Precisam ter nomes significativos, que representam alguma coisa, para que serve aquela variável, o que 
        esta guardando, que tipo de dado.
    * Não podemos começar o nome de uma variável com números.
    * Não podem conter espaços ou traços. Para nomes compostos, por convenção, utilizamos o camelCase.
    * Variáveis são caseSensitive, ou seja, letras minúsculas e maiúsculas são diferentes.
    * Variáveis com let não podem ser redeclaradas.
    * NÃO UTILIZE VAR, UTILIZE LET
*/


