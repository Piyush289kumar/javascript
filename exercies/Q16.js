/* write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 
Solution: */

function testHundred(anyInput) {
    // Return true if the absolute difference between 100 and anyInput is less then or equal to 20,
    // or the absolute difference between 400 and anyInput is less than or equal to 20; otherwise, return false
    return ((Math.abs( 100 - anyInput ) <= 20) || (Math.abs(400 - anyInput) <= 20));
}

console.log(testHundred(10));
console.log(testHundred(90));
console.log(testHundred(99));
console.log(testHundred(199));
console.log(testHundred(200));
console.log(testHundred(379));