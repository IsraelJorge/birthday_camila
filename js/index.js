"use strict";
const audio = document.querySelector('#song');
const kirby = document.querySelector('.kirby');
const btnReset = document.querySelector('.reset');
const kirbyAndando = 'img/kirby-andando-cotado.gif';
function andar(e) {
    playMusica();
    console.log(e.code);
    if (e.keyCode === 39) {
        if (kirby.getAttribute('src') != kirbyAndando) {
            kirby.src = kirbyAndando;
            consertarTamanhoKirby();
        }
        let posicao = kirby.offsetLeft;
        if (posicao >= 1230) {
            posicao = 0;
        }
        posicao += 7;
        console.log(posicao);
        kirby.style.left = `${posicao}px`;
        if (posicao >= 1126) {
            const kirbyConcluido = kirby;
            kirbyConcluido.src = 'img/kirby-concluido-cortado.gif';
            kirbyConcluido.style.height = '100px';
            kirbyConcluido.style.top = '250px';
            parabens();
        }
    }
}
function resetar() {
    const letreiro = document.querySelector('.letreiro');
    letreiro.classList.remove('trasicao');
    kirby.src = 'img/kirby-parado.gif';
    kirby.style.left = '20px';
    consertarTamanhoKirby();
}
function trocarImagemParado(e) {
    if (e.keyCode === 39) {
        if (kirby.getAttribute('src') != 'img/kirby-concluido-cortado.gif') {
            kirby.src = 'img/kirby-parado.gif';
        }
    }
}
function pausaMusica(e) {
    if (e.keyCode === 32) {
        audio.pause();
    }
}
function playMusica() {
    if (!(audio.paused))
        return;
    audio.currentTime = 30;
    audio.play();
}
function parabens() {
    const letreiro = document.querySelector('.letreiro');
    letreiro.classList.add('trasicao');
}
function consertarTamanhoKirby() {
    kirby.style.height = '80px';
    kirby.style.top = '264px';
}
window.addEventListener('keydown', andar);
window.addEventListener('keyup', trocarImagemParado);
btnReset.addEventListener('click', resetar);
window.addEventListener('keydown', pausaMusica);
