//Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária.
//O programa deverá ler o tipo da operação a ser realizada (número inteiro entre 1 e 3) 
// o valor a ser depositado ou sacado (somente nas opções 2 e 3). 
// Considere que um saque só pode ser realizado caso haja saldo suficiente. 
// Ao final de cada operação, exiba o novo Saldo na tela. 
// A variável saldo (número real), será inicializada com o valor de R$ 1000.00. 
// Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela "Operação Inválida!"

const leia = require("readline-sync")

let saldo = 1000.00;
let codigo = leia.questionInt(`Digite o numero da operacao:
    1 - Saldo
    2 - Saque
    3 - Deposito 
`);

switch(codigo){

    case 1:
        console.log(`Saldo: R$ 1000.00`)
        break;
    
    case 2:
        let saque = leia.questionInt(`Digite o valor do saque: `)
        if(saque > saldo){
            console.log("Saldo Insuficiente!")
        } else {
            let novoSaldo = saldo - saque;
            console.log(`Novo saldo: R$ ${novoSaldo.toFixed(2)}`);
    } 
    break;

    case 3:
        let deposito = leia.questionInt(`Digite o valor do deposito: `)
        let novoSaldo = saldo + deposito
        console.log(`O Novo saldo: R$ ${novoSaldo.toFixed(2)}`)
        break;
    
     default:
        console.log("\nCodigo invalido! Digite um codigo entre 1 e 3.");
        process.exit();
}
