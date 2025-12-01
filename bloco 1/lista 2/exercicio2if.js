const leia = require("readline-sync")

//Escreva um algoritmo que leia um número inteiro via teclado e 
// mostre na tela uma mensagem indicando se este número é par ou ímpar e 
// se o número é positivo ou negativo.


//leia o numero:
let numero = leia.questionInt("Digite um numero:");

//par ou impar
let parOuImpar = "";

if (numero % 2 === 0) {
    parOuImpar = "par";
} 
else {
    parOuImpar = "ímpar";
}

//positivo ou negativo
let posOuNeg = "";

if (numero > 0) {
    posOuNeg = "positivo";
} 
else if (numero < 0) {
    posOuNeg = "negativo";
} 
else {
    posOuNeg = "neutro";
}

console.log("O número " + numero + " é " + parOuImpar + " e " + posOuNeg + "!");