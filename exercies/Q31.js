/* Question 31: Write a javascript program to find the largest number from the two given positive integers. The two numbers are in the range 40....60 inclusive. */

function findLargestNumber(anyNumber1 = 0, anyNumber2 = 0) {
    if ((40 <= anyNumber1 && anyNumber1 <= 60 && 40 <= anyNumber2 && anyNumber2 <= 60)) {
        return (anyNumber1 > anyNumber2) ? anyNumber1 : anyNumber2;
    } else {
        console.log("Inputs are Out range..!!Range is [40 to 60]");
        return false;
    }

}

console.log(findLargestNumber(55, 55));
console.log(findLargestNumber(45,60));
console.log(findLargestNumber(25,60));
console.log(findLargestNumber(45,80));
