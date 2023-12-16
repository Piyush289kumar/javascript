/* Question 38: Write a Javascript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

Solution : */

function checkRightMostNumber(integerOne = 0, integerTwo = 0, integerThree = 0){

    return ((integerOne % 10 === integerTwo % 10 && integerOne % 10 === integerThree % 10 ) ? true : false);
}

console.log(checkRightMostNumber(10,10,10));
console.log(checkRightMostNumber(10,10,11));
