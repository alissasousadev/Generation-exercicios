// Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal
// que deve ser lido da esquerda para a direita. 

const leia = require("readline-sync");

// PRIMEIRA PERGUNTA    
let tipo1 = leia.question("Escolha: vertebrado ou invertebrado? ");

let tipo2;
let tipo3;

// VERTEBRADO
if (tipo1 === "vertebrado") {
    tipo2 = leia.question("Escolha: ave ou mamifero? ");

    if (tipo2 === "ave") {
        tipo3 = leia.question("Escolha: carnivoro ou onivoro? ");

        if (tipo3 === "carnivoro") {
            console.log("Animal: Aguia");
        } else if (tipo3 === "onivoro") {
            console.log("Animal: Pomba");
        }

    } else if (tipo2 === "mamifero") {
        tipo3 = leia.question("Escolha: onivoro ou herbivoro? ");

        if (tipo3 === "onivoro") {
            console.log("Animal: Homem");
        } else if (tipo3 === "herbivoro") {
            console.log("Animal: Vaca");
        }
    }

// INVERTEBRADO
} else if (tipo1 === "invertebrado") {
    tipo2 = leia.question("Escolha: inseto ou anelideo? ");

    if (tipo2 === "inseto") {
        tipo3 = leia.question("Escolha: hematofago ou herbivoro? ");

        if (tipo3 === "hematofago") {
            console.log("Animal: Pulga");
        } else if (tipo3 === "herbivoro") {
            console.log("Animal: Lagarta");
        }

    } else if (tipo2 === "anelideo") {
        tipo3 = leia.question("Escolha: hematofago ou onivoro? ");

        if (tipo3 === "hematofago") {
            console.log("Animal: Sanguessuga");
        } else if (tipo3 === "onivoro") {
            console.log("Animal: Minhoca");
        }
    }

} else {
    console.log("Primeira opção inválida.");
}
