const leia = require("readline-sync")

//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa 
//um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um 
// número e o programa deve exibir na tela a posição deste número no vetor. Caso o 
// número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

// 1- leia o numero no terminal
// 2- descubrir se este numero existe no vetor
// 3- falar em qual posição ta esse numero

const lista = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numero = leia.questionInt("Digite um numero: ");
let indexOF

console.log(lista.indexOf(numero));
