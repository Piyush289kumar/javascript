/* Question 50: Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
Solution:  */

function checkEqualLetter(anyString = "none"){

    return anyString.replace(/[^p]/g,'').length == anyString.replace(/[^t]/g,'').length ? true: false;
    
}


console.log(checkEqualLetter("paatpss"));
console.log(checkEqualLetter("paatps"));
console.log(checkEqualLetter("pptta"));
console.log(checkEqualLetter("ppttaap"));