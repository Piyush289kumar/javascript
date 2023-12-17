/* Question 41: Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

Solution : */

function checkMultipleOfaNumber(inputOne = 0, inputTwo = 0) {
  if (
    (inputOne % 7 == 0 || inputOne % 11 == 0) &&
    (inputTwo % 7 == 0 || inputTwo % 11 == 0)
  ) {
    return false;
  } else {
    return inputOne % 7 == 0 ||
      inputOne % 11 == 0 ||
      inputTwo % 7 == 0 ||
      inputTwo % 11 == 0
      ? true
      : false;
  }
}
console.log(checkMultipleOfaNumber(14, 21));
console.log(checkMultipleOfaNumber(14, 20));
console.log(checkMultipleOfaNumber(16, 20));
console.log(checkMultipleOfaNumber(2, 2));
