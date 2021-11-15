// ## Atividade 2: This

// Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// 		this.idade + anos
// 	} anos de idade.`;
// }

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Thales',
    idade: 36,
};

const pessoa2 = {
    nome: 'Livia',
    idade: 37,
};

const pessoa3 = {
    nome: 'Bibi',
    idade: 23,
};

// Diferença de call para apply é a maneira como os argumetnos são enviados
// call são separados por vírgula e applu entre colchetes
console.log(calculaIdade.call(pessoa3, 21));
console.log(calculaIdade.apply(pessoa2, [12]));