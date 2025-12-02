const leia = require("readline-sync");

//um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6)
//Salário (número real);
//mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

let nome = leia.question('Digite o nome do colaborador: '); 
let cargoCodigo = leia.questionInt('Digite o codigo do cargo (1 a 6): ');
let salario = leia.questionInt('Digite o salario: ');

let cargo
let reajuste

switch(cargoCodigo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;
    case 5:
        cargo = "Estoquista"; 
        reajuste = 0.05;
        break;
    case 6:
        cargo = "Tecnico de TI"; 
        reajuste = 0.08;
        break;
    default:
        console.log("\nCodigo invalido! Digite um codigo entre 1 e 6.");
        process.exit();
}

let novoSalario = salario + (salario * reajuste);

console.log("Nome do colaborador: " + nome);
console.log("Cargo: " + cargo);
console.log("Salário: R$ " + novoSalario.toFixed(2));