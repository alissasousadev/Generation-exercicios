/*
leia 10 números inteiros e armazene em um vetor.
Mostre na tela: 
1 - Todos os elementos dos índices ímpares do vetor  
2 - Todos os elementos do vetor que são números pares 
3 - A Soma de todos os elementos do vetor 
4 - A Média de todos os elementos do vetor, armazenada em uma variável do tipo real 
*/

const leia = require("readline-sync")

let numeros = []

for (let i = 0; i < 10; i++) {
    let n = leia.questionInt("Digite um numero inteiro: ")
    numeros.push(n);
}

console.log("\nElementos dos índices ímpares:")
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 !== 0) {
    console.log(numeros[i]);
    }
}

console.log("\nNúmeros pares:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("\nSoma:", soma);
let media = soma / numeros.length;
console.log("Média:", media);
