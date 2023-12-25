/* Question 49: Write a JavaScript program to count the number of vowels in a given string. 

Solution: */

function countVowels(anyString) {
    
   return anyString.replace(/[^aeiou]/g, '').length;
   
    
}

console.log(countVowels("piyush"));