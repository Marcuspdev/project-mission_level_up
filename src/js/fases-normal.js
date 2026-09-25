document.addEventListener('DOMContentLoaded', () => {

    // 1. BARRA DE PROGRESSO DE LEITURA
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) progressBar.style.width = scrolled + '%';
    });

    // 2. PLAYGROUND AO VIVO DE HTML/CSS (PÁGINAS 1 E 2)
    const codeInput = document.getElementById('code-input');
    const codePreview = document.getElementById('code-preview');
    if (codeInput && codePreview) {
        const updatePreview = () => { codePreview.innerHTML = codeInput.value; };
        codeInput.addEventListener('input', updatePreview);
        updatePreview();
    }

    // 3. CONTROLES DO FLEXBOX (PÁGINA 3)
    const flexDir = document.getElementById('flex-dir');
    const flexJustify = document.getElementById('flex-justify');
    const flexAlign = document.getElementById('flex-align');
    const flexDemo = document.getElementById('flex-demo');

    if (flexDemo && flexDir && flexJustify && flexAlign) {
        const updateFlex = () => {
            flexDemo.style.flexDirection = flexDir.value;
            flexDemo.style.justifyContent = flexJustify.value;
            flexDemo.style.alignItems = flexAlign.value;
        };
        flexDir.addEventListener('change', updateFlex);
        flexJustify.addEventListener('change', updateFlex);
        flexAlign.addEventListener('change', updateFlex);
    }

    // 4. CALCULADORA DE XP (PÁGINA 4)
    const btnCalcXp = document.getElementById('btn-calc-xp');
    const userLevelInput = document.getElementById('user-level');
    const xpResult = document.getElementById('xp-result');

    if (btnCalcXp && userLevelInput && xpResult) {
        btnCalcXp.addEventListener('click', () => {
            const lvl = parseInt(userLevelInput.value) || 0;
            const xpTotal = lvl * 150;
            xpResult.textContent = `Nível ${lvl} identificado! Você acumulou um total de ${xpTotal} XP no Roadmap! 🔥`;
        });
    }

    // 5. INTERATIVIDADE DO DOM (PÁGINA 5)
    const btnChangeText = document.getElementById('btn-change-text');
    const btnToggleClass = document.getElementById('btn-toggle-class');
    const btnResetDom = document.getElementById('btn-reset-dom');
    const domTargetElement = document.getElementById('dom-target-element');
    const domTitle = document.getElementById('dom-title');
    const domText = document.getElementById('dom-text');

    if (domTargetElement) {
        btnChangeText?.addEventListener('click', () => {
            domTitle.textContent = "Texto Alterado com Sucesso! ⚡";
            domText.textContent = "Você acabou de modificar a árvore do DOM usando JavaScript.";
        });

        btnToggleClass?.addEventListener('click', () => {
            domTargetElement.classList.toggle('active');
        });

        btnResetDom?.addEventListener('click', () => {
            domTitle.textContent = "Elemento Alvo Original";
            domText.textContent = "Este texto mudará quando você clicar nos botões!";
            domTargetElement.classList.remove('active');
        });
    }

    // 6. CONSUMO DE API REAL / FETCH (PÁGINA 6)
    const btnFetchData = document.getElementById('btn-fetch-data');
    const apiResultBox = document.getElementById('api-result-box');
    const apiStatus = document.getElementById('api-status');

    if (btnFetchData && apiResultBox) {
        btnFetchData.addEventListener('click', async () => {
            apiStatus.textContent = "Status: Carregando dados da API...";
            apiResultBox.textContent = "Buscando dados no servidor remoto...";

            try {
                const response = await fetch('https://catfact.ninja/fact');
                const data = await response.json();

                apiStatus.textContent = "Status: Requisição 200 OK! Dados recebidos.";
                apiResultBox.textContent = JSON.stringify(data, null, 2);
            } catch (error) {
                apiStatus.textContent = "Status: Erro na requisição.";
                apiResultBox.textContent = "Falha ao conectar com a API: " + error.message;
            }
        });
    }

    // 7. SISTEMA UNIVERSAL DE QUIZZES
    const quizButtons = document.querySelectorAll('.quiz-btn[data-correct]');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.getAttribute('data-correct') === 'true';
            const parentSection = button.closest('.quiz-container');
            const localFeedback = parentSection ? parentSection.querySelector('.quiz-feedback') : quizFeedback;

            parentSection.querySelectorAll('.quiz-btn').forEach(btn => btn.classList.remove('correct', 'wrong'));

            if (localFeedback) {
                localFeedback.classList.remove('hidden', 'success', 'error');
                if (isCorrect) {
                    button.classList.add('correct');
                    localFeedback.classList.add('success');
                    localFeedback.textContent = '🎉 Excelente! Resposta Correta!';
                } else {
                    button.classList.add('wrong');
                    localFeedback.classList.add('error');
                    localFeedback.textContent = '❌ Tente novamente! Essa opção não está correta.';
                }
            }
        });
    });

});