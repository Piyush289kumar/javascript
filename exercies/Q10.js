/* Question 10: Write a JavaScript exercise to create a variable using a user-defined name
   Solution*/

// Declare a Variable named var_name and assign it the string 'abcd'
let var_name = 'abcd';

// Declare a variable named n and assign it the number 120
let n = 120;

// Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = n;

// Log the value of the property 'abc' of the 'this' object to the console
console.log(this[var_name]);