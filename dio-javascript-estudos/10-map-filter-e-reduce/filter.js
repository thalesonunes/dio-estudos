// FILTRAR TODOS OS NUMEROS PARES DE UM ARRAY

function filtraPares(arr) {
	if (!arr || !arr.length) return; // verifica se o array existe

	const arrayFiltrado = arr.filter((item) => item % 2 === 0);

	return arrayFiltrado;
}

console.log(filtraPares([2, 3, 4, 22, 27, 43, 58]));
