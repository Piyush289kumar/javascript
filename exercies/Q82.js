/* Question 82: WAP that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not. */

const checkInt = (firstIntAsParam, secondIntAsParam, divAsParam) => {

    return (firstIntAsParam % divAsParam === 0 && secondIntAsParam % divAsParam === 0 || firstIntAsParam % divAsParam !== 0 && secondIntAsParam % divAsParam !== 0)
        ? true
        : false
}


console.log(checkInt(10, 25, 5));
console.log(checkInt(10, 20, 5));
console.log(checkInt(10, 20, 4));