/* Question 12: Write a Javascript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

Solution : */

//// Method 1: Define a function named difference that takes a parameter inputNum
// function difference(inputNum) {
//     // Check if inputNum is less than or euqal to 13
//     if (inputNum <= 13) {
//         // If true, return the difference between 13 and inputNum
//         return 13 - inputNum;
//     } else {
//         return ((inputNum - 13) * 2);
//     }
// }

// console.log(difference(32));
// console.log(difference(11));

// Method 2: Using Arrow Function
const difference = (inputNum) => { return (inputNum <= 13) ? 13 - inputNum : ((inputNum - 13) * 2) };

console.log(difference(32));
console.log(difference(11));