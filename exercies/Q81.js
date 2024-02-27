/* Question 80: WAP to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swappin at most one pair of elements. */

const checkArrays = (firstArry, SecondArray, ...props) => {

    let result = false;

    if (firstArry.length != SecondArray.length) return "Length is not match";

    // Swap Elements of it
    let temp = 0;
    for (let index = 0; index < firstArry.length; index++) {
        temp = firstArry[index];
        firstArry[index] = SecondArray[index];
        SecondArray[index] = temp;
    }

    // Case : If Length Same, Check Atleast One Pair is Same Elements
    for (let idx = 0; idx < firstArry.length; idx++) {
        if (firstArry[idx] === SecondArray[idx]) {
            return (result = true);
        }
    }

    // Restore Array
    let restoreTmp = 0;
    for (let index = 0; index < firstArry.length; index++) {
        restoreTmp = firstArry[index];
        firstArry[index] = SecondArray[index];
        SecondArray[index] = restoreTmp;
    }

    return (result = false);
};

console.log(checkArrays([10, 20, 30, 40], [30, 10, 20, 40]));
