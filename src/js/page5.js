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

// Seleciona os elementos de nível normal

const nivelNormal1 = document.querySelector('#normal1');
const nivelNormal2 = document.querySelector('#normal2');
const nivelNormal3 = document.querySelector('#normal3');
const nivelNormal4 = document.querySelector('#normal4');
const nivelNormal5 = document.querySelector('#normal5');

// Muda a posição do Avatar segundo seu nível


if (nivelAtual == 0) {
    avatarImg.style.left = '18%'
    avatarImg.style.bottom = '50%'
}

if (nivelAtual == 1) {
    avatarImg.style.left = '35%'
    avatarImg.style.bottom = '12%'
}

if (nivelAtual == 2) {
    avatarImg.style.left = '58.5%'
    avatarImg.style.bottom = '35.1%'
}

if (nivelAtual == 3) {
    avatarImg.style.left = '51.2%'
    avatarImg.style.bottom = '41%'
}

if (nivelAtual == 4) {
    avatarImg.style.left = '72.8%'
    avatarImg.style.bottom = '51%'
}

if (nivelAtual == 5) {
    avatarImg.style.left = '50.1%'
    avatarImg.style.bottom = '18%'
}

// Verifica em qual nível o jogador está e desabilita os níveis anteriores & Redireciona para a página correspondente ao nível normal selecionado, passando o avatar e o nível como parâmetros na URL

if (nivelNormal1) {
    if (nivelAtual >= 1) {
        nivelNormal1.classList.add('CONCLUIDO');
    }
    nivelNormal1.addEventListener('click', function() {
        window.location.href = 'normal-fases/nor-fase1.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelNormal2) {
    if (nivelAtual >= 2) {
        nivelNormal2.classList.add('CONCLUIDO');
    }
    nivelNormal2.addEventListener('click', function() {
        window.location.href = 'normal-fases/nor-fase2.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelNormal3) {
    if (nivelAtual >= 3) {
        nivelNormal3.classList.add('CONCLUIDO');
    }
    nivelNormal3.addEventListener('click', function() {
        window.location.href = 'normal-fases/nor-fase3.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelNormal4) {
    if (nivelAtual >= 4) {
        nivelNormal4.classList.add('CONCLUIDO');
    }
    nivelNormal4.addEventListener('click', function() {
        window.location.href = 'normal-fases/nor-fase4.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};

if (nivelNormal5) {
    if (nivelAtual == 5) {
        nivelNormal5.classList.add('CONCLUIDO');
    }
    nivelNormal5.addEventListener('click', function() {
        window.location.href = 'normal-fases/nor-fase5.html?avatar=' + avatarEscolhido + '&nivel=' + nivelAtual;
    });
};