/* Question 43: Write a JavaScript program to reverse a given string.

Solution : */

function reverseString(anyString = "none"){
    
    return anyString.split('').reverse().join('');
}

console.log(reverseString("abc"));
console.log(reverseString("Piyush"));
console.log(reverseString("Palak"));
console.log(reverseString("cba"));