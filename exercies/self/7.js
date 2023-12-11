// Question 7: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Solution

function guessNumberGame() {
    let gernarateRandomNumber = Math.ceil(Math.random() * 10);

    let userInput = 5;

    if (gernarateRandomNumber === userInput) {
        console.log("Good Work... Pass");
        console.log(`Number Was ==> ${gernarateRandomNumber}`);
    } else {
        console.log("Not Matched... Fail");
        console.log(`Number Was ==> ${gernarateRandomNumber}`);
    }
}

guessNumberGame();