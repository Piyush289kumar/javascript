/* Question 87: WAP to find the kth greatest element in a given array of integers. */

const kGreatestElement = (arrayAsParams, kthEle = 1) => {
    try {
        if (arrayAsParams.length <= 0 || kthEle >= arrayAsParams.length) {
            return false;
        }

        const copyArr = [...arrayAsParams];
        copyArr.sort((a, b) => b - a);
        return `${kthEle} most greatest element is : ${copyArr[kthEle - 1]}`;
    } catch (error) {
        return error.message;
    }
};

const myArr = [1, 2, 6, 4, 5];

console.log(kGreatestElement(myArr, 3));
console.log(kGreatestElement([-10, -25, -47, -36, 0], 1));
