//Ler 10 números do teclado
// Contar quantos são pares
// Contar quantos são ímpares
// Mostrar o total de pares e ímpares no final

const leia = require("readline-sync");

let pares = 0;
let impar = 0;

for (let i = 1; i <= 10; i++) {
    let numero = leia.questionInt(`Digite o ${i} numero:` );
    if (i % 2 === 0) {
        pares++;
    } else {
    impar ++;
}
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impar}`);
