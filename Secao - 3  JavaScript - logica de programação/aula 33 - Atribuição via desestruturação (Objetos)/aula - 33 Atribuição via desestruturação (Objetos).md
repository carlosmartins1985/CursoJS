# Aula 33 - Atribuição via desestruturação (Objetos)



Criamos um objeto básico como exemplo;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}
console.log(pessoa);
```

* Para o endereco inserimos outro objeto, então temos um objeto dentro de outro objeto.

Podemos pegar somente o nome da pessoa usando a notação de ponto;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}
console.log(pessoa.nome);
```

Saída;

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos

[Done] exited with code=0 in 0.089 seconds
```

Podemos também usar uma variável, que irá receber esse valor;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}
const nome = pessoa.nome; // Isso seria uma atribuição normal.
console.log(nome);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos

[Done] exited with code=0 in 0.083 seconds
```



Podemos então usar a atribuição por desestruturação, usando as chaves;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { nome } = pessoa;

// const nome = pessoa.nome; Atribuição normal
console.log(nome);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos

[Done] exited with code=0 in 0.091 seconds
```

Como o nome na variável, dentro das chaves, é o mesmo nome que está no objeto, ele faz a atribuição.

Assim podemos criar várias variáveis dentro dessa única variável, que será atribuida a elas o valor correspondente que está no objeto;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { nome, sobrenome, peso } = pessoa;

// const nome = pessoa.nome; Atribuição normal
console.log(nome, sobrenome, peso);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos Martins undefined

[Done] exited with code=0 in 0.078 seconds
```

E se algum valor não é encontrado nos é retornado undefined, como no caso de peso.

Podemos então setar um valor padrão caso a variável não exista;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { nome, sobrenome } = pessoa;

// const nome = pessoa.nome; Atribuição normal
console.log(nome, sobrenome, peso = 'Peso não existe.');
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos Martins Peso não existe.

[Done] exited with code=0 in 0.068 seconds
```

Podemos deixar um valor vazio, só para que não retorne undefined, e se o valor existir no objeto, o vazio será ignorado e assumido o valor do objeto;



<mark>
<mark>Na verdade não podemos mais, erro de const variável.
</mark>

Podemos inserir a chave, o nome da chave, e indicar outro nome para a variável de desestruturação;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { nome: teste, sobrenome } = pessoa;
l
console.log(teste, sobrenome);
```

```bash
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { nome: teste, sobrenome } = pessoa;

// const { nome, sobrenome} = pessoa;

// const nome = pessoa.nome; Atribuição normal
console.log(teste, sobrenome);
```

Assim podemos nomear as variáveis da desestruturação como quisermos.



Podemos pegar o objeto endereco, que está dentro deste objeto;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { endereco: { rua, numero} } = pessoa
console.log(rua, numero);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Rudolfo Walter 1223

[Done] exited with code=0 in 0.067 seconds
```

Podemos pegar o objeto completo também;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const { endereco: { rua, numero}, endereco} = pessoa
console.log(rua, numero, endereco);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Rudolfo Walter 1223 { rua: 'Rudolfo Walter', numero: 1223 }

[Done] exited with code=0 in 0.06 seconds
```

Podemos nomear essas variáveis da mesma forma que na anterior, e inclusive atribuir um valor padrão, caso não carregue ou não exista esse valor no objeto;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const {endereco: {rua: r, numero: n} } = pessoa;
const {endereco: {rua: r = '', numero: n} } = pessoa; // Atribuindo um valor padrão a rua.
console.log(r, n);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Rudolfo Walter 1223

[Done] exited with code=0 in 0.063 seconds
```

Podemos usar também o operador de rest para pegar o restante do objeto que não for usado;

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const {nome: nome, ...resto} = pessoa;
console.log(nome, resto);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos {
  sobrenome: 'Martins',
  idade: 39,
  peso: 80,
  endereco: { rua: 'Rudolfo Walter', numero: 1223 }
}

[Done] exited with code=0 in 0.067 seconds
```

Assim temos o nome em uma string separada, e o restante do objeto na variável resto.

E cada variável/valor que adiconarmos, será retirada do resto e adicionada a variável correspondente.

```js
const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Martins',
    idade: 39,
    peso: 80,
    endereco: {
        rua: 'Rudolfo Walter',
        numero: 1223
    }
}

const {nome: nome, sobrenome: sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);
```

```bash
[Running] node "/media/carlos/18471553-e140-4dcc-8a7b-f3f7d7d76d40/bkp Linux/CursoJS/Secao - 3  JavaScript - logica de programação/aula 33 - Atribuição via desestruturação (Objetos)/index.js"
Carlos Martins {
  idade: 39,
  peso: 80,
  endereco: { rua: 'Rudolfo Walter', numero: 1223 }
}

[Done] exited with code=0 in 0.094 seconds
```

Agora temos nome e sobrenome separados, e o restante do objeto na variável resto.
