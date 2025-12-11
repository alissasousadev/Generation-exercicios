//Pedir que o usuário digite 5 cores e adicioná-las, uma a uma, a uma coleção (array) de string.
// Mostrar na tela todas as cores adicionadas (na ordem de entrada).
// Mostrar na tela todas as cores, ordenadas em ordem crescente.

import leia = require('readline-sync')

const listaCores: Array<string> = new Array<string>();

let cores: string;

for ( let i = 0; i < 5; i++){
    cores = leia.question("Digite suas cores: ");
     
    listaCores.push(cores)

}

console.log('Suas cores: ', listaCores)

console.log('Cores Ordenadas: ',listaCores.sort())