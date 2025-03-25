/**
            Continuação extrutura condicinal if else
        
        Estamos usando números por ser mais fácil de se entender, porém poderia ser 
    qualquer tipo de dado.

    * Testamos se o número é maior ou igual a zero;

    const numero = 10;

    if(numero >= 0) {
        console.log('Sim, o número é maior ou igual a zero.');
        
    }

    Se o número fosse -1 nada sería exibido;

    const numero = -1;

    if(numero >= 0) {
        console.log('Sim, o número é maior ou igual a zero.');
    }

        Podemos ter um range de comparação, verificar se o número está entre uma sequência de números,
    por exemplo entre 0 e 5;

    const numero = 5;

    if(numero >= 0 && numero <= 5) {
        console.log('O número está entre zero e cinco.');
    }

        Podemos adicionar um else que irá retornar uma msg caso o número não esteja no range 
    verificado.

    const numero = 10;

    if(numero >= 0 && numero <= 5) {
        console.log('O número está entre zero e cinco.');   
    } else {
        console.log('O número NÃO está entre zero e cinco.'); 
    }

        Notamos que existe uma depêndencia entre o if e o else, por exemplo, podemos ter um log fora 
    das chaves do if, que nada terá a ver com a extrutura de comparação;

    const numero = 10;

    if(numero >= 0 && numero <= 5) {
        console.log('O número está entre zero e cinco.');   
    } 

    console.log('O número não está entre zero e cinco.'); // Esta linha não tem nada a ver com o if, e será executada independente do resultado da comparção.

    * Se a condição for verdadeira o if será executado, caso contrário o else será executado.

        Se precisamos checar mais de uma condição usamos o else if.
        Os blocos do if e else, isso logo após as chaves, não usam (;) ponto e vírgula, somente
    o código dentro das chaves, dentro da extrutura.

        Aqui comparamos várias situações, e assim que o js encontra uma condição verdadeira, ela executa o código
    que está dentro dessa extrutura, e sai do programa, e nada mais será executado.

        Por exemplo, no código a seguir adicionamos uma checagem literal ao código, que também retorna 
    verdadeira, e isso fará nosso código ser totalmente destruído, pois assim que o js encontrar essa 
    verificação literal, o código será interrompido e será retornada essa condição, que nada tem a ver com 
    a extrutura correta.

        O js verifica da esquerda para a direita e de cima para baixo, até encontrar uma condição verdadeira.


    const numero = 10;

    if(numero >= 0 && numero <= 5) {
        console.log('O número está entre 0 e 5.');   
    } else if (numero >= 6 && numero <= 8){
        console.log('O número está entre 6 e 8.'); 
    } else if (1 === 1){
        console.log('Literal'); 
    } else if (numero >= 9 && numero <= 11){
        console.log('O número está entre 9 e 11');
    } else {
        console.log('O número não está enter 0 e 11.');
    }


        Podemos ter várias extruturas if dentro do código;

    const numero = 10;

    if (1 === 1){
        console.log('Literal'); 
    }

    if(numero >= 0 && numero <= 5) {
        console.log('O número está entre 0 e 5.');   
    } else if (numero >= 6 && numero <= 8){
        console.log('O número está entre 6 e 8.'); 
    } else if (numero >= 9 && numero <= 11){
        console.log('O número está entre 9 e 11');
    } else {
        console.log('O número não está enter 0 e 11.');
    }

        Retiramos o if literal e colocamos fora do encadeamento do if else númerico.

        Se precisamos checar um if independente, criamos um if para esse propósito

 */

const numero = 10;

if (1 === 1){
    console.log('Literal'); 
}

if(numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');   
} else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8.'); 
} else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está enter 0 e 11.');
}

console.log('...Aqui vai o restante do código');
