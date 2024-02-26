/* Question 79: WAP to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two. */

// Method 2:

const diviArrFnc = (arrayAsParam) => {
  let result = [0, 0];

  for (let index = 0; index < arrayAsParam.length; index++) {
    if (index % 2 === 0) {
      result[0] += arrayAsParam[index];
    } else {
      result[1] += arrayAsParam[index];
    }
  }

  return result;
};

// =========================================================================================

// Method One
// const diviArrFnc = (arrayAsParam) => {
//   // Check Array has only positive elements
//   for (const el in arrayAsParam) {
//     console.log(arrayAsParam[el]);
//     if (arrayAsParam[el] < 0) {
//       return false;
//     }
//   }

//   let partOneArr = [];
//   let partTwoArr = [];

//   for (const element in arrayAsParam) {
//     if (element % 2 === 0) {
//       partOneArr.push(arrayAsParam[element]);
//     } else {
//       partTwoArr.push(arrayAsParam[element]);
//     }
//   }

//   partOneArr;
//   partTwoArr;

//   // sum of array elements
//   let sumOfPartOne = partOneArr.reduce((acc, cur) => acc + cur);
//   let sumOfPartTwo = partTwoArr.reduce((acc, cur) => acc + cur);

//   // Store in Array length of Two

//   let sumArr = [sumOfPartOne, sumOfPartTwo];
//   return sumArr;
// };

const myArr = [1, 3, 6, 2, 5, 10];
console.log(diviArrFnc(myArr));
