/* Question 67: WAP to check whether the first and last elements are the same in a given array of integers of length N. */


// Custom Prototype For All Array Objects

Array.prototype.customFunction = function () {
    if (this.length < 1) {
        return "Array Length Must be larger than or equal to 1";
    } else {
        return ((this[0] == this[this.length - 1]) ? true : false);
    }
}


let myArray = [10,20,30,10]

console.log(myArray.customFunction());