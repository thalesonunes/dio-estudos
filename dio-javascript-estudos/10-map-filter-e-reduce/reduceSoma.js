// SOMAR TODOS O NUMEROS DE UM ARRAY

function somaNumeros(meuArray) {

	if (!meuArray || !meuArray.length) return; // verifica se o array existe

	const soma = meuArray.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);

	return soma;
}

console.log(somaNumeros([4, 8, 12, 1, 3, 89]));
