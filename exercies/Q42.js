/* Question 42: Write a JavaScript program to check whether a given number exists in the range of 40...10000

Solution : */

function checkNumberInRange(startRange = 0, endRange = 0, anyInteger = 0) {
  if (!(40 <= anyInteger && anyInteger <= 10000)) {
    return false;
  }
  return startRange <= anyInteger && anyInteger <= endRange ? true : false;
}

console.log(checkNumberInRange(40, 4000, 40));
console.log(checkNumberInRange(80, 320, 79));
console.log(checkNumberInRange(89, 4000, 30));
