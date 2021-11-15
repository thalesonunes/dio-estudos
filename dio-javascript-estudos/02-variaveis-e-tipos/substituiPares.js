function substituirNumerosPares(array) {

    if (!array.length) return console.log("Array vazio");
    if (!array) return console.log("Este array não existe!");

    const naoZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++) {

        if (numPar(array[i]) && naoZero(array[i])) {
            console.log(`trocando ${array[i]} por 0...`);
            array[i] = 0;

        } else if (!naoZero(array[i])) {
            console.log('Eita, você já vale 0!');
        }
    }
    console.log(array);
}

substituirNumerosPares([2, 0, 3, 5, 22, 15, 3, 8]);
substituirNumerosPares([]);

var fruta = "banana";
var fruta = "üva";

console.log(fruta);