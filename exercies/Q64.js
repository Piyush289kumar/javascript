/* Question 64: WAP to compute the sum of three elements of a given array of integers of length 3. */

function sumofarray(arrayAsArgs) {

    return arrayAsArgs.reduce((acc, currVal) => {
        return acc + currVal;
    });

}

let myAr = [1, 23, 5, 1, 70, 1];

console.log(sumofarray(myAr));

