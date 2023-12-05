console.clear();


// const myArryOne = new Array(1,2,3,4,5,6);
// const myArryTow = new Array("A","B","C","D");

// console.log(myArryOne.concat(myArryTow));
// let newArry = [...myArryOne, ...myArryTow];
// console.log(newArry);

// copyWithin Method
// const arryOne = new Array(1,2,3,4,5,6,7,8);
// const newArry = arryOne.copyWithin(1,3,5);
// console.log(arryOne);
// console.log(newArry);

// every & some Method
// let myArryOne = new Array(100,302,130,4,200);
// // ====== Condition
// let conditionResult = (inputNum) => inputNum > 50;

// // ****** every Method
// console.log(myArryOne.every(conditionResult));

// // ****** some Method
// console.log(myArryOne.some((num)=>num<50));

// map Method

// const x = [1,2,3,4,5,6];
// let y = x.map(item =>{
//     return item+1;
// })
// console.log(y);


// filter Method

// const row_data = [1,2,3,4,5,6,7,8,9,10];
// let filter_arry = row_data.filter(item =>{
//     return item >= 5;
// })
// console.log(filter_arry);


// reduce Method

// const row_data = [1,2,3,4,5,6];
// let reduceArry = row_data.reduce((total, next) =>{
//     console.log(`${total} + ${next} => ${total}`);
//     return total + next;
// });
// console.log(reduceArry);


// reverse Method

// const row_data = [1,2,3,4,5,6,2,3,4,6,1];
// let reverseArr = row_data.sort();
// console.log(reverseArr);


// entries() Method

// const row_data = [1,2,3,4,5];
// console.log(row_data);
// let entries_data = row_data.entries();

// for (const iterator of entries_data) {
//     console.log(iterator);
// }

// fill Method
// const numbers = [1,2,3,4,5,6,7];
// console.log(numbers.fill(0,2,5));

// WAP to Create Function that Print 1 to N (Given Number)
// function fillNumber(n) {
//     return Array(n).fill(0).map((_, idx) => idx + 1);
// }
// console.clear()
// console.log(fillNumber(100));


// include Method

// const x = [1,2,3,4,5,6];

// console.clear();
// if (x.includes(5)) {
//     console.log("Yuppy!");
// } else {
//     console.log("Sad.... Let's add an that number");
// }

// join Method
// const x = [1,2,3,4,5,6];

// console.clear();
// console.log(x.join());


// Find Method
// const x = ["Apple","Mango","Watermalien","Banana"];
// const res = x.find(findApple);

// function findApple(item) {
//     return item === "Apple";
// }

// console.log(res);


// const stuArry = [
//     {
//         name: "Piyush Kumar Raikwar",
//         age: 21
//     },
//     {
//         name: "Palak Namdeo",
//         age: 21
//     },
//     {
//         name: "Aanchal Patel",
//         age: 21
//     }
//     ,
//     {
//         name: "Vaishali Thakur",
//         age: 21
//     }
// ];

// const res = stuArry.find(findeStu).name;

// function findeStu(stuArry) {
//     return stuArry.name === "Palak Namdeo";
// }

// console.log(res);

// const str = "12345";

// const myArry = Array.from(str, Number);
// console.log(myArry);

// const myNum = [1, 1, 2, 2, 3, 1, 2, 3, 4, 5, 6];

// const res = Array.from(new Set(myNum));

// console.log(res);


// const num = [1,2,3,4,5,1,2,4];

// const res = num.with();
// console.log(res);
// for (const iterator of res) {
//     console.log(iterator);
// }


console.log(Array.of(1,2,3,4,5,6,7));