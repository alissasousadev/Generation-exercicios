/*
ler dados de vários colaboradores até o usuário decidir parar (S/N).
Para cada colaborador, você vai ler:
- Idade
- Identidade de gênero (1 a 6)
- Tipo de pessoa desenvolvedora (1 a 4)

fazer um relatório:
- Pessoas desenvolvedoras Backend 
- Mulheres Cis + Trans que são Frontend
- Homens Cis + Trans Mobile maiores de 40
- Não Binários FullStack menores de 30
- Total de pessoas que responderam
- Média de idade 
*/

const leia = require("readline-sync");

let backend = 0
let mulheresFrontend = 0
let homensMob40 = 0
let nbFullstack30 = 0
let total = 0
let somaIdade = 0

let continuar = leia.question("Deseja cadastrar um novo colaborador? (S/N): ")

while (continuar === "S" || continuar === "s") {

    let idade = leia.questionInt("Digite a idade: ")

    let genero = leia.questionInt(`Digite a identidade de genero: (1 a 6)
        1 - Mulher Cis 
        2 - Homem Cis
        3 - Nao Binario
        4 - Mulher Trans
        5 - Homem Trans
        6 - Outros`)
    
    let dev = leia.questionInt(`Digite o tipo de pessoa desenvolvedora:
        1 - Backend
        2 - Frontend
        3 - Mobile
        4 - FullStack`);

    continuar = leia.question("Deseja cadastrar outro colaborador? (S/N): ")

    if (dev === 1) {
        backend++
    }
    
    if (( genero === 1 || genero === 4) && dev === 2) {
        mulheresFrontend ++
    }

    if ((genero === 2 || genero === 5) && dev === 3 && idade > 40) {
        homensMob40 ++
    }

    if (genero === 3 && dev === 4 && idade < 30){
        nbFullstack30 ++
    }

    total ++
    somaIdade += idade
}

console.log(`Total de pessoas que responderam: ${total}`)
console.log(`A média de idade é: ${(somaIdade / total).toFixed(2)}`)
console.log(`Pessoas desenvolvedoras Backend: ${backend}`)
console.log(`Mulheres Frontend: ${mulheresFrontend}`)
console.log(`Homens Mobile com mais de 40 anos: ${homensMob40}`)
console.log(`Pessoas Não-Binárias FullStack menores de 30: ${nbFullstack30}`)