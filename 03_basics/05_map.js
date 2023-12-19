// const array1 = [1,4,9,16];

// const map1 = array1.map((el)=> el * 2)

// console.log(array1.map((el) => Math.sqrt(el)));
// console.log(map1);

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
//   { key: 4, value: 40 },
// ];

// const reformattedArray = kvArray.map(({key, value}) => ({ [key] : value}));

// console.log(reformattedArray);
// console.log(kvArray);

const cart = [5, 15, 25];

let totalAmountToPay = 0;

// Method 1 : Poor
// const withTax = cart.map((cost)=>{
//     totalAmountToPay += cost;
//     return cost * 1.2;
// })

// console.log(`Total Amount To Pay: ${totalAmountToPay}`);
// console.log(withTax);

// Method 2 : Good

totalAmountToPay = cart.reduce((acc, el) => acc+ el)
let withTax = cart.map((cost) => cost * 1.2);

console.log(totalAmountToPay);
console.log(withTax);