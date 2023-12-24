let ranNum = Math.floor((Math.random() * 10) + 1);

let form = document.querySelector('form');
const previousGuessDoc = document.getElementById('prg');
const LeftChanceDoc = document.getElementById('rmc');
const resultDoc = document.getElementById('result');
const subBtn = document.querySelector('#submitBtn');
let totalRound = 10;
const previousGuess = [];

form.addEventListener('submit', (el)=>{
    el.preventDefault();

    if (totalRound < 1) {
        resultDoc.innerHTML = "Loose! | Chance Finish"
        return true;
    }
    let userInput = document.querySelector('#inputNum').value;
    previousGuess.push(userInput);
    
    if (userInput == ranNum) {
        resultDoc.innerHTML = "Win!"
        return true;
    }else{
        previousGuessDoc.innerHTML = previousGuess;
        LeftChanceDoc.innerHTML = totalRound--;
    }
    

})






