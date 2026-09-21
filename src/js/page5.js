'use strict';

const dados = new URLSearchParams(window.location.search);

const avatarEscolhido = dados.get('avatar');

const avatarImg = document.querySelector('#avatar');

if (avatarEscolhido) {
    avatarImg.src = "../src/assets/images/cabeça" + avatarEscolhido + ".png"
}