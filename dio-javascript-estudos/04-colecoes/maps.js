// ## Atividade 1: Maps

// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// 1. Crie uma função `getAdmins` que recebe um `Map`;
// 2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// 3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.

const getAdmins = (map) => {

    // criando array que vai receber os admins
    let admins = [];

    // loop que irá percorrer o map
    // nessa sintaxe do "for of" é possível iterar com a chave e valor
    for ([key, value] of map) {

        // se valor é igual a "ADMIN"
        if (value === 'ADMIN') {

            // o valor da chave será colocado no array "admins"
            admins.push(key);
        }
    }

    // retornando o admins
    return admins;
};

// declarando um novo MAP
const userRoles = new Map();

// inserindo os dados no MAP
userRoles.set('Thales', 'SUDO');
userRoles.set('Livia', 'ADMIN');
userRoles.set('Shyrlei', 'ADMIN');
userRoles.set('Maria', 'USER');
userRoles.set('Dado', 'USER');

// imprimindo no console o MAP
console.log(getAdmins(userRoles));