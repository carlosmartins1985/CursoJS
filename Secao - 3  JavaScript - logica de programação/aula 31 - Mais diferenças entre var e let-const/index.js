/* 
                    Mais algumas diferênças entre var let e const


        Vimos que o let não podemos redeclarar uma variável, por exemplo;

    let nome = 'Carlos';
    let nome = 'João';

        Mas com var é aceito a redeclaração;
    var nome = 'Carlos';
    var nome = 'João';


*/
const verdadeira = true;
/*
// Escopo global


let nome = 'Carlos'; //Criando
var nome2 = 'Pedro'; // Criando

    // Escopo de bloco
    if(verdadeira){
        // let nome = 'Márcio';
        // console.log(nome, nome2);
        let nome = 'Pedro';
        var nome2 = 'Rogério'; // Redeclarando
        // console.log(nome2);
        

        // Escopo de bloco
        if(verdadeira){
            // let nome = 'Pedro'
            var nome2 = 'Tiago'
            let nome = 'Luiza';
            // console.log(nome, nome2);

        }
    }
    console.log(nome, nome2);
    */
    

/*
                 Escopo de função

*/

// function falaOi(){
//     // var nome = 'Carlos';

//     if(verdadeira){
//         var sobrenome = 'Martins';
//         let nome = 'Pedro';
//     }
//     console.log(sobrenome);
// }

// falaOi();
// var sobrenome;

// sobrenome = 'Martins';
// console.log(sobrenome);

// console.log(sobrenome);


// let sobrenome = 'Martins';

console.log(teste());

function teste() {

}