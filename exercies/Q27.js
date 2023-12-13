/* Question 27: Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

Solution : */

function checkStrAt5Position(anyString) {

    return (anyString.substring(4, 10) == "script") ? anyString.replace("script",'') : anyString ;
}

console.log(checkStrAt5Position("javascript"));
console.log(checkStrAt5Position("coffeescript"));
console.log(checkStrAt5Position("abc"));
