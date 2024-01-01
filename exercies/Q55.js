/* Question 55: WAP to create a new string without the first and last characters of a given string.
Solution: */

function createNewString(anyString) {
    
    return (anyString.length >= 3) ? anyString.slice(1,-1): anyString;
}


console.log(createNewString('JavaScript'));
console.log(createNewString('JS'));
console.log(createNewString('PHP'));
console.log(createNewString('abe'));