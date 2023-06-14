//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2

//velocidade bolinha
let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;


//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete2 --oponente--
let xRaquete2 = 583;
let yRaquete2 = 150;
let velocidadeYOponente;

let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  
  movimentaMinhaRaquete();
  movimentaRaquete2();
  
  incluiPlacar();
  marcaPonto ();
  
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  
  
  
}  //FINAL FUNÇÃO 

    
  function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }  //FINAL FUNÇÃO 


  function movimentaBolinha(){
    xBolinha += velocidadeXbolinha;
    yBolinha += velocidadeYbolinha;
  }  //FINAL FUNÇÃO 
  
  function verificaColisaoBolinha(){
    
    if(xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXbolinha *= -1;
    }
    
      if(yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYbolinha *= -1;
      }
    }
  //FINAL FUNÇÃO 


    //desenhar raquete, colocando a função em drawn
  function mostraRaquete(x, y){
    rect(x, y, raqueteComprimento, raqueteAltura);
  }

  //Função para movimentar rqt
  function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    
    if (keyIsDown (DOWN_ARROW)){
      yRaquete += 10;
    }
  }



function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha,yBolinha, raio);
  
  if(colidiu){
    velocidadeXbolinha *= -1; 
    raquetada.play();
  }
}

function movimentaRaquete2(){
    if(keyIsDown(87)){
      yRaquete2 -= 10;
    }
    
    if (keyIsDown (83)){
      yRaquete2 += 10;
    }
  }



function incluiPlacar(){
  stroke(255);
  textAlign (CENTER)
  textSize (16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0)); 
  rect(450, 10, 40, 20);
  fill(255);
  text (pontosOponente, 470, 26);
  
}

function marcaPonto(){
  if(xBolinha > 595){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 5){
    pontosOponente += 1;
    ponto.play();
  }
}
