'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//This is my first application and has a lot of repetitive code.

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  /*console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Correct Number!';
  */
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //When player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When the number is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score = score - 1; //score--
      document.querySelector('.score').textContent = score;
      //When the truns are over
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (guess < number && score > 1) {
    document.querySelector('.message').textContent = 'Too low!';
    score = score - 1; //score--
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = ' You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

//Implementing the Game logic
//Challange 1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
