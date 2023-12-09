// Desafio Classificador de nível de Herói

// Constante para entrada via teclado
const entrada = require("prompt-sync")({sigint: true})

// Variável para a resposta do usuário se desejará classificar outro herói
let resposta = 'S' 

// Array para armazenar o nome e a experiência do Herói
let heroi = []

// Variárvel que armazenará o nome do nível de experiência (XP)
let xp

while (resposta === "S" || resposta === "s") {

    console.log()
    heroi[0] = entrada( "Insira o nome do Herói: " )
    heroi[1] = entrada( "Insira a experiência do Herói: " )
    
    console.log()

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
        xp = "Ascendente"
    } else if (heroi[1] >= 9001 && heroi[1] <= 10000) {
        xp = "Imortal"
    } else {
        xp = "Radiante"
    }

    // Mensagem de saída final
    console.log("O Herói de nome " + "**{" + heroi[0] + "}**" + " está no nível de " + "**{" + xp + "}**")

    console.log()

    resposta = entrada( "Deseja classificar outro Herói? (S/N)" )
}
