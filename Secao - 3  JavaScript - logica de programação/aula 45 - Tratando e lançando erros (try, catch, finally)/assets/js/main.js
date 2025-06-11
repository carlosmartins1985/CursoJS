// Criamos uma função que retorna a hora atual
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
















/*
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
    */

/*
try {
    // Essa parte é executada quando não há erros.
} catch (error) {
    // Essa parte é executada quando há erros.
} finally {
    // Será executado sempre.
}
    */