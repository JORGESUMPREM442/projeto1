let númeroSecreto = exibirTextoNaTela();

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
      exibirTextoNaTela ('p' , 'Você descobriu o número secreto!');
    } else {
        if (chute > númeroSecreto) {
          exibirTextoNaTela('p' , 'O número secreto é menor');
        } {
          exibirTextoNaTela('p' , 'O número secreto é maior');
        }
    }
}

function gerarNúmeroAleatori() {
  return  parseInt(Math.random() * 10 + 1);
}