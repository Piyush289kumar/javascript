/* Question 74: WAP to test whether a given array of integers contains 30 and 40 twice. The array length should be at least 0, 1, or 2.*/

function checkFnc(params) {
    if (params.length < 3) {
        return "Array Length Is Short";
    }

    let a = 0;
    let b = 0;

    params.map((el) => {
        if (el == 30) {
            a++;
        } else if (el == 40) {
            b++;
        }
    })

    if ((a >= 2) && (b >= 2)) {
        return "Test Passed ....."
    } else {
        return "Test Falied ....."
    }

}


// const myArray = [40,30,40,30,1,2]
const myArray = [40, 2, 40, 30, 30]
console.log(checkFnc(myArray));