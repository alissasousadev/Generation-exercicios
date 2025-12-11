/*
inicializada com 10 valores inteiros.
solicitar ao usuário, que ele digite via teclado 1 número inteiro
caso ele seja encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import leia = require("readline-sync")

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numero = leia.questionInt("Digite o numero que voce deseja encontrar:");

if (numeros.has(numero)) {
    console.log(`O numero ${numero} foi encontrado!`)
} else {
    console.log(`O numero ${numero} não foi encontrado!`)
}