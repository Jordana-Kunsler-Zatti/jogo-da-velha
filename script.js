
//Função para validar se foi digitado X ou O
function validaJogada(valor, num) {
  //um ternário simples para ver foi digitado X ou O
  valor.toUpperCase() === 'X' || valor.toUpperCase() === 'O'
    ? validaVencedor(valor.toUpperCase()) //se tiver certo chama a função que verfica algum possivel vencedor
    : (
      alert('Apenas X e O são permitidos'),
      document.getElementById(`bt-${num}`).value = '' //apenas limpa o campo que está com o valor errado
    );
}

//Função que verifica ser ouver um vencedor ou se deu empate
function validaVencedor(jogador) {

  //valor de todos os input's usados
  let b1 = document.getElementById('bt-1').value || 1;
  let b2 = document.getElementById('bt-2').value || 2;
  let b3 = document.getElementById('bt-3').value || 3;
  let b4 = document.getElementById('bt-4').value || 4;
  let b5 = document.getElementById('bt-5').value || 5;
  let b6 = document.getElementById('bt-6').value || 6;
  let b7 = document.getElementById('bt-7').value || 7;
  let b8 = document.getElementById('bt-8').value || 8;
  let b9 = document.getElementById('bt-9').value || 9;

  //os if's verificam as combinações para teve um vencedor ou deu empate
  if (b1 === b2 && b2 === b3) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b1 === b5 && b5 === b9) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b1 === b4 && b4 === b7) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b2 === b5 && b5 === b8) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b3 === b6 && b6 === b9) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b3 === b5 && b5 === b7) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b4 === b5 && b5 === b6) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (b7 === b8 && b8 === b9) {
    alert(`O jogador ${jogador} ganhou`);
    limpaTabuleiro();
  } else if (
    typeof b1 === 'string' && typeof b2 === 'string' &&
    typeof b3 === 'string' && typeof b4 === 'string' &&
    typeof b5 === 'string' && typeof b6 === 'string' &&
    typeof b7 === 'string' && typeof b8 === 'string' && typeof b9 === 'string') {
    alert('Deu velha');
    limpaTabuleiro();
  }
}

//Função que limpa tabuleiro com os valores já digitados
function limpaTabuleiro() {
  document.getElementById('bt-1').value = '';
  document.getElementById('bt-2').value = '';
  document.getElementById('bt-3').value = '';
  document.getElementById('bt-4').value = '';
  document.getElementById('bt-5').value = '';
  document.getElementById('bt-6').value = '';
  document.getElementById('bt-7').value = '';
  document.getElementById('bt-8').value = '';
  document.getElementById('bt-9').value = '';
}