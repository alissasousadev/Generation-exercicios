/*
Leia números inteiros até que o número zero seja digitado. 
Mostre na tela a média de todos os números digitados, que sejam múltiplos de 3. 
*/

const leia = require("readline-sync")

let numero;
let soma3 = 0;
let multiplos3 = 0;

do {
    numero = leia.questionInt("Digite um numero inteiro ou 0 para sair:");
     
    if (numero % 3 === 0 && numero !== 0) {
        soma3 += numero;
        multiplos3++;
     }   
} while (numero !== 0);

if (multiplos3 > 0) {
        let media = soma3 / multiplos3;
    console.log(`A média dos números múltiplos de 3 é: ${media}`);
} 
else {
    console.log("Nenhum número múltiplo de 3 foi digitado.");
}