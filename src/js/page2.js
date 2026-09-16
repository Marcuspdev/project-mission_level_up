document.addEventListener('DOMContentLoaded', () => {
    const btnJornada = document.getElementById('btn-jornada');
    const btnPlayJornada = document.getElementById('btn-play-jornada');
    const secaoBoasVindas = document.getElementById('secao-boas-vindas');
    const tela1 = document.getElementById('tela1'); // Próxima tela (Seleção de Avatares)

    function avançarParaAvatares() {
        if (secaoBoasVindas && tela1) {
            secaoBoasVindas.classList.add('escondido');
            tela1.classList.remove('escondido');
        }
    }

    if (btnJornada) btnJornada.onclick = avançarParaAvatares;
    if (btnPlayJornada) btnPlayJornada.onclick = avançarParaAvatares;
});