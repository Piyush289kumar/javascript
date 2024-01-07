/* Question 60: WAP to test whether a string ends with "Script". The string length must be greater than or equal to 6.
Solution: */

// Method 1: 
// function checkLastString(strParam) {
//     try {
//         if (strParam.length < 6) {        
//             throw ("Length is Greater Then 6 is Must");
//         }    
//         try {
//             if (strParam.slice(-6) === 'script') {
//              console.log(`Found: ${strParam}`);   
//              return true;
//             } else {
//                 throw("Not Found");
//             }
//         } catch (error) {
//             console.log(`Inner Error: ${error}`);
//             return false;
//         }
//     } catch (error) {
//         console.log(`Error : ${error}`);
//         return false;
//     }    
// }
// // checkLastString('java');
// console.log(checkLastString('java'));
// console.log(checkLastString('javasdfdfdf'));
// console.log(checkLastString('javascript'));
// console.log(checkLastString('java script'));
// console.log(checkLastString('java scripts'));

// Method 2: ES6

function endStrCheck(strParam) {
    return strParam.endsWith('script');
}

console.log(endStrCheck('javascript'));
