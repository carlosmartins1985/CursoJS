// let umaString = 'Um texto';

// Aspas duplas dentro de aspas simples
// let umaString = 'Um "texto"';

// Escapando o caractere tudo em aspas duplas
// let umaString = "Um \"texto\"";

// Usando a barra invertida dentro do texto
// let umaString = "Um \\texto ";

//                  01234567
// let umaString = "Um texto";

// console.log(umaString[[4]]);

// console.log(umaString[[8]]);
// console.log(umaString.charAt(9));

// Função concat
// console.log(umaString.concat(' ', 'em', ' ', 'um'));


// console.log(umaString.concat(' ', 'em', ' ', 'um'));
// console.log(umaString.concat(' em', ' um', ' lindo dia.'));
// console.log(umaString.concat(' em um lindo dia.'));
// console.log(`${umaString} em um lindo dia.`)

// Pesquisar o índice
// console.log(umaString.indexOf('texto'))

// Usando letra maiuscula
// console.log(umaString.indexOf('Texto'));

// Palavra no índice 0, zero
// console.log(umaString.indexOf('Um'));

// Definindo de onde iniciar a pesquisa
// console.log(umaString.indexOf('Um', 3));

// Com uma palavra que existe na string
// console.log(umaString.indexOf('o', 3));

// Utilizando o lastIndexOf()
// console.log(umaString.lastIndexOf('m', 3));

// Função match(), com a flag g
// console.log(umaString.match(/[a-z]/g));

// Função match(), sem a flag g
// console.log(umaString.match(/[a-z]/));

// Função search()
// console.log(umaString.search(/[a-z]/));

// Função search() buscando por letra especifica
// console.log(umaString.search(/x/));

// Função replace()
// console.log(umaString.replace('Um', 'Outra coisa'));

// Função replace() com expressões regulares
// console.log(umaString.replace(/Um/, 'Outra coisa'));


// Função replace() com expressões regulares e com uma string maior mas que substitui apenas a primeira letra.
// let umaStringMaior = 'O rato roeu a roupa do rei de roma';
// console.log(umaStringMaior.replace(/r/, '@'));

// Adicionando a flag g substitui todas as letras r
// let umaStringMaior = 'O rato roeu a roupa do rei de roma';
// console.log(umaStringMaior.replace(/r/g, '@'));

// Função .length retorna o tamanho da string
// let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
// console.log(umaStringMaior.length);

// Retorno do .length 0123456789 e do índice
// let umaStringMaior = 'O rato roe';
// console.log(umaStringMaior.length);


// Função slice()     0123456789
// let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
// console.log(umaStringMaior.slice(2, 6));


// Função slice() com negativos
let umaStringMaior = 'O rato roeu a roupa do rei de roma.';
console.log(umaStringMaior.length);
// console.log(umaStringMaior.length - 3);
// console.log(umaStringMaior.slice(-5));
// console.log(umaStringMaior.slice(32));

// console.log(umaStringMaior.slice(-5, umaStringMaior.length -1));

// Função substring
// console.log(umaStringMaior.substring(umaStringMaior.length -5));

// Função substring ignorando o final
// console.log(umaStringMaior.substring(umaStringMaior.length -5, umaStringMaior.length -1));

// Função split()
// console.log(umaStringMaior.split(" "));

// console.log(umaStringMaior.split("r"));


// console.log(umaStringMaior.split(" ", 3));

// Função toUpperCase()
// console.log(umaStringMaior.toUpperCase());


// Função toLowerCase()
// console.log(umaStringMaior.toLocaleLowerCase());
