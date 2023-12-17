/* Question 40: Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

Solution : */

function checkNumber(inputOne = 0, inputTwo = 0) {
  return (
    inputOne === 15 ||
    inputTwo === 15 ||
    inputOne + inputTwo === 15 ||
    Math.abs(inputOne - inputTwo) === 15
  );
}

console.log(checkNumber(15,9));
console.log(checkNumber(25,15));
console.log(checkNumber(7,8));
console.log(checkNumber(25,10));
console.log(checkNumber(5,9));
console.log(checkNumber(7,9));
console.log(checkNumber(9,25));
