/* Question 62: WAP to create a new string from a given string. This program removes the first and last characters of the string if the first and last character is 'P'. Return the original string if the condition is not satisfied. */

// Method 1:

// function checkString(strParam) {

//     if (strParam.startsWith('P') && strParam.endsWith('P')) {
//         return strParam.substring(1, strParam.length - 1);
//     } else if (strParam.startsWith('P')) {
//         return strParam.slice(1);
//     } else if (strParam.endsWith('P')) {
//         return strParam.slice(0, strParam.length - 1);
//     } else {
//         return strParam;
//     }
// }


// Method 2:
function checkString(strParam) {
    let startPos = 0;
    let endPos = strParam.length;

    if (strParam.length > 0 && strParam.charAt(0) === 'P') {
        startPos = 1;
    }

    if (strParam.length > 1 && strParam.charAt(strParam.length - 1) === 'P') {
        endPos--;
    }

    return strParam.substring(startPos, endPos);
}


console.log(checkString('PythonP'));
console.log(checkString('Piyush'));
console.log(checkString('PalakP'));
console.log(checkString('AlakP'));
console.log(checkString('Akash'));