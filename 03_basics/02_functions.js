//* The following example shows nested functions:

// function addSquares(a, b) {
//     function square(x) {
//         return x * x;
//     }
//     return square(a) + square(b);
// }

// console.log(addSquares(2,6));


// * Since the inner function forms a closure, you can call the outer functions and specify arguments for both the outer and inner function:

// function outSide(x){
//     function inSide(y){
//         return x + y;
//     }
//     return inSide;
// }

// const fnInside = outSide(3); // Think of it like: give me a function that adds 3 to whatever you give it
// console.log(fnInside(5));
// console.log(outSide(3)(5));

// Multiply-nested functions
// function A(x) {
//     function B(y) {
//         function C(z) {
//             console.log(x + y + z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1); // logs 6 (which is 1 + 2 + 3)

// Example
function outSide(){
    const x = 5;
    function inSide(x){
        return x * 2;
    }
    return inSide;
}

console.log(outSide()(10)); // 20 (instead of 10)