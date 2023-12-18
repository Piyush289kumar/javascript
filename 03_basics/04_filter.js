/* Filter */

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word)=>{ return word.length > 6})

// console.log(result);

// const filtered = [12,5,8,130,44].filter(isBigEnough);

// function isBigEnough(value) {
//     return value >= 10;
// };

// console.log(filtered);

// const arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];

// let invalidEntries = 0;

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }

//   invalidEntries++;
//   return false;
// }

// const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// // Filtered Array
// // [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]

// console.log(`Number of Invalid Entries = ${invalidEntries}`);
// // Number of Invalid Entries



const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


function filterData(arr, query){
    return arr.filter((el)=> el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterData(fruits, "ap"));
console.log(filterData(fruits, "ba"));
console.log(filterData(fruits, "an"));