// word list of names to guess
var rapperNames = [
    "jayz",
    "eminem",
    "lilwayne",
    "nas",
    "youngjeezy",
    "akon",
    "camron",
    "ti",
    "kanyewest",
    "snoopdogg",
    "ludacris",
    "dmx",
    "bustarhymes",
    "nelly",
    "missyelliott",


]
const maxWrong = 8; // max # of wrong guesses
var mistakes = 0; // # of wrong guesses
var correctGuessed = []; // correctly guessed letters
var wrongGuessed = []; // incorrectly guessed letters
var guess; //user guess
var wins= 0; // how many wins the player has
var gameStart = false; // used to start the game to account for # of wrong guesses and wins

function newGame() {
    mistakes = maxWrong;
    gameStart = false;

}

//picks a random word from the above array
function randomWord() {
    answer = rapperNames[Math.floor(Math.random() * rapperNames.length)];
}



//the random word's letters are replaced with _'s
function start() {
    for (var i = 0; i < answer.length; i++) {
        correctGuessed[i] = "_";
}
//sends the word to the html file displayed in _ _ _ characters
document.getElementById("nameSpotlight").innerHTML = correctGuessed.join(" ");
console.log(answer);
}
//
function checkLetter() {
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
      var found = false; //lets use bool to check if a letter was found
      for (i = 0; i < answer.length; i++) {
        if (guess === answer[i]) {
          correctGuessed[i] = guess;
          document.getElementById("nameSpotlight").innerHTML = correctGuessed.join(" ");
          found = true;
        }
      }
      //now all letters have been checked, was any found
      if (found) return; //if yes return
      
      // if wrong
      if (wrongGuessed.indexOf(guess) === -1) {
        wrongGuessed.push(guess);
        mistakes++;
        checkIfGameLost();
        document.getElementById("wrongGuesses").innerHTML = wrongGuessed.join(" ");
        document.getElementById("mistakes").innerHTML = mistakes;
      }
    }
  }

  function checkIfGameLost() {
      if (mistakes === maxWrong) {
          document.getElementById("GameOver").innerHTML = "You lost."
      }
  }


randomWord();
start();
checkLetter();