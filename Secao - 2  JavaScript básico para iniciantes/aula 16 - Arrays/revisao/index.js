/*      
        Podemos imaginar um Array como uma lista, uma coleção de coisas,
    por exemplo, se precisamos fazer uma lista de alunos podemos ter:

    const alunos = "João Maria José";

        Poderíamos representar assim, mas fica complexo de alterar os nomes dentro dessa variável.
    Sem contar que não conseguimos acessar cada um individualmente.
*/

/*
        Para criar um Array usamos a seguinte notação:

    const alunos = ['João', 'Maria', 'José'];

    Usamos o colchetes, e inserimos os itens separados por virgula.
*/

    const alunos = ['João', 'Maria', 'José'];

/*      
        Arrays devem, se possível, conter apenas um tipo de dado, 
    apesar de poder-mos colocar qualquer tipo de dado nos arrays, como boa 
    prática de programação, usaremos colcar apenas um tipo de dado nos Arrays.
*/

/*
        Exibindo o array

    console.log(alunos);

    [ 'João', 'Maria', 'José' ]
*/

/*
        Arrays, assim como strings são indexados, porém como elementos,
    por exemplo, João é um elemento do array alunos.
    Assim acessamos um elemento específico do array

    console.log(alunos[0]);
*/

        // Acessando o array completo
    console.log(alunos);

        // Acessando o primeiro elemento
    console.log(alunos[0]);

        // Acessaando o último elemento
    console.log(alunos[2]);

/*
        Editar um array;
    alunos[0] = 'Bruno';
    console.log(alunos);
*/

/*
        Podemos também criar um índice que não existe, da seguinte maneira
    
    alunos[4] = 'Roberto';

    Como o índice 4 não existe, ele cria o índice e adiciona o elemento.
        Porém dessa forma fica difícil saber qual é o último elemento do array,
    no caso de presisarmos adicionar um elemento ao final do array.
    
    console.log(alunos);
*/

/*
        Uma alternativa é o usar o .length, que verifica o
    tamanho do array e já adiciona o elemento ao final.

    alunos[alunos.length] = 'Bianca';
    alunos[alunos.length] = 'Débora';
    alunos[alunos.length] = 'Beatriz';
    console.log(alunos);
*/

// Podemos descobrir o tamanho do array
console.log(alunos.length);

/*
        Adicionar um elemento ao array usando a função push

    alunos.push('Carlos');
    console.log(alunos);
*/

/*
        Se precisamos adicionar um elemento no inicio do array,
    precisamos mover todos os elementos para a direita, usando a função 
    unshift.

    alunos.unshift('Leonardo'); //Adiciona no inicio
    alunos.unshift('Jorge'); // Adiciona no inicio
    console.log(alunos);
*/

/*
        Podemos também remover elementos do array usando a função pop,
    que remove o elemento do final do array

    alunos.pop(); 
c   onsole.log(alunos);
*/


/*
        Podemos salvar o elemento que foi removido em uma variável.
    const removido = alunos.pop();
    console.log(removido);
*/


/*
        Para remover um elemento do inicio, usamos a função shift.
    alunos.shift();
    const removido1 = alunos.shift();
    console.log(removido1);
*/

/*
        Podemos deletar um índice e o seu elemento, ficando com um espaço vazio no array.
    delete alunos[4];
    console.log(alunos[4]);
    console.log(alunos);
*/

/*
        Podemos acessar um índice que não existe, por exemplo 50, que nos retornará undefined.
    console.log(alunos[50]);
*/


/*
        Podemos fatiar o array usando o slice
    console.log(alunos.slice(0, 3));
*/

/*
        Podemos também usar números negativos para fatiar o array
    console.log(alunos.slice(0, -3));
*/


/*
        Um array em javascript é considerado um objeto, pois realmente trata-se de um objeto indexado.
    console.log(typeof alunos);
*/

/*
        Podemos confirmar que estamos trabalhando com um array usando o instance of
    console.log(alunos instanceof Array); // Retorna true or false

    const frutas = ['Banana', 'Pera', 'Abacate', 'Mamão'];
*/
