rodada = 1
while (rodada <= 5) {
    console.log("Rodada: " + rodada)

    escolhaJogador = prompt("Nível " + rodada + " escolha piso 1, 2 ou 3")
    if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
        alert("Escolha inválida! Tente novamente.")
        continue
    }
    pisoQuebrado = Math.floor(Math.random() * 3) + 1

    if (escolhaJogador == pisoQuebrado) {
        alert("Você caiu no piso quebrado, você perdeu!")
        rodada = 1000
    } else {
        alert("Você passou para o próximo nível! O piso quebrado estava na ponte " + pisoQuebrado)
    }

    rodada = rodada + 1

    if (rodada == 6) {
        alert("Parabéns, você venceu o jogo!")
    }
}  
