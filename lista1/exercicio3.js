const leia = require('readline-sync');

/*
Elabore um algoritmo em JavaScript que: 
 1.Leia o Salário Bruto
 2.Leia o Adicional Noturno
 3.Leia as Horas Extras
 4.Leia os Descontos
 5.Calcule o Salário Líquido
 6.Exiba o resultado ao usuário
*/

// Declara variáveis
let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

// Entrada de dados
salarioBruto = leia.questionFloat("Digite o Salario Bruto: ");
adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno: ");
horasExtras = leia.questionFloat("Digite a quantidade de Horas Extras: ");
descontos = leia.questionFloat("Digite o valor dos Descontos: ");

// Leitura dos dados
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Saída
console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2));

