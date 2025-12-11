/*
Lê números inteiros, até que o número zero seja digitado. 
Mostrar a soma de todos os números digitados, que sejam positivos
*/

const leia = require("readline-sync")

let somaPositivos = 0;
let numero;

do {
    numero = leia.questionInt("Digite um numero inteiro ou 0 para sair: ");

    if (numero > 0) {
        somaPositivos += numero;
    }
} 
while (numero !== 0);
    console.log(`A soma dos números positivos digitados é: ${somaPositivos}`);