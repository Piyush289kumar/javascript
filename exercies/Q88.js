/* Question 88: Make an Object has only property/value which are Common on Input Objects. */

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

const commonItemInObject = {};

for (const key in input1) {
  input1.hasOwnProperty(key) &&
  input2.hasOwnProperty(key) &&
  input1[key] === input2[key]
    ? (commonItemInObject[key] = input1[key])
    : null;
}

console.log(commonItemInObject);
