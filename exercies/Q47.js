/* Question 47: Write a JavaScript program to convert letters of a given string alphabetically. (Alphabet Sort) */

console.log(alphabetSoup("Java"));
console.log(alphabetSoup("java"));
console.log(alphabetSoup("ABab"));
console.log(alphabetSoup("abC"));
console.log(alphabetSoup("Python"));

function alphabetSoup(anyString = "0") {
    
    return anyString.split('').sort().join('');
}
