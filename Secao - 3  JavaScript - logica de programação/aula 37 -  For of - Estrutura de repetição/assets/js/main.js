const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins'
}
for (let key in pessoa) {
    console.log(key, pessoa[key]); 
}

//            123456789...
// const nome = 'Carlos Martins';

// const nome = ['Carlos', 'Pedro', 'João']

// Usando o for each
// nome.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// })

/**
console.log('####Usando o for of');

for ( let valor of nome){
    console.log(valor);
}

console.log('####Usando o for in');

//Usando o for in
for (let i in nome){
    console.log(nome[i]); 
}

console.log('####Usando o for classico');

//Usando o for classico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
**/