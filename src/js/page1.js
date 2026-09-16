document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('meuVideo');
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnSom = document.getElementById('btnSom');
    const btnAvancar = document.getElementById('btnAvancar');
    
    const telaVideo = document.getElementById('tela-video');
    const secaoBoasVindas = document.getElementById('secao-boas-vindas');

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

    // Ação do Botão Pular
    if (btnAvancar && telaVideo && secaoBoasVindas) {
        btnAvancar.onclick = (e) => {
            e.stopPropagation();
            console.log("Botão pular clicado!");
            
            if (video) video.pause();

            // Esconde a tela do vídeo e mostra a de boas-vindas
            telaVideo.classList.add('escondido');
            telaVideo.style.display = 'none';

            secaoBoasVindas.classList.remove('escondido');
            secaoBoasVindas.style.display = 'flex';
        };
    } else {
        console.error("Erro: Um dos elementos da página não foi encontrado pelo ID.");
    }
});