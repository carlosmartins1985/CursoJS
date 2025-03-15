/**
        Valores primitivos e por referência

        * Valores primitivos - São os que já vimos, como;
    * string
    * number
    * null
    * boolen
    * undefined
    * bigint
    * symbol
    
        Valores de dados primitibos são imutáveis, isso quer dizer que não conseguimos mudar eles.

        Podemos confundir valores mutáveis com os valores que alteramos dentro das variáveis.
    Por exemplo;
    
    let nome = 'Carlos';
    nome = 'José';
    console.log(nome);

        Aqui notamos que alteramos o valor da variável nome, de Carlos para José.
        Mas é como se tivéssemos uma caixa, e dentro dela um adesivo com o nome Carlos,
    então o que  fazemos é retirar esse adesivo e colocar um adesivo com o nome José.
        Sabemos que strings assim como arrays são indexados, ou seja com índices, porém, como 
    as strings são valores imutáveis, não consguimos alterar seu valor, como fazemos alterando
    um valor em uma array;

    //          123456
    let nome = 'Carlos';
    nome[0] = 'B'; // Essa linha torna-se totalmente inútil
    console.log(nome[0]);

        Executando esse código ele não altera o valor do índice [0] para B, pois as strings 
    são imutáveis, diferentemente dos elementos de um array.
        Sendo assim vemos que esses dados primitivos são imutáveis, e quando falamos dados estamos 
    nos referindo ao valor da variável, não a variável em si.

            Cópia dos dados primitivos

        Podemos fazer o seguite;

    let a = 'A';
    let b = a;
    console.log(a, b);

        Quando fazemos dessa maneira, estamos copiando o valor de a para b, fazendo uma cópia 
    da variável a para a variável b.
        Neste momento o valor de a e b são indenpendentes entre si, a não ser no primeiro momento
    que b pega o valor de a.
        Podemos até mesmo alterar o valor de a durante o ciclo do código, que mesmo assim o valor de b 
    não será alterado, pois ele recebeu uma cópia de a.
    
    let a = 'A';
    let b = a;
    console.log(a, b);

    a = 'C';

    console.log(a, b);

    // Saída
    A A
    C A

        Sempre que fizermos que uma variável é igual a outra, sempre será uma cópia quando esse dado 
    for primitivo.


                    Valores passados por referência
        São tipos de dados que são mutáveis, são eles;
    
    * Arrays
    * Objetos
    * Funções
    
        A grande diferênça é que quando temos um valor passado por referência, não é feita uma cópia 
    como no caso dos dados primitivos.
        O que acontece é que, no exemplo a seguir, a variável b passa a apontar para o mesmo lugar na memória
    que a aponta, ou seja, não copiamos o array a para a variável b, é b que passa a apontar para o mesmo local que a na 
    memória, e sendo assim, sempre que alteramos a, também alteramos b, pois b aponta para o mesmo local que a.

    let a = [1, 2, 3];
    let b = a;
    console.log(a, b);

        E como eles apontam para o mesmo local na memória, se alteramos b também alteramos a;

    let a = [1, 2, 3];
    let b = a;

    a.push(4); // Adicionamos o número 4 a partir de a
    b.push(5); // Adicionamos o número 5 a partir de b
    console.log(a, b);

    // As mudanças valeram para as duas variáveis;

    [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

    let a = [1, 2, 3];
    let b = a;

    a.push(4);
    b.push(5)
    console.log(a, b);
    b.pop();
    console.log(a, b);

        Podemos remover um elemento através de b também;
    // Sem a remoção
    [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
    // Com a remoção
    [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

        Então sempre que tiver-mos que uma variável recebe outra, vai depender
    do tipo de dado da variável que está sendo copiada para saber se será copiado ou 
    passado por referência.

    * Primitivos são copiados;
    * Referência são mutaveis, não são copiados.
    
        Podemos ter mais variáveis, e elas seguirão o mesmo padrão, por exemplo, podemos ter
    uma variável c que aponta para o mesmo local que b, ou a;

    let a = [1, 2, 3];
    let b = a;
    let c = b;

    a.push(4);
    b.push(5)

    console.log(a, b);

    b.pop();

    console.log(a, b);

    c.push('Carlos');

    console.log(`O valor de c = ${c}, valor de b = ${b}, valor de a = ${a}`);

    // Saída
    O valor de c = 1,2,3,4,Carlos, valor de b = 1,2,3,4,Carlos, valor de a = 1,2,3,4,Carlos


                Copiar o valor de a para b

        Se precisamos copiar o valor de a para b, podemos fazer assim;

    let a = [1, 2, 3];
    let b = [...a];

        Assim o valor de b passa ser totalmente indenpendente de a.

    let a = [1, 2, 3];
    let b = [...a];
    let c = b;

    a.push(4);
    b.push(5)

    console.log(a, b);

    b.pop();

    console.log(a, b);

    c.push('Carlos');

    console.log(`O valor de c = ${c}, valor de b = ${b}, valor de a = ${a}`);

    [ 1, 2, 3, 4 ] [ 1, 2, 3, 5 ]
    [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
    O valor de c = 1,2,3,Carlos, valor de b = 1,2,3,Carlos, valor de a = 1,2,3,4

        Notamos que o valor de c aponta para o mesmo local que b, então, sempre que alteramos 
    b, também alteramos c.

                Com Objetos
        
        Isso funciona da mesma forma com objetos.

    const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
    }

    const b = a;

    console.log(b);

    // Saída
    { nome: 'Carlos', sobrenome: 'Martins' }

    Aqui b terá o mesmo valor de a, e se alteramos a, b também será afetado;

    const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
    }

    a.nome = ['Pedro']; // Alteramos o valor nome

    const b = a;

    console.log(b);

    // Saída, b também muda, pois b aponta para o mesmo lugar na memória
    { nome: [ 'Pedro' ], sobrenome: 'Martins' }

        Se precisamos copiar o valor de a para b fazemos da mesma forma que com 
    arrays.
    
    const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
    }

    const b = {...a};

    a.nome = 'Pedro';

    console.log(a);
    console.log(b);

        Aqui o valor de b não será mais afetado por a;
    
    // Saída
    { nome: 'Pedro', sobrenome: 'Martins' }
    { nome: 'Carlos', sobrenome: 'Martins' }

    
    

 */

const a = {
    nome: 'Carlos',
    sobrenome: 'Martins'
}

const b = {...a};

a.nome = 'Pedro';

console.log(a);
console.log(b);




