# Aula 45 - Tratando e lançando erros (try, catch, finally)

    Continuando com tratamento de erros com tryCath.

* Temos o try, que é executado quando não há erros no código;

* O cath que é executado quando há erros no código;

* E o finaly, que será executado sempre.

```js
try {
    // Essa parte é executada quando não há erros.
} catch (error) {
    // Essa parte é executada quando há erros.
} finally {
    // Será executado sempre.
}
```

    No caso do finaly podemos ocultar, quando não precisamos que um código seja executado sempre.



    Para o uso do finaly, imaginemos que temos um arquivo, que deu erro durante sua manipulação;

    Assim ele iria direto para o cath, que é o que acontece se houver erro na execução, e no cath seria tratado o erro, e não fecharia o arquivo, não seria possível fechar esse arquivo no cath, pois uma parte do código seria executado no try e outra parte no cath.

    Pois se deixase-mos para fechar o arquivo no cath, estaríamos assumindo que o programa daria erro mesmo.

    Isso seria um bom uso do finaly, pois poderíamos fechar o arquivo aí, e dando erro ou não, o finaly sempre sería executado, sempre fechando o arquivo.

```js
try {
    console.log('Abri o arquivo.');
    console.log('Manuipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');
} catch (error) {
    // Essa parte é executada quando há erros.
} finally {
    console.log('Finaly. Eu sempre sou executado.');
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
Abri o arquivo.
Manuipulei o arquivo e gerou erro.
Fechei o arquivo.
Finaly. Eu sempre sou executado.

[Done] exited with code=0 in 0.101 seconds
```



    Inserindo um erro;

```js
try {
    console.log(a);
    console.log('Abri o arquivo.');
    console.log('Manuipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');
} catch (error) {
    console.log('Tratando o erro.');
    
} finally {
    console.log('Finaly. Eu sempre sou executado.');
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
Tratando o erro.
Finaly. Eu sempre sou executado.

[Done] exited with code=0 in 0.086 seconds
```



    Podemos ter outros try/cath dentro de um try/cath;

```js
try {
    // console.log(a);
    console.log('Abri o arquivo.');
    console.log('Manuipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');

    try{
        console.log(b);
    } catch(error) {
        console.log('Deu erro');
    } finally {
        console.log('Finally, executando também.');
        
    }

} catch (error) {
    console.log('Tratando o erro.');
    
} finally {
    console.log('Finaly. Eu sempre sou executado.');
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/tempCodeRunnerFile.js"
Abri o arquivo.
Manuipulei o arquivo e gerou erro.
Fechei o arquivo.
Deu erro
Finally, executando também.
Finaly. Eu sempre sou executado.

[Done] exited with code=0 in 0.116 seconds
```

    E os dois finallys serão executados.



    Criamos então uma função que irá retornar a hora atual.

    Dentro da função precisamos que a data seja um objeto do date;

    Como estamos dentro da função podemos checar invertido, assim não precisamos do else.

    Então checamos se a data não é uma instancia de date, será gerado um erro;

    Testamos apenas colocando um log dizendo não é.

```js
function retornaHora(data) {
    if(!(data instanceof Date)) {
        console.log('Não é uma instancia do Date.');
        
    }
}

retornaHora('qualquer')
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
Não é uma instancia do Date.

[Done] exited with code=0 in 0.141 seconds
```

    Só será instance do Date os objetos que criam a data.

    Se enviamos um new Date, já não será mostrado o erro;

```js
function retornaHora(data) {
    if(!(data instanceof Date)) {
        console.log('Não é uma instancia do Date.');
        
    }
}

retornaHora(new Date);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"

[Done] exited with code=0 in 0.107 seconds
```



    Então lançamos um erro, um throw, caso data não seja uma instancia de Date;



    Aqui modificamos o código para que, se acaso a data for enviada e não for uma instancia de Date, será gerado um erro;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }
}
```

    E se a data não for enviada, o próprio sistema irá gerar uma data válida.



```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {

    })
}

const hora = retornaHora();
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
21:08:49

[Done] exited with code=0 in 0.665 seconds
```

    Adicionamos um hour12, para converter a hora em formato 24 horas.

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false
    })
}

const hora = retornaHora();
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
21:11:25

[Done] exited with code=0 in 0.18 seconds
```

* Podemos alterar para ter dois digitos nos valores da hora;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const hora = retornaHora();
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
21:14:06

[Done] exited with code=0 in 0.153 seconds
```

* Enviamos uma data válida como teste;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const data = new Date('01-01-1970 21:55:06');

const hora = retornaHora(data);
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/tempCodeRunnerFile.js"
21:55:06

[Done] exited with code=0 in 0.207 seconds
```

Não gera erro e nos é retornado a hora.



* Se não mandarmos nada será retornado a hora atual;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const data = new Date('01-01-1970 21:55:06');

const hora = retornaHora();
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
21:19:41

[Done] exited with code=0 in 0.162 seconds
```

* E se mandamos algo que não seja uma data válida, nos é retornado o erro;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

const data = new Date('01-01-1970 21:55:06');

const hora = retornaHora();
console.log(hora);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js:4
        throw new TypeError('Esperando uma instancia de Date')
        ^

TypeError: Esperando uma instancia de Date
    at retornaHora (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js:4:15)
    at Object.<anonymous> (/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js:21:14)
    at Module._compile (node:internal/modules/cjs/loader:1480:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1564:10)
    at Module.load (node:internal/modules/cjs/loader:1287:32)
    at Module._load (node:internal/modules/cjs/loader:1103:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:168:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.1.0

[Done] exited with code=1 in 0.147 seconds
```



    Então agora usamos o try para tratar esse erro;

* Colocamos todo o código que pode gerar erro dentro do try;

* Dentro do cath apenas deixamos um comentário para tratar o erro;

* E em finally uma mensagem para o usuário;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try{
    const data = new Date('01-01-1970 21:55:06');

    const hora = retornaHora(11);
    console.log(hora);
} catch(erro) {
    // Tratar o erro.
} finally{
    console.log('Tenha um bom dia.');
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
Tenha um bom dia.

[Done] exited with code=0 in 0.151 seconds
```



    Se tiramos o erro temos a hora e a mensagem como retorno;

```js
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date')
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-Br', {
        hour12:  false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}

try{
    const data = new Date('01-01-1970 21:55:06');

    const hora = retornaHora();
    console.log(hora);
} catch(erro) {
    // Tratar o erro.
} finally{
    console.log('Tenha um bom dia.');
}
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 45 - Tratando e lançando erros (try, catch, finally)/assets/js/main.js"
21:26:16
Tenha um bom dia.

[Done] exited with code=0 in 0.188 seconds
```


