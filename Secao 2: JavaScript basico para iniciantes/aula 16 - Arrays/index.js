
// Arrays são indexados por elementos
//      índices    0       1          2 
// const alunos = ['Luiz', 'Maria', 'Eduardo']

// Podemos colocar qualquer tipo de dados nos arrays. Arrays são indexados como as strings, porém por elementos
// const alunos = ['Luiz', 'Maria', 'Eduardo', 1, 2, true, null]

// Acessar um índice especifico
// console.log(alunos[2]);

// Mostrara todo o array
// console.log(alunos);

// Editar um array
// alunos[0] = 'Ricardo';
// console.log(alunos[0]);
// console.log(alunos);

// Adicionar elementos aos arrays
// alunos[3] = 'Monica';
// console.log(alunos);

// Descobrir o tamanho do array
// console.log(alunos.length);

// Adicionar elementos ao array de forma automática
// alunos[alunos.length] = 'Marcos';
// alunos[alunos.length] = 'Silmara';
// alunos[alunos.length] = 'Matilde';
// alunos[alunos.length] = 'Claudio';
// console.log(alunos);

// Usando a função .push() para adicionar elementos no fim do array
// alunos.push('Miranda');
// alunos.push('Carla');
// console.log(alunos);

// Função unshift para adicionar elementos no inicio do array
// alunos.unshift('Lacraio');
// alunos.unshift('Muso');
// alunos.unshift('Italiano');
// console.log(alunos);

// Função pop() remover elementos do final array
// console.log(alunos);
// alunos.pop();
// console.log(alunos);

// Salvando o elemento que foi removido do final array
// console.log(alunos);
// const removido = alunos.pop();
// console.log(removido);
// console.log(alunos);

// Removendo elemento do inicio do array
// console.log(alunos);
// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);

// Delete, exclui o conteúdo do índice mas não exclui o índice
// console.log(alunos);
// delete alunos[1];
// console.log(alunos);
// console.log(alunos[1]);

// Acessando índices que não existem
// console.log(alunos[50]);

// split(), fatiar o array
// alunos.push('Camila');
// alunos.push('Renata');
// console.log(alunos.slice(0, 3));

// Fatiar usando números negativos
// alunos.push('Camila');
// alunos.push('Renata');
// console.log(alunos);
// // console.log(alunos.slice(0, -1));
// console.log(alunos.slice(0, -2));

// typeof alunos, array retorna um object
// console.log(typeof alunos);

// Ter certeza de que estamos trabalhando com um array
let alunos = ['Luiz', 'Maria', 'Eduardo']
alunos = 123;
console.log(alunos instanceof Array);