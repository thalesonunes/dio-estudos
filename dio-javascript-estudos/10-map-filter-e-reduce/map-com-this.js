const laranja = {
	preco: 2,
};

const uva = {
	preco: 1.5,
};

function mapArray() {

	const juros = [1, 2, 3, 4, 5];

	return juros.map(function (item) {
		return item * this.preco;
	}, uva);
}

console.log(mapArray());

// retorna um novo array mas nao altera o original