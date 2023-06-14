//imagens do jogo
let imagemDaEstrada;

let imagemDoAtor;

//função para alimentar a variavel de img
function preload(){
  imagemDaEstrada = loadImage("freeway/imagens/estrada.png");
  imagemDoAtor = loadImage("freeway/imagens/ator-1.png");
  imagemCarro = loadImage("freeway/imagens/carro-1.png");
  imagemCarro2 = loadImage("freeway/imagens/carro-2.png");
  imagemCarro3 = loadImage("freeway/imagens/carro-3.png")
  imagemCarros  = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
}
