/* Question 20: Write a Javascript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 

Solution : */

function changePositionFrontToEnd(anyString = "slankArgb") {

    let stringContainer = anyString.split('');

    let tempVariable = stringContainer[0];
    stringContainer[0] = stringContainer[stringContainer.length - 1];
    stringContainer[stringContainer.length - 1] = (tempVariable).toLowerCase();

    firstLetterCaps = stringContainer.join('').charAt(0).toUpperCase();
    for (let index = 0; index < stringContainer.length; index++) {
        stringContainer[index] = stringContainer[index + 1];
    }
    stringContainer.pop();

    return firstLetterCaps + stringContainer.join('');

}

console.log(changePositionFrontToEnd("Swift"));
console.log(changePositionFrontToEnd());
console.log(changePositionFrontToEnd("ab"));
console.log(changePositionFrontToEnd("abc"));