/* Write a javascript program to check whether a string starts with 'Java' if it return true otherwise return false.

Solution :  */

function checkString(anyString) {

    if (anyString.length < 4) {
        console.log("The string lenth must be 4 or more");
        return false;
    }

    frontStr = anyString.substring(0, 4);

    return (frontStr == "Java" || frontStr == "java" || frontStr == "JAVA") ? true : false;

};


console.log(checkString("JavaScript"));
console.log(checkString("java"));
console.log(checkString("Python"));

