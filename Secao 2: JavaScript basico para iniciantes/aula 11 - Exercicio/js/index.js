/**
 * Exercício
 * 
  - Utilizar o prompt para capturar num1 e num2 do usuário, sugerimos utilizar soma, pois é onde teremos mais problemas, pois teremos que converter essas variáveis para números.
  
  - Inserir duas mensagens para o usuário, uma para cada número que será inserido;
  
  - Criar uma const que receberá o resultado dessa operação, após convertidos.
  
  - Exibir o resultado com um alert() para o usuário, com a seguinte mensagem;
 */


let num1 = prompt('Digite um número.');
let num2 = prompt('Digite outro número.');

// Aqui mostramos os números digitador no console do navegador.
console.log(num1, num2);
// Verificando o tipo da variável
console.log(typeof num1, typeof num2);

num1 = Number(num1);
num2 = Number(num2);


// Criando uma variável que irá conter o resultado.
// const resultado = num1 + num2;

// Usando a interpolação e colocando a expressão dentro das chaves
alert(`A soma destes números é igual a ${num1 + num2}.`);

// Usando a interpolação e colocando o resultado dentro das chaves
// alert(`A soma destes números é igual a ${resultado}.`);

// Usando aspas simples, não muito usado
// alert('A soma destes números é igual a ' + resultado + '.');    