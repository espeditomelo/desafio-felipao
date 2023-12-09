// Desafio Classificador de nível de Herói

// vetor que armazena na primeira posição "0" o nome do Herói e 
// na segunda posição "1" a sua quantidade de experiência (XP)
let heroi = ["jose", 8001];

// Variárvel que armazenará o nome do nível de experiência (XP)
let xp

// condicionais para definir o nível de experiência (XP) do Herói
if (heroi[1] <= 1000) {
    xp = "Ferro"
} else if (heroi[1] >= 1001 && heroi[1] <= 2000) {
    xp = "Bronze"
} else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
    xp = "Prata"
}else if (heroi[1] >= 6001 && heroi[1] <= 7000) {
    xp = "Ouro"
} else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
    xp = "Platina"
} else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
    xp = "Acendente"
} else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
    xp = "Imortal"
} else {
    xp = "Radiante"
}

// Mensagem de saída final
console.log("O Herói de nome " + "**{" + heroi[0] + "}**" + " está no nível de " + "**{" + xp + "}**")
