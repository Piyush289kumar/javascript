/* Question 70: WAP to create an array taking the middle elements of the two arrays of integer and each length 3. */

function createNewArray(oneArrayAsArgs = [0, 0, 0], twoArrayAsArgs = [0, 0, 0]) {

    let middleElementOfOneArrayAsArgs = oneArrayAsArgs[Math.floor((oneArrayAsArgs.length - 1) / 2)];
    let middleElementOfTwoArrayAsArgs = twoArrayAsArgs[Math.floor((twoArrayAsArgs.length - 1) / 2)];

    let outPutArray = [];
    outPutArray.push(middleElementOfOneArrayAsArgs);
    outPutArray.push(middleElementOfTwoArrayAsArgs);

    return outPutArray;
}

let myFirstArray = [4, 2, 7];
let mySecondArray = [2, 4, 5];

console.log(createNewArray(myFirstArray, mySecondArray));
console.log(createNewArray());
