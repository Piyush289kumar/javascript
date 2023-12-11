let myArr = [5,4,3,2,6,7];

console.log(myArr);

position = 2;
inputNum = 3;

position--;


for (let index = myArr.length; index > position; index--) {    
    myArr[index] = myArr[index - 1];
}

myArr[position] = inputNum;


console.log(myArr);