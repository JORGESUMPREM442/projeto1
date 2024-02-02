let listaDeNúmerosSorteados = [];
let númeroLimite = 10 
let númeroSecreto = gerarNúmeroAleatori();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian portuguese female',{rate: 1.2});
}

function exibirMensagemInicials() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicials();

function verificarChute() {
    let chute = document.querySelector('input').value;  

    if (chute == númeroSecreto) {
      exibirTextoNaTela ('h1', 'Acerto!');
      let palvraTentativas = tentativas > 1 ? 'tentativas' : 'tentativas';
      let mensagemTentativas =  `Você descobriu o número secreto com ${tentativas} ${palvraTentativas}!`;
      exibirTextoNaTela ('p' , mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > númeroSecreto) {
          exibirTextoNaTela('p' , 'O número secreto é menor');
        } else {
          exibirTextoNaTela('p' , 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNúmeroAleatori() {
  let númeroEscolido = parseInt(Math.random() * númeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNúmerosSorteados.length;

  if (quantidadeDeElementosNaLista == númeroLimite) {
    listaDeNúmerosSorteados = [];
  }

  if (listaDeNúmerosSorteados.includes(númeroEscolido)) {
    return gerarNúmeroAleatori();
  } else {
    listaDeNúmerosSorteados.push(númeroEscolido)
    console.log(listaDeNúmerosSorteados)
    return númeroEscolido;
  } 
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '' ;
}

function reiniciarJogo() {
  númeroSecreto = gerarNúmeroAleatori();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicials();
  document.getElementById('reinicial'). setAttribute('disabled',true);
}