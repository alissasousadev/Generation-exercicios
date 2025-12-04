/* organizar uma fila por ordem de chegada dos Clientes de um Banco. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
 */

import leia = require('readline-sync')

let opcao
do {
    console.log('**********************************');
    console.log('1 - Adicionar na fila');
    console.log('2 - Mostrar a fila');
    console.log('3 - Remover da fila');
    console.log('0 - Sair');
    console.log('**********************************');
    
    opcao = leia.questionInt('Escolha a opcao do menu acima:')

    switch(opcao) {
        
        case 1:
        console.log('Adicionando na fila');
        break 

        case 2:
            console.log('Mostrando a lista:');
            break
        
        case 3:
            console.log('Removendo da lista');
            break

        case 0:
            console.log('Finalizando o programa');
            break
        
        default:
            console.log('Escolha uma das opções acima')
    }
} while(opcao !== 0)