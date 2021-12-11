function calculaSaldo(saldo, itens) {

    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros'; // verifica se todos os parametros existem

    const saldoAtual = itens.reduce((saldoAnterior, item) => saldoAnterior - item.preco, saldo); // subtrai o item ao valor inicial

    return `Seu saldo atual é de R$${saldoAtual}`;
}

lista = [{
        preco: 25,
        nome: 'arroz',
    },
    {
        preco: 18,
        nome: 'feijao',
    },
    {
        preco: 72,
        nome: 'queijo',
    },
    {
        preco: 29,
        nome: 'carne',
    },
];

saldo = 250;

console.log(calculaSaldo(saldo, lista));