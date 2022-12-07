var programing_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby"

]

let answer = '';
let maxwrong = 6;
let mistakes = 0;
let guessed = [];
let wordstatus=null;
function randomWord() {
  answer = programing_languages[Math.floor(Math.random ()* programing_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ?guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled',true);
  
  alert(answer);

  if (answer.indexOf(chosenLetter) >= 0) {
   guessedWord();
   checkIfGameWon();
  } else if(answer.indexOf(chosenLetter) === -1) {
  mistakes++;
  updatemistakes();
  checkIfGameLost();
  }
}
function checkIfGameWon() {
if(wordstatus === answer) {
  document.getElementById('keyboard').innerHTML = 'You won!!!';
}

}

function checkIfGameLost() {
  if(mistakes === maxwrong) {
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';

  }
  
  }

function guessedWord() {
  wordstatus = answer.split('').map(letter=> (guessed.indexOf(letter) >= 0 ? letter : " - "))
  .join('');

document.getElementById('wordSpotlight').innerHTML = wordstatus;
}

function updatemistakes() {
document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0,
  guessed = [],
  document.getElementById('hangmanPic').src = "han.jpg";

  randomWord();
  guessedWord();
  updatemistakes();
  generateButtons();
}

document.getElementById("MaxWrong").innerHTML = maxwrong
randomWord();
generateButtons();
guessedWord();