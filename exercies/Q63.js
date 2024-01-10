/* Question 63: WAP to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

Solution:*/

const createString = (strParam, numParam) =>{

    return (strParam.length >= numParam) ? strParam.replace(strParam.slice(numParam, strParam.length - numParam),'') : false;

}

console.log(createString('javascript', 2));
console.log(createString('javascript', 3));
console.log(createString('javascript', 4));