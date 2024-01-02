/* Question 57: WAP to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

Solution: */

function moveString(anyStirng = 'null') {

    return (anyStirng.length > 3)? anyStirng.slice(-3) + anyStirng.slice(0,-3):false;
}

console.log(moveString('Python'));
console.log(moveString('abcxyz'));