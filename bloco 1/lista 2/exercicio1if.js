const leia = require("readline-sync")

//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
//imprima na tela se a soma de A + B é maior, menor ou igual a C.

let a
let b
let c

a = leia.questionInt('Digite o numero A: ');
b = leia.questionInt('Digite o numero B: ');
c = leia.questionInt('Digite o numero C: ');

let soma = a + b;
console.log('a + b = soma');

if (soma > c){
    console.log('A Soma de A + B é maior do que C');
}
else if (soma < c){
    console.log('A Soma de A + B é menor do que C');
}
else {
    console.log('A Soma de A + B é igual C');
}