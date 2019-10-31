var scores, roundScore, activePlayer, dice , gamePlaying;
var lastDice ;
var finalScore, limiteScore;
init();

document.querySelector('.btn-rollDice').addEventListener('click', function() {
    //the code that be execute when we click rool dice button
    //step1 : random number
    dice = Math.floor(Math.random() * 6) + 1 ;//to cast the random to integer number

    //step2 : display the result 
    var diceDOM = document.getElementById('dice');// or : var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "images/dice-" + dice + ".png";

    //step3 :
    if(dice === 6 && lastDice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#player-score' + activePlayer).textContent = '0';
        nextPlayer();
    }
    else if(dice !== 1){
        //add the score obtenu
        roundScore += dice;
        document.querySelector('#current-score' + activePlayer).textContent = roundScore;
    }else{
        //pass to the next player
        nextPlayer();
    }
    lastDice = dice;
});

document.querySelector('.btn-hold').addEventListener('click' , function () {
    //add the current Score to the global Score 
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    }
    //update the current score 
    document.querySelector('#player-score' + activePlayer).textContent = scores[activePlayer];
    //get the value of final-score input  
    finalScore = document.querySelector('.final-score').value;
    console.log(finalScore);

    if(finalScore){
        limiteScore = finalScore;
    }else{
        limiteScore = 100;
    }
    //check if the player is winner or not
    if(scores[activePlayer] >= limiteScore){
        //document.getElementByClassName('current-score').textContent = '0';
        document.querySelector('#player-name' + activePlayer).textContent = 'WINNER !';
        document.querySelector('.player' + activePlayer).classList.remove('active');
        document.querySelector('.player' + activePlayer).classList.add('winner');

        var diceDOM = document.getElementById('dice');// or : var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = "images/Dice-PNG.png";
        //si il gagne, il ne peut pas gagner plus de score donc on va pas additioner scores[activepLayer] += roundScore ;
        gamePlaying= false;
    }else{
        //pass to next player 
        nextPlayer();
    }
});
function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1 ;
    roundScore = 0;
    document.getElementById('current-score1').textContent = '0';
    document.getElementById('current-score2').textContent = '0';
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
    if(dice === 1){
        var diceDOM = document.getElementById('dice');// or : var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = "images/dice-1.png";
    }else{
    var diceDOM = document.getElementById('dice');// or : var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "images/Dice-PNG.png";
    }
}
document.querySelector('.btn-new').addEventListener('click', init );

function init(){
    scores = [0,0,0];
    roundScore =0;
    activePlayer = 1;
    gamePlaying = true;

    var diceDOM = document.getElementById('dice');// or : var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "images/Dice-PNG.png";

    document.getElementById('player-name1').textContent = 'Player 1';
    document.getElementById('player-name2').textContent = 'Player 2';

    document.getElementById('current-score1').textContent = '0';
    document.getElementById('current-score2').textContent = '0';
    document.getElementById('player-score1').textContent = '0';
    document.getElementById('player-score2').textContent = '0';

    document.querySelector('.player1').classList.remove('winner');
    document.querySelector('.player2').classList.remove('winner');

    document.querySelector('.player1').classList.remove('active');
    document.querySelector('.player2').classList.remove('active');
    //faire le player1 active(first player play)
    document.querySelector('.player1').classList.add('active');
}