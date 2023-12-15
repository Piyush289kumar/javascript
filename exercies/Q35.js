/* Question 35: Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

Solution :  */

function checkSum(anyInteger1 = 0, anyInteger2 = 0) {
  let sum = anyInteger1 + anyInteger2;
  return ( (50 <= (anyInteger1 + anyInteger2) && (anyInteger1 + anyInteger2) <= 80) ? 65 : 80);
}

console.log(checkSum());
console.log(checkSum(90,80));
console.log(checkSum(30,20));