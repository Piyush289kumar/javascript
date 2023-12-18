/* Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

Example : "PYTHON" => "P-Q, Y-Z, T-U, H-I, O-P, N-O" = "QZUIPO"

Main Logic : console.log(stringArrayConverted[0]);
             console.log(String.fromCharCode(stringArrayConverted[0].charCodeAt(0) + 1));

Solution :  */

function letterChnages(anyString) {
  let stringArrayConverted = anyString.split("");

  //   Iterate through each character in the Array
  for (let index = 0; index < stringArrayConverted.length; index++) {
    // Caesar Cipher: Shift each character by one position in the alphabet
    switch (stringArrayConverted[index]) {
      case "":
        break;
      case "z":
        stringArrayConverted[index] = "a";
        break;

      case "Z":
        stringArrayConverted[index] = "A";
        break;

      default:
        stringArrayConverted[index] = String.fromCharCode(
          1 + stringArrayConverted[index].charCodeAt(0)
        );
        break;
    }

    // Convert vowel to uppercase
    switch (stringArrayConverted[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        stringArrayConverted[index] = stringArrayConverted[index].toUpperCase();
    }
  }

  // Join the modified characters back into a string return the result
  return stringArrayConverted.join('');
}

console.log(letterChnages("PYTHON"));
console.log(letterChnages("W3R"));
console.log(letterChnages("php"));
