'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc((Math.random()*20) +1);
const check = document.querySelector('.check');
const again = document.querySelector('.again');


// Runs the game.
check.addEventListener('click', function () {

    // If input field is empty
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){

        document.querySelector('.message').innerHTML = 'Please input a Number to play !!!';

    }else if(guess === secretNumber){
        // If guess equals secret number
        document.querySelector('.message').innerHTML = ' Yayyy Correct Number!!!';
        document.querySelector('.number').innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore;
        }

    }else if(guess > secretNumber){
        // If guess is Greater than secret number
        if(score > 1){
            document.querySelector('.message').innerHTML = 'Too High!!!';
            score--;
            document.querySelector('.score').innerHTML = score;
        }else{
            document.querySelector('.message').innerHTML = 'Game Over!!!';
            document.querySelector('.score').innerHTML = 0;
        } 
    }else if(guess < secretNumber){
        // If guess is Less than secret number
        if(score > 1){
            document.querySelector('.message').innerHTML = 'Too Low!!!';
            score--;
            document.querySelector('.score').innerHTML = score;
        }else{
            document.querySelector('.message').innerHTML = 'Game Over!!!';
            document.querySelector('.score').innerHTML = 0;
        }
    }

})

// Reset game while keeping highscore.
again.addEventListener('click', function () {
    score= 20;
    secretNumber = Math.trunc((Math.random()*20) +1);
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.message').innerHTML = 'Start guessing...';
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
  
  

})