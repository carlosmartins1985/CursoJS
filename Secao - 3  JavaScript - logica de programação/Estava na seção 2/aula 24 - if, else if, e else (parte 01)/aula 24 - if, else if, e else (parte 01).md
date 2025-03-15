# Aula 24 - if, else if, e else (parte 01)

Nesta aula falaremos sobre as extruturas condicionais;

* if;

* else if;

* else

Usamos essas extruturas para desviar o fluxo da aplicação quando necessário.

Imginemos que possuímos um sistema que dependendo do horário ele diz bom dia para o usuário.

Se o horário for menor que 12:00pm, ele diz bom dia.

* Criamos um horário aleatório apenas para teste;

```js
const hora = 10;
```

E posteriormente fazemos a verificação, se a hora for menor que 12:00pm o sistema deverá enviar uma mensagem de bom dia ao usuário, caso contrário nada acontecerá.

* Então criamos nossa extrutura condicional, que irá verificar se a hora é menor que 12:00pm;

* Ele checa se a condição que está sendo verificada é verdadeira;

* Se a condição não for verdadeira, nada será exibido na tela.

* Poderíamos testar de 0:00am até 12:59:59, englobando todo o horário do meio-dia.

```js
const hora = 10;

if (hora < 12){
    console.log('Bom dia!!');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Bom dia!!

[Done] exited with code=0 in 0.201 seconds
```

Se o horário for exatamente igual a 12, já não será executado nada;

```js
const hora = 12;

if (hora < 12){
    console.log('Bom dia!!');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"

[Done] exited with code=0 in 0.158 seconds
```

* Se quisessemos o bloco do meio-dia, basta alterar para <=, para que seja verificada a igualdade também;

```js
const hora = 12;

if (hora <= 12){
    console.log('Bom dia!!');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Bom dia!!

[Done] exited with code=0 in 0.185 seconds
```

* Tudo o que estiver dentro do bloco if será executado se a condição for verdadeira;

* Se a condição retornar falso, o trecho de código não será executado.

```js
const hora = 12;

if (hora <= 12){
    console.log('Bom dia!!');
    console.log('Podemos ter qualquer coisa.');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Bom dia!!
Podemos ter qualquer coisa.

[Done] exited with code=0 in 0.2 seconds
```

Dessa maneira podemos criar um if.



***<u>else if</u>***

Imaginemos agora que demos um upgrade neste sistema, para que ele fale bom dia, boa tarde e boa noite, dependendo do horário.

E óbvio que iremos precisar de mais extruturas condicionais.

Então podemos encadear várias condições com o else if, para termos mais de uma condição para o nosso sistema.

Se o if não for executado, o js irá checar outra condição.

Então após o if criamos outra extrutura de condição a ser checada;

* Podemos ter várias vezes o else if, o quanto for necessário.

```js
const hora = 15;

if (hora <= 12){
    console.log('Bom dia!!');
} else if (hora > 12 && hora < 17){
    console.log('Boa tarde!');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Boa tarde!

[Done] exited with code=0 in 0.2 seconds
```

Para testarmos de uma forma mais correta, estabelecemos os horários a serem checados;

* Entre 0 - 11 Bom dia;

* Entre 12 - 17 Boa tarde;

* Entre 18 - 23 Boa noite

E assim ficaría nosso sistema;

```js
const hora = 23;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
}else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log(`${hora} não corresponde a um horário válido.`);
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Boa noite!

[Done] exited with code=0 in 0.278 seconds
```

Aqui verificamos;

* Os intervalos dos horários, todos os interválos existentes;

* Se a hora checada é válida, caso o sistema traga uma hora inválida, por exemplo, 50, por algum erro por exemplo.



Podemos ter apenas uma condição com if, na verdade duas, ou sim ou não, e depois indo direto para o else, sem passar pelo else if, pois é apenas uma condiconal;

* Se o valor for true, ele avalia verdadeiro e imprime o if;

* Se o valor for false, ou uma expressão que avalie em false, como NaN, ou undefined, etc, ele irá avaliar falso e irá cair no else.

```js
const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa.');
}

//Saída
[Running] node "/home/carlos/CursoJS/Secao 3:  JavaScript - logica de programação/aula 24 - if, else if, e else (parte 01)/index.js"
Não vou sair de casa.

[Done] exited with code=0 in 0.21 seconds
```



***<u>Conclusão</u>***

Concluímos que;

- O if pode ser usado sozinho no sistema, com a condição dele;

- O else/else if não podem ser executados sozinhos, sempre que utilizamos a palavra else, precisamos de um if antes, ou seja, sempre que tiver-mos a palavra else, existe um if antes dela;

- Podemos ter vários else if na checagem;

- E podemos ter apenas um else por último na condição, na checagem.

- Podemos usar condições sem usar condições sem o else if, caso seja necessário.

<mark>Não podemos executar um else if ou um else sem um if antes.</mark>


