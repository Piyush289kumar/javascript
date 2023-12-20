/* Question 48: Write a JavaScript program to check whether the characters 'a' and 'b' are separated by exactly 3 places anywhere (at least once) in a given string. 

Solution :*/

function checkString(anyString = "None") {

  // Method 1: My Method (Poor)
  // let stringToArray = anyString.split('');
  // return ((stringToArray[stringToArray.indexOf('a')] === 'a' && stringToArray[stringToArray.indexOf('a') + 4] === 'b') ?  true : false);

  // Method 2: Good
  return ((/a...b/).test(anyString) || (/b...a/).test(anyString));
}

console.log(checkString("Chainsbreak"));
console.log(checkString("pane borrowed"));
console.log(checkString("abCheck"));
