/* Question 19: Write a Javascript program to remove a character at the specified position in a given string and return the modified string.

Solution: */

function removeCharAtSpecifiedPosition(anyString, anyPosition) {
    console.log("Original String : " + anyString);
    (anyPosition <= 0) ? anyPosition = 0 : anyPosition--;
    let convertToArray = anyString.split('');
    for (let index = anyPosition; index < convertToArray.length; index++) {
        convertToArray[index] = convertToArray[index + 1];
    }
    convertToArray.pop();
    return convertToArray.join('');
}

console.log(removeCharAtSpecifiedPosition("Python", 0));

console.log(removeCharAtSpecifiedPosition("Python", 3));

console.log(removeCharAtSpecifiedPosition("Python", 5));