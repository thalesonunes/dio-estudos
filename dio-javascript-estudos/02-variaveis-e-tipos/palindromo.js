// Thales O. Nunes

// Primeira solução
// Invertendo a string existente e comparando o resultado com a string original

function verificaPalindromo(string) {

    if (!string) return "String inexistente!"; // se não for uma string já sai da função

    console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('roma amor');


// Segunda Solução
// Dividindo a string ao meio e comparando as metades

function verificaPalindromo2(string) {

    if (!string) return "String inexistente!"; // se não for uma string já sai da função

    if (!string.length) return "String vazia!"; // se o tamanho da string for vazio, também sai da função

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }

    return console.log(true);
}

verificaPalindromo2('ovo');

