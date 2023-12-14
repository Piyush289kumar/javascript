/* Question 34: Write a Javascript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

Solution : */

function produceString(anyString = "N/A") {

    return (anyString.length <= 3) ? anyString.toUpperCase() : anyString.substring(0,3).toLocaleLowerCase() + anyString.slice(3,anyString.length);
}

console.log(produceString());
console.log(produceString("abc"));
console.log(produceString("ABCD"));
console.log(produceString("Javascript"));
console.log(produceString("JAVASCRIPT"));
console.log(produceString("Java"));
console.log(produceString("PYTHON"));