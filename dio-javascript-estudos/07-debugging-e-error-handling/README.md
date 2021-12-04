# Tratamento de Erros

Exercício realizado para aula "Tratamento de Erros" cursado na plataforma [Digital Innovation One](https://digitalinnovation.one/).

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)


# CONTEÚDO ABORDADO

## DEBUGGING E ERROR HANDLING

### Tipos de erros

#### EcmaScript Error - Tratamento de erros

São erros que acontecem em tempo de execução.

Exemplos: 
- quando alguma variavel não foi declarada 
- quando falta algum ponto-e-vírgula

Composto por: 
- Mensagem
- Nome
- Linha 
- Call Stack

#### DOM Exception

São erros relacionados ao Document Object Model (DOM).

Exemplos: 
- string com caractere inválido
- nó inserido em lugar indevido


## THROW E RETURN

No exemplo abaixo, ao utilizar a palavra reservada "throw" ao inves de return,
o retorno será o próprio erro ao invés de uma string, como acontece no return.
Assim é possivel utilizar as propriedades de um erro e tratá-lo

~~~javascript

function verificaPalindromo(string) {

    if (!string) throw "String inexistente!"; 
    
    console.log(string === string.split('').reverse().join(''));
}

verificaPalindromo('cat');

~~~

## TRY / CATCH

As declarações try...catch marcam um bloco de declarações para testar (try), 
e especifica uma resposta, caso uma exceção seja lançada.

Uma cláusula catch contém declarações que especificam
o que fazer caso uma exceção seja lançada no bloco try.

Assim é possivel tratar o erro de uma forma mais "personalizada".

#### Exemplo 01

~~~javascript

function verificaPalindromo(string) {

  if (!string) throw "String inexistente!"; 
  
  console.log(string === string.split('').reverse().join(''));
}

function tryCatchExemplo (string){
  try{
      verificaPalindromo(string);
  }
  catch(e){
      console.log(e);
  }
}

tryCatchExemplo('');

// retornará:
// String inválida

~~~
    

#### Exemplo 02

~~~javascript

function verificaPalindromo(string) {

    if (!string) throw "String inexistente!"; 
    
    console.log(string === string.split('').reverse().join(''));
}

function tryCatchExemplo (string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
}

tryCatchExemplo('');

// retornará:
// Uncaught String inválida

~~~


## FINALLY

A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch
porém antes das declarações seguintes ao try. Ela sempre é executada, 
independente se uma exceção for lançada ou capturada.

#### Exemplo 01:

~~~javascript

function verificaPalindromo(string) {

    if (!string) throw "String inexistente!"; 
    
    console.log(string === string.split('').reverse().join(''));
}

function tryCatchExemplo (string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
    finally{
        console.log('A string enviada foi: ' + string)
    }
}
~~~ 

## ERROR

~~~javascript 
tryCatchExemplo('');

// retornará:
// A string enviada foi:
// Uncaught String inválida
~~~    

#### Exemplo 02

~~~javascript

function verificaPalindromo(string) {

    if (!string) throw "String inexistente!"; 
    
    console.log(string === string.split('').reverse().join(''));
}

function tryCatchExemplo (string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
    finally{
        console.log('A string enviada foi: ' + string)
    }
}

tryCatchExemplo('ala');

// retornará:
// A string enviada foi: ala
// true

~~~


## O OBJETO ERROR

### Código

~~~javascript
new Error (message, fileName, lineNumber) // todos os parametros são opcionais

const MeuErro = new Error ('Mensagem inválida!');

throw MeuErro;
~~~


### Nomeando o Error

~~~javascript

const MeuErro = new Error ('Mensagem inválida!');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

~~~