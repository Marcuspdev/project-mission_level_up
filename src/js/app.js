'use strict';

const avatar = document.querySelector('#avatar');

const tela1 = document.querySelector('#tela1');

const tela2 = document.querySelector('#tela2');

const tela3 = document.querySelector('#tela3');

/* Escolha do avatar */

const sonic = document.querySelector('.sonic');

sonic.addEventListener('click', function() {
    avatar.src = "assets/img/sonic.png";

    tela1.style.display = "none";

    tela2.style.display = "block";

    console.log("Avatar: sonic");
});


const superman = document.querySelector('.superman');

superman.addEventListener('click', function() {
    avatar.src = "assets/img/superman.png";

    tela1.style.display = "none";

    tela2.style.display = "block";

    console.log("Avatar: superman");
});


const chapolin = document.querySelector('.chapolin');

chapolin.addEventListener('click', function() {
    avatar.src = "assets/img/chapolin.png";

    tela1.style.display = "none";

    tela2.style.display = "block";

    console.log("Avatar: chapolin");
});

/* Escolha de mapa */

const mapa_normal = document.querySelector('#mapa_normal');

mapa_normal.addEventListener('click', function() {
    tela3.style.backgroundColor = "cyan";

    tela2.style.display = "none";

    tela3.style.display = "block";
});


const mapa_invertido = document.querySelector('#mapa_invertido');

mapa_invertido.addEventListener('click', function() {
    tela3.style.backgroundColor = "blueviolet";

    tela2.style.display = "none";

    tela3.style.display = "block";
});

/* Botão de voltar para o início */

const voltar = document.querySelector('#voltar');

voltar.addEventListener('click', function() {
    tela1.style.display = "block";

    tela3.style.display = "none";
});