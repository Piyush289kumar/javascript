/* Question 32: Write a porgram to check whether a specified character exists between the 2nd and 4th position in a given string.

Solution : */

function checkCharAtPosition(anyString, anyChar) {
    return (anyString.substring(1,4).search(anyChar) != -1) ? true : false;
}

console.log(checkCharAtPosition("Python", "y"));
console.log(checkCharAtPosition("Javascript", "a"));
console.log(checkCharAtPosition("Console", "o"));
console.log(checkCharAtPosition("Console", "C"));
console.log(checkCharAtPosition("Console", "e"));
console.log(checkCharAtPosition("Javascript", "s"));