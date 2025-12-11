/*
um vetor contendo 10 números inteiros não ordenados e não repetidos
pesquisar dados no vetor, onde o usuário irá digitar um número
o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.
1- leia o numero no terminal
2- descubrir se este numero existe no vetor
3- falar em qual posição ta esse numero
*/

const leia = require("readline-sync")

const lista = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numero = leia.questionInt("Digite o numero que deseja encontrar: ");

let posição = - 1

for (let i = 0; i < lista.length; i++) {
    
    if (lista[i] === numero) {
        posição = i;
        break
    }
}

    if (posição === - 1){
        console.log("Numero não encontrado.")
    } else {
        console.log(`O numero ${numero} esta na posicao ${posição}.`)
    }