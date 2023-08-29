let verde="rgba(0,255,0,0.9)";
let verdeApagado="rgb(0,120,0)";
let amarelo="rgba(255,255,0,0.9)";
let amareloApagado="rgb(150,150,0)";
let vermelho="rgba(255,0,0,0.9)";
let vermelhoApagado="rgb(120,0,0)";
let tempo=0;

function setup(){
  createCanvas(600,600); 
}

function draw(){
  background(255);
  PS();
  switch(true){
    case tempo < 60:
      FaseAberto();
      tempo++;
      break;
    case tempo < 120:
      FaseAtencao()
      tempo++;
      break;
      case tempo < 200:
      FaseFechada();
      tempo++;
      break;
      default:
      tempo = 0;
  }
  
}

function FaseFechada(){
  S(verdeApagado, 325,280);
  S(amareloApagado, 325,230);
  S(vermelho, 325,180);
}

function FaseAberto(){
  S(verde, 325,280);
  S(amareloApagado, 325,230);
  S(vermelhoApagado, 325,180);
}

function FaseAtencao(){
  S(verdeApagado, 325,280);
  S(amarelo, 325,230);
  S(vermelhoApagado, 325,180);
}

function PS(){
  fill(0);
  stroke(220,220,2200);
  strokeWeight(1);
  rect(300,150,50,150,50,50,50,50);
}

function S(cor,x,y){
  fill(cor);
  ellipse(x,y,30,30);
}
 
