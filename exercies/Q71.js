/* Question 71: WAP to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. */

const createNewArray = (arrayAsArgs = [0]) => {
    if (!arrayAsArgs.length < 1) {
        let returnArray = [];
        let arrayAsArgsFirstEl = arrayAsArgs[0];
        let arrayAsArgsLastEl = arrayAsArgs[arrayAsArgs.length - 1];
        returnArray.push(arrayAsArgsFirstEl, arrayAsArgsLastEl);

        return returnArray;
    }

    return false;
};

let myArray = [17, 12, 34, 78, -1];
console.log(createNewArray(myArray));
