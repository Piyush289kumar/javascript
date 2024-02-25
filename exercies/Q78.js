/* Question 78: Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  

Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'. */

// const str = 'abcdxyz'

const repalceChar = (inputAsParam) => {
  let result = [];

  const strToArry = inputAsParam.split("");

  for (let index = 0; index < strToArry.length; index++) {
    result.push(String.fromCharCode(strToArry[index].charCodeAt() + 1));

    if (result[index] === "[") result[index] = "A";
    if (result[index] === "{") result[index] = "a";
  }

  return result.join("");
};

console.log(repalceChar("abcdxyz"));

