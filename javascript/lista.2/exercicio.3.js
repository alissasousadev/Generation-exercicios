/*Para doar sangue é necessário:
- ter entre 18 e 69 anos. 
- Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. 
- leia via o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
- mostre na tela se o doador está Apto ou Não Apto para doar sangue.*/

const leia = require("readline-sync")

let nome = leia.question("Qual o seu nome? ");
let idade = leia.questionInt("Qual sua idade? ");
let resposta = leia.question("Ja fez doacao antes? (s/n): ");

let jaDoou = resposta.trim().toLowerCase().startsWith("s");

let apto;

if (idade < 18 || idade > 69) {
    apto = false;

} else if (idade >= 60 && !jaDoou) {
    apto = false;

} else {
    apto = true;
}

console.log("Status: " + (apto ? "APTO para doar" : "NÃO APTO para doar"));
