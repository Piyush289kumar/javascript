// Question 9: Write a JavaScript program to calculate the days left before Christmas.

// Solution


function dayLeft(eventName, anyDate, anyMonth) {
    // Covert Month index (0 to 11) to (1 to 12)
    anyMonth--;
    // Get the current date
    let toDay = new Date();

    // Create a Date object for Specific date of the current year
    let specificDate = new Date(toDay.getFullYear(), anyMonth, anyDate);

    // Check if the current date is after Given Month & Date
    if (anyMonth == toDay.getMonth() && anyDate < toDay.getDate()) {
        // If true, Set Specific Event for the next year
        specificDate.setFullYear(specificDate.getFullYear() + 1);
    }

    // Calculate the difference in days between today & Specific Date
    // 1000 Milisecond * 60 * 60 Second * 24 Hour = 1 Day
    let oneDay = 1000 * 60 * 60 * 24;

    // Log the number of days left until Specific Date to the Console
    console.log((Math.ceil((specificDate.getTime() - toDay.getTime()) / oneDay)) + " Days left until " + eventName);
}

dayLeft("My BrithDay", 23, 12)