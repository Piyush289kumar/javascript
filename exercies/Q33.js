/* Question 33 : Write a Javascript program that checks whether the last digit of three positive integers is the same.
Solution :  */

function checkLastDigit(anyNumber1 = 0, anyNumber2 = 0, anyNumber3 = 0) {

    if (anyNumber1 < 0 || anyNumber2 < 0 || anyNumber3 < 0) { return false };


    return (anyNumber1 % 10 === anyNumber2 % 10 && anyNumber2 % 10 === anyNumber3 % 10 && anyNumber1 % 10 === anyNumber3 % 10) ? true : false;
}

console.log(checkLastDigit(20,30,400));
console.log(checkLastDigit(-20,30,400));
console.log(checkLastDigit(20,-30,400));
console.log(checkLastDigit(20,30,-400));
