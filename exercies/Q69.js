/* Question 69: WAP to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. */


function updatedArray(arrayAsArgs) {
    let largestElementOfArray = Math.max(...arrayAsArgs);
    return arrayAsArgs.map((el) => { return el = largestElementOfArray })
}


let myArray = [12, 10, 3];
console.log(updatedArray(myArray));
