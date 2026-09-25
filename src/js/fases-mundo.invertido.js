document.addEventListener('DOMContentLoaded', () => {

    // Lógica do Quiz no final das páginas
    const quizButtons = document.querySelectorAll('.quiz-btn');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentOptions = button.parentElement;
            
            // Bloqueia múltiplas tentativas na mesma pergunta
            const siblings = parentOptions.querySelectorAll('.quiz-btn');
            siblings.forEach(sibling => {
                sibling.style.pointerEvents = 'none';
            });

            const isCorrect = button.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                button.classList.add('correct');
                button.innerHTML += ' <strong>✓ Resposta Correta!</strong>';
            } else {
                button.classList.add('wrong');
                button.innerHTML += ' <strong>✕ Resposta Incorreta!</strong>';
            }
        });
    });

});