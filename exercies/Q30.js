/* Question 30: Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. */


function checkNumberRange(anyNumber1 = 0, anyNumber2 = 0) {
    if (anyNumber1 < 0 || anyNumber2 < 0) {
        anyNumber1 = anyNumber2 = 0;
    }
    let condition1 = ((40 <= anyNumber1 && anyNumber1 <= 60) && (40 <= anyNumber2 && anyNumber2 <= 60))
    let condition2 = ((70 <= anyNumber1 && anyNumber1 <= 100) && (70 <= anyNumber2 && anyNumber2 <= 100))

    return (condition1 || condition2) ? true : false;
}

console.log(checkNumberRange(44,56));
console.log(checkNumberRange(70,95));
console.log(checkNumberRange(50,89));
console.log(checkNumberRange(10,60));
console.log(checkNumberRange(70,80));