var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');
var vencedorSelecionado = document.getElementById('vencedorSelecionado');
var jog1 = 1;
var jog2 = 3;
var jogas1 = 0;
var jogas2 = 0;
var verQuad = false;
var chek = 0;
var rd = 0;
mudarJogador('X');

function botao1(id) {
  jogas1 = id;
  if (verQuad == false) {
    jog1 = jogas1;
    mudarSimbolo();
  }
}
function botao2(id) {
  jogas2 = id;
  if (verQuad == false) {
    jog2 = jogas2;
  }
}

function mudarSimbolo() {
  if (jog1 == 1) {
    mudarJogador('X');
  } else {
    mudarJogador('*');
  }
}

//inicializa o jogo com o jogador x
//atualiza o jogador atual na interface do jogo
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolher(id) {
  //verificando o id pego
  //console.log(id);

  //nao jogar depois que ganhar
  if(vencedor!== null) {
    return;
  }

  verQuad = true;
  var quadrado = document.getElementById(id);
  //define o conteudo do quad com o simbolo do jogador atual ('X' ou 'O')

  //nao sobrepor o simbolo no quadrado com o simbolo (nao permite jogar um simbolo encima de outro no quadrado)
  if(quadrado.innerHTML !== '-') {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = 'black';
  começar()
  rd = rd + 1
  if (jog1 == 1 && jog2 == 3) {
    if(jogador==='X') {
      jogador = 'O';
    } else {
      jogador = 'X';
    }
  }
  if (jog1 == 2 && jog2 == 3) {
    if(jogador==='*') {
      jogador = 'O';
    } else {
      jogador = '*';
    }
  }
  if (jog1 == 1 && jog2 == 4) {
    if(jogador==='X') {
      jogador = '#';
    } else {
      jogador = 'X';
    }
  }
  if (jog1 == 2 && jog2 == 4) {
    if(jogador==='*') {
      jogador = '#';
    } else {
      jogador = '*';
    }
  }
  
//atualiza o elemento que exibe o jogador atual
mudarJogador(jogador);
  checaVencedor();
}

//verifica se ha um vencedor
function checaVencedor() {
  var quad1 = document.getElementById(1);
  var quad2 = document.getElementById(2);
  var quad3 = document.getElementById(3);
  var quad4 = document.getElementById(4);
  var quad5 = document.getElementById(5);
  var quad6 = document.getElementById(6);
  var quad7 = document.getElementById(7);
  var quad8 = document.getElementById(8);
  var quad9 = document.getElementById(9);
  
  //verifica todas as possiveis sequencias vencedoras e chama as funcoes para atualizar o jogo
  if(checaSequencia(quad1, quad2, quad3)) {
    mudarCor(quad1, quad2, quad3);
    mudarVenc(quad1);
    return;
  }

  if(checaSequencia(quad4, quad5, quad6)) {
    mudarCor(quad4, quad5, quad6);
    mudarVenc(quad4);
    return;
  }

  if(checaSequencia(quad7, quad8, quad9)) {
    mudarCor(quad7, quad8, quad9);
    mudarVenc(quad7);
    return;
  }

  if(checaSequencia(quad1, quad4, quad7)) {
    mudarCor(quad1, quad4, quad7);
    mudarVenc(quad1);
    return;
  }

  if(checaSequencia(quad2, quad5, quad8)) {
    mudarCor(quad2, quad5, quad8);
    mudarVenc(quad2);
    return;
  }

  if(checaSequencia(quad3, quad6, quad9)) {
    mudarCor(quad3, quad6, quad9);
    mudarVenc(quad3);
    return;
  }

  if(checaSequencia(quad1, quad5, quad9)) {
    mudarCor(quad1, quad5, quad9);
    mudarVenc(quad1);
    return;
  }

  if(checaSequencia(quad3, quad5, quad7)) {
    mudarCor(quad3, quad5, quad7);
    mudarVenc(quad3);
    return;
  }
  if (rd == 9 && quad1 !== '-' && quad2 !== '-' && quad3 !== '-' && quad4 !== '-' && quad5 !== '-' && quad6 !== '-' && quad7 !== '-' && quad8 !== '-' && quad9 !== '-') {
    vencedor = 'Empate!';
    vencedorSelecionado.innerHTML = vencedor;
    pausar()
  }
}

//atualiza o vencedor
function mudarVenc(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

//muda a cor dos quadrados
function mudarCor(quad1, quad2, quad3) {
  quad1.style.background = 'lightblue';
  quad2.style.background = 'lightblue';
  quad3.style.background = 'lightblue';
  pausar()
}

function checaSequencia(quad1, quad2, quad3) {
  var eIgual = false;

  if (quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML) {
    eIgual = true;
  }

  return eIgual;
}

var vencedorRoda1 = document.getElementById('vencedorRoda1');
var vencedorRoda2 = document.getElementById('vencedorRoda2');
var vencedorRoda3 = document.getElementById('vencedorRoda3');

function rodada(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorRoda1.innerHTML = vencedor;
}

//loop
function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = ' ';

  var i = 1;

  while(i <= 9) {
    var quadrado = document.getElementById(i);
    quadrado.style.backgroundColor = 'lightgray';
    quadrado.style.color = 'lightgray';
    quadrado.innerHTML = '-';
    i++;
  }
  if (jog1 == 1) {
    mudarJogador('X');
  } else {
    mudarJogador('*');
  }
  resetar();
  rd = 0;
  verQuad = false;
}


/*
function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = ' ';

  var quad1 = document.getElementById(1);
  quad1.style.backgroundColor = 'lightgray';
  quad1.style.color = 'lightgray';
  quad1.innerHTML = '-';
  
  var quad2 = document.getElementById(2);
  quad2.style.backgroundColor = 'lightgray';
  quad2.style.color = 'lightgray';
  quad2.innerHTML = '-';

  var quad3 = document.getElementById(3);
  quad3.style.backgroundColor = 'lightgray';
  quad3.style.color = 'lightgray';
  quad3.innerHTML = '-';

  var quad4 = document.getElementById(4);
  quad4.style.backgroundColor = 'lightgray';
  quad4.style.color = 'lightgray';
  quad4.innerHTML = '-';

  var quad5 = document.getElementById(5);
  quad5.style.backgroundColor = 'lightgray';
  quad5.style.color = 'lightgray';
  quad5.innerHTML = '-';

  var quad6 = document.getElementById(6);
  quad6.style.backgroundColor = 'lightgray';
  quad6.style.color = 'lightgray';
  quad6.innerHTML = '-';

  var quad7 = document.getElementById(7);
  quad7.style.backgroundColor = 'lightgray';
  quad7.style.color = 'lightgray';
  quad7.innerHTML = '-';

  var quad8 = document.getElementById(8);
  quad8.style.backgroundColor = 'lightgray';
  quad8.style.color = 'lightgray';
  quad8.innerHTML = '-';

  var quad9 = document.getElementById(9);
  quad9.style.backgroundColor = 'lightgray';
  quad9.style.color = 'lightgray';
  quad9.innerHTML = '-';

  mudarJogador('X');
}*/

//cronometro
"use strict";

var hora = 0;
var min = 0;
var seg = 0;
var mili = 0;
var a;

document.forma.começar.onclick = () => começar();
document.forma.pausar.onclick = () => pausar();
document.forma.resetar.onclick = () => resetar();

function começar() {
  pausar();
  a = setInterval(() => { tempo(); }, 10); //a cada 10 milissegundos é iniciado o setInterval
}
function pausar() {
  clearInterval(a); //limpa as informações da unção anterior para não icar varias funcoes funcionando ao mesmo tempo no background
}
function resetar() {
  hora = 0; 
  min = 0;
  seg = 0;
  mili = 0;

  document.getElementById('hora').innerText = '00';
  document.getElementById('min').innerText = '00';
  document.getElementById('seg').innerText = '00';
  document.getElementById('mili').innerText = '000';
}
function tempo() {
  if((mili += 10 ) == 1000) {
    mili = 0;
    seg++;
    document.getElementById('seg').innerText = returnData(seg);
  }
  if(seg == 60) {
    seg = 0;
    min++;
  }
  if(min == 60) {
    min = 0;
    hora++;
  }
  document.getElementById('hora').innerText = returnData(hora);
  document.getElementById('min').innerText = returnData(min);
  document.getElementById('seg').innerText = returnData(seg);
  document.getElementById('mili').innerText = returnData(mili);
}
function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

//escolher simbolo 

