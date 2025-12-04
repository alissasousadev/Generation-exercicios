/*
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string.
organizar a retirada de livros de uma pilha. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
 */

const pilha = new Stack();
let opcao: number; 

do {
    console.log("************************************");
    console.log(" 1 - Adicionar um novo livro na pilha");
    console.log(" 2 - Listar todos os livros da pilha");
    console.log(" 3 - Retirar um livro da pilha");
    console.log(" 0 - Sair");
    console.log("************************************");

    opcao = leia.questionInt("Escolha a opção do menu: ");

    switch (opcao) {
        case 1:
            const livro = leia.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log(`${livro} foi adicionado ao topo da pilha.`);
            break

        case 2:
            pilha.print();
            break

        case 3:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia. Nenhum livro para retirar.");
            } else {
                const retirado = pilha.pop();
                console.log(`Livro retirado: ${retirado}`);
            }
            break

        case 0:
            console.log("Programa finalizado.");
            break

        default:
            console.log("Opção inválida! Escolha uma das opções do menu.");
    }
} while (opcao !== 0);

