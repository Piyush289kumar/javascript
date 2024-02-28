/* Question 83: WAP to check whether it is possible to replace $ in a given expression x $ y = z with one of the signs +, -, * or / to obtain a correct expression.
For Example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z.  */


const checkExpression = (intputOne, inputTwo, inputThree) => {

    return (intputOne + inputTwo === inputThree || intputOne - inputTwo === Math.abs(inputThree) || intputOne * inputTwo === inputThree || intputOne / inputTwo === inputThree)

}


console.log(checkExpression(10, 30, 300));
console.log(checkExpression(10, 25, 35));
console.log(checkExpression(10, 25, 250));
console.log(checkExpression(30, 25, 5));
console.log(checkExpression(100, 25, 4.0));
console.log(checkExpression(100, 25, 25));