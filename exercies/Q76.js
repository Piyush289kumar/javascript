/* Question 76: WAP to add two digits to a given positive integer of length two. */

const AddInt = (intAsParam) => {

    const intToArry = String(intAsParam).split('').map((item) => Number(item))
    if (intToArry.length < 2) return
    return intToArry.reduce((acc, crv) => acc + crv, 0)

}

console.log(AddInt(76));
console.log(AddInt(25));
console.log(AddInt(50));