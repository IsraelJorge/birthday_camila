const audio = document.querySelector('#song') as HTMLAudioElement;
const kirby = document.querySelector('.kirby') as HTMLImageElement;


function parabens() {
    const letreiro = document.querySelector('.letreiro') as HTMLDivElement;
    
    letreiro.classList.add('trasicao');        
}

function playMusica() {
    if (!(audio.paused)) return;
    
    audio.currentTime = 30;
    audio.play();
}
    
window.addEventListener('keydown', (e:any) => {
    
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
})


window.addEventListener('keydown', (e:any) => {
    if (e.keyCode === 32) {
        audio.pause();
    }
})


