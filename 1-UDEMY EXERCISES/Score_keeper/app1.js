const p1={
     num:0,
     button : document.querySelector('#p1button'),
     score: document.querySelector('#p1score')
}

const p2={
     num:0,
     button : document.querySelector('#p2button'),
     score: document.querySelector('#p2score')
}


const resetbutton = document.querySelector('#reset');
const SelWinScore= document.querySelector('#selectwinscore')

let winningscore = 3; // score to win
let isGameOver = false; // check whether game going on or not

function updateScore(player, opponent){
    if (!isGameOver) {
        player.num += 1;
        if (player.num === winningscore) {
            isGameOver = true;
            player.score.classList.add('winner');
            opponent.score.classList.add('looser');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.score.textContent = p1num;
    }
}
p1.button.addEventListener('click', function () {
     updateScore(p1,p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2,p1);
})

resetbutton.addEventListener('click', resetall)

SelWinScore.addEventListener('change',function(){
    
    winningscore=parseInt(this.value);
    resetall();
})

function resetall() {
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score.textContent = "0";
        p.num=0;
        p.score.classList.remove('winner','looser');
        p.button.disabled=false;
    }
   
}





