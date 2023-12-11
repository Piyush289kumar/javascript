/* Question 14: Write a Javascript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

Solution: */

((inputNum) => { return (inputNum <= 19) ? console.log(19 - inputNum) : console.log(((inputNum - 19) * 3)) })(22);