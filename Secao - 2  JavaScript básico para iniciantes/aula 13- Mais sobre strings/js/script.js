const nomeUsuario = prompt("Digite seu nome completo.");

document.body.innerHTML += `O seu nome é <strong>${nomeUsuario}</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${nomeUsuario.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nomeUsuario.charAt(1)}</strong><br />`;
//(Usar letra que mais se repete)
document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? Índice <strong>${nomeUsuario.indexOf('a')}</strong>.<br />`;
document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? Índice <strong>${nomeUsuario.lastIndexOf('a')}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nomeUsuario.slice(-3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nomeUsuario.split(" ")}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeUsuario.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nomeUsuario.toLowerCase()}</strong> <br />`;


/**
    Resolução professor

    ** Adicionado strong em todas as respostas **

    document.body.innerHTML += `O seu nome é ${nomeUsuario}.<br>`;

    document.body.innerHTML += `Seu nome tem ${nomeUsuario.length} letras <br />`;

    Aqui podeos usar tanto o charAt quanto os colchetes, nomeUsuario[1]
    document.body.innerHTML += `A segunda letra do seu nome é: ${nomeUsuario.charAt(1)<br />`;

    //(Usar letra que mais se repete)
    document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nomeUsuario.indexOf('a')} <br />`;

    document.body.innerHTML += `Qual o último índice da a letra no seu nome? ${nomeUsuario.lastIndexOf('a')<br />`;

    document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeUsuario.slice(-3)}/>`;

    document.body.innerHTML += `As palavras do seu nome são: <br />`;

    document.body.innerHTML += `Seu nome com letras maiúsculas: <br />`;

    document.body.innerHTML += `Seu nome com letras minúsculas:  <br />`;

 */