/* Question 66: WAP to check whether N appears in th first or last position of a given array of integers. The array length must be larger than or equal to 1. */


// Custom Prototype For All Array Objects

Array.prototype.customFunction = function (ValArgs) {
    if (this.length < 1) {
        return "Array Length Must be larger than or equal to 1";
    } else {
        return ((this[0] == ValArgs || this[this.length - 1] == ValArgs) ? true : false);
    }
}


let myArray = [1, 3, 5, 1]
let valParam = 1;

console.log(myArray.customFunction(valParam));