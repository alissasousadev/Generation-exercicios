/*
inicializar com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro
caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! 
*/

import leia = require("readline-sync")

const listaNumeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numero = leia.questionInt("Digite o numero que deseja encontrar:")

let posição = -1

for (let i = 0; i < listaNumeros.length; i++){
    
    if (listaNumeros[i] === numero) {
        posição = i;
        break
    }
}

     if (posição === - 1){
        console.log("Numero não encontrado.")
    } else {
        console.log(`O numero ${numero} esta na posicao ${posição}.`)
    }