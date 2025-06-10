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



// try{
// console.log(naoExisto);
// } catch(err) {
//     console.log('Variável não encontrada.');
// }
