// Escreva um algoritmo, que leia 2 números inteiros 
// o primeiro número deve ser menor do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.

const leia = require("readline-sync")

let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let numero2 = leia.questionInt("Digite o segundo numero do intervalo: ");

if (numero1 >= numero2) {
    console.log("Intervalo é invalido");
    return;
}  

let encontrou = false

for (let i = numero1; i <= numero2; i++) {
        if( i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
            encontrou = true;
        }
    }

if (!encontrou) {
    console.log("Nenhum numero desse intervalo e multiplo de 3 e 5.")
}
