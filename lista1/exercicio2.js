const leia = require('readline-sync');

//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante.

// Declara variáveis
let nota1;
let nota2;
let nota3;
let nota4;
let media;

// Entrada de dados
nota1 = leia.questionFloat("Digite a Nota 1: ");
nota2 = leia.questionFloat("Digite a Nota 2: ");
nota3 = leia.questionFloat("Digite a Nota 3: ");
nota4 = leia.questionFloat("Digite a Nota 4: ");

// Processamento
media = (nota1 + nota2 + nota3 + nota4) / 4;

// Saída
console.log("Média final do participante: " + media.toFixed(1));

