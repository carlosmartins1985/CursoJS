function random(min, max) {
        r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }
    
    const min = 10;
    const max = 50;
    let rand = 10;

    while (rand != 10){
    rand = random(min, max);
    console.log(rand);  
    }

    console.log('###############################3');
    
    do {
        rand = random(min, max);
        console.log(rand); 
    } while (rand != 10);

// function random(min, max) {
//     r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// const min = 10;
// const max = 50;
// let rand = random(min, max);
// // console.log(rand);

// while (rand != 10){
//     rand = random(min, max);
//     console.log(rand); 
// }



// const nome = 'Carlos Martins';
// let i = 0;

// while(i < nome.length) {
//     console.log(nome[i]);
//     i++
// }

// while (i <= 10) {
//     i++;
// }