/* Question 29: Write a Javascript program to find the closest value to 100 from two numerical values.

Solution : */

function closestTo100(anyNumber1 = 101, anyNumber2 = 102) {
    if (anyNumber1 === anyNumber2) {
        return false;
    }
    let diffrenceA = Math.abs(100 - anyNumber1);
    let diffrenceB = Math.abs(100 - anyNumber2);
    let diffrenceArray = new Array(diffrenceA, diffrenceB).sort((a, b) => a - b).shift();

    return (diffrenceA == diffrenceArray ? anyNumber1 : anyNumber2);
}

console.log(closestTo100(90,89));
console.log(closestTo100(-90,-89));
console.log(closestTo100(90,90));