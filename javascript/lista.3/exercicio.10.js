/*
leia as notas de uma turma com 10 participantes, dos 4 bimestres de um ano. 
As 4 notas de cada participante serão armazenadas em uma linha de uma matriz de números reais, 
logo cada linha da matriz representará as notas de um participante. 
Em um vetor de números reais, armazene as médias de cada participante e exiba as médias de cada um na tela. 
*/

const leia = require("readline-sync")

let matriz = []

for (let i = 0; i <= 9; i++) {
    let linha = []
    console.log(`--- Notas do Aluno ${i + 1} ---`)

    for (let j = 0; j <= 3; j++) {
        let n = leia.questionFloat("Digite a nota do bimestre: ");
        linha.push(n);
    }
    
    matriz.push(linha);
}

console.clear()
console.log("--- TABELA DE NOTAS ---")
console.table(matriz)

let medias = []

for (let i = 0; i <= 9; i++) {
    let soma = 0;

    for (let j = 0; j <= 3; j++) {
        soma += matriz[i][j];
    }

    let mediaCalculada = soma / 4
    medias.push(mediaCalculada.toFixed(1));
}

console.log("\n---MÉDIAS FINAIS ---");
console.table(medias);

