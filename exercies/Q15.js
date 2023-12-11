/* Question 15: Write a Javascript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

Solution : */

((inputNum1, inputNum2) => {return (inputNum1 === 50 || inputNum2 === 50 || (inputNum1 + inputNum2 === 50)) ? console.log(true) : console.log(false);})(20, 30);