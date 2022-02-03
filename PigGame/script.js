'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

var scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Dice Roll Functionality
btnRoll.addEventListener('click', 
function(){
    if(playing){
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for dice = 1 : If true then switch to next player
        if(dice !== 1){
            // Add dice number to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            // Switch to next player
            switchPlayer();
        }
    }

});

btnHold.addEventListener('click', function(){ 
    if(playing){   
        // 1. Add current score to active player's score    
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if score >= 100
        if(scores[activePlayer] >= 20){
            // Finish game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');

            // btnRoll.classList.add('hidden');
            // btnHold.classList.add('hidden');
            // diceEl.classList.add('hidden');
        }
        else{
            // Else switch to next player
            switchPlayer();
        }
    }
    
});

btnNew.addEventListener('click', function(){
    if(!playing){
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        diceEl.classList.remove('hidden');
        activePlayer = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        scores = [0, 0];
        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
        document.querySelector('.score').textContent = 0;
        playing = true;
        currentScore = 0;

    }
})







