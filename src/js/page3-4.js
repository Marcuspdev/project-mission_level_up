'use strict';

const secaoAvatar = document.querySelector('#choiceavatar');
const secaoMundo = document.querySelector('#choiceword');

const dustin = document.querySelector('#dustin');
const eddie = document.querySelector('#eddie');
const gorgon = document.querySelector('#gorgon');

let avatar = '';
let mundo = '';

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

function avancarParaMapa() {
    window.location.href = "pages/" + mundo + ".html?avatar=" + avatar;
}

if(mundoNormal) {
    mundoNormal.addEventListener('click', function() {
        mundo = "mundo-normal";
        avancarParaMapa();
    });
}

if(mundoInvertido) {
    mundoInvertido.addEventListener('click', function() {
        mundo = "mundo-invertido";
        avancarParaMapa()
    });
}