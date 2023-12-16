/* Question 37: Write a Javascript program to check a set of three numbers. If the three numbers are the same return 30 otherwise return 20 and if two numbers are the same return 40.

Solution :  */

function checkInputAreSame(anyInputOne, anyInputTwo, anyInputThree) {
  if (anyInputOne === anyInputTwo && anyInputTwo === anyInputThree) {
    return 30;
  }
  if (
    anyInputOne === anyInputTwo ||
    anyInputTwo === anyInputThree ||
    anyInputThree === anyInputOne
  ) {
    return 40;
  }
  return 20;
}

console.log(checkInputAreSame(8, 8, 8));

console.log(checkInputAreSame(8, 8, 18));

console.log(checkInputAreSame(8, 7, 18));

