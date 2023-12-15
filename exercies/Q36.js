/* Question 36: Write a JavaScript program to check from two given intergers whether one of them is 8 or their sum or difference is 8.
Solve :  */

function check8(anyInteger1 = 0, anyInteger2 = 0) {

    return (anyInteger1 === 8 || anyInteger2 === 8 || (anyInteger1+anyInteger2 === 8) || (Math.abs(anyInteger1 - anyInteger2) === 8));

}

console.log(check8(18,17));
console.log(check8(2, 2));
console.log(check8(8, 0));
console.log(check8(4, 4));
console.log(check8(2, 10));



