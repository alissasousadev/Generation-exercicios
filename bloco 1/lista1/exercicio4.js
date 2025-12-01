const leia = require('readline-sync');

/*
Leia quatro valores (n1, n2, n3, n4). 
Calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.
*/

//Declarar variaveis
let n1;
let n2;
let n3;
let n4;

//Entrada de dados
n1 = leia.questionFloat("Digite o primeiro numero:")
n2 = leia.questionFloat("Digite o segundo numero:")
n3 = leia.questionFloat("Digite o terceiro numero:")
n4 = leia.questionFloat ("Digite o quarto numero:")

//Leitura de dados
let diferenca = (n1 * n2) - (n3 * n4)

//Saída
console.log("A diferença entre os produtos é: " + diferenca)