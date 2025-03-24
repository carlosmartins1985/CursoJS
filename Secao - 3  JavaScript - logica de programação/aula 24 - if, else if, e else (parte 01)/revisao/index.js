/**
            if, else if, else parte 01

        Para exemplificar criamos uma variável que conterá um horário.
        Bem simples, como se fosse 10hs da manhâ, e será verificado, se hora for menor que 12,
    o programa retorna bom dia;

    const hora = 10;

    if (hora <= 12) {
        console.log('Bom dia!!');
    }

        Verifica se a condição é verdadeira, se for, executa o trecho de código, se
    não, não executa nada.
        Temos o retorno, pois, a hora é menor ou igual a 12.
        Tudo que está dentro das chaves pertence ao bloco if correspondente.
        Se a condição avaliar falso, nada será executado.

        Alteramos para termos um programa mais completo.

    * Entre 0 - 11  => Bom dia.
    * Entre 12 - 17 => Boa tarde.
    * Entre 18 - 23 => Boa noite.
    
    if (hora >= 0 && hora <= 11) {
        console.log('Bom dia!!'); // Colocamos apenas o console.log, mas pode ser qualquer coisa.
    } else if (hora >= 12 && hora <= 17) {
        console.log('Boa tarde!!');
    } else if(hora >= 18 && hora <= 23){
        console.log('Boa noite!!');
    } else {
        console.log('Horário invalido.');
    
        Caso todos os if, if else, o else será executado.
    
        O else não pode ser executado sozinho, sempre que tiver o else, deverá ter o if antes.
        O else if pode ser criado quantos quisermos, podendo ser vários.
        E podemos ter apenas um else por último, na checagem final.

        Outro exemplo usando o true or false, checando se tenho grana ou não
    
    const tenhoGrana = true;

    if (tenhoGrana) {
        console.log('Vou sair de casa.');
    } else {
        console.log('Não vou sair de casa.');
    }

        Aqui com apenas duas condições, true ou false.
        Se retornar false, o else será executada.

        O if pode ser sozinho, e podemos ter apenas o if e o else, apenas os dois, pode ser usado.

        Podemos ter apenas um else sozinho, dentro de um bloco if else, que não terá condição,
    sendo apenas para escape do sistema, a saída, o opção padrão, caso nenhuma outra seja
    verdadeira.

}
 */
// const hora = 24;

// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia!!'); // Colocamos apenas o console.log, mas pode ser qualquer coisa.
// } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarde!!');
// } else if(hora >= 18 && hora <= 23){
//     console.log('Boa noite!!');
// } else {
//     console.log('Horário invalido.');
    
// }

const tenhoGrana = NaN;

if (tenhoGrana) {
    console.log('Vou sair de casa.');
} else {
    console.log('Não vou sair de casa.');
    
}