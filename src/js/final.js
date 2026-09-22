document.addEventListener('DOMContentLoaded', () => {
  const btnAudio = document.getElementById('btn-audio');

  if (btnAudio) {
    btnAudio.addEventListener('click', alternarAudio);
  }
});

// Função única para ligar/desligar o som
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