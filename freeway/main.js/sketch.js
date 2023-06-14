//função setup "fundo"
function setup() {
  createCanvas(500, 400);
}

//função para desenhar na tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  voltaPosicaoInicialDoAtor();
  verificarColisao();
  incluiPontos();
  adicionarPontos();
}
