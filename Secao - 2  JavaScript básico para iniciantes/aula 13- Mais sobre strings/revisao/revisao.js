/**
 * 
 * Se precisarmos usar aspas duplas dentro de aspas duplas podemos escapar os caracteres.
 */

//Podemos usar aspas duplas dentro de aspas simples sem problemas.
// let umaString = 'Um "texto"';

// Se precisarmos colocar aspas duplas dentro de aspas duplas, podemos escapar o caractere.
let umaString = 'Um \"texto\"';
let outraString = "Um texto"
let ratoString = "O rato roeu a roupa do rei de roma.";

// console.log(umaString);

// console.log(outraString.indexOf("x"));

// console.log(umaString.match(/[a-z]/));

// console.log(outraString.replace("Um texto", "Outro texto."));

console.log(ratoString.replace(/a/g, "@"));
console.log(ratoString.length);
console.log(ratoString.slice(0, 11));
console.log(ratoString.slice(-6));








