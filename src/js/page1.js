// Aguarda o carregamento do HTML completo
window.addEventListener('load', () => {
    const video = document.getElementById('meuVideo');
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnSom = document.getElementById('btnSom');
    const btnAvancar = document.getElementById('btnAvancar');
    
    const telaVideo = document.getElementById('tela-video');
    const tela1 = document.getElementById('tela1');

    // Teste de conexão no console
    console.log("Script carregado com sucesso!");

    // Controlar Play/Pausa
    if (btnPlayPause && video) {
        btnPlayPause.onclick = () => {
            if (video.paused) {
                video.play();
                btnPlayPause.textContent = '⏸️ Pausar';
            } else {
                video.pause();
                btnPlayPause.textContent = '▶️ Reproduzir';
            }
        };
    }

    // Controlar Áudio
    if (btnSom && video) {
        btnSom.onclick = () => {
            if (video.muted) {
                video.muted = false;
                btnSom.textContent = '🔊 Som Ligado';
            } else {
                video.muted = true;
                btnSom.textContent = '🔇 Ativar Som';
            }
        };
    }

    // Pular Vídeo
    if (btnAvancar && telaVideo && tela1) {
        btnAvancar.onclick = () => {
            video.pause();
            telaVideo.classList.add('escondido');
            tela1.classList.remove('escondido');
        };
    }
});