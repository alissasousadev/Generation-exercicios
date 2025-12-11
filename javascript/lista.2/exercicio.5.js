//escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) 
// a quantidade comprada deste item (número inteiro). 
// mostre na tela o valor total da conta e o nome do produto que foi comprado

const leia = require("readline-sync")

let codigo = leia.questionInt("Digite o codigo do produto (1 a 6):");
let quantidade = leia.questionInt("Digite a quantidade desejada:");

//variaveis
let produto;
let preco;

//verificar o produto pelo codigo
switch(codigo) {
    case 1:
        produto = "Cachoro-quente";
        preco = 10.00
        break;
        
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de laranja";
        proco = 13.00;
        break;
    
        default:
            console.log('Codigo invalido! Digite um codigo entre 1 e 6.')
            process.exit();
}

let total = preco * quantidade;

console.log("\nProduto:" + produto);
console.log("Valor total: R$" + total.toFixed(2));
