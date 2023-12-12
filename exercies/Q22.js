/* Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
Solution : */

function checkNumber(anyNumber) {
    return (anyNumber % 3 == 0 || anyNumber % 7 == 0);
}

console.log(checkNumber(12));
console.log(checkNumber(14));
console.log(checkNumber(10));
console.log(checkNumber(11));
