const dinossaur = document.querySelector('.dino');

function handleku(event) {
    if (event.keyCode === 32) {
        toJump();
        console.log("press space");
    }
}

function toJump() {
    let posi = 0;

    let upGap = setInterval(() => {
        
        if (posi >= 200) {
            clearInterval(upGap);
        }
        //to down
        let downGap = setInterval(() => {
            if (posi <= 0) {
                clearInterval(downGap)
            }
            else {
                posi -= 30;
                dinossaur.style.bottom = posi + 'px';
            }
        },30)
        //to up
        posi += 30;
        dinossaur.style.bottom = posi + 'px';

    },30 )
}

document.addEventListener('keyup', handleku);