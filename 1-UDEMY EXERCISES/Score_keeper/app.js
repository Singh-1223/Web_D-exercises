const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const resetbutton = document.querySelector('#reset');
const SelWinScore= document.querySelector('#selectwinscore')

let p1num = 0 // to keep track of p1 score;
let p2num = 0 // to keep track of p2 score;
let winningscore = 3; // score to win
let isGameOver = false; // check whether game going on or not

p1button.addEventListener('click', function () {

    if (!isGameOver) {
        p1num += 1;
        if (p1num === winningscore) {
            isGameOver = true;
            p1score.classList.add('winner');
            p2score.classList.add('looser');
        }
        p1score.textContent = p1num;
    }
})

p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2num += 1;
        if (p2num === winningscore) {
            isGameOver = true;
            p2score.classList.add('winner');
            p1score.classList.add('looser');
        }
        p2score.textContent = p2num;
    }
})

resetbutton.addEventListener('click', resetall)

SelWinScore.addEventListener('change',function(){
    
    winningscore=parseInt(this.value);
    resetall();
})

function resetall() {
    p1score.textContent = "0";
    p2score.textContent = "0";
    p1num=0;
    p2num=0;
    isGameOver=false;
    p1score.classList.remove('winner','looser');
    p2score.classList.remove('winner','looser');
}





