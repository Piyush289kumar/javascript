/* Question 77: WAP to find the longest string from a given array of strings. */

const longestStr = (arrayAsParam) => {

    // Method 1 : 
    // let len = 0;

    // for (let idx = 1; idx < arrayAsParam.length - 1; idx++) {
    //     if (arrayAsParam[idx].length < arrayAsParam[idx + 1].length) {
    //         len = idx + 1
    //     };
    // }

    // return arrayAsParam[len]


    // Method 2 : Using Sort()
    const newArray = arrayAsParam.sort((a, b) => (b.length - a.length));
    return newArray[0]
}

const myArry = ['a', 'aa', 'aaa', 'aaaaa', 'aaaa']
console.log(longestStr(myArry));