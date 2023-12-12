/* Question 17: Write a Javascript program to check two given integers whether one is positive & another is negative */

( (inputOne = 0, inputTwo = 0) => {
    return console.log(((inputOne < 0 && inputTwo >= 0) || (inputOne >= 0 && inputTwo < 0)));;
})(1,-6)