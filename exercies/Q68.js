/* Question 68: WAP to reverse the elements of given array of integers of length N. */

let myArray = [1, 2, 3, 4, 5];

// Method 1:
// ======================

// console.log(myArray.reverse());



// Methos 2:
// ======================

function reverse3(arrayAsArgs) {
    return myArray.map((el, idx, arrayAsArgs) => {
        return arrayAsArgs[(arrayAsArgs.length - 1) - idx];
    })
}

console.log(reverse3(myArray));

