//variaveis ator
let yAtor = 366;

let xAtor = 100;

let colisao = false;

let pontuacao = 0;

//funções de desenho
function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

//função de movimento
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function voltaPosicaoInicialDoAtor() {
  if (yAtor < -20) {
    yAtor = 366;
  }
}

function verificarColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao == true) {
      colidiu();
      voltaPosicaoInicialDoAtor()
      if(pontuacao > 0){
        pontuacao -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(30);
  text(pontuacao, width / 5, 28);
}

function adicionarPontos(){
  if (yAtor < -17){
    pontuacao += 1;
  }
}