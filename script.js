"use strict";
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

*/
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const changeNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const changeScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    displayMessage("No Number!");
    //When player wins
  } else if (guess === SecretNumber) {
    displayMessage("Correct Number!");
    changeNumber(SecretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? "Too high!" : "Too low!");
      score--;
      changeScore(score);
    } else {
      displayMessage("You lost the game!");
      changeScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  changeScore(score);
  changeNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
