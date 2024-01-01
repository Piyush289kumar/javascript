/* Question 53: WAP to create an updated stirng of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

Solution: */

// Method 1: substring()

function updatedString(anyString){
    return (anyString.length >= 3)? anyString.substring(anyString.length-3).repeat(4):false;   
}

// Method 2: slice()

function updatedString(anyString){
    return (anyString.length >= 3)? anyString.slice(-3).repeat(4):false;   

}


console.log(updatedString('Python 3.0'));
console.log(updatedString('JS'));
console.log(updatedString('JavaScript'));
console.log(updatedString('Python'));
console.log(updatedString('ac'));
console.log(updatedString('abc'));