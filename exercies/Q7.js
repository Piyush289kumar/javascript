// Question 7: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Solution

// Generate a random integer between 1 and 10 (inclusive)
let generateNumber = Math.ceil(Math.random() * 10);

// Log the generated random number to the console
console.log(generateNumber);

// Prompt the user to guess a number between 1 to 10 (inclusive)
// let guessTheNumber = prompt("Guess the number between 1 and 10 (inclusive)");

let guessTheNumber = 5;

if (guessTheNumber === generateNumber) {
    console.log("Good Work..");
} else {
    console.log(`Not Matched, the number was : ${generateNumber}`);
}