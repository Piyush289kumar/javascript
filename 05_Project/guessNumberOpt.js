let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector(".guessSubmit");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);

    console.log(`playGame: ${guess}`);
  });
}

function validateGuess(guess) {
  console.log(`validateGuess: ${guess}`);

  if (isNaN(guess)) {
    alert("Please Enter a Number");
  } else if (guess < 1) {
    alert("Please Enter a Number More then 1");
  } else if (guess > 100) {
    alert("Please Enter a Number less then 100");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Small`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too Big`);
    endGame();
  } else {
    displayGuess(guess);
  }
}

function displayGuess(guess) {
  console.log(`DisplayGuess: ${guess}`);

  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disable", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
