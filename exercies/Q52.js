/* Question 52: WAP to create one string of specified copies(positive Numbers) of a given string.
Solution: */

// Method 1:

function createString(anyString = "nullString", numberOfCopy = 1) {
  let copyString = "";
  for (let index = 0; index < numberOfCopy; index++) {
    copyString = copyString.concat(anyString);
  }
  return copyString;
}

console.log(createString("abc", 2));

// Method 2:
function stringCopies(anyString = "nullStringParam", numberOfCopy = 1) {
  return numberOfCopy < 0 ? false : anyString.repeat(numberOfCopy);
}
console.log(stringCopies("abc", 5));
