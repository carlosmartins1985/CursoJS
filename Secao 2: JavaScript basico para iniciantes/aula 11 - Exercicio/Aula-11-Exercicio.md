## Exercicio

- Utilizar o prompt para capturar num1 e num2 do usuário, sugerimos utilizar soma, pois é onde teremos mais problemas, pois teremos que converter essas variáveis para números.

- Inserir duas mensagens para o usuário, uma para cada número que será inserido;

- Criar uma const que receberá o resultado dessa operação, após convertidos.

- Exibir o resultado com um alert() para o usuário, com a seguinte mensagem;
  
  ```js
  "O resultado foi" + ${resultado}
  ```

\* <u>***Não pode ser concatenação, deve ser soma.***</u>

*<u>Código da resolução</u>*

```js
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

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

// Usando a interpolação
// alert(`A soma destes números é igual a ${resultado}.`);

// Usando aspas simples
alert('A soma destes números é igual a ' + resultado + '.'); 
```

- Podemos utilizar o console.log para capturar os números que o usuário digitou;
  
  O resultado será exibido no console do navegador;
  
  ![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2020-58-06.png?msec=1709082727469)

- Podemos verificar o tipo de retorno da variável com typeof;
  
  ![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2021-00-54.png?msec=1709082727469)

Para o alert preferêncialmente usar as templates strings.

- E usando as templates strings podemos fazer a expressão dentro das chaves, não sendo necessário nem mesmo criar outra variável para conter o resultado.
  
  ```js
  alert(`A soma destes números é igual a ${num1 + num2}.`);
  ```
  
  ![](file:///home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-26%2021-06-53.png?msec=1709082727529)

Porém podemos fazer isso em alguns casos, outros não, por exemplo em códigos mais complexos isso tende a complicar mais, então seria muito mais explicito criarmos uma variável de resultado e usala nas chaves.

Usando uma variável e colocando o resultado dentro das chaves torna o código mais explicito, isso facilita na hora de ler o código e resolver possíveis erros.
