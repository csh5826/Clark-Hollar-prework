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
    "mikejones",
    "jadakiss",
    "50cent",
    "yingyangtwins",
    "andre3000",
    "bigboi",


]
const maxWrong = 8; // max # of wrong guesses
var mistakes = 0; // # of wrong guesses
var correctGuessed = []; // correctly guessed letters
var wrongGuessed = []; // incorrectly guessed letters
var guess; //user guess
var wins= 0; // how many wins the player has


//picks a random word from the above array
function randomWord() {
    answer = rapperNames[Math.floor(Math.random() * rapperNames.length)];
}



//the random word's letters are replaced with _'s
function start() {
    randomWord();
    correctGuessed = [];
    wrongGuessed = [];
    mistakes = 0;
    for (var i = 0; i < answer.length; i++) {
        correctGuessed[i] = "_";
}
checkLetter();
//sends the word to the html file displayed in _ _ _ characters
document.getElementById("nameSpotlight").innerHTML = correctGuessed.join(" ");
console.log(answer);
}
//
function checkLetter() {
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
      var found = false; //boolean to see if letter was found
      for (i = 0; i < answer.length; i++) {
        if (guess === answer[i]) {
          correctGuessed[i] = guess;
          document.getElementById("nameSpotlight").innerHTML = correctGuessed.join(" ");
          found = true;
        }
      }
      var win = checkWin();
      //now all letters have been checked, return any found
      if (found && win);
      else if (found) return; //if yes return
      
      // if wrong
      else if (wrongGuessed.indexOf(guess) === -1) {
        wrongGuessed.push(guess);
        mistakes++;
        checkIfGameLost();
        checkWin();
        document.getElementById("wrongGuesses").innerHTML = wrongGuessed.join(" ");
        document.getElementById("mistakes").innerHTML = mistakes;
      }
    }
  }

  function checkIfGameLost() {
      if (mistakes === maxWrong) {
          start();

      }
  }

  function checkWin() {
    if (correctGuessed.indexOf("_") === -1) {
      wins++;
      start();
      document.getElementById("totalWins").innerHTML = wins;
      document.getElementById("wrongGuesses").innerHTML = wrongGuessed.join(" ");
      document.getElementById("mistakes").innerHTML = mistakes;
      return(true);
    }
  }
start();