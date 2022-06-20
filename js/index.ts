const audio = document.querySelector('#song') as HTMLAudioElement;
const kirby = document.querySelector('.kirby') as HTMLImageElement;
const btnReset = document.querySelector('.reset') as HTMLButtonElement;

const kirbyAndando = 'img/kirby-andando-cotado.gif';


window.addEventListener('keypress', (e: any) => {
    
    playMusica();

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

        kirby.style.left = `${posicao}px`;

        if (posicao >= 1126) {
            const kirbyConcluido : HTMLImageElement = kirby;
            kirbyConcluido.src = 'img/kirby-concluido-cortado.gif'
            kirbyConcluido.style.height = '100px';
            kirbyConcluido.style.top = '250px';

            parabens();
        }
   
    }
});

window.addEventListener('keyup',(e:any) => {
    if(e.keyCode === 39){
        if (kirby.getAttribute('src') != 'img/kirby-concluido-cortado.gif') {
            kirby.src = 'img/kirby-parado.gif';
        }
    }
});

btnReset.addEventListener('click', () => {
    const letreiro = document.querySelector('.letreiro') as HTMLDivElement;
    letreiro.classList.remove('trasicao'); 

    kirby.src = 'img/kirby-parado.gif';
    kirby.style.left = '20px';
    consertarTamanhoKirby();
    
});


window.addEventListener('keydown', (e: any) => {
    if (e.keyCode === 32) {
        audio.pause();
    }
});

function playMusica() {
    if (!(audio.paused)) return;
    
    audio.currentTime = 30;
    audio.play();
}

function parabens() {
    const letreiro = document.querySelector('.letreiro') as HTMLDivElement;
    
    letreiro.classList.add('trasicao');        
}

function consertarTamanhoKirby() {
    kirby.style.height = '80px';
    kirby.style.top = '264px';
}







