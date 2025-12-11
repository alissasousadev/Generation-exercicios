/*
leia uma Matriz 3×3 de números inteiros e em seguida, 
mostre na tela: 
1 - Todos os elementos da Diagonal Principal 
2 - Todos os elementos da Diagonal Secundária 
3 - A Soma de todos os elementos da Diagonal Principal 
4 - A Soma de todos os elementos da Diagonal Secundária
*/

const leia = require("readline-sync")

let matriz = [];

for (let i = 0; i <= 2; i++) {
    let linha = []

    for (let j = 0; j <= 2; j++) {
        let n = leia.questionInt("Digite o numero: ");
        linha.push(n);
    }
    
    matriz.push(linha);
}

console.table(matriz);

let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    somaPrincipal += matriz[i][i];
    console.log(matriz[i][i]);
}

for ( let j = 0; j < 3; j++) {
    somaSecundaria += matriz[j][2 - j];
    console.log(matriz[j][2 - j])
}

console.log(`Soma de todos os elementos da Diagonal Principal: ${somaPrincipal}`)
console.log(`Soma de todos os elementos da Diagonal Secundária: ${somaSecundaria}`)



