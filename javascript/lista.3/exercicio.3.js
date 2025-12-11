/*
leia a idade de várias pessoas (números inteiros) - usando WHILE
mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o 
total de pessoas cuja idade, seja maior que 50 anos. 
A leitura dos dados deve ser finalizada ao digitar uma idade negativa. */

const leia = require("readline-sync")

let menor21 = 0
let maior50 = 0

let idade = leia.questionInt("Digite uma idade: ");

while (idade >= 0) {

    if (idade < 21) {
        menor21++
    }
    if (idade > 50) {
        maior50++
    }
    idade = leia.questionInt("Digite uma idade: ")
}

console.log(`Total de pessoas menor que 21 anos: ${menor21}`)
console.log(`Total de pessoas maior que 50 anos: ${maior50}`)
