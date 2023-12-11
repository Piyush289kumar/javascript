/* Question 13: Write a Javascript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

Solution:*/

let sumOfTwo = (inputNum1, inputNum2) => { return (inputNum1 == inputNum2) ? ((inputNum1 + inputNum2) * 3) : (inputNum1 + inputNum2) };

console.log(sumOfTwo(10,20));
console.log(sumOfTwo(10,10));