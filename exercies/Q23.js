/* Question 23: Write a Javascript program to create a string from a given string. This is done by taking the last 3 characters and adding then at both the front and back. The string length must be 3 or more.

Solution : */

function makeNewString(anyString) {
    if (anyString.length < 3) {
        console.log("String Length Must be 3 or more.");
        return false;
    }
    let back3letters = anyString.substring(anyString.length - 3);
    return  back3letters + anyString + back3letters;
}

console.log(makeNewString("abc"));
console.log(makeNewString("ab"));
console.log(makeNewString("abcd"));
