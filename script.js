const dinossaur = document.querySelector('.dino');
const background = document.querySelector('.background');
let jumping = false;
let posi = 0;
var theEnd = false;

//handle key up
function handleku(event) {
    if (event.keyCode === 32) {
        if (!jumping) {
            toJump();
        }
    }
}

function toJump() {
    
    jumping = true;

    let upGap = setInterval(() => {
        
        if (posi >= 170) {
            clearInterval(upGap);
        
        //to down
        let downGap = setInterval(() => {
            if (posi <= 0) {
                clearInterval(downGap)
                jumping = false;
            }
            else {
                posi -= 20;
                dinossaur.style.bottom = posi + 'px';
            }
        },20)
        //to up
        }else {
            posi += 20;
            dinossaur.style.bottom = posi + 'px';
        }

    },20 )
}

function cactusGenesis() {
    const catcus = document.createElement('div');
    let posiCactus = 1000;
    var ramdomizeCatus = Math.random() * 6000;

    catcus.classList.add('cactus');
    catcus.style.left = 1000 + 'px';
    background.appendChild(catcus);

    let leftTimer = setInterval (() => {
        if (posiCactus < -60) {
            // out of screen
            clearInterval(leftTimer);
            background.removeChild(catcus);
        }
        else if (posiCactus > 0 && posiCactus < 60 && posi < 60) {
            clearInterval(leftTimer);
            theEnd = true;
            document.body.innerHTML = '<p class="gameOver">Game Over<\p>';
        }
        else {
            posiCactus -= 10;
            catcus.style.left = posiCactus + 'px';
        }
    }, 20);
    setTimeout(cactusGenesis, ramdomizeCatus);
}

cactusGenesis();
document.addEventListener('keyup', handleku);
