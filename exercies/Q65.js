/* Question 65: WAP to rotate the elements left in a given array of integers of length 3. */


function rotateArrayElement(arrayAsArgs) {

    arrayAsArgs.push(arrayAsArgs[0])
    arrayAsArgs.shift();
    return arrayAsArgs;
}

console.log(rotateArrayElement([3, 4, 5]));
console.log(rotateArrayElement([0, -1, 2]));
console.log(rotateArrayElement([7, 6, 5]));
