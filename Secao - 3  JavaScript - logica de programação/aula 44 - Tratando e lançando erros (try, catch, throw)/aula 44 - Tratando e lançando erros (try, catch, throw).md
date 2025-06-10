# Aula 44 - Tratando e lançando erros (try, catch, throw)

    Nesta aula iremos aprender a lançar e tratar erros que aparecem no código.

    É importante sabermos onde ocorreu e como tratar os erros que nos aparecem na tela.

    Por exemplo, se tentamos imprimir uma variável que não existe, teremos um erro;

```js
console.log(naoExisto);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js"
/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js:4
console.log(naoExisto);
            ^

ReferenceError: naoExisto is not defined
    at Object.<anonymous> (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1480:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1564:10)
    at Module.load (node:internal/modules/cjs/loader:1287:32)
    at Module._load (node:internal/modules/cjs/loader:1103:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:168:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.1.0

[Done] exited with code=1 in 0.08 seconds
```

* Nos é retornado em que linha o erro ocorreu;

* Qual a referência do erro, ou seja, qual o erro ocorrido;



    Se sabemos que iremos executar um código potencialmente perigoso, como por exemplo, exibir/usar o valor de uma variável que não existe ainda, uma variável que não exista, e pode provocar um erro, podemos usar o try;

    Try - que significa tentar, ou seja, tente executar o código, e caso ocorra algum erro, irá cair em outro bloco, que é o catch, onde podemos nomear como quisermos, o parâmetro dentro do catch;

```js
try{
console.log(naoExisto);
} catch(err) {
    console.log('Variável não encontrada.');
    
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/tempCodeRunnerFile.js"
Variável não encontrada.

[Done] exited with code=0 in 0.087 seconds
```

* O try tenta executar o comando;

* Como a variável não existe, ele cai no bloco catch;

* O catch mostra a mensagem de erro que definimos para esse caso.

    

    Porém não é interessante que esponhamos os erros internos de nossos programas para o usuário final, pois, além de muitas vezes o usuário não entender do que se trata o erro, pode ser potêncialmente perigoso, pois estamos expondo coisas internas do nosso programa para fora dele.

    Assim temos o erro nesse arquivo de log, e podemos usa-lo como quisermos.

    Podemos mostrar para o usuário um erro desconhecido, tratar o erro, no caso, criar a variável, etc...

    Qualquer bloco de código que possa gerar um erro pode ser colocado dentro do try, e tratado com o catch.



    Também podemos lançar nossos própios erros, o que é bem interessante, por exemplo, para logarmos algum erro, para lanção algum erro para outro desenvolvedor ou para nós mesmos capturarmos esse erro depois.



    Podemos por exemplo ter  uma função que soma dois números, assim, os parâmetros da função devem ser numéricos;

```js
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números')
    }
    return x + y;
}
console.log(soma('b', 25));
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js"

/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js:3
        throw('x e y precisam ser números')
        ^
x e y precisam ser números
(Use `node --trace-uncaught ...` to show where the exception was thrown)

Node.js v22.1.0

[Done] exited with code=1 in 0.085 seconds
```

    Usando o throw é lançado nosso própio erro, onde;

* Indica a linha onde ocorreu o erro;

* E mostra o valor do erro, no caso, 'x e y  precisam ser números'.



    E como estamos lançando o nosso erro, também podemos trata-lo.

    Para isso voltamos ao  bloco try;

```js
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(1, 5);
    console.log(soma('b', 25));
} catch (error) {
    console.log(error);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/tempCodeRunnerFile.js"
1 5
x e y precisam ser números

[Done] exited with code=0 in 0.071 seconds
```

* Onde a primeira execução ocorreu tudo certo;

* Na segunda execução, ele nos traz o erro, o log que pusemos.

* Porém agora não temos a linha onde ocorreu o erro, nem a referência, nem o stack-trace;

    Isso porque lançamos uma string para tratar o erro.



    Para corrigir, poderíamos lançar um erro mesmo, para isso podemos usar uma função construtora do própio js, que é o new Error;

```js
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(1, 5);
    console.log(soma('b', 25));
} catch (error) {
    console.log(error);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/tempCodeRunnerFile.js"
1 5
Error: x e y precisam ser números
    at soma (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/tempCodeRunnerFile.js:3:15)
    at Object.<anonymous> (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/tempCodeRunnerFile.js:10:17)
    at Module._compile (node:internal/modules/cjs/loader:1480:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1564:10)
    at Module.load (node:internal/modules/cjs/loader:1287:32)
    at Module._load (node:internal/modules/cjs/loader:1103:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:168:12)
    at node:internal/main/run_main_module:30:49

[Done] exited with code=0 in 0.147 seconds
```

    Executando temos o erro completo, porém com a parte que pusemos no código, 

'x e y precisam ser números'.

    Ele mostra Error, porque estamos usando o Error, se usassemos ReferenceError, teríamos isso como retorno;

```js
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(1, 5);
    console.log(soma('b', 25));
} catch (error) {
    console.log(error);
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js"
1 5
ReferenceError: x e y precisam ser números
    at soma (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js:3:15)
    at Object.<anonymous> (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js:10:17)
    at Module._compile (node:internal/modules/cjs/loader:1480:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1564:10)
    at Module.load (node:internal/modules/cjs/loader:1287:32)
    at Module._load (node:internal/modules/cjs/loader:1103:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:168:12)
    at node:internal/main/run_main_module:30:49

[Done] exited with code=0 in 0.081 seconds
```

    Isso são classes de erro do js, e podemos também criar nossas própias.

    Não é uma boa idéia mostrar para o usuário esses erros, ao ínves disso podemos mandar uma msg amigável.

```js
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(1, 5);
    console.log(soma('b', 25));
} catch (error) {
    // Não enviar para o usuário
    // console.log(error);
    console.log('Mensagem para o usuário.');
    
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 44 - Tratando e lançando erros (try, catch, throw)/assets/js/main.js"
1 5
Mensagem para o usuário.

[Done] exited with code=0 in 0.129 seconds
```



* Aprendemos a lançar nossos erros com throw, onde podemos retornar uma string ou qualquer coisa.

* Temos várias opções de Erro que podemos lançar, e sempre irá mudar o retorno, onde geralmente fica o ReferenceError;

* E aprendemos a capturar esses erros com o catch.

* Se ocorrer algum erro dentro do bloco try, o bloco catch será executado;

* Se não houver nenhum erro, o bloco try será executado;
