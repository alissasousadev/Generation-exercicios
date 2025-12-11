/*
O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
Adicione-os individualmente na Collection Set. 
Em seguida, faça o que se pede: Mostre na tela todos os elementos da Collection Set.
*/

import leia = require("readline-sync")

const listaNumeros: Set<number> = new Set<number>();

let numero: number

for (let i = 0; i < 10; i++) { 
    numero = leia.questionInt(`Digite o ${i + 1} numero: `)
    listaNumeros.add(numero)
}

console.log("\nListar dados do Set:");
console.table(listaNumeros);