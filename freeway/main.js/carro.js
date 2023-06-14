//variáveis
let xCarros = [600, 600, 600, 600, 600, 600];

let yCarros = [40, 96, 150, 210, 270, 318];

let velocidadeCarros = [2, 3, 2.5, 3.3, 5, 4.1];

let comprimentoCarro = 50;

let alturaCarro = 40;

//função de desenho
function mostraCarro() {
  for (i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//função de movimento
function movimentaCarro() {
  for (i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (i = 0; i < xCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }

  function passouTodaTela(xCarro) {
    return xCarro < -50;
  }
}
