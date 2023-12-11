// Question 6: Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// Solution


function januaryOnSunday(startYear, endYear) {
    
    for (let year = startYear; year <= endYear; year++) {
        let sundayDayIndex = 0;
        let januaryMonthIndex = 1;
        let myDate = new Date(year, sundayDayIndex, januaryMonthIndex);

        if (myDate.getDay() === sundayDayIndex) {
            console.log(`1st January is being a Sunday : ${year}\n-----------------------------`);
        }        
    }
}

januaryOnSunday(2020, 2026)