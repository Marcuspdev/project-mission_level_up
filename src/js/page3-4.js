'use strict';

const secaoAvatar = document.querySelector('#choiceavatar');
const secaoMundo = document.querySelector('#choiceword');

const dustin = document.querySelector('#dustin');
const eddie = document.querySelector('#eddie');
const gorgon = document.querySelector('#gorgon');

let avatar = '';
let mundo = '';
let nivel = 0;

function avancarParaMundos() {
    if (secaoAvatar && secaoMundo) {
        secaoAvatar.classList.add('escondido');
        secaoMundo.classList.remove('escondido');
    }
}

// Quando o avatar for escolhido

if(dustin) {
    dustin.addEventListener('click', function() {
        avatar = "dustin";
        avancarParaMundos()
})};

if(eddie) {
    eddie.addEventListener('click', function() {
        avatar = "eddie";
        avancarParaMundos()
})};

if(gorgon) {
    gorgon.addEventListener('click', function() {
        avatar = "gorgon";
        avancarParaMundos()
})};

// Quando o mundo for escolhido

const mundoNormal = document.querySelector('#mundo-normal');
const mundoInvertido = document.querySelector('#mundo-invertido');
const audioMundoInvertido = new Audio('src/assets/audios/mundoinvertidoaudio.mp3');
const audioMundoNormal = new Audio('src/assets/audios/mundonormalaudio.mp3');


if(mundoNormal) {
    mundoNormal.addEventListener('click', function() {
        window.location.href = "src/pages/mundo-normal.html?avatar=" + avatar + "&nivel=" + nivel;
    });
    mundoNormal.addEventListener('mouseenter', function() {
        audioMundoNormal.play();
    });
    mundoNormal.addEventListener('mouseleave', function() {
        audioMundoNormal.pause();
    });
};

if(mundoInvertido) {
    mundoInvertido.addEventListener('click', function() {
        window.location.href = "src/pages/mundo-invertido.html?avatar=" + avatar + "&nivel=" + nivel;
    });
    mundoInvertido.addEventListener('mouseenter', function() {
        audioMundoInvertido.play();
    });
    mundoInvertido.addEventListener('mouseleave', function() {
        audioMundoInvertido.pause();
    });
};
