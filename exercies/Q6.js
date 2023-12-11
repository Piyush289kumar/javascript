// Question 6: Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// Solution

// Loop throgh the years from 2014 to 2050 (inclusive)
for (let year = 2014; year <= 2050; year++) {

    // Create a Date Object for January 1st of the current year
    let sundayDayIndex = 0;
    let januaryMonthIndex = 1;
    let myDate = new Date(year, sundayDayIndex, januaryMonthIndex);

    // Check if January 1st is a Sunday (where Sunday correspond to day index 0)
    if (myDate.getDay() === sundayDayIndex) {
        // log a message if January 1st is a Sunday for the current year
        console.log(`1st January is being a Sunday : ${year}`);
    }
    
}

// log another separator to conclude the output
console.log(`---------------------`);