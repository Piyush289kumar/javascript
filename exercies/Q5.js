// Question 5: Write a JavaScript program to determine whether a given year is a leap year in the Gregorian Calendar.
// Solution

// Define a function to check if a given year is a leap year
function leapYear(anyYear) {
    // Three conditions to find out the leap Year
    return (anyYear % 100 == 0) ? (anyYear % 400 === 0) : (anyYear % 4 === 0);
}


console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));
