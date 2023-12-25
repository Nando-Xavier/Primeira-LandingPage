const seta_esquerda = document.getElementById("seta-esquerda")
const seta_direita = document.getElementById("seta-direita")
const bruna = document.getElementById("bruna")
const leonardo = document.getElementById("leonardo")
const samantha = document.getElementById("samantha")

function rolarParaDireita() {
  leonardo.style = "display:none"
  bruna.style = "display:flex"
  seta_esquerda.style = "display:flex"
  seta_direita.style = "display:none"
  
}

function rolarParaEsquerda() {
  leonardo.style = "display:flex"
  bruna.style = "display:none"
  seta_esquerda.style = "display:none"
  seta_direita.style = "display:flex"
  
}