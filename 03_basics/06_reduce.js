/* reduce function */

// const myArray = [1,2,3,4,5];

// const sumWithInitial = myArray.reduce((accumulator, currentValue) =>
// {
//     console.log(`Accumulator: ${accumulator} & CurrentValue: ${currentValue}`);
//     return accumulator + currentValue
// });

// console.log(sumWithInitial);

// const getMax = (el1, el2) => Math.max(el1, el2);
// const getMin = (el1, el2) => Math.min(el1, el2);

// const myArray = [1,100];

// const newArray = myArray.reduce(getMin, 1);

// console.log(myArray);
// console.log(newArray);

// const myArray = [15, 16, 17, 18, 19, 20, 21, 22, 23];

// function reducer(accumulator, currentValue, index){

//     const returns = accumulator + currentValue;

//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);

//     return returns;

// }


// myArray.reduce(reducer);

const objects = [{x:1}, {x:2}, {x:3}];

const sum = objects.reduce((accumulator, currentValue) => accumulator + currentValue.x,0);

console.log(sum);