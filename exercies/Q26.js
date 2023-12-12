/* Question 25: Write a JavaScript program to check whether three given integer values are in the range 20 to 99 (inclusive). Return true if one or more or them are in the specified range.

Solution :*/

function checkInteger(anyNumber1 = 0, anyNumber2 = 0, anyNumber3 = 0) {
    return ((anyNumber1 >= 50 && anyNumber1 <= 99) || (anyNumber2 >= 50 && anyNumber2 <= 99) || (anyNumber3 >= 50 && anyNumber3 <= 99)) ? true : false;
}

console.log(checkInteger(50, 90, 99));
console.log(checkInteger(5, 9, 199));
console.log(checkInteger(65, 89, 199));
console.log(checkInteger(65, 9, 199));


