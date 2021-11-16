// ## Atividade 2: Sets

// Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.

function uniqueElements(array) {

    // declarando um novo set (obs.: que recebe valores únicos)
    // que recebe um array 
    let unique = new Set(array);

    // sintaxe spread - permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
    // nessa situação ao invés de colocar apenas o set dentro do array, coloca-se cada valor do mesmo.
    return [...unique];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));