/* Question 39: Write a JavaScript program to check from three given integers whether a number is greather than or equal to 20. It is less than the others. 

Solution : */

function checkNumber(
  anyIntegerOne = 0,
  anyIntegerTwo = 0,
  anyIntegerThree = 0
) {
  let a = anyIntegerOne;
  let b = anyIntegerTwo;
  let c = anyIntegerThree;

  return (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < a || c < b))
  );
}

console.log(checkNumber());
console.log(checkNumber(23, 45, 10));
console.log(checkNumber(23, 23, 10));
console.log(checkNumber(21, 66, 75));
