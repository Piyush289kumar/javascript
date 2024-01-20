/* Question 73: WAP to test whether an array of integers of length 2 does not contains 1 or 3. */

const searchInArray = (
    arrayAsArgs = [0],
    searchEleAsArgs1,
    searchEleAsArgs2
) => {
    if (!arrayAsArgs.length < 2) {
        return arrayAsArgs.includes(searchEleAsArgs1) ||
            arrayAsArgs.includes(searchEleAsArgs2)
            ? false
            : true;
    }

    return false;
};

let myArray = [7, 8];
searchEle1 = 1;
searchEle2 = 3;
console.log(searchInArray(myArray, searchEle1, searchEle2));
