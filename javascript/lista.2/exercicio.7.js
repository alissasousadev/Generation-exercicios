// escreva um algoritmo que simule uma Calculadora simples. 
// ler dois números reais: numero1 e numero2, 
// e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
// A seguir, mostre na tela o resultado da operação entre os 2 números. 
// Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida! 

const leia = require("readline-sync")

let numero1 = leia.questionInt("Digite o primeiro numero: ")
let numero2 = leia.questionInt("Digite o segundo numero: ")
let codigo = leia.questionInt(`Digite o codigo da operacao: 
    1 para soma
    2 para subtracao
    3 para multiplicacao
    4 para divisao `)

let resultado;

switch(codigo) { 

    case 1:
        resultado = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${resultado}`);
        break;
    
    case 2:
        resultado = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${resultado}`);
        break;
    
    case 3:
        resultado = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${resultado}`);
        break;
    
    case 4:
        resultado = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${resultado}`)
        break;

    default:
        console.log("\nCodigo invalido! Digite um codigo entre 1 e 4.");
        process.exit();
}
