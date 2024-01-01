/* Question 54: WAP to extract the first half of a even string.
Solution: */

function extractEvenStr(anyString = 'NULL') {
    return anyString.length % 2 == 0 ? anyString.slice(0,(anyString.length/2)): anyString;
}

console.log(extractEvenStr('Python'));
console.log(extractEvenStr('JavaScript'));
console.log(extractEvenStr('PHP'));
console.log(extractEvenStr('abcd'));
console.log(extractEvenStr('abc'));