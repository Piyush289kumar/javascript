/* Question 21: Write a Javascript program to create another string from a given string with the first character of the given string added to the front and back.
Solution :  */

function createString(anyString) {
    let stringArr = anyString.split('');
    let firstLetterOfString = stringArr[0];
    return firstLetterOfString + anyString + firstLetterOfString;
}

console.log(createString("one"));
console.log(createString("a"));
console.log(createString("ab"));
console.log(createString("abc"));