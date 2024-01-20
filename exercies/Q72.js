/* Question 72: WAP to test whether an array of integers of length 2 contains 1 or 3. */

const searchInArray = (
    arrayAsArgs = [0],
    searchEleAsArgs1,
    searchEleAsArgs2
) => {
    if (!arrayAsArgs.length < 2) {
        return arrayAsArgs.includes(searchEleAsArgs1) ||
            arrayAsArgs.includes(searchEleAsArgs2)
            ? true
            : false;
    }

    return false;
};

let myArray = [7, 3];
searchEle1 = 1;
searchEle2 = 3;
console.log(searchInArray(myArray, searchEle1, searchEle2));
