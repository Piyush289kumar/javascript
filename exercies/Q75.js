/* Question 75: WAP to swap the first and last elements of a given array of integers. The array length should be at least 1. */


function swapElement(arrAsParam) {
    if (arrAsParam.length <= 1) {
        return arrAsParam
    }

    const lastEl = arrAsParam.pop()
    const firstEl = arrAsParam.shift()
    const newArr = arrAsParam;
    newArr.push(firstEl)
    newArr.unshift(lastEl)

    return newArr

}

console.log(swapElement([1, 2, 2, 3, 4]));
console.log(swapElement([0, 2, 1]));
console.log(swapElement([3]));

