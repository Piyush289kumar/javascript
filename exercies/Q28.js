/* Question 28: Write a JavaScript program to find the largest of three given integers.
Solution :  */

function findLargestInteger(anyInteger1 = 0, anyInteger2 = 0, anyInteger3 = 0) {
    return myArray = new Array(anyInteger1, anyInteger2, anyInteger3).sort((a,b)=>{a-b}).shift();
}

console.log(findLargestInteger(1,0,1));
console.log(findLargestInteger(0,-10,-20));
console.log(findLargestInteger(1000, 510, 440));