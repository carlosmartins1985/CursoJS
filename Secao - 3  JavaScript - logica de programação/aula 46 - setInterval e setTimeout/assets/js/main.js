function mostrarHora() {
    let hora = new Date();

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function (){
    clearInterval(timer)
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000)

// function funcaoDoInterval() {
//     console.log(mostrarHora());
// }