document.addEventListener('DOMContentLoaded', () => {
    const btnJornada = document.getElementById('btn-jornada');
    const btnPlayJornada = document.getElementById('btn-play-jornada');
    const secaoBoasVindas = document.getElementById('secao-boas-vindas');
    const secaoAvatar = document.getElementById('choiceavatar'); // ID atualizado para corresponder ao HTML

    function avançarParaAvatares() {
        if (secaoBoasVindas && secaoAvatar) {
            secaoBoasVindas.classList.add('escondido');
            secaoAvatar.classList.remove('escondido');
        }
    }

    if (btnJornada) {
        btnJornada.addEventListener('click', avançarParaAvatares);
    }
    
    if (btnPlayJornada) {
        btnPlayJornada.addEventListener('click', avançarParaAvatares);
    }
});