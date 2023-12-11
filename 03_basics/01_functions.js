// // function fnc(num = 0, string = "None") {
//     // let num1 = num++;
// //     return `Your Number is ==> ${++num} & Your String is ==> ${string}`;
// // }

// // console.log(fnc(1,"Piyush"));
// //console.log(fnc());


// // Object Menupulation

// // function myFunc(myObject) {
// //     myObject.make = "TATA";
// // };

// // const myCar = {
// //     make : "Mahindra",
// //     model : "Scorpio-N",
// //     year : 2023
// // };

// // console.log(myCar);

// // myFunc(myCar)
// // console.log(myCar);

// // Array Manupulation

// // function myFunc(theArr) {
// //     theArr[0] = 2;
// // }
// // const myArr = [45];

// // console.log(myArr);

// // myFunc(myArr)
// // console.log(myArr);



// // Storge Funciton in Varible

// const myFunc = function (inputNum){ return inputNum*inputNum;}
// console.log(myFunc(2));



// const numbers = [0,1,2,5,10];

// cube function 
// function cube(number) {
//     return number * number * number;
// }

// Cube of Each Element

// function map(fnc, anyArry){
//     const result = [];
//     for (let index = 0; index < anyArry.length; index++) {
//         result[index] = fnc(anyArry[index]);

//     }
//     return result;
// }

// console.log(map(cube, numbers));



// function cube(input) {
//     return input * input * input;
// }

// function sam(input) {
//     return input+=input;
// }


// const myArr = [0, 1, 2, 5, 10];

// console.log(myArr.map((item) => cube(item)));

// function innerFnc(anyFnc, anyArry) {
//     let result = [];
//     for (let index = 0; index < anyArry.length; index++) {
//         result[index] = anyFnc(anyArry[index]);
//     }
//     return result;
    
// }

// console.log(innerFnc(cube, myArr));
// console.log(innerFnc(sam, myArr));


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(1));


// function getAge() {
//     userName = "Piyush Kumar";
//     userAge = 21;

//     function addOneYearInAge() {
//         console.log(`Hi ${userName} You're now ${++userAge}`);
//     }
//     return addOneYearInAge();
// }

// getAge();


// function loop(input) {
 
//     if (input > 10) {
//         return;
//     }
//     console.log(input);
//     loop(++input);    
// }

// loop(0)

function foo(i) {
    if (i < 0) {
        console.log("-0");
        return;

    }
    console.log(`begin : ${i}`);
    foo(i - 1);
    console.log(`end : ${i}`);
}

foo(3);
console.log(-0-1);