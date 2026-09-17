document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('meuVideo');
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnSom = document.getElementById('btnSom');
    const btnAvancar = document.getElementById('btnAvancar');
    
    const telaVideo = document.getElementById('tela-video');
    const secaoBoasVindas = document.getElementById('secao-boas-vindas');

    // Função para realizar a transição de tela
    function irParaProximaTela() {
        if (video) video.pause();

        if (telaVideo && secaoBoasVindas) {
            telaVideo.classList.add('escondido');
            telaVideo.style.display = 'none';

            secaoBoasVindas.classList.remove('escondido');
            secaoBoasVindas.style.display = 'flex';
        }
    }

    // 1. Quando o vídeo chegar ao fim naturalmente
    if (video) {
        video.onended = () => {
            irParaProximaTela();
        };
    }

    // 2. Clique no botão de pular vídeo
    if (btnAvancar) {
        btnAvancar.onclick = (e) => {
            e.stopPropagation();
            irParaProximaTela();
        };
    }

    // Controles de Play/Pausa
    if (btnPlayPause && video) {
        btnPlayPause.onclick = (e) => {
            e.stopPropagation();
            if (video.paused) {
                video.play();
                btnPlayPause.textContent = '⏸️ Pausar';
            } else {
                video.pause();
                btnPlayPause.textContent = '▶️ Reproduzir';
            }
        };
    }

    // Controles de Som
    if (btnSom && video) {
        btnSom.onclick = (e) => {
            e.stopPropagation();
            video.muted = !video.muted;
            btnSom.textContent = video.muted ? '🔇 Ativar Som' : '🔊 Som Ligado';
        };
    }
});