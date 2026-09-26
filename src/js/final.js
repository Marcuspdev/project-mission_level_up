document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('final-music');
  const iconeAudio = document.getElementById('icone-audio');
  const btnAudio = document.querySelector('.btn-audio');

  // Ajusta o ícone inicial de acordo com o estado do áudio ao carregar
  if (audio && iconeAudio) {
    iconeAudio.textContent = audio.paused ? '🔇' : '🔊';
  }

  if (btnAudio) {
    btnAudio.addEventListener('click', alternarAudio);
  }
});

// Função para ligar/desligar o som
function alternarAudio() {
  const audio = document.getElementById('final-music');
  const iconeAudio = document.getElementById('icone-audio');

  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      if (iconeAudio) iconeAudio.textContent = '🔊';
    }).catch((erro) => {
      console.error("Erro ao tocar áudio:", erro);
    });
  } else {
    audio.pause();
    if (iconeAudio) iconeAudio.textContent = '🔇';
  }
}