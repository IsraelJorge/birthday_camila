"use strict";
const audio = document.querySelector('#song');
const kirby = document.querySelector('.kirby');
const btnReset = document.querySelector('.reset');
function parabens() {
    const letreiro = document.querySelector('.letreiro');
    letreiro.classList.add('trasicao');
}
function playMusica() {
    if (!(audio.paused))
        return;
    audio.currentTime = 30;
    audio.play();
}
window.addEventListener('keydown', (e) => {
    playMusica();
    if (e.keyCode === 39) {
        let posicao = kirby.offsetLeft;
        if (posicao >= 1230) {
            posicao = 0;
        }
        posicao += 7;
        kirby.style.left = `${posicao}px`;
        if (posicao >= 1170) {
            kirby.src = 'img/kirby-concluido-cortado.gif';
            kirby.style.height = '100px';
            kirby.style.top = '250px';
            parabens();
        }
    }
});
btnReset.addEventListener('click', () => {
    const letreiro = document.querySelector('.letreiro');
    letreiro.classList.remove('trasicao');
    kirby.src = 'img/kirby-andando-cotado.gif';
    kirby.style.height = '80px';
    kirby.style.left = '20px';
    kirby.style.top = '264px';
});
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
        audio.pause();
    }
});
