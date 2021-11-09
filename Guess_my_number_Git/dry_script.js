'use strict';

// console.log(document.querySelector('.message').textContent) ;
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secreteNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secreteNumber;

//to reduce message code

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
   
    // When there is no input
    if(!guess){
        displayMessage('No Number!') ;

     // when player wins game
    } else if (guess === secreteNumber){
        displayMessage('Correct number!') ;
        document.querySelector('body').style.backgroundColor = '#60b347';
     
        // For high score implementation
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }

       // when number is differant
    } else if(guess !==secreteNumber){
        if(score > 1){
            displayMessage(guess > secreteNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
    }
    
}
});

// To reset using again button
document.querySelector('.again').addEventListener('click', function()
{
    displayMessage('Start Guessing...');
    score=20;
    secreteNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';


});