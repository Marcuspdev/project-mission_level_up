'use strict';

const dados = new URLSearchParams(window.location.search);

const avatarEscolhido = dados.get('avatar');

const nivelAtual = dados.get('nivel');

const avatarImg = document.querySelector('#avatar');

if (avatarEscolhido) {
    avatarImg.src = "../assets/images/cabeça" + avatarEscolhido + ".png"
}