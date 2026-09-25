'use strict';

const dados = new URLSearchParams(window.location.search);

const avatarEscolhido = dados.get('avatar');
const nivelAtual = Number(dados.get('nivel') || 0);
const avatarImg = document.querySelector('#avatar');
const avatarHead = document.querySelector('#cabeça');

if (avatarImg && avatarHead) {
    avatarImg.src = "../assets/images/" + avatarEscolhido + ".png"
    avatarHead.src = "../assets/images/cabeça" + avatarEscolhido + ".png"
}

// Seleciona os elementos de nível invertido

const nivelInvertido1 = document.querySelector('#invertido1');
const nivelInvertido2 = document.querySelector('#invertido2');
const nivelInvertido3 = document.querySelector('#invertido3');
const nivelInvertido4 = document.querySelector('#invertido4');
const nivelInvertido5 = document.querySelector('#invertido5');

// Muda a posição do Avatar segundo seu nível

if (nivelAtual == 1) {
    avatarImg.style.left = '6%'
    avatarImg.style.bottom = '52%'
}
else if (nivelAtual == 2) {
    avatarImg.style.left = '26%'
    avatarImg.style.bottom = '27%'
}
else if (nivelAtual == 3) {
    avatarImg.style.left = '44.1%'
    avatarImg.style.bottom = '32%'
}
else if (nivelAtual == 4) {
    avatarImg.style.left = '60.5%'
    avatarImg.style.bottom = '25%'
}
else if (nivelAtual == 5) {
    avatarImg.style.left = '83%'
    avatarImg.style.bottom = '50.5%'}

// Verifica em qual nível o jogador está e desabilita os níveis anteriores & Redireciona para a página correspondente ao nível invertido selecionado, passando o avatar e o nível como parâmetros na URL

if (nivelInvertido1) {
    if (nivelAtual >= 1) {
        nivelInvertido1.classList.add('CONCLUIDO');
    }
    nivelInvertido1.addEventListener('click', function() {
        window.location.href = 'inverse-fases/inver-fase1.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelInvertido2) {
    if (nivelAtual >= 2) {
        nivelInvertido2.classList.add('CONCLUIDO');
    }
    nivelInvertido2.addEventListener('click', function() {
        window.location.href = 'inverse-fases/inver-fase2.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelInvertido3) {
    if (nivelAtual >= 3) {
        nivelInvertido3.classList.add('CONCLUIDO');
    }
    nivelInvertido3.addEventListener('click', function() {
        window.location.href = 'inverse-fases/inver-fase3.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelInvertido4) {
    if (nivelAtual >= 4) {
        nivelInvertido4.classList.add('CONCLUIDO');
    }
    nivelInvertido4.addEventListener('click', function() {
        window.location.href = 'inverse-fases/inver-fase4.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelInvertido5) {
    if (nivelAtual == 5) {
        nivelInvertido5.classList.add('CONCLUIDO');
    }
    nivelInvertido5.addEventListener('click', function() {
        window.location.href = 'inverse-fases/inver-fase5.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};