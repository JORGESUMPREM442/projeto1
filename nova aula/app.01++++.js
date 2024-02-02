let númeroSecreto = exibirTextoNaTela();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

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
  return  parseInt(Math.random() * 10 + 1);
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '' ;
}