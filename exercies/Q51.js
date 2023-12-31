/* Question 51: Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas. */

function formateNumberToString(inputOne, inputTwo) {
    return Math.round(inputOne/inputTwo).toString().split('');
}


console.log(formateNumberToString(80,6));