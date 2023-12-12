/* Question 25: Write a JavaScript program to check whether two given integer values are in the range 20 to 99 (inclusive). Return true if either or them falls within the range. 

Solution :*/

function checkInteger(anyNumber1, anyNumber2){
    return ((anyNumber1 >= 50 && anyNumber1<= 99) || (anyNumber2 >= 50 && anyNumber2<= 99)) ? true : false;
}

console.log(checkInteger(12,101));
console.log(checkInteger(52,80));
console.log(checkInteger(15,99));


