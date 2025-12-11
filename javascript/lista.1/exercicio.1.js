// Desenvolva o algoritmo em JavaScript para entrada e saída de dados:
// Início -> Digite salário -> Leia salário -> Digite abono -> Leia abono ->
// Calcule novo salário -> Exiba novo salário -> Fim

const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

// Entrada e leitura do salário
salario = leia.questionFloat("Digite o valor do salario: ");

// Entrada e leitura do abono
abono = leia.questionFloat("Digite o valor do abono: ");

// Cálculo do novo salário
novoSalario = salario + abono;

// Saída
console.log(`Seu novo salário é: R$ ${novoSalario.toFixed(2)}`);

